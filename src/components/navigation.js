import React from 'react'
import { Text } from 'rebass'
import './navigation.css'

const Navigation = (props) => (
   <ul sytle={{margin: 0, listStyle: 'none'}}>
      { 
         props.links.map((link) => (
            <li>
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
