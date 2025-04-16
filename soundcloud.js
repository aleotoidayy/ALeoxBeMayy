let body = $response.body;
body = body.replace(/"ads_enabled":true/, '"ads_enabled":false');
body = body.replace(/"premium":false/, '"premium":true');
$done({ body });