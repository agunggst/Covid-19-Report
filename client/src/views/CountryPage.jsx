import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchCountryAll } from '../store/action';
import Card from '../components/Card';
import preloader from '../preloader.gif';
import FilterForm from '../components/Filter';

function CountryPage() {
    const [filterKey, setFilterKey] = useState('')
    const [dataShow, setDataShow] = useState([])
    const response_statistics = useSelector(state => state.apiReducer.response_statistics)
    const isLoading = useSelector(state => state.apiReducer.isLoading)

    const dispatch = useDispatch()

    const cardList = dataShow.map(statistic => {
      return (
        <Card statistic={statistic} key={statistic.id}/>
      )
    })

    useEffect(() => {
        dispatch( fetchCountryAll() )
    }, [dispatch])

    // useEffect(() => {
    //     console.log(response_statistics, 'dari country page rspn stat')
    //     console.log(isLoading, 'dari country page isloading')
    // }, [response_statistics, isLoading])

    useEffect(() => {
        if(filterKey === '') {
            setDataShow(response_statistics)
        }else{
            let rgx = new RegExp(filterKey, "g");
            let temp = []
            response_statistics.forEach(stats => {
            if(stats.country.match(rgx)){
                temp.push(stats)
            }
            })

            setDataShow(temp)
        }
    }, [response_statistics, filterKey])

    const reset = (e) => {
        e.preventDefault();
        setFilterKey('')
    }

    const onChangeFilterKey = e => {
        setFilterKey(e.target.value)
    }

    return (
        <div className="main-page">
            <h3 data-testid="countryPageTitle">Pandemic Summary</h3>
            <FilterForm filterKey={filterKey} reset={reset} onChangeFilterKey={e => onChangeFilterKey(e)}/>
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

export default CountryPage