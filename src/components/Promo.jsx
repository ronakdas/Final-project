import React from 'react';
import { catagory } from '../constants'; // Make sure the path is correct
import './Styles/Promo.css'; // Make sure the path is correct
//import promo from '../assets/promo'

function Promo() {
    return (
        <section className='promo'>
            <div className="promo-container">
                <h1 className='promo_heading'>We have</h1>
                <ul className="list">
                    {catagory.map((promo) => (
                        <li key={promo.id} className='item'> {/* Key is now using promo.id */}
                            <div className="promo-card">
                                 
                                <div className="promo-title">{promo.title}</div>
                                <div className="promo-text">{promo.description}</div>
                                <img src={promo.img} className='promo-pic' alt={promo.title} /> {/* Added alt text */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Promo;