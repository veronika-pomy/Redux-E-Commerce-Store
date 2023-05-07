import React from "react";
import { Provider } from 'react-redux';
import store from './store';

export default function StoreProvider (props) {
  // Return provider component from react-redux
  return <Provider store={store} {...props} />;
}