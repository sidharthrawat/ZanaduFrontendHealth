import React, {useState} from 'react'
import Styles from '../../styles/enterprise/enterpriseheader.module.css'
import Link from 'next/link';
import Sidebar from '../common/sidebar';


    

const header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    
    
  return (
    <>
    <div className={`container ${Styles.enterprise_page}`}>
    <nav className={`container ${Styles.enterprise_navbar}`}>
        <div>
        <img src="/assets/notification.svg" alt="" />

        </div>
        <img src="/assets/profile.svg" alt="" />
        <p>Victoria Vieira</p>
        <div className={`${Styles.dropdown}`}>
      <button onClick={toggleDropdown}>Language</button>
      {isOpen && (
        <ul className="dropdown-content">
          <div>English</div>
          <div>English</div>
        </ul>
      )}
    </div> 
</nav>




</div>

    
    </>
  )
}

export default header