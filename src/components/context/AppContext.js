//2 at //5 kapag ita type ang useReducer
import { createContext, useReducer } from "react";

//7
//12 CHG_CURRENCY
const AppReducer = (state, action) =>{
    switch(action.type){

        //pagkatapos ng 11 sa AddExpenseForm
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenses: [...state.expenses, action.payload],
            };


        //pagkatapos ng 4 sa ExpenseItemList
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(
                    (expense)=>expense.id !==action.payload),
            };

        //pagkatapos magawa magawa ang ViewBudget at EditBudget
        case 'EDIT_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        case 'CHG_CURRENCY':
            action.type = "DONE";
            state.Currency = action.payload;
            return {
                ...state
            }

        default:
            return state;
    }
};


//1
//10 kapag lalagyan ng Currency na may drop down menu
const initialState = {
    budget: 1000,
    expenses: [
        {id:12, name: 'shopping', cost: 40},
        {id:13, name: 'holiday', cost: 50},
        {id:14, name: 'car', cost: 50},
    ],
    Currency: '$'
};

//3
export const AppContext = createContext();

//4 at //6, kapag tinawag ang useReducer hook, dapat magbigay tayo ng AppReducer at initialState
//9 nun inilagay ang export
//11 Currency: state.Currency
export const AppProvider = (props) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //8
    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
        Currency: state.Currency
    }}>
        {props.children}
    </AppContext.Provider>)


};