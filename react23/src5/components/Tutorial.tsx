import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Tutorial = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src5/assets/page2/SvelteTutorial.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

    return (
      <div style={{ padding: 20 }}>
        <h2>Tutorial</h2>
        <ReactMarkdown children={content} />
      </div>
    );
  }

  export default Tutorial;