import React from "react";

class SidePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // activeIndex: null
    };
  }

  render() {
    return (
      <div className="panel">
        <ul className="panel-ul">
          {this.props.panelTitle1 != null && (
            <li
              className={
                this.props.activeIndex === 0 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage1 != null && (
                <img className="panel-image" src={this.props.panelImage1} />
              )}
              <h3 className="panel-title">{this.props.panelTitle1}</h3>
              <p>{this.props.p1}</p>
            </li>
          )}

          {this.props.panelTitle2 != null && (
            <li
              className={
                this.props.activeIndex === 1 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage2 != null && (
                <img className="panel-image" src={this.props.panelImage2} />
              )}
              <h3 className="panel-title">{this.props.panelTitle2}</h3>
              <p>{this.props.p2}</p>
            </li>
          )}
          {this.props.panelTitle3 != null && (
            <li
              className={
                this.props.activeIndex === 2 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage3 != null && (
                <img className="panel-image" src={this.props.panelImage3} />
              )}
              <h3 className="panel-title">{this.props.panelTitle3}</h3>
              <p>{this.props.p3}</p>
            </li>
          )}
          {this.props.panelTitle4 != null && (
            <li
              className={
                this.props.activeIndex === 3 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage4 != null && (
                <img className="panel-image" src={this.props.panelImage4} />
              )}
              <h3 className="panel-title">{this.props.panelTitle4}</h3>
              <p>{this.props.p4}</p>
            </li>
          )}
          {this.props.panelTitle5 != null && (
            <li
              className={
                this.props.activeIndex === 4 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage5 != null && (
                <img className="panel-image" src={this.props.panelImage5} />
              )}
              <h3 className="panel-title">{this.props.panelTitle5}</h3>
              <p>{this.props.p5}</p>
            </li>
          )}
          {this.props.panelTitle6 != null && (
            <li
              className={
                this.props.activeIndex === 5 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage6 != null && (
                <img className="panel-image" src={this.props.panelImage6} />
              )}
              <h3 className="panel-title">{this.props.panelTitle6}</h3>
              <p>{this.props.p6}</p>
            </li>
          )}
          {this.props.panelTitle7 != null && (
            <li
              className={
                this.props.activeIndex === 6 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage7 != null && (
                <img className="panel-image" src={this.props.panelImage7} />
              )}
              <h3 className="panel-title">{this.props.panelTitle7}</h3>
              <p>{this.props.p7}</p>
            </li>
          )}
          {this.props.panelTitle8 != null && (
            <li
              className={
                this.props.activeIndex === 7 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage8 != null && (
                <img className="panel-image" src={this.props.panelImage8} />
              )}
              <h3 className="panel-title">{this.props.panelTitle8}</h3>
              <p>{this.props.p8}</p>
            </li>
          )}
          {this.props.panelTitle9 != null && (
            <li
              className={
                this.props.activeIndex === 8 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage9 != null && (
                <img className="panel-image" src={this.props.panelImage9} />
              )}
              <h3 className="panel-title">{this.props.panelTitle9}</h3>
              <p>{this.props.p9}</p>
            </li>
          )}
          {this.props.panelTitle10 != null && (
            <li
              className={
                this.props.activeIndex === 9 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage10 != null && (
                <img className="panel-image" src={this.props.panelImage10} />
              )}
              <h3 className="panel-title">{this.props.panelTitle10}</h3>
              <p>{this.props.p10}</p>
            </li>
          )}

          {this.props.panelTitle11 != null && (
            <li
              className={
                this.props.activeIndex === 10 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage11 != null && (
                <img className="panel-image" src={this.props.panelImage11} />
              )}
              <h3 className="panel-title">{this.props.panelTitle11}</h3>
              <p>{this.props.p11}</p>
            </li>
          )}

          {this.props.panelTitle12 != null && (
            <li
              className={
                this.props.activeIndex === 11 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage12 != null && (
                <img className="panel-image" src={this.props.panelImage12} />
              )}
              <h3 className="panel-title">{this.props.panelTitle12}</h3>
              <p>{this.props.p12}</p>
            </li>
          )}

          {this.props.panelTitle13 != null && (
            <li
              className={
                this.props.activeIndex === 12 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage13 != null && (
                <img className="panel-image" src={this.props.panelImage13} />
              )}
              <h3 className="panel-title">{this.props.panelTitle13}</h3>
              <p>{this.props.p13}</p>
            </li>
          )}

          {this.props.panelTitle14 != null && (
            <li
              className={
                this.props.activeIndex === 13 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage14 != null && (
                <img className="panel-image" src={this.props.panelImage14} />
              )}
              <h3 className="panel-title">{this.props.panelTitle14}</h3>
              <p>{this.props.p14}</p>
            </li>
          )}

          {this.props.panelTitle15 != null && (
            <li
              className={
                this.props.activeIndex === 14 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage15 != null && (
                <img className="panel-image" src={this.props.panelImage15} />
              )}
              <h3 className="panel-title">{this.props.panelTitle15}</h3>
              <p>{this.props.p15}</p>
            </li>
          )}

          {this.props.panelTitle16 != null && (
            <li
              className={
                this.props.activeIndex === 15 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage16 != null && (
                <img className="panel-image" src={this.props.panelImage16} />
              )}
              <h3 className="panel-title">{this.props.panelTitle16}</h3>
              <p>{this.props.p16}</p>
            </li>
          )}

          {this.props.panelTitle17 != null && (
            <li
              className={
                this.props.activeIndex === 16 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage17 != null && (
                <img className="panel-image" src={this.props.panelImage17} />
              )}
              <h3 className="panel-title">{this.props.panelTitle17}</h3>
              <p>{this.props.p17}</p>
            </li>
          )}

          {this.props.panelTitle18 != null && (
            <li
              className={
                this.props.activeIndex === 17 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage18 != null && (
                <img className="panel-image" src={this.props.panelImage18} />
              )}
              <h3 className="panel-title">{this.props.panelTitle18}</h3>
              <p>{this.props.p18}</p>
            </li>
          )}

          {this.props.panelTitle19 != null && (
            <li
              className={
                this.props.activeIndex === 18 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage19 != null && (
                <img className="panel-image" src={this.props.panelImage19} />
              )}
              <h3 className="panel-title">{this.props.panelTitle19}</h3>
              <p>{this.props.p19}</p>
            </li>
          )}

          {this.props.panelTitle20 != null && (
            <li
              className={
                this.props.activeIndex === 19 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage20 != null && (
                <img className="panel-image" src={this.props.panelImage20} />
              )}
              <h3 className="panel-title">{this.props.panelTitle20}</h3>
              <p>{this.props.p20}</p>
            </li>
          )}

          {this.props.panelTitle21 != null && (
            <li
              className={
                this.props.activeIndex === 20 ? "panel-item-active" : "hide"
              }
            >
              {this.props.panelImage21 != null && (
                <img className="panel-image" src={this.props.panelImage21} />
              )}
              <h3 className="panel-title">{this.props.panelTitle21}</h3>
              <p>{this.props.p21}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default SidePanel;
