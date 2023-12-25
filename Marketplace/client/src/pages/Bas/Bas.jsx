import React from 'react';
import "./Bas.css";

function Bas() {

    const data = [
        {
            id: 1,
            Photo: 'https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw4ddc3af2/images/beauty/05-PRODUCTS/01-FRAGRANCES/LCP/Y0909280/OudIspahan_Mood_946x533.jpg',
            caption: 'Slide 1',
        },
        {
            id: 2,
            Photo: 'https://www.bonheur.tn/6243-large_default/davidoff-eau-de-parfum-femme-intense-50ml.jpg',
            caption: 'Slide 2',
        },
        {
            id: 3,
            Photo: 'https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/all/pdp/rf28hdedtsr/01_RF28HDEDTSR_001_Front_Silver.jpg?$product-details-jpg$',
            caption: 'Slide 3',
        },
    ];

    return (
        <div className="container">
            <h1>New Collection</h1>
            <div className="products">
                {data.map(product => (
                    <div key={product.id} className="product">
                        <img className='image-bas' src={product.Photo}  />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bas;
