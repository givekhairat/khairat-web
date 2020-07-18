import '../assets/global.scss'

import App from 'next/app'
import React from 'react'

class Khairat extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default Khairat
