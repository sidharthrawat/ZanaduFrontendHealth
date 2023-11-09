import Header from '@/components/enterprise/Header';
import React from 'react'
import Styles from '../../styles/enterprise/plan.module.css'

const Plan = () => {
  return (
    <>
    <Header />
    <div className={`${Styles.blocks}`}>
        <p>Please select a plan </p>


        <div className={`${Styles.plans_block}`}>

        <div className={`${Styles.plan1_block}`}>

            <p>Basic</p>
            <div>Perfect For Beginners</div>
            <div>120/employee/year</div>

        </div>

        <div className={`${Styles.plan2_block}`}>
        <p>Basic Plus</p>

        </div>

        <div className={`${Styles.plan1_block}`}>
        <p>Basic Premium</p>

        </div>

        </div>
    </div>
    </>
  )
}

export default Plan