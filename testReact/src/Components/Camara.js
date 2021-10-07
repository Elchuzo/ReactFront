import React, {Component} from 'react';
import QrReader from 'react-qr-reader'

class Camara extends Component {
  state = {
    result: 'No result'
  }
 
  handleScan = data => {
    if (data) {
      const info = JSON.parse(data);
      console.log(info.id);
      this.setState({        
        result: data
      })
    }
  }

  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default Camara;