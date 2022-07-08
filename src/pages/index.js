import { Link } from "gatsby"

import * as React from "react"
import * as styles from "../styles/index.module.css"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

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
    </Layout>
  )
}

export default IndexPage
