import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
