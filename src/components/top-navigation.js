import React from 'react'
import { Text } from 'rebass'

const TopNavigation = (props) => (
   <div 
      style={{
         position: 'fixed',
         zIndex: 1,
         background: 'black',
         width: props.navigationOnTop ? '100vw' : 0,
         transition: 'width 0.3s 0.2s',
         height: 50,
         overflow: 'hidden',
         borderBottom: '1px cyan solid'
      }}
   >
      <ul style={{
            margin: 0, 
            listStyle: 'none', 
            padding: 0
         }}
      >
         { 
            props.links.map((link, index) => (
               <li 
                  className={props.navigationOnTop ? null : 'animateUp'} 
                  style={{
                     float: 'left', 
                     paddingLeft: window.innerWidth <= 500 ? 10 : 20,
                     position: 'relative',
                     transition: `top 0.3s ${index / 10}s ease`,
                     top: 0,
                     height: 50,
                     verticalAlign: 'middle'
                  }} 
                  key={link.text}
               >
                  <a 
                     href={ link.href }
                     style={{
                        textDecoration: 'none'
                     }}
                  >
                     <Text 
                        color='magenta'
                        fontSize={[ 2, 4 ]}
                        lineHeight='45px'
                        className='navigationLink'
                        style={{
                           height: 50,
                           textAlign: 'middle'
                        }}
                     >
                        { link.text }
                     </Text>
                  </a>
               </li>
            ))
         }
      </ul>
   </div>
)

export default TopNavigation
