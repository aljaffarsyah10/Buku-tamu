import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
// import AuthProvider from "@/components/AuthProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import AdminNavbar from "@/components/AdminNavbar";
import AdminSideNav from "@/components/AdminSidenav";

import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Guest Book",
  description: "Guest Book Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalProvider>
      {/* <AuthProvider> */}
        <html lang="en">
          <body>
            <AdminNavbar />
            {/* <AdminSideNav /> */}
            <div>{children}</div>
            {/* <Footer /> */}
            <ToastContainer />
          </body>
        </html>
      {/* </AuthProvider> */}
    </GlobalProvider>
  );
}