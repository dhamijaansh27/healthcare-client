import Navbar from "./Navbar";
import Footer from "./Footer";      

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1"
        style ={{ paddingTop: '80px'}}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;