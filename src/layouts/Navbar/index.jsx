import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import menuData from "./menu.json";

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname + location.search;
    const navigate = useNavigate();
    const [isAtTop, setIsAtTop] = useState(true);
    const dropDownRef = useRef(null);
    const [showMobileViewMenu, setShowMobileViewMenu] = useState(false);

    const hasMachPath = (path, sidebarData) => {
        if (sidebarData.child) {
            for (const item of sidebarData.child) {
                if (item.url === path) {
                    return true;
                }
            }
        }
        return false;
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setShowMobileViewMenu(false);
            }
        }

        // Add event listener on mount
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropDownRef]);

    return (
        <header className={`${styles.container_wrapper} ${isAtTop ? styles.transparent : styles.scrolledDown}`}>
            <div ref={dropDownRef} className={styles.container}>
                <div onClick={() => navigate("/")} className={styles.logo}>
                    <img src={`https://staging.c3ihub.org/aicctp/static/media/companyLogo3.5d68c49e1a4e4a66226d.jpeg`} alt="" />
                </div>
                <nav className={showMobileViewMenu && styles.mobile_view_menu}>
                    <ul>
                        {menuData.map((menuItem) => (
                            <li key={menuItem.url} className={(path === menuItem.url || hasMachPath(path, menuItem)) && styles.active}>
                                {menuItem.child ? (
                                    <>
                                        <Link onClick={() => setShowMobileViewMenu(false)} to={menuItem.url}>
                                            {menuItem.name}{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48">
                                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18" />
                                            </svg>
                                        </Link>
                                        <ul>
                                            <div className={styles.submenu_contianer}>
                                                {menuItem.child.map((subMenuItem) => (
                                                    <li key={subMenuItem.url}>
                                                        <Link to={`${menuItem.parentUrl}${subMenuItem.url}`}>{subMenuItem.name}</Link>
                                                    </li>
                                                ))}
                                            </div>
                                        </ul>
                                    </>
                                ) : (
                                    <Link onClick={() => setShowMobileViewMenu(false)} to={menuItem.url}>
                                        {menuItem.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div onClick={() => setShowMobileViewMenu(!showMobileViewMenu)} className={styles.menu_bar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M3 16h18v2H3zm0-5h18v2H3zm0-5h18v2H3z" />
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
