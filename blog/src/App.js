import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Category from "./category";
import Contents from "./contents";

function App() {
  const [members, setMembers] = useState([
    { id: 0, name: "한PD" },
    { id: 1, name: "동PD" },
    { id: 2, name: "M형" },
  ]);

  const [tags, setTags] = useState([
    { id: 0, name: "감동" },
    { id: 1, name: "공포" },
    { id: 2, name: "전쟁" },
    { id: 3, name: "멜로" },
    { id: 4, name: "힐링" },
    { id: 5, name: "코믹" },
    { id: 6, name: "애니메이션" },
    { id: 7, name: "가족" },
  ]);

  const [formats, setFormats] = useState([
    { id: 0, name: "PodCast" },
    { id: 1, name: "YouTube" },
    { id: 2, name: "Hereum" },
  ]);

  return (
    <div className="app">
      <Header />
      <Category
        members={members}
        tags={tags}
        formats={formats}
        setMbr={setMembers}
        estTgs={setTags}
        setFmt={setFormats}
      />
    </div>
  );
}

export default App;
