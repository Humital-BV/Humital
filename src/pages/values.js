import * as React from "react"
import * as styles from "../styles/values.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const Values = () => {
  return (
    <Layout>
      <Seo title="Onze Waarden" />
      <div className={styles.aboutBanner}>
        <h1 className={styles.bannerTitle}>Onze Visie & Missie</h1>
      </div>

      {/*----------VISIE----------*/}
      <div className={styles.visieContainer}>
        <h1 className={styles.visieTitle}>visie</h1>
        <p>
          We zijn 2 rebelse ondernemers, digitale freaks, die tastbare
          meerwaarde creëren voor andere ondernemers. Humital richt zich op het
          begrijpen en het begeleiden van groeiende entrepreneurs, die een
          strategische <span className={styles.focusVisie}>"humitale"</span>{" "}
          transformatie willen realiseren
        </p>
      </div>
      {/*----------MISSIE----------*/}
      <div className={styles.containerMissie}>
        <h1 className={styles.missieTitle}>Humital wil, kan, en zal...</h1>
        <ul className={styles.missieTxt}>
          <li className={styles.bulletsMissie}>
            ... elke dag het verschil maken voor elke klant, en er{" "}
            <span className={styles.focusMissie}>100% </span>voor gaan
          </li>
          <li className={styles.bulletsMissie}>
            ... gewoon <span className={styles.focusMissie}>zijn wie we </span>
            zijn met onze gebreken en tekortkomingen
          </li>
          <li className={styles.bulletsMissie}>
            ... klanten <span className={styles.focusMissie}>behandelen</span>{" "}
            zoals zij dat liefst willen
          </li>

          <li className={styles.bulletsMissie}>
            ... altijd blijven <span className={styles.focusMissie}>leren</span>
            , ook "aan" en "van" anderen
          </li>

          <li className={styles.bulletsMissie}>
            ... <span className={styles.focusMissie}>empatisch</span> zijn en{" "}
            <span className={styles.focusMissie}>meedenken</span> met de klant
          </li>

          <li className={styles.bulletsMissie}>
            ... <span className={styles.focusMissie}>dankbaar </span> zijn voor
            wat we hebben, nog niet hebben, krijgen, en kunnen geven
          </li>

          <li className={styles.bulletsMissie}>
            ... een sfeer van{" "}
            <span className={styles.focusMissie}>ontspanning </span>en{" "}
            <span className={styles.focusMissie}>rust </span> uitstralen aan
            iedere klant
          </li>

          <li className={styles.bulletsMissie}>
            ... een <span className={styles.focusMissie}>veilige haven </span>
            creeëren waar iedereen vrijuit kan spreken
          </li>
        </ul>
        <p>
          We komen niet met een{" "}
          <span className={styles.focusVisie}>"Plug & Play" </span>oplossing.
          Niets moet, alles kan! <br />
          Onze aanbevelingen zullen een wereld van verschil maken.
        </p>
      </div>
    </Layout>
  )
}
export default Values
