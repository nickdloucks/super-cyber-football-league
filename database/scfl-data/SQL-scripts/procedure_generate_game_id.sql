DELIMITER $$
CREATE PROCEDURE GenerateGameId()
BEGIN
SELECT * FROM scfl.game_results;
-- DECLARE matchup_char VARCHAR(4);-- 
ALTER TABLE scfl.game_results

ADD game_id VARCHAR(64) GENERATED ALWAYS as (

SET matchup_char = ' @ '
IF neutral_site = 1 { 
	SET @matchup_char = ' vs. ' }
CONCAT(away_team, ' @ ', home_team, ' ', game, ' ', season, ': ', away_score, '-', home_score)
);
END $$
DELIMITER;