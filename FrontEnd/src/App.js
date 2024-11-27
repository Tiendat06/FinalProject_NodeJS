// import logo from './logo.svg';
import './App.css';
import {Header, Body, Footer} from './components';
import {useDashboardContext} from "~/context/DashboardContext";
import {Toast} from "~/components/elements";

function App() {
    const {currentLocation} = useDashboardContext();

    return (
      <>
          {!currentLocation.startsWith('/dashboard') && <Header />}
          <Body />
          {!currentLocation.startsWith('/dashboard') && <Footer />}
          <Toast />

      </>
  );
}

export default App;
