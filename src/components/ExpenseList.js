//2 i add ang useContext
//8 isama ang useState
import React, { useContext, useEffect, useState} from "react";
import ExpenseItem from "./ExpenseItem";


//1
import { AppContext } from "./context/AppContext";

const ExpenseList = () =>{

    //3
    const { expenses } = useContext(AppContext);


    //4
    const[filteredExpenses, setfilteredExpenses] = useState (expenses||[]);

    //5
    useEffect(()=>{
        setfilteredExpenses(expenses);
    },[expenses]);

    //6
    const handleChange = (event) =>{
        const searchResults = expenses.filter((filteredExpense)=>
            filteredExpense.name.toLowerCase().includes(event.target.value)
            );
            setfilteredExpenses(searchResults);
    };
  

    //7 input para sa search box
    //8 yung bago mag map, dapat filteredExpenses sa halip na Expenses lang
    return(
       <>
        <input
            type="text"
            class = 'form-control mb-2 mr-ms-2'
            placeholder="Type to search..."
            onChange={handleChange}
        />

        <ul className="list-group mt-3 mb-3">  
            {filteredExpenses.map((expense)=>(
                <ExpenseItem
                    id = {expense.id}
                    name = {expense.name}
                    cost = {expense.cost} />
                    ))}
        </ul>
    </>
    );
};

export default ExpenseList;








//ganito code bago ang AppContext
//yung ul dapat may classname na list-group para lumabas yung border ng table
// import React from "react";
// import ExpenseItem from "./ExpenseItem";

// const ExpenseList = () =>{
//     const expenses = [
//         {id:1, name: "Shopping",cost:50},
//         {id:2, name: "Holiday",cost:70},
//         {id:3, name: "Transportation",cost:40},
//         {id:4, name: "Fuel",cost:20},
//         {id:5, name: "Child Care",cost:90},
//     ];
//     return(
//         <ul className="list-group">  
//             {expenses.map((expense)=>(
//                 <ExpenseItem
//                     id = {expense.id}
//                     name = {expense.name}
//                     cost = {expense.cost} />
//                     ))}
//         </ul>
//     );
// };

// export default ExpenseList;