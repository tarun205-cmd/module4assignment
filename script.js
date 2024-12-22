// Wrap the helloSpeaker in an IIFE
(function (global) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose helloSpeaker to the global object (window or global in Node.js)
  global.helloSpeaker = helloSpeaker;
})(typeof window !== "undefined" ? window : global);

// Wrap the byeSpeaker in an IIFE
(function (global) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose byeSpeaker to the global object (window or global in Node.js)
  global.byeSpeaker = byeSpeaker;
})(typeof window !== "undefined" ? window : global);

// Main script to loop through the names
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
