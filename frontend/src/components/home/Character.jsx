import { Link } from "react-router-dom";

function Character() {
  return (
    <>
      <div id="character">
        <div id="character-content">
          <h2>Characters</h2>

          <div className="character-title">
            <h3>
              Keiichi <br />
              Maebara
            </h3>

            <Link to="" className="normalBtn">
              Next
            </Link>
          </div>

          <div className="description">
            The protagonist of the story. <br />
            Though he is impatient and passionate, he is also indecisive. A
            character who seems to be stuck as the protagonist of a romance
            novel who is very shy towards girls. <br />
            I promise that he is not obedient. <br />
            I promise that he will be popular for some reason. <br />
            However, unfortunately this story is not a romance novel, so his
            character will surely be a disaster. <br />
            ...In many ways. <br />
          </div>
        </div>

        <div className="character-img"></div>

        <div className="character-background"></div>

        <div className="bg-deco-1"></div>
      </div>
    </>
  );
}

export default Character;
