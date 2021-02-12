import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser } from "../../actions/authActions";
class InfoUser extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props.auth;
    this.state = {
      name: user.name,
      birthday: user.birthday,
      gender: user.gender ? 1 : 0,
      email: user.email,
      phone: user.phone,
      address: user.address,
      password:'',
      password2:''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  changeName(e) {
    this.setState({ name: e.target.value });
  }
  changeGender(e) {
    this.setState({ gender: e.target.value });
  }
  changeBirthday(e) {
    this.setState({ birthday: e.target.value });
  }
  changePhone(e) {
    this.setState({ phone: e.target.value });
  }
  changeAddress(e) {
    this.setState({address: e.target.value})
  }
  changePassword(e){
    this.setState({password: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    const payload={
      name:this.state.name,
      gender:this.state.gender,
      email:this.state.email,
      birthday: this.state.birthday,
      address: this.state.address,
      phone: this.state.phone
    }
    this.props.updateUser(payload, this.props.history);
    console.log(e)
  }
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div className="col-lg-12 d-lg-flex justify-content-lg-center">
          <div className="card shadow mb-3">
            <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">
                Thông tin cá nhân
              </p>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name">
                        <strong>Họ và tên</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        name="names"
                        onChange={(e) => this.changeName(e)}
                        value={this.state.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label>
                        <strong>Giới tính: </strong>
                      </label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                          onChange={(e) =>
                            e.target.checked
                              ? this.setState({ gender: 1 })
                              : this.setState({ gender: 0 })
                          }
                          checked={this.state.gender ? "checked" : ""}
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Nam
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                          onChange={(e) =>
                            e.target.checked
                              ? this.setState({ gender: 0 })
                              : this.setState({ gender: 1 })
                          }
                          checked={this.state.gender ? "" : "checked"}
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          Nữ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="birthday">
                        <strong>Ngày sinh</strong>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="John"
                        name="birthday"
                        onChange={(e) => this.changeBirthday(e)}
                        value={this.state.birthday ? this.state.birthday : ""}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="email">
                        <strong>Email Address</strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="user@example.com"
                        name="email"
                        value={user.email}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name">
                        <strong>Số điện thoại</strong>
                      </label>
                      <input
                        type="phone"
                        className="form-control"
                        placeholder="+84"
                        onChange={(e) => this.changePhone(e)}
                        value={this.state.phone}
                        name="first_name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name">
                        <strong>Địa chỉ</strong>
                        <br />
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Address"
                        onChange={(e) => this.changeAddress(e)}
                        value={this.state.address ? this.state.address : ""}
                        name="address"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name">
                        <strong>Mật khẩu</strong>
                        <br />
                      </label>
                      <input
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        type="password"
                        className="form-control"
                        value={this.state.password}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label for="last_name">
                        <strong>Xác nhận mật khẩu</strong>
                        <br />
                      </label>
                      <input
                        onChange={(e) =>
                          this.setState({ password2: e.target.value })
                        }
                        type="password"
                        value={this.state.password2}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-sm" type="submit">
                    Save Settings
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
InfoUser.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps,{updateUser})(InfoUser);

// export default InfoUser
