import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// 리덕스 추가
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './store';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        composeWithDevTools()
    )
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
