import "../(site)/styles/app.scss";
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import Footer from "./components/layout/footer";
import "nprogress/nprogress.css";
import { UserContextProvider } from "../contexts/user";
import Header from "./components/layout/header";

export const metadata = {
  title: "BD Under Attack - Bangladesh Under Attack",
  description: "BD Under Attack - Bangladesh Under Attack.",
};


export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/logo/favicon.png" />
      <UserContextProvider>
        <body className="font-poppins">
          <Header />
          {children}
          <Footer />
        </body>
      </UserContextProvider>
    </html>
  );
}
