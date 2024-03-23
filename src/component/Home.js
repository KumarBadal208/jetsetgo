import { useState } from "react";
import { useRef } from "react";
import { FLIGHT_API } from "../constants/apiEndpoint";
import { convertUTCtoLocalDate } from "../utils/utcToLocal";
import {useDispatch } from "react-redux";
import { addDetail } from "../store/flightSlice";
import Flight from "./Flight";
import getCurrentDate from "../utils/getCurrentDate";

const Home = ()=>{
    let date = getCurrentDate();
    let [flights, setFlights] = useState([]);
    let flightData;
    let source = useRef(null);
    let destination = useRef(null);
    let dateTime = useRef(null);
    const dispatch = useDispatch();
    const fetchFlightData = async ()=>{
        const data = await fetch(FLIGHT_API);
        const json = await data.json();
        flightData = json;
        let filteredFlight = flightData.filter(res=>{
            let dateval = convertUTCtoLocalDate(res.departureTime);
            if(res.origin.toLowerCase() === source.current.value.toLowerCase() && 
                res.destination.toLowerCase() === destination.current.value.toLowerCase() &&
                dateval===dateTime.current.value ){
                return true;
            }
            else{
                return false;
            }
        });
        dispatch(addDetail(filteredFlight));
        setFlights(filteredFlight);
    }

    const submitForm = ()=>{
        fetchFlightData();
    }

    return (
        <div className="homepage">
            <div className="homepage__body">
                <div className="homepage__text">Millions of cheap prices. One simple search.</div>
                <div className="homepage__body__form">
                    <form onSubmit={(e)=> {e.preventDefault()}}>
                        <div className="form">
                            <div className="form-item">
                                <input ref={source} placeholder="From"/>
                                <label>From</label>
                            </div>
                            <div className="form-item">
                                <input ref={destination} placeholder="To"/>
                                <label>To</label>
                            </div>
                            <div className="form-item">
                                <input ref={dateTime} type="date" defaultValue={date} placeholder="Departure"/>
                                <label>Departure</label>
                            </div>
                            <div className="form-item">
                                <input type="number" placeholder="Traveller"/>
                                <label>Traveller</label>
                            </div>
                            <button className="search-button" onClick={submitForm}>Search</button>
                        </div>
                    </form>
                </div>
                {
                    flights.length>0 && <Flight/>
                }
            </div>
            <div className="homepage__footer">

            </div>
        </div>       
    )
};

export default Home;