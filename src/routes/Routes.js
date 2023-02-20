import { Route, Routes as InitialRoutes } from "react-router-dom";
import Nav from "../components/Nav";
import MainPage from "../components/pages/Main.page";
import ContactPage from "../components/pages/Contacts.page";
import FeedPage from "../components/pages/Feed.page";
import PhotoPage from "../components/pages/Photos.page";

export default function Routes() {
  return (
    <div>
      <Nav />
      <InitialRoutes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/contacts" element={<ContactPage />}></Route>
        <Route path="/feed" element={<FeedPage />}></Route>
        <Route path="/photos" element={<PhotoPage />}></Route>
      </InitialRoutes>
    </div>
  );
}
