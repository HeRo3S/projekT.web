import { Link } from "react-router-dom";

function Character() {
  var i = 1;
  var images = [];
  var data = [];
  var description = [];

  images[0] = require("../../images/keiichi.png");
  images[1] = require("../../images/rena.png");
  images[2] = require("../../images/mion.png");
  images[3] = require("../../images/satoko.png");
  images[4] = require("../../images/rika.png");

  data[0] = "Keiichi <br/>Maebara";
  data[1] = "Rena <br />Ryuugu";
  data[2] = "Mion <br />Sonozaki";
  data[3] = "Satoko <br />Houjou";
  data[4] = "Rika <br />Furude";

  description[0] =
    "The protagonist of the story. <br />Though he is impatient and passionate, he is also indecisive. A character who seems to be stuck as the protagonist of a romance novel who is very shy towards girls. <br /> I promise that he is not obedient. <br /> I promise that he will be popular for some reason. <br />However, unfortunately this story is not a romance novel, so his character will surely be a disaster. <br />...In many ways. <br />";
  description[1] =
    "Rena is the main heroine of this story. She’s a classmate of Keiichi’s.<br />She is quite interested in his everyday life, possibly because of an inherent urge to look after people.<br />She likes anything and everything she considers adorable, and this is also a very typical trait in a heroine.<br /> But that is also her greatest weakness...";
  description[2] =
    "Mion is one grade higher than Keiichi. She is the class representative.<br />She is the active class representative type, which is the second most common type.<br />She is a leader, someone who makes friends with everyone, regardless of gender or age. Because of her high-strung, easy-going, hyperactive personality, those around her never have to be bored.<br />Mion likes games of all kinds, be they card games, board games or video games.";
  description[3] =
    "A girl who is Keiichi's junior.<br />She is usually very polite, but because she is still young she sometimes has difficulty with grammar.<br /> However, behind her innocent exterior lies a personality that loves setting traps for other people. You could call her a trickster.<br />Even when she realizes her skills are insufficient, her smile never wavers.";
  description[4] =
    "Rika is Keiichi's junior and in the same school year as Satoko.<br />She is very quiet and reserved for her age, which makes her almost the polar opposite of Satoko. However, the two of them can often be found in each other’s company.<br /> Whenever Satoko is in tears after losing against Keiichi, it is Rika who cheers her up. When Satoko wins, Rika comforts Keiichi instead.<br />In fact, Rika comforts whomever is in need of comfort.<br />She seems happy with it.";

  function change() {
    document.getElementById("character-img").src = images[i];
    document.getElementById("character-name").innerHTML = data[i];
    document.getElementById("description").innerHTML = description[i];
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }

  return (
    <>
      <div id="character">
        <div id="character-content">
          <h2>Characters</h2>

          <div className="character-title">
            <h3 id="character-name">
              Keiichi <br />
              Maebara
            </h3>

            <button onClick={change} className="normalBtn">
              Next
            </button>
          </div>

          <div id="description">
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

        <img
          src={require("../../images/keiichi.png")}
          alt=""
          id="character-img"
        />

        <div className="character-background"></div>

        <div className="bg-deco-1"></div>
      </div>
    </>
  );
}

export default Character;
