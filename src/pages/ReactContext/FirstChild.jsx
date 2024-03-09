import { useContext } from "react";
import { ReactContext } from "./ReactAuthProvider";


const FirstChild = () => {


    // hooks
    const { number, setNumber } = useContext(ReactContext);


    return (
        <div className="h-[350px] flex justify-center items-center gap-8">
            <button onClick={() => setNumber(number + 1)}>Plus</button>
            <p>{number}</p>
            <button onClick={() => setNumber(number - 1)}>Minus</button>
        </div>
    );
};

export default FirstChild;