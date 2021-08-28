import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer">
                <h2>Thanks for Visiting!</h2>
                <div className='links'>
                    <a href="mailto:simon.lam06@gmail.com"><i class="fas fa-envelope"></i></a>
                    <a href="https://www.linkedin.com/in/simon-lam247/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/slam74" target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i></a>
                </div>
                <h2>Simon Lam © 2021</h2>
            </section>
        </div>
    )
}

export default Footer
