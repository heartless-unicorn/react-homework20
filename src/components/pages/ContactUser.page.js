import { useParams, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faMessage } from "@fortawesome/free-solid-svg-icons";
import "./pages-style/ContactUserPage.css";

function ContactUserPage() {
  let { userId } = useParams();
  const list = useOutletContext();
  const myUser = list.filter((val) => val.username === userId);
  return (
    <div className="ContactUserPage">
      <div className="header-user">
        <div>
          <img src={myUser[0].icon} />
        </div>
        <div>
          {" "}
          <h2 className="first-name">{myUser[0].firstName}</h2>
          <p className="username">@{myUser[0].username}</p>
          <p className="phonebox">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              style={{ color: `#0fa92c ` }}
            />
            <FontAwesomeIcon icon={faMessage} style={{ color: "#218cffc7" }} />
            {myUser[0].phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUserPage;
