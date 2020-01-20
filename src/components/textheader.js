import React from "react";

const Textcontainer = {
  //   border: "1px solid black",
  position: "absolute",
  top: "30%",
  zIndex: "1000"
};

function Textheader() {
  function typeWriter(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  // Type Method
  typeWriter.prototype.type = function() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txthead">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  };

  // Init On DOM Load
  document.addEventListener("DOMContentLoaded", init);

  // Init App
  function init() {
    const txtElement = document.querySelector(".txthead");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new typeWriter(txtElement, words, wait);
  }
  return (
    <div id="wrapper-website">
      <div className="container-fluid" style={Textcontainer}>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div>
            <h2 className="text-light text-center">
              Hello! I'm a software engineer
            </h2>
          </div>
          <div>
            <h2 className="text-light text-center">
              focus on
              <span
                className="txthead "
                data-wait="3000"
                data-words='["Front End Development"]'
              />
            </h2>
          </div>
          <div>
            <h3 className="text-light text-center">
              Based in Cologne, Germany
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textheader;
