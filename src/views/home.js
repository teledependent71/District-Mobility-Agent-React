import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Mobility Agent</title>
        <meta property="og:title" content="District Mobility Agent" />
      </Helmet>
    </div>
  )
}

export default Home
