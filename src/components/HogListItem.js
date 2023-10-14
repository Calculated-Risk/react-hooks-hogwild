import { useState } from "react"

export default function HogListItem({name, specialty, greased, weight, image, medal}) {
 
  const [isClicked, setIsClicked] = useState(false)


   const otherHogDetails = <div>
                                <div>{specialty}</div>
                                <div>{weight}</div>
                                <div>{medal}</div>
                                <div>{greased ? "Greased" : ''}</div>
                            </div>    
                            
    function handleTileClick(){
      setIsClicked(!isClicked)
    }
  return(
      <div onClick={handleTileClick} className="pigTile">
            <div><h3>{name}</h3></div>
            <div><img width={250}  src={image}></img></div>
            {isClicked ? otherHogDetails : null}
      </div>
    )
}