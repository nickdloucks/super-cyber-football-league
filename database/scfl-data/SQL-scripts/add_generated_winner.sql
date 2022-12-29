SELECT * FROM scfl.game_results;
ALTER TABLE game_results 
ADD COLUMN
	winner VARCHAR(16) GENERATED ALWAYS AS (
		IF(away_score = home_score, 'TIE',
			IF(away_score > home_score, away_team, home_team)
        )
    ) STORED
    