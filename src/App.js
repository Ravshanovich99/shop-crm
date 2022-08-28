import { useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <Sidebar sidebarOpen={sidebarOpen} onSidebarOpen={onSidebarOpen} />
    </div>
  );
}

export default App;
