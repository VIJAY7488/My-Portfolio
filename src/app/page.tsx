"use client";

import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import MainContent from "@/components/MainContent";
import React, { useState, useEffect } from "react";


const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingScreen /> : <MainContent />}
    </div>
  );
};

export default App;
