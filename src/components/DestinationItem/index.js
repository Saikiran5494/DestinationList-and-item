// Write your code here
import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item
  return (
    <li className="container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
