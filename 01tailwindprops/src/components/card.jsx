import React from 'react';

function Card(props) {
    return (
        <div>
            <img src="https://randomuser.me/api/portraits/men/74.jpg" alt="" />
            <h1 className="text-2xl bg-green-500 p-3 rounded-lg text-white font-bold">A card of a photo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}

export default Card;
// Compare this snippet from index.css: