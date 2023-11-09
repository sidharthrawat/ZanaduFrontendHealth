import Header from '@/components/common/Header'
import React, { useState } from 'react'
import styles from '../../styles/user.module.css'

import Link from "next/link"
import { Footer } from "@/components/common/Footer"
import { MultiSelect } from "react-multi-select-component";
const User = () => {

  const [bookPopup, setBookPopup] = useState(false);
  const [otp, setOtp] = useState(false);
  const [congrats, setCongrats] = useState(false);

  const [selected, setSelected] = useState([]);

  const suggestions = [
    { label: "Non-communicable Diseases", value: "Non-communicable Diseases" },
    { label: "Mental Health", value: "Mental Health" },
    { label: "Maternal and Child Health", value: "Maternal and Child Health"},
    { label: "Age-related Diseases", value: "Age-related Diseases" },
  ];

  return (
    <div>
      <Header />
      <div className='modal-open'></div>
      <div className={`${styles.userGradientBg} `} >
        <div className="container">
          <div className="row ">
            <div className="col-12 col-xl-6 text-center">
              <div className={`${styles.gatewayText} mb-2 `}>
                Gateway To Your
              </div>

              <div className={`${styles.wellnessText} fs-3 `}>
                <p>Wellness , Health and Happiness</p>
              </div>

              <div className={`${styles.yogaGirlsImg} text-center mt-4`}>
                <img src="/assets/girlsImg.png" alt="girls image" height={350} width={350} />
              </div>

            </div>
            <div className="col-6">
              <div className="bg-white rounded-3 shadow p-4">
                <h3 className={`{$styles.formHeading} mb-4 text-center`}>Sign Up</h3>

                <div className="row">
                  <div className="col-xl-12 col-12 mb-4">
                    <div className="form-group">

                      <label className={styles.formLabel} >Enter Full Name</label>
                      <input type="text" className={`${styles.inputbox}  form-control`} />
                    </div>
                  </div>
                </div>



                <div className="row">
                  <div className="col-xl-12 col-12 mb-4">
                    <div className="form-group">

                      <label className={styles.formLabel} >Enter Email *</label>
                      <div className="className">

                        <input type="text" className={`${styles.inputbox}  form-control`} />
                      </div>

                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12 col-12 mb-4">
                    <div className="form-group">
                      <label className={styles.formLabel} >Enter Password</label>
                      <input type="text" className={`${styles.inputbox}  form-control`} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xl-12 col-12 mb-4">
                    <div className="form-group">
                      <label className={styles.formLabel} >Phone no</label>
                      <div className="row">
                        <div className="col-xl-3"> <input type="text" className={`${styles.inputbox}  form-control`} /></div>
                        <div className="col-xl-9"> <input type="text" className={`${styles.inputbox}  form-control`} /></div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="col-xl-6 col-12 mb-4">
                    <div className="form-group">
                      <label className={styles.formLabel} >Date Of Birth</label>
                      <input type="date" className={`${styles.inputbox}  form-control`} />




                    </div>
                  </div>
                  <div className="col-xl-6 col-12 mb-4">
                    <div className="form-group">
                      <label className={styles.formLabel} >Gender</label>
                      <select className={`${styles.inputbox} form-select`} id="sel1">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>



                <div className="row">
                  <div className="col-xl-12 col-12 mb-4">
                    <div className="form-group">

                      <label className={styles.formLabel} >Top Three Health Challenges</label>
                      {/* <select className={`${styles.inputbox} form-select`} id="sel1">
                       <option>Non-communicable Diseases</option>
                        <option>Mental Health</option>
                        <option>Maternal and Child Health</option>
                        <option>Age-related Diseases</option> 
                        </select> */}

                      <div>
                        <MultiSelect className={`${styles.inputbox}`}
                          options={suggestions}
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select"
                        />
                      </div>


                    </div>
                  </div>

                </div>




                {/* <div className="row">
                  <div className="col-xl-12 mb-4">
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" typeof="flexCheckDefault">
                          Non Communicable Diseases
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label className="form-check-label" typeof="flexCheckChecked">
                          Mental Health
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label className="form-check-label" typeof="flexCheckChecked">
                          Maternal & Child Health
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label className="form-check-label" typeof="flexCheckChecked">
                          Age-related Diseases
                        </label>
                      </div>
                    </div>
                  </div>
                </div> */}







                <div className="row">
                  <div className="col-xl-12 col-12 mb-4">
                    <div className="form-group">
                      <label className={styles.formLabel} >Residence State in the US</label>
                      <select className={`${styles.inputbox} form-select`} id="sel1">
                        <option>California</option>
                        <option>Texas</option>
                        <option>Florida</option>
                        <option>New York</option>
                      </select>
                    </div>
                  </div>

                </div>











                <div className="row">
                  <div className="col-xl-12">
                    <div className="mb-4 fs-6">

                      <div className={`${styles.privacyText} fs-6 `}>


                        By clicking on submit, I am agreeing to the Terms of Service and Privacy Policy.

                      </div>

                    </div>
                  </div>
                </div>





                <div className="row">
                  <div className="col-xl-12 col-12 mb-4">
                    <button type="submit" onClick={() => { setBookPopup(!bookPopup), setOtp(!otp) }} className={`${styles.btnGrad} btn btn-default btn-lg `}>Book Demo</button>
                    {
                      bookPopup && (
                        <div className={`${styles.popupArea}`}>
                          <div className="container">

                            {
                              otp && (
                                <div className={`${styles.containerBox}`}>
                                  <div className='d-flex justify-content-end'>
                                    <img src="/assets/popupClear.png" className={`${styles.cursorPointer}`} width={32} height={32} alt="" onClick={() => { setBookPopup(!bookPopup), setOtp(!otp) }} />
                                  </div>
                                  <div>
                                    <h2 className={`${styles.headingPopup} text-white text-center`}>One Time Passcode</h2>
                                    <p className={`${styles.blackTextPopup} text-center`}>
                                      Please enter the 6 digit verification code sent to your mobile number
                                    </p>
                                    <p className={`${styles.whiteTextPopup} text-center`}>
                                      05:00
                                    </p>
                                    <div className='py-4'>
                                      <div className={`${styles.popupContaienrInner}`}>
                                        <div className="row">
                                          <div className="col">
                                            <input type="text" className={`${styles.inputbox}  form-control`} />
                                          </div>
                                          <div className="col">
                                            <input type="text" className={`${styles.inputbox}  form-control`} />
                                          </div>
                                          <div className="col">
                                            <input type="text" className={`${styles.inputbox}  form-control`} />
                                          </div>
                                          <div className="col">
                                            <input type="text" className={`${styles.inputbox}  form-control`} />
                                          </div>
                                          <div className="col">
                                            <input type="text" className={`${styles.inputbox}  form-control`} />
                                          </div>
                                          <div className="col">
                                            <input type="text" className={`${styles.inputbox}  form-control`} />
                                          </div>
                                        </div>
                                        <div className={`${styles.whiteTextPopup} text-center py-4`}>
                                          I didn’t receive the code! <Link href={"#"} className={`${styles.blackTextPopup}`}>Resend</Link>
                                        </div>
                                        <div className="py-4">
                                          <button type="submit" onClick={() => { setCongrats(!congrats), setOtp(!otp) }} className={`${styles.btnDull} btn btn-default`}>Submit</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            }

                            {
                              congrats && (
                                <div className={`${styles.containerBox}`}>
                                  <div className='d-flex justify-content-end'>
                                    <img src="/assets/popupClear.png" className={`${styles.cursorPointer}`} onClick={() => { setBookPopup(!bookPopup), setCongrats(!congrats) }} width={32} height={32} alt="" />

                                  </div>
                                  <div>
                                    <div className="text-center py-4">
                                      <img src="/assets/congratsImage.png" width={363} height={359} alt="" />
                                    </div>

                                    <h2 className={`${styles.headingPopup} text-white text-center`}>Congratulations</h2>
                                    <p className={`${styles.whiteTextPopup} text-center`}>
                                      Welcome to Zanadu Health. Gateway to your Wellness, Health & Happiness.
                                    </p>
                                  </div>
                                </div>
                              )
                            }


                          </div>

                        </div>
                      )
                    }



                  </div>
                </div>


                <div className=" d-flex text-center justify-content-center">
                  <div className="">
                    <img src="/assets/lineVector.png" alt="LinVectorImg" height={3} width={205} /></div>
                  <div className={`${styles.continueText} `}>
                    Or continue with
                  </div>
                  <div className="">
                    <img src="/assets/lineVector.png" alt="LinVectorImg" height={3} width={205} />
                  </div>
                </div>



                <div className="d-flex mt-4 gap-3 justify-content-center">
                  <div className="bg-white rounded-3 border border-secondary p-2">
                    <Link href={"#"}><img src="/assets/Facebook.png" alt="facebookImg" height={25} width={24} /></Link>
                  </div>
                  <div className="bg-white rounded-3 border border-secondary p-2">
                    <Link href={"#"}><img src="/assets/Google.png" alt="GoogleImg" height={25} width={24} /></Link>
                  </div>
                  <div className="bg-white rounded-3 border border-secondary p-2">
                    <Link href={"#"}><img src="/assets/Linkedin.png" alt="LinkedinImg" height={24} width={24} /></Link>
                  </div>
                </div>

                <div className="row">
                  <div className="col fs-6 text-center mt-4 mb-5">
                    Terms of Service and Privacy Policy.
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>

      </div>




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
      <Footer />
    </div>
  )
}

export default User