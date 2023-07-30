//1 isama ang useContext
import React, { useContext } from "react";
import {TiDelete} from 'react-icons/ti';
import { AppContext } from "./context/AppContext";


//5 kapag isasama ang Currency, dapat ilagay ito sa const {dispatch}
const ExpenseItem = (props) => {
    //2
    const { dispatch, Currency } = useContext(AppContext);

    //3
    const handleDeleteExpense = () => {
        dispatch({
            type:'DELETE_EXPENSE',
            payload: props.id,
        });
    };


    //4 onClick 
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}

            <div>
                <span className="badge bg-primary bg-pill mr-3">
                    {Currency} {props.cost}
                </span>
                
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem;





//ganito cod e
// import React from "react";
// import {TiDelete} from 'react-icons/ti';

// const ExpenseItem = (props) => {
//     return (
//         <li className="list-group-item d-flex justify-content-between align-items-center">
//             {props.name}

//             <div>
//                 <span className="badge bg-primary bg-pill mr-3">
//                     SAR {props.cost}
//                 </span>
//                 <TiDelete size='1.5em'></TiDelete>
//             </div>
//         </li>
//     );
// };

// export default ExpenseItem;