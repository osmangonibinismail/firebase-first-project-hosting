import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Provider/AuthProvider";


const UpdateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
  
    if (loading) {
      return <div className="text-center pt-20 pb-20">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    }
  
    if (user) {
      return children;
    }
  
    return <Navigate state={location.pathname} to="/login"></Navigate>
    ret
  }
  
  export default UpdateRoutes;
  