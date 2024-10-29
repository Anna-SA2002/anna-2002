import "@/styles/globals.css";

// 共通部分でナビとフッターの呼び出し
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
    return (
    <div className="App">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
