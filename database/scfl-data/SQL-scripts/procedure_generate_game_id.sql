DELIMITER $$
CREATE PROCEDURE GenerateGameId()
BEGIN
SELECT * FROM scfl.game_results;

ALTER TABLE scfl.game_results

ADD game_id VARCHAR(64) GENERATED ALWAYS as (

CONCAT(away_team, ' @ ', home_team, ' ', game, ' ', season, ': ', away_score, '-', home_score)
);
END $$
DELIMITER;