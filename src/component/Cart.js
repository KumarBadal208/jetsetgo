import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FlightCard from "./Flight-card";

const Cart = ()=>{
    const {id} = useParams();
    let [flight,setFlight] = useState({});
    let flightsData = useSelector(store=> store.flight.flights); 

    useEffect(()=>{
        // eslint-disable-next-line
        let obj = flightsData.filter(res => res.id==id)[0];
        setFlight(obj);
        // eslint-disable-next-line
    },[flightsData]);

    return (
        <div>
            {flight && <FlightCard flight={flight} cartFlag={true} />}
        </div>
    )
};

export default Cart;