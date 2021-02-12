import React from "react";
import "./layout.css";


class ItemSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { s: 1 };
  }
  render() {
    return (
      <div>
        <a
          href={this.props.href}
          className={
            this.props.href === window.location.pathname
              ? "app-sidebar-link active"
              : "app-sidebar-link"
          }
        >
          <img src={this.props.src} alt={this.props.alt} />
        </a>
      </div>
    );
  }
}

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 1 };
    this.activeLink = this.activeLink.bind(this);
  }
  activeLink(e) {
    this.setState({ current: e });
  }
  render() {
    return (
      <div className="app-sidebar">
        <ItemSideBar href="/" src="/assets/img/home.svg" alt="Home" />
        <ItemSideBar
          href="/settings"
          src="/assets/img/settings.svg"
          alt="Settings"
        />
      </div>
    );
  }
}
export default SideBar