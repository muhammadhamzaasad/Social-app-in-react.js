import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import "./Home.css";


export default function Home() {
  return (
    <>
      < Topbar />
      <div className="HomeContainer">
        < Sidebar />
        < Feed />
        < Rightbar />
      </div>
    </>
    
  )
}
