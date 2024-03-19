import { useSelector } from "react-redux";
import Login from "../Login/Login";
import { Appbar, Navbar } from "../../components";

function Main(props) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div className="w-screen h-screen flex justify-center items-center relative bg-[#ECECEC] md:max-w-[350px]">
      {/* Overlay with reduced opacity for the background image */}
      <div
        className="absolute inset-0 bg-hero bg-cover bg-center"
        style={{ opacity: 0.16 }}
      ></div>
      <div className="absolute z-40 top-5 w-full">
        <Navbar />
      </div>
      {/* Content container */}
      <div className="flex flex-col w-full h-full shadow-lg overflow-hidden relative z-10 mt-40">
        <div className="overflow-auto">{props.children}</div>
      </div>

      {/* Appbar with higher z-index to ensure it's on top of the background overlay */}
      <div className="z-20">
        <Appbar />
      </div>

      <div
        className="absolute inset-0 bg-hero bg-cover bg-center"
        style={{ opacity: 0.16 }}
      ></div>
    </div>
  );
}

export default Main;
