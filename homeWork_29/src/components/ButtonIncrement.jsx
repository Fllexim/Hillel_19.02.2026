import { useDispatch } from "react-redux";
import { counter } from "../redux/slices/counterSlices";

const ButtonIncrement = () => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(counter.actions.increment());
  };

  return <button onClick={handleClick}>+</button>;
};

export default ButtonIncrement;
