import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Markdown from './components/markdown';
import Preview from './components/preview';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ markdown: event.target.value });
  }

  render () {
    var markdown = this.state.markdown;

    return (
      <div>
        <h1 id="title">Markdown Previewer</h1>
        <div>
          <p>- This is a GitHub Flavored Markdown app written in ReactJS.</p>
          <p>- Enter markdown in the textarea below and see it live</p>
        </div>
        <div id="markdown">
          <Markdown value={this.state.markdown} onChange={this.handleChange}/>
        </div>
        <div id="preview">
          <Preview preview={<ReactMarkdown source={markdown} />} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
