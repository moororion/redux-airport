import { useState } from "react";
import { useDispatch } from "react-redux";

function AirlineForm() {
const dispatch = useDispatch();
//usestate varibles

const [airline, setAirline] = useState('');


//dispatch here
//dispatch({ type: 'ADD_AIRLINE', payload: airline });

// function to work the button

const submitAirline = (event)=> {
    event.preventDefault();
    console.log('this button will add the airlines');

//dispatch goes inside here
//dispatch sends out the signal ADD_AIRLINE. with the payload/package airline
//Now any componet with a reducer (the 'listener') listing for ADD_AIRLINE
//Will recive the payload/package (in this case 'airline')
dispatch({ type: 'ADD_AIRLINE', payload: airline });

setAirline('');
}



    return(
<>

<form onSubmit={submitAirline}>
        <input placeholder='Airline Name' type="text" value={airline} onChange={(event) =>setAirline(event.target.value)}></input>
        <button type="submit">Add Airline</button>
</form>


 </>
    )
}

export default AirlineForm;
