import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryDetail } from '../store/action'
import preloader from '../preloader.gif';
import { Line } from 'react-chartjs-2';

function DetailPage() {
    let { countryName } = useParams()
    const countryDetail = useSelector(state => state.apiReducer.countryDetail)
    const isLoading = useSelector(state => state.apiReducer.isLoadingDetailPage)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( fetchCountryDetail(countryName) )
    }, [countryName, dispatch])

    return (
        <div className="detail-page">
            <h3 data-testid="detailPageTitle">{countryName==='Summary'?'Global Cases':countryName}</h3>
            {isLoading?
                <div>
                    <img src={preloader} alt="loading"/>
                </div>
                    :
                <div>
                    <div className="chart">
                        <Line
                            options={{
                                responsive: true,
                                scales: {
                                    xAxes: [{
                                        gridLines:{
                                            display: true,
                                            color: 'rgb(60, 60, 60)'
                                        }
                                    }],
                                    yAxes: [{
                                        gridLines:{
                                            display: true,
                                            color: 'rgb(60, 60, 60)'
                                        }
                                    }]
                                }
                            }}
                            data={{
                                labels: countryDetail.dayHistory,
                                datasets: [
                                    {
                                        label: 'Active Cases',
                                        data: countryDetail.dataHistory,
                                        borderColor: '#61dafb'
                                    }
                                ]
                            }}
                        />
                    </div>
                    <div className="detail-card">
                        <ul>
                            <li className="new-case">Latest New Case: { countryDetail.latestCase }</li>
                            <li className="CFR">Case Fatality Rate: { countryDetail.CFR }</li>
                        </ul>
                        <table cellPadding="10px" align="center">
                            <thead>
                                <tr>
                                    <th>Currently Infected</th>
                                    <th>Cases with Outcome</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{countryDetail.countryData[0].cases.active}</td>
                                    <td>{countryDetail.countryData[0].cases.total - countryDetail.countryData[0].cases.active}</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Serious or Critical</th>
                                    <th>Death</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{((countryDetail.countryData[0].cases.critical/countryDetail.countryData[0].cases.active) * 100).toFixed(2)}%</td>
                                    <td>{((countryDetail.countryData[0].deaths.total/(countryDetail.countryData[0].cases.total - countryDetail.countryData[0].cases.active)) * 100).toFixed(2)}%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailPage