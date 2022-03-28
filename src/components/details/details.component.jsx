import { Link } from "react-router-dom";
import "./details.component.styles.scss";

export default function DetailsComponent(props) {
  console.log(props.bgImage);
  return (
    <div
      className="details-component"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <Link to={props.link}>{props.children}</Link>
    </div>
  );
}
