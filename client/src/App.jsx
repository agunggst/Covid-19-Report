import React from 'react';
import Header from './components/Header';
// import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store'

function App () {

  return (
    <Provider store={store}>
      <div className="main-page">
        <Header/>
      </div>
      {/* <Footer/> */}
    </Provider>
  )

}

export default App