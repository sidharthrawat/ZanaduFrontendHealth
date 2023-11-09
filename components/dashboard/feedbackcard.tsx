import React from 'react'
import Styles from '../../styles/feedback.module.css';

const Feedbackcard = () => {
  return (
    <>
    <div className={`container ${Styles.clientsmain}`}>
        <p className={`container ${Styles.clientmainhead}`}>Loved by 5k + Clients</p>
        <img className={`container ${Styles.borders}`}  src="/assets/dashboard/text.png" alt="" width="100px" />
        
        <div className={`container ${Styles.clientsdown}`}>
        <div>
            <div className={`container ${Styles.upperclient}`}>
                <div className={`container ${Styles.innterclient}`}>
                    <p className={`container ${Styles.upperpehra}`}>Game-Changer in My Fitness Journey</p>
                    <p className={`container ${Styles.lowerpehra}`}>I've been using the fitness app for several months now, and I can confidently say that it has completely transformed my approach to fitness. The app's comprehensive features and user-friendly interface make it a game-changer in achieving my fitness goals.</p>
                </div>
            </div>

            <div className={`container ${Styles.lowerclient}`}>
                <div className={`container ${Styles.clientimg}`}>
                    <img src="./assets/woman.png" alt="" />
                </div>
                <div className={`container ${Styles.clientimgright}`}>
                    <p className={`container ${Styles.clientimgrightp1}`}>Sophia Dua</p>
                    <p className={`container ${Styles.clientimgrightp2}`}>Interior Designer</p>
                </div>
            </div>
        </div>
        
            <div>
                <div className={`container ${Styles.upperclient}`}>
                    <div className={`container ${Styles.innterclient}`}>
                        <p className={`container ${Styles.upperpehra}`}>Game-Changer in My Fitness Journey</p>
                        <p className={`container ${Styles.lowerpehra}`}>I've been using the fitness app for several months now, and I can confidently say that it has completely transformed my approach to fitness. The app's comprehensive features and user-friendly interface make it a game-changer in achieving my fitness goals.</p>
                    </div>
                </div>
                <div className={`container ${Styles.lowerclient}`}>
                    <div className={`container ${Styles.clientimg}`}>
                    <img src="./assets/woman.png" alt="" />
                    </div>
                    <div className={`container ${Styles.clientimgright}`}>
                        <p className={`container ${Styles.clientimgrightp1}`}>Sophia Dua</p>
                        <p className={`container ${Styles.clientimgrightp2}`}>Interior Designer</p>
                    </div>
                </div>
            </div>
            <div>
                <div className={`container ${Styles.upperclient}`}>
                    <div className={`container ${Styles.innterclient}`}>
                        <p className={`container ${Styles.upperpehra}`}>Game-Changer in My Fitness Journey</p>
                        <p  className={`container ${Styles.lowerpehra}`}>I've been using the fitness app for several months now, and I can confidently say that it has completely transformed my approach to fitness. The app's comprehensive features and user-friendly interface make it a game-changer in achieving my fitness goals.</p>
                    </div>
                </div>
                <div className={`container ${Styles.lowerclient}`}>
                    <div className={`container ${Styles.clientimg}`}>
                    <img src="./assets/woman.png" alt="" />
                    </div>
                    <div className={`container ${Styles.clientimgright}`}>
                        <p className={`container ${Styles.clientimgrightp1}`}>Sophia Dua</p>
                        <p className={`container ${Styles.clientimgrightp2}`}>Interior Designer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

  )
}

export default Feedbackcard