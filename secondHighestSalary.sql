-- Table: Employee
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | id          | int  |
-- | salary      | int  |
-- +-------------+------+
-- id is the primary key (column with unique values) for this table.
-- Each row of this table contains information about the salary of an employee.
-- Write a solution to find the second highest salary from the Employee table. If there is no second highest salary, return null (return None in Pandas).
-- The result format is in the following example.
WITH RankedSalaries AS (
  SELECT salary,
    DENSE_RANK() OVER (
      ORDER BY salary DESC
    ) AS salary_rank
  FROM Employee
)
SELECT MAX(salary) as SecondHighestSalary
FROM RankedSalaries
where salary_rank = 2