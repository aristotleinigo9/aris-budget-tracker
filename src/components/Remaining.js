//2 isama ang useContext
import React, { useContext } from "react";

//1
import { AppContext } from "./context/AppContext";

//7 kapag gagamitin ung Currency, isasama ito sa const {expenses, budget}

const Remaining = ()=>{

    //3
    const { expenses, budget, Currency } = useContext(AppContext);


    //4
    const totalExpenses = expenses.reduce((total, item)=>{
        return (total = total + item.cost);
    },0);

    //5 yung remaining formula {budget-totalExpenses}
    //6 yung alertType
    const alertType = totalExpenses>budget? 'alert-danger': 'alert-success';
    return (
        <div className= {`alert ${alertType}`}>
            <span>Remaining: {Currency} {budget-totalExpenses}</span>
        </div>

    );
};

export default Remaining;





//code bago ang AppContext
// import React from "react";

// const Remaining = ()=>{
//     return (
//         <div className= 'alert alert-primary'>
//             <span>Remaining: SAR 1500</span>
//         </div>

//     );
// };

// export default Remaining;