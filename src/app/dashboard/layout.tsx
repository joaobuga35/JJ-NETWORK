import { DashProvider } from "@/contexts/dashContext";

export default function DashLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <><DashProvider>{children}</DashProvider></>
    );
  }
  