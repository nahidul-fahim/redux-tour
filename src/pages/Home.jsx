import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center gap-3 font-medium">
            <Link to={"/reactWay"} className="text-xl hover:scale-105 duration-300 hover:text-[#ff5926]">React Way</Link>
        </div>
    );
};

export default Home;