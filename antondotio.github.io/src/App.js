import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdf from './anton-resume-ENSF-1p.pdf'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Name">Antonio Santos</h1> <br/>
        
        <p>Hello! Welcome to anton.io!</p>
        <p>
        My name is Antonio Santos and I am a 3rd Year <br/>
        Software Engineering Student at the University of Calgary. <br/> 
        I am currently seeking a Summer 2020 Internship!
        </p><br/>

        <ButtonToolbar >
          <Button href="" variant="light" size="lg" className="btn-space">About Me</Button>
          <Button href="" variant="light" size="lg" className="btn-space">Projects</Button>
          <Button href={Pdf} variant="light" size="lg" className="btn-space">Resume</Button>
          <Button href="https://www.linkedin.com/in/antoniosantos15/" variant="light" size="lg" className="btn-space">LinkedIn</Button>
          <Button href="https://github.com/antondotio" variant="light" size="lg" className="btn-space">Github</Button>
        </ButtonToolbar>      

      </header>
    </div>
  );
}

export default App;
