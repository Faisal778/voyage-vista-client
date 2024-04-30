import React, { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";

const AllTouristSpots = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myTouristSpot")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);
  return (
    <div>
      {/* {items.map(item => (
                <div key={item._id}>
                    {item.name}
                </div>
            ))} */}
     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8 w-[90%] mx-auto ">
     {items.map((item) => (
        <div key={item._id}>
          <div className="card w-auto bg-base-100 shadow-xl">
            <figure>
              <img src={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Location: {item.location}</h2>
              <h2 className="card-title">Average Cost: {item.average_cost}</h2>
              <h2 className="card-title">Travel Time: {item.travel_time}</h2>
              <h2 className="card-title">Seasonality: {item.seasonality}</h2>

     
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default AllTouristSpots;
