const defaultState = {
    countryDetail: {
        countryData: {},
        dayHistory: [],
        dataHistory: [],
        CFR: null,
        latestCase: null
    },
    all_stats: {},
    response_statistics: [],
    isLoading: true,
    isLoadingDetailPage: true
}

const reducer = (state=defaultState, action) => {

    switch (action.type) {

        case 'SET_COUNTRYDETAIL':
            let data_countryDetail = action.payload.data
            // console.log(data_countryDetail, '<<<<<<<<<<<<<<<<<<<<<<<<')
            let tempDay = []
            let tempData = []
            data_countryDetail.forEach(data => {
                tempDay.push(data.day)
                tempData.push(data.cases.active)
            });
            let temp_all_stats = {
                countryData: data_countryDetail,
                dayHistory: tempDay.reverse(),
                dataHistory: tempData.reverse(),
                CFR: `${((data_countryDetail[0].deaths.total/data_countryDetail[0].cases.total)*100).toFixed(2)}%`,
                latestCase: data_countryDetail[0].cases.new
            }
            return {...state, countryDetail: temp_all_stats}

        case 'SET_COUNTRYALL':
            let data_countryAll = action.payload.data
            let temp = []
            let all_temp = {}
            let i=0
            data_countryAll.forEach(element => {
                if(element.country !== 'All'){
                    i++
                    element.id = i
                    temp.push(element)
                }else{
                    element.country = 'Summary'
                    all_temp = element
                }
            });

            return {...state, response_statistics: temp, all_stats: all_temp}

        case 'SET_ISLOADING':
            let set = action.payload.setLoad
            return {...state, isLoading: set}

        case 'SET_ISLOADINGDETAIL':
            let setldp = action.payload.setLoad
            return {...state, isLoadingDetailPage: setldp}
    
        default:
            return state
    }
}

export default reducer