import { convertUTCtoLocalTime } from "../utils/utcToLocal";

const FlightCard = ({flight})=>{
    console.log("chuld",flight);
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
                        {departure} ---- {arrivalTime}
                    </div>
                    <div>
                        {flight.origin} ---- {flight.destination}
                    </div>
                </div>
                <div className="flight__price">
                    <div>
                        ₹{flight.price}
                    </div>
                    <div>
                        <button>Select</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightCard;