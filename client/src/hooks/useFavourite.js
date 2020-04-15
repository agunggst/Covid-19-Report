import {useSelector} from 'react-redux';

function useFavourite() {

    const fav_country = useSelector(state => state.favReducer.fav_country)

    return {
        fav_country
    }
}

export default useFavourite