import "./details.styles.scss";
import { Link } from "react-router-dom";
import DetailsComponent from "./details.component";
import detailsData from "./details-file";

const Details = () => {
  return (
    <div className="details-container">
      {detailsData.map((item) => (
        <DetailsComponent background={item.imgUrl} link={item.url} name={item.name} />
      ))}
    </div>
  );
};

export default Details;
