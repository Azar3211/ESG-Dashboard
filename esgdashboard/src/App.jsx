import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testing from './components/testing'
import ESGLineChart from './components/lineChart'
import ESGBarChart from './components/barChart'
import ESGPieChart from './components/donutChart'
import ChatComponent from './components/promptChat'
import IndustryCodeSearch from './components/industryCodeSearch'
import ReportingComp from './components/reportingComp'


function App() {

  return (
    <>
      <div className='dashboard'> 
        <div className='container'>
        <div className='line-chart-box'> 
        <h3 className="box-title">Energy Consumption (kWh)</h3>
        <div className="chart-content">

        <ESGLineChart /> 

        </div>
        </div>

        <div className='bar-box'>
        <h3 className="box-title">Renewable Energy Usage (MWh)</h3>
        <div className="chart-content">
        <ESGBarChart /> 
        </div>
        </div>
        <div className='pie-charts'>
        <h3 className="box-title">ESG Metrics Distribution</h3>
        <div clclassNameass="chart-content">
        <ESGPieChart />
        </div>
        </div>


        <div className='searh-box'>    
          <h3 className="box-title">ESG Industry Codes</h3>
          <div className="content">
            <IndustryCodeSearch />

          </div>
        </div>

        <div className='box-report'>
          <h3 className="box-title">ESG Report</h3>
          <div className="content">

        <ReportingComp />
          </div>
        </div>
        <div className='box-chat'>
          <h3 className="box-title">AI Chat</h3>
          <div className="content">

        <ChatComponent />
          </div>
        </div>

        

        </div>
      </div>
    </>
  )
}

export default App
