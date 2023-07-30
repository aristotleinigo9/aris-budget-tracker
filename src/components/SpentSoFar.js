//2 i add ang useContext
import React, { useContext} from "react";

//6 idadagdag yung Currency, gagawa ng const {expenses, Currency} sa halip na const {expenses} lang

//1
import { AppContext } from "./context/AppContext";

const SpentSoFar = ()=>{
    //3
    const { expenses, Currency } = useContext(AppContext);

    //4
    const totalExpenses = expenses.reduce((total,item)=>{
        return (total +=item.cost);
    },0);

    //5 {totalExpenses}
    return (
        <div className= 'alert alert-primary'>
            <span>Spent so far: {Currency} {totalExpenses}</span>
        </div>

    );
};

export default SpentSoFar;








//ganito code bago ang AppContext
// import React from "react";

// const SpentSoFar = ()=>{
//     return (
//         <div className= 'alert alert-danger'>
//             <span>Spent so far: SAR 500</span>
//         </div>

//     );
// };

// export default SpentSoFar;
