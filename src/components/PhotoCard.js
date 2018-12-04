import React, { Component } from 'react'

export default class PhotoCard extends Component {
  render() {
    let { key, title, thumbnailUrl } = this.props

    return (
      <>
        <div>{key}</div>
        <img src={thumbnailUrl} alt={title} />
      </>
    )
  }
}
