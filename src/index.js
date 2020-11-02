import React from 'react';
import ReactDOM from 'react-dom';
import App from './StreamApp/App';

import { Provider } from 'react-redux';
import store from './StreamApp/store/store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));