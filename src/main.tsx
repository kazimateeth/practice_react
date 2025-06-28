import { StrictMode } from 'react' //バグを発見しやすくする
import { createRoot } from 'react-dom/client' //
import "./index.css"; //cssを読みこんで全体にスタイルを適用
import { App } from "./App"; //Appコンポーネント
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

