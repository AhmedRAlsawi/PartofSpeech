import React from "react";

function HomePage() {
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      <div className="col-12 col-md-6">
        <img
          className="w-100 rounded"
          src="https://www.english-efl.com//wp-content/uploads/2018/12/parts-of-speech.png"
          alt="PoS"
        ></img>
      </div>
      <div className="col-12 col-md-5 d-flex align-items-center">
        <div className="h4 p-2 rounded border border-success">
          <p>
            In English language, words can be categorized according to their
            syntactic functions, which is known as "Part of Speech". Examples of
            part of speech: (noun, verb, adjective, ...)
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
