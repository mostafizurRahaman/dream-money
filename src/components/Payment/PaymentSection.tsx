import React from 'react';
import Section from '../Section/Section';
import Tilte from '../Title/Tilte';
import bkash from '../../assets/bkash.png';
import rocket from '../../assets/rocket.png';
import nagad from '../../assets/nagad.png';
import upay from '../../assets/upay.png';
const PaymentSection = () => {
   return (
      <>
         <Section>
            <Tilte>We Accept</Tilte>
            <div className='grid lg:grid-cols-4 grid-cols-1  md:grid-cols-2 '>
                  <img className='w-60 h-auto' src={bkash} alt="" />
                  <img className='w-60 h-auto' src={nagad} alt="" />
                  <img className='w-60 h-auto' src={rocket} alt="" />
                  <img className='w-60 h-auto' src={upay} alt="" />
            </div>
         </Section>
      </>
   );
};

export default PaymentSection;