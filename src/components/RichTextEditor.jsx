import React, { useRef } from 'react'
import JoditEditor from 'jodit-react'

const RichTextEditor = ({setValue}) => {
	const editor = useRef(null)
	
  return (
	<div>
		  <h1>Editor here</h1>
		  <JoditEditor ref={editor} onChange={(content)=>setValue(content)}/>
	</div>
  )
}

export default RichTextEditor

// detailed config

// import React, { useRef } from "react";
// import JoditEditor from "jodit-react";

// const config = {
//   buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
// };

// const RichTextEditor = ({ initialValue, getValue }) => {
//   const editor = useRef(null);

//   return (
//     <JoditEditor
//       ref={editor}
//       value={initialValue}
//       config={config}
//       tabIndex={1}
//       //   onBlur={(newContent) => getValue(newContent)}
//       onChange={(newContent) => getValue(newContent)}
//     />
//   );
// };

// export default RichTextEditor;
