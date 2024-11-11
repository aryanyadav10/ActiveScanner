import Home from './components/Home';
import Navbar from './components/Navbar';
import CustomerSection from './components/CustomerSection';
import WhatWeDo from './components/WhatWeDo';
import ReportsSection from './components/ReportsSection';
import PowerSection from './components/PowerSection';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <CustomerSection/>
      <WhatWeDo/>
      <ReportsSection/>
      <PowerSection/>
      <Footer/>
    </div>
  );
}

export default App;
