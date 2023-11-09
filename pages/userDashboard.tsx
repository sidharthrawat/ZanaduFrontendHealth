import Header from '@/components/common/Header'
import { Footer } from "@/components/common/Footer"
import React from 'react'
 import styles from '../styles/user.module.css'

import Link from "next/link"
 
export default function userDashboard() {
    return (
        <div>
            <Header />

            <div className={styles.demoGradientBg}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-12 mb-5">
                            <img src="/assets/demo/logo.png" className='img-fluid'
                                alt="Zanadu Health" height={146} width={141} />



                            <h1 className={styles.h2}>
                                Curious how Zanadu Health Enterprise works?
                            </h1>
                            <p className={styles.content}>
                                Our customized health plans...improve their mental health, leading to increased productivity, better team work & collaboration, lower turnover and absenteeism. With impact measurement analytics, employers get a real time look into their workforce's overall health progress. A great employee experience can only strengthen your most valuable asset- human capital!
                                <br />  <br />
                                <strong>
                                    The positive impact of Zanadu Health Enterprise across the global workforce:
                                </strong>  <br />
                            </p>
                            <div className={styles.testimonial}>
                                {/* <strong               className={styles.comma}></strong> */}

                                <img src="/assets/demo/comma.png"
                                    alt="Zanadu Health" height={17} width={25} />
                                <p className={styles.contentTestimonial}>
                                    As a result of our Mindful Manager program, 60% of managers
                                    reported less stress- related impairment in their day-to-day
                                    activities, and 54% were better able to regulate and rephrase
                                    their emotions.
                                </p>
                                <div className={styles.testimonialInnerBlock}>
                                    <img src="/assets/demo/testimonial.png" alt="Zanadu Health" height={65} width={65} />
                                    <p className={styles.testimonialInnerBlockContent} >
                                        <strong>Taylor Dua</strong><br />
                                        Associate Director of Human Resource at Oglivy
                                    </p>

                                </div>
                                <div className={styles.testimonialInnerBlockArrow}>
                                    <img src="/assets/demo/arrow_prev.png" alt="Zanadu Health" height={33} width={31} />
                                    <img src="/assets/demo/arrow_next.png" alt="Zanadu Health" height={33} width={31} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-1 col-12">&nbsp;</div>
                        <div className="col-xl-5 col-12">
                            <div className="bg-white rounded-3 shadow p-4">
                                <h3 className={styles.formHeading}>Request a Demo </h3>
                                <p className={styles.formGreyContent} >
                                    Connect with a ZH specialist to experience how we can prioritize the overall health and wellness of your workforce..
                                </p>
                                <div className="row">
                                    <div className="col-xl-12 col-12 mb-4">
                                        <div className="form-group">
                                            <label className={styles.formLabel} >Work email  </label>
                                            <input type="text" className={`${styles.inputbox}  form-control`} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-12 mb-4">
                                        <div className="form-group">
                                            <label className={styles.formLabel} >First Name</label>
                                            <input type="text" className={`${styles.inputbox}  form-control`} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-12 mb-4">
                                        <div className="form-group">
                                            <label className={styles.formLabel} >Last Name</label>
                                            <input type="text" className={`${styles.inputbox}  form-control`} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-12 mb-4">
                                        <div className="form-group">
                                            <label className={`${styles.formLabel}  ${styles.inputbox} `}
                                            >Company Size</label>
                                            <select className="form-select" id="sel1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-12 mb-4">
                                        <div className="form-group">
                                            <label className={`${styles.formLabel}  ${styles.inputbox} `}

                                            >Company Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-12 mb-4">
                                        <div className="form-group">
                                            <label className={styles.formLabel} >Job Title</label>
                                            <input type="text" className={`  ${styles.inputbox} form-control`}


                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-12 mb-4">
                                        <div className="form-group">
                                            <label className={styles.formLabel} >State</label>
                                            <select className={`${styles.inputbox} form-select`} id="sel1">
                                                <option>Newyork</option>
                                                <option>Los Angelas</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-12 mb-4">
                                        <div className="form-group">
                                            <label className={styles.formLabel} >Country</label>
                                            <select className={`${styles.inputbox} form-select`} id="sel1">
                                                <option>USA</option>
                                                <option>India</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-12 mb-4">
                                        <div className="form-group">
                                            <label className={styles.formLabel} >Tell Us More</label>
                                            <textarea

                                                className={`${styles.inputtextarea} form-control`} cols={3} rows={4}

                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-12">
                                        <button type="submit" className={`${styles.btnGrad} btn btn-default`}>Book Demo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btmBorder}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h2 className='text-center fs-3 mb-4'>The holistic integrated approach of 7 offerings for a healthier workforce

                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-12">
                            <div className={styles.lightBlueGrad}>
                                <div className='fs-4'>
                                    <small className='fs-6'>Self Guided</small>
                                    <br />
                                    <strong>ZH basic for employee&nbsp; <img src="/assets/demo/rightArrow.png" alt="Zanadu Health" height={13} width={16} /></strong>
                                    <p className={styles.packageContent}>
                                        Your employees can select their own speciality coaches & access the entire library of lessons & group session at their conveniences to improve their overall wellness, health & happiness.
                                    </p>
                                    <ul className={styles.listNone}>
                                        <li className={styles.listBg}>Full length Lessons</li>
                                        <li className={styles.listBg}>Group Sessions</li>
                                        <li className={styles.listBg}>Speciality Coaches</li>
                                        <li className={styles.listBg}>Health Coach  </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-12"></div>
                        <div className="col-xl-5 col-12">
                            <div className={styles.lightBlueGreen}>
                                <div className='fs-4'>
                                    <small className='fs-6'>Advance Guided Experience</small>
                                    <br />
                                    <strong>ZH premium for employee &nbsp; <img src="/assets/demo/rightArrow.png" alt="Zanadu Health" height={13} width={16} /></strong>
                                    <p className={styles.packageContent}>
                                        Your employees can select a Health Coach who can guide them step-by-step in the journey towards wellness health, happiness, also includes access to specialised camps & workshops with specialised focused.
                                    </p>
                                    <ul className={styles.listNone}>
                                        <li className={styles.listBg}>Full length Lessons</li>
                                        <li className={styles.listBg}>Group Sessions</li>
                                        <li className={styles.listBg}>One on One Sessions</li>
                                        <li className={styles.listBg}>Camps & Workshops </li>
                                        <li className={styles.listBg}>
                                            Health Coach & Speciality Coaches
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btmGrad}>
                <div className="container">
                    <p className={styles.bottomContent}>
                        A healthier employee is a happier and more productive worker! That benefits the employer with lower turnover rates, absenteesim and healthcare cost. <br />
                        <strong>Win win for both!</strong>
                    </p>
                    <div className="row">
                        <div className="col-xl-7 col-12 mb-5">
                            <h4>Wellness in the pocket of your employees anytime, anywhere-</h4>
                            <ul className={styles.listNoneBottom}>
                                <li className={styles.listBgBottom}>Access to more than 5k+ hours of ofcurated content.</li>
                                <li className={styles.listBgBottom}>Personalised plan designed by expert Health
                                    Coaches.  </li>
                                <li className={styles.listBgBottom}>  Real time overview and impact measurement analytics on the workforces' overall health progress.</li>
                            </ul>
                            <div className='text-center pt-4 '>
                                <a href="#" className={`${styles.btnGrad3} btn btn-default`}>View Enterprise Plans</a>
                            </div>

                        </div>
                        <div className="col-xl-5 col-12 mb-5">
                            <img src="/assets/demo/mobilScreens.png" alt="Zanadu Health" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <Footer />
                <div className={styles.bottomFixed}>
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="col-xl-8 col-12">We use cookies to ensure that we give you the best experience on our website. <Link className={styles.bottomLinks} href="/">Privacy policy</Link></div>
                            <div className="col-xl-4 col-12 d-flex justify-content-end">
                                <Link

                                    className={`${styles.btnGrad2} btn btn-default`}
                                    href="/">Accept</Link>&nbsp; <Link

                                        className={`${styles.btnNormal} btn btn-outline-secondary`}

                                        href="/">Reject</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
