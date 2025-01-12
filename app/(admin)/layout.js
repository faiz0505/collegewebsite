import DashboardNavbar from "../components/admin/DashboardNavbar";

export default function RootLayout({ children }) {
  return (
    <>
      <DashboardNavbar />
      <main className="bg-stone-100 py-10">{children}</main>
    </>
  );
}
