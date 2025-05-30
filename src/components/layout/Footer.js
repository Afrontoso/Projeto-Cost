import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                        <FaFacebook />

                </li>
                <li>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2023
            </p>
        </footer>
    );
} export default Footer;