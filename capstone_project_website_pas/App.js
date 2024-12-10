import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import NeedIdentification from './components/NeedIdentification';
import Challenges from './components/Challenges';
import CustomerInsights from './components/CustomerInsights';
import ExistingProductSurvey from './components/ExistingProductSurvey';
import ProjectGoals from './components/ProjectGoals';
import ProjectTimeline from './components/ProjectTimeline';
import ComponentsUsed from './components/ComponentsUsed';
import SubsystemDiagram from './components/SubsystemDiagram';
import DesignIterations from './components/DesignIterations';
import EngineeringAnalysis from './components/EngineeringAnalysis';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <NeedIdentification />
      <Challenges />
      <CustomerInsights />
      <ExistingProductSurvey />
      <ProjectGoals />
      <ProjectTimeline />
      <ComponentsUsed />
      <SubsystemDiagram />
      <DesignIterations />
      <EngineeringAnalysis />
      <ContactUs />
    </div>
  );
};

export default App;
