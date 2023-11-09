import React, { useState } from 'react'
import Styles from '../../styles/user/userAccount.module.css'
import Header from '@/components/user/Header'
import Usersidelist from '../../utility/usersidebarlist.json'
import Sidebar from '@/components/common/sidebar';
import Link from 'next/link'
import Image from 'next/image'
export default function userAccount() {
    

    const sidebarlist = Usersidelist.SidebarList.map((item, index) => {
        return (
            <li>
                <img src={item.img} alt="image" /><Link href={item.path}>{item.title}</Link>
            </li>

        )
    })






    return (
        <>
        <section className={`${Styles.bgColor}`}>
        <Image
      src={"/assets/star.png"}
      width={376}
      height={350}
      alt="image" className={`${Styles.topStar}`}
    /> 
            <div className={`${Styles.leftright0} container-fluid`}>
            <div className="row">
                <div className="col-xl-3"> 
                 <Sidebar sidebarlist={sidebarlist} />

            </div>
                <div className="col-xl-9"> 
                <div className={`${Styles.mainContainer}`}>
                <Header /> 
                <div className={`${Styles.breadcrumbGap}`}>
                <div className="row">
                        <div className="col-xl-6">
                        My <strong>Account</strong>
                        </div>
                        <div className="col-xl-6 text-end">
                        <img src="/assets/membericon.png" alt=""  height={30} width={29} /> Member Since February,2022
                        </div>
                    </div>
                </div>
                <div className={`${Styles.memberArea}`}>
                    <h4 className={`${Styles.heading}`}>Membership & Billing</h4>
                    <div className='row d-flex align-items-center'>
                    <div className="col-xl-6"> 
                    Email: name@gmail.com
                        <br/>Phone: 09009002459
                    </div>
                        <div className="col-xl-6 text-end">
                            <div className='position-relative'>
                            <img src="/assets/MembershipGirl.png" alt="girls image" className='rounded-circle' height={124} width={124
                                    
                                } />
                                <img src="/assets/filePhoto.png" alt="girls image" className={`${Styles.fileUpload} position-absolute`}  height={44} width={44
                                    
                                } />
                            </div>
                        </div>
                    </div>
                </div>
                <div pt-4>
                    <Link href="/" className={`${Styles.memberLinks}`} >
                        <div className="row">
                            <div className="col-xl-6">Change Password</div>
                            <div className="col-xl-6 text-end">
                            <img  className="me-2"    src="/assets/linkArrow.png" alt="link arrow image"  height={14} width={10} />
                            </div>
                        </div> 
                    </Link>
                    <Link href="/"  className={`${Styles.memberLinks}`} >
                        <div className="row">
                            <div className="col-xl-6">Change Phone Number</div>
                            <div className="col-xl-6 text-end">
                            <img   className="me-2"    src="/assets/linkArrow.png" alt="link arrow image"  height={14} width={10} />
                            </div>
                        </div> 
                    </Link>
                    <Link href="/" className={`${Styles.memberLinks}`} >
                        <div className="row">
                            <div className="col-xl-6">Payment Method</div>
                            <div className="col-xl-6 text-end">
                            <img  className="me-2"     src="/assets/linkArrow.png" alt="girls image"  height={14} width={10} />
                            </div>
                        </div> 
                    </Link>
                    <Link href="/"  className={`${Styles.memberLinks}`} >
                        <div className="row">
                            <div className="col-xl-6">Billing Details</div>
                            <div className="col-xl-6 text-end">
                            <img  className="me-2"     src="/assets/linkArrow.png" alt="girls image"  height={14} width={10} />
                            </div>
                        </div> 
                    </Link>
                </div>
                <div className='pt-4'>
                <button type="submit"   className={`${Styles.btnGrad} btn btn-default btn-lg text-white`}>Update Account </button>
                </div>
                <div className='pt-4'>
                <button type="submit"   className={`${Styles.btnNormal} btn btn-default btn-lg `}>Cancel Membership</button>
                </div>
                </div>
                

                </div>
            </div>   
            </div>

    


        </section>
           
            

          










        </>
    )
}
