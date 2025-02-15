import React, { useState, useEffect, useRef } from "react";
import { Button, Typography, Box } from "@mui/material";

const SpeechToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Speech Recognition API not supported in this browser. Please use Google Chrome.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let finalTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript + " ";
      }
      setTranscript(finalTranscript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognitionRef.current = recognition;
  }, []);

  const startRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const downloadTextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([transcript], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "transcription.txt";
    document.body.appendChild(element);
    element.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcript).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <Box
      textAlign="center"
      sx={{
        background: "linear-gradient(to bottom, #ADD8E6, #F0F8FF)", // Softer gradient
        minHeight: "100vh",
        paddingTop: "50px",
      }}
    >
      <Typography variant="h4" gutterBottom color="black">
        🎙️ Speech-to-Text App
      </Typography>

      {/* Mic Image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/2989/2989846.png" 
        alt="Microphone"
        style={{ width: "100px", height: "100px", marginBottom: "20px" }}
      />

      <Box>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={startRecording} 
          disabled={isRecording} 
          sx={{ marginRight: "10px" }}
        >
          Start Recording
        </Button>

        <Button 
          variant="contained" 
          color="secondary" 
          onClick={stopRecording} 
          disabled={!isRecording}
        >
          Stop Recording
        </Button>
      </Box>

      <Typography variant="h6" sx={{ marginTop: "20px" }}>
        Transcription:
      </Typography>

      <Box
        sx={{
          background: "white",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          width: "60%",
          margin: "auto",
          minHeight: "50px",
        }}
      >
        {transcript || "Start speaking to see text here..."}
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <Button variant="outlined" onClick={downloadTextFile} sx={{ marginRight: "10px" }}>
          Download Text
        </Button>

        <Button variant="outlined" onClick={copyToClipboard}>
          Copy to Clipboard
        </Button>
      </Box>
    </Box>
  );
};

export default SpeechToText;
