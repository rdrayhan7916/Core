import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Commponents/About/About';
import Blogs from './Commponents/Blogs/Blogs';
import Footer from './Commponents/Footer/Footer';
import Header from './Commponents/Header/Header';
import Home from './Commponents/Home/Home';
import NotFound from './Commponents/NotFound/NotFound';
import Service from './Service/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/service">
            <Service></Service>
          </Route>
          <Route exact path="/blog">
            <Blogs></Blogs>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
