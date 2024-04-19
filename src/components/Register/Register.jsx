import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { createUser } = useContext(AuthContext);
    
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location the path name', location);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, photo, password, accepted)


        // reset error
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase characters')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lowercase characters')
            return;
        }

        else if (!accepted) {
            setRegisterError('Please accept our terms and condition')
            return;
        }
        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('user created successfully')
                navigate(location?.state ? location.state : '/');

                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log('profile updated'))
                    .catch()


                // send email verification
                // sendEmailVerification(result.user)
                //     .then(() => {
                //         alert('please check your email and verified your account')
                //     })
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
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
        <div className="hero min-h-screen bg-sky-950 mt-20 mb-20" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white">Register Now!</h1>
                    <p className="py-6 text-white">Registration process by providing name, email, and password, upload a photo for further participation.If you have an account, log in first.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
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
                        </div>
                        <div className="mb-2">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms an Conditions</a></label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700  text-center text-2xl">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600 text-center text-2xl">{success}</p>
                    }

                    <p className="text-center mt-4">already account?  please<Link className="" to='/login'><button className="btn btn-link font-bold">Login</button></Link></p>
                    <button onClick={handleGoogleSignIn} className="border border-indigo-600 btn mt-5 mb-2 ml-5 mr-5 font-bold text-xl">
                        <FaGoogle></FaGoogle>
                        <p className="ml-3">Register with Google</p>
                    </button>
                    <button onClick={handleGithubSignIn} className="border border-indigo-600 btn mt-2 mb-8 ml-5 mr-5 font-bold text-xl">
                        <FaGithub></FaGithub>
                        <p className="ml-3">
                            Register with Github</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;