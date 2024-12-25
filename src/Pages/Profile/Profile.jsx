import "./profile.css"
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      < Topbar />
      <div className="profile">
        < Sidebar />
        <div className="profileright">
            <div className="profilerighttop">
                <div className="profilecover">
                    <img className="profilecoverimg" src="assets/Post/3.jpeg" alt="" />
                    <img className="profileuserimg" src="assets/Person/2.jpeg" alt="" />
                </div>
                <div className="profileinfo">
                    <h4 className="profileinfoname">John Doe</h4>
                    <span className="profileinfodetails">Software Engineer</span>
                </div>
            </div>
            <div className="profilerightbottom">
            < Feed />
            < Rightbar profile />
            </div>
        </div>
      </div>
    </>
  )
}
