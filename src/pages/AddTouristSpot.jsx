import React from "react";
import UseAuth from "../hooks/UseAuth";

const AddTouristSpot = () => {

    const {user} = UseAuth() || {};

    const handleAddSpots = (e) => {
        e.preventDefault();


        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const user_email = user.email;

        const newSpot = {name, email, image, tourists_spot_name, country_name, location , short_description,  average_cost,seasonality , travel_time , totaVisitorsPerYear ,user_email };






        fetch('http://localhost:5000/addTouristSpots',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })


    }
  return (
    <div className="add-tourist-spot">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Tourist Spot</h2>
      <div className="w-[90%] mx-auto">
        <form 
        onSubmit={handleAddSpots}
        className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              User Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="User Email"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tourists_spot_name" className="block text-sm font-medium text-gray-700">
              Tourist Spot Name
            </label>
            <input
              type="text"
              name="tourists_spot_name"
              placeholder="Tourist Spot Name"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country_name" className="block text-sm font-medium text-gray-700">
              Country Name
            </label>
            <input
              type="text"
              name="country_name"
              placeholder="Country Name"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="short_description" className="block text-sm font-medium text-gray-700">
              Short Description
            </label>
            <textarea
              name="short_description"
              id="short_description"
              placeholder="Write descritpion here"
              rows="3"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="average_cost" className="block text-sm font-medium text-gray-700">
              Average Cost
            </label>
            <input
              type="number"
              name="average_cost"
              id="average_cost"
              placeholder="Average Cost"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="seasonality" className="block text-sm font-medium text-gray-700">
              Seasonality
            </label>
            <input
              type="text"
              name="seasonality"
              id="seasonality"
              placeholder="Seasonality"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="travel_time" className="block text-sm font-medium text-gray-700">
              Travel Time
            </label>
            <input
              type="text"
              name="travel_time"
              placeholder="Travel Time"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="totaVisitorsPerYear" className="block text-sm font-medium text-gray-700">
              Total Visitors Per Year
            </label>
            <input
              type="text"
              name="totaVisitorsPerYear"
              placeholder="Number of Total Visitors Per Year"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button className="btn btn-primary mt-4">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddTouristSpot;
