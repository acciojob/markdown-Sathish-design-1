import React, { useState } from "react";
import { marked } from "marked";

function MarkdownEditor() {
  const [text, setText] = useState("# Hello World");

  return (
    <div className="container">
      <textarea
        className="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write Markdown here..."
      />

      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      />
    </div>
  );
}

export default MarkdownEditor;
