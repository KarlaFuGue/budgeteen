import React from "react";
import { useRef } from "react";

function NavBar() {
  const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("show");
  //};
  return (
    <header className="header">
      <section className="hero is-large ">
        <div className="hero-head">
          <nav className=" wrapper navbar is-transparent">
            <div>
              <div className="navbar-brand">
                <span className="navbar-burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu" ref={navRef}>
                <div className="navbar is-align-items-flex-end">
                  <a className="navbar-item is-active" href="#navbarMenuHeroB">
                    <strong>Home</strong>
                  </a>
                  <a className="navbar-item is-active" href="#about">
                    <strong>About</strong>
                  </a>
                  <a className="navbar-item is-active color" href="#Tracker">
                    <strong>Expenses Tracker</strong>
                  </a>
                  <a className="navbar-item is-active color" href="#Contact">
                    <strong>Contact</strong>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          {/* //<button onClick={showNavbar}></button> */}
        </div>
        <div className="hero-body">
          {/* <div className="container has-text-centered"></div> */}
        </div>
      </section>
      <div className="container is-fluid">
        <div className="notification is-primary" id="container-slogan">
          <h5 className="has-text-centered">
            Teaching you to take control of your dreams
          </h5>
        </div>
      </div>
    </header>
  );
}
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});
// // const NavBar = () => {
// //   return (
// //     <Router>
//       <div>
//         <section className="hero is-info is-large mt-4">
//           <div className="hero-head">
//             <nav className="navbar">
//               <div className="container">
//                 <div className="navbar-brand">
//                   <a className="navbar-item">
//                     <img
//                       src="budgeting/src/images/resource-logo.png"
//                       alt="Logo"
//                     />
//                   </a>
//                   <span className="navbar-burger" data-target="navbarMenuHeroB">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                   </span>
//                 </div>
//                 <div id="navbarMenuHeroB" className="navbar-menu">
//                   <div className="navbar-end">
//                     <a className="navbar-item is-active" href="/About">
//                       About
//                     </a>
//                     <a className="navbar-item is-active" href="/Balance">
//                       Expenses Tracker
//                     </a>
//                     <a className="navbar-item is-active" href="/Mortgage">
//                       Mortgage
//                     </a>
//                     <span className="navbar-item">
//                       <a className="button is-info is-inverted">
//                         <span className="icon">
//                           <i className="fab fa-github"></i>
//                         </span>
//                         <span>More</span>
//                       </a>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </div>
//           {/* <div>
//             <Switch>
//               <Route path="/About">
//                 <About />
//               </Route>
//               <Route path="/Balance">
//                 <Balance />
//               </Route>
//               <Route path="/Mortgage">
//                 <Mortgage />
//               </Route>
//               <Route path="/more">
//                 <more />
//               </Route>
//             </Switch>
//           </div> */}
//           <div className="hero-body">
//             <div className="container has-text-centered">
//               <p className="title">Title</p>
//               <p className="subtitle">Subtitle</p>
//             </div>
//           </div>
//         </section>
//       </div>
// //     </Router>
// //   );
// // };

export default NavBar;
