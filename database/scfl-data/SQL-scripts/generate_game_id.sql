SELECT * FROM scfl.game_results;
ALTER TABLE game_results
ADD COLUMN 
	game_id VARCHAR(64) GENERATED ALWAYS AS(
		CONCAT(
			IF(away_rank > 0, CONCAT('#', away_rank, ' '), ''),
			away_team,
			IF(neutral_site = 1, ' vs. ', ' @ '),
            IF(home_rank > 0, CONCAT('#', home_rank, ' '), ''),
            home_team,
            ' ',
            away_score,
            '-',
            home_score,
            ' ',
            IF(overtime = 1, '(OT) ', ''),
            game,
            ' ',
            season     
        )
    
    )