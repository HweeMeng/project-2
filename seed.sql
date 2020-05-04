-- seed users
INSERT INTO users (user_id, password) VALUES ('Hwee Meng', '4623f30b926198d4284b8b9b502f1717fc4161a977960219738de203bb699a96');
INSERT INTO users (user_id, password) VALUES ('Gael','77049f6f8893dd97f1fcdb996b970035ea456b4d63e107edf383809a1e26e884');
-- seed categories
INSERT INTO category (users_id, category) VALUES ('1','Food');
INSERT INTO category (users_id, category) VALUES ('1','Transport');
INSERT INTO category (users_id, category) VALUES ('1','Shopping');
INSERT INTO category (users_id, category) VALUES ('1','Luxury');
INSERT INTO category (users_id, category) VALUES ('1','Bubble Tea');
INSERT INTO category (users_id, category) VALUES ('2','Food');
INSERT INTO category (users_id, category) VALUES ('2','Groceries');
INSERT INTO category (users_id, category) VALUES ('2','Transport');
-- seed expenses
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','8','Lunch','1','2020-05-04');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','50','Top Up Ez-Link','2','2020-05-04');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','8','Lunch','1','2020-05-03');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','8','Extra Comfort Food','4','2020-05-03');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','8','Lunch','1','2020-05-02');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','8','Lunch','1','2020-05-01');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','8','Lunch','1','2020-04-30');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','8','Lunch','1','2020-04-29');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','8','Lunch','1','2020-04-28');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','8','Lunch','1','2020-04-27');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('1','10','LiHo','5','2020-04-27');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('2','8','Dinner','1','2020-05-04');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('2','8','Dinner','1','2020-05-03');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('2','8','Dinner','1','2020-05-02');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('2','8','Dinner','1','2020-05-01');
INSERT INTO expenses (users_id, amount, spending, category_id,date) VALUES ('2','8','Dinner','1','2020-04-30');