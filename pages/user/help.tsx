import React from 'react'
import Styles from '../../styles/user/userAccount.module.css'
import Usersidelist from '../../utility/usersidebarlist.json'
import Sidebar from '@/components/common/sidebar';
import Link from 'next/link'
import HelpHeader from '@/components/user/HelpHeader';

export default function help() {


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
                                <HelpHeader />
                                <div className={`${Styles.breadcrumbGap}`}>
                                    <div className="row fs-5">
                                        <div className="col-xl-12">
                                            <strong>How Can I Help You ? </strong>
                                        </div>

                                    </div>
                                </div>

                                <div pt-4>

                                    <Link href="/user/AboutUs" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                                <span ><img src='/assets/aboutus-icon.png' height={24} width={25}></img></span>
                                                &nbsp; About us</div>
                                            <div className="col-xl-6 text-end">
                                                <img   className="me-2"   src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>

                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                            <span ><img src='/assets/cancel-icon.png' height={24} width={25}></img></span>
                                            &nbsp;   Cancellation</div>
                                            <div className="col-xl-6 text-end">
                                                <img  className="me-2"     src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>


                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                            <span ><img src='/assets/technical-issue-icon.png' height={24} width={25}></img></span>
                                            &nbsp;   Technical Issues</div>
                                            <div className="col-xl-6 text-end">
                                                <img  className="me-2"     src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>


                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                            <span ><img src='/assets/contact-icon.png' height={24} width={25}></img></span>
                                            &nbsp;     Contact</div>
                                            <div className="col-xl-6 text-end">
                                                <img  className="me-2"     src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>


                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                            <span ><img src='/assets/term-service-icon.png' height={24} width={25}></img></span>
                                            &nbsp;    Terms of Service</div>
                                            <div className="col-xl-6 text-end">
                                                <img  className="me-2"     src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>


                                    <Link href="/" className={`${Styles.memberLinks2}`} >
                                        <div className="row">


                                            <div className="col-xl-6">
                                            <span ><img src='/assets/search.png' height={21} width={22}></img></span>
                                            &nbsp;    Privacy Policy</div>
                                            <div className="col-xl-6 text-end">
                                                <img   className="me-2"      src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
                                            </div>
                                        </div>

                                    </Link>

                                </div>
                                <div className='pt-4'>
                                    <button type="submit" className={`${Styles.btnGrad} btn btn-default btn-lg text-white`}>Update Account </button>
                                </div>
                                <div className='pt-4'>
                                    <button type="submit" className={`${Styles.btnNormal} btn btn-default btn-lg `}>Cancel Membership</button>
                                </div>
                            </div>



                        </div>


                    </div>
                </div>




            </section>














        </>
    )
}
