import { Link } from "gatsby"

import * as React from "react"
import * as styles from "../styles/index.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import CookieConsent from "react-cookie-consent"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div className={styles.indexMain}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaWrapper}>
            <h1 className={styles.ctaTitle}>
              Working digital <span> empowers </span> human capital.
            </h1>

            <p className={styles.ctaSubtitle}>
              Humital richt zich op het begrijpen en het begeleiden van
              groeiende entrepreneurs die een strategische humitale
              transformatie willen realiseren.
            </p>
            <span className={styles.ctaButton}>
              <Link to="/contact">contacteer ons</Link>
            </span>
          </div>
        </div>
      </div>
      <CookieConsent
        buttonStyle={{
          background: "#78c0a8",
          cursor: "pointer",
          color: "white",
        }}
        declineButtonClasses={{
          background: "#f07818",
          cursor: "pointer",
          color: "white",
        }}
        location="bottom"
        buttonText="Accepteer de koekjes"
        enableDeclineButton
        declineButtonText="ik wil geen koekjes"
        cookieName="humitalCookies"
        onAccept={() => {
          alert("je hebt de koekjes geaccepteerd!")
        }}
        onDecline={() => alert("je weigerde de koekjes")}
        overlay={true}
        flipButtons={true}
      >
        Omnom Omnom! Wij gebruiken koekjes om jouw ervaring beter te maken. Wil
        je meer weten welke gegevens we verzamelen? Klik{" "}
        <Link to="/privacy">hier.</Link>
      </CookieConsent>
    </Layout>
  )
}

export default IndexPage
