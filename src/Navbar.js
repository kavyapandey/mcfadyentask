import { BiSearchAlt2, BiUser } from "react-icons/bi";
import { BsCartDash } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        MYCOMPANY.COM
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link">
              THE EDIT <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">NEW ARRIVALS</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">DESIGNERS</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">CLOTHING</a>
          </li>

          <li class="nav-item active">
            <a class="nav-link">SHOES</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">BAGS</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">ACCESSORIES</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">JEWELLERY</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">BEAUTY</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link">HOME</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <BiSearchAlt2 style={{ marginRight: "10px" }} />
          <BsCartDash style={{ marginRight: "10px" }} />
          <BiUser style={{ marginRight: "10px" }} />
        </form>
      </div>
    </nav>
  );
};
