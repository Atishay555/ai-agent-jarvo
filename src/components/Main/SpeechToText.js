
export const startSpeechToText = (callback) => {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Speech recognition is not supported in this browser.");
    return;
  }

  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = false; 
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    callback(transcript);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
  };

  recognition.start();
};
