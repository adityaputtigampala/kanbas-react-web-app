import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <div>
      <BsSearch />
      <input
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}