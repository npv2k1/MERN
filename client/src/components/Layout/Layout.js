import React from "react";

import Header from "./Header"
import SideBar from "./SideBar"
import AppView from "./AppView"


import NewHeader from "./NewHeader"
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: [] };
  }
  
  render() {
    return (
      <div className="app-container">
        <NewHeader />
        <div className="app-content">
          <SideBar />
          <AppView />
        </div>
      </div>
    );
  }
}
export default Layout;
