import React from 'react';

import About from '../../components/About';
import Home from '../../components/Home';
import Portfolio from '../../components/Portfolio';
import Profile from '../../components/Profile';
import SocialMedia from '../../components/SocialMedia';
import Work from '../../components/Work';


class Index extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <Home />
                <Work />
                <Portfolio />
                <Profile />
                <About />
                <SocialMedia />
            </div>
        );
    }
}
 
export default Index;
