import { useState } from 'react';
import './App.css';

import convictions from './conviction-type.json';
import { getProductsByCategory } from './conviction-children/index.js';
// import sp from  './conviction-children/sp.json';
// import cu from './conviction-children/cu.json';
// import ts from './conviction-children/ts.json';



// import convictionsChild from './convictions-child.json';

const App = () => {
  const [selectedConvictionType, setSelectedConvictionType] = useState('');
  const [selectedConvictionChild, setSelectedConvictionChild] = useState('');


  // const getProductsByCategory = () => {
  //   switch (selectedConvictionType) {
  //     case 'SP':
  //       return sp;
  //     case 'CU':
  //       return cu;
  //     case 'TS':
  //       return ts;
  //     default:
  //       return Promise.resolve([]);
  //   }
  // };
  
  const categoryProducts = getProductsByCategory(selectedConvictionType);
  
  return (
    <main>
      <select
        value={selectedConvictionType}
        onChange={(e) => setSelectedConvictionType(e.target.value)}
      >
        <option value="Select a conviction type">Select a conviction type</option>
        {convictions.map((conviction) => (
          <option key={conviction.id} value={conviction.id}>
            {conviction.name}
          </option>
        ))}
      </select>

      <select
        value={selectedConvictionChild}
        onChange={(e) => setSelectedConvictionChild(e.target.value)}
      >
        <option value="Select conviction offence">Select conviction offence</option>
        {selectedConvictionType && categoryProducts.length > 0 &&
          categoryProducts.map((convictionChild) => (
              <option key={convictionChild.id} value={convictionChild.id}>
                {convictionChild.name}
              </option>
            ))}
      </select>
    </main>
  );


};

export default App;
