import { Fragment, FunctionComponent, useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = (props) => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const firstNameArray: string[] = [..."dham"];
  const SecondNameArray: string[] = [..."our"];
  const jobArray: string[] = [..."Full Stack Developer"];
  const helloArray: string[] = [..."Hello"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <Fragment>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray}
              idx={15 + firstNameArray.length - helloArray.length}
            />{" "}
            <br />{" "}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[..."I'm"]}
              idx={15 + firstNameArray.length}
            ></AnimatedLetters>{" "}
            <span className="first-latter">A</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={firstNameArray}
              idx={15 + firstNameArray.length}
            />
            <span className="first-latter secondary">N</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={SecondNameArray}
              idx={15 + firstNameArray.length + SecondNameArray.length}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15 + firstNameArray.length + SecondNameArray.length}
            />
          </h1>
          <h2>Frontend Developer / Backend Developer / Mobile Developer </h2>
          <Link to={"/contact"} className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </Fragment>
  );
};

export default Home;
