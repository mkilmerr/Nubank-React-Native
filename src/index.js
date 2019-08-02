import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

const App = () =>{
    return(
        <>
            <StatusBar backgroundColor="#8B10AE"
            barStyle="light-content"/>
            <Routes/>
        </>
    )
}

export default App