import React from 'react';

const TeamMember = (props) => (
   <div className='teammember'>
      <a href={props.link} style={{ textShadow: 'none', color: 'black', textDecoration: 'none' }}>
         <div className='imghold'>
            <div className='img' style={{backgroundImage: `url(${props.image})`}} />
         </div>
         <h3>{props.name}</h3>
         <p>{props.role}</p>
      </a>
   </div>
)

export default TeamMember
