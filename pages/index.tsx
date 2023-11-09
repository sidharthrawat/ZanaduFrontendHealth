import Banner from "@/components/common/Banner"
import { Footer } from "@/components/common/Footer"
import Header from "@/components/common/Header"
import Styles from '../styles/Home.module.css'
import SevenOffer from '../utility/SevenOffer.json'
import Feedbackcard from "@/components/dashboard/feedbackcard"
import Plans from "@/components/dashboard/Plans"
import Coaches from "@/components/dashboard/coaches"


import Stylesa from '../styles/about.module.css'
import Stylesb from '../styles/numbers.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      {/* 7 Offerings start */}
      <div className={Styles['seven-offer-container']}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={Styles['seven-offer-header']}>
                <h2>7 Offerings</h2>
                <p>We’re all about inspiring people to be happier and healthier in their daily life.</p>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={Styles['seven-offer-item-container']}>
              {SevenOffer.SevenOffer.map((item, index) => {
                return (
                  <div key={index} className={Styles['seven-offer-item']} >
                    <img src={item.image} alt={item.title} />
                    <h3 >{item.title}</h3>
                    <p>{item.des}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* 7 Offerings end */}

      
      {/* about us */}
      <div className={`container ${Stylesa.main}`}><div className={`container ${Stylesa.aboutmain}`}>
    <p className={`container ${Stylesa.aboutmainhead}`}>About us</p>
    <p className={`container ${Stylesa.aboutmaincont}`}>Gateway To Your Wellness, Health & Happiness</p>
    <div className={`container ${Stylesa.aboutinner}`}>
        <div className={`container ${Stylesa.leftabout}`}>
            <p className={`container ${Stylesa.aboutinnerhead}`}>Our Mission</p>
            <p className={`container ${Stylesa.aboutinnercont}`}>Empower individuals to take control of their well-being and lead healthier lives. We strive to provide a comprehensive platform that promotes physical, mental, and emotional wellness.</p>
        </div>
        <div className={`container ${Stylesa.middleabout}`}>
            <img src='/assets/banner/banner2.png' alt="not" />
        </div>
        <div className={`container ${Stylesa.rightabout}`}>
            <p className={`container ${Stylesa.aboutinnerhead}`}>Community Support</p>
            <p className={`container ${Stylesa.aboutinnercont}`}>We believe in a holistic approach to wellness, understanding that true well-being encompasses various aspects of one's life. Our app integrates fitness, nutrition, mindfulness, and personal development to support users in achieving a balanced and fulfilling lifestyle.</p>
        </div>
    </div>
</div></div>

{/* about us end */}

      <Plans />


      <Coaches />
      <Feedbackcard />
      
{/* 
      numbers and content above the header */}

<div className={`container ${Stylesb.up_number}`}>
        <div className={`container ${Stylesb.up_number_content}`}>
        <div className={`container ${Stylesb.number_icon}`} >
          <img src="/assets/dashboard/users.svg" alt="users img" />
          
        
            <p  className={`container ${Stylesb.p_head}`}>140K+</p>
            <p className={`container ${Stylesb.p_para}`}>Healthy Users</p>
        </div>

        <div className={`container ${Stylesb.number_icon}`}>
        <img src="/assets/dashboard/video.svg" alt="Videos" />
       
            <p className={`container ${Stylesb.p_head}`}>310K+</p>
            <p className={`container ${Stylesb.p_para}`}>Live Sessions</p>
        </div>


        <div className={`container ${Stylesb.number_icon}`}>
        <img src="/assets/dashboard/coaches.svg" alt="coaches" />
        
        
            <p className={`container ${Stylesb.p_head}`}>4K+</p>
            <p className={`container ${Stylesb.p_para}`}>Qualified Coaches</p>
        </div>


        <div className={`container ${Stylesb.number_icon}`}>

        <img src="/assets/dashboard/clients.svg" alt="clients" />
        
       
            <p className={`container ${Stylesb.p_head}`}>500+</p>
            <p className={`container ${Stylesb.p_para}`}>Enterprise Clients</p>
        </div>

        </div>
        

    </div>

      <Footer />
    </>
  )
}
