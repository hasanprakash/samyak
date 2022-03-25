import { React, useState } from 'react';
// import './Login.scss'
// import { Link as LinkRoute } from 'react-router-dom'
// import {auth} from '../../firebase'
// import Navbar from '../../components/Navbar/Navbar'
// import x from '../../SAMYAK_LOGOS/SAMYAK FACE LOGO.png'
import x from './SAMYAK FACE LOGO.png';
function Login(props) {
    // const [user, setuser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((authUser) => {
    //         setuser(authUser);
    //     });
    //     return unsubscribe;
    // }, []);
    // const signInUser = (e) => {
    //     e.preventDefault();
    //     auth.signInWithEmailAndPassword(email, password)
    //         .catch((error) => { alert(error); return })
    // }
    return (
        <div >
            <div style={{position:'relative',zIndex:'999'}} >
            {/* <Navbar/> */}
            </div>
            <div className="bg-img">
                <div className="content">
                    <div style={{ color: '#3498db' }}>
                    </div>
                    <header>
                        <img 
                        src={x}
                    />
                    </header>
                    <form action="#">
                        <div className="field">
                            <span className=""></span>
                            <input type="text"
                                  required value={email} onChange={(e)=>{setEmail(e.target.value)}}
                                placeholder="Email or Phone" />
                        </div>
                        <div className="field space">
                            <span className=""></span>
                            <input type="password" className="pass-key"
                                  value={password} onChange={(e)=>{setPassword(e.target.value)}}
                                required placeholder="Password" />
                        </div>
                        <div className="field space">
                            <input type="submit"
                                //   onClick={signInUser}
                                value="LOGIN" />
                        </div>
                    </form>

                    <div className="signup" style={{ marginTop: '10px' }} >
                        Don't have account?
                        {/* <a><LinkRoute to='/signup'>Signup Now</LinkRoute></a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
