import "./styles/header.css";
import "./styles/card.css";
import "./styles/forms.css";
import "./styles/globals.css";
import { AuthProvider } from "@/contexts/authContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon/favicon.ico" />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
