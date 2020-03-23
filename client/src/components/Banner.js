import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    };
  }
  //  handleOnDragStart = e => e.preventDefault()
  // slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });
  // slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

  render() {
    const slideImages = [
      require("../static/images/church-img2.jpg"),
      require("../static/images/image-watch-online.jpg"),
      require("../static/images/church-img4.jpg")
    ];

    const images = [
      {
        original: require("../static/images/banners/excellence_in_ministry.jpg")
        //thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: require("../static/images/banners/god_is_glorified.jpg")
        //thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: require("../static/images//banners/jesus_is_magnified.jpg")
        // thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      },
      {
        original: require("../static/images//banners/people_are_edified.jpg")
        // thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      },
      {
        original: require("../static/images//banners/faith_is_fortified.jpg")
        // thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      },
      {
        original: require("../static/images//banners/ministry_is_multiplied.jpg")
        // thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ];

    let control;

    if (this.props.slideshow) {
      control = (
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
    } else {
      control = (
        <div>
          <section id={this.props.id} style={this.divStyle} className="major">
            {this.props.image != null && (
              <img className="banner-image" src={this.props.image} />
            )}

            <span className="header-text">{this.props.headerText}</span>
          </section>

          <section className="breadcrumb-section">
            {this.props.Breadcrumb1 != null && (
              <div className="breadcrumb-grid">
                <div className="breadcrumb-panel">
                  <ul className="breadcrumb">
                    {this.props.Breadcrumb1 != null && (
                      <li href={this.props.href1}>
                        <Link to={this.props.href1}>
                          <a>{this.props.Breadcrumb1}</a>
                        </Link>
                      </li>
                    )}
                    {this.props.Breadcrumb2 != null && (
                      <li href={this.props.href2}>
                        <Link to={this.props.href2}>
                          <a>{this.props.Breadcrumb2}</a>
                        </Link>
                      </li>
                    )}
                    {this.props.Breadcrumb3 != null && (
                      <li href={this.props.href3}>
                        {this.props.href3 ? (
                          <Link to={this.props.href3}>
                            <a>{this.props.Breadcrumb3}</a>
                          </Link>
                        ) : (
                          <span>{this.props.Breadcrumb3}</span>
                        )}
                      </li>
                    )}
                    {this.props.Breadcrumb4 != null && (
                      <li href={this.props.href4}>
                        <Link to={this.props.href4}>
                          <a>{this.props.Breadcrumb4}</a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </section>
        </div>
      );
    }

    return <div>{control}</div>;
  }
}

export default Banner;
