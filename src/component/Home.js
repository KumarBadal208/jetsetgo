import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FLIGHT_API } from "../constants/apiEndpoint";
import { convertUTCtoLocalDate } from "../utils/utcToLocal";
import FlightCard from "./Flight-card";

const Home = ()=>{
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0,10);
    let [flights, setFlights] = useState([]);
    let flightData;
    let source = useRef(null);
    let destination = useRef(null);
    let dateTime = useRef(null);

    const fetchFlightData = async ()=>{
        const data = await fetch(FLIGHT_API);
        const json = await data.json();
        flightData = json;
        console.log("flight",flightData);
        let filteredFlight = flightData.filter(res=>{
            let dateval = convertUTCtoLocalDate(res.departureTime);
            if(res.origin.toLowerCase() === source.current.value.toLowerCase() && 
                res.destination.toLowerCase() === destination.current.value.toLowerCase() &&
                dateval===dateTime.current.value){
                return true;
            }
            else{
                return false;
            }

            // res.origin.toLowerCase() === source.current.value.toLowerCase() && 
            //     res.destination.toLowerCase() === destination.current.value.toLowerCase() &&
            //     dateval===dateTime.current.value

        });
        console.log("filtered->",filteredFlight); 
        setFlights(filteredFlight);
    }

    const submitForm = ()=>{
        fetchFlightData();
    }

    return (
        <div className="homepage">
            <div className="homepage__header">
                <div className="homepage__header__logo">✈︎ ✈️ JetSetGo</div>
                <div className="homepage__header__items">
                    <div className="homepage__header__item"><Link to="/about">About Us</Link></div>
                    <div className="homepage__header__item">Contact Us</div>
                </div>
            </div>
            <div className="homepage__body">
                <div>
                    <div>Millions of cheap prices. One simple search.</div>
                    <div className="homepage__body__form">
                        <form onSubmit={(e)=> {e.preventDefault()}}>
                            <input ref={source} className="form-field" placeholder="From"/><span>🔁</span>
                            <input ref={destination} className="form-field" placeholder="To"/>
                            <input ref={dateTime} type="date" defaultValue={date} className="form-field" placeholder="Depart"/>
                            <button className="search-button" onClick={submitForm}>Search</button>
                        </form>
                    </div>

                    <div className="homepage__body__flights">
                        {
                            flights.map((res)=> <FlightCard key={res.id} flight={res}/>)
                        }
                    </div>
                </div>
            </div>
            <div className="homepage__footer">

            </div>
        </div>
    )
};

export default Home;