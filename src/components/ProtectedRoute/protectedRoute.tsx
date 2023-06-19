import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
    const { token } = useContext(AuthContext);
    const router = useRouter();
    if (!token) {
        router.push("/"); 
        return null; 
      }
    
      return <>{children}</>;
}
