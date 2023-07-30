//kapag isasama yung Currency na function, import useContext, AppContext

import React, {useContext} from 'react';
import { AppContext } from './context/AppContext';



//kapag isasama Currency, dapat may const {Currency}
const ViewBudget = (props) => {
    const {Currency} = useContext(AppContext);
    return (
        <>
            <span>Budget: {Currency} {props.budget} </span>
            <button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
            Edit
            </button>
        </>
    );
};

export default ViewBudget;