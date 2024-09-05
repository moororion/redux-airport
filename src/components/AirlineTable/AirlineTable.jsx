//useSelector

import { useSelector } from "react-redux";

function AirlineTable(){


    //useSelector goes here
const airline = useSelector(store => store.Airline)

    return (
        <>
TABLE GOES HERE

<table>
<p>{airline}</p>
</table>
        </>
    )
}

export default AirlineTable;
