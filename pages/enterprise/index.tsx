"use client"; 
import React, { useState } from 'react'
import Header from '../../components/enterprise/Header'
import Styles from '../../styles/enterprise/index.module.css'
import Link from 'next/link'
import Enterprisesidelist from '../../utility/enterprisesidebarlist.json';
import Sidebar from '@/components/common/sidebar';

const Enterprise = () => {
  const [display,setDisplay] = useState(true);
  const [show,setShow] = useState(false);
  const sidebarlist= Enterprisesidelist.SidebarList.map((item,index)=>{
    return (
       <li>
         <img src={item.img} alt="image" /><Link href={item.path}>{item.title}</Link> 
       </li>

    )
})


  return (
    <>
    <Header />
    <Sidebar sidebarlist={sidebarlist} />

    
    <div className={`${Styles.mainpage}`}>
    {
      display && 
      <div className={`${Styles.data_container}`}>

        
        <div className={`${Styles.circlebox}`}>
            <img src="/assets/enterprise/greycircle.svg" alt="" />
            
            <div className={`${Styles.line}`}></div>

            <img src="/assets/enterprise/greycircle.svg" alt="" />
            
            <div className={`${Styles.line}`}></div>
            <img src="/assets/enterprise/greycircle.svg" alt="" />
            
            <div className={`${Styles.line}`}></div>
            <img src="/assets/enterprise/greycircle.svg" alt="" />
           

        </div>

        <div className={`${Styles.msgcontainer}`}>
          <div className={`${Styles.msgcontent}`}>
            <p>You have not updated your Basic Profile yet. Kindly update to proceed further!
</p>
<div className={`${Styles.button}`} onClick={()=>{setShow(true); setDisplay(!display)}}>Update Basic Profile</div>




          </div>

        </div>


        

      </div>

       
    }



{show && 
 <div className={`container ${Styles.basicprofile}`}>
 <div className={`${Styles.basic_heading}`}>
     <p>Edit Profile Information</p>
 </div>

 <div className={`${Styles.profileContainer}`}>
 <img src="/assets/profile.svg" alt="" />

 <div>

 <button className={`${Styles.uploadButton}`}>Choose a file</button>
 <p>Acceptable formats jpg , png , only max size  file  size is 500 Kb  and min size 70 kb </p>
 </div>

 </div>


 <div className={`${Styles.formcontainer}`}>
     <div className={`${Styles.input_block}`}>
         <div className={`${Styles.input_title}`}>
             First Name
         </div>
         
         <input type="text" placeholder='Victoria' />
        

     </div>

     <div className={`${Styles.input_block}`}>
         <div className={`${Styles.input_title}`}>
             Last Name
         </div>
         
         <input type="text" placeholder='Vieira' />
        

     </div>

     <div className={`${Styles.input_block}`}>
         <div className={`${Styles.input_title}`}>
             Work Email
         </div>
         
         <input type="email" placeholder='Victoria@avantika.in' />
        

     </div>

     <div className={`${Styles.input_block}`}>
         <div className={`${Styles.input_title}`}>
             Work Phone Number with Ext.
         </div>
         
         <input type="number" placeholder='Enter' />
        

     </div>

     <div className={`${Styles.input_block}`}>
         <div className={`${Styles.input_title}`}>
             Company Size
         </div>
         
         <input type="number" placeholder='1500' />
        

     </div>

     <div className={`${Styles.input_block}`}>
         <div className={`${Styles.input_title}`}>
             Gender
         </div>
         
         <input type="button" placeholder='Select' />
        

     </div>

     <div className={`${Styles.input_block}`}>
         <div className={`${Styles.input_title}`}>
             Company Name
         </div>
         
         <input type="text" placeholder='Avantika Innovation' />
        

     </div>

     <div className={`${Styles.input_block}`}>
         <div className={`${Styles.input_title}`}>
             Designation
         </div>
         
         <input type="text" placeholder='Designer' />
        

     </div>

     

 </div>


 <Link className={`${Styles.updatebutton}`} href='/enterprise/step1'>Update

 </Link>
 <div className={`${Styles.goback}`} onClick={()=>{setShow(!show); setDisplay(!display)}} >Go Back

 </div>

</div>
}

      

    </div>
    
    </>
  )
}

export default Enterprise