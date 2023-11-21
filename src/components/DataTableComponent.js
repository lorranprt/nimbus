// DataTableComponent.js
import React from 'react';
import { CSVLink } from 'react-csv';

const DataTableComponent = ({ data, headers }) => (
  <div>
    <h2>Data Table</h2>
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.label}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {headers.map((header) => (
              <td key={header.label}>{row[header.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <CSVLink data={data} headers={headers}>
      Export to CSV
    </CSVLink>
  </div>
);

export default DataTableComponent;
