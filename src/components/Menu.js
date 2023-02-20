import "./styles/Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export default function Menu(props) {
  // localStorage.clear();
  let isLiked = localStorage.getItem(`isLiked${props.index}`);
  // console.log(localStorage.getItem(`isLiked0`));
  const likeAmount = localStorage.getItem(`likeAmount${props.index}`);
  const [like, Liked] = useState(!isLiked);
  let [likes, countLike] = useState(+likeAmount);
  console.log(JSON.parse(isLiked));
  useEffect(() => {
    if (JSON.parse(isLiked) === null) {
      localStorage.setItem(`isLiked${props.index}`, false);
    }
  });
  useEffect(() => {
    localStorage.setItem(`isLiked${props.index}`, like);
    localStorage.setItem(`likeAmount${props.index}`, likes);
  }, [like, likes]);
  const handleLike = () => {
    Liked((current) => !current);
    like ? countLike(likes - 1) : countLike(likes + 1);
  };
  console.log(like);

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
