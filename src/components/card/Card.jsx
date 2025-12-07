import "./Card.css";
export default function Card() {
  return (
    <div className="main">
      <div className="images">
        <img
          className="mainimg"
          src="./images/image-equilibrium.jpg"
          alt="mainimg"
        />
        <div className="overlay">
          <img className="view" src="./images/icon-view.svg" />
        </div>
      </div>

      <h1>Equilibrium #3429</h1>
      <p className="pone">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="info">
        <img id="iconone" src="./images/icon-ethereum.svg" alt="icon 1 " />
        <p className="iconp">0.041ETH</p>
        <img id="icontwo" src="./images/icon-clock.svg" alt="icon2" />
        <p className="iconptwo">3 days left</p>
      </div>
      <div className="wrapper">
        <img id="avatar" src="./images/image-avatar.png" alt="avatar" />
        <p className="profile">
          Creation of <span className="author">Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}
