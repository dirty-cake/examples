import React from 'react';
import cls from 'classnames';

const NavigationHover = (props) => {

    return (
        <div className={cls('hover_menu', {'hover_menu-show': props.show})}>
            <div className="hover_menu--wrapper card_dropdown_holder">
                <div>
                    <p className="small_main hover_menu--title hover_menu--title-arrivals">⚡️ NEW ARRIVALS</p>
                    <div>
                        <p className="body_main op_75">Luxury Holidays</p>
                        <p className="body_main op_75">Women's Sportwear</p>
                        <p className="body_main op_75">Makeup Collection</p>
                        <p className="body_main op_75">Fear of God Budget</p>
                    </div>
                </div>

                <div>
                    <p className="small_main hover_menu--title hover_menu--title-brands">📦 POPULAR BRANDS</p>
                    <div className="hover_menu--columns">
                        <div>
                            <p className="body_main op_75">Supreme</p>
                            <p className="body_main op_75">Off-White</p>
                            <p className="body_main op_75">Yeezy</p>
                            <p className="body_main op_75">Adidas</p>
                        </div>
                        <div>
                            <p className="body_main op_75">Nike</p>
                            <p className="body_main op_75">Gucci</p>
                            <p className="body_main op_75">Balenciaga</p>
                            <p className="body_main op_75">Bape</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="small_main hover_menu--title hover_menu--title-gifting">🎁 GIFTING</p>
                    <div>
                        <p className="body_main op_75">Girlfriend gifts</p>
                        <p className="body_main op_75">Boyfriend gifts</p>
                        <p className="body_main op_75">Anniversary gifts</p>
                        <p className="body_main op_75">Family gifts</p>
                    </div>
                </div>

                <div>
                    <p className="small_main hover_menu--title hover_menu--title-market">🔥 MARKETPLACE FINDS</p>
                    <div>
                        <p className="body_main op_75">Girlfriend gifts</p>
                        <p className="body_main op_75">Boyfriend gifts</p>
                        <p className="body_main op_75">Anniversary gifts</p>
                        <p className="body_main op_75">Family gifts</p>
                    </div>
                </div>

                <div className="hover_menu--block">
                    <p className="small_main hover_menu--title hover_menu--title-blog">Blog</p>
                    <div className="hover_menu--rows">
                        <p className="body_main op_75">Read the latest news from Hybe</p>
                        <span className="body_main op_75 hover_menu--blog_link">Visit Hybe blog</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationHover;