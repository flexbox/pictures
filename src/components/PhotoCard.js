import React, { Component } from 'react'
import Image from './Image'

export default class PhotoCard extends Component {
  render() {
    let { id, title, thumbnailUrl } = this.props

    if (id % 2 === 1) {
      return <Image src={thumbnailUrl} alt={title} rounded />
    }

    return <Image src={thumbnailUrl} alt={title} circle />
  }
}
