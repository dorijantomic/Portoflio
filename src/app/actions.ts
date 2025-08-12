"use server";

export async function getGitHubStreak() {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/dorijantomic?y=last`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub contributions");
    }
    const data = await response.json();
    const contributions = data.contributions;
    let streak = 0;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    let yesterdayIndex = -1;
    for (let i = contributions.length - 1; i >= 0; i--) {
      const date = new Date(contributions[i].date);
      date.setHours(0, 0, 0, 0);
      if (date.getTime() === yesterday.getTime()) {
        yesterdayIndex = i;
        break;
      }
    }

    if (yesterdayIndex === -1) {
      const lastContributionDate = new Date(
        contributions[contributions.length - 1].date
      );
      lastContributionDate.setHours(0, 0, 0, 0);
      const diffTime = Math.abs(
        yesterday.getTime() - lastContributionDate.getTime()
      );
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 1) {
        return 0;
      }
    }

    if (yesterdayIndex !== -1) {
      for (let i = yesterdayIndex; i >= 0; i--) {
        if (contributions[i].count > 0) {
          streak++;
        } else {
          break;
        }
      }
    }

    return streak;
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return 0;
  }
}

export async function getGitHubContributions() {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/dorijantomic?y=last`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub contributions");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return { contributions: [] };
  }
}
