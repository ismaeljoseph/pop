import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Dropzone from 'react-dropzone';
import JSZip from 'jszip';

import './dropZone.css';

export default class ImportDropComponent extends Component {

  state = {
    progress: 0,
    error: '',
    encoding: 'ISO-8859-1'
  }

  onDrop(files) {
    if (files.length === 1 && getExtension(files[0].name) === 'zip') {
      const new_zip = new JSZip();
      new_zip.loadAsync(files[0]).then((zip) => {
        const arr = [];
        zip.forEach((path, obj) => {
          arr.push(convertToFile(obj));
        })
        Promise.all(arr).then((unzipFiles) => {
          this.props.onFinish(unzipFiles, this.state.encoding);
        })
      })
    } else {

      console.log('DROPED', files)
      this.props.onFinish(files, this.state.encoding);
    }
  }

  render() {
    if (!this.props.visible) {
      return <div />
    }
    const rowstyle = {
      paddingTop: '20px',
      display: 'flex',
      flexDirection: 'column',
      paddingRight: '50px',
      paddingLeft: '50px'
    }
    const encodings = ['UTF-8', 'ISO-8859-1', 'WINDOWS-1252'].map(o => <option key={o}>{o}</option>)
    return (
      <div className='dropzone'>
        <Dropzone className='dropArea' onDrop={this.onDrop.bind(this)}>
          <img src={require('../../../assets/upload.png')} />
          <p>Glissez & déposez vos fichiers ou cliquez ici pour importer</p>
        </Dropzone>
        <Row style={{ ...rowstyle, justifyContent: 'center', alignItems: 'center' }} type="flex" gutter={16} justify="center">
          {this.state.error ? <div>{this.state.error}</div> : <div />}
        </Row>
        <select onChange={e => this.setState({encoding: e.target.value})} value={this.state.encoding}>
          {encodings}
        </select>
      </div>
    );
  }
}

function getExtension(name) {
  return ('' + name.split('.').pop()).toLowerCase();
}

function convertToFile(obj) {
  return new Promise((resolve, reject) => {
    const ext = getExtension(obj.name);

    const type = (ext === 'txt' || ext === 'csv') ? 'text/plain' : 'image/jpeg';
    obj.async("blob").then((data) => {
      resolve(new File([data], obj.name, { type }));
    })
  })
}
