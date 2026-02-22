import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
import "./App.css";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
// CreatePost and PostList are unused here (routed via Outlet)
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        <Header></Header>
        {/* {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )} */}

        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
