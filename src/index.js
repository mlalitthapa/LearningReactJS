import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBicImyrAtIqvUBS0rZZYZ1Je4aP_Aq9tw';

// Create some html component
const App = () => {
    return <div>Hello World!</div>;
}

// Render the HTML component
ReactDOM.render(<App />, document.querySelector('.container'));
