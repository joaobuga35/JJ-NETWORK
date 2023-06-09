import "./styles/header.css";
import "./styles/card.css";
import "./styles/forms.css";
import "./styles/globals.css";
import { AuthProvider } from "@/contexts/authContext";
import { DashProvider } from "@/contexts/dashContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <DashProvider>{children}</DashProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
