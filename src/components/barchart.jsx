import react from "react";

function BarChart(props) {
    console.log(props.values);

    const data = props.values.reduce((acc, each) =>{
       return acc + each.y;
    }, 0)
    
    const percent = data-props.values[props.values.length-1].y + "%";
    
    

    return (
        <div className="bar-area">
        <div className="bar-fill" style={{width: percent}}></div>

        </div>
    );
}

export default BarChart;