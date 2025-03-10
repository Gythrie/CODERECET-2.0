import LandingPage from "./pages/landing"
import Countdown from "./pages/countdown"
import AboutUs from "./pages/aboutus"
import Prize from "./pages/prize"
import Footer from "./pages/Footer"
import Gallery from "./pages/gallery"
import RefreshReboot from "./pages/refreshreboot"

function App() {
  return (
    <div className="flex flex-col bg-custom-black">
    <LandingPage/>
    <Countdown/>
    <RefreshReboot/>
    <AboutUs/>
    <Prize/>
    <Gallery/>
    <Footer/>
    </div>

  )
}

export default App
