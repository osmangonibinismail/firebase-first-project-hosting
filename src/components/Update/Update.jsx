
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Update = () => {

    const {user, updateUserProfile} = useContext(AuthContext)
    console.log(updateUserProfile)

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);
        updateUserProfile(name, photo)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }
   



    return (

        <div className="pt-10 pb-20 min-h-screen" >
            <div className="pt-20 min-h-screen bg-base-300">
                <p className="text-center text-black text-3xl pb-4 pt-4">Hi, <span className="text-red-500">{user.displayName || "sir / ma'am"}!</span></p>
                <p className="text-center font-medium pb-12">Update Your Profile</p>

                <p className="pl-44 mx-auto pb-4">
                    <img className="w-36 rounded-full" src={user.photoURl || 'user.png'} />
                </p>
                <form onSubmit={handleUpdateProfile} className="card-body border bg-gray-100 rounded-lg">
                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="text-center">
                            <button>save</button>
                        </div>

                </form>
            </div>
        </div>

    );
};

export default Update;
