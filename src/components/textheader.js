import React from "react";
import "./textHeader.css";

function Textheader() {
  // function typeWriter(txtElement, words, wait = 3000) {
  //   this.txtElement = txtElement;
  //   this.words = words;
  //   this.txt = "";
  //   this.wordIndex = 0;
  //   this.wait = parseInt(wait, 10);
  //   this.type();
  //   this.isDeleting = false;
  // }

  // // Type Method
  // typeWriter.prototype.type = function() {
  //   // Current index of word
  //   const current = this.wordIndex % this.words.length;
  //   // Get full text of current word
  //   const fullTxt = this.words[current];

  //   // Check if deleting
  //   if (this.isDeleting) {
  //     // Remove char
  //     this.txt = fullTxt.substring(0, this.txt.length - 1);
  //   } else {
  //     // Add char
  //     this.txt = fullTxt.substring(0, this.txt.length + 1);
  //   }

  //   // Insert txt into element
  //   this.txtElement.innerHTML = `<span class="txthead">${this.txt}</span>`;

  // Initial Type Speed
  // let typeSpeed = 300;

  // if (this.isDeleting) {
  //   typeSpeed /= 2;
  // }

  // If word is complete
  //   if (!this.isDeleting && this.txt === fullTxt) {
  //     // Make pause at end
  //     typeSpeed = this.wait;
  //     // Set delete to true
  //     this.isDeleting = true;
  //   } else if (this.isDeleting && this.txt === "") {
  //     this.isDeleting = false;
  //     // Move to next word
  //     this.wordIndex++;
  //     // Pause before start typing
  //     typeSpeed = 500;
  //   }

  //   setTimeout(() => this.type(), typeSpeed);
  // };

  // Init On DOM Load
  // document.addEventListener("DOMContentLoaded", init);

  // Init App
  function init() {
    // const txtElement = document.querySelector(".txthead");
    // const words = JSON.parse(txtElement.getAttribute("data-words"));
    // const wait = txtElement.getAttribute("data-wait");
    // // Init TypeWriter
    // new typeWriter(txtElement, words, wait);
  }
  return (
    // Create a new navbar only for home page
    <div id="container text-main-container">
      <div className="container-fluid text-inner-container">
        <div className="text-container">
          <p className="first-line-text text-light text-center">
            Hello! I'm a software engineer
          </p>

          <p className="second-line-text text-light text-center">
            focus on <span className="FEtext">Frontend Development</span>
            {/* <span
                className="txthead second-line-text"
                data-wait="3000"
                data-words='["Front End Development"]'
              /> */}
          </p>
          <p className="third-line-text text-light text-center">
            Based in Cologne, Germany
          </p>
        </div>
      </div>
    </div>
  );
}

export default Textheader;
