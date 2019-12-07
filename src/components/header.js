import React, { Component } from 'react'
import { Box, Flex } from 'rebass'
import CircleLogo from './circle-logo'
import Navigation from './navigation'
import TopNavigation from './top-navigation'
import './header.css'

class Header extends Component {
   constructor (props) {
      super(props)
      this.state = {
         navigationOnTop: false,
         links: [
            {
               href: '/',
               text: 'home'
            },
            {
               href: '#resources',
               text: 'resources'
            },
            {
               href: '#team',
               text: 'team'
            },
            {
               href: 'https://www.facebook.com/groups/CSO2020/',
               text: 'facebook'
            }
         ]
      }
   }

   componentDidMount = () => {
      window.addEventListener('scroll', this.handleScroll)
   }

   handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 20) {
         this.setState({ navigationOnTop: true })
      } else {
         this.setState({ navigationOnTop: false })
      }
   }

   render = () => {
      return (
         <div>
            <TopNavigation links={this.state.links} navigationOnTop={this.state.navigationOnTop} />
            <Flex alignItems='center' bg='black' px={40} style={{height: '100vh'}} className='blockWhenSmaller'>
               <Box width={2/3} className='halfWhenSmall'>
                  <CircleLogo />
               </Box>
               <Box width={1/3} className='halfWhenSmall'>
                  <Navigation links={this.state.links} navigationOnTop={this.state.navigationOnTop} />
               </Box>
            </Flex>
         </div>
      )
   }
}

export default Header
