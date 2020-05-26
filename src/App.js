import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Index from './components/Index';



class App extends React.Component {
    state = {  }
    render() { 
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={Index} exact />
                    <Route path="/contact" component={Contact} exact />
                </Switch>
                <Footer />
            </Router>
        );
    }
}
 
export default App;
