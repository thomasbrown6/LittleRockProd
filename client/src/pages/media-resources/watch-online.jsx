import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Layout from "../../components/Layout";
import Banner from "../../components/Banner";

import { Container, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import YouTube from "react-youtube";

import { getLivestreamKey, uploadLivestreamKey } from "../../actions/key";

const WatchOnline = ({
  auth: { isAuthenticated },
  livestream: { data },
  getLivestreamKey,
  uploadLivestreamKey
}) => {
  useEffect(() => {
    getLivestreamKey();
  }, [getLivestreamKey]);

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };

  const [inputKey, setInputKey] = useState();

  const handleInputChange = (e) => {
    setInputKey(e.target.value);
  };

  const uploadKey = (async) => {
    console.log("uploading key... " + inputKey);
    uploadLivestreamKey(inputKey);
  };

  console.log(`key data ${data ? data : " - no key"}`);
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
          headerText=""
          image={require("../../static/images/banners/watch-online.jpg")}
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
                        {isAuthenticated && (
                          <Row>
                            <Col xs={12}>
                              <div className="center">
                                <TextField
                                  id="standard-basic"
                                  margin="normal"
                                  name="inputKey"
                                  value={inputKey}
                                  onChange={(e) => handleInputChange(e)}
                                  label="Video Key"
                                />
                              </div>
                            </Col>
                          </Row>
                        )}
                        {isAuthenticated && (
                          <Row>
                            <Col xs={12}>
                              <div className="center">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={uploadKey}
                                >
                                  Upload Key
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        )}
                        {/* <Vimeo videoId={"https://vimeo.com/events/8770696/videos/194916621"} autoplay={true} /> */}
                        {/* <iframe src="https://player.vimeo.com/video/2111489" width="100%" height="100%" frameborder="0" title="Live Stream" webkitallowfullscreen mozallowfullscreen allowfullscreen> */}
                        {/* <iframe src="https://vimeo.com/groups/8770696/videos/194942590" width="100%" height="100%" frameborder="0" title="Live Stream" webkitallowfullscreen mozallowfullscreen allowfullscreen> */}

                        {/* </iframe> */}
                        {/* <ReactPlayer url='https://livestream.com/accounts/2111489/events/8770696' width='100%'  height='100%' playing={true} /> */}
                        <YouTube
                          videoId={data ? data : ""} // defaults -> null
                          //videoId={"UCZ3K2j4WbnJ_jqL6Wmqi4mA"} // defaults -> null
                          id={"YoutubePlayer"} // defaults -> null
                          className={"YoutubePlayer center"} // defaults -> null
                          containerClassName={null} // defaults -> ''
                          opts={opts} // defaults -> {}
                          onReady={_onReady} // defaults -> noop
                          // onPlay={func}                     // defaults -> noop
                          // onPause={func}                    // defaults -> noop
                          // onEnd={func}                      // defaults -> noop
                          // onError={func}                    // defaults -> noop
                          // onStateChange={func}              // defaults -> noop
                          // onPlaybackRateChange={func}       // defaults -> noop
                          // onPlaybackQualityChange={func}    // defaults -> noop
                        />
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
};

WatchOnline.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  getLivestreamKey: PropTypes.func.isRequired,
  uploadLivestreamKey: PropTypes.func.isRequired,
  livestream: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  livestream: state.livestream
});

export default connect(mapStateToProps, {
  getLivestreamKey,
  uploadLivestreamKey
})(WatchOnline);
