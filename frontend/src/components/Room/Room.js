import React from 'react'
import 'Room.css';
export default function Room({ room }) {
    return (
        <div style={{ width: '18rem' }}>
            <div>
                <img src={room.img[0]} ></img>
            </div>
            <div>
                <p>Room No : {room.no}</p>
                <p>Room status : {room.status}</p>
                <button href="/hotelRooms">Book Room</button>
            </div>
        </div>
    )
}
