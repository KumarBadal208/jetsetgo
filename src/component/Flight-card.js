import { convertUTCtoLocalTime } from "../utils/utcToLocal";
import { Link } from "react-router-dom";

const FlightCard = ({flight, cartFlag})=>{
    const departure = convertUTCtoLocalTime(flight.departureTime);
    const arrivalTime = convertUTCtoLocalTime(flight.arrivalTime);
    return (
        <>
            <div className="flight">
                <div className="flight__detail">
                    <div className="flight__airline">
                        {flight.airline}
                    </div>
                    <div className="flight__duration">
                        {departure} ⎯⎯⎯⎯⎯⎯⎯⎯{flight.duration}⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ {arrivalTime}
                    </div>
                    <div className="flight__duration">
                        {flight.origin} ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ {flight.destination}
                    </div>
                </div>
                <div className="flight__price">
                    <div className="flight__duration">
                        ₹{flight.price}
                    </div>
                    <div>
                        <Link to={"/cart/"+ flight.id}><button className="select__button">Select</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightCard;