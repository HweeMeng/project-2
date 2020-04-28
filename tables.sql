-- database name is expensetracker

CREATE TABLE IF NOT EXISTS users(
id SERIAL PRIMARY KEY,
user_id TEXT,
password TEXT
);