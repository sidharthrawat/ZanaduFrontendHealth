import React from 'react';
import Styles from '../../styles/enterprise/index.module.css'
import Header from '@/components/enterprise/Header';
import Link from 'next/link';


const Step1 = () => {
  return (
    <>

    <Header />
    <div className={`${Styles.mainpage}`}>
    <div className={`${Styles.data_container}`}>

        
<div className={`${Styles.circlebox}`}>
    <div className={`${Styles.circle}`}>
        
            {/* <img  src="/assets/enterprise/greencircle.svg" alt="" /> */}
            <img  src="/assets/enterprise/tick.svg" alt="" />
    </div>
            
            <div className={`${Styles.line}`}></div>

            <img src="/assets/enterprise/greycircle.svg" alt="" />
            
            <div className={`${Styles.line}`}></div>
            <img src="/assets/enterprise/greycircle.svg" alt="" />
            
            <div className={`${Styles.line}`}></div>
            <img src="/assets/enterprise/greycircle.svg" alt="" />
           

        </div>

        <div className={`${Styles.msgcontainer}`}>
          <div className={`${Styles.msgcontent}`}>
            <p>Your company details are incomplete. Kindly update the details to proceed further!

</p>
<Link className={`${Styles.button}`} href='/enterprise/companyform'>Update Company Details</Link>




          </div>

        </div>
      </div>
      </div>

      </>
  )
}

export default Step1;