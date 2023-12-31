import { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSabmit();
    }
  };

  const handleSabmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Поиск"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="btn"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={handleSabmit}
        >
          Поиск
        </button>
      </div>
    </div>
  );
}

export { Search };
