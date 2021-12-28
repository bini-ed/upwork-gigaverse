import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import "../css/projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="project__content container">
        <div class="container projects__cont">
          <h2 className="font-electro">PROJECTS</h2>
          <div class="row">
            <div class="col">
              <div className="card">
                <img
                  src="data:image/jpeg;base64,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"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body font-electro">
                  <h5 className="card-title">Infinity Frogs</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn">
                    Go to the collection
                  </a>
                </div>
              </div>
            </div>

            {/*  */}

            <div class="col">
              <div className="card">
                <img
                  src="https://preview.redd.it/2r7he45sp9l71.jpg?width=1024&format=pjpg&auto=webp&s=03304793dadd4d1df87363a8fb492fab91fa0556"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body font-electro">
                  <h5 className="card-title">Infinity Frogs</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn">
                    Go to the collection
                  </a>
                </div>
              </div>
            </div>

            {/*  */}

            <div class="row">
              <div class="col">
                <div className="horizontal">
                  <img
                    src="https://image.freepik.com/free-vector/wild-west-background-with-mountains-birds_23-2147593384.jpg"
                    className="horizontalImage"
                    alt="..."
                  />
                  <div className="projectNameCont font-electro">
                    <h5 className="title">Wild West</h5>
                    <p className="text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn">
                      Go to the collection
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
          {/*  */}
          <div className="objective__cont">
            <h3 className="font-electro objective">MAIN OBJECTIVES</h3>
            <p>
              <span>01</span> Bridge other block to do to below
            </p>
            <p>
              <span>02</span> Create a wallpaper other block to do to below
            </p>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
