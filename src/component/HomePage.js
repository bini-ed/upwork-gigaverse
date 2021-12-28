import React from "react";
import "../css/homepage.css";
import Header from "./Header";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <Header></Header>
      </div>
      <div className="homepage__container container">
        <h3 className="font-electro">YOUR SLOGAN</h3>
        <p className="font-electro">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
        </p>

        <a className="btn__learn">Learn More</a>
      </div>
    </div>
  );
}

export default HomePage;
