import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSwapiData } from "../redux/slices/swapiSlice";

const SwapiForm = () => {
  const [path, setPath] = useState("people/1");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchSwapiData(path));
  };

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <span className="input-group-text">https://www.swapi.tech/api/</span>

      <input
        type="text"
        className="form-control"
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />

      <button className="btn btn-primary" type="submit">
        Get info
      </button>
    </form>
  );
};

export default SwapiForm;
