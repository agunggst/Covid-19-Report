import React from 'react';
import FavCard from '../components/FavCard';
// import { useSelector } from 'react-redux';
import useFavourite from '../hooks/useFavourite'

function FavouritePage() {

    // const fav_country = useSelector(state => state.favReducer.fav_country)
    const { fav_country } = useFavourite()

    return (
        <div>
            <h3 data-testid="favPageTitle">Favourite</h3>
            <div className="fav-container">
                { fav_country.map((data_country, i) => {
                    return (
                        <FavCard countryName={data_country.countryName} summary={data_country.summary} key={i} />
                    )
                }) }
            </div>
        </div>
    )
}

export default FavouritePage