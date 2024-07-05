import { decrement, decrementByValue, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {

  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count)



  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center gap-5 bg-[#4fff64] relative'>
      <h1 className='text-[#091e0c] text-6xl font-extrabold text-center uppercase absolute top-3'>React with Redux</h1>

      {/* counter */}
      <div className="flex justify-center items-center gap-10 bg-first-light p-14">

        {/* increment by value */}
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="bg-green-700 px-4 py-1.5 font-medium text-lg text-white rounded">
          Increment by 5
        </button>


        <button
          onClick={() => dispatch(increment())}
          className="bg-green-700 px-4 py-1.5 font-medium text-lg text-white rounded">
          Increment
        </button>

        <h2 className="text-3xl font-medium text-black min-w-14 text-center">
          {count}
        </h2>

        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-600 px-4 py-1.5 font-medium text-lg text-white rounded">
          Decrement
        </button>

        {/* increment by value */}
        <button
          onClick={() => dispatch(decrementByValue(5))}
          className="bg-red-600 px-4 py-1.5 font-medium text-lg text-white rounded">
          Decrement by 5
        </button>
      </div>


      {/* box adding for increased counters */}
      <div className="border border-green-800 flex justify-center items-center gap-8">



      </div>

    </div >
  )
}

export default App
