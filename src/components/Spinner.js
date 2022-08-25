import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
  render() {
    return (
        <div className='text-center'>
            <img src={loading} class="img-fluid my-3" alt="loading" />
        </div>
    );
  }
}

export default Spinner;