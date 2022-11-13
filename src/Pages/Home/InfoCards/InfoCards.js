import { accent, primary } from 'daisyui/src/colors/colorNames';
import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoCards = () => {
    const cardData =[
        {
          id:1,
          name:'Opening Hours',
          description:'Opens everytime',
          icnon:clock,
          bgClass:primary,
        },
        {
          id:2,
          name:'Visit Our Location',
          description:'Brooklyn, NY 10036, United States',
          icnon:marker,
          bgClass:accent,
        },
        {
          id:3,
          name:'Contact us now',
          description:'+000 123 456789',
          icnon:phone,
          bgClass:primary,
        },

    ]
    return (
        <div>

        </div>
    );
};

export default InfoCards;