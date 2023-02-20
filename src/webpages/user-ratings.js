import { useParams } from "react-router-dom";
import JSONTableRows from "../components/json-table-rows";

function UserRatings() {
  const { name } = useParams();
  
  return (
    <div className="card">
      <JSONTableRows target={`ratings/${name}`} includeAvg={false} />
      <a href="/">Home</a>
    </div>
  )
}

export default UserRatings;