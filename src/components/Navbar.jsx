import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

function Navbar({ setPage }) {
  return (
    <nav
      style={{
        background: "#222",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <button onClick={() => setPage("home")}>
        <FaHome style={{ marginRight: "8px" }} />
        Home
      </button>

      <button onClick={() => setPage("about")}>
        <FaInfoCircle style={{ marginRight: "8px" }} />
        About
      </button>

      <button onClick={() => setPage("contact")}>
        <FaPhone style={{ marginRight: "8px" }} />
        Contact
      </button>
    </nav>
  );
}

export default Navbar;
