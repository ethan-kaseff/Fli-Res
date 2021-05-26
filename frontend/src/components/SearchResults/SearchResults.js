import {useSelector} from 'react-redux';


function SearchResults() {
    const availablePlanes = useSelector(state => state.availablePlanes);

    return (
        <>
            {availablePlanes &&
            <div>
                {
                    availablePlanes.foreach( plane => {
                        <div>
                            <h3>{plane.name}</h3>
                            <p>{plane.description}</p>
                        </div>
                    })
                }
            </div>
            }
        </>
    )
}

export default SearchResults;