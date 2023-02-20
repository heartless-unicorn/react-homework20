import { Link } from "react-router-dom";
import "./styles/Nav.css";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="profile">
        <div className="profile-photo">
          <img
            src="https://i.pinimg.com/originals/42/37/a0/4237a00a7fff7b51e6d0e98b5e5bbb7a.jpg"
            alt="dog"
          />
          <p>Bug the retriever</p>
        </div>
        <div className="profile-info">
          <p>@Bug_TheGoodBoy</p>
          <div className="info-nav">
            <div className="info-social">
              <p>
                Posts <br />9
              </p>
              <p>
                Following <br />
                563
              </p>
              <p>
                Followers <br />
                1784
              </p>
            </div>
            <div className="navigation">
              <Link to="/">Main</Link>
              <Link to="/feed">Feed</Link>
              <Link to="/photos"> Photos</Link>
              <Link to="/contacts">Contacts</Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
