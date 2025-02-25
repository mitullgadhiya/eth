import Footer from "@/components/Footer"
import Nav from "@/components/Nav"

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
