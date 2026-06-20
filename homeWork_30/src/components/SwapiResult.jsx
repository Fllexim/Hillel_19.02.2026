import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

const SwapiResult = () => {
  const data = useSelector(selectors.swapi.data);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <pre className="mb-0">
          {data ? JSON.stringify(data, null, 2) : "No data"}
        </pre>
      </div>
    </div>
  );
};

export default SwapiResult;
