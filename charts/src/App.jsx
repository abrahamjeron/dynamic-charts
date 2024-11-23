import React from 'react';
import DynamicLineChart from './components/Linechart'; 
import Piechar from './components/pieChart'
import DynamicHistogram from './components/histogram';
import DynamicScatterPlot from './components/scatterplot';



const App = () => {
  return (
    <div className="App">
      <DynamicLineChart />
      <Piechar/>
      <DynamicHistogram/>
      <DynamicScatterPlot/>
    </div>
  );
};

export default App;
