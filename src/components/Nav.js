import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav">
      <Link to="/">Main</Link>
      <Link to="/feed">Feed</Link>
      <Link to="/photos"> Photos</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
}
