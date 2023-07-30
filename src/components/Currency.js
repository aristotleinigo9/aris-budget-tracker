//pagkatapos ng 12 from AppContext, gagawin ang Currency.js

import React, {useContext} from "react";
import { AppContext } from "./context/AppContext";

const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const changeCurrency = (val) =>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return(
        <div className="alert alert-warning">
            Currency {
                <select name = 'Currency' id = 'Currency' onChange = {event=>changeCurrency(event.target.value)}>
                    <option value="$">$ Dollar</option>
                    <option value = '₱'>₱ Peso</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
            }
        </div>
    )
};

export default Currency;