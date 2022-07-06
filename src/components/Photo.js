import React, { Component } from "react";
import axios from "axios";

export default class Photo extends Component {
  state = {
    photo: [],
    loading: true,
  };

  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let photo_id = params.get("id");

    axios
      .get(
        "https://api.unsplash.com/photos/" +
          photo_id +
          "/?client_id=ZwvsyV46dMJ_qiFF-ZKj5a2vzugKSk5vDHPBbm4R0GM"
      )
      .then((response) => {
        this.setState({
          photo: response.data,
          loading: false,
        });
      });
  }
  render() {
    const { photo } = this.state;
    console.log(photo);
    return (
      <div className="row">
        <div className="col">
          <div className="single-photo-wrapper">
            <div className="photo-info">
              <p>
                <span>Uploaded by:</span> {photo.user && photo.user.first_name}{" "}
                {photo.user && photo.user.last_name}
              </p>
              <p>
                <span>Location:</span> {photo.user && photo.user.location}
              </p>
              <p>
                <span>Camera:</span> {photo.exif && photo.exif.make}
              </p>
              <p>
                <span>Downloads:</span> {photo.downloads}
              </p>
              <p>
                <a href={photo.links && photo.links.download}>Download</a>
              </p>
            </div>
            <div className="photo-image">
              <img src={photo.urls && photo.urls.regular} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
