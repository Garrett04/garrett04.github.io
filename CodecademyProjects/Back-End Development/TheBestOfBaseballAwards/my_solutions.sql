-- Heaviest Hitters

SELECT 
	AVG(people.weight), 
	teams.name, 
	batting.yearid 
FROM people 
INNER JOIN batting 
	ON people.playerid = batting.playerid
INNER JOIN teams
	ON batting.team_id = teams.id
GROUP BY 
	teams.name,
	batting.yearid
ORDER BY
	AVG(people.weight) 
	DESC;

-- Shortest Sluggers

SELECT
	ROUND(AVG(people.height), 2) AS "average height of players",
  teams.name AS "name of the team",
  batting.yearid AS "year"
FROM people
JOIN batting
	ON people.playerid = batting.playerid
JOIN teams
	ON batting.team_id = teams.id
GROUP BY 
	2, 3
ORDER BY
	1 ASC;

-- Biggest Spenders

SELECT
	SUM(salaries.salary) AS "total salary",
  teams.name AS "name of the team",
  salaries.yearid AS "year"
FROM salaries
LEFT JOIN teams
	ON teams.teamid = salaries.teamid
  AND teams.yearid = salaries.yearid
GROUP BY 2, 3
ORDER BY 1 DESC;

-- Most Bang For Their Buck in 2010

SELECT
	ROUND(SUM(salaries.salary)/teams.w),
  teams.w,
  teams.name,
  salaries.yearid
FROM salaries
LEFT JOIN teams
	ON teams.teamid = salaries.teamid
  AND teams.yearid = salaries.yearid
WHERE teams.yearid = 2010
GROUP BY 
	3, 4, teams.w
ORDER BY
	SUM(salary)/teams.w ASC;

-- Priciest Starter


SELECT
	people.namegiven AS "player name",
	salaries.salary/pitching.g AS "cost per game",
  salaries.yearid AS "year",
  pitching.g AS "games"
FROM salaries
JOIN pitching
	ON salaries.playerid = pitching.playerid
  AND salaries.yearid = pitching.yearid
  AND salaries.teamid = pitching.teamid
JOIN people
	ON salaries.playerid = people.playerid
WHERE pitching.g > 10
ORDER BY
	2 DESC;



