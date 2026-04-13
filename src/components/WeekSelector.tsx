import React from "react";
import { Calendar, ArrowRight, Home } from "lucide-react";
import Link from "next/link";

interface WeekSelectorProps {
  weeks: string[];
  basePath: string;
  backPath?: string;
  title?: string;
}

const WeekSelector: React.FC<WeekSelectorProps> = ({ weeks, basePath, backPath = "/", title }) => {
  const visibleWeeks = weeks.filter((w) => w !== "week69");
  const resolvedTitle = title ?? `Select a Week to ${basePath.includes("/quiz") ? "Take Test" : "Practice"}`;

  return (
    <div className="text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">{resolvedTitle}</h1>
          <Link href={backPath} className="text-gray-300 hover:text-white">
            <Home size={24} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleWeeks.map((week) => (
            <Link
              key={week}
              href={`${basePath}/${week}`}
              className="bg-gray-900/50 border-2 border-gray-700 p-4 hover:bg-gray-800 transition-colors duration-300 flex items-center justify-between"
            >
              <span className="flex items-center">
                <Calendar className="mr-2 text-gray-400" size={20} />
                <span className="text-lg">Week {week.replace("week", "")}</span>
              </span>
              <ArrowRight className="text-gray-400" size={20} />
            </Link>
          ))}

          {/* "All Weeks" link only in practice mode or quiz mode if desired */}
          {basePath.includes("/quiz") && (
            <Link
              href={`${basePath}/all`}
              className="bg-blue-600 text-white p-4 hover:bg-blue-700 transition-colors duration-300 flex items-center justify-between"
            >
              <span className="flex items-center">
                <Calendar className="mr-2" size={20} />
                <span className="text-lg">All Weeks</span>
              </span>
              <ArrowRight size={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeekSelector;
