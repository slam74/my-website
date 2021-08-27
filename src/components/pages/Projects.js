import React from 'react';
import Footer from '../Footer';
import Cards from '../Cards';
import '../../App.css';

function Projects() {
    return (
        <>
            <div className='projects'>
                <div className='hero-container'>
                    <h1>Projects</h1>
                </div>
            </div>
            <Cards />
            <Footer /> 
        </>
    )
}

export default Projects
