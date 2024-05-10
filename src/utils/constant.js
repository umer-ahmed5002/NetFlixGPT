export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_FIREBASE_TOKEN
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const IMG_BACKGROUND = 'https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/3017e280-c734-4bc9-9cf3-2cdd363644e5/PK-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_51bbfc4d-6750-49fc-98f1-802c382dbd2c_medium.jpg'

export const SUPPORTED_LANGUAGES = [{ identifier: "english", name: "English" }, { identifier: "urdu", name: "Urdu" }, { identifier: "spanish", name: "Spanish" }, { identifier: "hindi", name: "Hindi" }]
