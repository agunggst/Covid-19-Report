import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FavCard(props) {

    const dispatch = useDispatch()
    const history = useHistory()

    const deleteFav = (countryName) => {
        dispatch({
            type: "DELETE_FAV",
            payload: {
                countryName
            }
        })
    }

    const gotoDetail = (countryName) => {
        history.push(`/country/${countryName}`)
    }

    return (
        <div className="fav-card">
            <h4 onClick={() => gotoDetail(props.countryName)}>{props.countryName}</h4>
            <ul>
                <li className="card-cases">Cases: {props.summary.cases}</li>
                <li className="card-deaths">Deaths: {props.summary.deaths}</li>
                <li className="card-recovered">Recovered: {props.summary.recovered}</li>
            </ul>
            <button className="deleteFav-btn" onClick={() => deleteFav(props.countryName)}>delete</button>
        </div>
    )
}

export default FavCard