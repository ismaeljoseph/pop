import * as React from "react";
import "./field.css";

const Field = ({ content, title, separator }) => {
  if (!content || (Array.isArray(content) && content.length === 0)) {
    return <div />;
  }

  let str = Array.isArray(content) ? content.join(", ") : content;
  str = str.replace(new RegExp('\u{92}', 'g'), `'`);
  
  if (separator) {
    str = replaceAll(str, separator, "\n");
  }

  return (
    <div id={title} className="field">
      <h3>{title} </h3>
      <p>{str}</p>
    </div>
  );
};

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

export default Field;
