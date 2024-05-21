export const NETFLIX_LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_IMAGE="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_AVATAR="https://avatars.githubusercontent.com/u/60471523?v=4";

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_TOKEN
    }
  };

export const TMDB_IMG_URL="https://image.tmdb.org/t/p/w500/";

export const LANG_DATA=[{
  value:"en",
  name:"English"
},{
  value:"hi",
  name:"Hindi"
},{
  value:"es",
  name:"Spanish"
}]


export const OPEN_AI=process.env.REACT_APP_GPT_TOKEN;