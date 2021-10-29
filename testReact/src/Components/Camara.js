import React, {Component} from 'react';
import QrReader from 'react-qr-reader'
import { withRouter } from "react-router-dom";
import axios from '../Axios/axios';
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
    
      axios.get("/api/productos?id=" + info.id)
      .then(response => {
          console.log(response.data[0]);
          const producto = response.data[0];
          this.props.history.push({
            pathname: '/nuevofuncion',
            state: {producto}
          })
      });      
    }
  }

  handleError = err => {
    console.error(err)
  }

  render() {
    return (
      <div>
        <QrReader
          delay={500}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default withRouter(Camara);