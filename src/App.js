import React, {Component} from 'react';
import './App.css';
//make fileObjectURL
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {src: '', name: ''};
    this.OnHandleChange = this.OnHandleChange.bind(this);
  }

  OnHandleChange = (event) => {
    this.setState({
      src: URL.createObjectURL(event.target.files[0]),
      name: event.target.files[0].name,
    });
    console.log(this.state.name);
  };
  //if you put 'multiple in input, you can upload multiple files'
  render() {
    return (
      <div className='App' style={{textAlign: 'center', padding: '16px'}}>
        <form style={{padding: '15px'}}>
          <label
            for='file-upload'
            style={{
              width: '200px',
              backgroundColor: '#4A4A4A',
              padding: '16px',
              borderRadius: '15px',
              color: 'white',
              cursor: 'pointer',
              margin: 'auto',
              display: 'block',
            }}
          >
            點擊上傳
          </label>
          <p>{this.state.src == '' ? '' : '檔名為:' + this.state.name}</p>
          <input
            style={{display: 'none'}}
            id='file-upload'
            type='file'
            onChange={this.OnHandleChange}
          ></input>
          {this.state.src == '' ? (
            ''
          ) : (
            <div
              style={{
                maxWidth: '90vw',
                border: '1px solid black',
                maxHeight: '600px',
                margin: '15px auto 15px auto',
              }}
            >
              <img
                height='100%'
                style={{width: 'inherit', objectFit: 'contain'}}
                src={this.state.src}
              ></img>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default App;
