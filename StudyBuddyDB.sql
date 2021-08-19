--CREATE DATABASE StudyBuddyDB

--USE StudyBuddyDB

--CREATE TABLE QandA(
--[QId] int NOT NULL Primary Key identity (1,1),
--[Question] NVARCHAR(100) NOT NULL,
--[Answer] NVARCHAR(100) NOT NULL
--);

--CREATE TABLE Favorites(
--[QID] int NOT NULL foreign key references QandA(QId),
--[UserName] NVARCHAR(30) NOT NULL Foreign Key references Users(UserName),
--Primary Key (QId, UserName)
--);

--CREATE TABLE Users(
--[UserName] NVARCHAR(30) NOT NULL Primary Key,
--[Email] NVARCHAR(30)
--)

--INSERT INTO QandA (Question, Answer)
--VALUES 
--('Question1','Answer1'),
--('Question2','Answer2'),
--('Question3','Answer3'),
--('Question4','Answer4'),
--('Question5','Answer5')

--INSERT INTO Users([UserName])
--Values
--('User1'),
--('User2')





