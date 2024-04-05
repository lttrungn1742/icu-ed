import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Registration from "./tool/mode1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <Registration />
    </div>
  </React.StrictMode>
);


