// import logo from './logo.svg';
import './App.css';
import {Header, Body, Footer, BottomNavigation} from './components';
import {useDashboardContext} from "~/context/DashboardContext";
import {Toast} from "~/components/elements";
import {PayPalScriptProvider} from '@paypal/react-paypal-js'

function App() {
    const {currentLocation} = useDashboardContext();
    const client_id = process.env.REACT_APP_CLIENT_ID;

    const initialPaypalOptions = {
        "client-id": client_id,
        currency: "USD",
        intent: "capture",
        components: 'buttons'
    };

    return (
      <>
          <PayPalScriptProvider options={{"client-id": client_id}}>
              {!currentLocation.startsWith('/dashboard') && <Header />}
              <Body />
              {!currentLocation.startsWith('/dashboard') && <Footer />}
              {/*{!currentLocation.startsWith('/dashboard') && }*/}
              <Toast />
          </PayPalScriptProvider>
      </>
  );
}

export default App;
