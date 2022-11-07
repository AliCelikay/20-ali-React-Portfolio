import React from 'react';
import PortfolioComponent from './components/PortfolioComponent';

// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
    return <PortfolioComponent />;
}

export default App;
