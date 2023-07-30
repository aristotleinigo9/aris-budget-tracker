import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import SpentSoFar from "./components/SpentSoFar";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
//1
import { AppProvider } from "./components/context/AppContext";
import Currency from "./components/Currency";



//2 type ang AppProvider at i copy paste yung code
const App = ()=> {
  return (
    <AppProvider>
       <div className="container">
      <h1 className="mt-3">Budget Planner</h1>

      <div className="row mt-3">
        <div className="col-sm">
         <Budget />
        </div>

        <div className="col-sm">
         <Remaining />
        </div>

        <div className="col-sm">
         <SpentSoFar />
        </div>

        <div className="col-sm">
         <Currency />
        </div>
      </div>

      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
        <ExpenseList />
      </div>
      </div>

      <h3 className="mt-3">Add Expense</h3>
      <div className="mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
      </div>  

    </AppProvider>
    );
};

export default App;


















//ganito itsura bago ang AppContex

// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Budget from "./components/Budget";
// import Remaining from "./components/Remaining";
// import SpentSoFar from "./components/SpentSoFar";
// import ExpenseList from "./components/ExpenseList";
// import AddExpenseForm from "./AddExpenseForm";

// const App = ()=> {
//   return (
//     <div className="container">
//       <h1 className="mt-3">Aris's Budget Planner</h1>

//       <div className="row mt-3">
//         <div className="col-sm">
//          <Budget />
//         </div>

//         <div className="col-sm">
//          <Remaining />
//         </div>

//         <div className="col-sm">
//          <SpentSoFar />
//         </div>
//       </div>

//       <h3 className="mt-3">Expenses</h3>
//       <div className="row mt-3">
//         <div className="col-sm">
//         <ExpenseList />
//       </div>
//       </div>

//       <h3 className="mt-3">Add Expense</h3>
//       <div className="mt-3">
//         <div className="col-sm">
//           <AddExpenseForm />
//         </div>
//       </div>
//       </div>  
//   );
// };

// export default App;