import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hello from "../images/Hello.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello~Chick~</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <img src={Hello} alt="Don't let me see you again " />
    </div>
    <a class="css-1052yfl"href="https://www.bilibili.com/video/av66962757/">Something interesting~</a>
    <Link to="/page-2/">
      <p>
        What's more?
      </p>
    </Link>
  </Layout>
)

export default IndexPage
