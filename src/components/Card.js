import React from "react";
import './Card.css';

function Card(){
    return(
        <div className="card">
            <div className="card-image"></div>


            <div className="card-middle">
                <div className="text-container">
                    <h1>Order Summary</h1>
                    <p>You can now listen to millions of songs, audiobooks, and podcasts on any 
                    device anywhere you like!</p>
                </div>

                <div className="plan-container">
                    <div className="img"></div>
                    
                    <div className="text">
                        <h3>Annual Plan</h3>
                        <p>$59,99/year</p>
                    </div>

                    <a className="link" href="#">Change</a>
                </div>
            </div>

            
            <div class="card-bottom">
                <div className="btnPay">
                    <button>Proceed to Payment</button>
                </div>
                
                <a href="#">Cancel Order</a>
            </div>

        </div>


    );
}

export default Card;