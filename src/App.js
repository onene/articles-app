import React, { Component } from 'react';
import Input from './components/Input/Input';
import NoteGrid from './components/NoteGrid/NoteGrid';
import './App.css';
import { ARTICLES } from './config'
class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: ARTICLES,
      newArticle: []
    }
    
  }
  handleArticle(e) {
      this.setState({newArticle: {text: e.target.value}})

  }
    
  addArticle (){
  var newArticle = this.state.articles.slice();
  newArticle.unshift(this.state.newArticle);
  this.setState({articles: newArticle});

  }
  render() {
    return (
      <div className="App">
        <Input onChange={this.handleArticle.bind(this)} onClick={this.addArticle.bind(this)}/>
        <NoteGrid articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
