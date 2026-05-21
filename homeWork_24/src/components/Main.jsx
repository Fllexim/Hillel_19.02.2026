import { Component } from "react";

class Main extends Component {
  render() {
    const { title } = this.props;

    return (
      <form className="input-group mb-3">
        <span className="input-group-text">https://www.swapi.tech/api/</span>
        <input className="form-control" placeholder="people/1/"></input>
        <button className="btn btn-primary">Get info</button>
      </form>
    );
  }
}

export default Main;
