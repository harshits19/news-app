import React from "react";

const NewsItem = (props) => {
  let { titleText, descText, imgURL, linkURL, sourceName, author, dateTime } = props;
  return (
    <div className="card">
      <img src={imgURL ? imgURL : "https://c.ndtvimg.com/2022-07/ri2krdto_detox-water_625x300_11_July_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"} className="card-img-top" alt="article" />
      <div className="card-body">
        <h5 className="card-title">{titleText}...</h5>
        <h6 className="card-subtitle mb-2 text-muted">{sourceName}</h6>
        <p className="card-text">{descText}...</p>
        <p className="card-text">
          <small className="text-muted">By {author ? author : "unknown"} on {new Date(dateTime).toDateString()}</small>
        </p>
        <a href={linkURL} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm" >Read More</a>
      </div>
    </div>
  );
}
export default NewsItem; 
