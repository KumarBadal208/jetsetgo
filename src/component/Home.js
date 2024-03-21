// import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0,10);

    let source = useRef(null);
    let destination = useRef(null);
    let dateTime = useRef(null);

    // useEffect(()=>{

    // });

    const submitForm = ()=>{
        console.log(source.current.value);
        console.log(destination.current.value);
        console.log(dateTime.current.value);
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
                </div>
            </div>
            <div className="homepage__footer">

            </div>
        </div>
    )
};

export default Home;