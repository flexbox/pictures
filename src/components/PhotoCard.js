import React, { Component } from 'react'

export default class PhotoCard extends Component {
  render() {
    let { id, title, url, thumbnailUrl } = this.props

    return (
      <>
        <div>{id}</div>
        <div>{title}</div>
        <div>{url}</div>
        <div>{thumbnailUrl}</div>
      </>
    )
  }
}
