import React from "react";
import './reservation.css'

const Rserv = () => {
    return(
        <div id="reservationContainer">
            <table border={1} id="reservationTable">
                <tr>
                    <th>Reservation date</th>
                    <th>Table number</th>
                    <th>Person's number</th>
                    <th>options</th>
                </tr><br/>
                <tr>
                    <td>hhhhhhhh</td>
                    <td>hhhhhhhh</td>
                    <td>hhhhhhhh</td>
                    <td>
                        <span title="Cancel reservation"><svg id="cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></span>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Rserv