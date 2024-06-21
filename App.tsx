import React, { useEffect } from 'react';
import { Provider } from "react-redux";

import Navigation from 'navigation';
import store from "store";

const App = () => {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
