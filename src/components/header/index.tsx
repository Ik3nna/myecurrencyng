import React, { useState } from 'react'
import styles from "./index.module.css"
import { NavLink, useNavigate } from 'react-router-dom'

// assets
import logo from "@/assets/logo.svg"

interface navItemsProps {
    id: number,
    item: string,
    linkTo: string,
}

const Header: React.FC = () => {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const navItems: navItemsProps[] = [
        { id: 1, item: "Home", linkTo: "/home" },
        { id: 2, item: "About", linkTo: "/about" },
        { id: 3, item: "Shop", linkTo: "/shop" },
        { id: 4, item: "FAQs", linkTo: "/faqs" }
    ]

    const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
        return `${isActive ? styles.activeLink : ""}`;
    };

    const handleLogoClick = ()=> {
        navigate("/home")
        window.location.reload();
        window.scroll(0,0);
    }

    const handleNavLinkClick = () => {
        if (active) {
            setActive(false)
            window.scroll(0, 0)
        } else return
    }

    return (
        <header className={`${active ? styles.active : ""}`}>
            <div className={styles.header}>
                <img src={logo} alt="logo-img" onClick={handleLogoClick} />

                <nav>
                    <ul>
                        {navItems.map((navlink)=>
                            <li key={navlink.id}>
                                <NavLink 
                                    to={navlink.linkTo} 
                                    onClick={handleNavLinkClick}
                                    className={navLinkClass}
                                >
                                    {navlink.item}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>

                <div className={styles.overlay}></div>
                        
                <div className={styles.hamburger} onClick={()=> setActive(!active)}>
                    <div className={styles.bar}></div>
                </div>
            </div>
        </header>
    )
}

export default Header