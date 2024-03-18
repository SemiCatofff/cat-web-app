import menu from "../../assets/images/Menu.svg";
import bell from "../../assets/images/bell.svg";

function Appbar() {
  return (
    <header className="flex h-[56px] items-center justify-end gap-[11px] px-4">
      <img src={bell}></img>
      <img src={menu}></img>
    </header>
  );
}

export default Appbar;
