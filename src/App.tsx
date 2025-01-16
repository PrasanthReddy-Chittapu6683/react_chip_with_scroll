import React from 'react';

function App() {
  // Sample data for chips
  const chips = [
    "React", "TypeScript", "JavaScript", "Node.js", "Python", "Java", "Go", 
    "asd","asd","zxczxc","werwerew","Rubysss", "PHP", "C++", "Rust", "Swift", "Kotlin", "Dart", "SQL",
    "Ruby", "PHP", "C++", "Rust", "Swift", "Kotlin", "Dart", "SQL",
    "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "Azure", "GCP"
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Technologies</h1>
        
        {/* Chip container with horizontal scroll */}
        <div className="bg-white rounded-lg shadow-md p-4">
          {/* This wrapper enables horizontal scroll */}
          <div className="overflow-x-auto">
            {/* Grid container for exactly 2 rows */}
            <div className="grid grid-rows-2 auto-rows-max gap-2 w-max" 
                 style={{ gridAutoFlow: 'column' }}>
              {chips.map((chip, index) => (
                <div
                  key={index}
                  className="flex items-center px-3 py-1 rounded-full 
                           bg-blue-100 text-blue-700 text-sm font-medium
                           whitespace-nowrap"
                >
                  {chip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;