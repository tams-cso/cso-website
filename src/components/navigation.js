import React from 'react'
import { Text } from 'rebass'
import './navigation.css'

const Navigation = (props) => (
   <ul style={{margin: 0, listStyle: 'none', padding: 0}}>
      { 
         props.links.map((link, index) => (
            <li 
               className={props.navigationOnTop ? 'animateRight' : null} 
               key={link.text}
               style={{
                  transition: `right 0.3s ${index / 10}s ease-in`,
                  top: 0,
                  right: 0,
                  position: 'relative'
               }}
            >
               <a 
                  href={ link.href }
                  style={{
                     textDecoration: 'none'
                  }}
               >
                  <Text 
                     color='magenta'
                     fontSize={[ 3, 4, 5 ]}
                     lineHeight='2em'
                     className='navigationLink'
                  >
                     { link.text }
                  </Text>
               </a>
            </li>
         ))
      }
   </ul>
)

export default Navigation
