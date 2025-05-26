import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";

// Portfolio components
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import LoadingScreen from "@/components/portfolio/LoadingScreen";

// 3D components
import Scene from "@/components/3d/Scene";

// Hooks and stores
import { usePortfolio } from "@/lib/stores/usePortfolio";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function PortfolioContent() {
  const { isLoading, setLoading } = usePortfolio();
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false);
      setShowCanvas(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3D Background Scene */}
      {showCanvas && (
        <div className="fixed inset-0 z-0">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance"
            }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Navigation */}
      <Navigation />

      {/* Content Sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PortfolioContent />
    </QueryClientProvider>
  );
}

export default App;
