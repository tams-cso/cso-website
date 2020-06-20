import React from 'react';
import resources from './resources.json';
import Asterisks from './asterisks';

const Resources = (props) => (
   <div>
      <Asterisks />
      <section style={{ minHeight: 600, marginBottom: 100 }}>
         <div className='wrap' style={{ position: 'relative' }}>
            <div style={{ textAlign: 'right', right: 0, maxWidth: '380px', position: 'absolute' }}>
               <a name='resources' href='# ' style={{ position: 'relative', top: -80 }}> </a>
               <h2>Resources</h2>
               {
                  resources.sections.map(section => (
                     <div>
                        <h3>{ section.title }</h3>
                        {
                           section.links.map(resource => (
                              <div>
                                 <a href={ resource.url }>{ resource.title }</a>
                              </div>
                           ))
                        }
                     </div>
                  ))
               }
            </div>
         </div>
      </section>
   </div>
)

export default Resources;
