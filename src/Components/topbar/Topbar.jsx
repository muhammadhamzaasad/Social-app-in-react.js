import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamassocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <i class="fa-solid fa-magnifying-glass" id="searchIcon"></i>
          <input placeholder="Search for Posts, Reels, Or Friends" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <i class="fa-solid fa-user"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <i class="fa-solid fa-message"></i>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <i class="fa-solid fa-bell"></i>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/Person/2.jpeg" alt="" className="topbarImage" />
      </div>
    </div>
  )
}
