import "./pages-style/MainPage.css";

import Menu from "../Menu";
import { useEffect } from "react";

const profilePics = [
  "https://mymodernmet.com/wp/wp-content/uploads/2019/09/golden-retreiver-photos-11.jpg",
  "https://pethelpful.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTk0Mjc1MzcxNTg2MTY4MzI1/golden-retriever-christmas.jpg",
  "https://i.pinimg.com/originals/d4/d8/3e/d4d83ea9cf8d9e84636ab7dd6fb63e2e.jpg",
  "https://www.pdsa.org.uk/media/7649/golden-retriever-gallery-5.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=133020229820000000",
  "https://pethelpful.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTg5NjE0Mzg0NDkyODQ4MTQ2/elisa-kennemer-wpkzfojl_tq-unsplash.jpg",
  "https://www.thepaws.net/wp-content/uploads/2019/01/golden-retriever-pup-5.jpg",
  "https://i.pinimg.com/originals/42/37/a0/4237a00a7fff7b51e6d0e98b5e5bbb7a.jpg",
];
const picsDescription = [
  "Chillin` with homie",
  "Merry Chtistmas to my @mom",
  "What the fluf!?",
  "Swimmin",
  "Love playing ball",
  "#TBT to when I was little",
  "New here",
];
export default function MainPage() {
  useEffect(() => {
    const likefromStorage = localStorage.getItem("likeAmount0");
    if (JSON.parse(likefromStorage) === null) {
      profilePics.map((value, index) => {
        let randomLikes = Math.round(Math.random() * 100);
        localStorage.setItem(`likeAmount${index}`, JSON.stringify(randomLikes));
      });
    }
  }, []);

  return (
    <div className="MainPage">
      {profilePics.map((el, index) => {
        return (
          <div className="picture-box" key={index}>
            <img src={el} alt="dog" />
            <Menu index={index} />
            <p>{picsDescription[index]}</p>
          </div>
        );
      })}
    </div>
  );
}
