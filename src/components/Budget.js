import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, dispatch, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        // Added dispatch to update the budget state for other components.
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}
                   style={{width: '50%'}}>
            </input>

        </div>
    );
};

export default Budget;