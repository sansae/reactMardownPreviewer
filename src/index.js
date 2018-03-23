import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Markdown from './components/markdown';
import Preview from './components/preview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: 'testing markdown state' };
  }



  render () {
    return (
      <div>
        <div id="markdown">
          <Markdown markdown={this.state.markdown} />
        </div>
        <div id="preview">
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
