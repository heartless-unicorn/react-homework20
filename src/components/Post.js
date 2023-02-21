import Menu from "./Menu";
import "./styles/Post.css";

export default function Post(response) {
  return (
    <div className="Post col-8">
      <div className="header">
        {" "}
        <img
          src={response.data.icon}
          className="icon"
          alt={response.data.name}
        />{" "}
        <div className="acount-info">
          <p className="name"> {response.data.name}</p>
          <p className="user"> {response.data.nickname}</p>
        </div>
      </div>

      <div className="img-box">
        <img src={response.data.image} alt="Post" className="img-fluid w-50" />
      </div>
      <p className="describtion">{response.data.content}</p>
      <Menu index={response.index + 10} />
    </div>
  );
}
