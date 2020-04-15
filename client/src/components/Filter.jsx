import React from 'react';

function FilterForm(props) {
    return (
        <form onSubmit={props.reset}>
            <input type="text" className="input-filter" placeholder="Country Name" onChange={props.onChangeFilterKey} value={props.filterKey}/>
            <button className="button-filter" type="submit">Reset</button>
        </form>
    )
}

export default FilterForm