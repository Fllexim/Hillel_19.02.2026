import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

const Main = () => {
  const value = useSelector(selectors.counter.value);
  console.log(value);

  return <span>Votes: {value}</span>
};

export default Main;
