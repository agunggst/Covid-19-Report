const defaultState = {
    fav_country: [{
        countryName: 'Indonesia',
        summary: {
            cases: 1677,
            deaths: 157,
            recovered: 103
        }
    }]
}

const reducer = (state=defaultState, action) => {

    switch (action.type) {
        //ga boleh pake push!! soalnya mutable
        // case 'SET_COUNTRYDETAIL':

        //     return {...state, countryDetail: data_countryDetail}

        // case 'SET_COUNTRYALL':

        //     return {...state, countryAll: data_countryAll}

        // case 'SET_ISLOADING':
        //     let set = action.payload.setLoad
        //     return {...state, isLoading: set}

        case 'ADD_FAV':
            let isInside = false
            let newFav
            for(let i=0; i<state.fav_country.length; i++) {
                if(state.fav_country[i].countryName === action.payload.countryName){
                    isInside = true
                    break
                }
            }

            if(!isInside){
                newFav = state.fav_country.concat({
                    countryName: action.payload.countryName,
                    summary: action.payload.summary
                })
            }else{
                newFav = state.fav_country
            }
            return {...state, fav_country: newFav}
    
        case 'DELETE_FAV':
            let arrFav = []
            for(let i=0; i<state.fav_country.length; i++){
                if(state.fav_country[i].countryName !== action.payload.countryName){
                    arrFav = arrFav.concat(state.fav_country[i])
                }
            }

            return {...state, fav_country: arrFav}

        default:
            return state
    }

}

export default reducer