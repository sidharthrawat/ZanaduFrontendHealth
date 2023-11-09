import React from 'react';
import Styles from '../../styles/enterprise/index.module.css'
import Header from '../../components/enterprise/Header'

const Step2 = () => {
  return (
    <>
    <Header />
    <div className={`${Styles.data_container}`}>

        
<div className={`${Styles.circlebox}`}>
    <div className={`${Styles.circle}`}>
        
            <img  src="/assets/enterprise/tick.svg" alt="" />
    </div>
            
            <div className={`${Styles.line}`}></div>

            <div className={`${Styles.circle}`}>
        
            <img  src="/assets/enterprise/tick.svg" alt="" />
    </div>
            
            <div className={`${Styles.line}`}></div>
            <img src="/assets/enterprise/greycircle.svg" alt="" />
            
            <div className={`${Styles.line}`}></div>
            <img src="/assets/enterprise/greycircle.svg" alt="" />
           

        </div>

        <div className={`${Styles.msgcontainer}`}>
          <div className={`${Styles.msgcontent}`}>
            <p>Get started on an awesome health experience for your workforce!


</p>
<div className={`${Styles.button}`}>Select Plan</div>




          </div>

        </div>


        

      </div>
      </>
  )
}

export default Step2;