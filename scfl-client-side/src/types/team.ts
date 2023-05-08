
export interface Team {
    team_id: string;
    team_name: string;
    home_city: string;
    team_abrv: string;
    conference: string;
    color_1: string;
    color_2: string;
    color_3: string;
    color_4?: string;
}

export interface TeamDisplay {
    team_id?: string;
    team_name: string;
    home_city?: string;
    team_abrv?: string;
    conference?: string;
    color_1: string;
    color_2: string;
    color_3: string;
    color_4?: string;
}