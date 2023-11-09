import React from 'react'
import Styles from '../../styles/user/userAccountHeader.module.css'
import Link from 'next/link'


export default function Header() {


  return (
    <>
      <div >

        <nav >
          <div>
            <div className="d-flex mt-4">
              <div >
                <Link href={"/user/profile"} className={`${Styles.button} ${Styles.mr10}`}>   <img src="/assets/arrow-left.png" alt="" height={24} width={24} /></Link>
              </div>
              <div>
                <div className={`${Styles.searchbox} form-control border-0 outline-0`}>
                  <span className="input-group-addon">
                    <img src="/assets/search.png" alt="" height={24} width={24} />
                  </span>
                  <input type="text" className={`${Styles.inputbox}`} placeholder="search " />
                </div>

              </div>
              <div >
                <Link href={"/"} className={`${Styles.button2} ${Styles.mr10}`}>  <img src="/assets/notification.png" alt="" height={49} width={49} /></Link>
              </div>
              <div>
                <Link href={"/"} className={`${Styles.button2} `}> <img src="/assets/logout.png" alt="" height={49} width={49} /></Link>
              </div>
            </div>
          </div>


        </nav>

      </div>



    </>
  )
}
