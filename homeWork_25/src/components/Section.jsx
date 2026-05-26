import { Component } from "react";

class Section extends Component {
  render() {
    const { winner, numberOfVotes } = this.props;

    return (
      <div className="my-2 d-flex flex-column align-items-center">
        <h2 className="my-3">Результати голосування:</h2>
        <h3 className="my-3">Переможець:</h3>
        <div className="emodji">{winner}</div>
        <h3>Кількість голосів: {numberOfVotes}</h3>
      </div>
    );
  }
}

export default Section;
