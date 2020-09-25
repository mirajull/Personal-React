import React from 'react';
import logo from './logo.svg';
import mirajul from './Mirajul.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Md. Mirajul Islam</h1>
      <img src={mirajul} className="Pro-pic"/>
      <p>
      Welcome! I am a Lecturer of Computer Science and Engineering department at United International University.  
      My research interest includes Machine Learning, Data Mining, Information Retrieval, Natural Language 
      Processing,  Cloud Computing, Human Computer Interaction and their approach towards solving various 
      problems. I am curious to develop systems that can interact with humans to solve daily life complications. 
      I obtained my B.Sc.  in  Computer Science and Engineering from Bangladesh University of Engineering and 
      Technology (BUET) in April, 2019.  In my B.Sc. , I worked on brainwave analysis of people and its impact 
      on their traits and behavioral practices. I have a great passion for teaching and research. 
      I love talking in front of people. The more I talk and discuss, the more I found myself interacted, 
      which in turn impels me to continue knowing and sharing more. To learn more, see my resume, official 
      website, or contact me with any questions.
      </p>
    </div>
  );
}

export default App;
