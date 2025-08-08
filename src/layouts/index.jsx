import { Outlet } from "react-router-dom";
import styles from "./index.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
    return (
        <div className={styles.container}>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
