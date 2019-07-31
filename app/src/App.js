import React from 'react';
import './App.css';
import DateFilter from "./components/DateFilter/DateFilter";
import AgentFilter from "./components/AgentFilter/AgentFilter";
import Row from "./components/Row/Row";
import Pagination from "./components/Pagination/Pagination";
import DataContainer from "./components/Data/DataContainer";

const App = props => {
    return (
        <div className="app-wrapper">
            <div className="app">
                <div className="filterField"><DateFilter/></div>
                <div className="filterField"><AgentFilter/></div>

                <table>
                    <thead>
                    <tr>
                        <td>Day</td>
                        <td>Impression</td>
                        <td>Conversions</td>
                        <td>Money</td>
                    </tr>
                    </thead>

                    <tbody>
                        <DataContainer/>
                    </tbody>
                </table>

                <Pagination/>
            </div>
        </div>
    )
};

export default App;
