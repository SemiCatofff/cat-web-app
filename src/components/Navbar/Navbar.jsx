import React, { useEffect, useRef } from "react";

const Navbar = () => {
  const buttonContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const bodyRef = useRef(null);

  //   useEffect(() => {
  //     const buttonContainer = buttonContainerRef.current;
  //     const overlay = overlayRef.current;
  //     const body = bodyRef.current;

  //     const toggleClass = () => {
  //       buttonContainer.classList.toggle("active");
  //       overlay.classList.toggle("open");
  //       body.classList.toggle("active");
  //     };

  //     buttonContainer.addEventListener("click", toggleClass);

  //     // Clean up the event listener when the component unmounts
  //     return () => {
  //       buttonContainer.removeEventListener("click", toggleClass);
  //     };
  //   }, []);

  useEffect(() => {
    const buttonContainer = buttonContainerRef.current;
    const overlay = overlayRef.current;
    const body = bodyRef.current; // Ensure there is an element for this ref in your component.

    const toggleClass = () => {
      buttonContainer?.classList.toggle("active");
      overlay?.classList.toggle("open");
      body?.classList.toggle("active");
    };

    buttonContainer?.addEventListener("click", toggleClass);

    return () => {
      buttonContainer?.removeEventListener("click", toggleClass);
    };
  }, []);

  return (
    <>
      <div className="w-full px-4">
        <div className="flex justify-between ">
          <a href="/" className=" z-40">
            <img src={""} alt="Logo" className="w-full" />
          </a>
          <div id="menuToggle  z-10">
            <div ref={buttonContainerRef} class="button_container1 z-30">
              <span class="top1"></span>
              <span class="middle"></span>
              <span class="bottom1"></span>
            </div>

            <div ref={overlayRef} class="overlay mt-0">
              <div class="nav">
                <div className="flex justify-end px-4 w-full text-white">
                  <div className="col2 text-right">
                    {" "}
                    <ul>
                      <div className="nav-para text-2xl mb-4 mt-4">
                        <a className="lala  relative " href="/anarchy">
                          Explore
                        </a>
                      </div>
                      <div className="nav-para text-2xl mb-4 mt-4">
                        <a className="lala  relative " href="/anarchy">
                          Create Challenge
                        </a>
                      </div>
                      <div className="nav-para text-2xl mb-4 mt-4">
                        <a className="lala  relative " href="/anarchy">
                          Join Challenge
                        </a>
                      </div>
                      <div className="nav-para text-2xl mb-4 mt-4">
                        <a className="lala  relative " href="/anarchy">
                          My Profile
                        </a>
                      </div>
                      <div className="nav-para text-2xl mb-4 mt-4">
                        <a className="lala  relative " href="/anarchy">
                          Invite Friend
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
