import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Markdown from './components/markdown';
import Preview from './components/preview';

class App extends Component {

  render () {
    // const divStyle = {
    //   border: '5px solid red'
    // };

    return (
      <div id="markdown">
        <div id="markdown">
          <Markdown />
        </div>
        <div id="markdown">
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
