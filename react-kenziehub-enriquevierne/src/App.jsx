import { useState } from "react";
import { useForm } from "react-hook-form";
import { Route, Routes, Link } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard";
import { LoginPage } from "./pages/login";
import { NorFoundPage } from "./pages/notFound";
import { RegisterPage } from "./pages/register";


function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NorFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
