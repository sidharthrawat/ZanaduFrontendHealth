import React from 'react'
import Styles from '../../styles/user/userAccount.module.css'
import Usersidelist from '../../utility/usersidebarlist.json'
import Sidebar from '@/components/common/sidebar';
import Link from 'next/link'

import ProfileHeader from '@/components/user/ProfileHeader';

export default function profile() {


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




                <div className={`${Styles.leftright0} container-fluid`}>
                    <div className="row">
                        <div className="col-xl-3 ">
                            <Sidebar sidebarlist={sidebarlist} />

                        </div>
                        <div className="col-xl-9 col-md-9">
                            <div className={`${Styles.mainContainer}`}>
                                <ProfileHeader />
                                <div className={`${Styles.breadcrumbGap}`}>
                                    <div className="row fs-5">
                                        <div className="col-xl-12">
                                            My <strong>Profile </strong>
                                        </div>

                                    </div>
                                </div>


                                <div >
                                    <div >
                                        <div className='row d-flex align-items-center mb-4'>
                                            <div className="col-xl-2 text-start ">
                                                <div className='position-relative'>
                                                    <img src="/assets/MembershipGirl.png" alt="girls image" className='rounded-circle' height={124} width={124

                                                    } />
                                                    <img src="/assets/filePhoto.png" alt="girls image" className={`${Styles.fileUpload} position-absolute`} height={44} width={44

                                                    } />
                                                </div>
                                            </div>

                                            <div className="col-xl-4 text-start ">
                                                <strong>Alena Eddy</strong>
                                                <br />
                                                alenaeddy@gmail.com
                                            </div>
                                            <div className=' col-xl-6 text-end '>
                                                <button type="submit" className={`${Styles.updatebutton} btn btn-default btn-lg text-white`}>Edit Profile</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div pt-4>

                                    <Link href="/user/userAccount" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                                <span ><img src='/assets/myaccount-icon.png' height={24} width={25}></img></span>
                                                &nbsp; My Account</div>
                                            <div className="col-xl-6 text-end ">
                                                <img className="me-2" src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>

                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                                <span ><img src='/assets/notification-icon.png' height={26} width={21}></img></span>
                                                &nbsp;  Notifications</div>
                                            <div className="col-xl-6 text-end">
                                                <img className="me-2" src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>


                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                                <span ><img src='/assets/calander-icon.png' height={26} width={23}></img></span>
                                                &nbsp;  Calendar Reminder</div>
                                            <div className="col-xl-6 text-end">
                                                <img className="me-2" src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>


                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                                <span ><img src='/assets/myplan-icon.png' height={27} width={26}></img></span>
                                                &nbsp;  My Plan</div>
                                            <div className="col-xl-6 text-end">
                                                <img className="me-2" src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>


                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                                <span ><img src='/assets/scorecard-icon.png' height={12} width={11}></img></span>
                                                &nbsp;   My ZH Score Card</div>
                                            <div className="col-xl-6 text-end">
                                                <img className="me-2" src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>


                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                                <span ><img src='/assets/language-icon.png' height={26} width={26}></img></span>
                                                &nbsp;   Language</div>
                                            <div className="col-xl-6 text-end">
                                                <img className="me-2" src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>



                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                                <span ><img src='/assets/helpsupport-icon.png' height={24} width={24}></img></span>
                                                &nbsp;    Help & Support</div>
                                            <div className="col-xl-6 text-end">
                                                <img className="me-2" src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>


                                </div>


                            </div>


                        </div>
                    </div>
                </div>




            </section>


        </>
    )
}
