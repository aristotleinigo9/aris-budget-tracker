
//2 pagdagdag ng useContext
//5 pagdagdag ng useState sa part na mag edit ng budget
import React, { useContext, useState} from "react";
//1 import ang AppContext
import { AppContext } from "./context/AppContext";


//after magawa yung EditBudget at ViewBudget
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";


const Budget = ()=>{
    //3 gawa const budget 
    //6 pag add sa dispatch
    const { budget, dispatch } = useContext(AppContext);

   //7
   const [isEditing, setIsEditing] = useState(false);

   //8 
   const handleEditClick = () => {
    setIsEditing(true);
   };

   //9 
   const handleSaveClick = (value) =>{
    dispatch ({
        type:'EDIT_BUDGET',
        payload: value,
    });
    setIsEditing(false);
   };
    // //4 ilagay yung {budget}
    // return (
    //     <div className= 'alert alert-secondary'>
    //         <span>Budget: SAR {budget}</span>
    //     </div>

    // );


    //10
    return(
        <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between"> 
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget = {budget} />
            ):(
                <ViewBudget handleEditClick={handleEditClick} budget = {budget} />
            )}
        </div>
    );
};

export default Budget;








//eto naman ang codes excluding yung part na ma edit ang budget
//2 pagdagdag ng useContext
// import React, { useContext} from "react";
// //1 import ang AppContext
// import { AppContext } from "./context/AppContext";


// const Budget = ()=>{
//     //3 gawa const budget
//     const { budget } = useContext(AppContext);

//     //4 ilagay yung {budget}
//     return (
//         <div className= 'alert alert-secondary'>
//             <span>Budget: SAR {budget}</span>
//         </div>

//     );
// };

// export default Budget;








//codes before AppContext
// import React from "react";

// const Budget = ()=>{
//     return (
//         <div className= 'alert alert-success'>
//             <span>Budget: SAR 2000</span>
//         </div>

//     );
// };

// export default Budget;
