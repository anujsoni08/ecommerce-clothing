import React, { useState } from "react";

import { sections } from "../../constants/directory.data";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
  const [sectionList, setSectionList] = useState(sections);

  return (
    <div className="directory-menu">
      {sectionList.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
