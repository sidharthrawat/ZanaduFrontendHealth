import React from 'react'
import Styles from '../../styles/user/help.module.css'
import Link from 'next/link'
export default function HelpHeader() {
  return (
    <>

      <>
        <div >

          <nav >
            <div>
              <div className="d-flex mt-4 justify-content-between">

              <div className="d-flex justify-content-start">
              <div >
                  <Link href={"/user"} className={`${Styles.button} ${Styles.mr10}`}>   <img src="/assets/arrow-left.png" alt="" height={24} width={24} /></Link>
                </div>


                <div>
                  <div >
                    {/* <button type="button" > Help & <strong>Support</strong></button> */}


                    <div>
                  <Link href={"/user/help"} className={`${Styles.helpbutton} `}>
                    <div className={`${Styles.helpsupport}`}>
                     Help & <strong> Support</strong>
                    </div>
                  </Link>
                </div>

                  </div>
                </div>

              </div>
                


              <div className="d-flex justify-content-end">
              <div >
                  <Link href={"/"} className={`${Styles.button2} ${Styles.mr10}`}>  <img src="/assets/notification.png" alt="" height={49} width={49} /></Link>
                </div>
                <div>
                  <Link href={"/"} className={`${Styles.button2} `}> <img src="/assets/logout.png" alt="" height={49} width={49} /></Link>
                </div>

              </div>
                 
               
              </div>
            </div>


          </nav>

        </div>



      </>

    </>
  )
}
