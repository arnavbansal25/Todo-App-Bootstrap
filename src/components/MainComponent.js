import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    render() {
        return(
            <div>
                main abc
                <Header />

                <Home />

                <Footer />
                
            </div>
        );
    }
}

export default Main;