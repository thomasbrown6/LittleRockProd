import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

class EventBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
  }

  render() {
    const images = [
      {
        original: require("../static/images/events/event10.jpeg")
      },
      {
        original: require("../static/images/events/event9.jpeg")
      },
      {
        original: require("../static/images/events/event8.jpg")
      },
      {
        original: require("../static/images/events/event6.jpg")
      },
      {
        original: require("../static/images/events/event7.jpg")
      },
      {
        original: require("../static/images/events/heritage-cultural.jpg")
      },
      // {
      //   original: require("../static/images/events/event2.JPEG")
      // },
      // {
      //   original: require("../static/images/events/event3.JPEG")
      // },
      // {
      //   original: require("../static/images/events/event1.JPEG")
      // },
      {
        original: require("../static/images/flyer.jpg")
      },
      {
        original: require("../static/images/events/IMG_2417.jpg")
      },
      {
        original: require("../static/images/events/IMG_2418.jpg")
      }
    ];

    const control = (
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideDuration={500}
        slideInterval={5000}
        useTranslate3D={true}
      />
    );

    return <div>{control}</div>;
  }
}

export default EventBanner;
