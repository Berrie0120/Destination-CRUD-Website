import { useState, useEffect } from "react";
import DestinationServey from "./DestinationServey";
import DestinationTable from "./DestinationTable";

function Destination(){

    const [destinationRows, setDestinationRows] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/destinationRow')
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch destination data');
            }
            return res.json();
        })
        .then(data => {
            setDestinationRows(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
            setIsPending(false);
        });
    },[]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/destinationRow/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not delete destination');
            }
            setDestinationRows(prevRows => prevRows.filter(row => row.id !== id));
        })
        .catch(err => {
            setError(err.message);
        });
    }; 

    const handleAdd = () => {
        // Fetch data after adding a new entry
        fetch('http://localhost:5000/destinationRow')
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch destination data');
            }
            return res.json();
        })
        .then(data => {
            setDestinationRows(data);
        })
        .catch(err => {
            setError(err.message);
        });
    };

    return (
        <div className="destination">
            {error && <div>{error}</div>}
            {isPending && <div>Loading destination data...</div>}
            {Array.isArray(destinationRows) && (
                <DestinationTable
                    destinationRows={destinationRows}
                    onDelete={handleDelete}
                />
            )}
            <div className="destination-servey">
                <DestinationServey onAdd={handleAdd} />
            </div>
        </div>
    );
}

export default Destination;