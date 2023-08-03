const GOOGLE_API_KEY= "AIzaSyDFIQ-NVSl83ELQkY1CeXwxMEkqSJOI5Cw";

export const YOUTUBE_API = " https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=" + GOOGLE_API_KEY;



export const YOUTUBE_VIDEOES_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;

export const YOUTUBE_SUGGETIONS_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";


  // export const SEARCH_TEXT_API =
  // "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
  // API_KEY +
  // "&q=";