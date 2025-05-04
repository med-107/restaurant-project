import {React, useState} from "react";
import classNames from "classnames";
import "./info.css"

const Info = () => {

    const [activeTab, setActiveTab] = useState(0)
    const [data, setData] = useState({})

    const handleTab = (n) => {
        setActiveTab(n)
    }
    const handleChange = (event) => {
        let key = event.target.name
        let value = event.target.value

        setData(values => ({...values, [key]:value}))
        console.log(data)
    }


    return(
        <>
        <div id="btns">
            <button id="" className={classNames({ selected: activeTab === 0, hover: activeTab !== 0 })} onClick={() => {handleTab(0)}}>Info</button> 
            <button id="" className={classNames({ selected: activeTab === 1, hover: activeTab !== 1 })} onClick={() => {handleTab(1)}}>Edit</button>
        </div>
        {activeTab === 0 && (
        <div id="holder">
            <div id="blank">
                <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#e5e5e5"/><circle cx="50" cy="35" r="12" fill="#fff"/><rect x="30" y="48" width="40" height="25" rx="30" fill="#fff"/></svg>
                <span id="username">User name</span>
                <span id="email">someone@gmail.com</span>
            </div>

            <div id="data">
                <span className="title">Name</span>
                <span className="tcontent">mister noone</span>

                <span className="title">Phone number</span>
                <span className="tcontent">XXXXXXXXXX</span>

                <span className="title">Address</span>
                <span className="tcontent">Morocco, Errachidia, yourplace</span>

                <span className="title">Description</span>
                <span className="tcontent">yyyyyyyzzzzzzzzzzzzzz</span>
            </div>
        </div>)}

        {activeTab === 1 && (
        <div id="fholder">
            <form id="infoUpdate">
                <label>Full name</label>
                <input type="text" name="name" value={data.name} onChange={handleChange}/><br/>

                <label>E-mail</label>
                <input type="email" name="email" value={data.email} onChange={handleChange}/><br/>

                <label>Address</label>
                <input type="text" name="address" value={data.address} onChange={handleChange}/><br/>

                <label>Description</label>
                <textarea name="description" value={data.description} onChange={handleChange}/><br/>
                <button className="ls">Edit</button>
            </form>
        </div>)}
        </>
    )
}

export default Info