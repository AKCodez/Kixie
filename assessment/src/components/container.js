import React, { useState } from "react";
import "./stacked.css";
import StackedBarChart from "./stackedBarChart";


const allKeys = ["Open", "Won", "Lost"];

const colors = {
  "Open": "teal",
  "Won": "green",
  "Lost": "red"
};

function Container(props) {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <h2>Deals LeaderBoard  </h2>
      <StackedBarChart data={props.data} keys={keys} colors={colors} />

      <div className="fields">
        {allKeys.map(key => (
          <div key={key} className="field">
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={e => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter(_key => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Container;