import * as React from "react"
import "../style/normalize.css"
import "../style/style.css"
import Logo from "../images/logo.jpg"
import { IoReorderThreeSharp } from "react-icons/io5";

const pageStyles = {
  color: "#fff",
  backgroundColor: "#ffe0cc",
  padding: 40,
  display: "flex",
  justifyContent: 'center',
  flexWrap: 'wrap',
  flexDirection: 'row',
}

const home = {
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  }
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <section>
        <div>
          <IoReorderThreeSharp className="icon"/>
        </div>
      </section>
      <section>
        <img src={Logo}  alt='Foto da Logotipo Tribo Alma Forte' className="logo"/>
        <h1 className="homeTitle">
          Tribo Alma Forte
        </h1>
      </section>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Tribo alma Forte</title>
