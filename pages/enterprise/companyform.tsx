import React from 'react';
import Styles from '../../styles/enterprise/basicprofile.module.css'
import Link from 'next/link';
import Header from '../../components/enterprise/Header'

const Companyform = () => {
  return (
    <>
    <Header />
    <div className={`${Styles.mainpage}`}>
    <div className={`container ${Styles.companyprofile}`}>
        <div className={`${Styles.basic_heading}`}>
            <p>Company Information</p>
        </div>

        <div className={`${Styles.formcontainer}`}>
            <div className={`${Styles.input_block}`}>
                <div className={`${Styles.input_title}`}>
                    Company Name(Full*)
                </div>
                
                <input type="text" placeholder='Avantika Innovation' />
               

            </div>

            <div className={`${Styles.input_block}`}>
                <div className={`${Styles.input_title}`}>
                Company Name( Short*)
                </div>
                
                <input type="text" placeholder='Avantika' />
               

            </div>

            <div className={`${Styles.input_block}`}>
                <div className={`${Styles.input_title}`}>
                Tax Identification No(Tax id*)
                </div>
                
                <input type="number" placeholder='2345' />
               

            </div>

            <div className={`${Styles.input_block}`}>
                <div className={`${Styles.input_title}`}>
                    Company Size
                </div>
                
                <input type="number" placeholder='1000-2000' />
               

            </div>

            <p>Address</p>

            <div className={`${Styles.input_block}`}>
                <div className={`${Styles.input_title}`}>
                    Line 1
                </div>
                
                <input type="text" placeholder='Enter details' />
               

            </div>

            <div className={`${Styles.input_block}`}>
                <div className={`${Styles.input_title}`}>
                    Line 2
                </div>
                
                <input type="text" placeholder='Enter details' />
               

            </div>

            <div className={`${Styles.input_block}`}>
                <div className={`${Styles.input_title}`}>
                    Country
                </div>
                
                <input type="text" placeholder='USA' />
               

            </div>

            <div className={`${Styles.input_block}`}>
                <div className={`${Styles.input_title}`}>
                    State
                </div>
                
                <input type="text" placeholder='Enter Details' />
               

            </div>

            <div className={`${Styles.input_block}`}>
                <div className={`${Styles.input_title}`}>
                    City
                </div>
                
                <input type="text" placeholder='Enter Details' />
               

            </div>

            <div className={`${Styles.input_block}`}>
                <div className={`${Styles.input_title}`}>
                    Pin Code
                </div>
                
                <input type="text" placeholder='Enter Details' />
               

            </div>

            

        </div>

        


        <Link className={`${Styles.updatebutton}`}  href='/enterprise/step2'> Update & Select Plan
        </Link>
        <Link className={`${Styles.goback}`} href='/enterprise/step1'>Go Back

        </Link>

    </div>
    </div>

    </>
  )
}

export default Companyform