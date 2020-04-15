export const fetchCountryDetail = (countryName) => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'SET_ISLOADINGDETAIL',
            payload: {
                setLoad: true
            }
        })
        if(countryName === 'Summary'){
            countryName = 'All'
        }
        const result = await fetch(`https://covid-193.p.rapidapi.com/history?country=${countryName}`, {
            method: 'GET',
            headers: {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "1015a92099mshc791e1c8eedad73p1615bdjsn66773459b822"
            }
        })
        const json = await result.json()

        dispatch({
            type: 'SET_COUNTRYDETAIL',
            payload: {
                data: json.response
            }
        })

        dispatch({
            type: 'SET_ISLOADINGDETAIL',
            payload: {
                setLoad: false
            }
        })
    }

}

export const fetchCountryAll = () => {
    return async (dispatch, getState) => {
        dispatch({
            type: 'SET_ISLOADING',
            payload: {
                setLoad: true
            }
        })
        const result = await fetch('https://covid-193.p.rapidapi.com/statistics', {
            "method": 'GET',
            headers: {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': '1015a92099mshc791e1c8eedad73p1615bdjsn66773459b822'
            }
        })
        const json = await result.json()

        dispatch({
            type: 'SET_COUNTRYALL',
            payload: {
                data: json.response
            }
        })

        dispatch({
            type: 'SET_ISLOADING',
            payload: {
                setLoad: false
            }
        })
    }

}