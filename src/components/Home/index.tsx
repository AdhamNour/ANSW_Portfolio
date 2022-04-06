import { FunctionComponent } from "react";
import "./index.scss";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = (props) => {
  return (
    <div className="container home-page">
      <div className="text-zone" >
        <h1>
          Hello <br /> I am <span>A</span>dham <span>N</span>our
          <br />
          Web Developer
        </h1>
        <h2>Frontend Developer / Backend Developer / Mobile Developer </h2>

      </div>
    </div>
  );
};

export default Home;
