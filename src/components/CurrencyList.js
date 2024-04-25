import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const CurrencyList = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [name, setName] = useState(currency);
    const handleCurrencyChange = (event) => {
        setName(event.target.value);
        // Added dispatch to update the budget state for other components.
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }

    return (
        <div className='alert alert-secondary'>
            <select className="custom-select" id="inputGroupSelect01"
                    onChange={handleCurrencyChange}>
                <option defaultValue value="£" name="Pound">Currency (£ Pound)</option>
                <option value="$" name="Dollar">Currency ($ Dollar)</option>
                <option value="€" name="Euro">Currency (€ Euro)</option>
                <option value="₹" name="Rupee">Currency (₹ Rupee)</option>
            </select>
        </div>
    );
};

export default CurrencyList;