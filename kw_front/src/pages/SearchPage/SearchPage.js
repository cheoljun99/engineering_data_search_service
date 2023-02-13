import Search from "./Search";
import Description from "./Description";
import Output from "./Output";
import { useState } from "react";
function SearchPage() {
  const [searchIndex, setSearchIndex] = useState("");
  const [highlightIndex, setHighlightIndex] = useState("");

  console.log(highlightIndex);

  const [output, setOutput] = useState([]);

  return (
    <div class="flex flex-col  w-[100vw] h-[80vh]">
      <Description />
      <Search
        searchIndex={searchIndex}
        setSearchIndex={setSearchIndex}
        setOutput={setOutput}
        output={output}
        setHighlightIndex={setHighlightIndex}
      />
      <Output
        output={output}
        setOutput={setOutput}
        highlightIndex={highlightIndex}
      />
    </div>
  );
}

export default SearchPage;
