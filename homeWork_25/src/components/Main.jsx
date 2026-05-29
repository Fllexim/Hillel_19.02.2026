function Main({ votes, addVote, showResults, clearResults }) {
  return (
    <>
      <div className="d-flex gap-5 m-4">
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn rounded-5 p-0 emodji"
            onClick={() => addVote("sad")}
          >🥲</button>

          <span className="fs-4">{votes.sad}</span>
        </div>

        <div className="d-flex flex-column align-items-center">
          <button
            className="btn rounded-5 p-0 emodji"
            onClick={() => addVote("happy")}
          >😁</button>

          <span className="fs-4">{votes.happy}</span>
        </div>

        <div className="d-flex flex-column align-items-center">
          <button
            className="btn rounded-5 p-0 emodji"
            onClick={() => addVote("love")}
          >😍</button>

          <span className="fs-4">{votes.love}</span>
        </div>

        <div className="d-flex flex-column align-items-center">
          <button
            className="btn rounded-5 p-0 emodji"
            onClick={() => addVote("shock")}
          >😱</button>

          <span className="fs-4">{votes.shock}</span>
        </div>

        <div className="d-flex flex-column align-items-center">
          <button
            className="btn rounded-5 p-0 emodji"
            onClick={() => addVote("laugh")}
          >😄</button>

          <span className="fs-4">{votes.laugh}</span>
        </div>
      </div>

      <button className="btn btn-success fs-5" onClick={showResults}>
        Show results
      </button>

      <button className="btn btn-danger fs-5 mt-2" onClick={clearResults}>
        Clear results
      </button>
    </>
  );
}

export default Main;
