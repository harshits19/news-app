import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  /* constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    }; }*/
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  //document.title = `NewzShower - ${capitalizeFirstLetter(props.category)}`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  /* To fetch API using another method */
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setLoading({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
  /* this.setState({
    articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading: false,
  }) */
  /* async componentDidMount() {
    this.updateNews();
  } */
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    // this.setState({ page: state.page + 1 });
    let data = await fetch(url);
    let parsedData = await data.json();
    /* this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    }) */
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };


  /*  handlePrevClick = async () => {
     this.setState({ page: this.state.page - 1, });
     this.updateNews();
   };
   handleNextClick = async () => {
     this.setState({ page: this.state.page + 1, });
     this.updateNews();
   }; */
  return (
    <>
      <h1 className="text-center my-5">Latest {capitalizeFirstLetter(props.category)} Headlines</h1>
      <div className="text-center">{loading && <Spinner />}</div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
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
/* <div className="container d-flex justify-content-between my-5">
      <button
        disabled={this.state.page <= 1}
        type="button"
        className="btn btn-dark"
        onClick={this.handlePrevClick} > &larr; Previous </button>
      <button
        disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pgSize)}
        type="button"
        className="btn btn-dark"
        onClick={this.handleNextClick} > Next &rarr; </button>
    </div> */

News.defaultProps = {
  pgSize: 10,
  country: "in",
  category: "general",
};
News.propTypes = {
  pgSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;