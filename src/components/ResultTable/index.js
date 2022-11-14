import Table from 'react-bootstrap/Table';
import './resultTable.scss'

const ResultTable = ({ tableData }) => {
  return (
    <div className='table-wrapper'>  
    { tableData.data.length > 0 ? 
      <Table striped bordered hover>
        <thead> 
          <tr>
            {tableData.displayOrder.map(col => <th key={'thead-'+col}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((obj, index) => {
            return (
              <tr key={index}>
                {tableData.displayOrder.map(key => <td key={`${index}-${key}`}>{obj[key]}</td>)}
              </tr>)
            })}
        </tbody>
    </Table>
    : <div className="no-data-found"><div>No data Found</div></div>}
    </div>
  );
};

ResultTable.defaultProps = {
  tableData: {
    data: [],
    displayOrder: []
  }
};

export default ResultTable;