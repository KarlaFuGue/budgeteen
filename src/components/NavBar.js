import React from "react";
import { useRef } from "react";
<<<<<<< HEAD
=======
//import logo from "../images/resource-logo.png";
>>>>>>> 299b5d8e6c688d1e0c06e1a21a49de3e238b1d04
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./About";
// import Balance from "./Balance";
// import Mortgage from "./Mortgage";

function NavBar() {
  const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("show");
  //};
  return (
    <header>
      <section className="hero is-info is-large mt-4">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
<<<<<<< HEAD
                  <img
                    src="budgeting/src/images/resource-logo.png"
                    alt="Logo"
                  />
=======
                  <img src={require("../images/resource-logo.png")} alt="" />
>>>>>>> 299b5d8e6c688d1e0c06e1a21a49de3e238b1d04
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu" ref={navRef}>
                <div className="navbar-end">
                  <a className="navbar-item is-active" href="/About">
                    About
                  </a>
                  <a className="navbar-item is-active" href="/Balance">
                    Expenses Tracker
                  </a>
                  <a className="navbar-item is-active" href="/Mortgage">
                    Mortgage
                  </a>
                  <span className="navbar-item">
                    <a className="button is-info is-inverted">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>More</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
          {/* //<button onClick={showNavbar}></button> */}
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Title</p>
            <p className="subtitle">Subtitle</p>
          </div>
        </div>
      </section>
    </header>
  );
}

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
