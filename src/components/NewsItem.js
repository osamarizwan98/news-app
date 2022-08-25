import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, desc, imageUrl, url} = this.props;
    return (
        <div className="card my-3">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={url} target="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
  }
}

export default NewsItem