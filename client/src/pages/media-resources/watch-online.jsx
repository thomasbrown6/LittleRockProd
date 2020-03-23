import React from "react";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import { Container, Row, Col } from "react-bootstrap";
// import YouTube from "react-youtube";
//import ReactPlayer from "react-player";
import Vimeo from "react-vimeo";

{
  /* <iframe id="ls_embed_1571249302" src="https://livestream.com/accounts/2111489/events/8846899/player?width=960&height=540&enableInfoAndActivity=true&defaultDrawer=feed&autoPlay=true&mute=false" width="960" height="540" frameborder="0" scrolling="no" allowfullscreen> </iframe><script type="text/javascript" data-embed_id="ls_embed_1571249302" src="https://livestream.com/assets/plugins/referrer_tracking.js"></script> */
}

export default class WatchOnline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  render() {
    const opts = {
      height: "900",
      width: "1200",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <Layout>
        <div>
          <Banner
            id="banner"
            headerText="Watch Online"
            Breadcrumb1="HOME"
            tag1="a"
            href1="/"
            Breadcrumb2="GET CONNECTED"
            tag2="a"
            href2="#"
            Breadcrumb3="Watch Online"
            tag3="span"
          />

          <div className="secondary">
            <section id="two">
              <div className="inner">
                <Container>
                  <div className="left">
                    <Row>
                      <Col xs={12}>
                        <header className="major">
                          <h1>Watch Online</h1>
                        </header>
                      </Col>
                    </Row>
                    <Row>
                      <div className="center wd100">
                        <Col xs={12}>
                          <Vimeo
                            videoId={
                              "https://vimeo.com/events/8770696/videos/194916621"
                            }
                            autoplay={true}
                          />
                          {/* <iframe src="https://player.vimeo.com/video/2111489" width="100%" height="100%" frameborder="0" title="Live Stream" webkitallowfullscreen mozallowfullscreen allowfullscreen> */}
                          {/* <iframe src="https://vimeo.com/groups/8770696/videos/194942590" width="100%" height="100%" frameborder="0" title="Live Stream" webkitallowfullscreen mozallowfullscreen allowfullscreen> */}

                          {/* </iframe> */}
                          {/* <ReactPlayer url='https://livestream.com/accounts/2111489/events/8770696' width='100%'  height='100%' playing={true} /> */}
                          {/* <YouTube
                            videoId={"pEsNddhZM5w"} // defaults -> null
                            //videoId={"UCZ3K2j4WbnJ_jqL6Wmqi4mA"} // defaults -> null
                            id={"YoutubePlayer"} // defaults -> null
                            className={"YoutubePlayer center"} // defaults -> null
                            containerClassName={null} // defaults -> ''
                            opts={opts} // defaults -> {}
                            onReady={this._onReady} // defaults -> noop
                            // onPlay={func}                     // defaults -> noop
                            // onPause={func}                    // defaults -> noop
                            // onEnd={func}                      // defaults -> noop
                            // onError={func}                    // defaults -> noop
                            // onStateChange={func}              // defaults -> noop
                            // onPlaybackRateChange={func}       // defaults -> noop
                            // onPlaybackQualityChange={func}    // defaults -> noop
                          /> */}
                        </Col>
                      </div>
                    </Row>
                  </div>
                </Container>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
