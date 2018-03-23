import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Markdown from './components/markdown';
import Preview from './components/preview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
    console.log(this.state.markdown);
  }

  render () {
    return (
      <div>
        <div id="markdown">
          <Markdown value={this.state.markdown} onChange={this.handleChange}/>
        </div>
        <div id="preview">
          <Preview preview={this.state.markdown}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
