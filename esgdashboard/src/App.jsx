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
        <h3 class="box-title">Energy Consumption (kWh)</h3>
        <div class="chart-content">

        <ESGLineChart /> 

        </div>
        </div>

        <div className='bar-box'>
        <h3 class="box-title">Renewable Energy Usage (MWh)</h3>
        <div class="chart-content">
        <ESGBarChart /> 
        </div>
        </div>
        <div className='pie-charts'>
        <h3 class="box-title">ESG Metrics Distribution</h3>
        <div class="chart-content">
        <ESGPieChart />
        </div>
        </div>


        <div className='searh-box'>    
          <h3 class="box-title">ESG Industry Codes</h3>
          <div class="content">
            <IndustryCodeSearch />

          </div>
        </div>

        <div className='box-report'>
          <h3 class="box-title">ESG Report</h3>
          <div class="content">

        <ReportingComp />
          </div>
        </div>
        <div className='box-chat'>
          <h3 class="box-title">Ai Chat</h3>
          <div class="content">

        <ChatComponent />
          </div>
        </div>

        

        </div>
      </div>
    </>
  )
}

export default App
