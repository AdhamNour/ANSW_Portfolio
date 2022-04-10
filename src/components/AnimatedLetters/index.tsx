import "./index.scss";
import { FunctionComponent } from "react";

interface AnimatedLettersProps {
  letterClass: string;
  strArray: string[];
  idx: number;
}

const AnimatedLetters: FunctionComponent<AnimatedLettersProps> = ({
  letterClass,
  strArray,
  idx,
}) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
