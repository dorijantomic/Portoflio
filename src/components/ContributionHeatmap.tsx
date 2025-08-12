"use client";
import React, { useState, useEffect } from "react";
import { getGitHubContributions } from "@/app/actions";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const ContributionHeatmap = () => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tooltip, setTooltip] = useState<{ content: string; x: number; y: number; visible: boolean }>({ content: '', x: 0, y: 0, visible: false });
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGitHubContributions();
      setContributions(data.contributions);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const getLevelColor = (level: ContributionDay['level']) => {
    switch (level) {
      case 0:
        return "bg-gray-800";
      case 1:
        return "bg-purple-400";
      case 2:
        return "bg-purple-600";
      case 3:
        return "bg-purple-800";
      case 4:
        return "bg-purple-900";
      default:
        return "bg-gray-800";
    }
  };

  if (isLoading) {
    return <div className="h-40 w-full bg-gray-800 rounded animate-pulse"></div>;
  }

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  const today = new Date();
  const yearAgo = new Date(today);
  yearAgo.setFullYear(today.getFullYear() - 1);

  const contributionsByDate = contributions.reduce((acc, day) => {
    acc[day.date] = day;
    return acc;
  }, {} as Record<string, ContributionDay>);

  const days = [];
  for (let d = new Date(yearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const dateString = d.toISOString().split('T')[0];
    days.push(contributionsByDate[dateString] || { date: dateString, count: 0, level: 0 });
  }

  const weeks = [];
  let week: (ContributionDay | null)[] = Array(7).fill(null);
  days.forEach(day => {
    const dayOfWeek = new Date(day.date).getDay();
    week[dayOfWeek] = day;
    if (dayOfWeek === 6) {
      weeks.push(week);
      week = Array(7).fill(null);
    }
  });
  if (!week.every(d => d === null)) {
    weeks.push(week);
  }
  
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthLabels = weeks.reduce((acc, week, i) => {
    const firstDayOfMonth = week.find(d => d && new Date(d.date).getDate() === 1);
    if (firstDayOfMonth) {
      acc.push({ month: monthNames[new Date(firstDayOfMonth.date).getMonth()], index: i });
    }
    return acc;
  }, [] as { month: string; index: number }[]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, day: ContributionDay) => {
    const cell = e.currentTarget;
    const container = cell.closest(".relative");

    if (container) {
      const containerRect = container.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();
      setTooltip({
        content: `${day.count} contributions`,
        x: cellRect.left - containerRect.left + cellRect.width / 2,
        y: cellRect.top - containerRect.top,
        visible: true,
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 glass p-4 rounded-lg" ref={containerRef}>
      <h2 className="text-lg font-bold text-white">{totalContributions} contributions in the last year</h2>
      <div className="relative">
        <div className="flex gap-1 text-xs text-gray-400 mb-2">
            {monthLabels.map(m => <span key={m.month} style={{ position: 'absolute', left: `${m.index * 0.875}rem` }}>{m.month}</span>)}
        </div>
        <div className="flex gap-1 mt-8">
            <div className="grid grid-flow-col gap-0.5">
            {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="grid grid-flow-row gap-0.5">
                {week.map((day, dayIndex) => (
                    <div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm ${day ? getLevelColor(day.level) : 'bg-gray-900'}`}
                    onMouseEnter={(e) => day && handleMouseEnter(e, day)}
                    onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
                    />
                ))}
                </div>
            ))}
            </div>
        </div>
        {tooltip.visible && (
          <div className="absolute bg-gray-900 text-white text-xs rounded py-1 px-2 pointer-events-none -translate-x-1/2" style={{ left: tooltip.x, top: tooltip.y - 20 }}>
            {tooltip.content}
          </div>
        )}
      </div>
      <div className="flex justify-end items-center gap-2 text-xs text-gray-400 mt-2">
        <span>Less</span>
        <div className="w-3 h-3 rounded-sm bg-gray-800" />
        <div className="w-3 h-3 rounded-sm bg-purple-400" />
        <div className="w-3 h-3 rounded-sm bg-purple-600" />
        <div className="w-3 h-3 rounded-sm bg-purple-800" />
        <div className="w-3 h-3 rounded-sm bg-purple-900" />
        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionHeatmap;
