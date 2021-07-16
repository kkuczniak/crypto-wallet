import VerticalTabs from './navigation/tabs';
// import Home from './screens/Home';
// import Market from './screens/Market';
// import Portfolio from './screens/Portfolio';
// import Profile from './screens/Profile';
// import Navbar from './navigation/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <VerticalTabs />
        {/* <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/tabs'>
            <VerticalTabs />
          </Route>
        </Switch> */}
      </BrowserRouter>
    </>
  );
}

export default App;
