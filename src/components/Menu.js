import "./styles/Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export default function Menu(props) {
  let isLiked = localStorage.getItem(`isLiked${props.index}`);
  const likeAmount = localStorage.getItem(`likeAmount${props.index}`);
  const [like, Liked] = useState(JSON.parse(isLiked));
  let [likes, countLike] = useState(JSON.parse(likeAmount));

  useEffect(() => {
    if (JSON.parse(isLiked) === null) {
      localStorage.setItem(`isLiked${props.index}`, JSON.stringify(false));
    }
  });
  useEffect(() => {
    localStorage.setItem(`isLiked${props.index}`, JSON.stringify(like));
    localStorage.setItem(`likeAmount${props.index}`, JSON.stringify(likes));
  }, [like, likes, props.index]);
  const handleLike = () => {
    Liked((current) => !current);
    like ? countLike(likes - 1) : countLike(likes + 1);
  };

  return (
    <div className="Menu">
      <span>
        {" "}
        <FontAwesomeIcon
          icon={faHeart}
          className={like ? "button liked" : "button"}
          onClick={handleLike}
        />
        <span>{likes}</span>
      </span>
      <FontAwesomeIcon icon={faShare} className="button" />
      <FontAwesomeIcon icon={faDownload} className="button" />
    </div>
  );
}
