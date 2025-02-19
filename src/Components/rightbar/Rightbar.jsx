import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {

  const Homerightbar = () => {
    return (
      <>
          <div className="birthdarcontainer">
            <img className="birthdayimg" src="/assets/gift.png" alt="" />
            <span className="birthdaytext"><b>Fola Fooster</b> and <b>3 other Friends</b> have a birthday today</span>
          </div>
          <img className="rightbarad" src="/assets/ad.png" alt="" />
          <h4 className="rightbartitle">Online Friends</h4>
          <ul className="rightbarfriendlist">
            {Users.map((u) =>(
              < Online key={u.id} user={u} />
            ))}
          </ul>
      </>
    )
  };

  const Profilerightbar = () => {
    return (
      <>
        <h4 className="rightbartitle">User Information</h4>
        <div className="rightbarinfo">
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">City:</span>
            <span className="rightbarinfovalue">New York</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfovalue">Madrid</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Relationship:</span>
            <span className="rightbarinfovalue">Single</span>
          </div>
        </div>
        <h4 className="rightbartitle">User Friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarfollowingimage" />
            <span className="rightbarfollowingname">John Doe</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assets/person/2.jpeg" alt="" className="rightbarfollowingimage" />
            <span className="rightbarfollowingname">John Doe</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assets/person/3.jpeg" alt="" className="rightbarfollowingimage" />
            <span className="rightbarfollowingname">John Doe</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assets/person/4.jpeg" alt="" className="rightbarfollowingimage" />
            <span className="rightbarfollowingname">John Doe</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assets/person/5.jpeg" alt="" className="rightbarfollowingimage" />
            <span className="rightbarfollowingname">John Doe</span>
          </div>
          <div className="rightbarfollowing">
            <img src="/assets/person/6.jpeg" alt="" className="rightbarfollowingimage" />
            <span className="rightbarfollowingname">John Doe</span>
          </div>
        </div>
      </>
    )
  };

  
  return (
    <>
      <div className="rightbar">
        <div className="rightbarwrapper">
          { profile ?  < Profilerightbar /> : < Homerightbar />}
        </div>
      </div>
    </>
  )
}
