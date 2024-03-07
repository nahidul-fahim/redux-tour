import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-[100vh] bg-black flex flex-col justify-center items-center gap-5">
            <h2 className="text-4xl font-bold text-white text-center">404 page</h2>
            <Link to={"/"}><button className="bg-white px-5 py-3 rounded font-medium hover:bg-[#cccccc] duration-300 text-black">Home</button></Link>
        </div>
    );
};

export default ErrorPage;