import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset , incrementByAmount,decrementByAmount} from "./store/Slices/ReduxCounterSlice";

const Counter = () => {
    
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  function incrementByGivenNumber()
    {
        let val=document.getElementById("textbox").value;
        let num=parseInt(val)
        dispatch(incrementByAmount(num));
    }
      function decrementByGivenNumber()
    {
        let val=document.getElementById("textbox").value;
        let num=parseInt(val)
        dispatch(decrementByAmount(num));
    }


  return (
    <>
      <h1 style={{border:"4px solid black", fontSize:"32px",width:"200px"}}>{count}</h1>
      <button onClick={() => dispatch(increment())}  style={{border:"4px solid black", fontSize:"32px",width:"200px"}}>+</button><br/><br/>
      <button onClick={() => dispatch(decrement())} style={{border:"4px solid black", fontSize:"32px",width:"200px"}}>-</button><br/><br/>
      <button onClick={() => dispatch(reset())} style={{border:"4px solid black", fontSize:"32px",width:"200px"}}>Reset</button><br/><br/>
      <p style={{fontSize:"32px"}}>Enter any number: </p>
      <input type='text' id="textbox" style={{border:"4px solid black", fontSize:"32px",width:"200px"}}/><br/><br/>
      <button onClick={incrementByGivenNumber} style={{border:"4px solid black", fontSize:"32px",width:"200px"}}>Increment</button><br/><br/>
      <button onClick={decrementByGivenNumber} style={{border:"4px solid black", fontSize:"32px",width:"200px"}}>Decrement</button><br/><br/>

      
      
     

    </>
  );
};

export default Counter;
