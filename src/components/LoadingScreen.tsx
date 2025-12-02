import { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [resourcesLoaded, setResourcesLoaded] = useState(0);
  const [totalResources, setTotalResources] = useState(0);

  const loadingTexts = [
    'Initializing...',
    'Loading assets...',
    'Preparing components...',
    'Finalizing...',
    'Welcome aboard!'
  ];

  useEffect(() => {
    let loadingComplete = false;
    
    // Check if document is already loaded
    if (document.readyState === 'complete') {
      setProgress(100);
      setTimeout(() => onLoadingComplete(), 500);
      return;
    }

    // Track document loading states
    const updateProgress = () => {
      if (loadingComplete) return;

      let currentProgress = 0;

      // Base progress from document ready state
      if (document.readyState === 'loading') {
        currentProgress = 10;
        setLoadingText(loadingTexts[0]);
      } else if (document.readyState === 'interactive') {
        currentProgress = 40;
        setLoadingText(loadingTexts[1]);
      } else if (document.readyState === 'complete') {
        currentProgress = 70;
        setLoadingText(loadingTexts[2]);
      }

      // Add progress from images and other resources
      const images = document.querySelectorAll('img');
      const totalImages = images.length;
      let loadedImages = 0;

      if (totalImages > 0) {
        images.forEach((img) => {
          if (img.complete) {
            loadedImages++;
          }
        });
        
        const imageProgress = (loadedImages / totalImages) * 30;
        currentProgress += imageProgress;
      } else {
        currentProgress += 30; // No images to load
      }

      // Update loading text based on progress
      if (currentProgress >= 20 && currentProgress < 50) {
        setLoadingText(loadingTexts[1]);
      } else if (currentProgress >= 50 && currentProgress < 80) {
        setLoadingText(loadingTexts[2]);
      } else if (currentProgress >= 80 && currentProgress < 95) {
        setLoadingText(loadingTexts[3]);
      } else if (currentProgress >= 95) {
        setLoadingText(loadingTexts[4]);
      }

      setProgress(Math.min(currentProgress, 100));
      setResourcesLoaded(loadedImages);
      setTotalResources(totalImages);

      // Complete loading when everything is ready
      if (currentProgress >= 100) {
        loadingComplete = true;
        setTimeout(() => {
          onLoadingComplete();
        }, 800);
      }
    };

    // Initial check
    updateProgress();

    // Listen for document ready state changes
    const handleReadyStateChange = () => updateProgress();
    document.addEventListener('readystatechange', handleReadyStateChange);

    // Listen for window load event (all resources including images, stylesheets, etc.)
    const handleWindowLoad = () => {
      setProgress(100);
      setLoadingText(loadingTexts[4]);
      loadingComplete = true;
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    };
    window.addEventListener('load', handleWindowLoad);

    // Listen for image load events
    const handleImageLoad = () => updateProgress();
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageLoad); // Count failed loads too
      }
    });

    // Fallback timeout (in case something gets stuck)
    const fallbackTimeout = setTimeout(() => {
      if (!loadingComplete) {
        setProgress(100);
        setLoadingText(loadingTexts[4]);
        setTimeout(() => onLoadingComplete(), 500);
      }
    }, 10000); // 10 second maximum

    return () => {
      document.removeEventListener('readystatechange', handleReadyStateChange);
      window.removeEventListener('load', handleWindowLoad);
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
      clearTimeout(fallbackTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Aviation-themed logo */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 animate-spin-slow">
            <Plane className="w-16 h-16 text-blue-400 mx-auto transform rotate-45" />
          </div>
          <div className="w-20 h-20 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">
          ADRIAAN DIMATE
        </h1>

        {/* Subtitle */}
        <p className="text-blue-300 text-lg md:text-xl mb-8 font-light">
          Pilot • Developer • Quality Assurance Professional
        </p>

        {/* Loading text */}
        <p className="text-white/80 text-sm md:text-base mb-6 h-6">
          {loadingText}
        </p>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-white/20 rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/60 text-xs">{Math.round(progress)}%</p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1 mt-6">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};