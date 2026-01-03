import React, { useState, useEffect } from 'react';
import marked from 'marked'; // You will need to install this package for Markdown conversion

const MarkdownEditor = () => {
    const [markdownText, setMarkdownText] = useState('');
    const [previewText, setPreviewText] = useState('');

    // Update the preview text whenever markdownText changes
    useEffect(() => {
        setPreviewText(marked(markdownText)); // Convert Markdown to HTML
    }, [markdownText]);

    const handleChange = (event) => {
        setMarkdownText(event.target.value); // Update markdownText state
    };

    return (
        <div className="app">
            <div className="input-area">
                <textarea
                    className="textarea"
                    value={markdownText}
                    onChange={handleChange}
                    placeholder="Enter Markdown text here..."
                />
            </div>
            <div className="preview-area">
                <h2>Preview</h2>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: previewText }}
                />
            </div>
        </div>
    );
};

export default MarkdownEditor;
