// SoundCloud Go+ Unlock by Lẹo x Mây

let obj = JSON.parse($response.body);

obj.user = obj.user || {};
obj.user.subscription = {
  product: "soundcloud_go_plus",
  expires_at: "2099-12-31T23:59:59Z"
};

$done({ body: JSON.stringify(obj) });