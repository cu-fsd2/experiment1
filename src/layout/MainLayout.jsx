import Navbar from "../components/Navbar";

function MainLayout({ children, setPage }) {
  return (
    <>
      <Navbar setPage={setPage} />
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </>
  );
}

export default MainLayout;
