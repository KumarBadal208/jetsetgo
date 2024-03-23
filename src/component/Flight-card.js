import { convertUTCtoLocalTime } from "../utils/utcToLocal";
import { Link } from "react-router-dom";

const FlightCard = ({flight, cartFlag})=>{
    const departure = convertUTCtoLocalTime(flight.departureTime);
    const arrivalTime = convertUTCtoLocalTime(flight.arrivalTime);
    return (
        <>
            <div className="flight">
                <div className="flight__detail">
                    <div>
                        {flight.airline}
                    </div>
                    <div>
                        {departure} ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ {arrivalTime}
                    </div>
                    <div>
                        {flight.origin} ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ {flight.destination}
                    </div>
                </div>
                <div className="flight__price">
                    <div>
                        ₹{flight.price}
                    </div>
                    <div>
                        <Link to={"/cart/"+ flight.id}><button>Select</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightCard;