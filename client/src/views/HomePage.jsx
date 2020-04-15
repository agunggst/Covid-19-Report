import React, {useEffect} from 'react';
import preloader from '../preloader.gif';
import Card from '../components/Card';
import {useSelector, useDispatch} from 'react-redux';
import { fetchCountryAll } from '../store/action';

function HomePage() {
    const isLoading = useSelector(state => state.apiReducer.isLoading)
    const all_stats = useSelector(state => state.apiReducer.all_stats)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( fetchCountryAll() )
    }, [dispatch])

    // useEffect(() => {
    //     console.log(all_stats, 'dari home page rspn stat')
    //     console.log(isLoading, 'dari home page isloading')
    // }, [all_stats, isLoading])

    const cardList = <Card statistic={all_stats} />

    return (
        <div className="home-page">
            <h3 data-testid="homePageTitle">Global Cases</h3>
            <div className="card-container">
                {isLoading?
                <div>
                    <img src={preloader} alt="loading"/>
                </div>
                :cardList}
            </div>
        </div>
    )
}

export default HomePage