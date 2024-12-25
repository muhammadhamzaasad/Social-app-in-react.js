import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
            <h3 className="loginlogo">Lamassocial</h3>
            <span className="logindecs">Connect with Friends and the world around you on Lamassocial</span>
        </div>
        <div className="loginright">
            <form className="loginform">
                <input type="text" className="logininput" placeholder="Email or Phone Number"/>
                <input type="password" className="logininput" placeholder="Password"/>
                <button className="loginbtn">Log In</button>
                <p className="loginforgot">Forgot Password?</p>
                <hr />
                <button className="logincreate">Create a New Account</button>
            </form>
        </div>
      </div>
    </div>
  )
}
