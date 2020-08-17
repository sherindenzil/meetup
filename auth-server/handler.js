"use strict";

const axios = require("axios");

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=buc4j06kc0rfv311tfnstu1fc9" +
    "&client_secret=gra6i77alfopaee2l4ipsd6lch" +
    "&grant_type=authorization_code" +
    "&redirect_uri=https://sherindenzil.github.io/meetup/" +
    "&code=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
