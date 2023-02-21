import { Link } from "react-router-dom";

function Contact(props) {
  return (
    <div className="Contact">
      <div>
        <p>
          {props.data.firstName} {props.data.lastName}{" "}
        </p>
        <p className="number">{props.data.phone}</p>
      </div>
      <div>
        <Link to={props.data.firstName}>Click</Link>
      </div>
    </div>
  );
}
export default Contact;
