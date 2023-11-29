import { useDispatch, useSelector } from "react-redux"
import { IMainState } from "../types/main"
import { doCounter, minCounter } from "../redux/slices/countSlice"

function HomePage() {
  const dispatch = useDispatch()
  const counter = useSelector((state: IMainState) => state?.counter.data)

  return (
    <div className='p-8'>
      <p>Counter: {counter}</p>
      <div>
        <button className='' onClick={() => dispatch(doCounter())}>+</button>
        <button className='ml-4' onClick={() => dispatch(minCounter())}>-</button>
      </div>
    </div>
  )
}

export default HomePage