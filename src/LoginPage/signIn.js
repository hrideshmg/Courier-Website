import LoginImage from './Images/login.png'
import Eye from './Icons/eye.png';
import Eye1 from './Icons/eye-off.png'
import Eye2 from './Icons/eye-disabled.svg'
const Login = () => {
    return (
    <section style={{flex:'1','background-color':'#1B262C'}}>
    <div className="container p-4" style={{'background-color': '#1B262C'}}>
        <div className="row">
            <div className="col-md-6" style={{'background-color':'#1B262C'}}>
                <img src={LoginImage} className="mw-25% mh-" alt="loginPage icon"/>
            </div>
            <div className="col-md-6" style={{'background-color':'#1B262C'}}>
                <h1 id="headertext" style={{'color': 'white'}} className="text-center">Login</h1>
                <form action="">
                    <p id="text" style={{'color': 'white'}}>email</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Username" style={{'border': 'NamedNodeMap', 'color': 'white'}}/>
                    </div>
                    <p id="text" style={{'color': 'white'}}>Password</p>
                    <div className="input-group mb-8">
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password" style={{'color': 'white', 'border': 'none', 'border-radius': '5px 0px 0px 5px'}}/>
                        <div className="input-group-append ">
                          <span className="input-group-text" style={{'background-color': '#0F4C75', 'border': 'none','border-radius': '0px 5px 5px 0px','height': '38px'}}><img onclick="togglePasswordVisiblity()" id="eyeIcon" src={Eye} height="100%" width="auto" alt="eyeButton"/></span>
                        </div>
                    </div>
                </form>
                <div className=" d-flex justify-content-center" style={{'background-color':'#1B262C'}}>
                    <button type="submit" onclick="" className="auth-btn" style={{'border-radius': '10px'}}>Log in</button>
                </div>
            </div>            
        </div>
    </div>
    </section>);};

export default Login;
