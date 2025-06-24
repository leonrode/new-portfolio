
import { useState, useEffect } from "react";
import { Github } from "lucide-react";

const GitHubActivity = () => {
  const [activityData, setActivityData] = useState<number[][]>([]);

  // Generate mock GitHub activity data (7 days x 53 weeks = 371 days)
  useEffect(() => {
    const generateMockData = () => {
      const weeks = 53;
      const days = 7;
      const data: number[][] = [];
      
      for (let week = 0; week < weeks; week++) {
        const weekData: number[] = [];
        for (let day = 0; day < days; day++) {
          // Generate random activity levels (0-4)
          const activity = Math.floor(Math.random() * 5);
          weekData.push(activity);
        }
        data.push(weekData);
      }
      return data;
    };

    setActivityData(generateMockData());
  }, []);

  const getActivityColor = (level: number) => {
    const colors = [
      "bg-gray-100 dark:bg-gray-800", // No activity
      "bg-green-200 dark:bg-green-900", // Low activity
      "bg-green-300 dark:bg-green-700", // Medium-low activity
      "bg-green-400 dark:bg-green-500", // Medium-high activity
      "bg-green-500 dark:bg-green-400", // High activity
    ];
    return colors[level] || colors[0];
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Github className="h-5 w-5" />
        <span className="text-sm text-gray-600 dark:text-gray-400">alex.chen</span>
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        {/* Month labels */}
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
        
        {/* Activity grid */}
        <div className="flex gap-1">
          {/* Day labels */}
          <div className="flex flex-col gap-1 mr-2">
            {days.map((day, index) => (
              <div
                key={day}
                className="h-3 flex items-center text-xs text-gray-500 dark:text-gray-400"
                style={{ opacity: index % 2 === 0 ? 1 : 0 }}
              >
                {index % 2 === 0 ? day : ""}
              </div>
            ))}
          </div>
          
          {/* Activity squares */}
          <div className="flex gap-1">
            {activityData.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((activity, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-3 h-3 rounded-sm ${getActivityColor(activity)} hover:ring-2 hover:ring-gray-400 dark:hover:ring-gray-600 transition-all cursor-pointer`}
                    title={`${activity} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getActivityColor(level)}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubActivity;
