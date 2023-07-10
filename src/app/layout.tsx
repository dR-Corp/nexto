import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/Sidebar"
import { Inter } from "next/font/google"
import { Footer } from "@/components/Footer"
import "./globals.css"
import Image from 'next/image'
// import { useEffect } from "react";


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Envistats",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <script src="/assets/plugins/jquery/jquery.min.js" defer></script>
        <script src="/assets/plugins/bootstrap/js/bootstrap.bundle.min.js" defer></script>
        <script src="/assets/plugins/chart.js/Chart.min.js" defer></script>
        <script src="/assets/dist/js/adminlte.min.js" defer></script>
        <script src="/assets/dist/js/demo.js" defer></script>
        <script src="/assets/package/dist/sweetalert2.all.min.js" defer></script>
        <script src="/assets/plugins/datatables/jquery.dataTables.min.js" defer></script>
        <script src="/assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js" defer></script>
        <script src="/assets/plugins/datatables-responsive/js/dataTables.responsive.min.js" defer></script>
        <script src="/assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js" defer></script>
      </head>

      <body className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed">
          <div className="wrapper">

            <div className="preloader flex-column justify-content-center align-items-center">
              <Image
                  src="/Assets/dist/img/log2.png"
                  alt="Logo"
                  className="animation__shake"
                  width="150"
                  height="150"
              />
              <h1 className="h1 text-success">EnviStats</h1>	
            </div>

            <Navbar />

            <Sidebar />

            <div className="content-wrapper">
              
              <section className="content">
                <div className="container-fluid">
                  {children}
                </div>
              </section>
                
            </div>

            <Footer />

            <aside className="control-sidebar control-sidebar-dark"></aside>

          </div>

          <script src="/assets/plugins/jquery/jquery.min.js" defer></script>
          <script src="/assets/plugins/jquery-ui/jquery-ui.min.js" defer></script>
          <script src="/assets/plugins/bootstrap/js/bootstrap.bundle.min.js" defer></script>
          <script src="/assets/plugins/chart.js/Chart.min.js" defer></script>
          <script src="/assets/plugins/sparklines/sparkline.js" defer></script>
          <script src="/assets/plugins/jqvmap/jquery.vmap.min.js" defer></script>
          <script src="/assets/plugins/jqvmap/maps/jquery.vmap.usa.js" defer></script>
          <script src="/assets/plugins/jquery-knob/jquery.knob.min.js" defer></script>
          <script src="/assets/plugins/moment/moment.min.js" defer></script>
          <script src="/assets/plugins/daterangepicker/daterangepicker.js" defer></script>
          <script src="/assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js" defer></script>
          <script src="/assets/plugins/summernote/summernote-bs4.min.js" defer></script>
          <script src="/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js" defer></script>
          <script src="/assets/dist/js/adminlte.js" defer></script>
          <script src="/assets/package/dist/sweetalert2.all.min.js" defer></script>
          <script src="/assets/plugins/datatables/jquery.dataTables.min.js" defer></script>
          <script src="/assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js" defer></script>
          <script src="/assets/plugins/datatables-responsive/js/dataTables.responsive.min.js" defer></script>
          <script src="/assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js" defer></script>

      </body>

    </html>
  )
}