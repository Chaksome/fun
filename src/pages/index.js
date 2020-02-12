import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import styles from "./about-css-modules.module.css"
import SEO from "../components/seo"
import Hello from "../images/Hello.png"



import axios from "axios";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello~</h1>
    <div style={{ maxWidth: `300px` }}>
    <img src={Hello}/>
    </div>
    <a class="css-1052yfl"href="https://www.bilibili.com/video/av66962757/">Something interesting~</a>
    <Link to="/page-2/">
      <p>
        What's more?
      </p>
    </Link>
   
  <Link to="/about-css-modules/">
  <p>
        Something cool?
      </p>
  </Link>
 
    </Layout>
)

function handleClick() {
  axios({
    url: 'http://localhost:9000/',
    method: 'POST',
    headers: { "Access-Control-Allow-Origin": "*" },
    data: 'hello'
  })
}
axios('http://localhost:9000/');

export default IndexPage

