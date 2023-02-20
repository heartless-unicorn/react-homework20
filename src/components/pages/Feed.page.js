import { posts } from "../List";
import { useEffect } from "react";
import Post from "../Post";
import "./pages-style/FeedPage.css";

export default function FeedPage() {
  useEffect(() => {
    const likefromStorage = localStorage.getItem("likeAmount10");

    if (JSON.parse(likefromStorage) === null) {
      posts.map((value, index) => {
        let randomLikes = Math.round(Math.random() * 100);
        localStorage.setItem(`likeAmount${index}`, JSON.stringify(randomLikes));
      });
    }
  }, []);
  return (
    <div className=" FeedPage">
      {posts.map((element, id) => {
        return <Post data={element} key={id} index={id} />;
      })}{" "}
    </div>
  );
}
