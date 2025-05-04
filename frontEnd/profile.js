import {React, useState} from "react";
import "./profileElements/profile.css"
import Default from "./profileElements/default";
import Info from "./profileElements/userInfo";
import History from "./profileElements/history"
import Reserv from "./profileElements/reservation"

const Profile = () => {

    const [hoveredButton, setHoveredButton] = useState(null)
    const [activeTab, setActiveTab] = useState(1)

    const style = {backgroundColor:"#b45917"}
    const s = {backgroundColor: '#a25015'}

    const handleHover = (button) => {
        setHoveredButton(button)
    }
    const handleHoverOut = () => {
        setHoveredButton(null)
    }
    const activate = (t) => {
        setActiveTab(t)
    }
 
    return(
        <main>
        <nav id="profileSidebar">
            <div id="name">
                <svg id="svg" width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {activate(0)}}><circle cx="50" cy="50" r="40" fill="#8B4513"/><circle cx="50" cy="35" r="12" fill="#fff"/><rect x="30" y="48" width="40" height="25" rx="30" fill="#fff"/></svg>
                <span>User name</span>
            </div>
            <div id="sideBtn">
                <button className="sBtn" style={{...(hoveredButton === 'info' ? style : {}), ...(activeTab === 1 ? s :{})}} onMouseEnter={() => handleHover('info')} onMouseLeave={handleHoverOut} onClick={() => {activate(1)}}>
                    User information
                </button>
                <button className="sBtn" style={{...(hoveredButton === 'history' ? style : {}), ...(activeTab === 2 ? s :{})}} onMouseEnter={() => handleHover('history')} onMouseLeave={handleHoverOut} onClick={() => {activate(2)}}>
                    Orders history
                </button>
                <button className="sBtn" style={{...(hoveredButton === 'reservation' ? style : {}), ...(activeTab === 3 ? s :{})}} onMouseEnter={() => handleHover('reservation')} onMouseLeave={handleHoverOut} onClick={() => {activate(3)}}>
                    Table reservation
                </button>
            </div>
            
        </nav>
        <section id="profileContent">
            {activeTab === 0 && <Default/>}
            {activeTab === 1 && <Info/>}
            {activeTab === 2 && <History/>}
            {activeTab === 3 && <Reserv/>}
        </section>
        </main>
    )
}

export default Profile