import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { contacts } from "../ContactList";
import Contact from "../Contact";
import "./pages-style/ContactPage.css";

export default function ContactPage() {
  let [contactList, setContacts] = useState(contacts);
  let [search, setSearch] = useState("");

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  useEffect(() => {
    setContacts(
      contacts
        .map((el) => {
          if (
            Object.values(el).filter((val) =>
              val.toLowerCase().includes(search)
            ).length > 0
          ) {
            return el;
          }
        })
        .filter((val) => val !== undefined)
    );
  }, [search]);

  return (
    <div className="ContactPage">
      <div>
        <form>
          <input onChange={handleSearchChange} className="searchfield" />
        </form>
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
