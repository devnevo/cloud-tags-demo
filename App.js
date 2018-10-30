import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import items2018 from "./2018";
import items2017 from "./2017";
import items2016 from "./2016";

const items = items2017;
const min = items.reduce(
  (min, p) => (p.count < min ? p.count : min),
  items[0].count
);

const max = items.reduce(
  (max, p) => (p.count > max ? p.count : max),
  items[0].count
);
class App extends Component {
  // componentDidMount() {
  //   setInterval(() => {
  //     this.forceUpdate();
  //   }, 3000);
  // }
  // changeItems = (year) => {
  //   if(year == '2016'){
  //     items = items2016;
  //   } else if(year == '2017'){
  //     items = items2017;
  //   } else {
  //     items = items2018;
  //   }
  //   const items = items2017;
  //   this.forceUpdate();
  //   console.log(items);
  // };
  render() {
    return (
      <div className="landing">
        <div className="container landing-inner">
          <div className="row">
            <div className="col-sm-3 col-md-6 col-lg-4">
              <div className="row buttonsRow">
                <button type="button" className="btn btn-primary">
                  2016
                </button>
                <button type="button" className="btn btn-primary">
                  2017
                </button>
                <button type="button" className="btn btn-primary">
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
                    padding: 25
                  }}
                >
                  {items.map(item => (
                    <div
                      style={{
                        fontSize:
                          parseFloat((item.count - min) / (max - min)) *
                            (50 - 25) *
                            1 +
                          25
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </TagCloud>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-8" />
        </div>
      </div>
    );
  }
}

export default App;
