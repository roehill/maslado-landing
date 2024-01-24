import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Maslado - twórz, udostępniaj, zarabiaj",
  description: "Przyjazna i przejrzysta aplikacja do prowadzenia biznesu fotograficznego.  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <div className="container">
          <Navbar />
          <div className="wrapper">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
