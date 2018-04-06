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
          <textarea rows='20' cols='40' onChange={this.props.onChange}>
          </textarea>
        </div>
      </div>
    )
  }
}

export default Markdown;
