import react , { useRef, useState } from "react";

function InputBox(props){

    const[inputValue, setInputValue] = useState("");

    const inputRef = useRef();

    function handleChange(event){
        const {name,value} = event.target;
        
            setInputValue(value);
        props.addItem(name, value);
        
    }
    
  

    
    
    
    


    return(
    <div className="input-container" style={props.displayHeader ? {display : "none"}: null}>
    <label>{props.inputName}</label><br/>
    <input type={props.inputType} name={props.inputName} value={props.name} size="30"  onChange={handleChange} autoComplete="off"/> 
    </div>
    );
}

export default InputBox;
