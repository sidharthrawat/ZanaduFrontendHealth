import React, { useState, useEffect } from 'react'
import Styles from '../../styles/banner.module.css'
import BannerDes from '../../utility/BannerDes.json'
const Banner = () => {
    const bannerImage = ['/assets/banner/banner1.svg', '/assets/banner/banner2.png']
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showImage, setShowImage] = useState(true);
    const handleNextClick = () => {
        // Increment the currentIndex to display the next image
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImage.length);
        setShowImage(false);
    };
    const handlePreClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? bannerImage.length - 1 : prevIndex - 1
        );
        setShowImage(false);
    };
    const handleDotClick = (i) => {
        // Handle dot click to change the selected image
        setCurrentIndex(i);
        setShowImage(false); // Hide the current image for fade-in effect
    };
    useEffect(() => {
        // Show the image after a short delay for the fade-in effect
        const timeoutId = setTimeout(() => {
            setShowImage(true);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [currentIndex]);
    return (
        <>
            <div className={Styles['banner-container']}>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <img src="/assets/footer-logo.png" className='img-fluid' alt="Zanadu Health" height={112} width={103} />
                            <p className={Styles['p1']}>Zanadu Health</p>
                            <p className={Styles['p2']}> <span>Gateway to your</span> <br /> Wellness, Health & Happiness</p>
                            <button className={Styles['banner-btn']}>TRY NOW</button>
                        </div>
                        <div className="col-lg-4">
                            <img src={bannerImage[currentIndex]} alt={`Banner ${currentIndex}`} height={400}
                                width={350}
                                className={`fade-in-image ${showImage ? 'active' : ''}`}
                            />
                        </div>
                        <div className="col-lg-4">
                            <div className={Styles['des-container']}>
                                {BannerDes.BannerDes.map((item, index) => {
                                    return (
                                        <div className={Styles['des-item']} key={index} >
                                            <div className='me-3'><img src={item.icon} alt={item.title} /></div>
                                            <div className={Styles['des-title']}>
                                                <h3>{item.title}</h3>
                                                <p>{item.des}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles['dot-indicator']}>
                {bannerImage.map((_, i) => (
                    <span
                        key={i}
                        className={ ` ${Styles['dot']} ${Styles[currentIndex === i ? 'active' : '']}`}
                        onClick={() => handleDotClick(i)}
                    />
                ))}
                </div>
                <span className={Styles['next']} onClick={handleNextClick} >
                    <img src="/assets/banner/next.svg" alt="" />
                </span>
                <span className={Styles['pre']} onClick={handlePreClick} >
                    <img src="/assets/banner/pre.svg" alt="" />
                </span>
            </div>
        </>
    )
}


export default Banner