import React from 'react';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var preview = this.props.preview;

    return (
      <div>
        <h1>Markdown Preview</h1>
        <div>{preview}</div>
      </div>
    )
  }
}

export default Preview;
