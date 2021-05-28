import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import './SearchResults.css';


function SearchResults() {
    const history = useHistory();
    const availablePlanes = useSelector(state => state.plane.availablePlanes);

    const planeArr = []; 

    for (const key in availablePlanes) {
        planeArr.push(availablePlanes[key]);
        console.log(`individual plane`, availablePlanes[key])
    };

    // Card Click Function

    const cardClick = (id) => {
        history.push(`/planes/${id}`)
    }

    return (
        <>
            <div className='nav-organizer'></div>
            <div className='search-results-main-area'>
                <div></div>
                <div>
                    <div className='search-results'>
                        <div className='search-title'>
                            <h2>Search Results...</h2>
                        </div>
                        <div className='plane-card-list'>
                            {availablePlanes &&
                            <div>
                                {
                                    planeArr.map( plane => {
                                        return (
                                            <card onClick={() => history.push(`/planes/${plane.id}`)}className= 'plane-card'>
                                            <img className='plane-image' src={plane.imageLink} alt=''></img>
                                            <div className='plane-info'>
                                                <h3>{plane.name}</h3>
                                                <label>Description:</label>
                                                <p>{plane.description}</p>
                                            </div>
                                        </card>
                                    )})
                                }
                            </div>
                            }
                            {!availablePlanes && 
                            <div className='no-results'>
                                <p>Unfortunately we don't have any planes available for this timeframe.</p>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div></div>


            </div>
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