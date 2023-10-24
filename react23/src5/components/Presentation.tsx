import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Presentation = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/src5/assets/page1/SveltePresentation.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

    return (
      <div style={{ padding: 20 }}>
        <h2>Presentation</h2>
        <ReactMarkdown children={content} />
      </div>
    );
  }

  export default Presentation;