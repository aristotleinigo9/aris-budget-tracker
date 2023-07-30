
//2 i add ang useState
//7 i add ang useContext
import React, { useState ,useContext} from "react";
//6
import { AppContext } from "./context/AppContext";

//10
import {v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () =>{
    //8
    const { dispatch } = useContext(AppContext);

    //1
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    //4
    const onSubmit = (event)=>{
        event.preventDefault();
        //alert('name'+" " + name + " " +'cost'+" " + cost);

        //9
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        //11
        dispatch ({
            type: 'ADD_EXPENSE',
            payload:expense,
        });

    };


//3 yung value at onChange
//5 onSubmit sa form
    return (
        <form onSubmit={onSubmit}>
            <div className="row">

                <div className="col-sm">
                    <label for='name'>Name</label>
                    <input 
                        required='required'
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange = {(event)=>setName(event.target.value)}> 
                    </input>
                </div>

                <div className="col-sm">
                    <label for='cost'>Cost</label>
                    <input
                        required='required'
                        type="text"
                        className="form-control"
                        id='cost'
                        value={cost}
                        onChange={(event)=>setCost(event.target.value)}>
                    </input>
                </div>

                <div className="col-sm">
                    <button type="submit" className="mt-4 btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;












//ganito ang code bago AppContext
// import React from "react";

// const AddExpenseForm = () =>{
//     return (
//         <form>
//             <div className="row">

//                 <div className="col-sm">
//                     <label for='name'>Name</label>
//                     <input 
//                         required='required'
//                         type="text"
//                         className="form-control"
//                         id="name">
//                     </input>
//                 </div>

//                 <div className="col-sm">
//                     <label for='cost'>Cost</label>
//                     <input
//                         required='required'
//                         type="text"
//                         className="form-control"
//                         id='cost'>
//                     </input>
//                 </div>

//                 <div className="col-sm">
//                     <button type="submit" className="mt-4 btn btn-primary">Save</button>
//                 </div>
               
//             </div>
           
//         </form>
//     );
// };

// export default AddExpenseForm;