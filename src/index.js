import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Markdown from './components/markdown';

class App extends Component {
  render () {
    return (
      <div>
        <Markdown />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
