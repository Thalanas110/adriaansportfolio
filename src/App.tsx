import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Aviation from "./pages/Aviation";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import QualityAssurance from "./pages/QualityAssurance";
import NotFound from "./pages/NotFound";
import { Snowfall } from "@/components/Snowfall";
import { SnowPile } from "@/components/SnowPile";
import { LoadingScreen } from "@/components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          <BrowserRouter>
            {/* Snowfall Effect */}
            <Snowfall />

            {/* Snow Pile at Bottom */}
            <SnowPile />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/aviation" element={<Aviation />} />
              <Route path="/software-development" element={<SoftwareDevelopment />} />
              <Route path="/quality-assurance" element={<QualityAssurance />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};
export default App;
