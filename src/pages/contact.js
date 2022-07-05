import * as React from "react"
import * as styles from "../styles/contact.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <div className={styles.aboutBanner}>
        <h1 className={styles.bannerTitle}>Hoe kan je ons bereiken?</h1>
      </div>
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h1>Humital</h1>
          <p className={styles.address}>
            Hoevestraat 13
            <span>3990 Peer</span>
          </p>

          <p className={styles.contactJan}>Jan Fruytier - 0472/37 57 83</p>
          <p className={styles.contactDomien}>
            Domien De Rycke - 0472/33 30 95
          </p>
          <p>Email: info@humital.be</p>
          <span className={styles.btnAppointment}>
            {" "}
            <Link to="https://calendly.com/grust" target="_blank">
              Maak een afspraak
            </Link>
          </span>
        </div>
        <div className={styles.maps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.7971418757343!2d5.406728115431102!3d51.13064974600065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c12964c2028885%3A0x7d596eb22928ef95!2sHoevestraat%2013%2C%203990%20Peer!5e0!3m2!1sen!2sbe!4v1657019274431!5m2!1sen!2sbe"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Google Maps Humital Home Address"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}
export default Contact
