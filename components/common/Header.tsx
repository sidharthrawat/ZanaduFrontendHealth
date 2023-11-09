import React from 'react'
import Styles from '../../styles/common.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <nav className={`navbar navbar-expand-md ${Styles['main-navbar']} `}>
                <div className="container-fluid">
                    <div className={`container  ${Styles.navbar_logo} `}>

                    <Link className="navbar-brand" href="/"><img src="/assets/logo.svg" className='img-fluid'
                      alt="Zanadu Health" height={42} width={40} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className={`collapse navbar-collapse  ${Styles['collapse-align']} `} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Offerings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link "  href="#">Coaches</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Plans</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="number">Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link "  href="#exampleModal">Log In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/userDashboard">Enterprise Client</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default Header