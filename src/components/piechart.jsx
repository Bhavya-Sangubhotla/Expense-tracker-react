import react from "react";
import { VictoryPie } from "victory";

function PieChart(props) {
    
    
    


    var over = false;

    const mydata = props.values;
    if (mydata[mydata.length - 1].y < 0) {
        over = true;
    }




    return (
        
            <div className="pie-chart">
                <VictoryPie data={mydata} colorScale={over ? "red" : "blue"} />
            </div>
           
    );

}
export default PieChart;