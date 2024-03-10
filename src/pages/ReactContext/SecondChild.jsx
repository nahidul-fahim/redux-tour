import { useContext } from "react";
import { ReactContext } from "./ReactAuthProvider";


const SecondChild = () => {

    // hooks
    const { number, setNumber } = useContext(ReactContext);



    return (
        <div className="h-[350px] flex flex-col justify-center items-center gap-8">
            <h3 className="text-2xl font-bold">Second child</h3>
            <div className="flex justify-center items-center gap-8">
                <button onClick={() => setNumber(number + 1)}>Plus</button>
                <p>{number}</p>
                <button onClick={() => setNumber(number - 1)}>Minus</button>
            </div>

        </div>
    );
};

export default SecondChild;