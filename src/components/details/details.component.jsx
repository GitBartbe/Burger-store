import { Link } from "react-router-dom";
import "./details.component.styles.scss";

const DetailsComponent = (props) => {
  return (
    <div
      className="details-component"
      style={{
        backgroundImage: `url(${props.background})`
      }}
    >

      <Link to={props.link}>{props.name}</Link>
    </div>
  );
};

export default DetailsComponent;
