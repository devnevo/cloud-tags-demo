import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import items2018 from "./2018";
import items2017 from "./2017";
import items2016 from "./2016";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: items2018 };
  }
  // min() {
  //   this.state.items.reduce(
  //     (min, p) => (p.count < min ? p.count : min),
  //     this.state.items[0].count
  //   );
  // }

  // max() {
  //   this.state.items.reduce(
  //     (max, p) => (p.count > max ? p.count : max),
  //     this.state.items[0].count
  //   );
  // }

  render() {
    return (
      <div className="landing">
        <div className="container landing-inner">
          <div className="row buttonsRow">
            <button
              type="button"
              onClick={() => {
                if (this.state.items !== items2016) {
                  this.setState(state => ({ items: items2016 }));
                }
              }}
              className="btn btn-primary"
            >
              2016
            </button>
            <button
              type="button"
              onClick={() => {
                if (this.state.items !== items2017) {
                  this.setState(state => ({ items: items2017 }));
                }
              }}
              className="btn btn-primary"
            >
              2017
            </button>
            <button
              type="button"
              onClick={() => {
                if (this.state.items !== items2018) {
                  this.setState(state => ({ items: items2018 }));
                }
              }}
              className="btn btn-primary"
            >
              2018
            </button>
          </div>
          <div className="app-inner">
            <TagCloud
              className="tag-cloud"
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                fontStyle: "italic",
                color: () =>
                  randomColor({
                    luminosity: "dark"
                  }),
                padding: 10,
                width: "100%",
                height: "100%",
                flex: 1
              }}
            >
              {this.state.items.map(item => (
                <div
                  style={{
                    fontSize: Math.log(item.count) * 3
                  }}
                >
                  {item.name}
                </div>
              ))}
            </TagCloud>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
