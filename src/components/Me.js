import React from 'react'
import './Me.css';

function Me() {
    return (
        <div className="me">
            <h1>Hello World!</h1>
            <p>I completed my diploma in computer programming at Seneca College in April 2021.</p>
            <p>Here are my skill sets and tools I've used:</p>
            <table class="table">
                <tr>
                    <th class="table-dark">Programming Languages</th>
                    <td>C, C++, Java, Python, Swift</td>
                </tr>
                <tr>
                    <th class="table-dark">Web Development</th>
                    <td>JavaScript, React, Angular, HTML5, CSS3, Bootstrap</td>
                </tr>
                <tr>
                    <th class="table-dark">Database Management</th>
                    <td>Oracle SQL, PL/SQL, MongoDB NoSQL</td>
                </tr>
                <tr>
                    <th class="table-dark">Tools</th>
                    <td>MS Visual Studio, Visual Studio Code, Eclipse, XCode, Linux, Git, UML</td>
                </tr>
            </table>
        </div>
    )
}

export default Me
