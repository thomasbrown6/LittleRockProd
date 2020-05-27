import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

import { getImages } from "../actions/images";

const EventBanner = ({ getImages, image: { image, loaded } }) => {
  useEffect(() => {
    getImages();
  }, [getImages]);

  if (!loaded || image === null) {
    getImages();
  }

  const images = [
    // {
    //   original: require("../static/images/events/event10.jpeg"),
    // },
    // {
    //   original: require("../static/images/events/event9.jpeg"),
    // },
    // {
    //   original: require("../static/images/events/event8.jpg"),
    // },
    // {
    //   original: require("../static/images/events/event6.jpg"),
    // },
    // {
    //   original: require("../static/images/events/event7.jpg"),
    // },
    // {
    //   original: require("../static/images/events/heritage-cultural.jpg"),
    // },
    // // {
    // //   original: require("../static/images/events/event2.JPEG")
    // // },
    // // {
    // //   original: require("../static/images/events/event3.JPEG")
    // // },
    // // {
    // //   original: require("../static/images/events/event1.JPEG")
    // // },
    // {
    //   original: require("../static/images/flyer.jpg"),
    // },
    // {
    //   original: require("../static/images/events/IMG_2417.jpg"),
    // },
    // {
    //   original: require("../static/images/events/IMG_2418.jpg"),
    // },
  ];

  if (image && Array.isArray(image.url)) {
    image.url.forEach((url) => {
      let _url = {
        original: url
      };
      images.push(_url);
    });
  }

  const control = (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay={true}
      slideDuration={500}
      slideInterval={30000}
      useTranslate3D={true}
    />
  );

  return <div>{control}</div>;
};

EventBanner.propTypes = {
  image: PropTypes.object.isRequired,
  getImages: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  image: state.image
});

export default connect(mapStateToProps, {
  getImages
})(EventBanner);
