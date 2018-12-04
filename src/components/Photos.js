import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Loader from './Loader'
import PhotoCard from './PhotoCard'

export default class Photos extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    loading: true,
    data: [],
    errorMessage: '',
  }

  _fetch = () => {
    axios
      .get(`http://jsonplaceholder.typicode.com/photos?_limit=30`)
      .then(response =>
        this.setState({
          loading: false,
          data: response.data,
        })
      )
      .catch(error =>
        this.setState({
          loading: false,
          errorMessage: error.message,
        })
      )
  }

  componentDidMount() {
    this._fetch()
  }

  render() {
    let { loading, data, errorMessage } = this.state

    if (loading) {
      return <Loader />
    }

    if (errorMessage) {
      return <div>{errorMessage}</div>
    }

    return (
      <PhotosContainer>
        <div>
          <span role="img" aria-label="Wait">
            📸{' '}
          </span>
          Photos{' '}
        </div>
        <PhotoGrid>
          {data.map(item => (
            <PhotoCard
              key={item.id}
              albumId={item.albumId}
              title={item.albumId}
              url={item.albumId}
              thumbnailUrl={item.albumId}
            />
          ))}
        </PhotoGrid>
      </PhotosContainer>
    )
  }
}

const PhotosContainer = styled.div`
  height: 100%;
  overflow: auto;
`

const PhotoGrid = styled.div`
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
