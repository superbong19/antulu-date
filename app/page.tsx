'use client'
import FormLogin from "@/components/FormLogin";
import Header from "@/components/Header";
import Information from "@/components/Information";
import { logout } from "@/lib/action/logout";
import useAuth from "@/lib/hook/useAuth";
export default function Home() {
  const isAuthenticated = useAuth();

  return (

    <>
      <Header />

      {isAuthenticated ? (
        <div className="overflow-hidden">
          <Information />
          <button onClick={logout}>Đăng xuất</button>
        </div>

      ) : (
        <FormLogin />
      )}
    </>
  );
}
