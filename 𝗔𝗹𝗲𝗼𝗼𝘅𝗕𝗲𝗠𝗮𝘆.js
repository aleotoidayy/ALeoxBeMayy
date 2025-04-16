#!name= CapCut Premium
#!desc= Unlock by Lẹo x Mây
#!author= 𝗔𝗹𝗲𝗼𝗼𝘅𝗠𝗮𝘆𝘆
#!icon= https://link.icon.capcut.png

[Script]
capcut-vip = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$), requires-body=true, max-size=-1, script-path=https://raw.githubusercontent.com/<user>/<repo>/main/capcut_unlock.js

[MITM]
hostname = %APPEND% api.revenuecat.com