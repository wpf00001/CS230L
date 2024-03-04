function Card() {
  return (
    <div className="card-container">
        <div className="card1" style={{ width: '18rem', border: '1px solid'}}>
            <div className="card-body">
            <h5 className="card-title">Dogs</h5>
            <p className="card-text">Dogs are domestic canines that are kept as pets.</p>
            </div>
      </div>

      <div className="card2" style={{ width: '18rem', border: '1px solid'}}>
        <div className="card-body">
          <h5 className="card-title">Cats</h5>
          <p className="card-text">Cats are domestic Felines that are kept as pets.</p>
        </div>
      </div>

      <div className="card3" style={{ width: '18rem', border: '1px solid'}}>
        <div className="card-body">
          <h5 className="card-title">Rats</h5>
          <p className="card-text">Rats are domestic Rodents that are kept as pets.</p>
        </div>
      </div>
    </div>
  );
}

export default Card;