import React from "react";
import './Collection.css';

const Collection = () => {
    return (
        <section className="collection">
            <div className="collection-card">
                <img src="public/images/homepage/25Q3_August_Remix_Site_3xPromo-01_Desktop-Mobile_9x16_19c117cd-e71f-4d92-bacc-4d351a1194db.jpg.jpeg" alt="Collection 1" className="collection-image" />
                <div className="collection-text">
                    <h2>The New Remix Collection</h2>
                    <p>Sustainably crafted with superior comfort and effortles style.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>

            <div className="collection-card">
                <img src="public/images/homepage/25Q2_BAU_Site_Homepage_3xPromo-TreeCollection_Lifestyle_Desktop_2x3_9bfe6ee7-e251-4075-a78c-a0e617dd8e87.jpg.jpeg" alt="Collection 2" className="collection-image" />
                <div className="collection-text">
                    <h2>Tree Collection</h2>
                    <p>Comfort,breathability, and style for miles(and miles and miles)</p>
                    <div className="button-group">
                    <button>SHOP MEN</button>
                    <button>SHOP WOMEN</button>
                </div>
            </div>
        </div>


        <div className="collection-card">
            <img src="public/images/homepage/25Q2_BAU_Site_Homepage_3xPromo-BreezyBestSellers_Lifestyle_Desktop_2x3_e4f79209-6ff4-4ce1-bf1d-675dbe340da2.png" alt="Collection 3" className="collection-image" />
            <div className="collection-text">
                <h2>Breezy BestSellers</h2>
                <p>Light and airy staples for anytime, anywhere</p>
                <div className="button-group">
                    <button>SHOP MEN</button>
                    <button>SHOP WOMEN</button>
                    </div>
            </div>
        </div>
    </section>
    );
};

export default Collection;
