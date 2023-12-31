import MainNavbar from "../navbar/Navbar";


export default function Layout({ children }) {
  return (
    <div>
      <div>
        <MainNavbar />
      </div>
      <div>{children}</div>
      <div></div>
    </div>
  );
}
