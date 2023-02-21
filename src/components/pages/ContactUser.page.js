import { useParams, useOutletContext } from "react-router-dom";

function ContactUserPage() {
  let { userId } = useParams();
  const list = useOutletContext();
  return <div>Hello I`m {userId} </div>;
}

export default ContactUserPage;
