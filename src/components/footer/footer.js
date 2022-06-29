import * as React from "react"
import * as styles from "./footer.module.css"

import { Link } from "gatsby"

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className={styles.flexFooter}>
      <section className={styles.footerTopSection}>
        <ul className={styles.footerTopList}>
          <li>
            <h4>
              <Link to="/home" className={styles.footerLogo}>
                Humital
              </Link>
            </h4>
          </li>
        </ul>

        <ul className={styles.footerTopList}>
          <li>
            <h4>Over Humital</h4>
          </li>
          <li>
            <Link to="/about">leer ons kennen</Link>
          </li>
        </ul>

        <ul className={styles.footerTopList}>
          <li>
            <h4>Help me</h4>
          </li>
          <li>
            <Link to="/contact">Contacteer ons</Link>
          </li>
          <li>
            <Link to="https://calendly.com/grust" target="_blank">
              Maak een afspraak
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.footerBottomSection}>
        <div className={styles.footerBottomWrapper}>
          <p>©Copyright {currentYear} Humital - Made with ❤️</p>
          <span>- All Rights Reserved -</span>
        </div>
        <div className={styles.footerBottomWrapper}>
          <Link to="/sitemap.xml">Sitemap</Link>|
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer
