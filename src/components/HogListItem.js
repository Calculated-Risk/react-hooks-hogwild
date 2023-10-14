export default function HogListItem({name, specialty, greased, weight, image, medal}) {

    return(
      <div>
            <div><h3>{name}</h3></div>
            <div>{medal}</div>
            <div><img width={250}  src={image}></img></div>

      </div>
    )
}