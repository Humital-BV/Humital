import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "../styles/services.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const Services = () => {
  return (
    <Layout>
      <Seo title="Diensten" />

      <div className={styles.aboutBanner}>
        <h1 className={styles.bannerTitle}>Wat kunnen wij voor jou doen?</h1>
      </div>
      {/*------------ BRAINFOOD ------------ */}
      <div className={styles.BrainfoodContainer}>
        <div className={styles.BrainfoodLeftContainer}>
          <div className={styles.BrainfoodLeftContent}>
            <StaticImage
              src="../images/services/brainfood.png"
              alt="Brainfood"
              width={300}
              className={styles.imageBrainfood}
            ></StaticImage>
          </div>
        </div>
        <div className={styles.BrainfoodRightContainer}>
          <div className={styles.BrainfoodRightContent}>
            <h4 className={styles.serviceName}>Brainfood</h4>
            <p>
              Wij denken heel graag met je mee. Ben je op zoek naar een sparring
              partner om jouw idee te pitchen, en het verder te laten evolueren?
              Of heb je nood aan advies en ondersteuning? Meer weten over
              adviserende verkoop?
            </p>
          </div>
        </div>
      </div>
      {/*------------ Journey ------------ */}
      <div className={styles.JourneyContainer}>
        <div className={styles.JourneyRightContainer}>
          <div className={styles.JourneyRightContent}>
            <StaticImage
              src="../images/services/journey.png"
              alt="Journey"
              width={300}
              className={styles.imageJourney}
            ></StaticImage>
          </div>
        </div>
        <div className={styles.JourneyLeftContainer}>
          <div className={styles.JourneyLeftContent}>
            <h4 className={styles.serviceName}>Journey</h4>
            <p>
              Een realiseerbaar traject op maat van je organisatie. Direct
              implementeerbaar, met begeleiding en opvolging. Hierbij streven we
              naar voortdurende progressie van het team en van de
              productiviteit. Knowlegde transfer zal centraal staan.
            </p>
          </div>
        </div>
      </div>
      {/*------------ PROJECT ------------ */}
      <div className={styles.ProjectsContainer}>
        <div className={styles.ProjectsLeftContainer}>
          <div className={styles.ProjectsLeftContent}>
            <StaticImage
              src="../images/services/project.png"
              alt="Project"
              width={300}
              className={styles.imageProjects}
            ></StaticImage>
          </div>
        </div>
        <div className={styles.ProjectsRightContainer}>
          <div className={styles.ProjectsRightContent}>
            <h4 className={styles.serviceName}>Project</h4>
            <p>
              Op zoek naar ondersteuning voor je projecten? Wij kunnen fungeren
              als projectleider, of wij kunnen verschillende andere
              projectrollen opnemen. Tegelijkertijd zorgen wij voor een
              kennisoverdracht binnen je team zodat toekomstige projecten
              zelfstandig uitgevoerd kunnen worden.
            </p>
          </div>
        </div>
      </div>
      {/*------------ SPEAKER ------------ */}
      <div className={styles.SpeakerContainer}>
        <div className={styles.SpeakerRightContainer}>
          <div className={styles.SpeakerRightContent}>
            <StaticImage
              src="../images/services/speaker.png"
              alt="Speaker"
              width={300}
              className={styles.imageSpeaker}
            ></StaticImage>
          </div>
        </div>
        <div className={styles.SpeakerLeftContainer}>
          <div className={styles.SpeakerLeftContent}>
            <h4 className={styles.serviceName}>Speaker</h4>
            <p>
              Op zoek naar een spreker of facilitator voor je evenement of
              workshop ? Wij helpen je graag verder.
            </p>
          </div>
        </div>
      </div>
      {/*------------ VISUALS ------------ */}
      <div className={styles.VisualsContainer}>
        <div className={styles.VisualsLeftContainer}>
          <div className={styles.VisualsLeftContent}>
            <StaticImage
              src="../images/services/visuals.png"
              alt="Visuals"
              width={300}
              className={styles.imageVisuals}
            ></StaticImage>
          </div>
        </div>
        <div className={styles.VisualsRightContainer}>
          <div className={styles.VisualsRightContent}>
            <h4 className={styles.serviceName}>Visuals</h4>
            <p>
              Flows, processen of simpelweg de agendapunten van een meeting
              duidelijk visualiseren, dat is ons ding.
            </p>
          </div>
        </div>
      </div>

      {/* OLD DESIGN CODE FOR REFERENCE 
      <div className={styles.containerButtons}>
        <button
          className={styles.brainfoodBtn}
          onClick={() => {
            console.log(
              "Brainfood - Wij denken heel graag met je mee. Ben je op zoek naar een sparring partner om jouw idee te pitchen, en het verder te laten evolueren? Of heb je nood aan advies en ondersteuning? Meer weten over adviserende verkoop?"
            )
          }}
        >
          <details>
            <summary>
              <StaticImage
                src="../images/services/brainfood.png"
                width={250}
                className={styles.brainfoodImage}
                alt="brainfood"
              ></StaticImage>
            </summary>
            <p className={styles.brainfoodTxt}>
              <span>Brainfood</span> Wij denken heel graag met je mee. Ben je op
              zoek naar een sparring partner om jouw idee te pitchen, en het
              verder te laten evolueren? Of heb je nood aan advies en
              ondersteuning? Meer weten over adviserende verkoop?
            </p>
          </details>
        </button>

        <button
          className={styles.journeyBtn}
          onClick={() => {
            console.log(
              "Journey - Een realiseerbaar traject op maat van je organisatie. Direct implementeerbaar, met begeleiding en opvolging. Hierbij streven we naar voortdurende progressie van het team en van de productiviteit. Knowlegde transfer zal centraal staan."
            )
          }}
        >
          <details>
            <summary>
              <StaticImage
                src="../images/services/journey.png"
                width={250}
                className={styles.journeyImage}
                alt="journey"
              ></StaticImage>
            </summary>
            <p className={styles.journeyTxt}>
              <span>Journey</span> Een realiseerbaar traject op maat van je
              organisatie. Direct implementeerbaar, met begeleiding en
              opvolging. Hierbij streven we naar voortdurende progressie van het
              team en van de productiviteit. Knowlegde transfer zal centraal
              staan.
            </p>
          </details>
        </button>

        <button
          className={styles.projectBtn}
          onClick={() => {
            console.log(
              "Project - Op zoek naar ondersteuning voor je projecten? Wij kunnen fungeren als projectleider, of wij kunnen verschillende andere projectrollen opnemen. Tegelijkertijd zorgen wij voor een kennisoverdracht binnen je team zodat toekomstige projecten zelfstandig uitgevoerd kunnen worden."
            )
          }}
        >
          <details>
            <summary>
              <StaticImage
                src="../images/services/project.png"
                width={250}
                className={styles.projectImage}
                alt="project"
              ></StaticImage>
            </summary>
            <p className={styles.projectTxt}>
              <span>Project</span> Op zoek naar ondersteuning voor je projecten?
              Wij kunnen fungeren als projectleider, of wij kunnen verschillende
              andere projectrollen opnemen. Tegelijkertijd zorgen wij voor een
              kennisoverdracht binnen je team zodat toekomstige projecten
              zelfstandig uitgevoerd kunnen worden.
            </p>
          </details>
        </button>

        <button
          className={styles.speakerBtn}
          onClick={() => {
            console.log(
              "Speaker - Op zoek naar een spreker of facilitator voor je evenement of workshop ? Wij helpen je graag verder"
            )
          }}
        >
          <details>
            <summary>
              <StaticImage
                src="../images/services/speaker.png"
                width={250}
                className={styles.speakerImage}
                alt="speaker"
              ></StaticImage>
            </summary>
            <p className={styles.speakerTxt}>
              <span> Speaker</span>Op zoek naar een spreker of facilitator voor
              je evenement of workshop ? Wij helpen je graag verder
            </p>
          </details>
        </button>

        <button
          className={styles.visualsBtn}
          onClick={() => {
            console.log(
              "Visuals - Flows, processen of simpelweg de agendapunten van een meeting duidelijk visualiseren, dat is ons ding."
            )
          }}
        >
          <details>
            <summary>
              <StaticImage
                src="../images/services/visuals.png"
                width={250}
                className={styles.visualsImage}
                alt="visuals"
              ></StaticImage>
            </summary>
            <p className={styles.visualsTxt}>
              <span>Visuals</span>Flows, processen of simpelweg de agendapunten
              van een meeting duidelijk visualiseren, dat is ons ding.
            </p>
          </details>
        </button>
        </div> */}
    </Layout>
  )
}
export default Services
