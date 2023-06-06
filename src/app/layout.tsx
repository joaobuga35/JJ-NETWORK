import "./styles/header.css";
import "./styles/card.css";
import "./styles/forms.css";
import "./styles/globals.css";
import { AuthProvider } from "@/contexts/authContext";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
