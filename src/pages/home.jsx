import * as React from 'react';

import Header from '../components/home/header';
import Benefits from '../components/home/benefits';

import '../css/home.css';

function Home() {
    return (
        <div className='home'>
            <Header />
            <Benefits />
        </div>
    );
}

export default Home;