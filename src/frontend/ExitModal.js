import React from 'react'
import { useCurrentTime } from './useCurrentTime';
import closeImg from '../assets/close.svg';
import imageXL from '../assets/image-copy-3.png';
import imageBackpack from '../assets/image-copy-2.png';
import imageRectangle from '../assets/rectangle.png';
import imageJacket from '../assets/image-jacket.png';
import imageBottle from '../assets/image-copy-4.png';
import {useState } from 'react'


const ExitModal = (props) => {
  const currentTime = useCurrentTime();
  const [tomorrowTime] = useState(new Date());
  tomorrowTime.setDate(tomorrowTime.getDate() + 1);

  const startTimer = currentTime
  const finishTimer = tomorrowTime.getTime();
  const timerMilliseconds = finishTimer - startTimer
  const h = String(Math.floor(timerMilliseconds / 3600000)).padStart(2, 0).split('');
  const min = String(Math.floor((timerMilliseconds % 3600000) / 60000)).padStart(2, 0).split('');
  const sec = String(Math.floor(((timerMilliseconds % 3600000) % 60000) / 1000)).padStart(2, 0).split('');
console.log(h, min, sec)
    

    return (
        <div className="modal_holder">
            <div className="modal_closer" onClick={() => props.switchModal('')}></div>
                <div className="modal_container">
                    <div className="modal_close" onClick={() => props.switchModal('')}>
                        <img src={closeImg} />
                    </div>
                        <div className="top_block">
                            <p className="title_main">Sign up now</p>
                        </div>
                        <div className="bottom_block">
                            <div className="main_content">
                                <p className="subheader_main">And get a $10 off Supreme mystery box.</p>
                                <div className="time_block">
                                    {
                                        h.map(digit => (
                                            <div className="timer_digit">
                                                <p className="number_secondary">{digit}</p>
                                            </div>
                                        ))
                                    }
                                    <div className="double_dot">
                                        <p>:</p>
                                    </div>
                                    {
                                        min.map(digit => (
                                            <div className="timer_digit">
                                                <p className="number_secondary">{digit}</p>
                                            </div>
                                        ))
                                    }
                                    <div className="double_dot">
                                        <p>:</p>
                                    </div>
                                    {
                                        sec.map(digit => (
                                            <div className="timer_digit">
                                                <p className="number_secondary">{digit}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="promo_block">
                                    <p className="body_main">Use promo code <span className="promo_code">JUMP10SUP</span></p>
                                </div>
                            </div>
                            <div className="goods_control">
                        <div className="goods_preview">
                            <div className="images_side"><img className="image" src={imageXL}></img></div>
                            <div className="images_inside"><img className="image" src={imageBackpack}></img></div>
                            <div className="image_box"><img className="image" src={imageRectangle}></img></div>
                            <div className="images_inside"><img className="image" src={imageJacket}></img></div>
                            <div className="images_side"><img className="image" src={imageBottle}></img></div>
                        </div>
                        <div className="control_block">
                            <button className="button btn_primary">
                                <span className="subtitle_secondary">Sign Up Now</span>
                                <span className="arrow">➔</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExitModal;