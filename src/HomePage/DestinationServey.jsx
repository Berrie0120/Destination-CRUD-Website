import React, { useState } from "react";
import axios from 'axios';

function DestinationServey({onAdd}){

    const [name, setName] = useState('');
    const [destination, setDestination] = useState('');
    const [icon, setIcon] = useState('');
    const [season, setSeason] = useState('');
    const [reason, setReason] = useState('');
    const [error, setError] = useState('');

    const handleAdd = () => {
        if (!name || !destination || !season || !reason) {
            setError('Please fill in all fields.');
            return;
        }

        axios.post('https://jovial-stardust-f73854.netlify.app/destinationRow', {
            name: name,
            destination: destination,
            season: season,
            reason: reason,
        })
        .then(response => {
            console.log(response.data);
            onAdd(); // Call the onAdd function to refresh the page
            // Reset form fields
            setName('');
            setDestination('');
            setSeason('');
            setReason('');
            setError('');
        })
        .catch(error => console.error(error));
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };
    const handleSeasonChange = (event) => {
        setSeason(event.target.value);
    };
    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    return(
        <>
           <div className="destination-servey-container">
                <label htmlFor="name">What is your name:</label>
                <input type="text" id="name" name="name" value={name} onChange={handleNameChange} /><br />
                <p>Where is your favorite holiday destination?:</p>
                <select value={destination} onChange={handleDestinationChange}>
                    <option value="">Select Destination</option>
                    <option value="Beach">Beach</option>
                    <option value="Mountains">Mountains</option>
                    <option value="Country SIde">Country Side</option>
                    <option value="River/Dam">River/Dam</option>
                </select>

                <p>What season is the best for your vacation?:</p>
                <select value={season} onChange={handleSeasonChange}>
                    <option value="">Select Season</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
                <p>Why would you like to go to the holiday destination?:</p>
                <select value={reason} onChange={handleReasonChange}>
                    <option value="">Select Reason</option>
                    <option value="Relaxing">Relaxing</option>
                    <option value="Fishing">Fishing</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Hiking">Hiking</option>
                </select>
                <button onClick={handleAdd}>Add</button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
        </>
    );
}

export default DestinationServey
