import react from "react";

function Item(props) {

    const now = new Date(props.today);
    
    const month = now.toLocaleString("en-us", {month:"long"});

    const year = now.getFullYear();

    const day = now.getDate();
    

    return (
        <div className="new-item">
            <div className="date-block">
                <p>{month}</p>
                <small>{year}</small>
                <h3>{day}</h3>
            </div>
            <h1>{props.title}</h1>
            <div className="Amount">
                <h3>{props.Amount} Rs</h3>
            </div>
        </div>
    );

}
export default Item;