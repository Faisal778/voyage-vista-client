import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import Swal from 'sweetalert2';

const MyList = () => {
    const {user} = UseAuth() || {};
    const [items, setItem] = useState([]);
    useEffect (() =>{

        fetch(`http://localhost:5000/myTouristSpot/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setItem(data);
        })
    }, [user])


    const handleDelete = _id => {
console.log(_id)
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

    fetch(`http://localhost:5000/myTouristSpot/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.deletedCount > 0){
            Swal.fire({
                title: "Deleted!",
                text: "Your Tourist spot has been deleted.",
                icon: "success"
        
              });
        }
    })
    }
  });
    }
    return (
        <div>
            <div className="overflow-x-auto w-[90%] mx-auto mt-8">
  <table className="table table-xs">
    <thead>
      <tr>
       
        <th>Location</th> 
        <th>Country Name</th> 
        <th>Seasonality</th>
        <th>Cost</th> 
        <th>Update</th> 
        <th>Delete</th> 
      </tr>
    </thead> 
           {
            items.map(item => (
                <tbody key= {item._id}>
                <tr>
                 
                  <td>{item.location}</td> 
                  <td>{item.country_name}</td>
                  <td>{item.seasonality}</td>
                  <td>{item.cost}</td> 
                  <td><button className='btn btn-secondary'>Update</button></td> 
                  <td><button 
                  onClick={()=> handleDelete(item._id)}
                  className='btn btn-warning'>Delete</button></td>
                </tr>
                </tbody>
               ))
           }
             </table>
        </div>
        </div>
      
    );

    
   
};

export default MyList;