import React from "react";
import { SearchInput } from "./styles";
import { GetIcon } from "../../../icons";

function Search({ theme, placeholder, value, onChange }) {
  return (
    <SearchInput theme={theme} className={value.length > 0 && "active"}>
      <GetIcon icon="search" />
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </SearchInput>
  );
}
export default Search;
