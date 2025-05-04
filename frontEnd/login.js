import react from "react";
import { useState } from "react";
import classNames from "classnames";
import "./style/login.css"

const Login = () => {
    const [info, setInfo] = useState({})
    const [activeTab, setActiveTab] = useState(0)

    const handleChange = (event) => {
        let key = event.target.name
        let value = event.target.value

        setInfo(values => ({...values, [key]:value}))
        console.log(info)
    }

    const handleTab = (n) => {
        setActiveTab(n)
        setInfo((prevInfo) => ({ email: prevInfo.email || "" }))
    }

    return (
        <div id="log">
             <div id="options" >{/*{top: activeTab === 0 ? "160px" : "90px"} */}
                <button id="loginBtn" className={classNames({ selected: activeTab === 0, hover: activeTab !== 0 })} onClick={() => {handleTab(0)}}>login</button> 
                <button id="sign" className={classNames({ selected: activeTab === 1, hover: activeTab !== 1 })} onClick={() => {handleTab(1)}}>sign in</button>
            </div>

            {activeTab === 0 && (
                <form id="loginForm">
                    <label className="labEmail">E-mail</label>
                    <input type="email" name="email" value={info.email} onChange={handleChange}/><br/>

                    <label className="labPwd">Password</label>
                    <input type="password" name="pwd" value={info.pwd} onChange={handleChange}/><br/>
                    <button className="ls">Login</button>
                </form>
            )}
            {activeTab === 1 && (
                <form>
                    <label className="labEmail">Full name</label>
                    <input type="text" name="name" value={info.name} onChange={handleChange}/><br/>

                    <label className="labEmail">E-mail</label>
                    <input type="email" name="email" value={info.email} onChange={handleChange}/><br/>

                    <label className="labPwd">Password</label>
                    <input type="password" name="pwd" value={info.pwd} onChange={handleChange}/><br/>

                    <label className="labCpwd">Confirm Password</label>
                    <input type="password" name="cpwd" value={info.cpwd} onChange={handleChange}/><br/>
                    <button className="ls">Sign up</button>
                </form>
            )}
        </div>
)}

export default Login