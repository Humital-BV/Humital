import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "../styles/about.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout>
      <Seo title="Over Ons" />
      <div className={styles.aboutBanner}>
        <h1 className={styles.bannerTitle}>Meer weten over ons?</h1>
      </div>

      <div className={styles.founderTopContainer}>
        <div className={styles.founderJLeftContainer}>
          <div className={styles.founderJLeftContent}>
            <StaticImage
              src="../images/overOns/janFruytier_main.svg"
              alt="Jan Fruytier"
              width={200}
              className={styles.imageJan}
            ></StaticImage>
          </div>
        </div>
        <div className={styles.founderJRightContainer}>
          <div className={styles.founderJRightContent}>
            <h4 className={styles.founderName}>Jan Fruytier</h4>
            <p>
              Een ambitieuse en grensverleggende partner. Ik ben daadkrachtig,
              doortastend en steeds vastberaden. Sociaal, spontaan en een beetje
              niewsgierig zijn mijn handelsmerk.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.founderBottomContainer}>
        <div className={styles.founderDRightContainer}>
          <div className={styles.founderDRightContent}>
            <StaticImage
              src="../images/overOns/domienDeRycke_main.svg"
              alt="Domien De Rycke"
              width={200}
              className={styles.imageDomien}
            ></StaticImage>
          </div>
        </div>
        <div className={styles.founderDLeftContainer}>
          <div className={styles.founderDLeftContent}>
            <h4 className={styles.founderName}>Domien De Rycke</h4>
            <p>
              Een wereldberkenner met flexibele en zelfstandige ingesteldheid.
              Ik ben ondernemend effeciënt en heb aandacht voor eenduidige en
              correcte communicatie. Daarnaast ben ik structureel en
              georiënteerd en sociaal sterk aanwezig.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.aboutBanner}>
        <h1 className={styles.bannerTitle}>Visie & Missie</h1>
      </div>

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
      </div>

      <div className={styles.visieContainer}>
        <h1 className={styles.visieTitle}>visie</h1>
        <p>
          We zijn 22 rebelse ondernemers, digitale freaks, die tastbare
          meerwaarde creëren voor andere ondernemers. Humital richt zich op het
          begrijpen en het begeleiden van groeiende entrepreneurs, die een
          strategische <span className={styles.focusVisie}>"humitale"</span>{" "}
          transformatie willen realiseren
        </p>
        <p>
          We komen niet met een{" "}
          <span className={styles.focusVisie}>"Plug & Play" </span>oplossing.
          Niets moet, alles kan! Onze aanbevelingen zullen een wereld van
          verschil maken.
        </p>
      </div>
    </Layout>
  )
}
export default About
