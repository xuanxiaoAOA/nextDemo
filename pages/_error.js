import React from 'react'
import Error from 'next/error'

export default class Page extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {
        statusCode,
        err
    };
}

  render() {
    if (this.props.statusCode) {
      return <Error statusCode={this.props.statusCode} />
    }

    return (
      <div>
        Next stars: {this.props.stars}
      </div>
    )
  }
}