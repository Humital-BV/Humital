import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "../styles/services.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

function getSpan(classname) {
  const mySpan = ""
}
const Services = () => {
  return (
    <Layout>
      <Seo title="Diensten" />

      <div className={styles.containerButtons}>
        <button
          className={styles.brainfoodBtn}
          onClick={() => {
            console.log(
              "Brainfood - Wij denken heel graag met je mee. Ben je op zoek naar een sparring partner om jouw idee te pitchen, en het verder te laten evolueren? Of heb je nood aan advies en ondersteuning? Meer weten over adviserende verkoop?"
            )
          }}
        >
          <StaticImage
            src="../images/brainfood.png"
            width={250}
            className={styles.brainfoodImage}
            alt="brainfood"
          ></StaticImage>
        </button>
        <span className={styles.brainfoodTxt}>
          Brainfood - Wij denken heel graag met je mee. Ben je op zoek naar een
          sparring partner om jouw idee te pitchen, en het verder te laten
          evolueren? Of heb je nood aan advies en ondersteuning? Meer weten over
          adviserende verkoop?
        </span>

        <button
          className={styles.journeyBtn}
          onClick={() => {
            getElementByClass("brainfoodTxt")
            console.log(
              "Journey - Een realiseerbaar traject op maat van je organisatie. Direct implementeerbaar, met begeleiding en opvolging. Hierbij streven we naar voortdurende progressie van het team en van de productiviteit. Knowlegde transfer zal centraal staan."
            )
          }}
        >
          <StaticImage
            src="../images/journey.png"
            width={250}
            className={styles.journeyImage}
            alt="journey"
          ></StaticImage>
        </button>

        <button
          className={styles.projectBtn}
          onClick={() => {
            console.log(
              "Project - Op zoek naar ondersteuning voor je projecten? Wij kunnen fungeren als projectleider, of wij kunnen verschillende andere projectrollen opnemen. Tegelijkertijd zorgen wij voor een kennisoverdracht binnen je team zodat toekomstige projecten zelfstandig uitgevoerd kunnen worden."
            )
          }}
        >
          <StaticImage
            src="../images/project.png"
            width={250}
            className={styles.projectImage}
            alt="project"
          ></StaticImage>
        </button>

        <button
          className={styles.speakerBtn}
          onClick={() => {
            console.log(
              "Speaker - Op zoek naar een spreker of facilitator voor je evenement of workshop ? Wij helpen je graag verder"
            )
          }}
        >
          <StaticImage
            src="../images/speaker.png"
            width={250}
            className={styles.speakerImage}
            alt="speaker"
          ></StaticImage>
        </button>

        <button
          className={styles.visualsBtn}
          onClick={() => {
            console.log(
              "Visuals - Flows, processen of simpelweg de agendapunten van een meeting duidelijk visualiseren, dat is ons ding."
            )
          }}
        >
          <StaticImage
            src="../images/visuals.png"
            width={250}
            className={styles.visualsImage}
            alt="visuals"
          ></StaticImage>
        </button>
      </div>
    </Layout>
  )
}
export default Services