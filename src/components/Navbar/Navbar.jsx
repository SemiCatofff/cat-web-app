import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate()
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-blue-500 text-white p-4">
      <div className="container flex flex-row items-center justify-center mx-auto text-center gap-x-4">
        <div className="w-10 h-10 rounded-lg bg-white" onClick={()=>{navigate("./explore")}}>x</div>
        <div className="w-10 h-10 rounded-lg bg-white" onClick={()=>{navigate("./")}}>x</div>
        <div className="w-10 h-10 rounded-lg bg-white" onClick={()=>{navigate("./create")}}>x</div>
      </div>
    </footer>
  );
}

export default Navbar;
