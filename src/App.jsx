import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
            import Demo from "./pages/Demo";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tools from "./pages/Tools";
import Tutorials from "./pages/Tutorials";
import Prompts from "./pages/Prompts";
import Compare from "./pages/Compare";
import News from "./pages/News";
import Community from "./pages/Community";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import { AuthProvider } from "./context/AuthContext";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider >
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/tools" element={<Tools />} />
          <Route path="/services/tutorials" element={<Tutorials />} />
          <Route path="/services/prompts" element={<Prompts />} />
          <Route path="/services/compare" element={<Compare />} />
          <Route path="/services/news" element={<News />} />
          <Route path="/services/community" element={<Community />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound />} />
  
  <Route path="/demo" element={<Demo />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
