import * as React from "react"
import "../style/normalize.css"
import "../style/style.css"
import Logo from "../images/logo.jpg"

const pageStyles = {
    color: "#fff",
    backgroundColor: "#ffe0cc",
    padding: 50,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const home = {
    display: "flex",
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '30',

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

                </div>
            </section>
            <section style={home}>
                <img src={Logo} alt='Foto da Logotipo Tribo Alma Forte' className="logo" />
                <h1 className="homeTitle">
                    Tribo alma forte
                </h1>
            </section>

        </main>
    )
}

export default IndexPage

export const Head = () => <title>Acupuntura</title>
