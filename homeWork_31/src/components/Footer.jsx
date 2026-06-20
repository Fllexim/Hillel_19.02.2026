import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <button
        className="btn btn-danger"
        onClick={() =>
          dispatch({
            type: "CLEAR_TODOS_REQUEST",
          })
        }
      >
        Clear All
      </button>
    </div>
  );
};

export default Footer;
