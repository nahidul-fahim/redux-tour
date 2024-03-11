import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../redux/features/counter/counterSlice";


const ReduxHome = () => {

    const { value } = useSelector(state => state.counter);
    const dispatch = useDispatch();




    return (
        <div className="h-[100vh] p-10 flex flex-col justify-start items-center gap-5">
            <h2 className="text-purple-500 text-3xl font-bold">Redux Tour Starts Here</h2>

            <div className="mt-10 border-2 border-[#ca5050] w-full p-14 flex justify-center items-center gap-14 text-xl font-semibold">

                <button onClick={() => dispatch(incrementByAmount(-5))}>Decrease by 5</button>

                <button onClick={() => dispatch(decrement())}>Decrease</button>

                <p>{value}</p>

                <button onClick={() => dispatch(increment())}>Increase</button>

                <button onClick={() => dispatch(incrementByAmount(5))}>Increase by 5</button>


            </div>
        </div>
    );
};

export default ReduxHome;