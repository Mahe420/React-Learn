import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [id, setId] = useState('');
  const [fromEnvironment, setFromEnvironment] = useState('');
  const [toEnvironment, setToEnvironment] = useState('');
  const [table, setTable] = useState('');

  const environments = ['Dev', 'Staging', 'Production'];
  const tables = ['Table 1', 'Table 2', 'Table 3'];

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <h1>Learning </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
          />
        </div>
        <div>
          <label id="fromEnvironment">From Environment:</label>
          <select
            id="fromEnvironment"
            value={fromEnvironment}
            onChange={(e) => setFromEnvironment(e.target.value)}
          >
            <option value="">Select From Environment</option>
            {environments.map((env) => (
              <option key={env} value={env}>
                {env}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label id="toEnvironment">To Environment:</label>
          <select
            id="toEnvironment"
            value={toEnvironment}
            onChange={(e) => setToEnvironment(e.target.value)}
          >
            <option value="">Select To Environment</option>
            {environments.map((env) => (
              <option key={env} value={env}>
                {env}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label id="table">Table:</label>
          <select
            id="table"
            value={table}
            onChange={(e) => setTable(e.target.value)}
          >
            <option value="">Select Table</option>
            {tables.map((tbl) => (
              <option key={tbl} value={tbl}>
                {tbl}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}



export default App;
