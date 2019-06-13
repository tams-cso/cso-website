import React from 'react'
import './circle-logo.css'

const CircleLogo = () => (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" vector-effect="non-scaling-stroke" class="circle-logo" style={{display: 'block', maxWidth: '100%', margin: '0 auto', fill: 'none', stroke: 'cyan'}}>
      <circle cx="32" cy="32" r="32" fill="#000" stroke="none"></circle>
      <circle cx="32" cy="32" r="30" stroke-width="1" vector-effect="non-scaling-stroke" opacity="0.5"></circle>
      <g>
         <circle cx="32" cy="32" r="24" stroke-width="2" vector-effect="non-scaling-stroke" class="circle1"></circle>
         <circle cx="32" cy="32" r="24" stroke-width="2" vector-effect="non-scaling-stroke" class="circle2"></circle>
      </g>
      <text x="32" y="34" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="bold" font-size="4" stroke="none" fill="white" style={{textTransform: 'uppercase', letterSpacing: '0.5em'}}>
         CSO
      </text>
   </svg>
)

export default CircleLogo
