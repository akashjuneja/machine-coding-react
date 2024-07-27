import "./App.css";
import React from "react";
import BarChart from "./custom bar chart/BarChart";
import { CHART_DATA,pieChart as data } from "./data";
import PieChart from "./PieChart";
import { Memo } from "./Memo";
import Country from "./country guess game microsoft/Country";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import ImageCard from "./like-button/LikeButton";
import Sidebar from "./confluence like sidebar/SideBar";
import FolderTree from "./folder tree/FolderTree";
import Pagination from "./pagination/Pagination";
import LoanCalculator from "./loan calculator/LoanCalculator";
import PasswordGenerator from "./password generator/PasswordGenerator";

function App() {
  const maxHeight = Math.max(...CHART_DATA.map((data) => data.ticketCount));
  const [open, setOpen] = React.useState(false);
  const [showPie, setShowPie] = React.useState(false);
  return (
    <div className="parent">
      <div className="left">
      <Sidebar/>
      </div>
      <div className="right">
      <button onClick={() => setOpen(!open)} className="button">
        {open ? "Hide Bar Chart" : "Show Bar Chart"}
      </button>
      <button className="button" onClick={() => setShowPie(!showPie)}>Show Pie Chart</button>
              <div className="container">

      {open && (
        <>
          <div className="chart">
            {CHART_DATA.map((data) => {
              return (
                <BarChart
                  key={data.id}
                  color={data.colour}
                  heigth={(data.ticketCount / maxHeight) * 100}
                  width={100 / CHART_DATA.length}
                  name={data.name}
                />
              );
            })}
          </div>
          <div className="xaxis">Departments</div>
          <div className="yaxis">Ticket Count</div>
          </>
      )}
      </div>

      {showPie && <PieChart data={data}/>}
      <Memo/>
      <div style={{marginTop:'5px'}}>
      <Country/>
      <TicTacToe/>
      <ImageCard/>
      <FolderTree/>
      <Pagination/>
      <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
        <LoanCalculator/>
      </div>
      <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
        <PasswordGenerator/>
      </div>
      </div>
      
      </div>
      
    </div>
  );
}

export default App;
