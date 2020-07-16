import React from 'react'
//import {useState, useEffect } from 'react'


const ExitModal = () => {
    

    return (
        <div className="modal_holder">
          <div className="modal_container">
            <div className="top_block">
                <p className="title_main">Sign up now</p>
            </div>
            <div className="botton_block">
                <p className="subheader_main">And get a $10 off Supreme mystery box.</p>
                <div className="time_block">
                    <div className="timer_digit">
                        <p className="number_secondary">0</p>
                    </div>
                    <div className="timer_digit">
                        <p className="number_secondary">1</p>
                    </div>
                    <div className="double_dot">
                        <p className="">:</p>
                    </div>
                    <div className="timer_digit">
                        <p className="number_secondary">4</p>
                    </div>
                    <div className="timer_digit">
                        <p className="number_secondary">1</p>
                    </div>
                    <div className="double_dot">
                        <p className="">:</p>
                    </div>
                    <div className="timer_digit">
                        <p className="number_secondary">3</p>
                    </div>
                    <div className="timer_digit">
                        <p className="number_secondary">5</p>
                    </div>
                </div>
                <div className="promo_block">
                    <p className="body_main">Use promo code JUMP10SUP</p>
                </div>
            </div>
          </div>
        </div>
      );
}

export default ExitModal;