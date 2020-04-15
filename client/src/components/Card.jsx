import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

function Card (props) {
    let history = useHistory();
    let dispatch = useDispatch();

    const gotoDetail = (countryName) => {
        history.push(`/country/${countryName}`)
    }

    const addFav = (data_stats) => {
        dispatch({
            type: 'ADD_FAV',
            payload: {
                countryName: data_stats.country,
                summary: {
                    cases: data_stats.cases.total,
                    deaths: data_stats.deaths.total,
                    recovered: data_stats.cases.recovered
                }
            }
        })
    }

    return (
        <div className="card" >
            <div onClick={() => gotoDetail(props.statistic.country)} data-testid="cardCLick">
                <h4>{props.statistic.country}</h4>
                <ul>
                    <li className="card-cases">Cases: {props.statistic.cases.total}</li>
                    <li className="card-deaths">Deaths: {props.statistic.deaths.total}</li>
                    <li className="card-recovered">Recovered: {props.statistic.cases.recovered}</li>
                </ul>
            </div>
            {props.statistic.country === 'Summary'?
            null
                :
            <button className="addFav-btn" onClick={() => addFav(props.statistic)}>Add to Favourite</button>}
        </div>
    )
}

export default Card