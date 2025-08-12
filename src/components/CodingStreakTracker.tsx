"use client";
import React, { useState, useEffect } from "react";
import { GitCommit, Flame } from "lucide-react";
import { getGitHubStreak } from "@/app/actions";

const CodingStreakTracker = () => {
  const [currentStreak, setCurrentStreak] = useState(0);
  const [animatedStreak, setAnimatedStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const streak = await getGitHubStreak();
      setCurrentStreak(streak);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading && currentStreak > 0) {
      let start = 0;
      const end = currentStreak;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 60);

      const timer = setInterval(() => {
        start += increment;
        setAnimatedStreak(Math.min(Math.floor(start), end));
        if (start >= end) {
          setAnimatedStreak(end);
          clearInterval(timer);
        }
      }, 16); // ~60fps

      return () => clearInterval(timer);
    }
  }, [currentStreak, isLoading]);

  if (isLoading) {
    return (
      <div className="flex items-center gap-3 text-gray-400">
        <GitCommit className="w-4 h-4" />
        <div className="h-4 w-32 bg-gray-800 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 text-gray-300">
      <Flame className="w-4 h-4 text-orange-400" />
      <span className="text-sm">
        <span className="text-purple-400 font-medium">
          {animatedStreak} days
        </span>{" "}
        coding streak
      </span>
    </div>
  );
};

export default CodingStreakTracker;
