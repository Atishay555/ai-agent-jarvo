import React, { useContext } from "react";
import "./main.css";
import { assests } from "../../assets/assests/assests";
import { MyContext } from "../../Context/context";
import { startSpeechToText } from "./SpeechToText";
import ReactMarkdown from "react-markdown";


const Main = () => {
  const { hide, inputRef, HandleOnClick, prevPrompts, result, loader } =
    useContext(MyContext);

  return (
    <div className="main">
      <div className="nav">
        <p>Jarvo!!</p>
        <img src={assests.user} alt="" />
      </div>

      <div className="main-container">
        <div className="scrollable-content">
          {hide ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, PeP :)</span>
                </p>
                <p>How can I help you Today?</p>
              </div>

           <div className="cards">
              <div
                className="card"
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.value = "Suggest beautiful places to see on upcoming road trip";
                    HandleOnClick();
                  }
                }}
              >
                <p>Suggest beautiful places to see on upcoming road trip</p>
                <img src={assests.compass} alt="" />
              </div>

              <div
                className="card"
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.value = "Briefly summarize this concept: urban planning";
                    HandleOnClick();
                  }
                }}
              >
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assests.bulb} alt="" />
              </div>

              <div
                className="card"
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.value = "Brainstorm team bonding activities for our work retreat";
                    HandleOnClick();
                  }
                }}
              >
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assests.message} alt="" />
              </div>

              <div
                className="card"
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.value = "Tell me about React js and React native";
                    HandleOnClick();
                  }
                }}
              >
                <p>Tell me about React js and React native</p>
                <img src={assests.angle} alt="" />
              </div>
            </div>

            </>
          ) : (
            <>
              <div className="question">
                <img src={assests.user} alt="User" />
                <p>{prevPrompts[0]}</p>
              </div>

              {loader ? (
                <div className="loader">
                  <img src={assests.gemini} alt="Gemini" />
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <div className="question">
                  <img src={assests.gemini} alt="Gemini" />
                <div className="result-font prose prose-invert max-w-none">
                <ReactMarkdown>{result}</ReactMarkdown>
                </div>

                </div>
              )}
            </>
          )}
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input ref={inputRef} type="text" placeholder="Enter a Prompt" />
            <div>
              {/* <img src={assests.search_web} alt="" /> */}
              <img
                onClick={() => {
                  startSpeechToText((text) => {
                    if (inputRef.current) {
                      inputRef.current.value = text;   // put speech text into input field
                      HandleOnClick();                 // automatically trigger send
                    }
                  });
                }}
                src={assests.mic}
                alt="mic"
              />


              <img onClick={HandleOnClick} src={assests.send} alt="" />
            </div>
          </div>
          <div className="bottom-info">
            <p>
              Jarvo!! may display inaccurate info, including about people, so
              double-check its responses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
