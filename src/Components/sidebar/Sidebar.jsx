import { Users } from "../../dummyData";
import Closefriend from "../closefriend/Closefriend";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <i class="fa-solid fa-rss" id="sidebaricon"></i>
              <span className="sidebarlistitemtext">Feed</span>
            </li>
            <li className="sidebarlistitem">
              <i class="fa-solid fa-message" id="sidebaricon"></i>
              <span className="sidebarlistitemtext">Chats</span>
            </li>
            <li className="sidebarlistitem">
              <i class="fa-solid fa-circle-play" id="sidebaricon"></i>
              <span className="sidebarlistitemtext">Videos</span>
            </li>
            <li className="sidebarlistitem">
              <i class="fa-solid fa-user-group" id="sidebaricon"></i>
              <span className="sidebarlistitemtext">Groups</span>
            </li>
            <li className="sidebarlistitem">
              <i class="fa-solid fa-bookmark" id="sidebaricon"></i>
              <span className="sidebarlistitemtext">BookMarks</span>
            </li>
            <li className="sidebarlistitem">
              <i class="fa-solid fa-circle-question" id="sidebaricon"></i>
              <span className="sidebarlistitemtext">Questions</span>
            </li>
            <li className="sidebarlistitem">
              <i class="fa-solid fa-suitcase" id="sidebaricon"></i>
              <span className="sidebarlistitemtext">Jobs</span>
            </li>
            <li className="sidebarlistitem">
              <i class="fa-solid fa-calendar-day" id="sidebaricon"></i>
              <span className="sidebarlistitemtext">Events</span>
            </li>
            <li className="sidebarlistitem">
              <i class="fa-solid fa-graduation-cap" id="sidebaricon"></i>
              <span className="sidebarlistitemtext">Courses</span>
            </li>
          </ul>
          <button className="sidebarbutton">Show More</button>
          <hr className="sidebarhr" />
          <ul className="sidebarfriendlist">
            {Users.map(u =>(
                          < Closefriend key={u.id} user={u} />
                        ))}
          </ul>
        </div>
      </div>
    </>
  )
}
