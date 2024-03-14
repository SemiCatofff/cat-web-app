import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <footer className="absolute bottom-0 mb-4 h-10 bg-black rounded-xl px-2">
      <div className="flex  h-full justify-center items-center gap-20">
        <button className="flex flex-col items-center">
          <span>➕</span>
        </button>
        <button className="flex flex-col items-center">
          <span>➕</span>
        </button>
        <button className="flex flex-col items-center">
          <span>➕</span>
        </button>
        <button className="flex flex-col items-center">
          <span>➕</span>
        </button>
      </div>
    </footer>
  );
}

export default Navbar;