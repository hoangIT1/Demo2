import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MarkAnthonyPage from "./pages/MarkAnthony/MarkAnthony";
import CompetitionPage from "./pages/Competition/Competition";
import NationalDirectorsPage from "./pages/NationalDirectors/NationalDirectors";
import ContestantsPage from "./pages/Contestants/Contestants";
import PressPage from "./pages/Press/Press";
import BlogPostDetail from "./pages/BlogPostDetail/BlogPostDetail";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home"; // Có thể đặt title cho trang chủ
        metaDescription = "Welcome to the main page.";
        break;
      // THÊM CASE CHO TRANG MỚI
      case "/mark-anthony":
        title = "Mark Anthony";
        metaDescription = "Information about Mark Anthony.";
        break;
      case "/national-directors":
        title = "National Directors";
        metaDescription = "Our official National Directors for the Mister International Competition.";
        break;
      case "/contestants":
        title = "2025 Contestants";
        metaDescription = "Meet the contestants for the 2025 Mister International competition.";
        break;
      case "/press":
        title = "Press";
        metaDescription = "Mister International Organization Press Site.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mark-anthony" element={<MarkAnthonyPage />} />
      <Route path="/competition" element={<CompetitionPage />} />
      <Route path="/national-directors" element={<NationalDirectorsPage />} />
      <Route path="/contestants" element={<ContestantsPage />} />
      <Route path="/press" element={<PressPage />} />
      <Route path="/press/:postId" element={<BlogPostDetail />} />
    </Routes>
  );
}
export default App;