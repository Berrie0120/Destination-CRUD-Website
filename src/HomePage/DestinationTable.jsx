const DestinationTable = ({destinationRows, onDelete}) => {
    return ( 
        <div className="destination-table-container"> 
            <table className="destination-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Destination</th>
                        <th>Season</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(destinationRows) && destinationRows.map((destinationRow) => (
                        <tr key={destinationRow.id}>
                            <td>
                                <span onClick={() => onDelete(destinationRow.id)} style={{cursor: 'pointer'}}>
                                    🗑️
                                </span>
                                {destinationRow.name}
                            </td>
                            <td>{destinationRow.destination}</td>
                            <td>{destinationRow.season}</td>
                            <td>{destinationRow.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default DestinationTable;