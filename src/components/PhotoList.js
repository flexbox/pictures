import React, { Component } from 'react'
import styled from 'styled-components'
import Loader from './Loader'
import PhotoCard from './PhotoCard'
import { Link } from 'react-router-dom'
import PhotoDetails from './PhotoDetails'

export default class Photos extends Component {
  state = {
    loading: true,
    data: [],
    errorMessage: '',
  }

  _fetch = () => {
    fetch(`http://jsonplaceholder.typicode.com/photos?_limit=30`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          loading: false,
          data: response,
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
        <PhotoGrid>
          {data.map(item => (
            <Link to={`/${item.id}`} component={PhotoDetails}>
              <PhotoCard
                key={item.id}
                id={item.id}
                title={item.title}
                thumbnailUrl={item.thumbnailUrl}
              />
            </Link>
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
