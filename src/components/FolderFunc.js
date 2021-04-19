import { useState } from 'react';

const Headers = ({ titles, currentTab, selectTab }) => {
  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    selectTab(idx);
  };

  const tabs = titles.map((title, idx) => {
    const headerClass = idx === currentTab ? "active" : "";

    return (
      <li key={idx} id={idx} onClick={handleClick} className={headerClass}>
        {title}
      </li>
    );
  });

  return <ul className="tab-header">{tabs}</ul>;
};
const FolderFunc = (props) => {
    const [currentTab, setCurrentTab] = useState(0);
    const folder = props.folders[currentTab];
    const titles = props.folders.map((folder) => folder.title)

    return (
      <section>
        <h1>Tabs</h1>
        <div className="tabs">
          <Headers
            titles={titles}
            currentTab={currentTab}
            selectTab={(num) => {setCurrentTab(num)}}
          />
          <div className="tab-content">{folder.content}</div>
        </div>
      </section>
    );
}

export default FolderFunc;
