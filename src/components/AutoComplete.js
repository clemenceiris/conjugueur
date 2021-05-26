import React, { useState } from "react";
import './Autocomplete.css';
import AutoCompleteItem from "./AutoCompleteItem";

const AutoComplete = () => {

  const [isVisible, setVisibility] = useState(false);

  const showSuggestion = () => setVisibility(true);

  const hideSuggestion = () => setVisibility(false);

  return (
      <div style={{ height: "100%"}}>
          <input
           type="text"
           name="search"
           className="search-bar"
           autocomplete="off"
           onClick={showSuggestion}
          />

          <div className={`search-result`}>
            <ul className="list-group">
              <AutoCompleteItem />
              <AutoCompleteItem />
              <AutoCompleteItem />
            </ul>
          </div>
      </div>
  );
}

export default AutoComplete;
