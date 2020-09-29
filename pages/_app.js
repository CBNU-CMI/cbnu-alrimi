import React from 'react'
import withRedux from 'next-redux-wrapper'
import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'

const Test = ({ Component, store }) => {
  return (
    <>
      <Component />
    </>
  )
}

const configureStore = (initialState, options) => {
  const middlewares = [] // 미들웨어들을 넣으면 된다.
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(reducer, initialState, enhancer)
  return store
}

export default withRedux(configureStore)(Test)
