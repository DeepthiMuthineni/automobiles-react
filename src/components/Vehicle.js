import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  function fetchVehicles() {
    axios.get('http://localhost:5000/vehicles')
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        console.log('There was an error fetching the vehicles data!', error);
      });
  }

  useEffect(() => {
    fetchVehicles();
  }, []);

  function handleDelete(id) {
    axios.delete(`http://localhost:5000/vehicles/${id}`)
      .then(() => {
        fetchVehicles(); // Fetch vehicles after deleting one
      })
      .catch(error => {
        console.log('There was an error deleting the vehicle data!', error);
      });
  }

  return (
    <div className="h-100 p-5 text-bg-secondary">
      <div className="container mt-4">
        <h2 className="text-center mb-4">Vehicle List</h2>
        <div className="row">
          {vehicles.map(vehicle => (
            <div className="col-md-4" key={vehicle.id} style={{ marginTop: '2%' }}>
              <div className="card vehicle-list-container">
                <img src={vehicle.image} className="card-img-top" height={200} alt={vehicle.name} />
                <div className="card-body">
                  <ul className="list-group" style={{ listStyleType: 'none' }}>
                    <li className="car-text" style={{ textAlign: 'center' }}><h5 className="card-title">{vehicle.name}</h5></li>
                    <li className="car-text">Price: ${vehicle.price}</li>
                    <li className="car-text">Mileage: {vehicle.mileage} km</li>
                    <li className="car-text">Seats: {vehicle.seats}</li>
                    <li className="car-text">Color: {vehicle.color}</li>
                    <li className="car-text">Fuel: {vehicle.fuel}</li>
                    <li className="car-text">Gear: {vehicle.gear}</li>
                    <li className="car-text">Description: {vehicle.description}</li>
                  </ul>
                  <div className="d-flex justify-content mt-3">
                    <button type="button" className="btn btn-danger me-2" onClick={() => handleDelete(vehicle.id)}>Delete</button>
                    <button type="button" className="btn btn-dark" onClick={() => navigate(`/update-vehicle/${vehicle.id}`)}>Update</button>
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
