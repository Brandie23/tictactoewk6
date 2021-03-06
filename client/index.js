import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

store.subscribe(() => {
  console.log("Store is now ", store.getState());
});

// import reducers from './reducers'
import Game from "./components/Game";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(
//   applyMiddleware(thunkMiddleware)
// ))

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById("game")
  );
});

// document.addEventListener('DOMContentLoaded', () => {
//     render(
//       <Provider store={store}>
//         <App />
//       </Provider>,
//       document.getElementById('app')
//     )
//   })
