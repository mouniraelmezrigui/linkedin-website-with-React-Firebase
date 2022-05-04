import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import FeedSection from "./components/feed-section/FeedSection";
import Home from "./components/InputOption/Home";
import { useSelector } from "react-redux";
import Login from "./components/login/Login";
import { useEffect, useState } from "react";

function App() {
  const { user } = useSelector((state) => state.user);
  const [userD, setUserD] = useState(user);

  useEffect(() => {
    setUserD(user);
  }, [user]);

  return (
    <div className="h -[80rem] overflow-x-hidden">
      <Header />
      {userD ? (
        <div className="container w-[86%] flex justify-between mx-auto pt-24">
          <Sidebar />
          <Home />
          <FeedSection />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
