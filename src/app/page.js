"use client"
import Home from "@/page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
    
  );
}
