import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <footer className="fixed inset-x-0 bottom-0 mx-4 mb-4 h-20 bg-black p-4 shadow-md rounded-2xl">
      <div className="flex h-full justify-center items-center gap-20">
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
