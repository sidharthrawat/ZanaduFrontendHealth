import React from 'react';
import Link from 'next/link';

import Styles from '../../styles/enterprise/enterpriseheader.module.css'

const Sidebar = (props) => {
  return (
    <div className={`container ${Styles.sidebar}`}>
    <div className={`${Styles.sidebar_logo}`}>
        <img src="/assets/enterprise/sidebarlogo.svg" alt="" />
    </div >

    <div className={`${Styles.sidebar_heading}`}>
    <div className={`${Styles.side_heading}`}>
<ul className={`${Styles.sidbarinner}`} >
    
    {props.sidebarlist}
   

</ul>
    
           
            
            
    </div>
    </div>
    

        
</div>
  )
}

export default Sidebar