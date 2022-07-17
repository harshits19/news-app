import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    pgSize: 10,
    country: "in",
    category: "general",
  };
  static propTypes = {
    pgSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewzShower - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  /* To fetch API using another method */
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
  }
  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
  };


  /*  handlePrevClick = async () => {
     this.setState({ page: this.state.page - 1, });
     this.updateNews();
   };
   handleNextClick = async () => {
     this.setState({ page: this.state.page + 1, });
     this.updateNews();
   }; */
  render() {
    return (
      <>
        <h1 className="text-center my-5">Latest {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        <div className="text-center">{this.state.loading && <Spinner />}</div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      titleText={element.title ? element.title : ""}
                      descText={element.description ? element.description : ""}
                      imgURL={element.urlToImage}
                      linkURL={element.url}
                      author={element.author}
                      dateTime={element.publishedAt}
                      sourceName={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

/* <div className="container d-flex justify-content-between my-5">
      <button
        disabled={this.state.page <= 1}
        type="button"
        className="btn btn-dark"
        onClick={this.handlePrevClick} > &larr; Previous </button>
      <button
        disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pgSize)}
        type="button"
        className="btn btn-dark"
        onClick={this.handleNextClick} > Next &rarr; </button>
    </div> */