import React from 'react';
import {Link} from 'react-router-dom';
import './home.scss';

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className="homeContent">
          <Link className="card" to="/html">
            <h2>HTML</h2>
          </Link>
          <Link className="card" to="/css">
            <h2>CSS</h2>
          </Link>
          
        </div>
      </section>
    </>
  )
}

export default Home