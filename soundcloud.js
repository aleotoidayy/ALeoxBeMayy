let body = JSON.parse($response.body);

body.subscription = {
  "product": {
    "id": "com.soundcloud.go.plus",
    "name": "SoundCloud Go+"
  },
  "expires_at": "2099-12-31T23:59:59Z",
  "is_trial": false,
  "is_active": true
};

body.ads_enabled = false;
body.premium = true;

$done({ body: JSON.stringify(body) });
