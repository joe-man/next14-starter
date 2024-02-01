import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <p className={styles.logo}>Left Text</p>
            <p className={styles.text}>Right Text</p>
        </div>
    );
};

export default Footer;
