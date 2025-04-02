export interface SpaceXLaunch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details: string;
  launch_success: boolean;
  links: LaunchLinks;
  rocket: Rocket;
}

export interface LaunchLinks {
  mission_patch_small: string;
  article_link: string;
  wikipedia: string;
  video_link: string;
}

export interface Rocket {
  rocket_name: string;
  rocket_type: string;
  first_stage: FirstStage;
}

export interface FirstStage {
  cores: Core[];
}

export interface Core {
  land_success: boolean;
} 