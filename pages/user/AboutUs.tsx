// import React from 'react'

// import Styles from '../../styles/user/userAccount.module.css'
// import Usersidelist from '../../utility/usersidebarlist.json'
// import Sidebar from '@/components/common/sidebar';
// import Link from 'next/link'
// import HelpHeader from '@/components/user/HelpHeader';

// export default function AboutUs() {


//     const sidebarlist = Usersidelist.SidebarList.map((item, index) => {
//         return (
//             <li>
//                 <img src={item.img} alt="image" /><Link href={item.path}>{item.title}</Link>
//             </li>

//         )
//     })

//     return (
//         <>
//             <section className={`${Styles.bgColor}`}>




//                 <div className={`${Styles.leftright0} container-fluid`}>
//                     <div className="row">
//                         <div className="col-xl-3 ">
//                             <Sidebar sidebarlist={sidebarlist} />

//                         </div>
//                         <div className="col-xl-9 col-md-9">
//                             <div className={`${Styles.mainContainer}`}>
//                                 <HelpHeader />
//                                 <div>

//                                     <Link href="/" className={`${Styles.faqtext} `}>
//                                         <div className="row ">
//                                             <div className="col-xl-12 fs-2 mt-5">
//                                                 FAQ &nbsp; <img className="me-2" src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />&nbsp;About us
//                                             </div>

//                                         </div>
//                                     </Link>
//                                 </div>





//                                 <div >

//                                 </div>

//                                 <div className={`${Styles.breadcrumbGap}`}>
//                                     <div className="row fs-5">
//                                         <div className="col-xl-12">
//                                             <strong>About US </strong>
//                                         </div>

//                                     </div>
//                                 </div>

//                                 <div pt-4>

//                                     <div className={`${Styles.memberLinks}`} >
//                                         <div className="row">


//                                             <div className="col-xl-6">
//                                                 What is Zanadu Health</div>
//                                             <div className="col-xl-6 text-end">
//                                                 <img className="me-2  data-toggle=dropdown" src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10}

//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>


//                                     <Link href="/" className={`${Styles.memberLinks}`} >
//                                         <div className="row">


//                                             <div className="col-xl-6">
//                                                 How can I access Zanadu Health?</div>
//                                             <div className="col-xl-6 text-end">
//                                                 <img className="me-2" src="/assets/linkArrow.png" alt="link arrow image" height={14} width={10} />
//                                             </div>
//                                         </div>

//                                     </Link>


//                                 </div>

//                             </div>



//                         </div>


//                     </div>
//                 </div>




//             </section>














//         </>
//     )
// }
