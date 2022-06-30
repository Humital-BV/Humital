import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./navbar.module.css"
import { StaticImage } from "gatsby-plugin-image"

const NavBar = () => {
  return (
    <div>
      <header>
        <Link
          to="/"
          className={styles.logo}
          activeStyle={{ fontWeight: "bold", color: "#78C0A8" }}
        >
          <StaticImage
            src="../../images/logo.png"
            alt="logo"
            width={50}
          ></StaticImage>
          <div className={styles.logoName}>Humital</div>
        </Link>

        <input type="checkbox" id="navToggle" className={styles.navToggle} />

        <nav>
          <ul>
            <li>
              <Link
                to="/"
                activeStyle={{ fontWeight: "bold", color: "#78C0A8" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                activeStyle={{ fontWeight: "bold", color: "#78C0A8" }}
              >
                Onze digitale freaks
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                activeStyle={{ fontWeight: "bold", color: "#78C0A8" }}
              >
                Diensten
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                activeStyle={{ fontWeight: "bold", color: "#78C0A8" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <label for="navToggle" className={styles.navToggleLabel}>
          <span></span>
        </label>
      </header>
    </div>
  )
}

export default NavBar
