import Quill from "quill";
import ImageResize from "quill-image-resize-module-react";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

Quill.register("modules/imageResize", ImageResize);

function Editor({ setContent }) {
  var modules = {
    toolbar: [
      [{ size: [] }],
      [{ align: [] }, "direction"],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "super" }, { script: "sub" }],
      ["blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
    ],

    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize", "Toolbar"],
    },
  };

  return <ReactQuill theme="snow" onChange={setContent} modules={modules} />;
}

export default Editor;
