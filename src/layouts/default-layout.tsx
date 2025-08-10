// src/layouts/DefaultLayout.tsx
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
