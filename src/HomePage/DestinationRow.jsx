const DestinationRow = ({destinationRows}) => {
    return (  
        <div className="destination-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Destination</th>
                        <th>Season</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                  {Array.isArray(destinationRows) ? (
                  destinationRows.map((destinationRow) => (
                    <tr key={destinationRow.Id}>
                      <td>{destinationRow.name}</td>
                      <td>{destinationRow.destination}</td>
                      <td>{destinationRow.season}</td>
                      <td>{destinationRow.reason}</td>
                    </tr>
                ))
                ) : (
                // Handle the case when destinationRows is not an array
                 <tr>
                    <td colSpan="4">Invalid data format</td>
                 </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
export default DestinationRow;