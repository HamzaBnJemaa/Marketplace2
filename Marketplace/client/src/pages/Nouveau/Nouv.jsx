// Nouv.jsx

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Nouv.css';

function Nouv() {
  const data = [
    {
      id: 1,
      Photo: 'https://www.masculin.com/wp-content/uploads/sites/2/2021/06/MOOD-MAISON-CHRISTIAN-DIOR-EDEN-ROC-1568x1045.jpg',
      caption: 'Slide 1',
    },
    {
      id: 2,
      Photo: 'https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw4ddc3af2/images/beauty/05-PRODUCTS/01-FRAGRANCES/LCP/Y0909280/OudIspahan_Mood_946x533.jpg',
      caption: 'Slide 2',
    },
    {
      id: 3,
      Photo: 'https://www.nocibe.fr/fstrz/r/s/www.nocibe.fr/bibliotheque/OP_TRADE/2021/juillet/floriane/Visuelstetieresparfums_02.jpg?frz-v=5517',
      caption: 'Slide 3',
    },
  ];

  return (
    <div className='slide-container'>
      <Slide>
        {data.map((el, i) => (
          <div className='slide-item' key={i}>
            <img className='slide-image' src={el.Photo} alt={el.caption} />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Nouv;
