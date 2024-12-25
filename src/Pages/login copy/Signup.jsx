import "./Signup.css"

export default function Signup() {
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
            <h3 className="loginlogo">Lamassocial</h3>
            <span className="logindecs">Connect with Friends and the world around you on Lamassocial</span>
        </div>
        <div className="loginright">
            <form className="loginform">
                <input type="text" className="logininput" placeholder="Username"/>
                <input type="text" className="logininput" placeholder="Email or Phone Number"/>
                <input type="password" className="logininput" placeholder="Password"/>
                <input type="password" className="logininput" placeholder="Re-Password"/>
                <button className="loginbtn">Sign up</button>
                <button className="logincreate">Log into Account</button>
            </form>
        </div>
      </div>
    </div>
  )
}
