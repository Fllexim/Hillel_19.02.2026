import { useDispatch } from "react-redux";
import { swapi } from "../redux/slices/swapiSlice";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-warning"
      onClick={() => dispatch(swapi.actions.clearData())}
    >
      Clear
    </button>
  );
};

export default Footer;
