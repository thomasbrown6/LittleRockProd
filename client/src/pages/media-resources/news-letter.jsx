import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import NewsLetterDropdown from "../../components/NewsLetterDropdown";

export default class NewsLetter extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    width: null
  };

  componentDidMount() {
    if (window.innerWidth < 750) {
      this.setState({ width: window.innerWidth + 250 });
    } else if (window.innerWidth < 1150) {
      this.setState({ width: window.innerWidth + 200 });
    } else {
      this.setState({ width: window.innerWidth });
    }
    console.log(window.innerWidth);
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  onNextClick = e => {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
      e.preventDefault();
    }
  };

  onPrevClick = e => {
    if (this.state.pageNumber > 1) {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
      e.preventDefault();
    }
  };

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <Layout>
        <div>
          <Banner
            id="banner"
            image={require("../../static/images/banners/newsletter-img.png")}
            Breadcrumb1="HOME"
            headerText=""
            tag1="a"
            href1="/"
            Breadcrumb2="GET CONNECTED"
            tag2="a"
            href2="#"
            Breadcrumb3="December 2019 News Letter"
            tag3="span"
          />

          <div className="secondary">
            <section id="two">
              <div className="inner">
                <NewsLetterDropdown />
                <div className="center">
                  <Container>
                    <Row>
                      <Col xs={12}>
                        <header className="major">
                          <h1>December 2019 News Letter</h1>
                        </header>
                      </Col>
                    </Row>
                  </Container>
                  <Row>
                    <Col xs={12}>
                      <div classname="center">
                        <Document
                          file="../../static/pdf/newsletter2.pdf"
                          onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                          <Page
                            width={this.state.width - 400}
                            pageNumber={pageNumber}
                          />
                          {/* <div className="pdf-button-wrapper"> */}
                          <Button
                            variant="outlined"
                            className={"pdf-button"}
                            onClick={this.onPrevClick}
                          >
                            Prev
                          </Button>
                          <Button
                            variant="outlined"
                            className={"pdf-button"}
                            onClick={this.onNextClick}
                          >
                            Next
                          </Button>
                          {/* </div> */}
                          <p className="center bold">
                            Page {pageNumber} of {numPages}
                          </p>
                        </Document>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}
