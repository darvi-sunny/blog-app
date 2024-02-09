import GeneralNavbar from "./components/GeneralNavbar";
import "./globals.css";
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <div id="rootlayout" className="max-w-3xl mx-auto p-4">
          <GeneralNavbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );

}