import React, { useContext } from "react";
import "./main.css";
import { assests } from "../../assets/assests/assests";
import { MyContext } from "../../Context/context";

const Main = () => {
  const { hide, inputRef, HandleOnClick, prevPrompts, result, loader } =
    useContext(MyContext);

  return (
    <div className="main">
      <div className="nav">
        <p>Ai Agent!!</p>
        <img src={assests.user} alt="" />
      </div>

      <div className="main-container">
        {hide ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, PeP :)</span>
              </p>
              <p>How can I help you Today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on upcoming road trip</p>
                <img src={assests.compass} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assests.bulb} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assests.message} alt="" />
              </div>
              <div className="card">
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
                <div className="result-font">{result}</div>
              </div>
            )}
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input ref={inputRef} type="text" placeholder="Enter a Prompt" />
            <div>
              <img src={assests.add_img} alt="" />
              <img src={assests.mic} alt="" />
              <img onClick={HandleOnClick} src={assests.send} alt="" />
            </div>
          </div>
          <div className="bottom-info">
            <p>
              Ai Agent!! may display inaccurate info, including about people, so
              double-check its responses. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
