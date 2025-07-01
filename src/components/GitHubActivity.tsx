import { useState, useEffect } from "react";
import { Github, LoaderCircle } from "lucide-react";

const GitHubActivity = () => {
  const [numContributions, setNumContributions] = useState<number>(0);
  const [activityData, setActivityData] = useState<{date: string, count: number, level: number}[][]>([]);
  const [monthIndices, setMonthIndices] = useState<Record<number, number>>({});
  const [dayIndices, setDayIndices] = useState<number[]>([]);
  const DAYS_BACK = window.matchMedia("(max-width: 767px)").matches ? 112 : 256;

  
  useEffect(() => {

    (async () => {
      const response = await fetch("https://github-contributions-api.jogruber.de/v4/leonrode?y=last");
      const data = await response.json();
      const contributions = data.contributions.slice(-DAYS_BACK, data.contributions.length);
      let weeks = [];
      for (let i = 0; i < DAYS_BACK; i += 7) {
        weeks.push(contributions.slice(i, i + 7));
      }

      let count = contributions.reduce((acc, curr) => acc += curr.count, 0);

      // we find the first week index that representes a new month
      const m = {}
      for (let i = 0; i < weeks.length - 1; i++) {
        if (new Date(weeks[i][0].date).getUTCMonth() !== new Date(weeks[i + 1][0].date).getUTCMonth()) {
          m[i] = new Date(weeks[i + 1][0].date).getUTCMonth();
        }
      }

      // find the index of the day of the first contribution
      const firstContribution = contributions[0];
      const firstContributionDay = new Date(firstContribution.date).getUTCDay();

      let ind = [];
      for (let i = 0; i < 7; i++) {
        ind.push((firstContributionDay + i) % 7);
      }
      setDayIndices(ind);

      setNumContributions(count)
      setMonthIndices(m);
      setActivityData(weeks);

    })();
  }, []);

  const getActivityColor = (level: number) => {
    const colors = [
      "bg-accent", // No activity
      "bg-green-900", // Low activity
      "bg-green-700", // Medium-low activity
      "bg-green-500", // Medium-high activity
      "bg-green-400", // High activity
    ];
    return colors[level] || colors[0];
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return activityData.length > 0 ? (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Github className="h-5 w-5" />
        <span className="text-md text-[--muted-foreground]">leonrode - {numContributions} contributions in the last {DAYS_BACK === 256 ? "2⁸" : DAYS_BACK} days</span>
      </div>
      
      <div className="bg-[--card] rounded-lg px-5 pb-6 pt-8 border border-[--border]">
        
        {/* Activity grid */}
        <div className="flex gap-1">
          {/* Day labels */}
          <div className="flex flex-col gap-1 mr-2">
            {dayIndices.map((day, index) => (
              <div
                key={day}
                className="h-[13.5px] flex items-center text-xs text-[--muted-foreground]"
                style={{ opacity: index % 2 === 0 ? 1 : 0 }}
              >
                {index % 2 === 0 ? days[day] : ""}
              </div>
            ))}
          </div>
          
          {/* Activity squares */}
          <div className="flex gap-1">
                {activityData.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1 relative">
                    <p className="text-xs text-[--muted-foreground] absolute -top-5 left-0">
                      {Object.keys(monthIndices).includes(weekIndex.toString()) ? months[monthIndices[weekIndex]] : ""}
                    </p>
                    {week.map((activity, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-3 h-3 m-[0.7px] rounded-sm ${getActivityColor(activity.level)} hover:ring-2 hover:ring-gray-600 transition-all cursor-pointer`}
                      title={`${activity.count} ${activity.count === 1 ? "contribution" : "contributions"} on ${months[new Date(activity.date).getUTCMonth()]} ${new Date(activity.date).getUTCDate()}`}
                    />
                    ))}
                  </div>
                ))}
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center mt-4 text-xs text-[--muted-foreground]">
          <span>Less</span>
          <div className="flex gap-1 mx-8">
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
  ) : (

    <div className="flex items-center justify-center">
      <LoaderCircle className="h-8 w-8 animate-spin" />
    </div>
  );
};

export default GitHubActivity;
