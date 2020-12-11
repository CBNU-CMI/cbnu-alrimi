import React from 'react';
import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import '../styles/index';
import { ThemeProvider } from '../context/theme';

const Test = ({ Component }) => {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
};

const configureStore = (initialState, options) => {
  const middlewares = []; // 미들웨어들을 넣으면 된다.
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, initialState, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development,',
});

export default wrapper.withRedux(Test);
