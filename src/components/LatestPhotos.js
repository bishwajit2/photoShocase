import React, { Component } from "react";
import axios from "axios";
import { TabTitle } from "../lib/generalFunction";

export default class LatestPhotos extends Component {
  state = {
    photos: [],
    page: 0,
    loading: true,
    searching: false,
    search_query: "",
  };

  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&per_page=12&page=" +
          this.state.page
      )
      .then((response) => {
        this.setState({
          photos: response.data,
          loading: false,
          page: this.state.page + 1,
        });
      });

    window.scrollTo(0, 0);
  }

  loadNextPage = () => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&per_page=12&page=" +
          this.state.page
      )
      .then((response) => {
        this.setState({
          photos: response.data,
          loading: false,
          page: this.state.page + 1,
          searchnig: false,
        });
      });
    window.scrollTo(0, 0);
  };

  searchQuery = (e) => {
    this.setState({
      search_query: e.target.value,
    });
  };

  searchTrigger = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&query=" +
          this.state.search_query +
          "&per_page=12&page=" +
          this.state.page
      )
      .then((response) => {
        this.setState({
          photos: response.data.results,
          loading: false,
          page: 2,
          searching: true,
        });
      });
  };

  loadNextSearchPage = () => {
    axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM&query=" +
          this.state.search_query +
          "&per_page=12&page=" +
          this.state.page
      )
      .then((response) => {
        this.setState({
          photos: response.data.results,
          loading: false,
          page: this.state.page + 1,
          searching: true,
        });
      });
    window.scrollTo(0, 0);
  };

  render() {
    const { photos, loading, search_query, searching, page } = this.state;
    TabTitle(search_query ? `PhotoBD ${search_query}` : "LatestPhoto");
    console.log(photos);
    if (loading) {
      return (
        <div className="loading">
          <h2>loading..</h2>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-auto me-auto">
            <h2>{searching ? search_query : "Latest Photos"}</h2>
          </div>
          <div className="col-auto">
            <form action="" onSubmit={this.searchTrigger}>
              <input
                onChange={this.searchQuery}
                value={this.state.search_query}
                type="text"
                placeholder="Search Keyword"
              />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
        <div className="row">
          {photos.map((photo) => (
            <div key={photo.id} className="col-lg-3">
              <div className="single-photo-item">
                <a href={"photo?id=" + photo.id} className="d-block">
                  <div className="photo-wrapper">
                    <img src={photo.urls.small} alt={photo.description} />
                  </div>
                  <h5>{photo.description ? photo.description : "No title"}</h5>
                  <p className="cat-name">
                    By - {photo.user.first_name} {photo.user.last_name}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-12">
          <div className="load-more-btn">
            {searching ? (
              <button
                onClick={this.loadNextSearchPage}
                className="btn btn-success"
              >
                {search_query} Page {page}
              </button>
            ) : (
              <button onClick={this.loadNextPage} className="btn btn-success">
                Load Page {page}
              </button>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
