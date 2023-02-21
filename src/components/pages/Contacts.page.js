import { Outlet } from "react-router-dom";

import { contacts } from "../ContactList";
import Contact from "../Contact";
import "./pages-style/ContactPage.css";

export default function ContactPage() {
  let contactList = contacts;
  return (
    <div className="ContactPage">
      <div className="left-menu">
        <div className="phonelist">
          {contactList.map((element, i) => {
            return <Contact data={element} key={i} />;
          })}
        </div>
      </div>
      <Outlet context={contactList} />
    </div>
  );
}
