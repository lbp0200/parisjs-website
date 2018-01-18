import React from "react"
import Head from "react-helmet"

const PageError = ({ error }) => {
  const status = error && error.status || 404
  const message = error && status !== 404 ? error.statusText : "Page not found"

  return (
    <div>
      <Head>
        <title>{ message }</title>
      </Head>
      <div className="container">
        <h1>{ message }</h1>
      </div>
    </div>
  )
}

export default PageError
