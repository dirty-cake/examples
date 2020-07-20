import React from 'react'

const NavigationHover = () => {

    return (
        <div className="hover_menu menu">
            <div className="new_arrivals">
                <p className="small_main title1">⚡️ NEW ARRIVALS</p>
                <div className="content_new_arrivals">
                    <p className="body_main op_75">Luxury Holidays</p>
                    <p className="body_main op_75">Women's Sportwear</p>
                    <p className="body_main op_75">Makeup Collection</p>
                    <p className="body_main op_75">Fear of God Budget</p>
                </div>
            </div>

            <div className="popular_brands">
                <p className="small_main title2">📦 POPULAR BRANDS</p>
                <div className="content_popular_brands">
                    <div className="firstly">
                        <p className="body_main op_75">Supreme</p>
                        <p className="body_main op_75">Off-White</p>
                        <p className="body_main op_75">Yeezy</p>
                        <p className="body_main op_75">Adidas</p>
                    </div>
                    <div className="secondary">
                        <p className="body_main op_75">Nike</p>
                        <p className="body_main op_75">Gucci</p>
                        <p className="body_main op_75">Balenciaga</p>
                        <p className="body_main op_75">Bape</p>
                    </div>
                </div>
            </div>

            <div className="gifting">
                <p className="small_main title3">🎁 GIFTING</p>
                <div className="content_gifting">
                    <p className="body_main op_75">Girlfriend gifts</p>
                    <p className="body_main op_75">Boyfriend gifts</p>
                    <p className="body_main op_75">Anniversary gifts</p>
                    <p className="body_main op_75">Family gifts</p>
                </div>
            </div>

            <div className="marketplace_finds">
                <p className="small_main title4">🔥 MARKETPLACE FINDS</p>
                <div className="content_marketplace_finds">
                    <p className="body_main op_75">Girlfriend gifts</p>
                    <p className="body_main op_75">Boyfriend gifts</p>
                    <p className="body_main op_75">Anniversary gifts</p>
                    <p className="body_main op_75">Family gifts</p>
                </div>
            </div>
        </div>
    )
   
}

export default NavigationHover;