import "./App.css";
import React, { Component } from "react"
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from 'react-top-loading-bar'

import {
  HashRouter as Router, Routes, Route
} from "react-router-dom";
export default class App extends Component {
  pageSize = 9;
  // apiKey = process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>
  {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}   key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress}   key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}   key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress}   key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress}   key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress}   key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress}    key="science" pageSize={this.pageSize} country="in" category="science" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
