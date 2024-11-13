// import logo from './logo.svg';
import './App.css';
import {Header, Body, Footer, DashboardHeader, DashboardFooter} from './components';
import {useDashboardContext} from "~/context/DashboardContext";

function App() {
    const {currentLocation} = useDashboardContext();

    return (
      <>
          {!currentLocation.startsWith('/dashboard') && <Header />}
          <Body />
          {!currentLocation.startsWith('/dashboard') && <Footer />}
      </>
  );
}

export default App;
