import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const NewsLetterDropDown = props => (
  <DropdownButton
    id="dropdown-variants-danger"
    title="Other News Letters"
    variant="danger"
    key="danger"
  >
    <Dropdown.Item href="/media-resources/news-letter">
      December 2019
    </Dropdown.Item>
    <Dropdown.Item href="/media-resources/news-letters/april-sept2019">
      April-Sept. 2019
    </Dropdown.Item>
  </DropdownButton>
);

export default NewsLetterDropDown;
