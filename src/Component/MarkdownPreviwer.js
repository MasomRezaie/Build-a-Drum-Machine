// markdown previwe peoject
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

const initialMarkdown = `# Heading
## Sub-heading
[Link](https://example.com)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
\nNew line here after two spaces at the end of this line.`;

function MarkdownPreviwer() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <div id="heading">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="App">
        <textarea id="editor" value={markdown} onChange={handleChange} />
        <div id="preview">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default MarkdownPreviwer;
