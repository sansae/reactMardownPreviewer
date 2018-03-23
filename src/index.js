import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Markdown from './components/markdown';
import Preview from './components/preview';

class App extends Component {

  render () {
    return (
      <div>
        <div class="components">
          <Markdown />
        </div>
        <div class="components">
          <Preview />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
