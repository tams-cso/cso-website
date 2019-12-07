import React from 'react';

const Asterisks = () => (
   <div style={{
      position: 'absolute',
      transform: 'scale(2)'
   }} className='asterisks'>
      <p style={{
         fontSize: '100px',
         position: 'absolute',
         color: 'yellow',
         textShadow: '-3px -3px 0 #fff, -6px -6px 0 #000, 3px 3px 0 white, 4px 4px 0 magenta'
      }}>*</p>
      <p style={{
         fontSize: '80px',
         position: 'absolute',
         color: 'magenta',
         left: -20,
         top: -20,
         textShadow: '-3px -3px 0 #fff, -6px -6px 0 #000, 3px 3px 0 white, 4px 4px 0 cyan'
      }}>*</p>
      <p style={{
         fontSize: '200px',
         position: 'absolute',
         color: 'cyan',
         top: -220,
         textShadow: '-3px -3px 0 #fff, -6px -6px 0 #000, 3px 3px 0 white, 4px 4px 0 yellow'
      }}>*</p>
   </div>
);

export default Asterisks;
