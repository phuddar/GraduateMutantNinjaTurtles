SELECT * 
FROM Referees
INNER JOIN Game 
WHERE Game.Game_ID = ?
ON Referee.Referee_ID = Game.Referee_1;