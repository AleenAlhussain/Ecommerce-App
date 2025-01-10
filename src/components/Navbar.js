// import React from "react";
// import { UilSignin } from '@iconscout/react-unicons'
// import { UilUserPlus } from '@iconscout/react-unicons'
// import { UilShoppingCartAlt } from '@iconscout/react-unicons'
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
//       <Link className="navbar-brand fw-bold fs-4 mx-2" to="/">
//         HW COLLECTIONS
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto mx-auto">
//           <li className="nav-item active">
//             <Link className="nav-link fs-5" to="/">
//               Home{" "}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link fs-5" to="/products">
//               Products
//             </Link>
//           </li>

//           <li className="nav-item">
//             <Link className="nav-link fs-5" to="/about">
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link fs-5" to="/contact">
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <div className="buttons mx-4">
//           <Link to="/login" className=" fs-5 btn btn-outline-dark ms-2">
//           <UilSignin size="30" color="black" />Login
//           </Link>
//           <Link to="/register" className=" fs-5 btn btn-outline-dark ms-2">
//           <UilUserPlus size="30" color="black" />Register
//           </Link>
//           <Link to="/cart" className=" fs-5 btn btn-outline-dark ms-2">
//           <UilShoppingCartAlt size="30" color="black" /> Cart(0)
//           </Link>
//         </div>
//       </div>
//     </nav>





//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import { UilSignin, UilUserPlus, UilShoppingCartAlt } from "@iconscout/react-unicons";

function Navbar({ cart }) {
  console.log("Cart in Navbar:", cart);  // This will help you debug

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto mx-auto">
          <li className="nav-item">
            <Link className="nav-link fs-5" to="/">
              Home
            </Link>
          </li>
        </ul>
        <div className="buttons mx-4">

        <Link to="/cart" className="btn btn-outline-dark ms-2">
            <UilShoppingCartAlt size="30" color="black" />
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
