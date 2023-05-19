import { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😊": "Smiling",
  "🤨": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Love",
  "🔥": "Fire",
  "😒": "Annoyance",
  "💊": "Take a pill",
  "👑": "King",
  "🎶": "Music",
  "👍": "Like",
  "👎": "Dislike !",
  "😍": "I'm loving it !",
  "😎": "Classy !",
  "🤣": "Laugh out Loud !",
  "🙏": "Namaste",
  "👀": "Staring"
};

var emojis = Object.keys(emojiDict);

export default function App() {
  var [likeCounts, setLikeCounter] = useState(0);
  var [userInput, setUserInput] = useState("");
  function like() {
    setLikeCounter(likeCounts + 1);
  }
  function dislike() {
    button.style.display = "disabled";
    if (likeCounts > 0) {
      setLikeCounter(likeCounts - 1);
    }
  }

  function showMeaning(event) {
    var input = event.target.value;
    var meaning = emojiDict[input];
    if (input in emojiDict) {
      setUserInput(meaning);
    } else {
      setUserInput("Meaning not found !");
    }
  }

  function showMean(emoji) {
    setUserInput(emojiDict[emoji]);
  }

  return (
    <div className="App body">
      <h1
        style={{
          borderRadius: "2rem",
          padding: "1rem",
          backgroundColor: "#013220",
          color: "#FDA50F"
        }}
      >
        <span style={{ color: "#FEE227" }}>Know the Emoji !</span>
      </h1>
      <input onChange={showMeaning} />
      <output>{userInput} </output>
      <div className="emoji">
        {emojis.map((emoji) => {
          return (
            <span
              onMouseMoveCapture={() => showMean(emoji)}
              onClick={() => showMean(emoji)}
              style={{ cursor: "pointer", fontSize: "2rem", padding: "0.5rem" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <br />
      Have you liked this page ?
      <button
        style={{ fontSize: "1rem", margin: "0.5rem", borderRadius: "2rem" }}
        onClick={like}
      >
        Like 👍
      </button>
      <button
        style={{ fontSize: "1rem", margin: "0.5rem", borderRadius: "2rem" }}
        onClick={dislike}
      >
        Dislike 👎
      </button>
      <br />
      <br />
      You Liked : {likeCounts} times !
    </div>
  );
}

/*
 *
 * VISER -- View -> Interact -> State in event handler -> Render
 */
