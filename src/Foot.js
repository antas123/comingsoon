import fb from "./images/facebook.png"
import insta from "./images/insta.png"
import t from "./images/t.png"
import "./foot.css"

function Foot() {
  return (
    <div className="fo">
      <img src={fb} alt="" />
      <img src={insta} alt="" />
       <img src={t} alt="" />
    </div>
  )
}

export default Foot
