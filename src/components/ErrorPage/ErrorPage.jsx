import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mt-20 mr-20 ml-20 card text-center">
           <div className="border border-indigo-200 rounded-3xl bg-cyan-900 max-w-30">
           <h2 className="text-center text-white font-bold text-3xl mt-10">Oops!!</h2> 
           <h2 className=" font-bold text-white text-3xl mt-10 mb-10 text-center">Error!! 404 Page</h2>
           
           <Link to="/"><button className="text-center text-xl font-bold mb-20 btn btn-warning">Go back to home</button></Link>
           </div>
        </div>
        
    );
};

export default ErrorPage;