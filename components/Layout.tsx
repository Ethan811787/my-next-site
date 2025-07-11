import NavBar from "./NavBar";

//this is a layout page to allow s navigation menu on all pages, not just the home page
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}