import React from "react"
import { HashRouter, Route } from "react-router-dom"

// component
import Header from "./components/Header";
import Footer from "./components/Footer";
import Delivery from "./components/Delivery";
import EnterForm from './components/EnterForm';

// routes
import Home from "./routes/Home";


class App extends React.Component {
  state = {
    "showHeader" : true,
    "showFooter" : true,
  }
  componentDidMount() {
    if(window.location.hash==="#/search"){
      this.setState({
        "showHeader" : false, 
        "showFooter" : false
      })
    }
  }
  render() {
    const { showHeader, showFooter } = this.state;
    return (
      <div>
        <HashRouter>
        { showHeader ? <Header /> : null}
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/search" component={Delivery}></Route>
          <Route path="/search_result" component={EnterForm}></Route>
        { showFooter ? <Footer /> : null}
        </HashRouter>
      </div>)
  }
}

export default App;
