// import PropTypes from 'prop-types';
// import React, { Component } from 'react';

// export default class News extends Component {
//   static defaultProps = {
//       country: 'in',
//       pageSize: 6,
//       category: 'general'
//   } 
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   capitalizeFirstLetter = (word)=>{
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }

//   constructor(props){
//       super(props);
//       this.state = {
//           articles: [],
//           loading: true,
//           page:1,
//           totalResult: 0
//       }
//       document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
//   }

//   async updateNews(){
//       this.props.setProgress(10);
      
//   }

//   render() {
//     return <div></div>;
//   }
// }


import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=371db98e9a53482f99e43ce2c6eb0228&pageSize=20&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }

  handlePrevious = async ()=>{
    let url = `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=371db98e9a53482f99e43ce2c6eb0228&pageSize=20&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles,
    });
  }

  handleNext = async ()=>{
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      
    }
    else{
      let url = `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=371db98e9a53482f99e43ce2c6eb0228&pageSize=20&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles
      });
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
              return (
                <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title : ''} desc={element.description?element.description: ''} imageUrl={element.urlToImage} url={element.url} />
              </div>
              )
            })
          }
        </div>
        <div className='d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1}  className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNext}> Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News