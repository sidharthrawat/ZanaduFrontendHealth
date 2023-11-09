import React from 'react'
import Styles from '../../styles/plan.module.css';


const Plans = () => {
  return (
    <>
    <div className={`container ${Styles.plansmain}`}>
        <div className={`container ${Styles.planleft}`}>
            <div className={`container ${Styles.planlefthead}`}>DON'T DELAY, START YOUR 14-DAY FREE TRIAL <span>TODAY</span></div>
            <div className={`container ${Styles.planleftcont}`}>You will discover a world of tailored fitness programs designed to meet your unique goals. With expert guidance, personalized routines, and progress tracking, to embark on a transformative fitness journey that is customized to your needs.</div>
        </div>
        <div className={`container ${Styles.planright}`}>
            <div className={`container ${Styles.planrightinside}`}>
                <button className={`container ${Styles.headbutton}`}>Basic Plan</button>
                <div className={`container ${Styles.planrighttop}`}>
                    <p className={`container ${Styles.dollar}`}>$</p>
                    <p className={`container ${Styles.mainplanrighttop}`}>120<span>/year</span></p>
                    <div className={`container ${Styles.planrightmiddle}`}>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>Full length lessons</p>
                        </div>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className="tickrightpehra">Group Sessions</p>
                        </div>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>Speciality Coaches</p>
                        </div>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>Health Coach</p>
                        </div>
                    </div>
                    <button className={`container ${Styles.planlastbutton}`}>Select Plan</button>
                </div>
                
            </div>
            <div className={`container ${Styles.planrightinside}`}>
            <button className={`container ${Styles.headbutton}`}>Basic Plus Plan</button>
                <div className={`container ${Styles.plancentertop}`}>
                    <p className={`container ${Styles.dollar}`}>$</p>
                    <p className={`container ${Styles.mainplanrighttop}`}>180<span>/year</span></p>
                    <div className={`container ${Styles.planrightmiddle}`}>
                    <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>Full length lessons</p>
                        </div>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>Group Sessions</p>
                        </div>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>One on One Sessions</p>
                        </div>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>Health Coach & Speciality Coaches</p>
                        </div>
                    </div>
                    <button className={`container ${Styles.planlastbutton}`}>Select Plan</button>
                </div>
                
            </div>
            <div className={`container ${Styles.planrightinside}`}>
                <button className={`container ${Styles.headbutton}`}>Premium Plan</button>
                <div className={`container ${Styles.planrighttop}`}>
                    <p className={`container ${Styles.dollar}`}>$</p>
                    <p className={`container ${Styles.mainplanrighttop}`}>240<span>/year</span></p>
                    <div className={`container ${Styles.planrightmiddle}`} >
                    <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>Full length lessons</p>
                        </div>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>Group Sessions</p>
                        </div>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`} >One on One Sessions</p>
                        </div>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>Camps & Workshops</p>
                        </div>
                        <div className={`container ${Styles.plandowncontainer}`}>
                            <img src="/assets/dashboard/tick.svg" alt="" />
                            <p className={`container ${Styles.tickrightpehra}`}>Health Coach & Speciality Coaches</p>
                        </div>
                    </div>
                    <button className={`container ${Styles.planlastbutton}`} >Select Plan</button>
                </div>
                
            </div>
    </div>
    </div>
    </>
  )
}

export default Plans;