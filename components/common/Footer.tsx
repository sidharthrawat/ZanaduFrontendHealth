import React from 'react'
import Styles from '../../styles/common.module.css'
import Link from 'next/link'
export const Footer = () => {
  return (
    <>
    
      <div className={`container-fluid ${Styles['footer-main']} `}>
        <div className="row">
        
          <div className="col-lg-6">
            <div className={Styles['footer-left']} >
           
              <div className={`container ${Styles.footerlogo}`}>
              <img src="/assets/footer-logo.png" className='img-fluid' alt="Zanadu Health" height={112} width={103} />
              
                
              <p>Zanadu Health</p>
               
            <div className={Styles['footer-social']} >
              <Link href="/"><img src="/assets/social/Facebook.svg" 
              alt="Zanadu Health Facebook" 
              className='img-fluid'
              /></Link>
              <Link href="/"><img src="/assets/social/Linkedin.svg" 
              alt="Zanadu Health Linkedin" 
              className='img-fluid'
              /></Link>
              <Link href="/"> <img src="/assets/social/instagram.svg" 
              alt="Zanadu Health Instagram"
              className='img-fluid'
              /></Link>
              </div>
            </div>
          </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className=" col-12 col-lg-4">
                <h3>Company</h3>
                <ul>    
                  <li><Link href="/">About</Link></li>
                  <li><Link href="/">Blog</Link></li>
                  <li><Link href="/">Offerings </Link></li>
                  <li><Link href="/">Health Coaches</Link></li>
                  <li><Link href="/">Speciality Coaches</Link></li>
                </ul>
              </div>
              <div className=" col-12 col-lg-4">
                <h3>Join Now</h3>
                <ul>
                  <li><Link href="/"> Plans</Link></li>
                  <li><Link href="/">Become a Coach</Link></li>
                  <li><Link href="/">Enterprise Client</Link></li>
                </ul>
              </div>
              <div className=" col-12 col-lg-4">
                <h3>Help</h3>
                <ul>
                  <li><Link href="/"> Faq</Link></li>
                  <li><Link href="/">Contact Us</Link></li>
                  <li><Link href="/">Privacy Policy</Link></li>
                  <li><Link href="/">Cancellation Policy</Link></li>
                  <li><Link href="/">Auto Renewal Policy</Link></li>
                  <li><Link href="/">Terms of Agreement</Link></li>
                  <li><Link href="/">Terms Of Service</Link></li>
                  <li><Link href="/">HIPAA Privacy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <g clip-path="url(#clip0_659_2279)">
    <path d="M10.0003 19.2555C5.40033 19.2555 1.66699 15.5222 1.66699 10.9222C1.66699 6.3222 5.40033 2.58887 10.0003 2.58887C14.6003 2.58887 18.3337 6.3222 18.3337 10.9222C18.3337 15.5222 14.6003 19.2555 10.0003 19.2555Z" stroke="black" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.3995 13.4222C11.7919 13.9581 11.0098 14.2544 10.1995 14.2555C8.35788 14.2555 6.86621 12.7639 6.86621 10.9222C6.86621 9.08053 8.35788 7.58887 10.1995 7.58887C11.0098 7.59003 11.7919 7.88627 12.3995 8.4222" stroke="black" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_659_2279">
      <rect width="20" height="20" fill="white" transform="translate(0 0.921875)"/>
    </clipPath>
  </defs>
</svg>
<span> Zanadu Health. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </>
  )
}
