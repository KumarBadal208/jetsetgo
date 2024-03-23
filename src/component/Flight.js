import { useSelector } from "react-redux"
import FlightCard from "./Flight-card";
import { useEffect, useRef, useState } from "react";

const Flight = ()=>{
    let filterInputRef = useRef(null);
    let flightsData = useSelector(store=> store.flight.flights);
    let [flights,setFlights] = useState(flightsData);

    useEffect(()=>{
        setFlights(flightsData);
    },[flightsData])

    const filterAirline = ()=>{
        let arr = flightsData.filter(res => res.airline.toLowerCase().includes(filterInputRef.current.value.toLowerCase()));
        setFlights(arr);
    }

    const sortByPrice = ()=>{
        let arr = [...flights];
        arr.sort((a,b)=>{
            if(a.price>b.price){
                return 1;
            }
            else if(a.price<b.price){
                return -1;
            }
            else{
                return 0;
            }
        });

        setFlights(arr);
    }

    return (
        <div>
            <div className="homepage__body__flights">
                <input ref={filterInputRef} onChange={filterAirline} className="form-field" placeholder="Search Airline"/>
                <button onClick={sortByPrice} className="flight__search_button">Sort By Price</button>
                {
                    flights.map((res)=> <FlightCard key={res.id} flight={res} cartFlag={false} />)
                }
            </div>
        </div>        
    )
};

export default Flight;