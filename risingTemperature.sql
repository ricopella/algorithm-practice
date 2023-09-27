-- Table: Weather
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | recordDate    | date    |
-- | temperature   | int     |
-- +---------------+---------+
-- id is the column with unique values for this table.
-- This table contains information about the temperature on a certain day.
-- Write a solution to find all dates' Id with higher temperatures compared to its previous dates (yesterday).
-- Return the result table in any order.
-- The result format is in the following example.
-- Example 1:
-- Input: 
-- Weather table:
-- +----+------------+-------------+
-- | id | recordDate | temperature |
-- +----+------------+-------------+
-- | 1  | 2015-01-01 | 10          |
-- | 2  | 2015-01-02 | 25          |
-- | 3  | 2015-01-03 | 20          |
-- | 4  | 2015-01-04 | 30          |
-- +----+------------+-------------+
-- Output: 
-- +----+
-- | id |
-- +----+
-- | 2  |
-- | 4  |
-- +----+
-- Explanation: 
-- In 2015-01-02, the temperature was higher than the previous day (10 -> 25).
-- In 2015-01-04, the temperature was higher than the previous day (20 -> 30).
-- FIRST SOLUTION USING CTE
# WITH PreviousTemp AS (
#   SELECT w1.id, 
#          (SELECT w2.temperature FROM Weather AS w2 
#           WHERE w2.recordDate < w1.recordDate AND w2.recordDate = DATE_SUB(w1.recordDate, INTERVAL 1 DAY)
#           ORDER BY w2.recordDate DESC LIMIT 1) AS prev_temp,
#          w1.temperature
#   FROM Weather AS w1
# )
# SELECT id FROM PreviousTemp
# WHERE prev_temp IS NOT NULL AND temperature > prev_temp;
-- SECOND SOLUTION USING JOIN
SELECT w1.id as "Id"
FROM Weather w1,
  Weather w2
WHERE DATEDIFF(w1.recordDate, w2.recordDate) = 1
  AND w1.temperature > w2.temperature;