CREATE DATABASE IF NOT EXISTS gamesDB;
USE gamesDB;

-- DROP TABLE IF EXISTS Referees;
-- CREATE TABLE Referees(
--    Referee_ID int NOT NULL AUTO_INCREMENT,
--    fname varchar(255),
--    lname varchar(255) NOT NULL,
--    age int,
--    Referee_grade int,
--    Assignment_status varchar(255),
--    Referee_skill_rating int,
--    PRIMARY KEY(Referee_ID,lname)
-- );
-- DROP TABLE IF EXISTS Game;
-- CREATE TABLE Game(
--    Game_ID int NOT NULL AUTO_INCREMENT,
--    Game_Time time,
--    Game_Date date,
--    Game_Field varchar(255),
--    Referee_1 int,
--    Referee_2 int,
--    Referee_3 int,
--    Referee_4 int,
--    PRIMARY KEY(Game_ID),
--    FOREIGN KEY(Referee_1) REFERENCES Referees(Referee_ID),
--    FOREIGN KEY(Referee_2) REFERENCES Referees(Referee_ID),
--    FOREIGN KEY(Referee_3) REFERENCES Referees(Referee_ID),
--    FOREIGN KEY(Referee_4) REFERENCES Referees(Referee_ID)
-- );

-- insert into Referees (Referee_ID, fname, lname, age, Referee_grade, Assignment_status, Referee_skill_rating) values (1, 'Demott', 'Bolingbroke', 49, 4, false, 2);
-- insert into Referees (Referee_ID, fname, lname, age, Referee_grade, Assignment_status, Referee_skill_rating) values (2, 'Claudelle', 'Sigward', 83, 1, false, 7);
-- insert into Referees (Referee_ID, fname, lname, age, Referee_grade, Assignment_status, Referee_skill_rating) values (3, 'Winston', 'Jobe', 97, 5, false, 5);
-- insert into Referees (Referee_ID, fname, lname, age, Referee_grade, Assignment_status, Referee_skill_rating) values (4, 'Yancy', 'Cressingham', 74, 5, true, 2);
-- insert into Referees (Referee_ID, fname, lname, age, Referee_grade, Assignment_status, Referee_skill_rating) values (5, 'Bette-ann', 'Kingsmill', 67, 5, false, 8);
-- insert into Referees (Referee_ID, fname, lname, age, Referee_grade, Assignment_status, Referee_skill_rating) values (6, 'Alida', 'Deble', 88, 2, false, 2);
-- insert into Referees (Referee_ID, fname, lname, age, Referee_grade, Assignment_status, Referee_skill_rating) values (7, 'Rouvin', 'Zapata', 44, 2, false, 6);
-- insert into Referees (Referee_ID, fname, lname, age, Referee_grade, Assignment_status, Referee_skill_rating) values (8, 'Josey', 'Ivory', 38, 4, false, 4);
-- insert into Referees (Referee_ID, fname, lname, age, Referee_grade, Assignment_status, Referee_skill_rating) values (9, 'Gusta', 'Fitzharris', 53, 5, false, 8);
-- insert into Referees (Referee_ID, fname, lname, age, Referee_grade, Assignment_status, Referee_skill_rating) values (10, 'Mannie', 'O''Doireidh', 58, 3, true, 7);


-- SELECT * FROM Referees; 

-- insert into Game (Game_Time, Game_Date, Game_Field, Referee_1, Referee_2, Referee_3, Referee_4) values ('4:51 PM', '12/26/2020', 'mus', 1, null, null, null);
-- insert into Game (Game_Time, Game_Date, Game_Field, Referee_1, Referee_2, Referee_3, Referee_4) values ('12:13 AM', '11/19/2020', 'aliquam non', 9, 7, null, null);
-- insert into Game (Game_Time, Game_Date, Game_Field, Referee_1, Referee_2, Referee_3, Referee_4) values ('3:23 AM', '7/12/2021', 'nec euismod', 2, 9, null, null);
-- insert into Game (Game_Time, Game_Date, Game_Field, Referee_1, Referee_2, Referee_3, Referee_4) values ('7:03 PM', '9/24/2021', 'ut', null, null, null, null);
-- insert into Game (Game_Time, Game_Date, Game_Field, Referee_1, Referee_2, Referee_3, Referee_4) values ('2:12 AM', '10/27/2021', 'in', null, null, null, null);
-- insert into Game (Game_Time, Game_Date, Game_Field, Referee_1, Referee_2, Referee_3, Referee_4) values ('2:12 AM', '2022-01-11', 'in', null, null, null, null);
-- SELECT r.Referee_ID, r.fname, r.lname, r.age, r.Referee_Grade, r.Assignment_status,r.Referee_skill_rating 
--     FROM Referees AS r
--     INNER JOIN Game
--     ON r.Referee_ID = Game.Referee_1
--     WHERE Game.Game_ID = 1;
SELECT * 
FROM Game
WHERE Game_Date BETWEEN '2022-01-07' AND '2022-01-11';