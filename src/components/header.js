import React, { Component } from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import CircleLogo from './circle-logo'
import Navigation from './navigation'
import './header.css'

class Header extends Component {
   render = () => {
      return (
         <Flex alignItems='center' bg='black' px={40} style={{height: '100vh'}} className='blockWhenSmaller'>
            <Box width={2/3} className='halfWhenSmall'>
               <CircleLogo />
            </Box>
            <Box width={1/3} className='halfWhenSmall'>
               <Navigation links={[
                     {
                        href: '/',
                        text: 'home'
                     },
                     {
                        href: '#',
                        text: 'team'
                     },
                     {
                        href: '#',
                        text: 'competitions'
                     },
                     {
                        href: '#',
                        text: 'projects'
                     }
                  ]}
               />
            </Box>
         </Flex>
      )
   }
}

export default Header
