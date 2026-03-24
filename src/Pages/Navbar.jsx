import { Link } from "react-router-dom";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { useUser } from "@clerk/react";
const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg ">
        <div className="container-fluid">
          <h4 className="navbar-brand text-white">MyApp</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav text-white ">
              {/* <li className="nav-item ">
                <Link to="/" className="nav-link active text-white">
                  Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="getproduct/" className="nav-link text-white">
                  Products
                </Link>
              </li>
              {isSignedIn ? (
                <li className="nav-item">
                  <Link to="/form" className="nav-link text-white">
                    Add Products
                  </Link>
                </li>
              ) : (
                ""
              )}
              {isSignedIn ? (
                <li className="nav-item">
                  <Link to="/addcategory" className="nav-link text-white">
                    Add Category
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            <div className="d-flex">
              <Show when="signed-out">
                <SignInButton />
                <SignUpButton />
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
