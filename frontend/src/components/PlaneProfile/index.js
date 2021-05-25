import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {getPlanes} from '../../store/plane';


import './PlaneProfile.css';

function PlaneProfile() {
    const dispatch = useDispatch();
    const { planeId } = useParams();

    useEffect(() => {
        dispatch(getPlanes());
    }, [dispatch])

    console.log(planeId);

    const plane = useSelector(state => state.plane[planeId]);

    console.log(plane);


    return (
        <>
            {plane && 
            <div>
                <h1>{plane.name}</h1>
                <h3>Description</h3>
                <p>{plane.description}</p>
                <div>
                    <img src={plane.imageLink} alt='plane'></img>

                </div>
                <div
                    className="pokemon-detail-image"
                    style={{ backgroundImage: `url('${plane.imageLink}')` }}
                ></div>
            </div>
            }
        </>
    )

}


export default PlaneProfile
