import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <NavBar/>
      {children}
      <Footer/>
    </div>
  );
}
