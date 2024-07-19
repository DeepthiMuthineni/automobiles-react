import React, { useEffect, useState } from "react";
import axios from 'axios';

function VehicleList() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/vehicles')
            .then(response => {
                setVehicles(response.data);
            })
            .catch(error => {
                console.log('There was an error fetching the vehicles data!', error);
            });
    }, []);

    return (
        <div  class="h-100 p-5 text-bg-secondary">
        <div className="container mt-4" >
            <h2 className="text-center mb-4">Vehicle List</h2>
            <div className="row">
                {vehicles.map(vehicle => (
                    <div className="col-md-4" key={vehicle.id} style={{marginTop:'2%'}}>
                        <div className="styles">
                        <div className="card vehicle-list-container" >
                            <img src={vehicle.image} className="card-img-top" height={200} alt={vehicle.name} />
                            <div className="card-body">
                                <ul className="list-group" height="60" style={{ listStyleType: 'none'}}>
                                    <li className="car-text" style={{textAlign:'center'}}><h5 className="card-title">{vehicle.name}</h5></li>
                                    <li className="car-text" >Price: ${vehicle.price}</li>
                                    <li className="car-text" >Mileage: {vehicle.mileage} km</li>
                                    <li className="car-text" >Seats: {vehicle.seats}</li>
                                    <li className="car-text" >Color: {vehicle.color}</li>
                                    <li className="car-text" >Fuel: {vehicle.fuel}</li>
                                    <li className="car-text" >Gear: {vehicle.gear}</li>
                                    <li className="car-text" >Description: {vehicle.description}</li>
                                </ul>
                                <button type="button" class="btn btn-dark">Book Now</button>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default VehicleList;
