export interface CastMovieDBResponse {
    id:   number;
    cast: any[];
    crew: MovieDBCast[];
}

export interface MovieDBCast {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: string;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    credit_id:            string;
    department:           string;
    job:                  string;
    cast_id?: number;
    character?: string;
}
