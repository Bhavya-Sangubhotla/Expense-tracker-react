import react, { useState } from "react";
import InputBox from "./inputbox";

function AddExpense(props) {

    const [toggleBool, setToggleBool] = useState(true);

    function handleClick() {
        setToggleBool(prev => {
            return !prev;
        })
        props.AddRevenue(revenue);
        setRevenue("");
    }


    const [expenseItem, setExpenseItem] = useState({
        title: "",
        Amount: "",
        date: ""

    });
    function newItem(name, value) {
        setExpenseItem(prev => {
            return {
                ...prev,
                [name]: value
            }

        })
    }

    
    function handleExpenseClick(e) {
        props.itemsList(expenseItem);
        e.preventDefault();
        setExpenseItem({
            title: "",
            Amount:"",
            date: ""
        })
            
        
    }

    const [revenue, setRevenue] = useState("");
    function handleRevenue(event){
        const value = event.target.value;
        setRevenue(value);
    }

    return (
        <div className="top-head">
        <h1>New Expense</h1>
        {!toggleBool && <p>{props.msg}</p>}
            
            <div className="header">
                <InputBox displayHeader={toggleBool} inputName="title" inputType="text" addItem={newItem} name={expenseItem.title}  />
                <InputBox displayHeader={toggleBool} inputName="Amount" inputType="text" addItem={newItem} name={expenseItem.Amount}/>
                <InputBox displayHeader={toggleBool} inputName="date" inputType="date" addItem={newItem} name={expenseItem.date}/>
            </div>
            {!toggleBool &&
                <div className="button-head">
                    <button className="btn btn-lg mx-3" onClick={handleClick}>Cancel</button>
                    <button className="btn btn-info btn-lg mx-3"  onClick={handleExpenseClick}>Add Expenses</button>
                </div>
            }
    
            {toggleBool &&
                <div className="intro">
                    <input type="text" name="revenue" size="30" onChange={handleRevenue} value={revenue} placeholder="Enter your Income.." autoComplete="off"/><br/>
                    <button className="btn btn-info btn-lg " onClick={handleClick} >Add New Expenses</button>
                </div>
            }
        </div>
    );
}
export default AddExpense;