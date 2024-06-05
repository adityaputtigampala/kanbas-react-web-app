import { BsGripVertical, BsSearch } from "react-icons/bs";
import { BsClipboardMinus } from "react-icons/bs";


export default function Clipboard() {
  return (
    <div>
      <BsGripVertical className="me-2 fs-3"/>
      <BsClipboardMinus className="green-icon" />
    </div>
  );
}