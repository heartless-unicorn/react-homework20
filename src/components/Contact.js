import { Link } from "react-router-dom";
import "./styles/Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <Link to={props.data.username}>
        <div className="profile-contact">
          <div>
            <p>{props.data.firstName}</p>
            <p className="number">{props.data.phone}</p>
          </div>
          <img src={props.data.icon} alt="Dog" />
        </div>
      </Link>
    </div>
  );
}
export default Contact;
