import React from 'react';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var markdown = this.props.markdown;

    return (
      <div>
        <div>
          <h1>Markdown</h1>
          <textarea rows='20' cols='40' onChange={this.props.onChange}>
          </textarea>
        </div>
      </div>
    )
  }
}

export default Markdown;
