import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import * as styles from "../styles/404.module.css"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: woops, page not found" />
    <div className={styles.notFoundWrapper}>
      <h1 className={styles.notFoundHeader}>
        Oh nee! We zijn jouw pagina kwijt! (404)
      </h1>
      <StaticImage
        src="../images/404.png"
        alt="persoon die fiets herstelt"
        loading="lazy"
        width={500}
        className={styles.notFoundImage}
        placeholder="blurred"
        quality={100}
      ></StaticImage>
      <div className={styles.notFoundContent}>
        <p>
          Iedereen kan wel eens vergeetachtig zijn, en dat zijn wij ook. Het
          lijkt erop dat je op een oude link struikelde of een typo maakte op de
          pagina die je probeerde te bereiken. <span>Het spijt ons, echt!</span>
        </p>
        <p>
          Ga gerust <Link to="/">terug naar de homepagina</Link> of klik op het
          logo linksboven om terug te gaan. Je kan natuurlijk ook het menu
          gebruiken om een specifieke pagina te bekijken :).
        </p>
        <h3>Wat kan je nog doen?</h3>
        <p>
          Je kan ons altijd <Link to="/contact"> contacteren :)</Link> We horen
          graag van jou!
        </p>
        <p>We willen jou alvast bedanken dat je zo geweldig bent!</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
