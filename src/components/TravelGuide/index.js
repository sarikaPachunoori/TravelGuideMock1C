import {ListCont, Names, Img, Descr} from './styledComponents'

const TravelGuide = props => {
  const {places} = props
  const {description, imageUrl, name} = places

  return (
    <ListCont>
      <Img src={imageUrl} alt={name} />
      <Names>{name}</Names>
      <Descr>{description}</Descr>
    </ListCont>
  )
}

export default TravelGuide
