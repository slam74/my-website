import React from 'react';
import Footer from '../Footer';
import '../../App.css';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <>
                <div className='contact'>
                    <div className='hero-container'>
                        <h1>Contact Me</h1>
                        <p>I am currently looking for employment. If you are aware of any developer opportunities, please let me know! 
                            Or message me if you just want to chat. You can email me at <a href="mailto:simon.lam06@gmail.com">simon.lam06@gmail.com</a>, 
                            or send me a quick message by filling out the form below and click the SUBMIT button. I will get back to you as soon as possible.</p>
                        <hr></hr>
                        <form id="contact-form" action="https://formspree.io/f/mrgrevyo" method="POST">
                            <input name="name" placeholder="Name" type="text" className="form-control" required/>
                            <input name="email" placeholder="Enter Email" type="email" className="form-control" required/>
                            <textarea name="message" placeholder="Your Message" className="form-control" rows="10" required></textarea>
                            <button type="submit" className="btn btn-secondary btn-lg">SUBMIT</button>
                        </form>
                    </div>
                </div>
            <Footer />
            </>
        );
    }
}

export default Contact