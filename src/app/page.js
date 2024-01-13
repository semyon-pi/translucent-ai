import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import MainSection from "./components/section/MainSection"
import WideSection from "./components/wide-section/WideSection"

export default function Page() {
  return (
    <div className="">
      <Hero/>
      <MainSection dir='ltr' img="/imgs/2-translucent-green.png"/>
      <MainSection dir='rtl' img="/imgs/3-translucent-green.png"/>
      <MainSection dir='ltr' img="/imgs/15-translucent-green.png"/>
      <MainSection dir='rtl' img="/imgs/9-translucent-green.png"/>
      <MainSection dir='ltr' img="/imgs/11-translucent-green.png"/>
      <WideSection/>
      <Footer/>
    </div>
  )
}