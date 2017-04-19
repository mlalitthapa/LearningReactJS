import React from 'react';
import ReactDOM from 'react-dom';

// Create some html component
const App = () => {
    return <div>Hello World!</div>;
}

// Render the HTML component
ReactDOM.render(<App />, document.querySelector('.container'));
