import {useSelector} from 'react-redux';


function SearchResults() {
    const availablePlanes = useSelector(state => state.plane.availablePlanes);

    // console.log(availablePlanes);

    const planeArr = []; 
    // if (availablePlanes) {
    //     for (let i = 0; i < availablePlanes.length; i++) {
    //         planeArr.push(availablePlanes[i]);
            
    //     }

    // }

    for (const key in availablePlanes) {
        planeArr.push(availablePlanes[key]);
        console.log(`individual plane`, availablePlanes[key])
    };
    console.log('availablePlanes', availablePlanes);
    console.log('planeArr', planeArr);
    return (
        <>
            {availablePlanes &&
            <div>
                {
                    planeArr.map( plane => {
                        return (
                        <div>
                            <h3>{plane.name}</h3>
                            <p>{plane.description}</p>
                        </div>
                    )})
                }
            </div>
            }
        </>
    )
}

export default SearchResults;

/* availablePlanes.foreach( plane => {
                        <div>
                            <h3>{plane.name}</h3>
                            <p>{plane.description}</p>
                        </div>
                    }) */