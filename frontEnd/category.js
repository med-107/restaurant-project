import React, { useState } from "react";
import './style/category.css'; // Import the CSS file for styling

const Cat = () => {
    const [activeTab, setActiveTab] = useState(0); // State to track the active tab

    const handleTabClick = (index) => {
        setActiveTab(index); // Update the active tab index
    };

    return (
        <div id="container">
            <div id="tabs">
                <button
                    className={activeTab === 0 ? "selected" : "hover"}
                    onClick={() => handleTabClick(0)}
                >
                    Tab 1
                </button>
                <button
                    className={activeTab === 1 ? "selected" : "hover"}
                    onClick={() => handleTabClick(1)}
                >
                    Tab 2
                </button>
                <button
                    className={activeTab === 2 ? "selected" : "hover"}
                    onClick={() => handleTabClick(2)}
                >
                    Tab 3
                </button>
            </div>
            <div id="content">
                {activeTab === 0 && (
                    <div id="tab1">
                        <h1>Tab 1</h1>
                        <p>tab1 tab1 tab1</p>
                    </div>
                )}
                {activeTab === 1 && (
                    <div id="tab2">
                        <h1>Tab 2</h1>
                        <p>tab2 tab2 tab2</p>
                    </div>
                )}
                {activeTab === 2 && (
                    <div id="tab3">
                        <h1>Tab 3</h1>
                        <p>tab3 tab3 tab3</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cat;