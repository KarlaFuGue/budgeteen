import React from "react";
import { useRef } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./About";
// import Balance from "./Balance";
// import Mortgage from "./Mortgage";

function NavBar() {
  const logo = require("../images/company-logo.png");
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
              {/* <div className="navbar-brand">
                <a className="navbar-item">
                  <img src={require("../images/resource-logo.png")} alt="" />
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div> */}
              <div id="navbarMenuHeroB" className="navbar-menu" ref={navRef}>
                <div className="navbar is-align-items-flex-end">
                  <a className="navbar-item is-active" href="#navbarMenuHeroB">
                    <strong>Home</strong>
                  </a>
                  <a className="navbar-item is-active" href="#about">
                    <strong>About</strong>
                  </a>
                  <a className="navbar-item is-active" href="#Tracker">
                    <strong>Expenses Tracker</strong>
                  </a>
                  <a className="navbar-item is-active" href="#Contact">
                    <strong>Contact</strong>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          {/* //<button onClick={showNavbar}></button> */}
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <img className="comapny-img" src={logo} />
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
