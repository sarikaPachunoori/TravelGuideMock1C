import './App.css'

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  MainContainer,
  Heading,
  PlaceAndContentCont,
  LoaderContainer,
} from './styledComponents'
import TravelGuide from './components/TravelGuide'

class App extends Component {
  state = {
    list: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getPlaces()
  }

  getPlaces = async () => {
    this.setState({isLoading: true})

    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data)

    const updatedData = data.packages.map(each => ({
      id: each.id,
      description: each.description,
      imageUrl: each.image_url,
      name: each.name,
    }))
    this.setState({list: updatedData, isLoading: false})
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  render() {
    const {list, isLoading} = this.state
    return (
      <MainContainer>
        <Heading>Travel Guide</Heading>

        {isLoading ? (
          this.renderLoadingView()
        ) : (
          <PlaceAndContentCont>
            {list.map(eachPlace => (
              <TravelGuide places={eachPlace} key={eachPlace.id} />
            ))}
          </PlaceAndContentCont>
        )}
      </MainContainer>
    )
  }
}

export default App
