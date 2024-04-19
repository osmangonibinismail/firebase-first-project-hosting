import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Login = () => {
    const {signIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();
    console.log('location the path name', location);

    const emailRef = useRef(null);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        // reset error an success
        setRegisterError('');
        setSuccess('');


        console.log(email, password)
        // add validation
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // Navigate after login

                navigate(location?.state ? location.state : '/');
                // if (result.user.emailVerified) {
                //     setSuccess('user logged in successfully')
                // }
                // else {
                //     alert('please verify your email address')
                // }

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log('please provide an email', emailRef.current.value)
            return;
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('please write a valid email')
            return;
        }

        // send validation email 
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please check your email')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)

            .then(result => {
                const loggedInUser = result.user;

                console.log(loggedInUser);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;

            console.log(loggedUser);
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-rose-950 mt-20 mb-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ">
                    <h1 className="text-5xl font-bold text-white">Login Now!</h1>
                    <p className="py-6 text-white">Login with email and password Reset password if you forgot password. Have an account or not?  If not then register first.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email"
                                ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="mb-4 relative">
                                <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered mb-4 w-full px-4 py-2" required />
                                <span className="absolute top-3 right-3"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700  text-center text-2xl">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600 text-center text-2xl">{success}</p>
                    }
                    <p className="text-center mt-4">Do not have an Account? please <Link className="" to='/register'><button className="btn btn-link font-bold">Register</button></Link></p>
                    <button onClick={handleGoogleSignIn} className="border border-indigo-600 btn mt-5 mb-2 ml-5 mr-5 font-bold text-xl">
                        <FaGoogle></FaGoogle>
                        <p className="ml-3">Login with Google</p>

                    </button>
                    <button onClick={handleGithubSignIn} className="border border-indigo-600 btn mt-2 mb-8 ml-5 mr-5 font-bold text-xl ">
                        <FaGithub></FaGithub>
                        <p className="ml-3">Login with Github</p>
                    </button>
                </div>
                <div data-aos="fade-in">Content to animate</div>
                AOS.init();
            </div>
        </div>
    );
};

export default Login;