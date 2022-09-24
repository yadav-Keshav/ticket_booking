import React from 'react'

export default function Hotel({ hotel }) {
    return (
        <div style={{ width: '18rem' }} >
            <div>
                <img src={room.img[0]} ></img>
            </div>
            <div>
                <h3>{hotel.hotelName}</h3>
                <p>
                    {hotel.hotelDescription}
                </p>
            </div>
            <div className="list-group-flush">
                <p>Location : {hotel.location}</p>
                <p> Rating  : {hotel.rating}</p>
            </div>
            <div>
                <div href="/hotelDetails">See Details</div>
                <div href="/hotelRooms">See Rooms</div>
            </div>
        </div>
    )
}
