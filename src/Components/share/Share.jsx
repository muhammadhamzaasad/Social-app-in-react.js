import "./share.css";

export default function Share() {
  return (
    <div className="share">
        <div className="sharewrapper">
            <div className="sharetop">
                <img src="assets/Person/1.jpeg" alt="" className="shareprofileimg" />
                <input placeholder="What's in your mind Safak?"  className="shareinput" />
            </div>
            <hr className="sharehr" />
            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <i htmlColor="red" id="shareicon" className="fa-solid fa-photo-film"></i>
                        <div className="shareoptiontext">Photo or Video</div>
                    </div>
                    <div className="shareoption">
                        <i id="shareicon" className="fa-solid fa-tag"></i>
                        <div className="shareoptiontext">Tag</div>
                    </div>
                    <div className="shareoption">
                        <i id="shareicon" className="fa-solid fa-location-dot"></i>
                        <div className="shareoptiontext">Location</div>
                    </div>
                    <div className="shareoption">
                        <i id="shareicon" className="fa-solid fa-face-smile"></i>
                        <div className="shareoptiontext">Feelings</div>
                    </div>
                </div>
                <button className="sharebtn">Share</button>
            </div>
        </div>
    </div>
  )
}
