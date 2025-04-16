/*
 * 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 
 * Custom for 𝗔𝗹𝗲𝗼𝗼𝘅𝗠𝗮𝘆𝘆
 */

let body = $response.body;
let obj = JSON.parse(body);

// Ẩn quảng cáo, gợi ý mua gói, popup v.v
if (obj.adPlacements) obj.adPlacements = [];
if (obj.playerAds) obj.playerAds = [];
if (obj.response && obj.response.adPlacements) obj.response.adPlacements = [];

$done({ body: JSON.stringify(obj) });