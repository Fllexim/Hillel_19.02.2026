import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

const Footer = () => {
  const count = useSelector(selectors.todo.count);

  return <p className="footer">Всього: {count}</p>;
};

export default Footer;
