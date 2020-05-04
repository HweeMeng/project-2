-- database name is expensetracker

CREATE TABLE IF NOT EXISTS users(
id SERIAL PRIMARY KEY,
user_id TEXT,
password TEXT
);

CREATE TABLE IF NOT EXISTS expenses(
id SERIAL PRIMARY KEY,
users_id INTEGER,
amount NUMERIC(12,2),
spending TEXT,
category_id INTEGER,
date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS category(
id SERIAL PRIMARY KEY,
users_id INTEGER,
category TEXT
);