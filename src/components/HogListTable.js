import HogListItem from "./HogListItem"

export default function HogListTable({porkData}){

    const HogCardBuilder = porkData.map((pork) => {
        return(
            <HogListItem
            key={pork.name}
            name={pork.name}
            specialty={pork.specialty}
            greased={pork.greased}
            weight={pork.weight}
            image={pork.image}            
            />
        )
    })

    return(
        <div>
            <label>Filter the Hogs: 
               {' '}
                <select name='greasyHogs'>
                  <option value='All'>All</option>
                  <option value='greased'>Greasy Hogs Only!</option>
                </select>
            </label>
            <figure>
                {HogCardBuilder}
            </figure>
        </div>
    )    
}