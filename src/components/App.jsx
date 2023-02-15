import react, { useEffect, useState } from "react";
import AddExpense from "./addexpense";
import Item from "./item";
import PieChart from "./piechart";
import BarChart from "./barchart";

function App() {

    

    

    const [message, setMessage] = useState("");

    const [expenseItems, setexpenseItems] = useState([]);

    

    function newItems(expenseItem) {
        if (expenseItem.title !== "" && expenseItem.Amount !== "" && expenseItem.date !== "") {
            setexpenseItems(prev => {
                return [...prev, expenseItem]
            })
            setMessage("");
        }
        else {
            setMessage("Feilds Can't be empty!!!");
        }
    }



    const [income, setIncome] = useState("");

    function handleRevenueChange(revenue) {
        setIncome(revenue);
    }

    const [itemPercentage, setItemPercentage] = useState([{
        key: "",
        x: "",
        y: ""
    }]);
    const [pieBool, setPieBool] = useState(false);
    const [barBool, setBarBool] = useState(false);



    function percentage(event) {

        const name = event.target.name;

        const percentages = expenseItems.map(eachitem => {
            return {
                key: Math.random(),
                x: eachitem.title,
                y: Math.round((eachitem.Amount / income * 100) * 100) / 100
            }
        })
        

        var sum = 0;
        percentages.forEach(element => {

            sum = sum + element.y;

        });
        if (percentages[percentages.length - 1].x !== "savings") {
            percentages.push({
                key: Math.random(),
                x: "savings",
                y: Math.round((100 - sum) * 100) / 100
            })

        }
        setItemPercentage(percentages);

        if (name === "bar") {
            setPieBool(false);
            setBarBool(true);
        }
        else {
            setBarBool(false);
            setPieBool(true);
        }

    }
    




    return (
        <div>
            <AddExpense itemsList={newItems} AddRevenue={handleRevenueChange} msg={message} />
            <div className="container-items row">
                <div className="col-lg-6">
                    {expenseItems.map((eachItem, index) => {
                        return <Item today={eachItem.date} key={index} title={eachItem.title} Amount={eachItem.Amount} />
                    })}
                </div>
                {expenseItems.length > 0 &&
                    <div className="col-lg-6 pie">
                        <h2>Revenue: {income}</h2>
                        <div className="chart-buttons">
                            <button className="btn btn-info btn-lg" name="pie" onClick={percentage}>Pie Chart</button>
                            <button className="btn btn-lg btn-info" name="bar" onClick={percentage}>Bar Chart</button>
                        </div>
                        {(pieBool && !barBool) && <PieChart values={itemPercentage} />}
                        {(!pieBool && barBool) && <BarChart values={itemPercentage} />}
                        <ul>
                            {itemPercentage.map(eachItem => {
                                return <li>
                                    {eachItem.x} - {eachItem.y}%
                                </li>
                            })}
                        </ul>

                    </div>
                }
            </div>

        </div>
    );
}

export default App;