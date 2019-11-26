import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
// import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Skills resumeData={resumeData} />
        <ContactMe resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;

// <Testimonials resumeData={resumeData}/>
// <Portfolio resumeData={resumeData}/>
