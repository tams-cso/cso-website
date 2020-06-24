import React from 'react';
import team from './team.json';
import TeamMember from './team-member';
import './team.css';

const Team = () => (
   <div>
      <section>
         <a name='team' href='# ' style={{ position: 'relative', top: -80 }}> </a>
         <h2>Team</h2>
         <div className='members'>
            {
               team.map(member => (
                  <TeamMember name={member.name} role={member.role} image={member.image} link={member.link} />
               ))
            }
         </div>
      </section>
   </div>
)

export default Team;
