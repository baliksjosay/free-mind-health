import React from 'react';
// import Route from 'react-dom'
// import {Headersection} from './components';
import './assets/App.css';
import './assets/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headersection from './components/Headersection';
import FooterSection from './components/Footer';
import AboutPage from './components/AboutUs';
// import HeaderPage from './components/header';



// const about = React.lazy(() => import('pages/about'));
// <Route exact path="/requests/new/" component={NewListing} />  */}
 
function App() {
  return (
    <div className="Homepage">      
        <Headersection />
        <AboutPage /> 
        <FooterSection /> 
    </div>

   );
}

export default App;
