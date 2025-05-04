import React from "react";

const tableNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const Book = () => {
    return (
        <form id="bookForm">
            <label className="labName">Full name</label>
            <input type="text"/><br/>

            <label className="labEmail">E-mail</label>
            <input type="email"/><br/>
            <label className="labPnum">Number of persons</label>
            <input type="number" min={1} max={12}/><br/>
            <label className="labNum">Nunmber of table</label>
            <select>
                {tableNum.map(tn => <option>{tn}</option>)}
            </select><br/>
            <label className="labDate">Date</label>
            <input type="date"/><br/>
            <input type="submit" value={'BOOK A TABLE'} className="submitBtn"/>
        </form>
    )
}

export default Book