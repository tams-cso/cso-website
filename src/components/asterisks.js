import React from 'react';

const Asterisks = () => (
   <div style={{
      position: 'absolute',
      left: 200,
      transform: 'scale(2)'
   }} className='asterisks'>
      <p style={{
         fontSize: 'calc(40px + 10vmin)',
         position: 'absolute',
         color: 'yellow',
         textShadow: '-3px -3px 0 #fff, -6px -6px 0 #000, 3px 3px 0 white, 4px 4px 0 magenta'
      }}>*</p>
      <p style={{
         fontSize: 'calc(30px + 8vmin)',
         position: 'absolute',
         color: 'magenta',
         left: -20,
         top: -20,
         textShadow: '-3px -3px 0 #fff, -6px -6px 0 #000, 3px 3px 0 white, 4px 4px 0 cyan'
      }}>*</p>
      <p style={{
         fontSize: 'calc(80px + 16vmin)',
         position: 'absolute',
         color: 'cyan',
         top: -220,
         textShadow: '-3px -3px 0 #fff, -6px -6px 0 #000, 3px 3px 0 white, 4px 4px 0 yellow'
      }}>*</p>
   </div>
);

export default Asterisks;
