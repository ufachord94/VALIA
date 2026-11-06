document.documentElement.lang="ca";
const PH={"acces-1": "img/placa-esglesia-escultura.webp", "acces-2": "img/btt-torre-cim.webp", "acces-3": "img/ciclistes-tardor-platans.webp", "carrega": "data:image/webp;base64,UklGRiQCAABXRUJQVlA4IBgCAADwFQCdASqCAFcAPrVQn0onJSKkrbb7mOAWiWU7f1gFEArdKDB2Xfi/9zNcVNh6Gat4Bmes+ajJFpNSqwbMgq6D6r9A0LQD4JtmtUb40BjZZymY2OtMMEjK87wUNrdbNKgrhLqu9y+mZyWj+NVKf9e2OD0M1Z2paL4xLZSrWTm1+RL8HhqA3XphyLsDXOcVfHIDKTRa92EO7aAIDU0m1wdFyexPfLJxiInJOkUeBzKtrD+P7QxaZ/kAAP7twyzWuZl8jhAsL38RbFzZtQ/yexqqKO2koNmFKULHn9ryW9cL73FGPb6+ddp1HvrauTA8atdnY2o71jftzfprmLjOYZqlBHqxeduKJmdijcjFpDz8JWYYlFAseaOjVA5OLM+LxecXWFPGIueX96EdLkpXUdYOy3HIGi8POBMshkRl+fktMHhbAnHzH3bG7Ig5OHUSKRVWHwcKMHUCIJHDM/n7Jg2CpcOFwevcIr43ynbLiwoG31Sr4V8Zs5yYdL+jB4p1cgBiCPj5znZEInHQ4s7dhMpAcSWJkpA5LtWhz1YU2YsTPLPBmRkJ6VEgizVFHJ+SOoFSGdAqmKTgoSS2aHkOa78ef0wqTL7Yi0rC5Ho5cD0im9glSv7cNLqwcQrzH2h7u24a6furYtcIM9cVpR8P3xZsDlgVgVdBjOpTTBKcPWzUhasX+/t2WzQS/2bfL3oQ84Wg8pPkAAAAAA==", "ruta-caldes": "img/placa-esglesia-escultura.webp", "ruta-fai": "img/sant-miquel-del-fai.webp", "ruta-gallecs": "img/ciclistes-tardor-platans.webp", "ruta-fageda": "img/riera-tardor.webp", "ruta-turo": "img/ruines-montseny.webp", "ruta-calma": "img/esglesia-turo.webp", "ruta-porxada": "img/poble-horts.webp", "ruta-congost": "img/ciclistes-tardor-platans.webp", "ruta-cardedeu": "img/placa-esglesia-escultura.webp", "ruta-megalits": "img/castell.webp", "ruta-llinars": "img/torre-bandera.webp", "ruta-puig": "img/btt-torre-cim.webp", "punt-1": "img/poble-horts.webp", "punt-2": "img/riera-tardor.webp", "capcalera-botiga": "img/familia-cistells.webp", "capcalera-perfil": "img/excursionista-muntanya.webp", "impacte": "img/ruines-montseny.webp", "repte-1": "img/familia-cistells.webp", "repte-2": "img/ciclistes-tardor-platans.webp", "any": "img/ciclistes-tardor-platans.webp", "recompensa-bus": "img/placa-esglesia-escultura.webp", "recompensa-bici": "img/btt-torre-cim.webp", "recompensa-esmorzar": "img/restaurant.webp", "recompensa-mercat": "img/poble-horts.webp", "recompensa-museu": "img/esglesia-turo.webp", "recompensa-arbre": "img/excursionista-muntanya.webp"};
const SLOTS={"acces-1": {"r": "9:19,5"}, "acces-2": {"r": "9:19,5"}, "acces-3": {"r": "9:19,5"}, "carrega": {"r": "9:19,5"}, "ruta-caldes": {"r": "3:2"}, "ruta-fai": {"r": "3:2"}, "ruta-gallecs": {"r": "3:2"}, "ruta-fageda": {"r": "3:2"}, "ruta-turo": {"r": "3:2"}, "ruta-calma": {"r": "3:2"}, "ruta-porxada": {"r": "3:2"}, "ruta-congost": {"r": "3:2"}, "ruta-cardedeu": {"r": "3:2"}, "ruta-megalits": {"r": "3:2"}, "ruta-llinars": {"r": "3:2"}, "ruta-puig": {"r": "3:2"}, "punt-1": {"r": "3:2"}, "punt-2": {"r": "3:2"}, "capcalera-botiga": {"r": "4:5"}, "capcalera-perfil": {"r": "4:5"}, "impacte": {"r": "3:2"}, "repte-1": {"r": "3:2"}, "repte-2": {"r": "3:2"}, "any": {"r": "9:19,5"}, "recompensa-bus": {"r": "4:3"}, "recompensa-bici": {"r": "4:3"}, "recompensa-esmorzar": {"r": "4:3"}, "recompensa-mercat": {"r": "4:3"}, "recompensa-museu": {"r": "4:3"}, "recompensa-arbre": {"r": "4:3"}};
const LUCIDE={"home": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>", "compass": "<path d=\"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/>", "rec": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>", "sparkle": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"/><path d=\"M20 3v4\"/><path d=\"M22 5h-4\"/><path d=\"M4 17v2\"/><path d=\"M5 18H3\"/>", "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>", "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/>", "sliders": "<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\"/><line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\"/><line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\"/><line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\"/><line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\"/><line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\"/><line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\"/><line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\"/><line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\"/>", "pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>", "walk": "<path d=\"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z\"/><path d=\"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z\"/><path d=\"M16 17h4\"/><path d=\"M4 13h4\"/>", "bike": "<circle cx=\"18.5\" cy=\"17.5\" r=\"3.5\"/><circle cx=\"5.5\" cy=\"17.5\" r=\"3.5\"/><circle cx=\"15\" cy=\"5\" r=\"1\"/><path d=\"M12 17.5V14l-3-3 4-3 2 3h2\"/>", "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/>", "mountain": "<path d=\"m8 3 4 8 5-5 5 15H2L8 3z\"/>", "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/>", "chevL": "<path d=\"m15 18-6-6 6-6\"/>", "chevR": "<path d=\"m9 18 6-6-6-6\"/>", "chevD": "<path d=\"m6 9 6 6 6-6\"/>", "chevU": "<path d=\"m18 15-6-6-6 6\"/>", "x": "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>", "check": "<path d=\"M20 6 9 17l-5-5\"/>", "share": "<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><polyline points=\"16 6 12 2 8 6\"/><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"15\"/>", "bookmark": "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\"/>", "send": "<path d=\"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z\"/><path d=\"M6 12h16\"/>", "mic": "<path d=\"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z\"/><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"/><line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\"/>", "layers": "<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\"/><path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\"/><path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\"/>", "locate": "<line x1=\"2\" x2=\"5\" y1=\"12\" y2=\"12\"/><line x1=\"19\" x2=\"22\" y1=\"12\" y2=\"12\"/><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"5\"/><line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\"/><circle cx=\"12\" cy=\"12\" r=\"7\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>", "pause": "<rect x=\"14\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\"/>", "stop": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/>", "cog": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>", "bell": "<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"/><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"/>", "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"/><path d=\"M2 12h20\"/>", "lock": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>", "help": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/>", "wifioff": "<path d=\"M12 20h.01\"/><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"/><path d=\"M5 12.859a10 10 0 0 1 5.17-2.69\"/><path d=\"M19 12.859a10 10 0 0 0-2.007-1.523\"/><path d=\"M2 8.82a15 15 0 0 1 4.177-2.643\"/><path d=\"M22 8.82a15 15 0 0 0-11.288-3.764\"/><path d=\"m2 2 20 20\"/>", "alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>", "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4\"/><path d=\"M12 8h.01\"/>", "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>", "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/>", "route": "<circle cx=\"6\" cy=\"19\" r=\"3\"/><path d=\"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15\"/><circle cx=\"18\" cy=\"5\" r=\"3\"/>", "shield": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/>", "text": "<polyline points=\"4 7 4 4 20 4 20 7\"/><line x1=\"9\" x2=\"15\" y1=\"20\" y2=\"20\"/><line x1=\"12\" x2=\"12\" y1=\"4\" y2=\"20\"/>", "pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/><path d=\"m15 5 4 4\"/>", "flag": "<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"/><line x1=\"4\" x2=\"4\" y1=\"22\" y2=\"15\"/>", "landmark": "<line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\"/><line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\"/><line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\"/><line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\"/><line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\"/><polygon points=\"12 2 20 7 4 7\"/>", "tree": "<path d=\"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z\"/><path d=\"M12 19v3\"/>", "msg": "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/>", "out": "<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/><polyline points=\"16 17 21 12 16 7\"/><line x1=\"21\" x2=\"9\" y1=\"12\" y2=\"12\"/>", "euro": "<path d=\"M4 10h12\"/><path d=\"M4 14h9\"/><path d=\"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2\"/>", "leaf": "<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\"/><path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\"/>", "arrow": "<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>", "map": "<path d=\"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z\"/><path d=\"M15 5.764v15\"/><path d=\"M9 3.236v15\"/>", "gift": "<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\"/><path d=\"M12 8v13\"/><path d=\"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7\"/><path d=\"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5\"/>", "bolt": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\"/>", "bus": "<path d=\"M8 6v6\"/><path d=\"M15 6v6\"/><path d=\"M2 12h19.6\"/><path d=\"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><path d=\"M9 18h5\"/><circle cx=\"16\" cy=\"18\" r=\"2\"/>", "card": "<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/><line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\"/>", "repeat": "<path d=\"m17 2 4 4-4 4\"/><path d=\"M3 11v-1a4 4 0 0 1 4-4h14\"/><path d=\"m7 22-4-4 4-4\"/><path d=\"M21 13v1a4 4 0 0 1-4 4H3\"/>", "shop": "<path d=\"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7\"/><path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"/><path d=\"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4\"/><path d=\"M2 7h20\"/><path d=\"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7\"/>", "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>", "camera": "<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/>", "plus": "<path d=\"M5 12h14\"/><path d=\"M12 5v14\"/>", "trophy": "<path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\"/><path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\"/><path d=\"M4 22h16\"/><path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\"/><path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\"/><path d=\"M18 2H6v7a6 6 0 0 0 12 0V2Z\"/>", "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\"/>", "cloudDown": "<path d=\"M12 13v8l-4-4\"/><path d=\"m12 21 4-4\"/><path d=\"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284\"/>", "hdd": "<line x1=\"22\" x2=\"2\" y1=\"12\" y2=\"12\"/><path d=\"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"/><line x1=\"6\" x2=\"6.01\" y1=\"16\" y2=\"16\"/><line x1=\"10\" x2=\"10.01\" y1=\"16\" y2=\"16\"/>", "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"/>", "siren": "<path d=\"M7 18v-6a5 5 0 1 1 10 0v6\"/><path d=\"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z\"/><path d=\"M21 12h1\"/><path d=\"M18.5 4.5 18 5\"/><path d=\"M2 12h1\"/><path d=\"M12 2v1\"/><path d=\"m4.929 4.929.707.707\"/><path d=\"M12 12v6\"/>", "radio": "<path d=\"M4.9 19.1C1 15.2 1 8.8 4.9 4.9\"/><path d=\"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5\"/><path d=\"M19.1 4.9C23 8.8 23 15.1 19.1 19\"/>", "thermo": "<path d=\"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z\"/>", "rain": "<path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"/><path d=\"M16 14v6\"/><path d=\"M8 14v6\"/><path d=\"M12 16v6\"/>", "umbrella": "<path d=\"M22 12a10.06 10.06 1 0 0-20 0Z\"/><path d=\"M12 12v8a2 2 0 0 0 4 0\"/><path d=\"M12 2v1\"/>", "wind": "<path d=\"M12.8 19.6A2 2 0 1 0 14 16H2\"/><path d=\"M17.5 8a2.5 2.5 0 1 1 2 4H2\"/><path d=\"M9.8 4.4A2 2 0 1 1 11 8H2\"/>", "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/>", "cloudSun": "<path d=\"M12 2v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"M20 12h2\"/><path d=\"m19.07 4.93-1.41 1.41\"/><path d=\"M15.947 12.65a4 4 0 0 0-5.925-4.128\"/><path d=\"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z\"/>", "nav": "<polygon points=\"3 11 22 2 13 21 11 13 3 11\"/>", "alertC": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"/><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"/>", "share2": "<circle cx=\"18\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"19\" r=\"3\"/><line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\"/><line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\"/>", "calendar": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/>", "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"/>", "school": "<path d=\"M14 22v-4a2 2 0 1 0-4 0v4\"/><path d=\"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10\"/><path d=\"M18 5v17\"/><path d=\"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6\"/><path d=\"M6 5v17\"/><circle cx=\"12\" cy=\"9\" r=\"2\"/>", "building": "<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\"/><path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\"/><path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\"/><path d=\"M10 6h4\"/><path d=\"M10 10h4\"/><path d=\"M10 14h4\"/><path d=\"M10 18h4\"/>", "target": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>", "award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\"/><circle cx=\"12\" cy=\"8\" r=\"6\"/>", "medal": "<path d=\"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15\"/><path d=\"M11 12 5.12 2.2\"/><path d=\"m13 12 5.88-9.8\"/><path d=\"M8 7h8\"/><circle cx=\"12\" cy=\"17\" r=\"5\"/><path d=\"M12 18v-2h-.5\"/>", "thumbs": "<path d=\"M7 10v12\"/><path d=\"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z\"/>", "trash": "<path d=\"M3 6h18\"/><path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\"/><path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\"/><line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\"/><line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\"/>", "wifi": "<path d=\"M12 20h.01\"/><path d=\"M2 8.82a15 15 0 0 1 20 0\"/><path d=\"M5 12.859a10 10 0 0 1 14 0\"/><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"/>", "refresh": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5\"/><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"/><path d=\"M8 16H3v5\"/>", "image": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/>", "car": "<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><path d=\"M9 17h6\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/>", "train": "<path d=\"M8 3.1V7a4 4 0 0 0 8 0V3.1\"/><path d=\"m9 15-1-1\"/><path d=\"m15 15 1-1\"/><path d=\"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z\"/><path d=\"m8 19-2 3\"/><path d=\"m16 19 2 3\"/>", "link": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/>", "gauge": "<path d=\"m12 14 4-4\"/><path d=\"M3.34 19a10 10 0 1 1 17.32 0\"/>", "droplets": "<path d=\"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z\"/><path d=\"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97\"/>", "dots": "<circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/>", "checkC": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12 2 2 4-4\"/>", "smile": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"/><line x1=\"9\" x2=\"9.01\" y1=\"9\" y2=\"9\"/><line x1=\"15\" x2=\"15.01\" y1=\"9\" y2=\"9\"/>", "signpost": "<path d=\"M12 13v8\"/><path d=\"M12 3v3\"/><path d=\"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z\"/>", "nav2": "<polygon points=\"12 2 19 21 12 17 5 21 12 2\"/>", "sprout": "<path d=\"M7 20h10\"/><path d=\"M10 20c5.5-2.5.8-6.4 3-10\"/><path d=\"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z\"/><path d=\"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z\"/>", "activity": "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\"/>", "trend": "<polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\"/><polyline points=\"16 7 22 7 22 13\"/>", "dog": "<path d=\"M11.25 16.25h1.5L12 17z\"/><path d=\"M16 14v.5\"/><path d=\"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309\"/><path d=\"M8 14v.5\"/><path d=\"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5\"/>", "baby": "<path d=\"M9 12h.01\"/><path d=\"M15 12h.01\"/><path d=\"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5\"/><path d=\"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1\"/>", "crosshair": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"22\" x2=\"18\" y1=\"12\" y2=\"12\"/><line x1=\"6\" x2=\"2\" y1=\"12\" y2=\"12\"/><line x1=\"12\" x2=\"12\" y1=\"6\" y2=\"2\"/><line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"18\"/>", "vibrate": "<path d=\"m2 8 2 2-2 2 2 2-2 2\"/><path d=\"m22 8-2 2 2 2-2 2 2 2\"/><rect width=\"8\" height=\"14\" x=\"8\" y=\"5\" rx=\"1\"/>", "eyeOff": "<path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\"/><path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\"/><path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\"/><path d=\"m2 2 20 20\"/>", "cloud": "<path d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\"/>", "userPlus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\"/><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"/>", "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>", "calendarDays": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/><path d=\"M8 14h.01\"/><path d=\"M12 14h.01\"/><path d=\"M16 14h.01\"/><path d=\"M8 18h.01\"/><path d=\"M12 18h.01\"/><path d=\"M16 18h.01\"/>", "moreV": "<circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"12\" cy=\"5\" r=\"1\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>", "flagOff": "<path d=\"M8 2c3 0 5 2 8 2s4-1 4-1v11\"/><path d=\"M4 22V4\"/><path d=\"M4 15s1-1 4-1 5 2 8 2\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>", "milestone": "<path d=\"M12 13v8\"/><path d=\"M12 3v3\"/><path d=\"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z\"/>"};
const I18N_DICT={"# % de l'objectiu": ["# % del objetivo", "# % of your goal", "# % de l'objectif"], "# % · queden # dies": ["# % · quedan # días", "# % · # days left", "# % · encore # jours"], "# MB de # GB": ["# MB de # GB", "# MB of # GB", "# Mo sur # Go"], "# MB": ["# MB", "# MB", "# Mo"], "# activitat": ["# actividad", "# activity", "# activité"], "# activitats": ["# actividades", "# activities", "# activités"], "# check-ins": ["# check-ins", "# check-ins", "# check-ins"], "# check-ins al Vallès": ["# check-ins en el Vallès", "# check-ins in the Vallès", "# check-ins dans le Vallès"], "# codi actiu": ["# código activo", "# active code", "# code actif"], "# codis actius": ["# códigos activos", "# active codes", "# codes actifs"], "# de #": ["# de #", "# of #", "# sur #"], "# de # rutes descarregades (límit proposat).": ["# de # rutas descargadas (límite propuesto).", "# of # routes downloaded (proposed limit).", "# itinéraires téléchargés sur # (limite proposée)."], "# kg de CO₂": ["# kg de CO₂", "# kg of CO₂", "# kg de CO₂"], "# kg de CO₂ estalviats (estimat)": ["# kg de CO₂ ahorrados (estimado)", "# kg of CO₂ saved (estimate)", "# kg de CO₂ économisés (estimation)"], "# km a peu en família": ["# km a pie en familia", "# km on foot as a family", "# km à pied en famille"], "# km sense cotxe": ["# km sin coche", "# km car-free", "# km sans voiture"], "# km sense cotxe · comparteix-ho": ["# km sin coche · compártelo", "# km car-free · share it", "# km sans voiture · partage-le"], "# llocs de patrimoni": ["# lugares de patrimonio", "# heritage sites", "# lieux patrimoniaux"], "# min de bicicleta compartida": ["# min de bicicleta compartida", "# min of bike sharing", "# min de vélo en libre-service"], "# punts": ["# puntos", "# points", "# points"], "# punts per a Arbust": ["# puntos para Arbusto", "# points to Shrub", "# points pour Arbuste"], "# punts per a Plançó": ["# puntos para Plantón", "# points to Sapling", "# points pour Jeune pousse"], "# punts per a Arbre": ["# puntos para Árbol", "# points to Tree", "# points pour Arbre"], "# punts per a Bosc": ["# puntos para Bosque", "# points to Forest", "# points pour Forêt"], "# punts per a Brot": ["# puntos para Brote", "# points to Sprout", "# points pour Pousse"], "# punts per arribar a Arbust (nivell #).": ["# puntos para llegar a Arbusto (nivel #).", "# points to reach Shrub (level #).", "# points pour atteindre Arbuste (niveau #)."], "# punts per arribar a Plançó (nivell #).": ["# puntos para llegar a Plantón (nivel #).", "# points to reach Sapling (level #).", "# points pour atteindre Jeune pousse (niveau #)."], "# punts per arribar a Arbre (nivell #).": ["# puntos para llegar a Árbol (nivel #).", "# points to reach Tree (level #).", "# points pour atteindre Arbre (niveau #)."], "# punts per arribar a Bosc (nivell #).": ["# puntos para llegar a Bosque (nivel #).", "# points to reach Forest (level #).", "# points pour atteindre Forêt (niveau #)."], "# punts per arribar a Brot (nivell #).": ["# puntos para llegar a Brote (nivel #).", "# points to reach Sprout (level #).", "# points pour atteindre Pousse (niveau #)."], "# ruta hi encaixa": ["# ruta encaja", "# route matches", "# itinéraire correspond"], "# rutes hi encaixen": ["# rutas encajan", "# routes match", "# itinéraires correspondent"], "# rutes fetes": ["# rutas hechas", "# routes done", "# itinéraires faits"], "# selecció · ho farem servir per triar rutes": ["# selección · la usaremos para elegir rutas", "# selected · we'll use it to pick routes", "# sélection · on s'en servira pour choisir des itinéraires"], "# seleccions · ho farem servir per triar rutes": ["# selecciones · las usaremos para elegir rutas", "# selected · we'll use them to pick routes", "# sélections · on s'en servira pour choisir des itinéraires"], "+# punts d'energia": ["+# puntos de energía", "+# energy points", "+# points d'énergie"], "A córrer! Pistes i corriols.": ["¡A correr! Pistas y senderos.", "Let's run! Tracks and trails.", "En avant ! Pistes et sentiers."], "A l'app real: temps del Meteocat i qualitat de l'aire de la XVPCA (Generalitat).": ["En la app real: tiempo del Meteocat y calidad del aire de la XVPCA (Generalitat).", "In the real app: Meteocat weather and XVPCA air quality (Generalitat).", "Dans l'app réelle : météo du Meteocat et qualité de l'air de la XVPCA (Generalitat)."], "A la Roca hi ha un dolmen de fa uns # anys.": ["En la Roca hay un dolmen de hace unos # años.", "In La Roca there's a dolmen about # years old.", "À la Roca, il y a un dolmen d'environ # ans."], "A peu": ["A pie", "On foot", "À pied"], "A prop teu": ["Cerca de ti", "Near you", "Près de chez toi"], "A prop de": ["Cerca de", "Near", "Près de"], "Abandonar": ["Abandonar", "Quit", "Abandonner"], "Abandonar la ruta": ["Abandonar la ruta", "Quit the route", "Abandonner l'itinéraire"], "Accepto les": ["Acepto las", "I accept the", "J'accepte les"], "Accepto les condicions d'ús i la política de privacitat": ["Acepto las condiciones de uso y la política de privacidad", "I accept the terms of use and the privacy policy", "J'accepte les conditions d'utilisation et la politique de confidentialité"], "condicions d'ús i la política de privacitat": ["condiciones de uso y la política de privacidad", "terms of use and the privacy policy", "conditions d'utilisation et la politique de confidentialité"], "Accessibilitat": ["Accesibilidad", "Accessibility", "Accessibilité"], "Accessibilitat (AX#)": ["Accesibilidad (AX#)", "Accessibility (AX#)", "Accessibilité (AX#)"], "Accés": ["Acceso", "Welcome", "Accès"], "Aconseguida": ["Conseguida", "Earned", "Obtenue"], "Activar notificacions": ["Activar notificaciones", "Turn on notifications", "Activer les notifications"], "Activitat": ["Actividad", "Activity", "Activité"], "Activitat física i turisme sostenible per gaudir del territori sense malmetre'l.": ["Actividad física y turismo sostenible para disfrutar del territorio sin dañarlo.", "Physical activity and sustainable tourism to enjoy the land without harming it.", "Activité physique et tourisme durable pour profiter du territoire sans l'abîmer."], "Activitats": ["Actividades", "Activities", "Activités"], "Actualitzada": ["Actualizada", "Up to date", "À jour"], "Actualitzar automàticament": ["Actualizar automáticamente", "Update automatically", "Mettre à jour automatiquement"], "Actualitzar la descàrrega": ["Actualizar la descarga", "Update the download", "Mettre à jour le téléchargement"], "Afegeix un consell": ["Añade un consejo", "Add a tip", "Ajouter un conseil"], "Afegeix un contacte": ["Añade un contacto", "Add a contact", "Ajouter un contact"], "Afegir una foto": ["Añadir una foto", "Add a photo", "Ajouter une photo"], "Afluència": ["Afluencia", "Crowds", "Affluence"], "Afluència baixa": ["Afluencia baja", "Not busy", "Peu de monde"], "Afluència per hores: ara és baixa": ["Afluencia por horas: ahora es baja", "Crowds by hour: not busy now", "Affluence par heure : faible en ce moment"], "Aire": ["Aire", "Air", "Air"], "Ajuda": ["Ayuda", "Help", "Aide"], "Ajuda i suport": ["Ayuda y soporte", "Help & support", "Aide et assistance"], "Ajustos": ["Ajustes", "Settings", "Réglages"], "Al migdia hi ha menys gent i el vapor es veu millor des de la plaça.": ["Al mediodía hay menos gente y el vapor se ve mejor desde la plaza.", "At midday it's less crowded and the steam is easier to see from the square.", "À midi, il y a moins de monde et on voit mieux la vapeur depuis la place."], "Al migdia hi ha menys gent i el vapor es veu millor.": ["Al mediodía hay menos gente y el vapor se ve mejor.", "At midday it's less crowded and the steam is easier to see.", "À midi, il y a moins de monde et on voit mieux la vapeur."], "Als mòbils que ho permeten": ["En los móviles que lo permiten", "On phones that support it", "Sur les mobiles compatibles"], "Alta": ["Alta", "High", "Élevée"], "Altiplà de pastures del Montseny i el turó de Tagamanent, amb l'església i les restes del castell al capdamunt.": ["Altiplano de pastos del Montseny y el cerro de Tagamanent, con la iglesia y los restos del castillo en lo alto.", "A pasture plateau in the Montseny and Tagamanent hill, with the church and castle ruins at the top.", "Plateau de pâturages du Montseny et colline de Tagamanent, avec l'église et les vestiges du château au sommet."], "Amagar": ["Ocultar", "Hide", "Masquer"], "Amagar la contrasenya": ["Ocultar la contraseña", "Hide password", "Masquer le mot de passe"], "Amb aigua a prop:": ["Con agua cerca:", "With water nearby:", "Avec de l'eau à proximité :"], "Amb amics": ["Con amigos", "With friends", "Entre amis"], "Amb bici": ["En bici", "By bike", "À vélo"], "Amb gos": ["Con perro", "With a dog", "Avec un chien"], "Amb nens": ["Con niños", "With kids", "Avec des enfants"], "Amb qui vas?": ["¿Con quién vas?", "Who are you going with?", "Avec qui pars-tu ?"], "Amb tot això no en trobo cap d'exacta; et proposaré les que s'hi acostin més.": ["Con todo esto no encuentro ninguna exacta; te propondré las que más se acerquen.", "I can't find an exact match for all that; I'll suggest the closest ones.", "Avec tout ça, je n'en trouve aucun d'exact ; je te proposerai les plus proches."], "Amics": ["Amigos", "Friends", "Amis"], "Anada i tornada de # km fins a l'inici, comparat amb anar-hi en cotxe (estimat)": ["Ida y vuelta de # km hasta el inicio, comparado con ir en coche (estimado)", "# km round trip to the start, compared with driving (estimate)", "Aller-retour de # km jusqu'au départ, comparé à la voiture (estimation)"], "Anar a l'inici": ["Ir al inicio", "Go to the start", "Aller au départ"], "Anar a la botiga": ["Ir a la tienda", "Go to the shop", "Aller à la boutique"], "Anglès": ["Inglés", "English", "Anglais"], "Aparença": ["Apariencia", "Appearance", "Apparence"], "Aplicar": ["Aplicar", "Apply", "Appliquer"], "Aquest navegador no té ubicació": ["Este navegador no tiene ubicación", "This browser has no location", "Ce navigateur n'a pas de localisation"], "Aquestes rutes comencen a prop d'una estació:": ["Estas rutas empiezan cerca de una estación:", "These routes start near a station:", "Ces itinéraires partent près d'une gare :"], "Aquestes rutes permeten anar amb gos (sempre lligat a prop del bestiar):": ["Estas rutas permiten ir con perro (siempre atado cerca del ganado):", "Dogs are welcome on these routes (always on a lead near livestock):", "Ces itinéraires acceptent les chiens (toujours en laisse près du bétail) :"], "Aquí ets tu": ["Aquí estás tú", "You're here", "Tu es ici"], "Aquí tens tres propostes variades per començar:": ["Aquí tienes tres propuestas variadas para empezar:", "Here are three different ideas to get you started:", "Voici trois idées variées pour commencer :"], "Ara entres com a convidat: no hi ha cap compte creat.": ["Ahora entras como invitado: no hay ninguna cuenta creada.", "You're in as a guest: no account has been created.", "Tu es connecté en invité : aucun compte n'a été créé."], "Ara no": ["Ahora no", "Not now", "Pas maintenant"], "Ara no ets al Vallès Oriental": ["Ahora no estás en el Vallès Oriental", "You're not in the Vallès Oriental right now", "Tu n'es pas dans le Vallès Oriental en ce moment"], "Ara no tinc connexió: ho tornem a provar?": ["Ahora no tengo conexión: ¿lo volvemos a intentar?", "I'm offline right now. Shall we try again?", "Je n'ai pas de connexion : on réessaie ?"], "Ara: baixa": ["Ahora: baja", "Now: not busy", "Maintenant : faible"], "Arbre": ["Árbol", "Tree", "Arbre"], "Arbust": ["Arbusto", "Shrub", "Arbuste"], "Assistent": ["Asistente", "Assistant", "Assistant"], "Assistent celebrant el canvi. Tancar l'animació.": ["Asistente celebrando el canje. Cerrar la animación.", "Assistant celebrating your reward. Close the animation.", "Assistant qui fête l'échange. Fermer l'animation."], "Assistent de Valia": ["Asistente de Valia", "Valia assistant", "Assistant Valia"], "Atribucions dels mapes": ["Atribuciones de los mapas", "Map credits", "Attributions des cartes"], "Aturar el dictat": ["Detener el dictado", "Stop dictation", "Arrêter la dictée"], "Automàtic": ["Automático", "Automatic", "Automatique"], "Automàtic segueix el mode del mòbil.": ["Automático sigue el modo del móvil.", "Automatic follows your phone's setting.", "Automatique suit le réglage du téléphone."], "Aviat podràs unir-te a reptes oberts de la comarca. Funció de demostració.": ["Pronto podrás unirte a retos abiertos de la comarca. Función de demostración.", "Soon you'll be able to join open challenges in the area. Demo feature.", "Bientôt, tu pourras rejoindre des défis ouverts de la région. Fonction de démonstration."], "Avisos": ["Avisos", "Alerts", "Alertes"], "Avisos activats": ["Avisos activados", "Alerts on", "Alertes activées"], "Avisos desactivats": ["Avisos desactivados", "Alerts off", "Alertes désactivées"], "Avui": ["Hoy", "Today", "Aujourd'hui"], "Baix impacte": ["Bajo impacto", "Low impact", "Faible impact"], "Baixa": ["Baja", "Low", "Faible"], "Benvinguda a Valia": ["Bienvenida a Valia", "Welcome to Valia", "Bienvenue sur Valia"], "Bici": ["Bici", "Bike", "Vélo"], "Bicicleta": ["Bicicleta", "Bike", "Vélo"], "Bloquejar la pantalla": ["Bloquear la pantalla", "Lock the screen", "Verrouiller l'écran"], "Bon dia": ["Buenos días", "Good morning", "Bonjour"], "Bon dia,": ["Buenos días,", "Good morning,", "Bonjour,"], "Bona": ["Buena", "Good", "Bonne"], "Bona nit": ["Buenas noches", "Good evening", "Bonsoir"], "Bona nit,": ["Buenas noches,", "Good evening,", "Bonsoir,"], "Bona tarda": ["Buenas tardes", "Good afternoon", "Bon après-midi"], "Bona tarda,": ["Buenas tardes,", "Good afternoon,", "Bon après-midi,"], "Bosc": ["Bosque", "Forest", "Forêt"], "Botiga": ["Tienda", "Shop", "Boutique"], "Botiga ›": ["Tienda ›", "Shop ›", "Boutique ›"], "Brot": ["Brote", "Sprout", "Pousse"], "Bus interurbà fins a Caldes de Montbui": ["Bus interurbano hasta Caldes de Montbui", "Intercity bus to Caldes de Montbui", "Bus interurbain jusqu'à Caldes de Montbui"], "Buscant rutes…": ["Buscando rutas…", "Finding routes…", "Recherche d'itinéraires…"], "CO₂ calculat amb factors d'emissió indicatius (dades d'exemple). Les fotos no surten del teu mòbil.": ["CO₂ calculado con factores de emisión orientativos (datos de ejemplo). Las fotos no salen de tu móvil.", "CO₂ calculated with indicative emission factors (sample data). Photos never leave your phone.", "CO₂ calculé avec des facteurs d'émission indicatifs (données d'exemple). Les photos ne quittent pas ton téléphone."], "CO₂ estalviat": ["CO₂ ahorrado", "CO₂ saved", "CO₂ économisé"], "CO₂ estalviat (estimat)": ["CO₂ ahorrado (estimado)", "CO₂ saved (estimate)", "CO₂ économisé (estimation)"], "Cada descàrrega inclou el mapa, el traçat, els check-ins i les fitxes de patrimoni. Els check-ins fets sense cobertura s'envien quan tornes a tenir connexió.": ["Cada descarga incluye el mapa, el trazado, los check-ins y las fichas de patrimonio. Los check-ins hechos sin cobertura se envían cuando vuelves a tener conexión.", "Each download includes the map, the track, the check-ins and the heritage cards. Check-ins made without signal are sent when you're back online.", "Chaque téléchargement comprend la carte, le tracé, les check-ins et les fiches patrimoine. Les check-ins faits sans réseau sont envoyés dès que tu retrouves la connexion."], "Cal permís per fer servir el micròfon": ["Hace falta permiso para usar el micrófono", "Microphone permission is needed", "L'autorisation du micro est nécessaire"], "Cal un compte": ["Hace falta una cuenta", "Account needed", "Compte requis"], "Caminant es descobreix tot millor.": ["Caminando se descubre todo mejor.", "Everything's better discovered on foot.", "On découvre tout mieux à pied."], "Caminar": ["Caminar", "Walking", "Marche"], "Camins planers entre camps de conreu ecològic a l'Espai Rural de Gallecs, un pulmó agrícola entre ciutats.": ["Caminos llanos entre campos de cultivo ecológico en el Espai Rural de Gallecs, un pulmón agrícola entre ciudades.", "Flat paths between organic fields in the Gallecs Rural Area, a green farming lung between towns.", "Chemins plats entre des champs bio dans l'Espace rural de Gallecs, un poumon agricole entre les villes."], "Camins segurs per als petits.": ["Caminos seguros para los pequeños.", "Safe paths for little ones.", "Des chemins sûrs pour les petits."], "Campanar romànic": ["Campanario románico", "Romanesque bell tower", "Clocher roman"], "Camí de ribera al llarg del Congost, de Granollers fins a Montmeló, planer i sense trànsit.": ["Camino de ribera a lo largo del Congost, de Granollers a Montmeló, llano y sin tráfico.", "Riverside path along the Congost, from Granollers to Montmeló, flat and traffic-free.", "Chemin de berge le long du Congost, de Granollers à Montmeló, plat et sans circulation."], "Camí tallat o perillós": ["Camino cortado o peligroso", "Path closed or dangerous", "Chemin fermé ou dangereux"], "Cancel·la": ["Cancelar", "Cancel", "Annuler"], "Canvi fet": ["Canje hecho", "Reward claimed", "Échange effectué"], "Canvi fet!": ["¡Canje hecho!", "Reward claimed!", "Échange effectué !"], "Canvi fet. Assistent: Fet! Ja tens la recompensa.": ["Canje hecho. Asistente: ¡Hecho! Ya tienes la recompensa.", "Reward claimed. Assistant: Done! The reward is yours.", "Échange effectué. Assistant : C'est fait ! La récompense est à toi."], "Canvia els teus punts a la botiga i els codis apareixeran aquí.": ["Canjea tus puntos en la tienda y los códigos aparecerán aquí.", "Redeem your points in the shop and the codes will appear here.", "Échange tes points dans la boutique et les codes apparaîtront ici."], "Canvia les opcions": ["Cambia las opciones", "Change the options", "Modifier les options"], "Canviar": ["Canjear", "Redeem", "Échanger"], "Canviar # punts?": ["¿Canjear # puntos?", "Redeem # points?", "Échanger # points ?"], "Canviar la contrasenya": ["Cambiar la contraseña", "Change password", "Changer le mot de passe"], "Canviar per # punts": ["Canjear por # puntos", "Redeem for # points", "Échanger contre # points"], "Canviats": ["Canjeados", "Redeemed", "Échangés"], "Cap activitat amb aquests filtres": ["Ninguna actividad con estos filtros", "No activities match these filters", "Aucune activité avec ces filtres"], "Cap activitat amb els filtres actuals.": ["Ninguna actividad con los filtros actuales.", "No activities match the current filters.", "Aucune activité avec les filtres actuels."], "Cap pregunta coincideix amb la cerca.": ["Ninguna pregunta coincide con la búsqueda.", "No questions match your search.", "Aucune question ne correspond à la recherche."], "Cap ruta exacta: et proposaré les que s'hi acostin més": ["Ninguna ruta exacta: te propondré las que más se acerquen", "No exact match: I'll suggest the closest routes", "Aucun itinéraire exact : je te proposerai les plus proches"], "Capes del mapa": ["Capas del mapa", "Map layers", "Calques de la carte"], "Castells": ["Castillos", "Castles", "Châteaux"], "Castells per descobrir:": ["Castillos por descubrir:", "Castles to discover:", "Châteaux à découvrir :"], "Castells, dòlmens i esglésies.": ["Castillos, dólmenes e iglesias.", "Castles, dolmens and churches.", "Châteaux, dolmens et églises."], "Castellà": ["Castellano", "Spanish", "Espagnol"], "Català": ["Catalán", "Catalan", "Catalan"], "Català per defecte. Els noms de lloc es mantenen en català.": ["Catalán por defecto. Los nombres de lugar se mantienen en catalán.", "Catalan by default. Place names stay in Catalan.", "Catalan par défaut. Les noms de lieux restent en catalan."], "Catàleg d'exemple per al prototip.": ["Catálogo de ejemplo para el prototipo.", "Sample catalogue for the prototype.", "Catalogue d'exemple pour le prototype."], "Cel": ["Cielo", "Sky", "Ciel"], "Centrar en la meva ubicació": ["Centrar en mi ubicación", "Center on my location", "Centrer sur ma position"], "Centrat en la teva posició": ["Centrado en tu posición", "Centered on your position", "Centré sur ta position"], "Cerca": ["Buscar", "Search", "Rechercher"], "Cerca a l'ajuda": ["Buscar en la ayuda", "Search help", "Rechercher dans l'aide"], "Cerca activitats i llocs": ["Actividades y lugares", "Activities and places", "Activités et lieux"], "Cerca en aquest mapa": ["Buscar en este mapa", "Search this map", "Rechercher sur cette carte"], "Cerca la meva ruta": ["Busca mi ruta", "Find my route", "Trouver mon itinéraire"], "Cerca un lloc o una activitat": ["Busca un lugar o actividad", "Search places or activities", "Rechercher un lieu"], "Check-in": ["Check-in", "Check-in", "Check-in"], "Check-in # de #": ["Check-in # de #", "Check-in # of #", "Check-in # sur #"], "Check-in fet · +# punts": ["Check-in hecho · +# puntos", "Checked in · +# points", "Check-in effectué · +# points"], "Check-ins": ["Check-ins", "Check-ins", "Check-ins"], "Circular": ["Circular", "Loop", "Boucle"], "Clar": ["Claro", "Light", "Clair"], "Classe de #r de Batxillerat · # membres": ["Clase de #.º de Bachillerato · # miembros", "Batxillerat year # class · # members", "Classe de #re année de Batxillerat · # membres"], "Codi QR": ["Código QR", "QR code", "Code QR"], "Codi QR d'exemple": ["Código QR de ejemplo", "Sample QR code", "Code QR d'exemple"], "Codi QR de l'adreça de Valia": ["Código QR de la dirección de Valia", "QR code for Valia's address", "Code QR de l'adresse de Valia"], "Codi QR del cupó (exemple)": ["Código QR del cupón (ejemplo)", "Coupon QR code (sample)", "Code QR du coupon (exemple)"], "Codi QR per obrir Valia al mòbil": ["Código QR para abrir Valia en el móvil", "QR code to open Valia on your phone", "Code QR pour ouvrir Valia sur ton téléphone"], "Codi copiat": ["Código copiado", "Code copied", "Code copié"], "Codi d'exemple · no té valor real": ["Código de ejemplo · no tiene valor real", "Sample code · no real value", "Code d'exemple · sans valeur réelle"], "Codi:": ["Código:", "Code:", "Code :"], "Codis d'exemple generats al dispositiu: no tenen valor real.": ["Códigos de ejemplo generados en el dispositivo: no tienen valor real.", "Sample codes generated on the device: they have no real value.", "Codes d'exemple générés sur l'appareil : sans valeur réelle."], "Com arribar": ["Cómo llegar", "Directions", "Itinéraire"], "Com arribar-hi": ["Cómo llegar", "How to get there", "Comment y aller"], "Com calculem el CO₂": ["Cómo calculamos el CO₂", "How we calculate CO₂", "Comment nous calculons le CO₂"], "Com funcionen els check-ins?": ["¿Cómo funcionan los check-ins?", "How do check-ins work?", "Comment fonctionnent les check-ins ?"], "Com guanyo punts?": ["¿Cómo gano puntos?", "How do I earn points?", "Comment gagner des points ?"], "Com has arribat a l'inici?": ["¿Cómo has llegado al inicio?", "How did you get to the start?", "Comment es-tu venu au départ ?"], "Com hi torno": ["Cómo vuelvo", "How to get back", "Comment revenir"], "Com ho calculem": ["Cómo lo calculamos", "How we calculate it", "Comment nous le calculons"], "Com informo d'un error en una ruta?": ["¿Cómo informo de un error en una ruta?", "How do I report a problem on a route?", "Comment signaler une erreur sur un itinéraire ?"], "Comencem": ["Empecemos", "Let's go", "C'est parti"], "Comencem de nou. Què et ve de gust?": ["Empecemos de nuevo. ¿Qué te apetece?", "Let's start again. What do you feel like?", "On recommence. De quoi as-tu envie ?"], "Comerç local": ["Comercio local", "Local shops", "Commerce local"], "Comparteix la teva ubicació en directe": ["Comparte tu ubicación en directo", "Share your live location", "Partage ta position en direct"], "Compartir": ["Compartir", "Share", "Partager"], "Compartir Valia": ["Compartir Valia", "Share Valia", "Partager Valia"], "Compartir la recompensa": ["Compartir la recompensa", "Share the reward", "Partager la récompense"], "Comprova la Wi-Fi o les dades mòbils i torna-ho a provar.": ["Comprueba el wifi o los datos móviles y vuelve a intentarlo.", "Check your Wi-Fi or mobile data and try again.", "Vérifie le Wi-Fi ou les données mobiles et réessaie."], "Compte": ["Cuenta", "Account", "Compte"], "Compte creat · +# punts": ["Cuenta creada · +# puntos", "Account created · +# points", "Compte créé · +# points"], "Compte de demostració": ["Cuenta de demostración", "Demo account", "Compte de démonstration"], "Compte de demostració amb moviments d'exemple.": ["Cuenta de demostración con movimientos de ejemplo.", "Demo account with sample transactions.", "Compte de démonstration avec des mouvements d'exemple."], "Compte de demostració per al jurat": ["Cuenta de demostración para el tribunal", "Demo account for the jury", "Compte de démonstration pour le jury"], "Compte de demostració · dades d'exemple": ["Cuenta de demostración · datos de ejemplo", "Demo account · sample data", "Compte de démonstration · données d'exemple"], "Compte de demostració:": ["Cuenta de demostración:", "Demo account:", "Compte de démonstration :"], "Compte esborrat": ["Cuenta eliminada", "Account deleted", "Compte supprimé"], "Comunitat": ["Comunidad", "Community", "Communauté"], "Condicions": ["Condiciones", "Conditions", "Conditions"], "Condicions d'avui": ["Condiciones de hoy", "Today's conditions", "Conditions du jour"], "Condicions d'ús": ["Condiciones de uso", "Terms of use", "Conditions d'utilisation"], "Condicions d'ús i privacitat": ["Condiciones de uso y privacidad", "Terms of use & privacy", "Conditions d'utilisation et confidentialité"], "Condicions i afluència": ["Condiciones y afluencia", "Conditions & crowds", "Conditions et affluence"], "Consell amagat": ["Consejo ocultado", "Tip hidden", "Conseil masqué"], "Consells, autors i comptadors: d'exemple.": ["Consejos, autores y contadores: de ejemplo.", "Tips, authors and counts: sample data.", "Conseils, auteurs et compteurs : d'exemple."], "Consentiments": ["Consentimientos", "Consents", "Consentements"], "Contacte": ["Contacto", "Contact", "Contact"], "Contactes (# de #)": ["Contactos (# de #)", "Contacts (# of #)", "Contacts (# sur #)"], "Contactes i coordenades: il·lustratius.": ["Contactos y coordenadas: ilustrativos.", "Contacts and coordinates: for illustration.", "Contacts et coordonnées : illustratifs."], "Contactes: funció de demostració": ["Contactos: función de demostración", "Contacts: demo feature", "Contacts : fonction de démonstration"], "Contingut de la comunitat": ["Contenido de la comunidad", "Community content", "Contenu de la communauté"], "Continuar": ["Continuar", "Continue", "Continuer"], "Contrasenya": ["Contraseña", "Password", "Mot de passe"], "Contrasenya (mínim # caràcters)": ["Contraseña (mínimo # caracteres)", "Password (at least # characters)", "Mot de passe (# caractères min.)"], "Contrasenya actual": ["Contraseña actual", "Current password", "Mot de passe actuel"], "Contrasenya canviada": ["Contraseña cambiada", "Password changed", "Mot de passe modifié"], "Contrasenya nova (mínim # caràcters)": ["Contraseña nueva (mínimo # caracteres)", "New password (at least # characters)", "Nouveau mot de passe (# caractères min.)"], "Contrast alt": ["Contraste alto", "High contrast", "Contraste élevé"], "Conversa nova": ["Conversación nueva", "New chat", "Nouvelle conversation"], "Convidat": ["Invitado", "Guest", "Invité"], "Coordenades copiades": ["Coordenadas copiadas", "Coordinates copied", "Coordonnées copiées"], "Coordenades:": ["Coordenadas:", "Coordinates:", "Coordonnées :"], "Copiar": ["Copiar", "Copy", "Copier"], "Copiar el codi": ["Copiar el código", "Copy code", "Copier le code"], "Correu electrònic": ["Correo electrónico", "Email", "E-mail"], "Cotxe": ["Coche", "Car", "Voiture"], "Crea el teu compte": ["Crea tu cuenta", "Create your account", "Crée ton compte"], "Crea un compte per desar-les": ["Crea una cuenta para guardarlas", "Create an account to save them", "Crée un compte pour les enregistrer"], "Crea un repte": ["Crea un reto", "Create a challenge", "Créer un défi"], "Crear compte": ["Crear cuenta", "Create account", "Créer un compte"], "Crear el compte": ["Crear la cuenta", "Create account", "Créer le compte"], "Crear un compte": ["Crear una cuenta", "Create an account", "Créer un compte"], "Cultura": ["Cultura", "Culture", "Culture"], "Cultural": ["Cultural", "Culture", "Culture"], "Córrer": ["Correr", "Running", "Course"], "D'acord": ["De acuerdo", "OK", "D'accord"], "D'acord, ho trec.": ["De acuerdo, lo quito.", "OK, I'll remove it.", "D'accord, je l'enlève."], "Dades d'exemple": ["Datos de ejemplo", "Sample data", "Données d'exemple"], "Dades d'exemple. Els comptes es desen només en aquest navegador.": ["Datos de ejemplo. Las cuentas se guardan solo en este navegador.", "Sample data. Accounts are only stored in this browser.", "Données d'exemple. Les comptes sont enregistrés uniquement dans ce navigateur."], "Dades del compte": ["Datos de la cuenta", "Account details", "Données du compte"], "Dades del jurat omplertes": ["Datos del tribunal rellenados", "Jury details filled in", "Données du jury remplies"], "Dades descarregades": ["Datos descargados", "Data downloaded", "Données téléchargées"], "Dl": ["L", "M", "L"], "Dt": ["M", "T", "M"], "Dc": ["X", "W", "M"], "Dj": ["J", "T", "J"], "Dv": ["V", "F", "V"], "Ds": ["S", "S", "S"], "Dg": ["D", "S", "D"], "De # a # h": ["De # a # h", "# to # h", "De # à # h"], "De moment, l'app només és en català": ["De momento, la app solo está en catalán", "For now, the app is only in Catalan", "Pour l'instant, l'app n'existe qu'en catalan"], "De res! Quan vulguis, aquí em tens.": ["¡De nada! Cuando quieras, aquí me tienes.", "You're welcome! I'm here whenever you need me.", "De rien ! Je suis là quand tu veux."], "Denegat": ["Denegado", "Denied", "Refusé"], "Denunciar": ["Denunciar", "Report", "Signaler"], "Des del botó «Informar d'un problema en una ruta», més avall.": ["Desde el botón «Informar de un problema en una ruta», más abajo.", "With the \"Report a problem on a route\" button below.", "Avec le bouton « Signaler un problème sur un itinéraire », plus bas."], "Desa els punts i les rutes": ["Guarda los puntos y las rutas", "Keep your points and routes", "Conserve tes points et tes itinéraires"], "Desa rutes i llocs per trobar-los aquí quan els vulguis.": ["Guarda rutas y lugares para encontrarlos aquí cuando quieras.", "Save routes and places to find them here whenever you want.", "Enregistre des itinéraires et des lieux pour les retrouver ici."], "Desada a Perfil": ["Guardada en Perfil", "Saved to Profile", "Enregistré dans le profil"], "Desades": ["Guardadas", "Saved", "Enregistrés"], "Desar": ["Guardar", "Save", "Enregistrer"], "Desar els canvis": ["Guardar los cambios", "Save changes", "Enregistrer les modifications"], "Desar la ruta": ["Guardar la ruta", "Save route", "Enregistrer l'itinéraire"], "Descarregant… # %": ["Descargando… # %", "Downloading… # %", "Téléchargement… # %"], "Descarregar PNG": ["Descargar PNG", "Download PNG", "Télécharger le PNG"], "Descarregar SVG": ["Descargar SVG", "Download SVG", "Télécharger le SVG"], "Descarregar les meves dades": ["Descargar mis datos", "Download my data", "Télécharger mes données"], "Descarregar només amb Wi-Fi": ["Descargar solo con wifi", "Download on Wi-Fi only", "Télécharger uniquement en Wi-Fi"], "Descarregar per fer-la sense cobertura": ["Descargar para hacerla sin cobertura", "Download to use without signal", "Télécharger pour l'utiliser sans réseau"], "Descobreix el Vallès que tens a tocar.": ["Descubre el Vallès que tienes al lado.", "Discover the Vallès right on your doorstep.", "Découvre le Vallès à deux pas de chez toi."], "Descobrir": ["Descubrir", "Discover", "Découvrir"], "Descompte per comprar directament a productors de la comarca en mercats i botigues adherides.": ["Descuento para comprar directamente a productores de la comarca en mercados y tiendas adheridas.", "Discount on buying directly from local producers at participating markets and shops.", "Réduction pour acheter directement aux producteurs de la région dans les marchés et boutiques partenaires."], "Descàrrega esborrada": ["Descarga eliminada", "Download deleted", "Téléchargement supprimé"], "Desnivell": ["Desnivel", "Elevation", "Dénivelé"], "Desnivell per dies d'aquesta setmana: Dl #, Dt #, Dc #, Dj #, Dv #, Ds #, Dg #": ["Desnivel por días de esta semana: L #, M #, X #, J #, V #, S #, D #", "Elevation by day this week: Mon #, Tue #, Wed #, Thu #, Fri #, Sat #, Sun #", "Dénivelé par jour cette semaine : lun. #, mar. #, mer. #, jeu. #, ven. #, sam. #, dim. #"], "Distància per dies d'aquesta setmana: Dl #, Dt #, Dc #, Dj #, Dv #, Ds #, Dg #": ["Distancia por días de esta semana: L #, M #, X #, J #, V #, S #, D #", "Distance by day this week: Mon #, Tue #, Wed #, Thu #, Fri #, Sat #, Sun #", "Distance par jour cette semaine : lun. #, mar. #, mer. #, jeu. #, ven. #, sam. #, dim. #"], "Temps per dies d'aquesta setmana: Dl #, Dt #, Dc #, Dj #, Dv #, Ds #, Dg #": ["Tiempo por días de esta semana: L #, M #, X #, J #, V #, S #, D #", "Time by day this week: Mon #, Tue #, Wed #, Thu #, Fri #, Sat #, Sun #", "Temps par jour cette semaine : lun. #, mar. #, mer. #, jeu. #, ven. #, sam. #, dim. #"], "Detall": ["Detalle", "Details", "Détail"], "Dia": ["Día", "Day", "Jour"], "Diapositiva": ["Diapositiva", "Slide", "Diapositive"], "Diapositiva # de #": ["Diapositiva # de #", "Slide # of #", "Diapositive # sur #"], "Dictar": ["Dictar", "Dictate", "Dicter"], "Dificultat": ["Dificultad", "Difficulty", "Difficulté"], "Difícil": ["Difícil", "Hard", "Difficile"], "Distància": ["Distancia", "Distance", "Distance"], "Distàncies de les rutes, del perfil i del mapa.": ["Distancias de las rutas, del perfil y del mapa.", "Distances for routes, your profile and the map.", "Distances des itinéraires, du profil et de la carte."], "Distàncies en quilòmetres i desnivells en metres": ["Distancias en kilómetros y desniveles en metros", "Distances in kilometres and elevation in metres", "Distances en kilomètres et dénivelés en mètres"], "Dilluns": ["Lunes", "Monday", "Lundi"], "Dimarts": ["Martes", "Tuesday", "Mardi"], "Dimecres": ["Miércoles", "Wednesday", "Mercredi"], "Dijous": ["Jueves", "Thursday", "Jeudi"], "Divendres": ["Viernes", "Friday", "Vendredi"], "Dissabte": ["Sábado", "Saturday", "Samedi"], "Diumenge": ["Domingo", "Sunday", "Dimanche"], "Durada": ["Duración", "Duration", "Durée"], "Durada, distància, desnivell i traçat: dades d'exemple. Lloc real del Vallès Oriental.": ["Duración, distancia, desnivel y trazado: datos de ejemplo. Lugar real del Vallès Oriental.", "Duration, distance, elevation and track: sample data. A real place in the Vallès Oriental.", "Durée, distance, dénivelé et tracé : données d'exemple. Lieu réel du Vallès Oriental."], "Durades i dificultats orientatives (dades d'exemple).": ["Duraciones y dificultades orientativas (datos de ejemplo).", "Durations and difficulty levels are approximate (sample data).", "Durées et difficultés indicatives (données d'exemple)."], "Edita": ["Editar", "Edit", "Modifier"], "Edita el missatge per a l'assistent": ["Edita el mensaje para el asistente", "Edit the message for the assistant", "Modifier le message pour l'assistant"], "Editar el perfil": ["Editar el perfil", "Edit profile", "Modifier le profil"], "El compte de demostració no permet canviar la contrasenya.": ["La cuenta de demostración no permite cambiar la contraseña.", "The demo account can't change its password.", "Le compte de démonstration ne permet pas de changer le mot de passe."], "El correu identifica el compte en aquest dispositiu i no es pot canviar.": ["El correo identifica la cuenta en este dispositivo y no se puede cambiar.", "Your email identifies the account on this device and can't be changed.", "L'e-mail identifie le compte sur cet appareil et ne peut pas être modifié."], "El correu no té un format vàlid (exemple: nom@domini.cat).": ["El correo no tiene un formato válido (ejemplo: nombre@dominio.cat).", "That email isn't valid (example: name@domain.cat).", "Cet e-mail n'est pas valide (exemple : nom@domaine.cat)."], "El correu no té un format vàlid.": ["El correo no tiene un formato válido.", "That email isn't valid.", "Cet e-mail n'est pas valide."], "El dictat no està disponible": ["El dictado no está disponible", "Dictation isn't available", "La dictée n'est pas disponible"], "El dolmen de Céllecs i la Pedra de les Orenetes, amb gravats prehistòrics, per la serralada de Marina.": ["El dolmen de Céllecs y la Pedra de les Orenetes, con grabados prehistóricos, por la sierra de Marina.", "The Céllecs dolmen and the Pedra de les Orenetes rock carvings, across the Marina hills.", "Le dolmen de Céllecs et la Pedra de les Orenetes, avec des gravures préhistoriques, dans la serralada de Marina."], "El mapa del prototip és il·lustratiu: encara no té capa topogràfica.": ["El mapa del prototipo es ilustrativo: todavía no tiene capa topográfica.", "The prototype map is illustrative: it doesn't have a topographic layer yet.", "La carte du prototype est illustrative : elle n'a pas encore de couche topographique."], "El meu any amb Valia": ["Mi año con Valia", "My year with Valia", "Mon année avec Valia"], "El meu any amb Valia: # km sense cotxe i # kg de CO₂ estalviats (estimat).": ["Mi año con Valia: # km sin coche y # kg de CO₂ ahorrados (estimado).", "My year with Valia: # km car-free and # kg of CO₂ saved (estimate).", "Mon année avec Valia : # km sans voiture et # kg de CO₂ économisés (estimation)."], "El meu impacte": ["Mi impacto", "My impact", "Mon impact"], "El monestir penjat a la cinglera i els salts d'aigua del Tenes i del Rossinyol. Camí amb trams estrets i graons.": ["El monasterio colgado del acantilado y los saltos de agua del Tenes y del Rossinyol. Camino con tramos estrechos y escalones.", "The monastery perched on the cliff and the Tenes and Rossinyol waterfalls. The path has narrow sections and steps.", "Le monastère accroché à la falaise et les cascades du Tenes et du Rossinyol. Chemin avec des passages étroits et des marches."], "El teu any amb Valia": ["Tu año con Valia", "Your year with Valia", "Ton année avec Valia"], "El teu any amb Valia · #": ["Tu año con Valia · #", "Your year with Valia · #", "Ton année avec Valia · #"], "El teu impacte, les estadístiques, els reptes de grup i la configuració.": ["Tu impacto, las estadísticas, los retos de grupo y la configuración.", "Your impact, stats, group challenges and settings.", "Ton impact, tes statistiques, les défis de groupe et les réglages."], "El teu missatge": ["Tu mensaje", "Your message", "Ton message"], "El teu perfil": ["Tu perfil", "Your profile", "Ton profil"], "El teu resum del dia: punts, ratxa, CO₂ estalviat i una proposta per sortir.": ["Tu resumen del día: puntos, racha, CO₂ ahorrado y una propuesta para salir.", "Your daily summary: points, streak, CO₂ saved and an idea for getting out.", "Ton résumé du jour : points, série, CO₂ économisé et une idée de sortie."], "Els avisos funcionen amb l'app instal·lada": ["Los avisos funcionan con la app instalada", "Alerts work when the app is installed", "Les alertes fonctionnent avec l'app installée"], "Els comentaris i consells de la comunitat del prototip són il·lustratius.": ["Los comentarios y consejos de la comunidad del prototipo son ilustrativos.", "Comments and tips from the prototype community are for illustration.", "Les commentaires et conseils de la communauté du prototype sont illustratifs."], "Els comerços i les ofertes que surten a l'app són d'exemple: encara no hi ha acords signats.": ["Los comercios y las ofertas que salen en la app son de ejemplo: todavía no hay acuerdos firmados.", "The shops and offers in the app are examples: no agreements have been signed yet.", "Les commerces et les offres de l'app sont des exemples : aucun accord n'a encore été signé."], "Els consells passen per moderació abans de publicar-se. En aquest prototip encara no es poden enviar.": ["Los consejos pasan por moderación antes de publicarse. En este prototipo todavía no se pueden enviar.", "Tips are moderated before they're published. You can't send them in this prototype yet.", "Les conseils sont modérés avant publication. Dans ce prototype, on ne peut pas encore les envoyer."], "Els meus reptes": ["Mis retos", "My challenges", "Mes défis"], "Els punts d'energia i els codis de recompensa són d'exemple i no tenen valor real.": ["Los puntos de energía y los códigos de recompensa son de ejemplo y no tienen valor real.", "Energy points and reward codes are samples and have no real value.", "Les points d'énergie et les codes de récompense sont des exemples sans valeur réelle."], "Els teus drets": ["Tus derechos", "Your rights", "Tes droits"], "Els teus interessos": ["Tus intereses", "Your interests", "Tes centres d'intérêt"], "Els teus punts d'energia": ["Tus puntos de energía", "Your energy points", "Tes points d'énergie"], "Els teus punts es converteixen en una plantada en una jornada de reforestació organitzada a la comarca.": ["Tus puntos se convierten en una plantación en una jornada de reforestación organizada en la comarca.", "Your points become a tree planted during a reforestation day organised in the area.", "Tes points deviennent une plantation lors d'une journée de reboisement organisée dans la région."], "En aquest navegador els avisos funcionen amb l'app instal·lada": ["En este navegador los avisos funcionan con la app instalada", "In this browser, alerts work when the app is installed", "Dans ce navigateur, les alertes fonctionnent avec l'app installée"], "En aquest prototip els comptes només es desen en aquest dispositiu i no hi ha servidor de correu. Pots crear un compte nou o entrar amb el compte de demostració.": ["En este prototipo las cuentas solo se guardan en este dispositivo y no hay servidor de correo. Puedes crear una cuenta nueva o entrar con la cuenta de demostración.", "In this prototype, accounts are only stored on this device and there's no email server. You can create a new account or use the demo account.", "Dans ce prototype, les comptes sont enregistrés uniquement sur cet appareil et il n'y a pas de serveur d'e-mail. Tu peux créer un compte ou utiliser le compte de démonstration."], "En aquest prototip encara no hi ha un canal de suport real. Mentrestant, pots preguntar a l'assistent de Valia al xat.": ["En este prototipo todavía no hay un canal de soporte real. Mientras tanto, puedes preguntar al asistente de Valia en el chat.", "There's no real support channel in this prototype yet. In the meantime, you can ask the Valia assistant in the chat.", "Il n'y a pas encore de vrai canal d'assistance dans ce prototype. En attendant, tu peux demander à l'assistant Valia dans le chat."], "En bici! Buscaré camins sense trànsit.": ["¡En bici! Buscaré caminos sin tráfico.", "By bike! I'll look for traffic-free paths.", "À vélo ! Je chercherai des chemins sans circulation."], "En bici, el més agradable és pla i sense trànsit:": ["En bici, lo más agradable es llano y sin tráfico:", "By bike, flat and traffic-free is best:", "À vélo, le plus agréable, c'est plat et sans circulation :"], "En el prototip no es fa cap trucada.": ["En el prototipo no se hace ninguna llamada.", "No call is made in the prototype.", "Aucun appel n'est passé dans le prototype."], "En família": ["En familia", "With family", "En famille"], "En mode convidat no es desa res": ["En modo invitado no se guarda nada", "Nothing is saved in guest mode", "Rien n'est enregistré en mode invité"], "En parella": ["En pareja", "As a couple", "En couple"], "En pausa": ["En pausa", "Paused", "En pause"], "Encara no": ["Todavía no", "Not yet", "Pas encore"], "Encara no has fet cap ruta": ["Todavía no has hecho ninguna ruta", "You haven't done any routes yet", "Tu n'as encore fait aucun itinéraire"], "Encara no hi ha connexió": ["Todavía no hay conexión", "Still no connection", "Toujours pas de connexion"], "Encara no hi ha consells de la comunitat per a aquesta ruta.": ["Todavía no hay consejos de la comunidad para esta ruta.", "There are no community tips for this route yet.", "Il n'y a pas encore de conseils de la communauté pour cet itinéraire."], "Encara no n'has canviat cap": ["Todavía no has canjeado ninguna", "You haven't redeemed any yet", "Tu n'en as encore échangé aucune"], "Encara no sé respondre això. Prova de preguntar-me per rutes, transport, nens, bici, patrimoni, punts o CO₂.": ["Todavía no sé responder a eso. Prueba a preguntarme por rutas, transporte, niños, bici, patrimonio, puntos o CO₂.", "I can't answer that yet. Try asking me about routes, transport, kids, bikes, heritage, points or CO₂.", "Je ne sais pas encore répondre à ça. Pose-moi une question sur les itinéraires, les transports, les enfants, le vélo, le patrimoine, les points ou le CO₂."], "Encara no tens cap recompensa": ["Todavía no tienes ninguna recompensa", "You don't have any rewards yet", "Tu n'as encore aucune récompense"], "Encara no tens prou punts": ["Todavía no tienes suficientes puntos", "You don't have enough points yet", "Tu n'as pas encore assez de points"], "Encara no tens res desat": ["Todavía no tienes nada guardado", "You haven't saved anything yet", "Tu n'as encore rien enregistré"], "Enllaç copiat": ["Enlace copiado", "Link copied", "Lien copié"], "Enllaç enviat": ["Enlace enviado", "Link sent", "Lien envoyé"], "Enllaç tornat a enviar (demostració)": ["Enlace reenviado (demostración)", "Link sent again (demo)", "Lien renvoyé (démonstration)"], "Enrere": ["Atrás", "Back", "Retour"], "Entitat organitzadora i calendari: pendents d'acord.": ["Entidad organizadora y calendario: pendientes de acuerdo.", "Organising body and dates: to be agreed.", "Organisme organisateur et calendrier : en attente d'accord."], "Entra com a convidat": ["Entra como invitado", "Continue as a guest", "Continuer en invité"], "Entrada a un museu de la comarca": ["Entrada a un museo de la comarca", "Entry to a local museum", "Entrée dans un musée de la région"], "Entrada a un museu o espai patrimonial del Vallès Oriental adherit al programa.": ["Entrada a un museo o espacio patrimonial del Vallès Oriental adherido al programa.", "Entry to a museum or heritage site in the Vallès Oriental that's part of the programme.", "Entrée dans un musée ou un site patrimonial du Vallès Oriental partenaire du programme."], "Entre tots aquest mes": ["Entre todos este mes", "All of us this month", "Tous ensemble ce mois-ci"], "Entre tots, # kg": ["Entre todos, # kg", "All together, # kg", "Tous ensemble, # kg"], "Enviar": ["Enviar", "Send", "Envoyer"], "Enviar l'enllaç de nou": ["Reenviar el enlace", "Send the link again", "Renvoyer le lien"], "Equipaments participants: pendents d'acord amb ajuntaments.": ["Equipamientos participantes: pendientes de acuerdo con ayuntamientos.", "Participating venues: to be agreed with town councils.", "Équipements participants : en attente d'accord avec les mairies."], "Esborrar": ["Eliminar", "Delete", "Supprimer"], "Esborrar el compte": ["Eliminar la cuenta", "Delete account", "Supprimer le compte"], "Esborrar el compte?": ["¿Eliminar la cuenta?", "Delete account?", "Supprimer le compte ?"], "Esborrar la descàrrega": ["Eliminar la descarga", "Delete download", "Supprimer le téléchargement"], "Esborrar les opcions": ["Borrar las opciones", "Clear the options", "Effacer les options"], "Escaneja'l amb la càmera": ["Escanéalo con la cámara", "Scan it with your camera", "Scanne-le avec l'appareil photo"], "Escoltant… parla ara": ["Escuchando… habla ahora", "Listening… speak now", "J'écoute… parle maintenant"], "Escriu el correu electrònic.": ["Escribe el correo electrónico.", "Enter your email.", "Saisis ton e-mail."], "Escriu el teu nom (mínim # lletres).": ["Escribe tu nombre (mínimo # letras).", "Enter your name (at least # letters).", "Saisis ton nom (# lettres minimum)."], "Escriu la contrasenya actual.": ["Escribe la contraseña actual.", "Enter your current password.", "Saisis ton mot de passe actuel."], "Escriu la contrasenya.": ["Escribe la contraseña.", "Enter your password.", "Saisis le mot de passe."], "Escriu un missatge…": ["Escribe un mensaje…", "Write a message…", "Écris un message…"], "Escriu un nom de # lletres o més.": ["Escribe un nombre de # letras o más.", "Enter a name with # letters or more.", "Saisis un nom de # lettres ou plus."], "Escriu-ho amb les teves paraules.": ["Escríbelo con tus palabras.", "Write it in your own words.", "Écris-le avec tes propres mots."], "Escriu-nos i et respondrem.": ["Escríbenos y te responderemos.", "Write to us and we'll get back to you.", "Écris-nous et nous te répondrons."], "Escriure al suport": ["Escribir al soporte", "Contact support", "Écrire à l'assistance"], "Església de Santa Maria de Tagamanent": ["Iglesia de Santa Maria de Tagamanent", "Church of Santa Maria de Tagamanent", "Église Santa Maria de Tagamanent"], "Esmorzar en un bar de poble": ["Desayuno en un bar de pueblo", "Breakfast at a village bar", "Petit-déjeuner dans un bar de village"], "Espai Rural de Gallecs": ["Espai Rural de Gallecs", "Gallecs Rural Area", "Espace rural de Gallecs"], "Espai rural de Gallecs": ["Espai rural de Gallecs", "Gallecs Rural Area", "Espace rural de Gallecs"], "Espai al mòbil": ["Espacio en el móvil", "Phone storage", "Espace sur le téléphone"], "Establiments adherits: pendents dels convenis Km#.": ["Establecimientos adheridos: pendientes de los convenios Km#.", "Participating businesses: pending Km# agreements.", "Établissements partenaires : en attente des conventions Km#."], "Estadístiques": ["Estadísticas", "Stats", "Statistiques"], "Estadístiques anònimes:": ["Estadísticas anónimas:", "Anonymous statistics:", "Statistiques anonymes :"], "Estadístiques d'ús anònimes": ["Estadísticas de uso anónimas", "Anonymous usage statistics", "Statistiques d'utilisation anonymes"], "Estil del mapa": ["Estilo del mapa", "Map style", "Style de carte"], "Estàs com a convidat: veus dades d'exemple i no es desa res.": ["Estás como invitado: ves datos de ejemplo y no se guarda nada.", "You're a guest: you see sample data and nothing is saved.", "Tu es invité : tu vois des données d'exemple et rien n'est enregistré."], "Estàs navegant com a convidat. Algunes funcions no estan disponibles.": ["Estás navegando como invitado. Algunas funciones no están disponibles.", "You're browsing as a guest. Some features aren't available.", "Tu navigues en invité. Certaines fonctions ne sont pas disponibles."], "Estàs parlant amb una IA": ["Estás hablando con una IA", "You're talking to an AI", "Tu parles avec une IA"], "Et donem la benvinguda": ["Te damos la bienvenida", "Welcome back", "Bienvenue"], "Et falten # punts": ["Te faltan # puntos", "You need # more points", "Il te manque # points"], "Et falten # punts, unes # rutes.": ["Te faltan # puntos, unas # rutas.", "You need # more points, about # routes.", "Il te manque # points, environ # itinéraires."], "Et podem avisar de reptes nous i de rutes que t'agradaran.": ["Te podemos avisar de retos nuevos y de rutas que te gustarán.", "We can let you know about new challenges and routes you'll love.", "Nous pouvons te prévenir des nouveaux défis et des itinéraires qui te plairont."], "Et proposo una sortida suau i de poc impacte:": ["Te propongo una salida suave y de poco impacto:", "Here's a gentle, low-impact outing:", "Je te propose une sortie douce et à faible impact :"], "Ets a # m de la ruta. Torna enrere uns # m i agafa el camí de la dreta.": ["Estás a # m de la ruta. Vuelve unos # m atrás y coge el camino de la derecha.", "You're # m off the route. Go back about # m and take the path on the right.", "Tu es à # m de l'itinéraire. Reviens d'environ # m et prends le chemin de droite."], "Exigent": ["Exigente", "Demanding", "Exigeant"], "Explorar": ["Explorar", "Explore", "Explorer"], "Explorar rutes": ["Explorar rutas", "Explore routes", "Explorer les itinéraires"], "Falten": ["Faltan", "Left", "Restant"], "Família Puig · # membres": ["Familia Puig · # miembros", "Puig family · # members", "Famille Puig · # membres"], "Fem servir la teva ubicació per mostrar rutes a prop i fer els check-ins. No gravem el recorregut ni l'enviem enlloc.": ["Usamos tu ubicación para mostrar rutas cerca y hacer los check-ins. No grabamos el recorrido ni lo enviamos a ningún sitio.", "We use your location to show nearby routes and for check-ins. We don't record your route or send it anywhere.", "Nous utilisons ta position pour afficher les itinéraires proches et faire les check-ins. Nous n'enregistrons pas ton parcours et ne l'envoyons nulle part."], "Fer check-in": ["Hacer check-in", "Check in", "Check-in"], "Fes check-ins, suma punts d'energia i canvia'ls al comerç local i en patrimoni.": ["Haz check-ins, suma puntos de energía y canjéalos en el comercio local y en patrimonio.", "Check in, collect energy points and redeem them at local shops and heritage sites.", "Fais des check-ins, cumule des points d'énergie et échange-les dans le commerce local et le patrimoine."], "Fes servir el micròfon del teclat per dictar": ["Usa el micrófono del teclado para dictar", "Use the keyboard microphone to dictate", "Utilise le micro du clavier pour dicter"], "Fes una captura de pantalla per desar-la": ["Haz una captura de pantalla para guardarla", "Take a screenshot to save it", "Fais une capture d'écran pour l'enregistrer"], "Fet": ["Hecho", "Done", "OK"], "Fet! Torno a fer servir les teves opcions.": ["¡Hecho! Vuelvo a usar tus opciones.", "Done! I'm using your options again.", "C'est fait ! J'utilise de nouveau tes options."], "Fetes": ["Hechas", "Done", "Faits"], "Filtres": ["Filtros", "Filters", "Filtres"], "Filtres:": ["Filtros:", "Filters:", "Filtres :"], "Finalitzar": ["Finalizar", "Finish", "Terminer"], "Fins a # contactes veuran on ets mentre dura la ruta. S'atura sola quan l'acabes.": ["Hasta # contactos verán dónde estás mientras dura la ruta. Se detiene sola cuando la acabas.", "Up to # contacts will see where you are during the route. It stops by itself when you finish.", "Jusqu'à # contacts verront où tu es pendant l'itinéraire. Le partage s'arrête tout seul à la fin."], "Fitxer JSON amb el compte, les rutes i els punts": ["Archivo JSON con la cuenta, las rutas y los puntos", "JSON file with your account, routes and points", "Fichier JSON avec le compte, les itinéraires et les points"], "Font del Lleó": ["Font del Lleó", "Font del Lleó fountain", "Fontaine du Lleó"], "Font prevista per a la fitxa: Inventari del Patrimoni Cultural de la Diputació de Barcelona. Text del prototip.": ["Fuente prevista para la ficha: Inventario del Patrimonio Cultural de la Diputació de Barcelona. Texto del prototipo.", "Planned source for this card: Barcelona Provincial Council's Cultural Heritage Inventory. Prototype text.", "Source prévue pour la fiche : Inventaire du patrimoine culturel de la Diputació de Barcelona. Texte du prototype."], "Fosc": ["Oscuro", "Dark", "Sombre"], "Fosos suaus en lloc de moviments; la mascota queda quieta": ["Fundidos suaves en lugar de movimientos; la mascota se queda quieta", "Soft fades instead of motion; the mascot stays still", "Fondus doux au lieu de mouvements ; la mascotte reste immobile"], "Foto afegida": ["Foto añadida", "Photo added", "Photo ajoutée"], "Foto teva": ["Tu foto", "Your photo", "Ta photo"], "Fotografies": ["Fotografías", "Photos", "Photos"], "Fotos de la sortida": ["Fotos de la salida", "Photos from the outing", "Photos de la sortie"], "Fotos reals de llocs del Vallès (il·lustratives, no sempre del punt exacte).": ["Fotos reales de lugares del Vallès (ilustrativas, no siempre del punto exacto).", "Real photos of places in the Vallès (illustrative, not always the exact spot).", "Photos réelles de lieux du Vallès (illustratives, pas toujours du lieu exact)."], "Fotos reals il·lustratives.": ["Fotos reales ilustrativas.", "Real photos, for illustration.", "Photos réelles illustratives."], "Fotos reals de llocs del Vallès fetes per l'equip del projecte.": ["Fotos reales de lugares del Vallès hechas por el equipo del proyecto.", "Real photos of places in the Vallès taken by the project team.", "Photos réelles de lieux du Vallès prises par l'équipe du projet."], "Francès": ["Francés", "French", "Français"], "Fraunces (SIL Open Font License #) i icones Lucide (llicència ISC).": ["Fraunces (SIL Open Font License #) e iconos Lucide (licencia ISC).", "Fraunces (SIL Open Font License #) and Lucide icons (ISC licence).", "Fraunces (SIL Open Font License #) et icônes Lucide (licence ISC)."], "Fàcil": ["Fácil", "Easy", "Facile"], "Gallecs en bicicleta": ["Gallecs en bicicleta", "Gallecs by bike", "Gallecs à vélo"], "Gastronomia": ["Gastronomía", "Food", "Gastronomie"], "Gastronomia Km#": ["Gastronomía Km#", "Km# food", "Gastronomie Km#"], "Gran": ["Grande", "Large", "Grand"], "Granollers: la Porxada i el mercat": ["Granollers: la Porxada y el mercado", "Granollers: the Porxada and the market", "Granollers : la Porxada et le marché"], "Grups, xifres i persones: il·lustratius.": ["Grupos, cifras y personas: ilustrativos.", "Groups, figures and people: for illustration.", "Groupes, chiffres et personnes : illustratifs."], "Gràcies! Avís registrat": ["¡Gracias! Aviso registrado", "Thanks! Report saved", "Merci ! Signalement enregistré"], "Gràcies: ho revisarem": ["Gracias: lo revisaremos", "Thanks: we'll review it", "Merci : nous allons vérifier"], "Guanyats": ["Ganados", "Earned", "Gagnés"], "Guanyes punts amb cada check-in (+#) i quan acabes una ruta. Com més et mous de forma activa, més en sumes.": ["Ganas puntos con cada check-in (+#) y cuando acabas una ruta. Cuanto más te mueves de forma activa, más sumas.", "You earn points with every check-in (+#) and when you finish a route. The more active you are, the more you collect.", "Tu gagnes des points à chaque check-in (+#) et quand tu termines un itinéraire. Plus tu bouges, plus tu en cumules."], "Has arribat al nivell més alt.": ["Has llegado al nivel más alto.", "You've reached the top level.", "Tu as atteint le niveau le plus élevé."], "Has canviat # punts. Ara en tens #.": ["Has canjeado # puntos. Ahora tienes #.", "You redeemed # points. You now have #.", "Tu as échangé # points. Il t'en reste #."], "Has d'acceptar les condicions per crear el compte.": ["Tienes que aceptar las condiciones para crear la cuenta.", "You need to accept the terms to create the account.", "Tu dois accepter les conditions pour créer le compte."], "Has descobert el Vallès a peu i en bici.": ["Has descubierto el Vallès a pie y en bici.", "You've discovered the Vallès on foot and by bike.", "Tu as découvert le Vallès à pied et à vélo."], "Has editat el missatge.": ["Has editado el mensaje.", "You edited the message.", "Tu as modifié le message."], "Has editat el text: refés-lo per aplicar-hi les opcions.": ["Has editado el texto: rehazlo para aplicar las opciones.", "You edited the text: rebuild it to apply the options.", "Tu as modifié le texte : refais-le pour appliquer les options."], "Has estalviat": ["Has ahorrado", "You've saved", "Tu as économisé"], "Has estalviat # kg de CO₂ (estimat) i has fet # km sense cotxe. Comptem el que estalvies quan vas a l'inici de la ruta a peu, en bici o en transport públic en lloc d'anar-hi en cotxe.": ["Has ahorrado # kg de CO₂ (estimado) y has hecho # km sin coche. Contamos lo que ahorras cuando vas al inicio de la ruta a pie, en bici o en transporte público en lugar de ir en coche.", "You've saved # kg of CO₂ (estimate) and covered # km car-free. We count what you save by getting to the start on foot, by bike or by public transport instead of driving.", "Tu as économisé # kg de CO₂ (estimation) et parcouru # km sans voiture. Nous comptons ce que tu économises en allant au départ à pied, à vélo ou en transports en commun plutôt qu'en voiture."], "Has oblidat la contrasenya?": ["¿Has olvidado la contraseña?", "Forgot your password?", "Mot de passe oublié ?"], "He trobat una ruta que encaixa amb el que demanes:": ["He encontrado una ruta que encaja con lo que pides:", "I found one route that matches what you asked for:", "J'ai trouvé un itinéraire qui correspond à ta demande :"], "He trobat dues rutes que encaixen amb el que demanes:": ["He encontrado dos rutas que encajan con lo que pides:", "I found two routes that match what you asked for:", "J'ai trouvé deux itinéraires qui correspondent à ta demande :"], "He trobat tres rutes que encaixen amb el que demanes:": ["He encontrado tres rutas que encajan con lo que pides:", "I found three routes that match what you asked for:", "J'ai trouvé trois itinéraires qui correspondent à ta demande :"], "He trobat # rutes que encaixen amb el que demanes. Te'n proposo tres:": ["He encontrado # rutas que encajan con lo que pides. Te propongo tres:", "I found # routes that match what you asked for. Here are three:", "J'ai trouvé # itinéraires qui correspondent à ta demande. En voici trois :"], "Hi ha canvis": ["Hay cambios", "Changes available", "Mises à jour disponibles"], "Hi ha hagut un problema amb el servidor. Torna-ho a provar d'aquí a uns instants.": ["Ha habido un problema con el servidor. Vuelve a intentarlo dentro de unos instantes.", "There was a server problem. Please try again in a moment.", "Un problème est survenu avec le serveur. Réessaie dans quelques instants."], "Hi vull anar en tren o bus": ["Quiero ir en tren o bus", "I want to get there by train or bus", "Je veux y aller en train ou en bus"], "Historial de punts": ["Historial de puntos", "Points history", "Historique des points"], "Història": ["Historia", "History", "Histoire"], "Hola! Puc recomanar-te rutes, explicar-te com arribar-hi en transport públic o com guanyar punts. Què et ve de gust?": ["¡Hola! Puedo recomendarte rutas, explicarte cómo llegar en transporte público o cómo ganar puntos. ¿Qué te apetece?", "Hi! I can recommend routes, explain how to get there by public transport or how to earn points. What do you feel like?", "Salut ! Je peux te recommander des itinéraires, t'expliquer comment y aller en transports en commun ou comment gagner des points. De quoi as-tu envie ?"], "I acabar amb producte Km#!": ["¡Y acabar con producto Km#!", "And finish with Km# produce!", "Et finir avec des produits Km# !"], "Idioma": ["Idioma", "Language", "Langue"], "Idioma canviat": ["Idioma cambiado", "Language changed", "Langue modifiée"], "Ignora": ["Ignorar", "Ignore", "Ignorer"], "Imatge il·lustrativa": ["Imagen ilustrativa", "Illustrative image", "Image illustrative"], "Impacte": ["Impacto", "Impact", "Impact"], "Impacte sostenible": ["Impacto sostenible", "Sustainable impact", "Impact durable"], "Informació errònia de la ruta": ["Información errónea de la ruta", "Wrong route information", "Informations erronées sur l'itinéraire"], "Informar d'un problema en una ruta": ["Informar de un problema en una ruta", "Report a problem on a route", "Signaler un problème sur un itinéraire"], "Inici": ["Inicio", "Home", "Accueil"], "Inici de sessió": ["Inicio de sesión", "Sign in", "Connexion"], "Inicia la sessió per continuar.": ["Inicia sesión para continuar.", "Sign in to continue.", "Connecte-toi pour continuer."], "Inicia sessió": ["Iniciar sesión", "Sign in", "Se connecter"], "Iniciar ruta": ["Iniciar ruta", "Start route", "Démarrer l'itinéraire"], "Insígnies": ["Insignias", "Badges", "Badges"], "Interessos": ["Intereses", "Interests", "Centres d'intérêt"], "Itinerari termal de Caldes": ["Itinerario termal de Caldes", "Caldes thermal trail", "Itinéraire thermal de Caldes"], "Itinerari termal de Caldes · # punts, en ordre de la ruta": ["Itinerario termal de Caldes · # puntos, en el orden de la ruta", "Caldes thermal trail · # spots, in route order", "Itinéraire thermal de Caldes · # points, dans l'ordre du parcours"], "Ja el pots aconseguir!": ["¡Ya lo puedes conseguir!", "You can get it now!", "Tu peux déjà l'obtenir !"], "Ja hi ha un compte amb aquest correu en aquest dispositiu. Inicia sessió.": ["Ya hay una cuenta con este correo en este dispositivo. Inicia sesión.", "There's already an account with this email on this device. Sign in.", "Un compte existe déjà avec cet e-mail sur cet appareil. Connecte-toi."], "Ja la pots bescanviar a la botiga.": ["Ya la puedes canjear en la tienda.", "You can redeem it in the shop now.", "Tu peux déjà l'échanger dans la boutique."], "Ja tinc compte: inicia sessió": ["Ya tengo cuenta: iniciar sesión", "I have an account: sign in", "J'ai déjà un compte : me connecter"], "Jurat": ["Tribunal", "Jury", "Jury"], "Jurat del TR": ["Tribunal del TR", "TR jury", "Jury du TR"], "L'aigua surt molt calenta: vigila amb els nens.": ["El agua sale muy caliente: cuidado con los niños.", "The water comes out very hot: take care with children.", "L'eau sort très chaude : attention aux enfants."], "L'app segueix la mida de text del sistema (text dinàmic).": ["La app sigue el tamaño de texto del sistema (texto dinámico).", "The app follows your system text size (Dynamic Type).", "L'app suit la taille de texte du système (texte dynamique)."], "L'assistent està pensant": ["El asistente está pensando", "The assistant is thinking", "L'assistant réfléchit"], "L'assistent pot cometre errors. Comprova horaris i condicions abans de sortir.": ["El asistente puede cometer errores. Comprueba horarios y condiciones antes de salir.", "The assistant can make mistakes. Check times and conditions before you go.", "L'assistant peut se tromper. Vérifie les horaires et les conditions avant de partir."], "L'avís es desa en aquest dispositiu (demostració).": ["El aviso se guarda en este dispositivo (demostración).", "The report is saved on this device (demo).", "Le signalement est enregistré sur cet appareil (démonstration)."], "La Porxada del segle XVI, el centre històric i el mercat setmanal, amb parades de productors de proximitat.": ["La Porxada del siglo XVI, el centro histórico y el mercado semanal, con puestos de productores de proximidad.", "The 16th-century Porxada, the old town and the weekly market, with stalls from local producers.", "La Porxada du XVIe siècle, le centre historique et le marché hebdomadaire, avec des étals de producteurs locaux."], "La contrasenya actual no és correcta.": ["La contraseña actual no es correcta.", "Your current password is incorrect.", "Le mot de passe actuel est incorrect."], "La contrasenya es desa resumida en aquest dispositiu. Prototip sense servidor.": ["La contraseña se guarda cifrada en este dispositivo. Prototipo sin servidor.", "Your password is stored hashed on this device. Prototype without a server.", "Le mot de passe est enregistré haché sur cet appareil. Prototype sans serveur."], "La contrasenya ha de tenir # caràcters com a mínim.": ["La contraseña debe tener # caracteres como mínimo.", "Your password must be at least # characters.", "Le mot de passe doit contenir au moins # caractères."], "La contrasenya no és correcta.": ["La contraseña no es correcta.", "Incorrect password.", "Mot de passe incorrect."], "La contrasenya nova ha de tenir # caràcters o més.": ["La contraseña nueva debe tener # caracteres o más.", "Your new password must be # characters or more.", "Le nouveau mot de passe doit contenir # caractères ou plus."], "La fageda del Montseny": ["El hayedo del Montseny", "The Montseny beech forest", "La hêtraie du Montseny"], "La meva ubicació": ["Mi ubicación", "My location", "Ma position"], "La teva aportació: # check-ins": ["Tu aportación: # check-ins", "Your contribution: # check-ins", "Ta contribution : # check-ins"], "La teva aportació: # km (# %)": ["Tu aportación: # km (# %)", "Your contribution: # km (# %)", "Ta contribution : # km (# %)"], "La teva privacitat": ["Tu privacidad", "Your privacy", "Ta confidentialité"], "Les contrasenyes no coincideixen.": ["Las contraseñas no coinciden.", "Passwords don't match.", "Les mots de passe ne correspondent pas."], "Les durades i les dificultats són orientatives (dades d'exemple).": ["Las duraciones y las dificultades son orientativas (datos de ejemplo).", "Durations and difficulty levels are approximate (sample data).", "Les durées et les difficultés sont indicatives (données d'exemple)."], "Les meves recompenses": ["Mis recompensas", "My rewards", "Mes récompenses"], "Les preferències es desen en aquest dispositiu. L'enviament d'avisos necessita el servidor de Valia (en preparació).": ["Las preferencias se guardan en este dispositivo. El envío de avisos necesita el servidor de Valia (en preparación).", "Preferences are saved on this device. Sending alerts needs the Valia server (coming soon).", "Les préférences sont enregistrées sur cet appareil. L'envoi d'alertes nécessite le serveur de Valia (en préparation)."], "Les rutes i els consells són orientatius. Abans de sortir, comprova el temps, l'estat dels camins i les restriccions d'accés. En cas d'emergència, truca al #.": ["Las rutas y los consejos son orientativos. Antes de salir, comprueba el tiempo, el estado de los caminos y las restricciones de acceso. En caso de emergencia, llama al #.", "Routes and tips are for guidance only. Before you go, check the weather, trail conditions and any access restrictions. In an emergency, call #.", "Les itinéraires et les conseils sont indicatifs. Avant de partir, vérifie la météo, l'état des chemins et les restrictions d'accès. En cas d'urgence, appelle le #."], "Les teves dades es queden desades en aquest dispositiu.": ["Tus datos se quedan guardados en este dispositivo.", "Your data stays saved on this device.", "Tes données restent enregistrées sur cet appareil."], "Les teves rutes": ["Tus rutas", "Your routes", "Tes itinéraires"], "Lineal": ["Lineal", "One way", "Aller simple"], "Llavor": ["Semilla", "Seed", "Graine"], "Llegir les condicions i la privacitat": ["Leer las condiciones y la privacidad", "Read the terms and privacy policy", "Lire les conditions et la confidentialité"], "Llocs reals del Vallès Oriental amb fotos reals. Xifres de punts, impacte i reptes: dades d'exemple.": ["Lugares reales del Vallès Oriental con fotos reales. Cifras de puntos, impacto y retos: datos de ejemplo.", "Real places in the Vallès Oriental with real photos. Points, impact and challenge figures: sample data.", "Lieux réels du Vallès Oriental avec des photos réelles. Points, impact et défis : données d'exemple."], "Llocs reals del Vallès Oriental. Durades, distàncies i desnivells: dades d'exemple. Fotos reals il·lustratives.": ["Lugares reales del Vallès Oriental. Duraciones, distancias y desniveles: datos de ejemplo. Fotos reales ilustrativas.", "Real places in the Vallès Oriental. Durations, distances and elevation: sample data. Real photos, for illustration.", "Lieux réels du Vallès Oriental. Durées, distances et dénivelés : données d'exemple. Photos réelles illustratives."], "Llocs visitats": ["Lugares visitados", "Places visited", "Lieux visités"], "llocs visitats": ["lugares visitados", "places visited", "lieux visités"], "M'interessa": ["Me interesa", "I'm interested in", "Ça m'intéresse"], "Mapa": ["Mapa", "Map", "Carte"], "Mapa base il·lustratiu del prototip": ["Mapa base ilustrativo del prototipo", "Illustrative base map for the prototype", "Fond de carte illustratif du prototype"], "Mapa de la ruta amb la teva posició i # check-ins fets": ["Mapa de la ruta con tu posición y # check-ins hechos", "Route map with your position and # check-ins done", "Carte de l'itinéraire avec ta position et # check-ins effectués"], "Mapa del Vallès Oriental amb les activitats": ["Mapa del Vallès Oriental con las actividades", "Map of the Vallès Oriental with activities", "Carte du Vallès Oriental avec les activités"], "Mapa del prototip": ["Mapa del prototipo", "Prototype map", "Carte du prototype"], "Mapa il·lustratiu de creació pròpia. No reprodueix cap cartografia oficial.": ["Mapa ilustrativo de creación propia. No reproduce ninguna cartografía oficial.", "An illustrative map we drew ourselves. It doesn't reproduce any official mapping.", "Carte illustrative de création propre. Elle ne reproduit aucune cartographie officielle."], "Mapa, check-ins i fitxes": ["Mapa, check-ins y fichas", "Map, check-ins and cards", "Carte, check-ins et fiches"], "Mapes": ["Mapas", "Maps", "Cartes"], "Mapes i seguretat": ["Mapas y seguridad", "Maps & safety", "Cartes et sécurité"], "Mapes sense connexió": ["Mapas sin conexión", "Offline maps", "Cartes hors ligne"], "Marcar com a objectiu": ["Marcar como objetivo", "Set as goal", "Définir comme objectif"], "Mascota de Valia": ["Mascota de Valia", "Valia mascot", "Mascotte de Valia"], "Membre des del": ["Miembro desde el", "Member since", "Membre depuis le"], "Menys de # h": ["Menos de # h", "Under # h", "Moins de # h"], "Mes": ["Mes", "Month", "Mois"], "Mida del text": ["Tamaño del texto", "Text size", "Taille du texte"], "Mig dia d'aventura. M'agrada!": ["Medio día de aventura. ¡Me gusta!", "Half a day of adventure. I like it!", "Une demi-journée d'aventure. J'adore !"], "Milles": ["Millas", "Miles", "Miles"], "Millor hora: abans de les # h. Anar-hi quan hi ha poca gent ajuda a no massificar l'entorn.": ["Mejor hora: antes de las # h. Ir cuando hay poca gente ayuda a no masificar el entorno.", "Best time: before # h. Going when it's quiet helps avoid overcrowding.", "Meilleure heure : avant # h. Y aller quand il y a peu de monde aide à éviter la surfréquentation."], "Missatge de l'assistent": ["Mensaje del asistente", "Assistant message", "Message de l'assistant"], "Missatge per a l'assistent": ["Mensaje para el asistente", "Message for the assistant", "Message pour l'assistant"], "Mitjà": ["Medio", "Medium", "Moyen"], "Mobilitat": ["Movilidad", "Mobility", "Mobilité"], "Mode convidat · dades d'exemple": ["Modo invitado · datos de ejemplo", "Guest mode · sample data", "Mode invité · données d'exemple"], "Moderada": ["Moderada", "Moderate", "Modérée"], "Molt gran": ["Muy grande", "Extra large", "Très grand"], "Monestir de Sant Miquel del Fai": ["Monasterio de Sant Miquel del Fai", "Sant Miquel del Fai monastery", "Monastère de Sant Miquel del Fai"], "Mostrar la contrasenya": ["Mostrar la contraseña", "Show password", "Afficher le mot de passe"], "Mou-te a l'aire lliure, amb seny.": ["Muévete al aire libre, con cabeza.", "Get outdoors, responsibly.", "Bouge en plein air, avec bon sens."], "Moviments": ["Movimientos", "Activity", "Mouvements"], "Muntanya": ["Montaña", "Mountains", "Montagne"], "Museu-Arxiu Tomàs Balvey": ["Museu-Arxiu Tomàs Balvey", "Tomàs Balvey Museum & Archive", "Musée-Archives Tomàs Balvey"], "Màx. #°": ["Máx. #°", "High #°", "Max. #°"], "Més curta": ["Más corta", "Shorter", "Plus courte"], "Més de # h": ["Más de # h", "Over # h", "Plus de # h"], "Més opcions: denunciar o amagar": ["Más opciones: denunciar u ocultar", "More options: report or hide", "Plus d'options : signaler ou masquer"], "Més rutes amb tren": ["Más rutas con tren", "More routes by train", "Plus d'itinéraires en train"], "Natura": ["Naturaleza", "Nature", "Nature"], "Natura, cultura i història d'un territori que potser encara no coneixes.": ["Naturaleza, cultura e historia de un territorio que quizá aún no conoces.", "Nature, culture and history in a place you may not know yet.", "Nature, culture et histoire d'un territoire que tu ne connais peut-être pas encore."], "Natura: el Vallès en va ple.": ["Naturaleza: el Vallès va lleno.", "Nature: the Vallès is full of it.", "Nature : le Vallès en regorge."], "Navegació principal": ["Navegación principal", "Main navigation", "Navigation principale"], "Netejar": ["Limpiar", "Clear", "Effacer"], "Nivell": ["Nivel", "Level", "Niveau"], "Nivell i insígnies: obrir el perfil": ["Nivel e insignias: abrir el perfil", "Level and badges: open profile", "Niveau et badges : ouvrir le profil"], "Nivell màxim": ["Nivel máximo", "Top level", "Niveau maximal"], "No": ["No", "No", "Non"], "No cal escriure res: tria opcions i toca «Cerca la meva ruta».": ["No hace falta escribir nada: elige opciones y toca «Busca mi ruta».", "No need to type anything: pick options and tap \"Find my route\".", "Pas besoin d'écrire : choisis des options et touche « Trouver mon itinéraire »."], "No disponible": ["No disponible", "Not available", "Indisponible"], "No gravem el teu recorregut · demostració": ["No grabamos tu recorrido · demostración", "We don't record your track · demo", "Nous n'enregistrons pas ton parcours · démonstration"], "No guanyaràs els punts de la ruta.": ["No ganarás los puntos de la ruta.", "You won't earn the route points.", "Tu ne gagneras pas les points de l'itinéraire."], "No he trobat cap ruta amb aquestes opcions. Prova de canviar-ne alguna.": ["No he encontrado ninguna ruta con estas opciones. Prueba a cambiar alguna.", "I couldn't find any route with these options. Try changing one.", "Je n'ai trouvé aucun itinéraire avec ces options. Essaie d'en changer une."], "No he trobat res: prova alguna d'aquestes opcions.": ["No he encontrado nada: prueba alguna de estas opciones.", "I didn't find anything: try one of these options.", "Je n'ai rien trouvé : essaie une de ces options."], "No hem pogut carregar les rutes": ["No hemos podido cargar las rutas", "We couldn't load the routes", "Impossible de charger les itinéraires"], "No hem trobat aquest lloc": ["No hemos encontrado este lugar", "We couldn't find that place", "Lieu introuvable"], "No hi ha cap compte amb aquest correu en aquest dispositiu. Registra't o fes servir el compte de demostració.": ["No hay ninguna cuenta con este correo en este dispositivo. Regístrate o usa la cuenta de demostración.", "There's no account with this email on this device. Sign up or use the demo account.", "Aucun compte avec cet e-mail sur cet appareil. Inscris-toi ou utilise le compte de démonstration."], "No hi ha moviments d'aquest tipus.": ["No hay movimientos de este tipo.", "No activity of this type.", "Aucun mouvement de ce type."], "No hi ha resultats": ["No hay resultados", "No results", "Aucun résultat"], "No s'ha pogut compartir": ["No se ha podido compartir", "Couldn't share", "Partage impossible"], "No sumaràs els # punts de la ruta.": ["No sumarás los # puntos de la ruta.", "You won't add the route's # points.", "Tu ne cumuleras pas les # points de l'itinéraire."], "No t'he entès, torna-ho a provar": ["No te he entendido, vuelve a intentarlo", "I didn't catch that, please try again", "Je n'ai pas compris, réessaie"], "No tenim permís per veure la teva ubicació": ["No tenemos permiso para ver tu ubicación", "We don't have permission to see your location", "Nous n'avons pas l'autorisation de voir ta position"], "No tens compte? Registra't": ["¿No tienes cuenta? Regístrate", "No account? Sign up", "Pas de compte ? Inscris-toi"], "No tens connexió": ["No tienes conexión", "You're offline", "Tu es hors ligne"], "No trobes la resposta?": ["¿No encuentras la respuesta?", "Can't find the answer?", "Tu ne trouves pas la réponse ?"], "Nom": ["Nombre", "Name", "Nom"], "Nom i rutes a la Comunitat de cada ruta": ["Nombre y rutas en la Comunidad de cada ruta", "Your name and routes in each route's Community", "Nom et itinéraires dans la Communauté de chaque itinéraire"], "Nom, correu, contrasenya resumida, rutes fetes, punts i preferències. No es grava el recorregut: només els check-ins.": ["Nombre, correo, contraseña cifrada, rutas hechas, puntos y preferencias. No se graba el recorrido: solo los check-ins.", "Name, email, hashed password, routes done, points and preferences. Your track isn't recorded: only check-ins.", "Nom, e-mail, mot de passe haché, itinéraires effectués, points et préférences. Le parcours n'est pas enregistré : seulement les check-ins."], "Només comptem el trajecte fins a l'inici de la ruta: CO₂ estalviat = km d'anada i tornada × (factor del cotxe − factor del mitjà que has fet servir). Factors indicatius: cotxe # kg/km, tren o bus # kg/km, a peu o en bici #. Són estimacions de demostració, pendents dels factors oficials (MITECO).": ["Solo contamos el trayecto hasta el inicio de la ruta: CO₂ ahorrado = km de ida y vuelta × (factor del coche − factor del medio que has usado). Factores orientativos: coche # kg/km, tren o bus # kg/km, a pie o en bici #. Son estimaciones de demostración, pendientes de los factores oficiales (MITECO).", "We only count the trip to the start of the route: CO₂ saved = round-trip km × (car factor − factor of the mode you used). Indicative factors: car # kg/km, train or bus # kg/km, on foot or by bike #. These are demo estimates, pending the official factors (MITECO).", "Nous ne comptons que le trajet jusqu'au départ : CO₂ économisé = km aller-retour × (facteur de la voiture − facteur du mode utilisé). Facteurs indicatifs : voiture # kg/km, train ou bus # kg/km, à pied ou à vélo #. Ce sont des estimations de démonstration, en attendant les facteurs officiels (MITECO)."], "Només en aquest dispositiu (emmagatzematge del navegador). No s'envien a cap servidor.": ["Solo en este dispositivo (almacenamiento del navegador). No se envían a ningún servidor.", "Only on this device (browser storage). They're never sent to a server.", "Uniquement sur cet appareil (stockage du navigateur). Elles ne sont envoyées à aucun serveur."], "Només jo": ["Solo yo", "Only me", "Moi seulement"], "Només rutes amb tren o bus a prop.": ["Solo rutas con tren o bus cerca.", "Only routes with a train or bus nearby.", "Seulement les itinéraires avec un train ou un bus à proximité."], "Només si hi dones permís, per centrar el mapa i validar check-ins. Pots retirar-lo a la configuració del mòbil.": ["Solo si das permiso, para centrar el mapa y validar check-ins. Puedes retirarlo en la configuración del móvil.", "Only if you allow it, to center the map and confirm check-ins. You can withdraw it in your phone settings.", "Uniquement si tu l'autorises, pour centrer la carte et valider les check-ins. Tu peux le retirer dans les réglages du téléphone."], "Normal": ["Normal", "Normal", "Normal"], "Notificacions": ["Notificaciones", "Notifications", "Notifications"], "Nou": ["Nuevo", "New", "Nouveau"], "Novetats per correu": ["Novedades por correo", "News by email", "Nouveautés par e-mail"], "Objectiu actualitzat": ["Objetivo actualizado", "Goal updated", "Objectif mis à jour"], "Objectiu del mes: # kg. Tu hi has aportat # kg (# %).": ["Objetivo del mes: # kg. Tú has aportado # kg (# %).", "Goal this month: # kg. You've contributed # kg (# %).", "Objectif du mois : # kg. Tu as contribué à hauteur de # kg (# %)."], "Objectiu desat": ["Objetivo guardado", "Goal saved", "Objectif enregistré"], "Objectiu tret": ["Objetivo quitado", "Goal removed", "Objectif retiré"], "Objectiu": ["Objetivo", "Goal", "Objectif"], "Obrir el xat": ["Abrir el chat", "Open chat", "Ouvrir le chat"], "Obrir la botiga": ["Abrir la tienda", "Open the shop", "Ouvrir la boutique"], "obrir el detall": ["abrir el detalle", "open details", "ouvrir le détail"], "Obrir el detall": ["Abrir el detalle", "Open details", "Ouvrir le détail"], "obrir el perfil": ["abrir el perfil", "open profile", "ouvrir le profil"], "obrir Recompenses": ["abrir Recompensas", "open Rewards", "ouvrir Récompenses"], "Omet": ["Omitir", "Skip", "Passer"], "Ometre l'animació": ["Omitir la animación", "Skip animation", "Passer l'animation"], "Omple-ho per mi": ["Rellénalo por mí", "Fill it in for me", "Remplis-le pour moi"], "On es desen": ["Dónde se guardan", "Where it's stored", "Où elles sont enregistrées"], "Opcions": ["Opciones", "Options", "Options"], "Pantalla bloquejada": ["Pantalla bloqueada", "Screen locked", "Écran verrouillé"], "Pantalla de demostració.": ["Pantalla de demostración.", "Demo screen.", "Écran de démonstration."], "Pas # de #": ["Paso # de #", "Step # of #", "Étape # sur #"], "Pas opcional": ["Paso opcional", "Optional", "Facultatif"], "Passeig pel centre de Cardedeu, les cases d'estiueig i el Museu-Arxiu Tomàs Balvey, amb una antiga farmàcia.": ["Paseo por el centro de Cardedeu, las casas de veraneo y el Museu-Arxiu Tomàs Balvey, con una antigua farmacia.", "A stroll through central Cardedeu, its summer houses and the Tomàs Balvey Museum & Archive, with an old pharmacy.", "Promenade dans le centre de Cardedeu, ses maisons de villégiature et le Musée-Archives Tomàs Balvey, avec une ancienne pharmacie."], "Passeig pel nucli antic de la primera vila termal de Catalunya: les termes romanes, la Font del Lleó i els carrers on encara brolla l'aigua calenta.": ["Paseo por el casco antiguo de la primera villa termal de Cataluña: las termas romanas, la Font del Lleó y las calles donde aún brota el agua caliente.", "A walk through the old town of Catalonia's first spa town: the Roman baths, the Font del Lleó fountain and the streets where hot water still springs.", "Promenade dans le vieux centre de la première ville thermale de Catalogne : les thermes romains, la fontaine du Lleó et les rues où jaillit encore l'eau chaude."], "Patrimoni": ["Patrimonio", "Heritage", "Patrimoine"], "Per a l'experiència completa, obre-la al mòbil escanejant el codi QR del dossier.": ["Para la experiencia completa, ábrela en el móvil escaneando el código QR del dosier.", "For the full experience, open it on your phone by scanning the QR code in the dossier.", "Pour l'expérience complète, ouvre-la sur ton téléphone en scannant le code QR du dossier."], "Per anar amb nens et proposo camins planers i curts:": ["Para ir con niños te propongo caminos llanos y cortos:", "For kids, I suggest short, flat paths:", "Avec des enfants, je te propose des chemins plats et courts :"], "Per aquesta tarda et proposo una sortida suau i de poc impacte:": ["Para esta tarde te propongo una salida suave y de poco impacto:", "For this afternoon, here's a gentle, low-impact outing:", "Pour cet après-midi, je te propose une sortie douce et à faible impact :"], "Per combinar ruta i producte de proximitat:": ["Para combinar ruta y producto de proximidad:", "To combine a route with local produce:", "Pour combiner itinéraire et produits locaux :"], "Per córrer, aquesta té pistes i corriols amb un bon desnivell:": ["Para correr, esta tiene pistas y senderos con un buen desnivel:", "For running, this one has tracks and trails with good elevation:", "Pour courir, celui-ci a des pistes et des sentiers avec un bon dénivelé :"], "Perfil": ["Perfil", "Profile", "Profil"], "Perfil d'alçada: # km, desnivell positiu de # m": ["Perfil de altura: # km, desnivel positivo de # m", "Elevation profile: # km, # m of ascent", "Profil d'altitude : # km, dénivelé positif de # m"], "Perfil d'alçada: de # a # km, desnivell positiu de # m": ["Perfil de altura: de # a # km, desnivel positivo de # m", "Elevation profile: # to # km, # m of ascent", "Profil d'altitude : de # à # km, dénivelé positif de # m"], "Perfil desat": ["Perfil guardado", "Profile saved", "Profil enregistré"], "Perfil ocult a la Comunitat": ["Perfil oculto en la Comunidad", "Profile hidden from the Community", "Profil masqué dans la Communauté"], "Perfil visible a la Comunitat": ["Perfil visible en la Comunidad", "Profile visible in the Community", "Profil visible dans la Communauté"], "Permetre ubicació": ["Permitir ubicación", "Allow location", "Autoriser la localisation"], "Permès": ["Permitido", "Allowed", "Autorisé"], "Permís d'ubicació": ["Permiso de ubicación", "Location permission", "Autorisation de localisation"], "Permís de notificacions": ["Permiso de notificaciones", "Notification permission", "Autorisation des notifications"], "Permís del sistema": ["Permiso del sistema", "System permission", "Autorisation du système"], "Permís denegat: activa-la a la configuració del navegador": ["Permiso denegado: actívala en la configuración del navegador", "Permission denied: turn it on in your browser settings", "Autorisation refusée : active-la dans les réglages du navigateur"], "Personalització amb IA": ["Personalización con IA", "AI personalisation", "Personnalisation par IA"], "Pla de Santa Fe del Montseny": ["Pla de Santa Fe del Montseny", "Santa Fe del Montseny plain", "Plateau de Santa Fe del Montseny"], "Pla de baix impacte ambiental": ["Plan de bajo impacto ambiental", "Low environmental impact plan", "Sortie à faible impact environnemental"], "Pla de la Calma i Tagamanent": ["Pla de la Calma y Tagamanent", "Pla de la Calma and Tagamanent", "Pla de la Calma et Tagamanent"], "Plantar un arbre a la comarca": ["Plantar un árbol en la comarca", "Plant a tree in the area", "Planter un arbre dans la région"], "Plançó": ["Plantón", "Sapling", "Jeune pousse"], "Plaça de la Font del Lleó": ["Plaza de la Font del Lleó", "Font del Lleó square", "Place de la Font del Lleó"], "Pluja": ["Lluvia", "Rain", "Pluie"], "Pobles i cultura, apuntat.": ["Pueblos y cultura, apuntado.", "Villages and culture, noted.", "Villages et culture, c'est noté."], "Política de privacitat": ["Política de privacidad", "Privacy policy", "Politique de confidentialité"], "Porta aigua i abric: a dalt fa més fred.": ["Lleva agua y abrigo: arriba hace más frío.", "Bring water and a jacket: it's colder at the top.", "Emporte de l'eau et une veste : il fait plus froid en haut."], "Porto el gos": ["Llevo el perro", "I'm bringing the dog", "J'emmène le chien"], "Pots descarregar les teves dades en JSON i esborrar el compte des de Configuració.": ["Puedes descargar tus datos en JSON y eliminar la cuenta desde Ajustes.", "You can download your data as JSON and delete your account from Settings.", "Tu peux télécharger tes données en JSON et supprimer ton compte depuis Réglages."], "Predeterminat": ["Predeterminado", "Default", "Par défaut"], "Preferències": ["Preferencias", "Preferences", "Préférences"], "Pregunta'm el que vulguis o tria opcions i et preparo una ruta a mida.": ["Pregúntame lo que quieras o elige opciones y te preparo una ruta a medida.", "Ask me anything, or pick options and I'll build you a custom route.", "Demande-moi ce que tu veux ou choisis des options et je te prépare un itinéraire sur mesure."], "Pregunta'm per rutes, patrimoni i activitats. Et responc amb el que ofereix l'app.": ["Pregúntame por rutas, patrimonio y actividades. Te respondo con lo que ofrece la app.", "Ask me about routes, heritage and activities. I'll answer with what the app offers.", "Pose-moi des questions sur les itinéraires, le patrimoine et les activités. Je réponds avec ce que propose l'app."], "Pregunta-ho a l'assistent": ["Pregúntaselo al asistente", "Ask the assistant", "Demande à l'assistant"], "Pregunta-m'ho": ["Pregúntame", "Ask me", "Demande-moi"], "Preguntes freqüents": ["Preguntas frecuentes", "FAQ", "Questions fréquentes"], "Presentació: # diapositives": ["Presentación: # diapositivas", "Slideshow: # slides", "Présentation : # diapositives"], "Primer canvi al comerç": ["Primer canje en el comercio", "First local shop reward", "Premier échange en commerce"], "Primera ruta": ["Primera ruta", "First route", "Premier itinéraire"], "Privacitat": ["Privacidad", "Privacy", "Confidentialité"], "Privacitat i dades": ["Privacidad y datos", "Privacy & data", "Confidentialité et données"], "Productors i mercats adherits: pendents dels convenis Km#.": ["Productores y mercados adheridos: pendientes de los convenios Km#.", "Participating producers and markets: pending Km# agreements.", "Producteurs et marchés partenaires : en attente des conventions Km#."], "Proper check-in": ["Próximo check-in", "Next check-in", "Prochain check-in"], "Proper check-in · a # m": ["Próximo check-in · a # m", "Next check-in · in # m", "Prochain check-in · à # m"], "Pont romànic": ["Puente románico", "Romanesque bridge", "Pont roman"], "Proposta del dia": ["Propuesta del día", "Today's pick", "La sortie du jour"], "Propostes a prop teu": ["Propuestas cerca de ti", "Ideas near you", "Idées près de chez toi"], "Prototip d'un Treball de Recerca de Batxillerat. Textos legals definitius pendents de revisió.": ["Prototipo de un Trabajo de Investigación de Bachillerato. Textos legales definitivos pendientes de revisión.", "Prototype from a Batxillerat research project. Final legal texts pending review.", "Prototype d'un travail de recherche de Batxillerat. Textes juridiques définitifs en attente de révision."], "Prototip funcional de l'app de turisme actiu i sostenible del Vallès Oriental.": ["Prototipo funcional de la app de turismo activo y sostenible del Vallès Oriental.", "Working prototype of the active, sustainable tourism app for the Vallès Oriental.", "Prototype fonctionnel de l'app de tourisme actif et durable du Vallès Oriental."], "Prova alguna d'aquestes opcions.": ["Prueba alguna de estas opciones.", "Try one of these options.", "Essaie une de ces options."], "Puc fer servir l'app sense compte?": ["¿Puedo usar la app sin cuenta?", "Can I use the app without an account?", "Puis-je utiliser l'app sans compte ?"], "Puc fer una ruta sense cobertura?": ["¿Puedo hacer una ruta sin cobertura?", "Can I do a route without signal?", "Puis-je faire un itinéraire sans réseau ?"], "Puiggraciós i els Cingles de Bertí": ["Puiggraciós y los Cingles de Bertí", "Puiggraciós and the Cingles de Bertí", "Puiggraciós et les Cingles de Bertí"], "Pujada a les restes del castell medieval, dins del parc del Montnegre i el Corredor, amb vistes al Montseny.": ["Subida a los restos del castillo medieval, dentro del parque del Montnegre y el Corredor, con vistas al Montseny.", "A climb to the medieval castle ruins in the Montnegre i el Corredor park, with views of the Montseny.", "Montée jusqu'aux vestiges du château médiéval, dans le parc du Montnegre i el Corredor, avec vue sur le Montseny."], "Pujada al cim més alt del Montseny (# m) entre fagedes i avetoses, amb vistes a tot el Vallès.": ["Subida a la cima más alta del Montseny (# m) entre hayedos y abetales, con vistas a todo el Vallès.", "A climb to the Montseny's highest summit (# m) through beech and fir forests, with views over the whole Vallès.", "Montée au plus haut sommet du Montseny (# m) entre hêtraies et sapinières, avec vue sur tout le Vallès."], "Punt destacat": ["Punto destacado", "Highlight", "Point fort"], "Punts": ["Puntos", "Points", "Points"], "Punts d'energia": ["Puntos de energía", "Energy points", "Points d'énergie"], "Punts destacats": ["Puntos destacados", "Highlights", "Points forts"], "Punts destacats de la comunitat": ["Puntos destacados de la comunidad", "Community highlights", "Points forts de la communauté"], "Punts en acabar": ["Puntos al acabar", "Points on completion", "Points à l'arrivée"], "Punts i recompenses": ["Puntos y recompensas", "Points and rewards", "Points et récompenses"], "Quan arribes a un punt de la ruta, l'app el marca com a fet. No es grava el recorregut.": ["Cuando llegas a un punto de la ruta, la app lo marca como hecho. No se graba el recorrido.", "When you reach a point on the route, the app marks it as done. Your track isn't recorded.", "Quand tu arrives à un point de l'itinéraire, l'app le marque comme fait. Le parcours n'est pas enregistré."], "Quan comença o acaba un repte": ["Cuando empieza o acaba un reto", "When a challenge starts or ends", "Quand un défi commence ou se termine"], "Quan pots canviar els teus punts": ["Cuando puedes canjear tus puntos", "When you can redeem your points", "Quand tu peux échanger tes points"], "Que el gos també en gaudeixi.": ["Que el perro también lo disfrute.", "So your dog can enjoy it too.", "Pour que le chien en profite aussi."], "Quilòmetres": ["Kilómetros", "Kilometres", "Kilomètres"], "Quin problema has trobat?": ["¿Qué problema has encontrado?", "What problem did you find?", "Quel problème as-tu rencontré ?"], "Quines dades": ["Qué datos", "What data", "Quelles données"], "Què et ve de gust fer avui?": ["¿Qué te apetece hacer hoy?", "What do you feel like doing today?", "Qu'as-tu envie de faire aujourd'hui ?"], "Què explorem avui? T'ajudo a trobar una ruta a prop.": ["¿Qué exploramos hoy? Te ayudo a encontrar una ruta cerca.", "What shall we explore today? I'll help you find a route nearby.", "On explore quoi aujourd'hui ? Je t'aide à trouver un itinéraire près de chez toi."], "Què hi ha per fer avui?": ["¿Qué hay para hacer hoy?", "What's on today?", "Que faire aujourd'hui ?"], "Què puc fer avui a prop de casa?": ["¿Qué puedo hacer hoy cerca de casa?", "What can I do near home today?", "Que puis-je faire aujourd'hui près de chez moi ?"], "Què t'agrada fer?": ["¿Qué te gusta hacer?", "What do you like doing?", "Qu'aimes-tu faire ?"], "Què és Valia": ["Qué es Valia", "What Valia is", "Qu'est-ce que Valia"], "Ratxa": ["Racha", "Streak", "Série"], "Ratxa de # setmanes": ["Racha de # semanas", "#-week streak", "Série de # semaines"], "Ratxa setmanal": ["Racha semanal", "Weekly streak", "Série hebdomadaire"], "Rebràs «Val de # € en productors Km#». Et quedaran # punts.": ["Recibirás «Vale de # € en productores Km#». Te quedarán # puntos.", "You'll get \"€# voucher for Km# producers\". You'll have # points left.", "Tu recevras « Bon de # € chez les producteurs Km# ». Il te restera # points."], "Recomana'm una ruta per aquesta tarda": ["Recomiéndame una ruta para esta tarde", "Recommend me a route for this afternoon", "Recommande-moi un itinéraire pour cet après-midi"], "Recompensa": ["Recompensa", "Reward", "Récompense"], "Recompensa d'exemple": ["Recompensa de ejemplo", "Sample reward", "Récompense d'exemple"], "Recompenses": ["Recompensas", "Rewards", "Récompenses"], "Recordatoris": ["Recordatorios", "Reminders", "Rappels"], "Recorregut": ["Recorrido", "Route", "Parcours"], "Recuperar la contrasenya": ["Recuperar la contraseña", "Recover password", "Récupérer le mot de passe"], "Recàrrega de transport públic": ["Recarga de transporte público", "Public transport top-up", "Recharge de transport en commun"], "Reduir animacions": ["Reducir animaciones", "Reduce animations", "Réduire les animations"], "Reduir moviment": ["Reducir movimiento", "Reduce motion", "Réduire les mouvements"], "Reforça colors i vores": ["Refuerza colores y bordes", "Stronger colours and borders", "Renforce les couleurs et les bordures"], "Refés-lo amb les opcions": ["Rehazlo con las opciones", "Rebuild it from the options", "Refais-le avec les options"], "Registra't": ["Regístrate", "Sign up", "Inscris-toi"], "Reintentar": ["Reintentar", "Retry", "Réessayer"], "Repeteix la contrasenya": ["Repite la contraseña", "Repeat password", "Répète le mot de passe"], "Repeteix la contrasenya nova": ["Repite la contraseña nueva", "Repeat new password", "Répète le nouveau mot de passe"], "Repetim la ruta de dissabte?": ["¿Repetimos la ruta del sábado?", "Shall we repeat Saturday's route?", "On refait l'itinéraire de samedi ?"], "Reprendre": ["Reanudar", "Resume", "Reprendre"], "Repte de debò! Prepara les cames.": ["¡Reto de verdad! Prepara las piernas.", "A real challenge! Get your legs ready.", "Un vrai défi ! Prépare tes jambes."], "Reptes": ["Retos", "Challenges", "Défis"], "Reptes de grup": ["Retos de grupo", "Group challenges", "Défis de groupe"], "Reptes de grup ›": ["Retos de grupo ›", "Group challenges ›", "Défis de groupe ›"], "Reptes de la comunitat": ["Retos de la comunidad", "Community challenges", "Défis de la communauté"], "Res de patir: camins tranquils.": ["Nada de sufrir: caminos tranquilos.", "No struggling: easy paths.", "Pas de souffrance : chemins tranquilles."], "Respostes del prototip.": ["Respuestas del prototipo.", "Prototype answers.", "Réponses du prototype."], "Restes termals romanes al nucli antic de Caldes de Montbui, considerada la primera vila termal de Catalunya.": ["Restos termales romanos en el casco antiguo de Caldes de Montbui, considerada la primera villa termal de Cataluña.", "Roman baths in the old town of Caldes de Montbui, considered Catalonia's first spa town.", "Vestiges thermaux romains dans le vieux centre de Caldes de Montbui, considérée comme la première ville thermale de Catalogne."], "Resum": ["Resumen", "Summary", "Résumé"], "Riu Congost": ["Río Congost", "Congost River", "Rivière Congost"], "Riu Congost en bici": ["Río Congost en bici", "Congost River by bike", "Rivière Congost à vélo"], "Ruta a mida": ["Ruta a medida", "Custom route", "Itinéraire sur mesure"], "Ruta actualitzada": ["Ruta actualizada", "Route updated", "Itinéraire mis à jour"], "Ruta completada": ["Ruta completada", "Route completed", "Itinéraire terminé"], "Ruta de córrer per pistes i corriols fins al santuari de Puiggraciós, al peu dels Cingles de Bertí.": ["Ruta de correr por pistas y senderos hasta el santuario de Puiggraciós, al pie de los Cingles de Bertí.", "A running route on tracks and trails to the Puiggraciós sanctuary, at the foot of the Cingles de Bertí.", "Parcours de course sur pistes et sentiers jusqu'au sanctuaire de Puiggraciós, au pied des Cingles de Bertí."], "Ruta desada a Perfil": ["Ruta guardada en Perfil", "Route saved to Profile", "Itinéraire enregistré dans le profil"], "Ruta desada · +# punts": ["Ruta guardada · +# puntos", "Route saved · +# points", "Itinéraire enregistré · +# points"], "Ruta descarregada": ["Ruta descargada", "Route downloaded", "Itinéraire téléchargé"], "Ruta en curs": ["Ruta en curso", "Route in progress", "Itinéraire en cours"], "Ruta en curs · a peu": ["Ruta en curso · a pie", "Route in progress · on foot", "Itinéraire en cours · à pied"], "Ruta en curs · córrer": ["Ruta en curso · correr", "Route in progress · running", "Itinéraire en cours · course"], "Ruta en curs · bici": ["Ruta en curso · bici", "Route in progress · bike", "Itinéraire en cours · vélo"], "Ruta en pausa": ["Ruta en pausa", "Route paused", "Itinéraire en pause"], "Ruta megalítica de la Roca": ["Ruta megalítica de la Roca", "La Roca megalithic route", "Route mégalithique de la Roca"], "Rutes a prop teu": ["Rutas cerca de ti", "Routes near you", "Itinéraires près de chez toi"], "Rutes amb tren": ["Rutas con tren", "Routes by train", "Itinéraires en train"], "Rutes descarregades": ["Rutas descargadas", "Downloaded routes", "Itinéraires téléchargés"], "Rutes i seguretat": ["Rutas y seguridad", "Routes & safety", "Itinéraires et sécurité"], "Rutes noves": ["Rutas nuevas", "New routes", "Nouveaux itinéraires"], "Rutes que hi passen": ["Rutas que pasan por aquí", "Routes that pass here", "Itinéraires qui y passent"], "Rutes reals del Vallès Oriental amb filtres, mapa i la comunitat de cada ruta.": ["Rutas reales del Vallès Oriental con filtros, mapa y la comunidad de cada ruta.", "Real routes in the Vallès Oriental with filters, a map and each route's community.", "Itinéraires réels du Vallès Oriental avec filtres, carte et la communauté de chaque itinéraire."], "S'esborraran el compte, els punts i les rutes d'aquest dispositiu. No es pot desfer.": ["Se eliminarán la cuenta, los puntos y las rutas de este dispositivo. No se puede deshacer.", "Your account, points and routes on this device will be deleted. This can't be undone.", "Le compte, les points et les itinéraires de cet appareil seront supprimés. Action irréversible."], "Saldo actual": ["Saldo actual", "Current balance", "Solde actuel"], "Saldo per a la teva targeta de transport públic, perquè la propera sortida també comenci sense cotxe.": ["Saldo para tu tarjeta de transporte público, para que la próxima salida también empiece sin coche.", "Credit for your public transport card, so your next outing starts car-free too.", "Crédit pour ta carte de transport en commun, pour que ta prochaine sortie commence aussi sans voiture."], "Saltar el tutorial": ["Saltar el tutorial", "Skip tutorial", "Passer le tutoriel"], "Santuari de Puiggraciós": ["Santuario de Puiggraciós", "Puiggraciós sanctuary", "Sanctuaire de Puiggraciós"], "Segons l'aparença": ["Según la apariencia", "Match appearance", "Selon l'apparence"], "Segueix el mode del mòbil": ["Sigue el modo del móvil", "Follows your phone's setting", "Suit le réglage du téléphone"], "Seguretat": ["Seguridad", "Safety", "Sécurité"], "Seguretat i contactes": ["Seguridad y contactos", "Safety & contacts", "Sécurité et contacts"], "Seguretat: ubicació en directe i #": ["Seguridad: ubicación en directo y #", "Safety: live location and #", "Sécurité : position en direct et #"], "Següent": ["Siguiente", "Next", "Suivant"], "Sense connexió": ["Sin conexión", "Offline", "Hors ligne"], "Sense cotxe": ["Sin coche", "Car-free", "Sans voiture"], "Sense cotxe (tren o bus)": ["Sin coche (tren o bus)", "Car-free (train or bus)", "Sans voiture (train ou bus)"], "Sense decidir": ["Sin decidir", "Not decided", "Non défini"], "Sense estalvi de CO₂ en el trajecte": ["Sin ahorro de CO₂ en el trayecto", "No CO₂ saved on the trip", "Pas d'économie de CO₂ sur le trajet"], "Sense transport públic directe": ["Sin transporte público directo", "No direct public transport", "Pas de transport en commun direct"], "Sense ubicació: pots activar-la més tard": ["Sin ubicación: puedes activarla más tarde", "No location: you can turn it on later", "Sans localisation : tu peux l'activer plus tard"], "Senyalització incorrecta": ["Señalización incorrecta", "Wrong signage", "Balisage incorrect"], "Servei i municipis participants: pendents d'acord.": ["Servicio y municipios participantes: pendientes de acuerdo.", "Service and participating towns: to be agreed.", "Service et communes participantes : en attente d'accord."], "Setmana": ["Semana", "Week", "Semaine"], "Si em dius què t'agrada, t'ho afino més.": ["Si me dices qué te gusta, lo afino más.", "Tell me what you like and I'll fine-tune it.", "Dis-moi ce que tu aimes et j'affinerai."], "Si fas una ruta descarregada, segueix funcionant. Els check-ins es desen al mòbil i s'envien quan tornis a tenir cobertura.": ["Si haces una ruta descargada, sigue funcionando. Los check-ins se guardan en el móvil y se envían cuando vuelvas a tener cobertura.", "Downloaded routes keep working. Check-ins are saved on your phone and sent when you're back in signal.", "Les itinéraires téléchargés continuent de fonctionner. Les check-ins sont enregistrés sur le téléphone et envoyés dès que le réseau revient."], "Si t'agrada la història, mira aquestes:": ["Si te gusta la historia, mira estas:", "If you like history, take a look at these:", "Si tu aimes l'histoire, regarde ceux-ci :"], "Si vols un repte, puja al sostre del Montseny:": ["Si quieres un reto, sube al techo del Montseny:", "If you want a challenge, climb to the top of the Montseny:", "Si tu veux un défi, monte au toit du Montseny :"], "Si «Reduir moviment» està activat al sistema, l'app el segueix automàticament.": ["Si «Reducir movimiento» está activado en el sistema, la app lo sigue automáticamente.", "If \"Reduce motion\" is on in your system, the app follows it automatically.", "Si « Réduire les animations » est activé dans le système, l'app le suit automatiquement."], "Sobre Valia": ["Acerca de Valia", "About Valia", "À propos de Valia"], "Sol": ["Sol", "Sun", "Soleil"], "Som-hi! Bona ruta": ["¡Vamos! Buena ruta", "Let's go! Enjoy the route", "C'est parti ! Bon itinéraire"], "Sortir": ["Salir", "Leave", "Quitter"], "Sortir del mode convidat": ["Salir del modo invitado", "Leave guest mode", "Quitter le mode invité"], "Sortir sense desar?": ["¿Salir sin guardar?", "Leave without saving?", "Quitter sans enregistrer ?"], "Sortiràs del mode convidat.": ["Saldrás del modo invitado.", "You'll leave guest mode.", "Tu vas quitter le mode invité."], "Suport": ["Soporte", "Support", "Assistance"], "Sí": ["Sí", "Yes", "Oui"], "sí": ["sí", "yes", "oui"], "no": ["no", "no", "non"], "Sí, amb gastronomia": ["Sí, con gastronomía", "Yes, with food", "Oui, avec de la gastronomie"], "Sí, però amb menys funcions disponibles. Pots crear un compte quan vulguis.": ["Sí, pero con menos funciones disponibles. Puedes crear una cuenta cuando quieras.", "Yes, but with fewer features. You can create an account whenever you like.", "Oui, mais avec moins de fonctions. Tu peux créer un compte quand tu veux."], "Sí, si l'has descarregada abans des del detall de la ruta.": ["Sí, si la has descargado antes desde el detalle de la ruta.", "Yes, if you downloaded it first from the route details.", "Oui, si tu l'as téléchargé avant depuis le détail de l'itinéraire."], "Sóc l'assistent de Valia. Et recomano activitats del Vallès Oriental, t'explico com arribar-hi i com guanyar i bescanviar punts.": ["Soy el asistente de Valia. Te recomiendo actividades del Vallès Oriental, te explico cómo llegar y cómo ganar y canjear puntos.", "I'm the Valia assistant. I recommend activities in the Vallès Oriental, explain how to get there and how to earn and redeem points.", "Je suis l'assistant de Valia. Je te recommande des activités du Vallès Oriental, je t'explique comment y aller et comment gagner et échanger des points."], "T'ajuda a descobrir què fer a prop de casa, a la teva manera.": ["Te ayuda a descubrir qué hacer cerca de casa, a tu manera.", "Helps you discover things to do near home, your way.", "T'aide à découvrir quoi faire près de chez toi, à ta façon."], "T'has desviat del camí": ["Te has desviado del camino", "You're off the path", "Tu as quitté le chemin"], "També es pot canviar a Accessibilitat.": ["También se puede cambiar en Accesibilidad.", "You can also change it in Accessibility.", "Tu peux aussi le modifier dans Accessibilité."], "També hi pots arribar en tren a Cardedeu, Mollet i Figaró.": ["También puedes llegar en tren a Cardedeu, Mollet y Figaró.", "You can also get there by train to Cardedeu, Mollet and Figaró.", "Tu peux aussi y aller en train jusqu'à Cardedeu, Mollet et Figaró."], "Tancar": ["Cerrar", "Close", "Fermer"], "Tancar el missatge de l'assistent": ["Cerrar el mensaje del asistente", "Close the assistant's message", "Fermer le message de l'assistant"], "Tancar el missatge.": ["Cerrar el mensaje.", "Close the message.", "Fermer le message."], "Tancar la sessió": ["Cerrar sesión", "Sign out", "Se déconnecter"], "Tancar sense desar": ["Cerrar sin guardar", "Close without saving", "Fermer sans enregistrer"], "Temps": ["Tiempo", "Time", "Temps"], "Temps de la ruta": ["Tiempo de la ruta", "Route time", "Durée de l'itinéraire"], "Tens # punts. Et falten #.": ["Tienes # puntos. Te faltan #.", "You have # points. You need # more.", "Tu as # points. Il t'en manque #."], "Tens # punts. Et quedaran #.": ["Tienes # puntos. Te quedarán #.", "You have # points. You'll have # left.", "Tu as # points. Il t'en restera #."], "Tens # punts d'energia. En guanyes amb cada check-in i quan acabes una ruta, i els pots bescanviar per transport públic, comerç local o targetes regal.": ["Tienes # puntos de energía. Ganas puntos con cada check-in y cuando acabas una ruta, y los puedes canjear por transporte público, comercio local o tarjetas regalo.", "You have # energy points. You earn them with every check-in and when you finish a route, and you can redeem them for public transport, local shops or gift cards.", "Tu as # points d'énergie. Tu en gagnes à chaque check-in et quand tu termines un itinéraire, et tu peux les échanger contre des transports en commun, du commerce local ou des cartes cadeaux."], "Termes romanes": ["Termas romanas", "Roman baths", "Thermes romains"], "Termes romanes de Caldes": ["Termas romanas de Caldes", "Caldes Roman baths", "Thermes romains de Caldes"], "Termes romanes de Caldes de Montbui": ["Termas romanas de Caldes de Montbui", "Roman baths of Caldes de Montbui", "Thermes romains de Caldes de Montbui"], "Text copiat": ["Texto copiado", "Text copied", "Texte copié"], "Text copiat per compartir": ["Texto copiado para compartir", "Text copied to share", "Texte copié pour le partager"], "Tipografies i icones": ["Tipografías e iconos", "Fonts and icons", "Polices et icônes"], "Tipus": ["Tipo", "Type", "Type"], "Toca el que et vingui de gust i jo t'escric el missatge.": ["Toca lo que te apetezca y yo te escribo el mensaje.", "Tap what you feel like and I'll write the message.", "Touche ce qui te fait envie et j'écris le message."], "Tornada amb tren des de Montmeló": ["Vuelta en tren desde Montmeló", "Return by train from Montmeló", "Retour en train depuis Montmeló"], "Tornar a veure el tutorial": ["Volver a ver el tutorial", "Watch the tutorial again", "Revoir le tutoriel"], "Tornar-ho a provar": ["Volver a intentarlo", "Try again", "Réessayer"], "Tornaràs al mateix punt.": ["Volverás al mismo punto.", "You'll end where you started.", "Tu reviendras au même point."], "Tot": ["Todo", "All", "Tout"], "Tot és opcional. En aquest prototip, res surt del teu dispositiu.": ["Todo es opcional. En este prototipo, nada sale de tu dispositivo.", "Everything is optional. In this prototype, nothing leaves your device.", "Tout est facultatif. Dans ce prototype, rien ne quitte ton appareil."], "Total": ["Total", "Total", "Total"], "Totes dues són circulars i tenen llocs per aturar-se.": ["Las dos son circulares y tienen lugares para pararse.", "Both are loops with places to stop.", "Les deux sont des boucles avec des endroits où s'arrêter."], "Tothom": ["Todos", "Everyone", "Tout le monde"], "Tots els check-ins fets": ["Todos los check-ins hechos", "All check-ins done", "Tous les check-ins effectués"], "Tranquil": ["Tranquilo", "Relaxed", "Tranquille"], "Treball de Recerca · Batxillerat": ["Trabajo de Investigación · Bachillerato", "Research project · Batxillerat", "Travail de recherche · Batxillerat"], "Tren R# Nord fins a Cardedeu": ["Tren R# Nord hasta Cardedeu", "R# Nord train to Cardedeu", "Train R# Nord jusqu'à Cardedeu"], "Tren R# Nord fins a Llinars del Vallès": ["Tren R# Nord hasta Llinars del Vallès", "R# Nord train to Llinars del Vallès", "Train R# Nord jusqu'à Llinars del Vallès"], "Tren R# Nord i R# fins a Granollers": ["Tren R# Nord y R# hasta Granollers", "R# Nord and R# trains to Granollers", "Train R# Nord et R# jusqu'à Granollers"], "Tren R# fins a Figaró": ["Tren R# hasta Figaró", "R# train to Figaró", "Train R# jusqu'à Figaró"], "Tren de Rodalies fins a Mollet": ["Tren de Rodalies hasta Mollet", "Rodalies train to Mollet", "Train Rodalies jusqu'à Mollet"], "Tren o bus": ["Tren o bus", "Train or bus", "Train ou bus"], "Treta de Perfil": ["Quitada de Perfil", "Removed from Profile", "Retiré du profil"], "Treure la cerca i els filtres": ["Quitar la búsqueda y los filtros", "Clear search and filters", "Effacer la recherche et les filtres"], "Tria què vols compartir. Ho pots canviar quan vulguis a Ajustos.": ["Elige qué quieres compartir. Lo puedes cambiar cuando quieras en Ajustes.", "Choose what you want to share. You can change it any time in Settings.", "Choisis ce que tu veux partager. Tu peux le modifier quand tu veux dans Réglages."], "Tria un objectiu": ["Elige un objetivo", "Choose a goal", "Choisis un objectif"], "Tria un objectiu (km, check-ins o rutes) i convida la teva colla. En aquest prototip els reptes de grup són de demostració.": ["Elige un objetivo (km, check-ins o rutas) e invita a tu grupo. En este prototipo los retos de grupo son de demostración.", "Choose a goal (km, check-ins or routes) and invite your crew. Group challenges are a demo in this prototype.", "Choisis un objectif (km, check-ins ou itinéraires) et invite ta bande. Dans ce prototype, les défis de groupe sont une démonstration."], "Tria una activitat a Explorar, fes els check-ins i desa-la per sumar punts.": ["Elige una actividad en Explorar, haz los check-ins y guárdala para sumar puntos.", "Pick an activity in Explore, do the check-ins and save it to earn points.", "Choisis une activité dans Explorer, fais les check-ins et enregistre-la pour gagner des points."], "Tria-ho en # segons. Ho pots canviar quan vulguis a Ajustos.": ["Elígelo en # segundos. Lo puedes cambiar cuando quieras en Ajustes.", "Choose in # seconds. You can change it any time in Settings.", "Choisis en # secondes. Tu peux le modifier quand tu veux dans Réglages."], "Troba rutes a prop teu": ["Encuentra rutas cerca de ti", "Find routes near you", "Trouve des itinéraires près de chez toi"], "Trucar": ["Llamar", "Call", "Appeler"], "Trucar al #": ["Llamar al #", "Call #", "Appeler le #"], "Trucar al #?": ["¿Llamar al #?", "Call #?", "Appeler le # ?"], "Turó de l'Home des de Santa Fe": ["Turó de l'Home desde Santa Fe", "Turó de l'Home from Santa Fe", "Turó de l'Home depuis Santa Fe"], "Tutorial": ["Tutorial", "Tutorial", "Tutoriel"], "Ubicació": ["Ubicación", "Location", "Localisation"], "Ubicació activada": ["Ubicación activada", "Location on", "Localisation activée"], "Ubicació no disponible": ["Ubicación no disponible", "Location unavailable", "Localisation indisponible"], "Un altre problema": ["Otro problema", "Another problem", "Un autre problème"], "Un esmorzar en un establiment de proximitat adherit, a prop de l'inici o del final de la ruta.": ["Un desayuno en un establecimiento de proximidad adherido, cerca del inicio o del final de la ruta.", "Breakfast at a participating local business near the start or end of the route.", "Un petit-déjeuner dans un établissement local partenaire, près du départ ou de l'arrivée."], "Un prototip d'app de turisme actiu i sostenible al Vallès Oriental, fet per a un Treball de Recerca. No és un servei comercial.": ["Un prototipo de app de turismo activo y sostenible en el Vallès Oriental, hecho para un Trabajo de Investigación. No es un servicio comercial.", "A prototype app for active, sustainable tourism in the Vallès Oriental, built for a research project. It isn't a commercial service.", "Un prototype d'app de tourisme actif et durable dans le Vallès Oriental, conçu pour un travail de recherche. Ce n'est pas un service commercial."], "Un quart d'hora de bicicleta compartida per moure't entre pobles o fins a l'inici d'una ruta.": ["Un cuarto de hora de bicicleta compartida para moverte entre pueblos o hasta el inicio de una ruta.", "Fifteen minutes of bike sharing to get between villages or to the start of a route.", "Un quart d'heure de vélo en libre-service pour aller de village en village ou jusqu'au départ d'un itinéraire."], "Una IA pròpia que coneix el territori.": ["Una IA propia que conoce el territorio.", "Our own AI that knows the area.", "Notre propre IA qui connaît le territoire."], "Una altra ruta": ["Otra ruta", "Another route", "Un autre itinéraire"], "Una bona jornada: porta aigua!": ["Una buena jornada: ¡lleva agua!", "A good day out: bring water!", "Une belle journée : emporte de l'eau !"], "Una mica de repte, ideal.": ["Un poco de reto, ideal.", "A bit of a challenge, perfect.", "Un peu de défi, idéal."], "Una proposta el cap de setmana": ["Una propuesta el fin de semana", "An idea at the weekend", "Une idée le week-end"], "Una ruta a peu": ["Una ruta a pie", "A walking route", "Un itinéraire à pied"], "Una ruta amb": ["Una ruta con", "A route with", "Un itinéraire avec"], "Una ruta curta": ["Una ruta corta", "A short route", "Un itinéraire court"], "Una ruta fàcil": ["Una ruta fácil", "An easy route", "Un itinéraire facile"], "Una ruta més suau": ["Una ruta más suave", "A gentler route", "Un itinéraire plus doux"], "Una ruta per guanyar punts": ["Una ruta para ganar puntos", "A route to earn points", "Un itinéraire pour gagner des points"], "Una sortida curta, perfecta per avui.": ["Una salida corta, perfecta para hoy.", "A short outing, perfect for today.", "Une petite sortie, parfaite pour aujourd'hui."], "Unitats": ["Unidades", "Units", "Unités"], "Unitats canviades": ["Unidades cambiadas", "Units changed", "Unités modifiées"], "Usuari": ["Usuario", "User", "Utilisateur"], "Vaig amb nens": ["Voy con niños", "I'm going with kids", "Je viens avec des enfants"], "Val de # € en productors Km#": ["Vale de # € en productores Km#", "€# voucher for Km# producers", "Bon de # € chez les producteurs Km#"], "Valia # · prototip del Treball de Recerca": ["Valia # · prototipo del Trabajo de Investigación", "Valia # · research project prototype", "Valia # · prototype du travail de recherche"], "Valia necessita JavaScript per funcionar.": ["Valia necesita JavaScript para funcionar.", "Valia needs JavaScript to work.", "Valia a besoin de JavaScript pour fonctionner."], "Valia s'està carregant": ["Valia se está cargando", "Valia is loading", "Valia est en cours de chargement"], "Valia és un prototip d'un Treball de Recerca. El compte només es desa en aquest dispositiu (localStorage): no s'envia enlloc i el pots esborrar tancant la sessió i netejant les dades del navegador. Textos legals definitius: pendents de revisió.": ["Valia es un prototipo de un Trabajo de Investigación. La cuenta solo se guarda en este dispositivo (localStorage): no se envía a ningún sitio y la puedes borrar cerrando sesión y limpiando los datos del navegador. Textos legales definitivos: pendientes de revisión.", "Valia is a prototype from a research project. Your account is only stored on this device (localStorage): it's never sent anywhere, and you can delete it by signing out and clearing your browser data. Final legal texts: pending review.", "Valia est un prototype d'un travail de recherche. Le compte est enregistré uniquement sur cet appareil (localStorage) : il n'est envoyé nulle part et tu peux le supprimer en te déconnectant et en effaçant les données du navigateur. Textes juridiques définitifs : en attente de révision."], "Versió": ["Versión", "Version", "Version"], "Veu la teva ubicació": ["Ve tu ubicación", "Sees your location", "Voit ta position"], "Veure": ["Ver", "View", "Voir"], "Veure # activitat": ["Ver # actividad", "Show # activity", "Voir # activité"], "Veure # activitats": ["Ver # actividades", "Show # activities", "Voir # activités"], "Veure activitats": ["Ver actividades", "Show activities", "Voir les activités"], "Veure al mapa": ["Ver en el mapa", "View on map", "Voir sur la carte"], "Veure el meu impacte": ["Ver mi impacto", "See my impact", "Voir mon impact"], "Veure les meves recompenses": ["Ver mis recompensas", "See my rewards", "Voir mes récompenses"], "Veure les rutes al mapa": ["Ver las rutas en el mapa", "View routes on the map", "Voir les itinéraires sur la carte"], "Veure'ls tots (#)": ["Verlos todos (#)", "See all (#)", "Tout voir (#)"], "Veure-les totes": ["Verlas todas", "See all", "Tout voir"], "Veuràs el progrés a la botiga i al perfil": ["Verás el progreso en la tienda y en el perfil", "You'll see your progress in the shop and your profile", "Tu verras ta progression dans la boutique et le profil"], "Veuràs el progrés aquí i al teu perfil.": ["Verás el progreso aquí y en tu perfil.", "You'll see your progress here and in your profile.", "Tu verras ta progression ici et dans ton profil."], "Vibració": ["Vibración", "Vibration", "Vibration"], "Vibració i so en sortir de la ruta · sense gravar": ["Vibración y sonido al salir de la ruta · sin grabar", "Vibration and sound if you leave the route · nothing recorded", "Vibration et son si tu quittes l'itinéraire · sans enregistrement"], "Visible per a": ["Visible para", "Visible to", "Visible par"], "Visualització": ["Visualización", "Display", "Affichage"], "Vols abandonar la ruta?": ["¿Quieres abandonar la ruta?", "Quit the route?", "Abandonner l'itinéraire ?"], "Vols que et proposi alguna cosa amb gastronomia local?": ["¿Quieres que te proponga algo con gastronomía local?", "Shall I suggest something with local food?", "Veux-tu que je te propose quelque chose avec de la gastronomie locale ?"], "Vols rebre avisos?": ["¿Quieres recibir avisos?", "Want to get alerts?", "Veux-tu recevoir des alertes ?"], "Vols tancar la sessió?": ["¿Quieres cerrar sesión?", "Sign out?", "Te déconnecter ?"], "Vols una ruta que puguis començar sense cotxe?": ["¿Quieres una ruta que puedas empezar sin coche?", "Want a route you can start without a car?", "Veux-tu un itinéraire que tu peux commencer sans voiture ?"], "Volta suau pel faig del Montseny al voltant de l'embassament de Santa Fe. A la tardor, els colors són espectaculars.": ["Vuelta suave por el hayedo del Montseny alrededor del embalse de Santa Fe. En otoño, los colores son espectaculares.", "A gentle loop through the Montseny beech forest around the Santa Fe reservoir. In autumn, the colours are spectacular.", "Boucle douce dans la hêtraie du Montseny autour du réservoir de Santa Fe. En automne, les couleurs sont spectaculaires."], "Vull que sigui circular": ["Quiero que sea circular", "I want it to be a loop", "Je veux que ce soit une boucle"], "Vàlid a les xarxes de transport que s'adhereixin al programa. Import i operadors: pendents d'acord.": ["Válido en las redes de transporte que se adhieran al programa. Importe y operadores: pendientes de acuerdo.", "Valid on transport networks that join the programme. Amount and operators: to be agreed.", "Valable sur les réseaux de transport qui rejoignent le programme. Montant et opérateurs : en attente d'accord."], "Xat": ["Chat", "Chat", "Chat"], "Xat amb l'assistent": ["Chat con el asistente", "Chat with the assistant", "Chat avec l'assistant"], "Xat i Ruta a mida": ["Chat y Ruta a medida", "Chat and Custom route", "Chat et Itinéraire sur mesure"], "Xifra comunitària d'exemple": ["Cifra comunitaria de ejemplo", "Sample community figure", "Chiffre communautaire d'exemple"], "Xifra comunitària: dada d'exemple.": ["Cifra comunitaria: dato de ejemplo.", "Community figure: sample data.", "Chiffre communautaire : donnée d'exemple."], "a peu": ["a pie", "on foot", "à pied"], "check-ins": ["check-ins", "check-ins", "check-ins"], "codi actiu": ["código activo", "active code", "code actif"], "codis actius": ["códigos activos", "active codes", "codes actifs"], "en línia": ["en línea", "online", "en ligne"], "en repòs": ["en reposo", "resting", "au repos"], "pensant": ["pensando", "thinking", "réfléchit"], "pensant…": ["pensando…", "thinking…", "réfléchit…"], "escrivint…": ["escribiendo…", "typing…", "écrit…"], "saludant": ["saludando", "waving", "salue"], "buscant": ["buscando", "searching", "cherche"], "celebrant": ["celebrando", "celebrating", "fait la fête"], "responent": ["respondiendo", "replying", "répond"], "t'escolta": ["te escucha", "listening", "t'écoute"], "error": ["error", "error", "erreur"], "de CO₂ estalviat (estimat)": ["de CO₂ ahorrado (estimado)", "of CO₂ saved (estimate)", "de CO₂ économisé (estimation)"], "kg de CO₂ estalviats (estimat)": ["kg de CO₂ ahorrados (estimado)", "kg of CO₂ saved (estimate)", "kg de CO₂ économisés (estimation)"], "kg · estimació": ["kg · estimación", "kg · estimate", "kg · estimation"], "km sense cotxe": ["km sin coche", "km car-free", "km sans voiture"], "punts d'energia": ["puntos de energía", "energy points", "points d'énergie"], "punts": ["puntos", "points", "points"], "queden # dies": ["quedan # días", "# days left", "encore # jours"], "selecció": ["selección", "selected", "sélection"], "sense connexió": ["sin conexión", "offline", "hors ligne"], "setm. de ratxa": ["sem. de racha", "wk streak", "sem. de série"], "setmana seguida": ["semana seguida", "week in a row", "semaine d'affilée"], "setmanes seguides": ["semanas seguidas", "weeks in a row", "semaines d'affilée"], "És gratuït. El compte es desa en aquest dispositiu.": ["Es gratis. La cuenta se guarda en este dispositivo.", "It's free. Your account is saved on this device.", "C'est gratuit. Le compte est enregistré sur cet appareil."], "Últims # dies": ["Últimos # días", "Last # days", "# derniers jours"], "conec bons racons per allà.": ["conozco buenos rincones por allí.", "I know some great spots around there.", "je connais de bons coins par là."], "fa # dia": ["hace # día", "# day ago", "il y a # jour"], "fa # dies": ["hace # días", "# days ago", "il y a # jours"], "fa # setmana": ["hace # semana", "# week ago", "il y a # semaine"], "fa # setmanes": ["hace # semanas", "# weeks ago", "il y a # semaines"], "Desar Itinerari termal de Caldes": ["Guardar Itinerario termal de Caldes", "Save Caldes thermal trail", "Enregistrer Itinéraire thermal de Caldes"], "t'escolta…": ["te escucha…", "listening…", "t'écoute…"], "Hola,": ["Hola,", "Hi,", "Bonjour,"], "desar activitats": ["guardar actividades", "save activities", "enregistrer des activités"], "crear reptes": ["crear retos", "create challenges", "créer des défis"], "afegir consells": ["añadir consejos", "add tips", "ajouter des conseils"], "desar la ruta i sumar punts": ["guardar la ruta y sumar puntos", "save the route and earn points", "enregistrer l'itinéraire et gagner des points"], "desar recompenses": ["guardar recompensas", "save rewards", "enregistrer des récompenses"], "fer-ho": ["hacerlo", "do that", "faire ça"], "canviar punts": ["canjear puntos", "redeem points", "échanger des points"], "continuar parlant amb l'assistent (el mode convidat permet # missatges)": ["seguir hablando con el asistente (el modo invitado permite # mensajes)", "keep chatting with the assistant (guest mode allows # messages)", "continuer à parler avec l'assistant (le mode invité permet # messages)"], "El compte i les dades es desen només en aquest dispositiu.": ["La cuenta y los datos se guardan solo en este dispositivo.", "Your account and data are only stored on this device.", "Le compte et les données sont enregistrés uniquement sur cet appareil."], "Pots esborrar el compte i totes les dades d'aquest dispositiu.": ["Puedes eliminar la cuenta y todos los datos de este dispositivo.", "You can delete your account and all data on this device.", "Tu peux supprimer le compte et toutes les données de cet appareil."], "Cardedeu i el Museu Tomàs Balvey": ["Cardedeu y el Museu Tomàs Balvey", "Cardedeu and the Tomàs Balvey Museum", "Cardedeu et le musée Tomàs Balvey"], "recàrrega de transport públic": ["recarga de transporte público", "public transport top-up", "recharge de transport en commun"], "entrada a un museu de la comarca": ["entrada a un museo de la comarca", "entry to a local museum", "entrée dans un musée de la région"], "esmorzar en un bar de poble": ["desayuno en un bar de pueblo", "breakfast at a village bar", "petit-déjeuner dans un bar de village"], "plantar un arbre a la comarca": ["plantar un árbol en la comarca", "plant a tree in the area", "planter un arbre dans la région"], "val de # € en productors Km#": ["vale de # € en productores Km#", "€# voucher for Km# producers", "bon de # € chez les producteurs Km#"], "En desar la ruta": ["Al guardar la ruta", "When you save the route", "En enregistrant l'itinéraire"], "Posar en pausa o finalitzar": ["Pausar o finalizar", "Pause or finish", "Mettre en pause ou terminer"], "tutorial": ["tutorial", "tutorial", "tutoriel"], "Valia · Turisme actiu al Vallès Oriental": ["Valia · Turismo activo en el Vallès Oriental", "Valia · Active tourism in the Vallès Oriental", "Valia · Tourisme actif dans le Vallès Oriental"], "de # km": ["de # km", "of # km", "sur # km"], "de #": ["de #", "of #", "sur #"]};
const I18N_TPL=[["Desar (.+)", ["Guardar $1", "Save $1", "Enregistrer $1"]], ["(.+)\\. Obrir el detall", ["$1. Abrir el detalle", "$1. Open details", "$1. Ouvrir le détail"]], ["Hola, (.+)!", ["¡Hola, $1!", "Hi, $1!", "Bonjour, $1 !"]], ["Rebràs «(.+)»\\. Et quedaran (.+) punts\\.", ["Recibirás «$1». Te quedarán $2 puntos.", "You'll get \"$1\". You'll have $2 points left.", "Tu recevras « $1 ». Il te restera $2 points."]], ["A Valia es poden canviar punts d'energia per «(.+)» \\((.+)\\)\\.?(.*)", ["En Valia se pueden canjear puntos de energía por «$1» ($2).$3", "On Valia you can redeem energy points for \"$1\" ($2).$3", "Sur Valia, on peut échanger des points d'énergie contre « $1 » ($2).$3"]], ["Cap ruta compleix totes les opcions\\. Si deixem de banda (.+), aquesta s'hi acosta:", ["Ninguna ruta cumple todas las opciones. Si dejamos de lado $1, esta se acerca:", "No route meets every option. If we leave out $1, this one comes close:", "Aucun itinéraire ne remplit toutes les options. Si on laisse de côté $1, celui-ci s'en approche :"]], ["Cap ruta compleix totes les opcions\\. Si deixem de banda (.+), aquestes s'hi acosten:", ["Ninguna ruta cumple todas las opciones. Si dejamos de lado $1, estas se acercan:", "No route meets every option. If we leave out $1, these come close:", "Aucun itinéraire ne remplit toutes les options. Si on laisse de côté $1, ceux-ci s'en approchent :"]], ["És a menys de (\\d+) km de (.+)\\.", ["Está a menos de $1 km de $2.", "It's less than $1 km from $2.", "Il est à moins de $1 km de $2."]], ["Totes són a menys de (\\d+) km de (.+)\\.", ["Todas están a menos de $1 km de $2.", "They're all less than $1 km from $2.", "Ils sont tous à moins de $1 km de $2."]], ["(Dilluns|Dimarts|Dimecres|Dijous|Divendres|Dissabte|Diumenge), (.+)", ["$1, $2", "$1, $2", "$1 $2"]], ["(.+) \\((.+)\\) · (.+) — a Valia", ["$1 ($2) · $3 — en Valia", "$1 ($2) · $3 — on Valia", "$1 ($2) · $3 — sur Valia"]], ["Membre des del (.+)", ["Miembro desde el $1", "Member since $1", "Membre depuis le $1"]], ["Canviat el (.+) per (.+) punts\\.", ["Canjeado el $1 por $2 puntos.", "Redeemed on $1 for $2 points.", "Échangé le $1 contre $2 points."]], ["Codi: (\\S+) Canviat el (.+) per (.+) punts\\. Mostra'l a l'establiment adherit \\(exemple\\)\\.", ["Código: $1 Canjeado el $2 por $3 puntos. Muéstralo en el establecimiento adherido (ejemplo).", "Code: $1 Redeemed on $2 for $3 points. Show it at the participating business (sample).", "Code : $1 Échangé le $2 contre $3 points. Montre-le dans l'établissement partenaire (exemple)."]], ["Copiar el codi (\\S+)", ["Copiar el código $1", "Copy code $1", "Copier le code $1"]], ["(.+): conec bons racons per allà\\.", ["$1: conozco buenos rincones por allí.", "$1: I know some great spots around there.", "$1 : je connais de bons coins par là."]], ["Prova Valia, el prototip de turisme actiu del Vallès Oriental: (.+)", ["Prueba Valia, el prototipo de turismo activo del Vallès Oriental: $1", "Try Valia, the active tourism prototype for the Vallès Oriental: $1", "Essaie Valia, le prototype de tourisme actif du Vallès Oriental : $1"]], ["Estadístiques anònimes: (sí|no) · Novetats per correu: (sí|no) · Personalització amb IA: (sí|no)\\.(.*)", ["Estadísticas anónimas: $1 · Novedades por correo: $2 · Personalización con IA: $3.$4", "Anonymous statistics: $1 · News by email: $2 · AI personalisation: $3.$4", "Statistiques anonymes : $1 · Nouveautés par e-mail : $2 · Personnalisation par IA : $3.$4"]], ["Per (.+) has de crear un compte\\. És gratuït i es desa en aquest dispositiu\\.", ["Para $1 tienes que crear una cuenta. Es gratis y se guarda en este dispositivo.", "To $1, you need to create an account. It's free and saved on this device.", "Pour $1, tu dois créer un compte. C'est gratuit et enregistré sur cet appareil."]]];

/* ---- i18n.js ---- */
/* ===================== Valia · idiomes (català, castellà, anglès i francès) =====================
   El codi de les pantalles escriu en català. Aquesta capa tradueix el que surt a la pantalla
   (nodes de text i atributs accessibles) just abans que el navegador el pinti, amb un diccionari
   (I18N_DICT) i unes plantilles amb comodins (I18N_TPL). També converteix quilòmetres a milles
   quan l'usuari tria «Milles». Els textos del codi no es toquen: el català és la font. */
const I18n = (function () {
  'use strict';
  const LANGS = [['ca', 'Català'], ['es', 'Español'], ['en', 'English'], ['fr', 'Français']];
  const IDX = { es: 0, en: 1, fr: 2 };
  const KEY = 'valia.lang', UKEY = 'valia.units';
  const get = (k, d) => { try { return localStorage.getItem(k) || d; } catch (e) { return d; } };
  const put = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* sense emmagatzematge */ } };
  let lang = get(KEY, 'ca'); if (!LANGS.some(l => l[0] === lang)) lang = 'ca';
  let units = get(UKEY, 'km') === 'mi' ? 'mi' : 'km';
  const ATTRS = ['aria-label', 'placeholder', 'title', 'alt', 'aria-valuetext', 'aria-roledescription'];
  const NUM = /\d+(?:[.,]\d+)*/g;
  const MONTHS = ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre'];
  const MO = {
    es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  };
  const DATE = new RegExp('\\b(\\d{1,2}) (?:de |d\')(' + MONTHS.join('|') + ')\\b', 'g');
  const norm = s => s.replace(/\s+/g, ' ').trim();
  /* diccionari: clau normalitzada (xifres → #) → [es, en, fr] amb les xifres també com a # */
  const D = new Map(), T = [], DYN = new Map();
  function nkey(s) { return norm(s).replace(DATE, '§D').replace(NUM, '#'); }
  function load() {
    const src = typeof I18N_DICT !== 'undefined' ? I18N_DICT : {};
    for (const k in src) {
      const kk = nkey(k), nk = (k.replace(DATE, '').match(NUM) || []).length;
      D.set(kk, src[k].map(v => { if (v == null) return null; const nv = (v.replace(DATE, '').match(NUM) || []).length; return nv === nk ? v.replace(DATE, '§D').replace(NUM, '#') : '\u0001' + v; }));
    }
    (typeof I18N_TPL !== 'undefined' ? I18N_TPL : []).forEach(t => T.push([new RegExp('^' + t[0] + '$'), t[1]]));
  }
  /* xifres en el format de cada idioma: 1.240 → 1,240 (en) · 1 240 (fr); 5,4 → 5.4 (en) */
  function fnum(n, L) {
    if (L === 'en') return n.replace(/[.,]/g, c => (c === '.' ? ',' : '.'));
    if (L === 'fr') return /^\d{1,3}(\.\d{3})+$/.test(n) ? n.replace(/\./g, '\u00a0') : n;
    return n;
  }
  function fdate(m, d, mo, L) {
    const i = MONTHS.indexOf(mo);
    if (L === 'es') return d + ' de ' + MO.es[i];
    if (L === 'en') return MO.en[i] + ' ' + d;
    if (L === 'fr') return (d === '1' ? '1er' : d) + ' ' + MO.fr[i];
    return m;
  }
  /* quilòmetres → milles (1 km = 0,621371 mi), llegint i escrivint la xifra en el format de cada idioma */
  function toMi(s, L) {
    L = L || lang;
    return s.replace(/(\d+(?:[.,\u00a0]\d+)*)(\s|\u00a0)?km\b(?!\/)/g, (m, n, sp) => {
      const raw = L === 'en' ? n.replace(/,/g, '') : n.replace(/[.\u00a0]/g, '').replace(',', '.');
      const v = parseFloat(raw) * 0.621371; if (!isFinite(v)) return m;
      const r = v >= 100 ? Math.round(v) : Math.round(v * 10) / 10;
      let o = String(r); if (L !== 'en') o = o.replace('.', ',');
      if (r >= 1000) o = L === 'en' ? r.toLocaleString('en') : String(r).replace(/\B(?=(\d{3})+(?!\d))/g, L === 'fr' ? '\u00a0' : '.');
      return o + (sp || ' ') + 'mi';
    });
  }
  function fill(tpl, nums, dates, L) {
    let i = 0, j = 0;
    return tpl.replace(/§D|#/g, t => (t === '§D' ? (dates[j++] || '') : fnum(nums[i++] || '', L)));
  }
  /* tradueix un text sencer (sense espais als extrems); null si no el coneix */
  function tr(s, L) {
    L = L || lang;
    if (L === 'ca') return null;
    const ix = IDX[L], dy = DYN.get(norm(s)); if (dy && dy[ix]) return dy[ix];
    const k = nkey(s), e = D.get(k);
    if (e) {
      const v = e[ix]; if (v == null) return null;
      if (v.charCodeAt(0) === 1) return v.slice(1);
      const dates = []; s.replace(DATE, (m, d, mo) => { dates.push(fdate(m, d, mo, L)); return ''; });
      const nums = (norm(s).replace(DATE, '').match(NUM) || []);
      return fill(v, nums, dates, L);
    }
    for (const [re, out] of T) {
      const m = norm(s).match(re); if (!m) continue;
      const v = out[ix]; if (v == null) return null;
      return v.replace(/\$(\d)/g, (x, n) => { const g = m[+n] || ''; return trAny(g, L); });
    }
    const c = compose(norm(s), L); if (c != null) return c;
    if (DATE.test(s)) { DATE.lastIndex = 0; const only = norm(s).replace(DATE, (m, d, mo) => fdate(m, d, mo, L)); return only; }
    return null;
  }
  /* textos compostos («Caldes de Montbui · A peu · Fàcil», «Enrere: Perfil», «Natura, Història»):
     es tradueix cada part; les parts sense traducció només s'accepten si semblen noms propis o xifres */
  const SEPS = [' · ', ' — ', ': ', ', '];
  const proper = p => /^[A-ZÀ-Ý«"(]/.test(p) && p.split(' ').length <= 6 && !/[.!?]$/.test(p);
  function compose(s, L) {
    for (const sep of SEPS) {
      if (!s.includes(sep)) continue;
      const parts = s.split(sep); let any = false, ok = true;
      const out = parts.map(p => {
        if (!/[A-Za-zÀ-ÿ]{2}/.test(p)) return p.replace(NUM, n => fnum(n, L));
        let t = tr(p, L); if (t != null) { any = true; return t; }
        if (proper(p) || /^[\d+]/.test(p)) return p.replace(NUM, n => fnum(n, L));
        ok = false; return p;
      });
      if (ok && any) return out.join(L === 'fr' && sep === ': ' ? '\u00a0: ' : sep);
    }
    return null;
  }
  /* per a fragments dins de plantilles: tradueix si pot, si no el deixa igual */
  const CONJ = { es: ['y', 'o'], en: ['and', 'or'], fr: ['et', 'ou'] };
  function trAny(g, L) {
    if (!g) return g; const t = tr(g, L); if (t != null) return t;
    if (g.includes('«')) return g.replace(/«([^»]+)»/g, (m, x) => '«' + trAny(x, L) + '»').replace(/» i «/g, '» ' + CONJ[L][0] + ' «').replace(/» o «/g, '» ' + CONJ[L][1] + ' «');
    return g.replace(NUM, n => fnum(n, L));
  }
  /* text amb espais als extrems conservats */
  function text(s) {
    if (s.includes('\n') && s.trim().includes('\n')) return s.split('\n').map(l => { const t = text(l); return t == null ? l : t; }).join('\n');
    const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/); let core = m[2];
    if (!core || !/[A-Za-zÀ-ÿ]/.test(core)) { if (!core) return null; let o = core; if (lang === 'en' || lang === 'fr') o = o.replace(NUM, n => fnum(n, lang)); if (units === 'mi') o = toMi(o); return o === core ? null : m[1] + o + m[3]; }
    let out = tr(core);
    if (out == null) { if (MISS && lang !== 'ca') miss(core); out = lang === 'en' || lang === 'fr' ? core.replace(NUM, n => fnum(n, lang)) : core; if (out === core && units !== 'mi') return null; }
    if (units === 'mi') out = toMi(out);
    return out === core ? null : m[1] + out + m[3];
  }
  /* registre de textos sense traduir (només per a proves) */
  const MISS = typeof window !== 'undefined' && window.__I18N_MISS ? new Map() : null;
  function miss(s) { if (!/[a-zà-ÿ]{2}/i.test(s)) return; const k = nkey(s); MISS.set(k, (MISS.get(k) || 0) + 1); }
  const COLLECT = typeof window !== 'undefined' && window.__I18N_COLLECT ? new Map() : null;

  /* ---------- aplicació al DOM ---------- */
  const ORIG = new WeakMap(), WROTE = new WeakMap(), AORIG = new WeakMap();
  const SKIP = 'script,style,textarea,[contenteditable],[data-noi18n],.nt18';
  const active = () => lang !== 'ca' || units === 'mi' || !!COLLECT;
  function doText(n) {
    const p = n.parentElement; if (!p || p.closest(SKIP)) return;
    const cur = n.data;
    if (WROTE.get(n) === cur) return;
    const o = cur; ORIG.set(n, o);
    if (COLLECT) { const c = norm(o); if (/[A-Za-zÀ-ÿ]{2}/.test(c)) COLLECT.set(nkey(c), c); }
    const t = text(o);
    if (t != null && t !== cur) { WROTE.set(n, t); n.data = t; } else WROTE.set(n, cur);
  }
  function doAttrs(el) {
    if (el.closest && el.closest('[data-noi18n]')) return;
    for (const a of ATTRS) {
      if (!el.hasAttribute(a)) continue;
      const v = el.getAttribute(a); let ao = AORIG.get(el); if (!ao) { ao = {}; AORIG.set(el, ao); }
      if (ao['w' + a] === v) continue;
      ao[a] = v;
      if (COLLECT) { const c = norm(v); if (/[A-Za-zÀ-ÿ]{2}/.test(c)) COLLECT.set(nkey(c), c); }
      const t = text(v);
      ao['w' + a] = t != null ? t : v;
      if (t != null && t !== v) el.setAttribute(a, t);
    }
  }
  function walk(root) {
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    if (root.matches && root.matches('script,style')) return;
    doAttrs(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    while (w.nextNode()) { const n = w.currentNode; if (n.nodeType === 3) doText(n); else doAttrs(n); }
  }
  let mo = null;
  function observe() {
    if (mo || !active()) return;
    mo = new MutationObserver(list => {
      for (const m of list) {
        if (m.type === 'childList') m.addedNodes.forEach(walk);
        else if (m.type === 'characterData') doText(m.target);
        else if (m.type === 'attributes') doAttrs(m.target);
      }
    });
    mo.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    walk(document.body);
    if (document.title && lang !== 'ca') { const t = tr(document.title); if (t) document.title = t; }
  }
  function syncLang() {
    document.documentElement.lang = lang;
    const app = document.getElementById('app'); if (app) app.setAttribute('lang', lang);
  }
  /* compartir i copiar també en l'idioma triat */
  function patchOut() {
    const tx = s => { if (typeof s !== 'string' || !active()) return s; return s.split('\n').map(l => { const t = text(l); return t == null ? l : t; }).join('\n'); };
    if (navigator.share) { const sh = navigator.share.bind(navigator); navigator.share = o => sh(Object.assign({}, o, { title: tx(o.title), text: tx(o.text) })); }
    if (navigator.clipboard && navigator.clipboard.writeText) { const wr = navigator.clipboard.writeText.bind(navigator.clipboard); navigator.clipboard.writeText = s => wr(/^https?:/.test(s) ? s : tx(s)); }
  }
  load(); syncLang(); patchOut();
  if (document.body) observe(); else document.addEventListener('DOMContentLoaded', observe);

  /* canvi en calent: torna a pintar l'app sencera en el nou idioma o unitats */
  const subs = [];
  function retranslateStatic() {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    while (w.nextNode()) {
      const n = w.currentNode;
      if (n.nodeType === 3) { const o = ORIG.get(n); if (o != null && WROTE.get(n) === n.data) { WROTE.delete(n); n.data = o; } }
      else { const ao = AORIG.get(n); if (ao) { for (const a of ATTRS) if (ao[a] != null && n.getAttribute(a) === ao['w' + a]) n.setAttribute(a, ao[a]); AORIG.delete(n); } }
    }
  }
  function setLang(l) {
    if (l === lang || !LANGS.some(x => x[0] === l)) return;
    if (mo) { mo.disconnect(); mo = null; }
    retranslateStatic(); lang = l; put(KEY, l); syncLang(); observe();
    subs.forEach(f => f('lang', l));
  }
  function setUnits(u) {
    u = u === 'mi' ? 'mi' : 'km'; if (u === units) return;
    if (mo) { mo.disconnect(); mo = null; }
    retranslateStatic(); units = u; put(UKEY, u); observe();
    subs.forEach(f => f('units', u));
  }
  /* t(): per al codi nou (ajustos v5.1) quan cal el text traduït abans de pintar-lo */
  const t = s => { const r = tr(s); return r == null ? s : r; };
  const dyn = (ca, arr) => { if (ca && arr) DYN.set(norm(ca), arr); };
  return { dyn, LANGS, get lang() { return lang; }, get units() { return units; }, setLang, setUnits, t, tr, on: f => subs.push(f), name: l => (LANGS.find(x => x[0] === (l || lang)) || [])[1],
    misses: () => MISS ? [...MISS.entries()] : [], collected: () => COLLECT ? [...COLLECT.values()] : [], walk };
})();

/* ---- spring.js ---- */
/* Molles (springs) com les de SwiftUI: resposta (s) i fracció d'esmorteïment.
   - spring(r, d) → { easing: 'linear(...)', duration } per a la Web Animations API i CSS
   - runSpring({...}) → animació controlada per JS amb velocitat inicial (gestos) */
(function (root) {
  'use strict';
  function fn(response, damping, v0) {
    const w0 = 2 * Math.PI / response, z = damping;
    // x(t) = desplaçament normalitzat que va d'1 a 0, amb velocitat inicial v0 (unitats/s)
    if (z < 1) {
      const wd = w0 * Math.sqrt(1 - z * z);
      return t => Math.exp(-z * w0 * t) * (Math.cos(wd * t) + ((z * w0 - (v0 || 0)) / wd) * Math.sin(wd * t));
    }
    return t => Math.exp(-w0 * t) * (1 + (w0 - (v0 || 0)) * t);
  }
  function settle(x, eps) {
    let last = 0;
    for (let t = 0; t < 4; t += 0.004) if (Math.abs(x(t)) > eps) last = t;
    return Math.min(4, last + 0.004);
  }
  const cache = {};
  function spring(response, damping) {
    response = response || 0.4; damping = damping == null ? 0.86 : damping;
    const k = response + '|' + damping;
    if (cache[k]) return cache[k];
    const x = fn(response, damping, 0), D = settle(x, 0.0015), N = 48, pts = [];
    for (let i = 0; i <= N; i++) { const t = D * i / N; pts.push((i === N ? 1 : 1 - x(t)).toFixed(4) + ' ' + (100 * i / N).toFixed(2) + '%'); }
    // la corba es manté igual però la durada queda entre 150 i 450 ms (sistema de moviment de Valia):
    // si la molla trigaria més a reposar, es comprimeix en el temps (equival a una molla una mica més rígida, sense salts)
    return (cache[k] = { easing: 'linear(' + pts.join(', ') + ')', duration: Math.min(450, Math.max(150, Math.round(D * 1000))), response, damping });
  }
  /* animació per JS: from → to amb velocitat inicial (unitats/s) */
  function runSpring(o) {
    const from = o.from, to = o.to, d0 = from - to;
    const v0n = d0 !== 0 ? -(o.velocity || 0) / d0 : 0;
    const x = fn(o.response || 0.4, o.damping == null ? 0.86 : o.damping, v0n);
    const D = settle(t => (d0 === 0 ? 0 : x(t) * Math.abs(d0)), 0.3);
    let raf = 0, t0 = performance.now(), stopped = false;
    function step(now) {
      if (stopped) return;
      const t = (now - t0) / 1000;
      if (t >= D) { o.onUpdate && o.onUpdate(to); o.onDone && o.onDone(); return; }
      o.onUpdate && o.onUpdate(to + d0 * x(t));
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return { stop() { stopped = true; cancelAnimationFrame(raf); } };
  }
  root.Spring = { spring, runSpring, fn };
})(typeof window !== 'undefined' ? window : globalThis);

/* ---- rig.js ---- */
/* Valia · logotip articulat + animació de càrrega (SVG + requestAnimationFrame)
   Unitats: u = unitat de la figura. Coordenades del món en u, eix y cap amunt, origen a terra sota el maluc inicial.
   Tot el moviment es fa amb transform i opacity. */
(function (root) {
  'use strict';
  function make(o) {
    o = o || {};
    var D2R = Math.PI / 180, R2D = 180 / Math.PI;

    /* ---------- cos i marxa ---------- */
    var C = {
      T: 1.05,            // s per cicle (2 passos) → 114 passos/min
      S: 39,              // gambada (2 passos) en u
      BETA: 0.62,         // fracció de recolzament
      AF: 0.235,          // peu davanter en tocar terra: +0,27·S davant del maluc
      L1: 12.5, L2: 12.5, // cuixa, tíbia
      LF: 5.5, RC: 3.7,   // peu (taló→punta) i radi de la bota
      H_LOW: 26.7, BOB: 1.3, // alçada del maluc al doble recolzament i oscil·lació (≈2,5 px)
      GHS: 14, GTO: -55,  // inclinació del peu en tocar (taló) i en enlairar-se (punta), graus
      PF0: 0.12, PF1: 0.45, CLEAR: 2.0,
      LU: 9.5, LFA: 9.0,  // braç i avantbraç
      SHN: [2.6, 18.6],   // espatlla propera (x endavant, y amunt des del maluc, al marc del tronc)
      SHF: [-0.6, 18.6],
      DS: 21, GS: 40, LS: 46, RH: 14, STK: 0.55, // bastó: on es planta, on l'agafa la mà, llarg, fase en què s'aixeca
      CF: 0.6,            // els peus veuen el 60 % de la curvatura (diferència < 0,6 px; evita que el maluc baixi massa)
      N_REV: o.N_REV || 9 // una volta del globus = N cicles exactes → bucle perfecte
    };
    C.V = C.S / C.T;                       // u/s
    C.R = C.N_REV * C.S / (2 * Math.PI);   // radi del globus en u (≈66,5 u)

    /* ---------- calendari ---------- */
    /* Logotip: figura dins la fulla (caixa de 120 u de fulla). f = escala figura→fulla; HX, GY = maluc i terra inicials; CX, CY = centre de la fulla */
    var LOGO = { f: 0.9, HX: 46, GY: 92, CX: 60.6, CY: 57.65 };
    var TL = { t0: 1.2, tGlobe: 2.4, tPop: 0.45, tStop: 2.6, travel: (LOGO.CX - LOGO.HX) / LOGO.f };

    function clamp(x, a, b) { return x < a ? a : x > b ? b : x; }
    function sstep(x) { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); }
    function s5(x) { x = clamp(x, 0, 1); return x * x * x * (x * (x * 6 - 15) + 10); }
    function lerp(a, b, t) { return a + (b - a) * t; }
    function easeOutBack(x, c1) { var c3 = c1 + 1, y = x - 1; return 1 + c3 * y * y * y + c1 * y * y; }
    function easeOutCubic(x) { x = clamp(x, 0, 1); return 1 - Math.pow(1 - x, 3); }

    /* Integració numèrica del calendari: velocitat relativa al terra (w), velocitat a pantalla (u), fase, terra recorregut (G), posició (X), escala i gir del globus */
    var DT = 1 / 1000, TMAX = 4.5, N = Math.round(TMAX / DT) + 1;
    var A = { w: new Float64Array(N), u: new Float64Array(N), ph: new Float64Array(N), G: new Float64Array(N), X: new Float64Array(N), s: new Float64Array(N), th: new Float64Array(N) };
    function wAt(t) { return C.V * sstep((t - TL.t0) / 1.05); }
    function globeScale(t) { if (t < TL.tGlobe) return 0; var x = (t - TL.tGlobe) / TL.tPop; return x >= 1 ? 1 : easeOutBack(x, 1.5); }
    function solveTimeline(td0) {
      var X = 0, G = 0, ph = 0, th = 0;
      for (var i = 0; i < N; i++) {
        var t = i * DT, w = wAt(t), m = 1 - sstep((t - td0) / (TL.tStop - td0)), u = w * m, s = globeScale(t);
        A.w[i] = w; A.u[i] = u; A.ph[i] = ph; A.G[i] = G; A.X[i] = X; A.s[i] = s; A.th[i] = th;
        X += u * DT; G += w * DT; ph += w / C.S * DT;
        if (t >= TL.tGlobe) th -= w / (C.R * Math.max(s, 0.35)) * DT; // sense lliscament: ω = w / (R·s)
      }
      return X;
    }
    // tria el moment en què comença a frenar perquè recorri exactament TL.travel u (≈26 px)
    var lo = TL.t0 + 0.05, hi = TL.tStop - 0.05;
    for (var k = 0; k < 40; k++) { var mid = (lo + hi) / 2; if (solveTimeline(mid) > TL.travel) hi = mid; else lo = mid; }
    TL.td0 = (lo + hi) / 2; solveTimeline(TL.td0);
    var END = { t: (N - 1) * DT, ph: A.ph[N - 1], G: A.G[N - 1], X: A.X[N - 1], th: A.th[N - 1] };

    function sample(arr, t) { var f = t / DT, i = Math.floor(f); if (i >= N - 1) return arr[N - 1]; if (i < 0) return arr[0]; var a = f - i; return arr[i] * (1 - a) + arr[i + 1] * a; }
    function state(t) {
      if (t <= END.t) return { w: sample(A.w, t), u: sample(A.u, t), ph: sample(A.ph, t), G: sample(A.G, t), X: sample(A.X, t), s: globeScale(t), th: sample(A.th, t) };
      var dt = t - END.t; // règim estable: caminar sobre el globus a velocitat constant
      return { w: C.V, u: 0, ph: END.ph + dt / C.T, G: END.G + C.V * dt, X: END.X, s: 1, th: END.th - C.V * dt / C.R };
    }
    // terra recorregut en funció de la fase (per planificar les petjades)
    function GofPh(ph) {
      if (ph <= 0) return ph * C.S;
      if (ph >= END.ph) return END.G + (ph - END.ph) * C.S;
      var a = 0, b = N - 1; while (b - a > 1) { var m = (a + b) >> 1; if (A.ph[m] < ph) a = m; else b = m; }
      var f = (ph - A.ph[a]) / ((A.ph[b] - A.ph[a]) || 1); return A.G[a] + (A.G[b] - A.G[a]) * f;
    }
    function curv(t) { return o.flat ? 0 : sstep((t - TL.tGlobe) / 0.35); }

    /* Terra: un punt del terra a distància d (u, mesurada sobre la superfície) del maluc → posició al món, tangent i normal */
    function groundFrame(d, X, c) {
      var a = c * d / C.R;
      return { x: X + (1 - c) * d + c * C.R * Math.sin(d / C.R), y: -c * C.R * (1 - Math.cos(d / C.R)), tx: Math.cos(a), ty: -Math.sin(a), nx: Math.sin(a), ny: Math.cos(a) };
    }
    function gp(F, a, b) { return [F.x + a * F.tx + b * F.nx, F.y + a * F.ty + b * F.ny]; } // a: al llarg del terra, b: cap amunt

    /* Peu: retorna turmell (A) i inclinació absoluta del peu (graus, + = punta amunt) */
    function footAt(ph, off, st, c) {
      var p = ph - off, n = Math.floor(p), q = p - n; c *= C.CF;
      var gTd = GofPh(n + off) + C.AF * C.S;           // on toca el taló en aquest pas
      var d = gTd - st.G;                               // distància taló–maluc sobre el terra
      var gam, Ap, Fr;
      if (q < C.BETA) {
        if (q < C.PF1) {                                  // taló com a pivot i després peu pla
          gam = q < C.PF0 ? C.GHS * (1 - s5(q / C.PF0)) : 0;
          Fr = groundFrame(d, st.X, c); Ap = gp(Fr, 0, C.RC);
        } else {                                          // punta com a pivot: el taló s'aixeca
          gam = C.GTO * s5((q - C.PF1) / (C.BETA - C.PF1));
          var g = gam * D2R; Fr = groundFrame(d + C.LF, st.X, c);
          Ap = gp(Fr, -C.LF * Math.cos(g), C.RC - C.LF * Math.sin(g));
        }
        return { A: Ap, g: gam + Math.atan2(Fr.ty, Fr.tx) * R2D, contact: true };
      }
      // vol: del punt d'enlairament al següent contacte de taló
      var u = (q - C.BETA) / (1 - C.BETA);
      var gLo = gTd;                                     // el peu s'enlaira des de la seva pròpia petjada
      var gNext = GofPh(n + 1 + off) + C.AF * C.S;
      var dLo = gLo - st.G + C.LF, dTd = gNext - st.G;   // punta a l'enlairar, taló a l'arribar
      var e = s5(u), e2 = u * u * (3 - 2 * u) + 0.5 * u * (1 - u) * (1 - u); // surt amb una mica de velocitat cap endavant
      var gam2 = lerp(C.GTO, C.GHS, s5(clamp((u - 0.05) / 0.9, 0, 1)));
      var gr = gam2 * D2R;
      // turmell interpolat sobre el terra: a l'inici, turmell = punta − LF·dir; al final, turmell sobre el taló
      var aLo = dLo - C.LF * Math.cos(C.GTO * D2R), hLo = C.RC - C.LF * Math.sin(C.GTO * D2R);
      var dd = lerp(aLo, dTd, e2), hh = lerp(hLo, C.RC, e) + C.CLEAR * Math.pow(Math.sin(Math.PI * u), 1.3);
      var Fs = groundFrame(dd, st.X, c);
      return { A: gp(Fs, 0, hh), g: gam2 + Math.atan2(Fs.ty, Fs.tx) * R2D, contact: false };
    }

    /* IK de dues barres al pla: maluc H → turmell P; el genoll apunta endavant (+x) */
    function ik2(H, P, l1, l2) {
      var dx = P[0] - H[0], dy = P[1] - H[1], D = Math.hypot(dx, dy), Dc = Math.min(D, (l1 + l2) * 0.9995);
      var base = Math.atan2(dy, dx);
      var cosA = clamp((l1 * l1 + Dc * Dc - l2 * l2) / (2 * l1 * Dc), -1, 1), a = Math.acos(cosA);
      var th1 = base + a;                       // genoll endavant (en y amunt, girar cap a +x des de baix)
      var K = [H[0] + l1 * Math.cos(th1), H[1] + l1 * Math.sin(th1)];
      var Pe = [H[0] + Dc * Math.cos(base), H[1] + Dc * Math.sin(base)];
      return { K: K, P: Pe, slip: D - Dc };
    }
    function ikArm(S, P, l1, l2) { // colze cap enrere i avall
      var dx = P[0] - S[0], dy = P[1] - S[1], D = Math.hypot(dx, dy), Dc = Math.min(D, (l1 + l2) * 0.999);
      var base = Math.atan2(dy, dx), cosA = clamp((l1 * l1 + Dc * Dc - l2 * l2) / (2 * l1 * Dc), -1, 1), a = Math.acos(cosA);
      var th1 = base - a;
      return { E: [S[0] + l1 * Math.cos(th1), S[1] + l1 * Math.sin(th1)], P: [S[0] + Dc * Math.cos(base), S[1] + Dc * Math.sin(base)] };
    }

    /* Bastó: punta clavada al terra (fase 0 → STK) i vol fins al següent clavat */
    function stickTip(ph, st, c) {
      var n = Math.floor(ph), q = ph - n;
      var g0 = GofPh(n) + C.DS;
      if (q < C.STK) { var F = groundFrame(g0 - st.G, st.X, c); return { T: [F.x, F.y], planted: true }; }
      var u = (q - C.STK) / (1 - C.STK), g1 = GofPh(n + 1) + C.DS;
      var d = lerp(g0, g1, s5(u)) - st.G, F2 = groundFrame(d, st.X, c);
      return { T: gp(F2, 0, 4.2 * Math.pow(Math.sin(Math.PI * u), 1.2)), planted: false };
    }

    function circleX(P0, r0, P1, r1) {
      var dx = P1[0] - P0[0], dy = P1[1] - P0[1], d = Math.hypot(dx, dy);
      if (d > r0 + r1 || d < Math.abs(r0 - r1)) return [P0[0] + r0 * dx / d, P0[1] + r0 * dy / d];
      var a = (r0 * r0 - r1 * r1 + d * d) / (2 * d), h = Math.sqrt(Math.max(0, r0 * r0 - a * a));
      var mx = P0[0] + a * dx / d, my = P0[1] + a * dy / d;
      var c1 = [mx + h * dy / d, my - h * dx / d], c2 = [mx - h * dy / d, my + h * dx / d];
      return c1[0] > c2[0] ? c1 : c2;
    }

    function softMin(a, b, k) { var h = clamp(0.5 + 0.5 * (b - a) / k, 0, 1); return lerp(b, a, h) - k * h * (1 - h); }

    /* Postura completa en el temps t */
    function pose(t) {
      var st = state(t), ph = st.ph, c = curv(t);
      var walk = sstep((t - TL.t0) / 0.6);
      var lean = lerp(3, 5, walk) * D2R;                     // inclinació endavant 3° → 5°
      var hy = C.H_LOW + C.BOB * Math.pow(Math.sin(2 * Math.PI * ph), 2); // més baix al doble recolzament, més alt a mig pas
      var fF = footAt(ph, 0, st, c), fN = footAt(ph, 0.5, st, c);
      // el maluc no pot pujar més del que permet la cama de recolzament estirada (sobre el globus els peus queden més avall)
      var Lr = (C.L1 + C.L2) * 0.992;
      [fF, fN].forEach(function (f) { if (!f.contact) return; var dx = f.A[0] - st.X; if (Math.abs(dx) < Lr) hy = softMin(hy, f.A[1] + Math.sqrt(Lr * Lr - dx * dx), 0.35); });
      var H = [st.X, hy];
      var lF = ik2(H, fF.A, C.L1, C.L2), lN = ik2(H, fN.A, C.L1, C.L2);
      function tor(p) { return [H[0] + p[0] * Math.cos(lean) + p[1] * Math.sin(lean), H[1] - p[0] * Math.sin(lean) + p[1] * Math.cos(lean)]; }
      var SN = tor(C.SHN), SF = tor(C.SHF);
      var tip = stickTip(ph, st, c);
      // la mà propera és on el bastó (agafat a GS de la punta) queda a RH de l'espatlla: intersecció de dos cercles, la de davant
      var hand = circleX(tip.T, C.GS, SN, C.RH);
      var armN = ikArm(SN, hand, C.LU, C.LFA);
      var sdx = armN.P[0] - tip.T[0], sdy = armN.P[1] - tip.T[1], sl = Math.hypot(sdx, sdy);
      var top = [tip.T[0] + C.LS * sdx / sl, tip.T[1] + C.LS * sdy / sl];
      var aF = (10 - 22 * Math.cos(2 * Math.PI * ph)) * D2R, eF = aF + 35 * D2R;
      var handF = [SF[0] + C.LU * Math.sin(aF) + C.LFA * Math.sin(eF), SF[1] - C.LU * Math.cos(aF) - C.LFA * Math.cos(eF)];
      var armF = ikArm(SF, handF, C.LU, C.LFA);
      return { st: st, c: c, H: H, lean: lean, lF: lF, lN: lN, fF: fF, fN: fN, SN: SN, SF: SF, armN: armN, armF: armF, tip: tip.T, top: top, planted: tip.planted };
    }

    return { C: C, TL: TL, LOGO: LOGO, pose: pose, state: state, GofPh: GofPh, groundFrame: groundFrame, curv: curv, globeScale: globeScale, sstep: sstep, s5: s5, easeOutCubic: easeOutCubic, easeOutBack: easeOutBack, clamp: clamp, lerp: lerp };
  }
  root.ValiaRig = make({ N_REV: 9 });
  root.ValiaRig.make = make;
})(typeof window !== 'undefined' ? window : globalThis);

/* ---- anim.js ---- */
/* Valia · construcció del logotip (SVG) i de l'escena de càrrega. Depèn de ValiaRig. */
(function (root) {
  'use strict';
  var V = root.ValiaRig, C = V.C, LOGO = V.LOGO, D2R = Math.PI / 180, R2D = 180 / Math.PI; // rig per defecte (postura estàtica del logotip)
  var NS = 'http://www.w3.org/2000/svg';

  /* ---------- fulla (caixa de 120 u, girada 22° en sentit horari sobre 62,59) ---------- */
  var LEAF = {
    rot: 'rotate(22 62 59)',
    blade: 'M62 109C109 91 101 33 62 6C23 33 15 91 62 109Z',
    rib: 'M62 104C60.6 80 60.8 42 62 13',
    stem: 'M62 107C62.6 113 62 117 60.4 121'
  };

  /* ---------- figura: dimensions en u ---------- */
  var W = { thigh: 8, shin: 7.4, foot: 7.4, uarm: 6, farm: 5.6, stick: 3.2 };
  function line(L, w, col, up) { return '<line x1="0" y1="0" x2="0" y2="' + (up ? -L : L) + '" stroke="' + col + '" stroke-width="' + w + '" stroke-linecap="round"/>'; }
  /* marcatge de la figura articulada; cada part és un grup separat (data-p) que es mou només amb transform */
  function figureMarkup(col) {
    var leg = function (s) {
      return '<g data-p="thigh' + s + '">' + line(C.L1, W.thigh, col) +
        '<g data-p="shin' + s + '" transform="translate(0 ' + C.L1 + ')">' + line(C.L2, W.shin, col) +
        '<g data-p="foot' + s + '" transform="translate(0 ' + C.L2 + ')">' + line(C.LF, W.foot, col) + '</g></g></g>';
    };
    var arm = function (s, w1, w2) {
      return '<g data-p="uarm' + s + '">' + line(C.LU, w1, col) +
        '<g data-p="farm' + s + '" transform="translate(0 ' + C.LU + ')">' + line(C.LFA, w2, col) + '</g></g>';
    };
    return '<g data-p="armFgrp">' + arm('F', W.uarm, W.farm) + '</g>' + leg('F') +
      '<g data-p="torso"><rect x="-6.5" y="-22" width="13" height="23.5" rx="6.5" fill="' + col + '"/>' +
      '<g data-p="pack"><rect x="-13.2" y="-20.6" width="9.6" height="14.4" rx="3.6" fill="' + col + '"/></g>' +
      '<g data-p="head"><circle cx="1.8" cy="-30.6" r="6.2" fill="' + col + '"/></g></g>' +
      leg('N') + '<g data-p="stick">' + line(C.LS, W.stick, col) + '</g>' + arm('N', W.uarm, W.farm);
  }
  function angSvg(P, Q) { return Math.atan2(Q[0] - P[0], -(Q[1] - P[1])) * R2D; } // angle des de "avall" cap a +x
  function tf(x, y, a) { return 'translate(' + x.toFixed(3) + ' ' + y.toFixed(3) + ') rotate(' + (-a).toFixed(3) + ')'; }
  function footDir(g) { return Math.atan2(Math.cos(g * D2R), Math.sin(g * D2R)) * R2D; } // vector (cos g, sin g) amb y amunt
  /* transformacions de cada part per a una postura (coordenades de la figura: x endavant, y amunt → SVG: (x, -y)) */
  function poseTransforms(p) {
    var o = {};
    function legT(s, L, f) {
      var a1 = angSvg(p.H, L.K), a2 = angSvg(L.K, L.P), a3 = footDir(f.g);
      o['thigh' + s] = tf(p.H[0], -p.H[1], a1);
      o['shin' + s] = 'translate(0 ' + C.L1 + ') rotate(' + (-(a2 - a1)).toFixed(3) + ')';
      o['foot' + s] = 'translate(0 ' + C.L2 + ') rotate(' + (-(a3 - a2)).toFixed(3) + ')';
    }
    legT('F', p.lF, p.fF); legT('N', p.lN, p.fN);
    o.torso = 'translate(' + p.H[0].toFixed(3) + ' ' + (-p.H[1]).toFixed(3) + ') rotate(' + (p.lean * R2D).toFixed(3) + ')';
    function armT(s, SH, A) { var a1 = angSvg(SH, A.E), a2 = angSvg(A.E, A.P); o['uarm' + s] = tf(SH[0], -SH[1], a1); o['farm' + s] = 'translate(0 ' + C.LU + ') rotate(' + (-(a2 - a1)).toFixed(3) + ')'; }
    armT('N', p.SN, p.armN); armT('F', p.SF, p.armF);
    o.stick = tf(p.tip[0], -p.tip[1], angSvg(p.tip, p.top));
    return o;
  }
  function bake(markup, tr) { // insereix les transformacions dins del marcatge (per al logotip estàtic)
    return markup.replace(/<g data-p="(\w+)"( transform="[^"]*")?/g, function (m, k) { return tr[k] ? '<g data-p="' + k + '" transform="' + tr[k] + '"' : m; });
  }

  /* ---------- logotip estàtic ----------
     variant: 'color' (fulla + persona blanca), 'mono' (fulla blanca, persona en negatiu), 'icon' (icona d'app), 'iconDark'
     leaf: color de la fulla; small: versió per a mides petites (≤32 px), figura més gran i traços més gruixuts */
  var _id = 0;
  function figBox(small) { return small ? { f: 1.02, HX: 44.5, GY: 96 } : { f: LOGO.f, HX: LOGO.HX, GY: LOGO.GY }; }
  function staticFigure(col, small) {
    var b = figBox(small), tr = poseTransforms(V.pose(0)), m = figureMarkup(col);
    if (small) m = m.replace(/stroke-width="([\d.]+)"/g, function (s, w) { return 'stroke-width="' + (+w * 1.14).toFixed(2) + '"'; });
    return '<g transform="translate(' + b.HX + ' ' + b.GY + ') scale(' + b.f + ')">' + bake(m, tr) + '</g>';
  }
  function logoSVG(opt) {
    opt = opt || {}; var v = opt.variant || 'color', size = opt.size || 64, leaf = opt.leaf || '#00A86B', id = 'vl' + (++_id), small = !!opt.small;
    var vb = '0 4 120 120', fig, body;
    if (v === 'color') {
      body = '<g transform="' + LEAF.rot + '"><path d="' + LEAF.stem + '" fill="none" stroke="' + leaf + '" stroke-width="' + (small ? 5.5 : 4.2) + '" stroke-linecap="round"/><path d="' + LEAF.blade + '" fill="' + leaf + '"/>' +
        (small ? '' : '<path d="' + LEAF.rib + '" fill="none" stroke="' + (opt.figure || '#FFFFFF') + '" stroke-opacity=".32" stroke-width="2" stroke-linecap="round"/>') + '</g>' + staticFigure(opt.figure || '#FFFFFF', small);
    } else {
      var fg = opt.fg || '#FFFFFF';
      var mask = '<mask id="' + id + '" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="130"><rect x="0" y="0" width="120" height="130" fill="#fff"/>' +
        (small ? '' : '<path transform="' + LEAF.rot + '" d="' + LEAF.rib + '" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round"/>') + staticFigure('#000', small) + '</mask>';
      var leafG = '<g mask="url(#' + id + ')"><g transform="' + LEAF.rot + '"><path d="' + LEAF.stem + '" fill="none" stroke="' + fg + '" stroke-width="' + (small ? 5.5 : 4.2) + '" stroke-linecap="round"/><path d="' + LEAF.blade + '" fill="' + fg + '"/></g></g>';
      if (v === 'mono') body = '<defs>' + mask + '</defs>' + leafG;
      else { // icona d'app: fons sòlid i fulla dins de la zona segura (cercle del 62 %)
        var bg = v === 'iconDark' ? '#0B0D0C' : '#00A86B';
        vb = '0 0 120 120';
        if (v === 'iconDark') {
          body = '<rect width="120" height="120" rx="27" fill="' + bg + '"/><g transform="translate(60 60) scale(.64) translate(-60.6 -63)"><g transform="' + LEAF.rot + '"><path d="' + LEAF.stem + '" fill="none" stroke="#00A86B" stroke-width="5" stroke-linecap="round"/><path d="' + LEAF.blade + '" fill="#00A86B"/></g>' + staticFigure('#FFFFFF', true) + '</g>';
        } else {
          body = '<defs>' + mask + '</defs><rect width="120" height="120" rx="27" fill="' + bg + '"/><g transform="translate(60 60) scale(.64) translate(-60.6 -63)">' + leafG + '</g>';
        }
      }
    }
    return '<svg xmlns="' + NS + '" viewBox="' + vb + '" width="' + size + '" height="' + size + '" role="img" aria-label="' + (opt.label || 'Valia') + '">' + body + '</svg>';
  }

  /* ---------- escena de càrrega (390×844), configurable ----------
     cfg: rig (instància de ValiaRig.make), K (px per u de la figura), OY (centre del logotip), name, font, size, weight, ls,
          nameGap (de la base del globus a la línia base del nom), tagline, tagGap */
  var MINT = '#D3F4E4', DK = '#0A6B44', RP0 = 95; // el globus es dibuixa amb radi de referència RP0 i s'escala
  /* fites del Vallès Oriental, dibuixades amb la base a (0,0) i cap amunt */
  var LANDMARKS = [
    { k: 'termes', n: 'Termes romanes de Caldes', svg: '<path d="M-23 0V-16H23V0Z" fill="' + MINT + '"/><rect x="-25" y="-19.5" width="50" height="3.5" rx="1.2" fill="' + MINT + '"/>' +
      [-14, 0, 14].map(function (x) { return '<path d="M' + (x - 4.6) + ' 0V-7.6A4.6 4.6 0 0 1 ' + (x + 4.6) + ' -7.6V0Z" fill="' + DK + '"/>'; }).join('') +
      '<g fill="none" stroke="#FFFFFF" stroke-opacity=".75" stroke-width="1.6" stroke-linecap="round"><path d="M-9 -23q-3-3.5 0-7t0-7"/><path d="M0 -23q-3-3.5 0-7t0-7"/><path d="M9 -23q-3-3.5 0-7t0-7"/></g>' },
    { k: 'montseny', n: 'Montseny · Turó de l\'Home', svg: '<path d="M-30 0L-12 -27L-6 -22L4 -34L30 0Z" fill="' + MINT + '"/><path d="M4 -34L-1 -27.5L3 -26L7 -29.5Z" fill="#FFFFFF"/><rect x="1.4" y="-41" width="5.2" height="5" rx="1" fill="' + MINT + '"/><path d="M4 -41V-50M1.8 -46.5H6.2" stroke="' + MINT + '" stroke-width="1.6" stroke-linecap="round"/>' },
    { k: 'fai', n: 'Sant Miquel del Fai', svg: '<path d="M-26 0V-25Q-26 -32 -18 -32H16Q24 -32 24 -25V0Z" fill="' + MINT + '"/><path d="M5 -32C3 -22 7 -11 5 0" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" fill="none"/><path d="M9 -30C8 -20 10 -10 9 0" stroke="#FFFFFF" stroke-opacity=".6" stroke-width="1.6" fill="none"/><path d="M-21 0V-9L-14.5 -14.5L-8 -9V0Z" fill="' + DK + '"/><path d="M-15.8 -14.5V-19.5H-13.2V-14.5" fill="' + DK + '"/>' },
    { k: 'porxada', n: 'La Porxada de Granollers', svg: '<path d="M-27 -15L-20 -22H20L27 -15Z" fill="' + MINT + '"/><rect x="-26" y="-15.5" width="52" height="2.6" fill="' + MINT + '"/>' +
      [0, 1, 2, 3, 4, 5].map(function (i) { return '<rect x="' + (-22.6 + i * 8.6).toFixed(1) + '" y="-13" width="2.4" height="12" fill="' + MINT + '"/>'; }).join('') + '<rect x="-27" y="-1.6" width="54" height="1.6" fill="' + MINT + '"/>' },
    { k: 'campanar', n: 'Campanar romànic', svg: '<rect x="-7.5" y="-37" width="15" height="37" fill="' + MINT + '"/><path d="M-9 -37L0 -46L9 -37Z" fill="' + MINT + '"/>' +
      [-31, -21].map(function (y) { return '<path d="M-5 ' + y + 'v-4.2a1.7 1.7 0 0 1 3.4 0v4.2zM1.6 ' + y + 'v-4.2a1.7 1.7 0 0 1 3.4 0v4.2z" fill="' + DK + '"/>'; }).join('') + '<path d="M-7.5 -26.5H7.5M-7.5 -16.5H7.5" stroke="' + DK + '" stroke-opacity=".35" stroke-width="1"/>' },
    { k: 'fageda', n: 'La fageda del Montseny', svg: '<g fill="' + MINT + '"><rect x="-14.2" y="-14" width="2.6" height="14"/><circle cx="-12.9" cy="-19" r="8"/><rect x="-1.3" y="-19" width="2.8" height="19"/><circle cx="0" cy="-26" r="10.5"/><rect x="11" y="-11" width="2.4" height="11"/><circle cx="12.2" cy="-15.5" r="6.8"/></g><g fill="' + DK + '" fill-opacity=".18"><circle cx="-10.5" cy="-17" r="4"/><circle cx="3.5" cy="-23" r="5"/></g>' },
    { k: 'gallecs', n: 'Espai rural de Gallecs', svg: '<path d="M-15 0V-12L-5 -20L5 -12V0Z" fill="' + MINT + '"/><path d="M5 0V-9H16V0Z" fill="' + MINT + '"/><rect x="-7" y="-7" width="4" height="7" fill="' + DK + '"/><rect x="-11" y="-13" width="3" height="3" fill="' + DK + '"/><rect x="-2" y="-13" width="3" height="3" fill="' + DK + '"/>' +
      '<g stroke="' + MINT + '" stroke-width="1.4" stroke-linecap="round"><path d="M-27 0V-6M-24 0V-8M-21 0V-6"/><path d="M20 0V-7M23 0V-9M26 0V-6"/></g>' }
  ];
  var LM_A0 = 64; // angle inicial de la primera fita (graus des de dalt, en sentit horari): arriba per la dreta

  function geom(cfg) {
    var R = cfg.rig || V, K = cfg.K || 1.7, KB = K / LOGO.f, OX = cfg.OX || 195, OY = cfg.OY || 270;
    var GROUND = OY + (LOGO.GY - LOGO.CY) * KB, X0 = OX + (LOGO.HX - LOGO.CX) * KB, RP = R.C.R * K;
    var WM_Y = GROUND + 2 * RP + (cfg.nameGap || 100);
    return { R: R, K: K, KB: KB, OX: OX, OY: OY, GROUND: GROUND, X0: X0, RP: RP, gsc: RP / RP0, WM_Y: WM_Y, TG_Y: WM_Y + (cfg.tagGap || 32) };
  }
  function sceneMarkup(g, cfg) {
    var trees = '', i, a;
    var treeAng = [20, 41, 92, 113, 146, 165, 196, 219, 247, 271, 302, 324, 352];
    for (i = 0; i < treeAng.length; i++) {
      a = treeAng[i]; var h = 6 + (i * 7) % 5;
      trees += '<g transform="rotate(' + a + ') translate(0 ' + (-RP0) + ')"><rect x="-.8" y="' + (-h) + '" width="1.6" height="' + h + '" fill="' + DK + '"/><circle cx="0" cy="' + (-h - 2.6) + '" r="' + (3.2 + (i % 3) * .6) + '" fill="' + DK + '"/></g>';
    }
    var lms = LANDMARKS.map(function (L, j) { return '<g data-lm="' + L.k + '" transform="rotate(' + (LM_A0 + j * 360 / LANDMARKS.length).toFixed(2) + ') translate(0 ' + (-RP0 + 0.5) + ')"><title>' + L.n + '</title>' + L.svg + '</g>'; }).join('');
    var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
    return '<defs>' +
      '<radialGradient id="vgG" cx="36%" cy="28%" r="78%"><stop offset="0" stop-color="#2DCB8B"/><stop offset=".55" stop-color="#00A86B"/><stop offset="1" stop-color="#06774B"/></radialGradient>' +
      '<radialGradient id="vgH"><stop offset=".78" stop-color="#D9FBEA" stop-opacity="0"/><stop offset=".83" stop-color="#D9FBEA" stop-opacity=".34"/><stop offset="1" stop-color="#D9FBEA" stop-opacity="0"/></radialGradient>' +
      '<filter id="vgB" x="-50%" y="-200%" width="200%" height="500%"><feGaussianBlur stdDeviation="2.6"/></filter>' +
      '<filter id="vgS" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="1" stdDeviation="1.1" flood-color="#00140B" flood-opacity=".38"/></filter>' +
      '</defs>' +
      '<g id="vHalo" opacity="0"><g transform="translate(' + g.OX + ' ' + (g.GROUND + g.RP).toFixed(2) + ') scale(' + g.gsc.toFixed(4) + ')"><circle r="' + (RP0 + 24) + '" fill="url(#vgH)"/></g></g>' +
      '<g id="vGlobe" transform="translate(' + g.OX + ' ' + g.GROUND + ') scale(0)">' +
      '<g id="vGlobeRot">' +
      '<circle r="' + RP0 + '" fill="url(#vgG)"/>' +
      '<g fill="#FFFFFF" fill-opacity=".07"><ellipse cx="-30" cy="-38" rx="34" ry="16" transform="rotate(-24)"/><ellipse cx="34" cy="30" rx="30" ry="14" transform="rotate(32)"/><ellipse cx="-26" cy="44" rx="22" ry="11"/></g>' +
      '<circle r="' + (RP0 - 12) + '" fill="none" stroke="#FFFFFF" stroke-opacity=".26" stroke-width="1.6" stroke-dasharray="18 9 4 9" stroke-linecap="round"/>' +
      '<path d="M-60 40C-30 20 10 52 52 26" fill="none" stroke="#FFFFFF" stroke-opacity=".18" stroke-width="1.4" stroke-dasharray="3 5" stroke-linecap="round"/>' +
      trees + lms + '</g>' +
      '<ellipse cx="0" cy="' + (-RP0 + 2.5) + '" rx="30" ry="5" fill="#00170D" fill-opacity=".42" filter="url(#vgB)"/>' +
      '</g>' +
      '<g id="vLogo">' +
      '<g id="vLeaf"><g transform="translate(' + (g.OX - LOGO.CX * g.KB).toFixed(3) + ' ' + (g.OY - LOGO.CY * g.KB).toFixed(3) + ') scale(' + g.KB.toFixed(4) + ')"><g transform="' + LEAF.rot + '">' +
      '<path d="' + LEAF.stem + '" fill="none" stroke="#00A86B" stroke-width="4.2" stroke-linecap="round"/><path d="' + LEAF.blade + '" fill="#00A86B"/><path d="' + LEAF.rib + '" fill="none" stroke="#FFFFFF" stroke-opacity=".32" stroke-width="2" stroke-linecap="round"/></g></g></g>' +
      '<g id="vFlight"><g id="vFig" filter="url(#vgS)" style="color:#FFFFFF"><g id="vFigMap">' + figureMarkup('currentColor') + '</g></g></g>' +
      '</g>' +
      '<g id="vWord" opacity="0"><text x="' + g.OX + '" y="' + g.WM_Y.toFixed(1) + '" text-anchor="middle" font-family="' + (cfg.font || 'Inter, system-ui, sans-serif') + '" font-weight="' + (cfg.weight || 700) + '" font-size="' + (cfg.size || 36) + '" letter-spacing="' + (cfg.ls == null ? -0.7 : cfg.ls) + '" fill="#FFFFFF">' + esc(cfg.name || 'Valia') + '</text>' +
      (cfg.tagline ? '<text data-tag x="' + g.OX + '" y="' + g.TG_Y.toFixed(1) + '" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-weight="500" font-size="15" fill="#FFFFFF" fill-opacity=".9">' + esc(cfg.tagline) + '</text>' : '') + '</g>';
  }

  /* fulla que vola: t de 0 a 1 entre 0,4 s i 1,8 s (desplaçaments en px a escala K = 1,7; s'escalen amb K) */
  function leafFly(u) {
    var s = V.sstep, env = s(u / 0.12);
    var dx = 292 * Math.pow(u, 1.55);
    var dy = -26 * Math.sin(Math.PI * u) * Math.pow(1 - u, 0.6) + 80 * Math.pow(u, 2.2) + 9 * Math.sin(2 * Math.PI * 2.2 * u) * u;
    var rot = env * (34 * Math.sin(2 * Math.PI * 1.45 * u + 0.35) * (0.75 + 0.35 * u) - 34 * Math.sin(0.35) * 0.75 * (1 - s(u / 0.3)) + 25 * u);
    var sx = 1 - 0.8 * Math.sin(Math.PI * s((u - 0.3) / 0.4));
    var sc = 1 - 0.2 * s(u);
    var op = 1 - s((u - 0.62) / 0.3);
    return { dx: dx, dy: dy, rot: rot, sx: sx, sc: sc, op: op };
  }

  function Scene(svg, cfg) {
    cfg = cfg || {};
    this.cfg = cfg; this.g = geom(cfg); this.R = this.g.R;
    svg.innerHTML = sceneMarkup(this.g, cfg);
    if (cfg.label) svg.setAttribute('aria-label', cfg.label);
    var q = function (s) { return svg.querySelector(s); };
    var parts = {}; Array.prototype.forEach.call(svg.querySelectorAll('#vFigMap [data-p]'), function (g) { parts[g.getAttribute('data-p')] = g; });
    this.el = { svg: svg, halo: q('#vHalo'), globe: q('#vGlobe'), rot: q('#vGlobeRot'), logo: q('#vLogo'), leaf: q('#vLeaf'), fig: q('#vFigMap'), word: q('#vWord'), parts: parts };
  }
  Scene.prototype.render = function (t, reduced) {
    var e = this.el, s = V.sstep, g = this.g, R = this.R, OX = g.OX, OY = g.OY;
    if (reduced) { // reduir animacions: logotip quiet + marca, sense moviment
      e.logo.setAttribute('opacity', 1); e.logo.removeAttribute('transform');
      e.leaf.setAttribute('opacity', 1); e.leaf.removeAttribute('transform');
      this.pose(0); e.word.setAttribute('opacity', 1); e.word.removeAttribute('transform');
      e.globe.setAttribute('transform', 'translate(' + OX + ' ' + g.GROUND + ') scale(0)'); e.halo.setAttribute('opacity', 0);
      return;
    }
    // fase 0: el logotip apareix centrat i quiet
    var a = V.easeOutCubic(t / 0.3), sc0 = 0.94 + 0.06 * a;
    e.logo.setAttribute('opacity', a.toFixed(3));
    e.logo.setAttribute('transform', 'translate(' + OX + ' ' + OY + ') scale(' + sc0.toFixed(4) + ') translate(' + (-OX) + ' ' + (-OY) + ')');
    // fase 1: la fulla vola cap a la dreta (recorregut proporcional a la mida del logotip)
    var u = V.clamp((t - 0.4) / 1.4, 0, 1), L = leafFly(u), ks = g.K / 1.7;
    e.leaf.setAttribute('opacity', L.op.toFixed(3));
    e.leaf.setAttribute('transform', 'translate(' + (OX + L.dx * Math.max(ks, 0.85)).toFixed(2) + ' ' + (OY + L.dy * ks).toFixed(2) + ') rotate(' + L.rot.toFixed(2) + ') scale(' + (L.sx * L.sc).toFixed(4) + ' ' + L.sc.toFixed(4) + ') translate(' + (-OX) + ' ' + (-OY) + ')');
    // fases 2–4: la persona camina; el globus apareix i gira
    var p = this.pose(t);
    var st = p.st, gs = st.s, gx = g.X0 + st.X * g.K;
    e.globe.setAttribute('transform', 'translate(' + gx.toFixed(2) + ' ' + (g.GROUND + g.RP * gs).toFixed(2) + ') scale(' + (gs * g.gsc).toFixed(4) + ')');
    e.rot.setAttribute('transform', 'rotate(' + (st.th * R2D).toFixed(3) + ')');
    e.halo.setAttribute('opacity', s((t - 2.5) / 0.45).toFixed(3));
    var wv = s((t - 1.2) / 0.6);
    e.word.setAttribute('opacity', wv.toFixed(3));
    e.word.setAttribute('transform', 'translate(0 ' + (8 * (1 - wv)).toFixed(2) + ')');
  };
  Scene.prototype.pose = function (t) {
    var p = this.R.pose(t), tr = poseTransforms(p), e = this.el, g = this.g;
    e.fig.setAttribute('transform', 'translate(' + g.X0.toFixed(3) + ' ' + g.GROUND.toFixed(3) + ') scale(' + g.K + ')');
    for (var k in tr) if (e.parts[k]) e.parts[k].setAttribute('transform', tr[k]);
    return p;
  };

  root.ValiaAnim = { logoSVG: logoSVG, Scene: Scene, LANDMARKS: LANDMARKS, geom: geom, figureMarkup: figureMarkup, poseTransforms: poseTransforms, LEAF: LEAF, staticFigure: staticFigure };
})(typeof window !== 'undefined' ? window : globalThis);

/* ---- qr.js ---- */
/* ===================== Valia · generador de codis QR (sense dependències) =====================
   Implementació de l'estàndard QR (ISO/IEC 18004) en mode byte, versions 1–40, nivells L/M/Q/H.
   Basat en l'algorisme de referència de Project Nayuki (llicència MIT). L'app el fa servir per mostrar
   el QR de la seva pròpia adreça: així el codi sempre apunta a la URL on està publicada. */
const QR = (function () {
  const ECC = { L: [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    M: [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    Q: [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    H: [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30] };
  const BLK = { L: [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    M: [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    Q: [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    H: [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81] };
  const FMT = { L: 1, M: 0, Q: 3, H: 2 };
  const rawModules = v => { let r = (16 * v + 128) * v + 64; if (v >= 2) { const n = Math.floor(v / 7) + 2; r -= (25 * n - 10) * n - 55; if (v >= 7) r -= 36; } return r; };
  const dataCodewords = (v, e) => Math.floor(rawModules(v) / 8) - ECC[e][v] * BLK[e][v];
  const mul = (x, y) => { let z = 0; for (let i = 7; i >= 0; i--) { z = (z << 1) ^ ((z >>> 7) * 0x11D); z ^= ((y >>> i) & 1) * x; } return z & 0xFF; };
  function divisor(deg) { const r = new Array(deg).fill(0); r[deg - 1] = 1; let root = 1; for (let i = 0; i < deg; i++) { for (let j = 0; j < deg; j++) { r[j] = mul(r[j], root); if (j + 1 < deg) r[j] ^= r[j + 1]; } root = mul(root, 2); } return r; }
  function remainder(data, div) { const r = div.map(() => 0); for (const b of data) { const f = b ^ r.shift(); r.push(0); div.forEach((c, i) => { r[i] ^= mul(c, f); }); } return r; }
  const bit = (x, i) => ((x >>> i) & 1) !== 0;

  function encode(text, ecl) {
    ecl = ecl || 'M';
    const bytes = [...new TextEncoder().encode(text)];
    let ver = 1;
    for (; ver <= 40; ver++) { const cc = ver < 10 ? 8 : 16; if (4 + cc + bytes.length * 8 <= dataCodewords(ver, ecl) * 8) break; }
    if (ver > 40) throw new Error('Text massa llarg per a un QR');
    // bits de dades
    const bb = []; const put = (val, len) => { for (let i = len - 1; i >= 0; i--) bb.push((val >>> i) & 1); };
    put(4, 4); put(bytes.length, ver < 10 ? 8 : 16); bytes.forEach(b => put(b, 8));
    const cap = dataCodewords(ver, ecl) * 8;
    put(0, Math.min(4, cap - bb.length)); put(0, (8 - bb.length % 8) % 8);
    for (let pad = 0xEC; bb.length < cap; pad ^= 0xEC ^ 0x11) put(pad, 8);
    const data = []; for (let i = 0; i < bb.length; i += 8) { let v = 0; for (let j = 0; j < 8; j++) v = (v << 1) | bb[i + j]; data.push(v); }
    // correcció d'errors i entrellaçat
    const nb = BLK[ecl][ver], el = ECC[ecl][ver], raw = Math.floor(rawModules(ver) / 8), nShort = nb - raw % nb, shortLen = Math.floor(raw / nb);
    const div = divisor(el), blocks = [];
    for (let i = 0, k = 0; i < nb; i++) { const dat = data.slice(k, k + shortLen - el + (i < nShort ? 0 : 1)); k += dat.length; const ec = remainder(dat, div); if (i < nShort) dat.push(0); blocks.push(dat.concat(ec)); }
    const all = []; for (let i = 0; i < blocks[0].length; i++) blocks.forEach((b, j) => { if (i !== shortLen - el || j >= nShort) all.push(b[i]); });
    // matriu
    const size = ver * 4 + 17, M = [], F = [];
    for (let y = 0; y < size; y++) { M.push(new Array(size).fill(false)); F.push(new Array(size).fill(false)); }
    const setF = (x, y, d) => { M[y][x] = d; F[y][x] = true; };
    for (let i = 0; i < size; i++) { setF(6, i, i % 2 === 0); setF(i, 6, i % 2 === 0); }
    const finder = (x, y) => { for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) { const d = Math.max(Math.abs(dx), Math.abs(dy)), xx = x + dx, yy = y + dy; if (xx >= 0 && xx < size && yy >= 0 && yy < size) setF(xx, yy, d !== 2 && d !== 4); } };
    finder(3, 3); finder(size - 4, 3); finder(3, size - 4);
    const al = []; if (ver > 1) { const n = Math.floor(ver / 7) + 2, step = ver === 32 ? 26 : Math.ceil((ver * 4 + 4) / (n * 2 - 2)) * 2; al.push(6); for (let p = size - 7; al.length < n; p -= step) al.splice(1, 0, p); }
    al.forEach((a, i) => al.forEach((b, j) => { if ((i === 0 && j === 0) || (i === 0 && j === al.length - 1) || (i === al.length - 1 && j === 0)) return; for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) setF(a + dx, b + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1); }));
    const format = mask => {
      const d = (FMT[ecl] << 3) | mask; let r = d; for (let i = 0; i < 10; i++) r = (r << 1) ^ ((r >>> 9) * 0x537);
      const bits = ((d << 10) | r) ^ 0x5412;
      for (let i = 0; i <= 5; i++) setF(8, i, bit(bits, i));
      setF(8, 7, bit(bits, 6)); setF(8, 8, bit(bits, 7)); setF(7, 8, bit(bits, 8));
      for (let i = 9; i < 15; i++) setF(14 - i, 8, bit(bits, i));
      for (let i = 0; i < 8; i++) setF(size - 1 - i, 8, bit(bits, i));
      for (let i = 8; i < 15; i++) setF(8, size - 15 + i, bit(bits, i));
      setF(8, size - 8, true);
    };
    format(0);
    if (ver >= 7) { let r = ver; for (let i = 0; i < 12; i++) r = (r << 1) ^ ((r >>> 11) * 0x1F25); const bits = (ver << 12) | r; for (let i = 0; i < 18; i++) { const b = bit(bits, i), a = size - 11 + i % 3, c = Math.floor(i / 3); setF(a, c, b); setF(c, a, b); } }
    let i = 0;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let v = 0; v < size; v++) for (let j = 0; j < 2; j++) {
        const x = right - j, up = ((right + 1) & 2) === 0, y = up ? size - 1 - v : v;
        if (!F[y][x] && i < all.length * 8) { M[y][x] = bit(all[i >>> 3], 7 - (i & 7)); i++; }
      }
    }
    const MASKS = [(x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, x => x % 3 === 0, (x, y) => (x + y) % 3 === 0, (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0, (x, y) => x * y % 2 + x * y % 3 === 0, (x, y) => (x * y % 2 + x * y % 3) % 2 === 0, (x, y) => ((x + y) % 2 + x * y % 3) % 2 === 0];
    const apply = m => { for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (!F[y][x] && MASKS[m](x, y)) M[y][x] = !M[y][x]; };
    const penalty = () => {   // regles 1, 2 i 4 de l'estàndard (la 3 s'omet: només afina la tria)
      let p = 0, dark = 0;
      for (let a = 0; a < size; a++) for (const row of [true, false]) { let run = 1; for (let b = 1; b < size; b++) { const c = row ? M[a][b] : M[b][a], q = row ? M[a][b - 1] : M[b - 1][a]; if (c === q) { run++; if (run === 5) p += 3; else if (run > 5) p++; } else run = 1; } }
      for (let y = 0; y < size - 1; y++) for (let x = 0; x < size - 1; x++) { const c = M[y][x]; if (c === M[y][x + 1] && c === M[y + 1][x] && c === M[y + 1][x + 1]) p += 3; }
      M.forEach(r => r.forEach(c => { if (c) dark++; }));
      return p + Math.floor(Math.abs(dark * 20 - size * size * 10) / (size * size)) * 10;
    };
    let best = 0, bestP = Infinity;
    for (let m = 0; m < 8; m++) { apply(m); format(m); const p = penalty(); if (p < bestP) { bestP = p; best = m; } apply(m); }
    apply(best); format(best);
    return { size, modules: M, version: ver, ecl, mask: best };
  }

  /* SVG amb zona de silenci de 4 mòduls i, opcionalment, el logotip al centre (cal nivell H) */
  function svg(text, o) {
    o = o || {}; const q = encode(text, o.logo ? 'H' : (o.ecl || 'M')), n = q.size, b = 4, S = n + b * 2, px = o.size || 1000;
    let d = ''; for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (q.modules[y][x]) d += `M${x + b} ${y + b}h1v1h-1z`;
    let logo = '';
    if (o.logo) {   // el logo ocupa ~20 % del costat (≈4 % de l'àrea), dins del 30 % recuperable del nivell H
      const w = Math.round(n * 0.22) | 1, x0 = (S - w) / 2;
      logo = `<rect x="${x0 - 0.6}" y="${x0 - 0.6}" width="${w + 1.2}" height="${w + 1.2}" rx="${(w + 1.2) * 0.22}" fill="#fff"/><svg x="${x0}" y="${x0}" width="${w}" height="${w}" viewBox="0 0 120 120">${o.logo.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '')}</svg>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S} ${S}" width="${px}" height="${px}" shape-rendering="crispEdges"><rect width="${S}" height="${S}" fill="#fff"/><path d="${d}" fill="#0B0D0C"/>${logo}</svg>`;
  }
  /* PNG a partir de l'SVG (per descarregar) */
  function png(text, o) {
    o = o || {}; const px = o.size || 1200, s = svg(text, Object.assign({}, o, { size: px }));
    return new Promise((res, rej) => { const img = new Image(); img.onload = () => { const c = document.createElement('canvas'); c.width = c.height = px; const g = c.getContext('2d'); g.imageSmoothingEnabled = false; g.drawImage(img, 0, 0, px, px); c.toBlob(b => b ? res(b) : rej(new Error('PNG')), 'image/png'); }; img.onerror = rej; img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s); });
  }
  function download(blob, name) { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000); }
  /* adreça neta de l'app (sense paràmetres ni índex) */
  const appURL = () => location.origin + location.pathname.replace(/index\.html$/, '');
  return { encode, svg, png, download, appURL };
})();

/* ---- mascot.js ---- */
/* Valia · mascota
   El personatge del logotip (excursionista amb motxilla i bastó) és la cara visible de la IA.
   Fa servir exactament la mateixa figura articulada que el logotip i la pantalla de càrrega
   (mateixes peces, proporcions i gruixos); només canvia la postura i el color segons el fons.
   Unitats: u de la figura; món amb y cap amunt i terra a y = 0; a l'SVG, y cap avall. */
(function (root) {
  'use strict';
  const R = root.ValiaRig, A = root.ValiaAnim, C = R.C, D2R = Math.PI / 180;
  const RW = R.make({ flat: true });              // marxa sobre terra pla («buscant»)
  const NECK = [1.2, -23.5];                       // pivot del cap, en coordenades del tronc
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
  const ss = x => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
  const out3 = x => { x = clamp(x, 0, 1); return 1 - Math.pow(1 - x, 3); };
  const dir = a => [Math.sin(a * D2R), -Math.cos(a * D2R)];
  const TAU = Math.PI * 2;

  /* ---------- cinemàtica inversa (igual que el rig de la càrrega) ---------- */
  function ik2(H, P, l1, l2) {
    const dx = P[0] - H[0], dy = P[1] - H[1], D = Math.hypot(dx, dy), Dc = Math.min(D, (l1 + l2) * 0.9995);
    const base = Math.atan2(dy, dx), a = Math.acos(clamp((l1 * l1 + Dc * Dc - l2 * l2) / (2 * l1 * Dc), -1, 1));
    const th1 = base + a;
    return { K: [H[0] + l1 * Math.cos(th1), H[1] + l1 * Math.sin(th1)], P: [H[0] + Dc * Math.cos(base), H[1] + Dc * Math.sin(base)] };
  }
  function ikArm(S, P, l1, l2, up) {
    const dx = P[0] - S[0], dy = P[1] - S[1], D = Math.hypot(dx, dy), Dc = Math.min(D, (l1 + l2) * 0.999);
    const base = Math.atan2(dy, dx), a = Math.acos(clamp((l1 * l1 + Dc * Dc - l2 * l2) / (2 * l1 * Dc), -1, 1));
    const th1 = up ? base + a : base - a;           // colze cap enrere i avall (per defecte) o cap amunt
    return { E: [S[0] + l1 * Math.cos(th1), S[1] + l1 * Math.sin(th1)], P: [S[0] + Dc * Math.cos(base), S[1] + Dc * Math.sin(base)] };
  }

  /* ---------- postura a partir d'objectius ----------
     s = { hx, hy, lean (°), head (°), fF:[x,y,g], fN:[x,y,g], hF:[x,y], hN:[x,y] | stick.held,
           stick: { tip:[x,y], ang, held, grip } | { ang, grip } (agafat per la mà propera), fx } */
  function pose(s) {
    const H = [s.hx || 0, s.hy], lean = (s.lean || 0) * D2R;
    const tor = p => [H[0] + p[0] * Math.cos(lean) + p[1] * Math.sin(lean), H[1] - p[0] * Math.sin(lean) + p[1] * Math.cos(lean)];
    const SN = tor(C.SHN), SF = tor(C.SHF), st = s.stick || {};
    let tip, top, hN = s.hN;
    const d = dir(st.ang == null ? 186 : st.ang), g = st.grip || C.GS;
    if (st.tip) { tip = st.tip; if (st.held) hN = [tip[0] + g * d[0], tip[1] + g * d[1]]; }
    else tip = [hN[0] - g * d[0], hN[1] - g * d[1]];
    top = [tip[0] + C.LS * d[0], tip[1] + C.LS * d[1]];
    return {
      H, lean, head: s.head || 0,
      lF: ik2(H, s.fF, C.L1, C.L2), lN: ik2(H, s.fN, C.L1, C.L2), fF: { g: s.fF[2] || 0 }, fN: { g: s.fN[2] || 0 },
      SN, SF, armN: ikArm(SN, hN, C.LU, C.LFA, s.upN), armF: ikArm(SF, s.hF, C.LU, C.LFA, s.upF), tip, top, fx: s.fx || {}
    };
  }
  /* interpolació entre dues postures (posicions); els angles es tornen a calcular en dibuixar */
  function mix(a, b, t) {
    if (typeof a === 'number') return lerp(a, b, t);
    if (Array.isArray(a)) return a.map((v, i) => mix(v, b[i], t));
    if (a && typeof a === 'object') { const o = {}; for (const k in a) o[k] = k === 'fx' ? (t < 0.5 ? a.fx : b.fx) : (b && k in b ? mix(a[k], b[k], t) : a[k]); return o; }
    return a;
  }

  /* ---------- postures clau ---------- */
  const LOGO = { hx: 0, hy: 26.63, lean: 3, head: 0, fF: [9.16, 3.7, 14], fN: [-10.27, 4.52, -8.5], hF: [1.92, 27.66], stick: { tip: [21, 0], ang: 186.4, held: true } };
  const STAND = { hx: 0, hy: 27.4, lean: 2, head: 0, fF: [5.2, 3.7, 0], fN: [-4.6, 3.7, 0], hF: [-2.5, 28.5], stick: { tip: [17, 0], ang: 191, held: true, grip: 38 } };
  const WALKX = R.make({ flat: true });
  const K = {
    logo: LOGO, stand: STAND,
    wave: { hx: 0, hy: 27.4, lean: 1, head: -6, fF: [5.2, 3.7, 0], fN: [-4.6, 3.7, 0], hF: [-4, 30], hN: [12, 63], stick: { ang: 180, grip: 30 } },
    listen: { hx: 0, hy: 26.6, lean: 12, head: 12, fF: [6.5, 3.7, 0], fN: [-5.2, 3.7, 0], hF: [-1, 30], hN: [-1.6, 55.5], upN: true, stick: { tip: [14.5, 0], ang: 197 } },
    think: { hx: 0, hy: 27.4, lean: -3, head: -16, fF: [4.6, 3.7, 0], fN: [-5.4, 3.7, 0], hF: [7, 45.5], hN: [8.6, 54.2], upN: true, stick: { tip: [16, 0], ang: 200 } },
    talk: { hx: 0, hy: 27.4, lean: 4, head: 4, fF: [5.2, 3.7, 0], fN: [-4.6, 3.7, 0], hF: [8, 38], hN: [15, 44], stick: { ang: 128, grip: 22 } },
    point: { hx: 0, hy: 27.1, lean: 6, head: 10, fF: [6.5, 3.7, 0], fN: [-5.5, 3.7, 0], hF: [-2.5, 29], hN: [15, 42], stick: { ang: 240, grip: 30 } },
    sit: { hx: 1, hy: 14.6, lean: 16, head: 24, fF: [15.5, 3.7, 0], fN: [13, 3.7, 0], hF: [12.5, 18.5], hN: [14.5, 19.5], stick: { tip: [-24, 1.6], ang: 92 } },
    crouch: { hx: 0, hy: 21.5, lean: 14, head: 6, fF: [5.2, 3.7, 0], fN: [-4.6, 3.7, 0], hF: [-8, 26], hN: [8, 30], stick: { ang: 205, grip: 34 } },
    tuck: { hx: 0, hy: 27.4, lean: -4, head: -8, fF: [7, 9.5, -10], fN: [-7.5, 9, -25], hF: [-10, 57], hN: [14, 61], upN: true, upF: true, stick: { ang: 172, grip: 32 } },
    cheer: { hx: 0, hy: 27.4, lean: -3, head: -8, fF: [6, 3.7, 0], fN: [-5.5, 3.7, 0], hF: [-10, 57], hN: [13.5, 61], upN: true, upF: true, stick: { ang: 174, grip: 32 } }
  };
  const B = {}; for (const k in K) B[k] = pose(K[k]);
  const with_ = (base, o) => Object.assign({}, base, o);

  /* ---------- estats ----------
     Cada estat: f(t, m) → postura i efectes. one: durada si és d'un sol cop (després passa a «next»). */
  const STATES = {
    repos: { label: 'en repòs', f(t) { const b = Math.sin(TAU * t / 3.4); const tap = ss((t % 3.4 - 2.6) / 0.15) * (1 - ss((t % 3.4 - 2.85) / 0.2));
      return pose(with_(LOGO, { hy: LOGO.hy + 0.35 * b, lean: 3 + 0.7 * b, head: 1.5 * Math.sin(TAU * t / 3.4 + 1), stick: { tip: [21, 1.6 * tap], ang: 186.4, held: true } })); },
      still: () => B.logo },
    saludant: { label: 'saludant', one: 1.5, next: 'repos', f(t) {
      const up = ss((t - 0.08) / 0.24), down = ss((t - 1.22) / 0.26), w = up * (1 - down);
      const wv = Math.sin(TAU * 2.2 * (t - 0.3)) * ss((t - 0.3) / 0.15) * (1 - ss((t - 1.1) / 0.2));
      let s = mix(B.stand, pose(with_(K.wave, { hN: [12 + 1.5 * wv, 63], stick: { ang: 180 + 16 * wv, grip: 30 } })), w);
      const cr = t < 0.12 ? ss(t / 0.12) : 1 - ss((t - 0.12) / 0.1);
      if (cr > 0) s = mix(s, B.crouch, 0.3 * cr);
      const air = t > 0.17 && t < 0.47 ? Math.sin(Math.PI * (t - 0.17) / 0.3) * 3.4 : 0;
      return lift(s, air); },
      still: () => B.wave },
    escoltant: { label: 't\'escolta', f(t, m) { const p = m._pulse ? clamp(1 - (performance.now() - m._pulse) / 380, 0, 1) : 0;
      const b = Math.sin(TAU * t / 2.4);
      const s = pose(with_(K.listen, { lean: 11 + 1.2 * b + 2 * p, head: 14 + 3 * p, hy: 26.6 + 0.25 * b }));
      s.fx = { arcs: 0.35 + 0.65 * p }; return s; },
      still: () => { const s = pose(K.listen); s.fx = { arcs: 0.7 }; return s; } },
    pensant: { label: 'pensant', f(t) { const b = Math.sin(TAU * t / 2.8);
      const s = pose(with_(K.think, { lean: -3 + 1.2 * b, head: -16 + 4 * b, hx: 0.4 * b }));
      s.fx = { dots: (t % 1.2) / 1.2 }; return s; },
      still: () => { const s = pose(K.think); s.fx = { dots: -1 }; return s; } },
    responent: { label: 'responent', f(t) { const g = Math.sin(TAU * 1.5 * t), n = Math.sin(TAU * 3 * t);
      const s = pose(with_(K.talk, { stick: { ang: 128 + 9 * g, grip: 22 }, hN: [15 + 1.2 * g, 44 + 1 * g], hF: [8 + 1.5 * Math.sin(TAU * 1.5 * t + 1.4), 38], head: 4 + 3 * n, hy: 27.4 + 0.25 * n }));
      s.fx = { lines: (t * 1.5) % 1 }; return s; },
      still: () => B.talk },
    proposant: { label: 'proposant', one: 0.9, next: 'proposantHold', f(t) { const k = out3(t / 0.45);
      return mix(B.stand, B.point, k); }, still: () => B.point },
    proposantHold: { label: 'proposant', f(t) { const tap = Math.sin(TAU * 0.9 * t);
      return pose(with_(K.point, { stick: { ang: 240 + 3.5 * tap, grip: 30 }, head: 10 + 2 * tap })); }, still: () => B.point },
    error: { label: 'sense connexió', f(t) { const b = Math.sin(TAU * t / 4.2);
      const s = pose(with_(K.sit, { lean: 16 + 2.2 * b, head: 24 + 3 * b }));
      s.fx = { rock: 1, cloud: 0.5 + 0.5 * Math.sin(TAU * t / 2.1) }; return s; },
      still: () => { const s = pose(K.sit); s.fx = { rock: 1, cloud: 1 }; return s; } },
    buscant: { label: 'buscant', f(t) { const p = RW.pose(3 + t), X = p.st.X; const s = shift(p, -X); s.head = 0; s.fx = { ground: p.st.G % 8 }; return s; },
      still: () => { const s = shift(RW.pose(3.3), -RW.state(3.3).X); s.head = 0; s.fx = { ground: 0, still: 1 }; return s; } },
    celebrant: { label: 'celebrant', one: 1.7, next: 'celebrantHold', f(t) {
      let s;
      if (t < 0.16) s = mix(B.stand, B.crouch, out3(t / 0.16));
      else if (t < 0.56) { const u = (t - 0.16) / 0.4; s = mix(B.crouch, B.tuck, out3(Math.min(1, u * 2.5))); s = mix(s, B.crouch, ss((u - 0.74) / 0.26)); s = lift(s, 14 * Math.sin(Math.PI * u)); }
      else if (t < 0.78) s = mix(B.crouch, B.cheer, out3((t - 0.56) / 0.22));
      else { const w = Math.sin(TAU * 2 * (t - 0.78)); s = pose(with_(K.cheer, { hN: [13.5 + 1.4 * w, 61], hF: [-10 - 1.4 * w, 57], stick: { ang: 174 + 9 * w, grip: 32 } })); }
      s.fx = { confetti: clamp((t - 0.4) / 1.2, 0, 1) }; return s; },
      still: () => { const s = pose(K.cheer); s.fx = { sparkle: 1 }; return s; } },
    celebrantHold: { label: 'celebrant', f(t) { const w = Math.sin(TAU * 0.8 * t);
      return pose(with_(K.cheer, { hN: [13.5 + w, 61], hF: [-10 - w, 57], stick: { ang: 174 + 4 * w, grip: 32 }, hy: 27.4 + 0.3 * Math.sin(TAU * 1.6 * t) })); },
      still: () => { const s = pose(K.cheer); s.fx = { sparkle: 1 }; return s; } }
  };
  function shift(p, dx) { const o = mix(p, p, 0); const sx = a => { a[0] += dx; }; sx(o.H); sx(o.lF.K); sx(o.lF.P); sx(o.lN.K); sx(o.lN.P); sx(o.SN); sx(o.SF); sx(o.armN.E); sx(o.armN.P); sx(o.armF.E); sx(o.armF.P); sx(o.tip); sx(o.top); return o; }
  function lift(p, dy) { if (!dy) return p; const o = mix(p, p, 0); [o.H, o.lF.K, o.lF.P, o.lN.K, o.lN.P, o.SN, o.SF, o.armN.E, o.armN.P, o.armF.E, o.armF.P, o.tip, o.top].forEach(a => { a[1] += dy; }); return o; }

  /* ---------- dibuix ---------- */
  const NS = 'http://www.w3.org/2000/svg';
  const LEAFP = 'M0 6C3.6 4.3 4.2 -0.6 0 -4.6C-4.2 -0.6 -3.6 4.3 0 6Z';
  function fxMarkup() {
    const dots = [0, 1, 2].map(i => `<circle data-dot="${i}" cx="${14 + i * 6}" cy="${-62 - i * 6.5}" r="${2.2 + i * 0.5}"/>`).join('');
    const arcs = [0, 1, 2].map(i => { const r = 4.6 + i * 3.4, x = 16 + i * 3.4, y = -57; return `<path data-arc="${i}" d="M${x} ${y + r}a${r} ${r} 0 0 0 0 ${-2 * r}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" transform="rotate(-14 ${x} ${y})"/>`; }).join('');
    const conf = Array.from({ length: 12 }, (_, i) => `<path data-cf="${i}" d="${LEAFP}" fill="${['#00A86B', '#F2B200', '#1FD08A', '#0E8257'][i % 4]}"/>`).join('');
    return {
      back: `<g data-fx="rock" opacity="0"><path d="M-12 0C-13 -6 -9 -13.2 0 -13.6C9 -14 13 -7 12.4 0Z" fill="var(--m-rock,#C9D3CC)"/></g>
             <g data-fx="ground" opacity="0" fill="currentColor">${Array.from({ length: 11 }, (_, i) => `<circle cx="${-36 + i * 8}" cy="1.6" r="1.2" opacity="${(1 - Math.abs(i - 5) / 6).toFixed(2)}"/>`).join('')}</g>`,
      front: `<g data-fx="dots" opacity="0" fill="currentColor">${dots}</g>
              <g data-fx="arcs" opacity="0">${arcs}</g>
              <g data-fx="cloud" opacity="0" transform="translate(16 -74)"><path d="M-9 4h17a5.5 5.5 0 0 0 0-11a7.6 7.6 0 0 0-14.6 1.6A4.8 4.8 0 0 0-9 4Z" fill="var(--m-cloud,#E5E9E6)"/><path d="M-6 -9L8 6" stroke="var(--m-slash,#D70015)" stroke-width="2.4" stroke-linecap="round"/></g>
              <g data-fx="lines" opacity="0" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M0 0l5 -3"/><path d="M1 5l6 0"/></g>
              <g data-fx="conf">${conf}</g>
              <g data-fx="sparkle" opacity="0" fill="var(--m-spark,#F2B200)"><path d="M-14 -70l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6Z"/><path d="M22 -66l1.2 3 3 1.2-3 1.2-1.2 3-1.2-3-3-1.2 3-1.2Z"/><path d="M26 -84l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1Z"/></g>`
    };
  }
  const CONF = Array.from({ length: 12 }, (_, i) => { const a = -Math.PI / 2 + (i - 5.5) * 0.24 + (i % 2 ? 0.06 : -0.05); return { vx: Math.cos(a) * (34 + (i * 7) % 16), vy: Math.sin(a) * (52 + (i * 11) % 20), r: (i * 47) % 360, vr: (i % 2 ? 1 : -1) * (240 + (i * 37) % 200), s: 0.8 + (i % 3) * 0.18 }; });

  const LIVE = new Set();
  let RM = false;                                     // «Reduir moviment»
  let PAUSED = false;
  function tick(now) {
    if (!PAUSED) LIVE.forEach(m => { if (!m.el.isConnected) { LIVE.delete(m); return; } m.frame(now); });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  class Mascot {
    /* opt: { size (px d'alçada), view: 'full'|'avatar'|'bust', color, state, label } */
    constructor(host, opt) {
      opt = opt || {};
      this.opt = opt; this.el = document.createElement('span'); this.el.className = 'masc ' + (opt.cls || '');
      const vb = opt.view === 'avatar' ? '-26 -76 62 70' : opt.view === 'bust' ? '-22 -74 52 52' : '-34 -104 96 110';
      const fx = fxMarkup();
      this.el.innerHTML = `<svg viewBox="${vb}" role="img" aria-label="" focusable="false" style="height:${opt.size || 96}px;width:auto;overflow:visible">
        <g class="m-root">${fx.back}<g class="m-body">${A.figureMarkup('currentColor')}</g>${fx.front}</g></svg>`;
      host && host.appendChild(this.el);
      this.svg = this.el.firstElementChild; this.parts = {};
      this.svg.querySelectorAll('.m-body [data-p]').forEach(g => { this.parts[g.getAttribute('data-p')] = g; });
      this.fx = {}; this.svg.querySelectorAll('[data-fx]').forEach(g => { this.fx[g.getAttribute('data-fx')] = g; });
      this.dots = [...this.svg.querySelectorAll('[data-dot]')]; this.arcs = [...this.svg.querySelectorAll('[data-arc]')]; this.cf = [...this.svg.querySelectorAll('[data-cf]')];
      this.state = null; this.t0 = performance.now(); this.from = null; this.blend = 0; this.label = opt.label || 'Assistent de Valia';
      this.set(opt.state || 'repos', { instant: true });
      LIVE.add(this);
    }
    set(state, o) {
      o = o || {};
      if (!STATES[state]) return this;
      if (this.state === state && !o.restart) return this;
      const now = performance.now();
      this.from = o.fromPose || this.cur || null; this.fromT = now; this.blendDur = o.instant || RM ? 0 : (o.blend || 0.28);
      this.state = state; this.t0 = now; this.onDone = o.onDone || null;
      this.svg.setAttribute('aria-label', this.label + ': ' + STATES[state].label);
      this.svg.dataset.state = state;
      this.frame(now);
      return this;
    }
    pulse() { this._pulse = performance.now(); }
    frame(now) {
      const S = STATES[this.state];
      let t = (now - this.t0) / 1000, p;
      if (RM || this.opt.still) p = S.still();
      else {
        if (S.one && t >= S.one) { const cb = this.onDone; this.onDone = null; this.set(S.next, { blend: 0.2 }); cb && cb(); return; }
        p = S.f(t, this);
      }
      if (this.from && this.blendDur > 0) {
        const k = ss((now - this.fromT) / 1000 / this.blendDur);
        if (k < 1) { const fxB = p.fx; p = mix(this.from, p, k); p.fx = k < 0.5 ? (this.from.fx || {}) : fxB; } else this.from = null;
      }
      this.cur = p; this.draw(p, t);
    }
    draw(p, t) {
      const tr = A.poseTransforms(p);
      for (const k in tr) if (this.parts[k]) this.parts[k].setAttribute('transform', tr[k]);
      if (this.parts.head) this.parts.head.setAttribute('transform', `rotate(${(p.head || 0).toFixed(2)} ${NECK[0]} ${NECK[1]})`);
      const fx = p.fx || {}, F = this.fx;
      F.rock.setAttribute('opacity', fx.rock ? 1 : 0);
      F.ground.setAttribute('opacity', fx.ground != null ? 0.45 : 0);
      if (fx.ground != null) F.ground.setAttribute('transform', `translate(${(-(fx.ground || 0)).toFixed(2)} 0)`);
      // punts de «pensant»
      F.dots.setAttribute('opacity', fx.dots != null ? 1 : 0);
      if (fx.dots != null) this.dots.forEach((d, i) => { const ph = fx.dots < 0 ? 1 : clamp(Math.sin(Math.PI * clamp((fx.dots * 1.6 - i * 0.22), 0, 1)), 0, 1); d.setAttribute('opacity', (fx.dots < 0 ? 0.85 : 0.25 + 0.75 * ph).toFixed(2)); d.setAttribute('transform', `translate(0 ${fx.dots < 0 ? 0 : (-2.4 * ph).toFixed(2)})`); });
      F.arcs.setAttribute('opacity', fx.arcs != null ? 1 : 0);
      if (fx.arcs != null) this.arcs.forEach((a, i) => a.setAttribute('opacity', clamp(fx.arcs * 1.4 - i * 0.28, 0.12, 1).toFixed(2)));
      F.cloud.setAttribute('opacity', fx.cloud ? (0.75 + 0.25 * fx.cloud).toFixed(2) : 0);
      if (fx.cloud) F.cloud.setAttribute('transform', `translate(16 ${(-74 - 1.2 * fx.cloud).toFixed(2)})`);
      // línies de gest vora la punta del bastó
      if (fx.lines != null) { const tp = p.tip; F.lines.setAttribute('opacity', (0.25 + 0.6 * Math.sin(Math.PI * fx.lines)).toFixed(2)); F.lines.setAttribute('transform', `translate(${(tp[0] + 2).toFixed(1)} ${(-tp[1] - 4).toFixed(1)})`); } else F.lines.setAttribute('opacity', 0);
      // confeti de fulles
      const cfv = fx.confetti;
      this.cf.forEach((c, i) => {
        if (cfv == null || cfv <= 0 || cfv >= 1) { c.setAttribute('opacity', 0); return; }
        const q = CONF[i], tt = cfv * 1.15, x = q.vx * tt, y = -62 + q.vy * tt + 46 * tt * tt;
        c.setAttribute('opacity', (1 - ss((cfv - 0.62) / 0.38)).toFixed(2));
        c.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(q.r + q.vr * tt).toFixed(0)}) scale(${q.s})`);
      });
      F.sparkle.setAttribute('opacity', fx.sparkle ? 1 : 0);
    }
    destroy() { LIVE.delete(this); this.el.remove(); }
  }

  root.Mascot = {
    create: (host, opt) => new Mascot(host, opt),
    STATES, pose, mix, K, B,
    setReduced(v) { RM = !!v; LIVE.forEach(m => m.frame(performance.now())); },
    pause(v) { PAUSED = !!v; },
    get reduced() { return RM; },
    labels: () => Object.fromEntries(Object.entries(STATES).map(([k, v]) => [k, v.label]))
  };
})(typeof window !== 'undefined' ? window : globalThis);

/* ---- app.js ---- */
/* ===================== Valia · runtime de l'app (estil iOS) =====================
   Piles de navegació per pestanya (push/pop amb gest de lliscar per tornar), fulles amb altures,
   pantalles completes, alertes, full d'accions, teclat, transicions «heroi», títols grans que es
   contrauen, aparició escalonada, microinteraccions, text dinàmic i «Reduir moviment». */
const IOS = (function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s), $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const h = html => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const SP = Spring.spring;
  const S = { push: SP(0.42, 0.98), pop: SP(0.38, 1), sheet: SP(0.44, 0.84), cover: SP(0.46, 0.96), hero: SP(0.48, 0.84), micro: SP(0.32, 0.6), alert: SP(0.3, 0.78), list: SP(0.42, 0.9), soft: SP(0.36, 0.9) };
  const W = 393; let H = 852, SAFE_T = 59;
  const settings = { rm: false, dt: 1, vo: false };
  const listeners = [];
  let app, scenes = {}, layers = {}, statusEl;
  const rm = () => settings.rm;

  /* ---------- animació ---------- */
  function anim(el, kf, sp, extra) {
    if (!el) return Promise.resolve();
    const a = el.animate(kf, Object.assign({ duration: sp.duration, easing: sp.easing, fill: 'both' }, extra || {}));
    return a.finished.then(() => { try { a.commitStyles(); } catch (e) { /* element tret */ } a.cancel(); }).catch(() => {});
  }
  const fadeSp = ms => ({ duration: ms || 240, easing: 'cubic-bezier(.2,.0,.2,1)' });
  function fade(el, a, b, ms) { return anim(el, [{ opacity: a }, { opacity: b }], fadeSp(ms)); }
  function scaleOf() { const r = app.getBoundingClientRect(); return r.width / W || 1; }
  function rectIn(el) { const a = app.getBoundingClientRect(), r = el.getBoundingClientRect(), s = scaleOf(); return { x: (r.left - a.left) / s, y: (r.top - a.top) / s, w: r.width / s, h: r.height / s }; }
  function stagger(els, o) {
    o = o || {};
    els = [...els].filter(e => e && e.nodeType === 1).slice(0, o.max || 10);
    if (rm()) return Promise.all(els.map((e, i) => anim(e, [{ opacity: 0 }, { opacity: 1 }], fadeSp(200), { delay: 30 * i })));
    return Promise.all(els.map((e, i) => anim(e, [{ opacity: 0, transform: `translateY(${o.dy || 16}px)` }, { opacity: 1, transform: 'none' }], S.list, { delay: (o.delay || 0) + 38 * i })));
  }

  /* ---------- pàgines i piles ---------- */
  const SCREENS = {};
  class Page {
    constructor(id, params, stack) {
      const d = SCREENS[id]; if (!d) throw new Error('Pantalla desconeguda: ' + id);
      this.d = d; this.id = id; this.params = params || {}; this.stack = stack; this.cleanups = [];
      const idx = stack.pages.length, prev = stack.pages[idx - 1];
      const back = idx > 0 && d.back !== false ? `<button class="navbtn back press" data-act="back" aria-label="Enrere${prev ? ': ' + (prev.d.short || prev.d.title) : ''}">${d.backGlass ? `<span class="gl">${ICN('chevL', 22)}</span>` : `${ICN('chevL', 26)}<span>${prev ? (prev.d.short || prev.d.title) : 'Enrere'}</span>`}</button>` : (d.navLeft ? d.navLeft(this.params, this) : '');
      const cls = ['page', d.cls || '', d.tabbar === false || stack.modal ? 'notab' : '', d.nav === false ? 'nonav' : ''].join(' ');
      this.el = h(`<section class="${cls}" data-screen="${id}" aria-label="${esc(d.title)}"></section>`);
      const nav = d.nav === false ? '' : `<header class="nav ${d.large ? 'large' : ''} ${d.navCls || ''}"><div class="nl">${back}</div><div class="nt" aria-hidden="${d.large ? 'true' : 'false'}">${d.navCenter ? d.navCenter(this.params, this) : esc(d.navTitle || d.title)}</div><div class="nr">${d.navRight ? d.navRight(this.params, this) : ''}</div></header>`;
      this.el.innerHTML = `<div class="scroll">${d.large ? `<h1 class="lt ltitle">${esc(d.title)}</h1>` : ''}${d.render(this.params, this)}</div>${nav}${d.overlay ? d.overlay(this.params, this) : ''}<div class="dimmer"></div>`;
      this.scroll = this.el.querySelector(':scope > .scroll'); this.nav = this.el.querySelector(':scope > .nav');
    }
    mount() {
      const nav = this.nav, sc = this.scroll, large = this.d.large, th = this.d.scrollThreshold || (large ? 44 : 2);
      if (nav) { const on = () => { const y = sc.scrollTop, was = nav.classList.contains('scrolled'); nav.classList.toggle('scrolled', y > th); if (was !== y > th && window.App && App.topPage() === this) App.syncStatus(); if (large) { const lt = sc.querySelector('.ltitle'); if (lt) lt.style.opacity = String(Math.max(0, 1 - y / 40)); } this.d.onScroll && this.d.onScroll(y, this); }; sc.addEventListener('scroll', on, { passive: true }); on(); }
      this.el.addEventListener('click', e => { const b = e.target.closest('[data-act="back"]'); if (b && this.el.contains(b)) { e.preventDefault(); this.stack.pop(); } });
      this.d.mount && this.d.mount(this.el, this.params, this);
      // la barra inferior creix amb el text dinàmic: el contingut sempre es pot desplaçar per sobre seu
      const bb = this.el.querySelector(':scope > .bbar');
      if (bb && sc) { const fit = () => { sc.style.paddingBottom = (bb.offsetHeight + (parseFloat(getComputedStyle(bb).bottom) || 0) + 16) + 'px'; }; const ro = new ResizeObserver(fit); ro.observe(bb); this.cleanups.push(() => ro.disconnect()); }
      if (this.stack.pages.length > 1 || this.stack.modal) SwipeBack.attach(this);
    }
    didAppear() { this.d.appear && this.d.appear(this.el, this.params, this); App.onPage(this); }
    dim() { return this.el.querySelector(':scope > .dimmer'); }
    hide() { this.el.style.visibility = 'hidden'; this.el.inert = true; }
    show() { this.el.style.visibility = ''; this.el.inert = false; this.el.style.transform = ''; const d = this.dim(); if (d) d.style.opacity = 0; }
    destroy() { this.cleanups.forEach(f => f()); this.d.unmount && this.d.unmount(this.el, this.params, this); this.el.remove(); }
    on(target, ev, fn, opt) { target.addEventListener(ev, fn, opt); this.cleanups.push(() => target.removeEventListener(ev, fn, opt)); }
  }
  class Stack {
    constructor(host, o) { this.host = host; this.pages = []; Object.assign(this, o || {}); }
    get top() { return this.pages[this.pages.length - 1]; }
    async push(id, params, o) {
      o = o || {};
      const prev = this.top, pg = new Page(id, params, this);
      this.host.appendChild(pg.el); this.pages.push(pg); pg.mount();
      if (!prev || o.instant) { if (prev) prev.hide(); pg.didAppear(); return pg; }
      Busy.on();
      if (o.hero && !rm()) await Hero.push(prev, pg, o.hero);
      else if (rm()) { await fade(pg.el, 0, 1, 260); }
      else {
        prev.el.style.zIndex = 1; pg.el.style.zIndex = 2; pg.el.style.boxShadow = '-6px 0 24px rgba(0,0,0,.12)';
        await Promise.all([
          anim(pg.el, [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }], S.push),
          anim(prev.el, [{ transform: 'translateX(0)' }, { transform: 'translateX(-30%)' }], S.push),
          anim(prev.dim(), [{ opacity: 0 }, { opacity: 0.1 }], S.push)
        ]);
        pg.el.style.boxShadow = '';
      }
      prev.hide(); prev.el.style.zIndex = ''; pg.el.style.zIndex = '';
      Busy.off(); pg.didAppear(); return pg;
    }
    async pop(o) {
      o = o || {};
      if (this.pages.length < 2) { if (this.modal && this.onEmptyPop) return this.onEmptyPop(); return; }
      const pg = this.pages.pop(), prev = this.top;
      prev.show(); Busy.on();
      if (pg.heroBack && !rm() && !o.fromGesture) await Hero.pop(prev, pg);
      else if (o.instant) { /* res */ }
      else if (rm()) await fade(pg.el, 1, 0, 220);
      else if (!o.fromGesture) {
        prev.el.style.zIndex = 1; pg.el.style.zIndex = 2;
        await Promise.all([
          anim(pg.el, [{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }], S.pop),
          anim(prev.el, [{ transform: 'translateX(-30%)' }, { transform: 'translateX(0)' }], S.pop),
          anim(prev.dim(), [{ opacity: 0.1 }, { opacity: 0 }], S.pop)
        ]);
      }
      pg.destroy(); prev.show(); prev.el.style.zIndex = '';
      Busy.off(); prev.d.reappear && prev.d.reappear(prev.el, prev.params, prev); App.onPage(prev);
    }
    async popTo(n) { while (this.pages.length > n) await this.pop({ instant: true }); }
    clear() { this.pages.forEach(p => p.destroy()); this.pages = []; }
    reset(id, params) { this.clear(); return this.push(id, params, { instant: true }); }
  }

  /* gest de lliscar des de la vora esquerra per tornar enrere */
  const SwipeBack = {
    attach(pg) {
      const el = pg.el; let st = null;
      const down = e => {
        if (st || e.button > 0) return;
        const r = app.getBoundingClientRect(), x = (e.clientX - r.left) / scaleOf();
        if (x > 26 || pg.stack.top !== pg || Busy.n) return;
        if (pg.stack.pages.length < 2) return;
        st = { x0: e.clientX, t0: performance.now(), dx: 0, v: 0, lastX: e.clientX, lastT: performance.now(), id: e.pointerId };
        el.setPointerCapture(e.pointerId);
        const prev = pg.stack.pages[pg.stack.pages.length - 2]; prev.el.style.visibility = ''; st.prev = prev;
        el.style.boxShadow = '-6px 0 24px rgba(0,0,0,.12)';
      };
      const move = e => {
        if (!st || e.pointerId !== st.id) return;
        const s = scaleOf(), dx = Math.max(0, (e.clientX - st.x0) / s), now = performance.now();
        st.v = ((e.clientX - st.lastX) / s) / Math.max(1, now - st.lastT); st.lastX = e.clientX; st.lastT = now; st.dx = dx;
        el.style.transform = `translateX(${dx}px)`;
        if (!rm()) st.prev.el.style.transform = `translateX(${-0.3 * W + 0.3 * dx}px)`;
        const d = st.prev.dim(); if (d) d.style.opacity = String(0.1 * (1 - dx / W));
      };
      const up = e => {
        if (!st || e.pointerId !== st.id) return;
        const done = st.dx > W * 0.38 || st.v > 0.55, s0 = st.dx, prev = st.prev, v = st.v * 1000; st = null;
        const set = x => { el.style.transform = `translateX(${x}px)`; prev.el.style.transform = rm() ? '' : `translateX(${-0.3 * W + 0.3 * x}px)`; const d = prev.dim(); if (d) d.style.opacity = String(0.1 * (1 - x / W)); };
        Spring.runSpring({ from: s0, to: done ? W : 0, velocity: v, response: 0.36, damping: 1, onUpdate: set, onDone: () => {
          el.style.boxShadow = '';
          if (done) pg.stack.pop({ fromGesture: true }); else { prev.hide(); prev.el.style.transform = ''; el.style.transform = ''; }
        } });
      };
      pg.on(el, 'pointerdown', down); pg.on(el, 'pointermove', move); pg.on(el, 'pointerup', up); pg.on(el, 'pointercancel', up);
    }
  };
  const Busy = { n: 0, on() { this.n++; }, off() { this.n = Math.max(0, this.n - 1); } };

  /* ---------- transició «heroi»: la targeta es converteix en la capçalera del detall ---------- */
  const Hero = {
    /* transició compartida només amb transform i opacity: la foto de la targeta es desplaça i s'amplia
       (escala uniforme, sense deformar-la) mentre la capçalera de destinació apareix amb un fos */
    async push(prev, pg, o) {
      const src = o.src, tgt = pg.el.querySelector(o.target || '[data-hero]');
      if (!src || !tgt) { await fade(pg.el, 0, 1, 240); return; }
      const a = rectIn(src), b = rectIn(tgt), k = b.w / a.w, dx = b.x - a.x, dy = b.y + (b.h - a.h * k) / 2 - a.y;
      const clone = h(`<div class="pimg hero-clone" style="position:absolute;z-index:58;left:${a.x}px;top:${a.y}px;width:${a.w}px;height:${a.h}px;border-radius:16px;background-size:cover;transform-origin:0 0"></div>`);
      clone.style.backgroundImage = getComputedStyle(src).backgroundImage; clone.style.backgroundPosition = getComputedStyle(src).backgroundPosition;
      app.appendChild(clone); src.style.visibility = 'hidden';
      pg.el.style.zIndex = 2; prev.el.style.zIndex = 1;
      const kids = [...pg.scroll.children].filter(c => !c.contains(tgt)).slice(0, 6);
      kids.forEach(k2 => { k2.style.opacity = 0; });
      pg.el.style.background = 'transparent'; pg.el.style.opacity = 1;
      const bg = h('<div style="position:absolute;inset:0;background:var(--bg);opacity:0;z-index:0"></div>'); pg.el.prepend(bg);
      await Promise.all([
        anim(clone, [{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${dx}px,${dy}px) scale(${k})`, opacity: 1, offset: 0.55 }, { transform: `translate(${dx}px,${dy}px) scale(${k})`, opacity: 0 }], S.hero),
        anim(tgt, [{ opacity: 0, transform: 'scale(1.04)' }, { opacity: 1, transform: 'scale(1)' }], S.hero),
        anim(bg, [{ opacity: 0 }, { opacity: 1 }], fadeSp(260)),
        anim(prev.dim(), [{ opacity: 0 }, { opacity: 0.12 }], S.hero),
        stagger(kids, { delay: 120, dy: 22 })
      ]);
      kids.forEach(k2 => { k2.style.opacity = ''; });
      clone.remove(); bg.remove(); pg.el.style.background = ''; src.style.visibility = '';
      pg.heroBack = { src };
    },
    async pop(prev, pg) {
      const src = pg.heroBack.src, tgt = pg.el.querySelector('[data-hero]');
      if (!src || !src.isConnected || !tgt) { await fade(pg.el, 1, 0, 220); return; }
      const a = rectIn(tgt), b = rectIn(src), k = b.w / a.w, dx = b.x - a.x, dy = b.y + (b.h - a.h * k) / 2 - a.y;
      const clone = h(`<div class="pimg hero-clone" style="position:absolute;z-index:58;left:${a.x}px;top:${a.y}px;width:${a.w}px;height:${a.h}px;border-radius:0;background-size:cover;transform-origin:0 0"></div>`);
      clone.style.backgroundImage = getComputedStyle(tgt).backgroundImage; clone.style.backgroundPosition = getComputedStyle(tgt).backgroundPosition;
      app.appendChild(clone);
      await Promise.all([
        anim(clone, [{ transform: 'translate(0,0) scale(1)', opacity: 1 }, { transform: `translate(${dx}px,${dy}px) scale(${k})`, opacity: 1, offset: 0.7 }, { transform: `translate(${dx}px,${dy}px) scale(${k})`, opacity: 0 }], S.hero),
        anim(src, [{ opacity: 0 }, { opacity: 0, offset: 0.45 }, { opacity: 1 }], S.hero),
        fade(pg.el, 1, 0, 200), anim(prev.dim(), [{ opacity: 0.12 }, { opacity: 0 }], S.hero)
      ]);
      clone.remove();
    }
  };

  /* ---------- presentacions modals: fulla (amb altures), pantalla completa i fulla fosca ---------- */
  const modals = [];
  const Modal = {
    present(id, params, o) {
      o = o || {}; if (window.MascotUI) MascotUI.closeAll();
      const kind = o.kind || 'sheet', layer = layers.modal;
      const wrap = h(`<div class="mwrap" style="position:absolute;inset:0;pointer-events:auto"><div class="backdrop"></div></div>`);
      layer.appendChild(wrap);
      const bd = wrap.firstElementChild;
      let box;
      if (kind === 'cover') box = h(`<div class="cover" role="dialog" aria-modal="true"></div>`);
      else {
        const hgt = H - (kind === 'dark' ? 0 : SAFE_T + 10);
        box = h(`<div class="sheet ${kind === 'dark' ? 'dark' : ''}" role="dialog" aria-modal="true" style="height:${hgt}px">${kind === 'dark' ? '' : '<div class="grab" aria-hidden="true"></div>'}</div>`);
      }
      wrap.appendChild(box);
      const host = h('<div style="position:relative;flex:1;min-height:0"></div>');
      box.appendChild(host);
      const stack = new Stack(host, { modal: true, kind });
      const m = { wrap, bd, box, host, stack, kind, o, detent: o.detent || (o.detents ? o.detents[0] : 'large'), id };
      stack.onEmptyPop = () => Modal.dismiss(m);
      modals.push(m);
      stack.push(id, params, { instant: true });
      const top = stack.top; if (kind === 'sheet') top.el.classList.add('insheet');
      if (kind === 'sheet' || kind === 'dark') Detents.bind(m);
      Modal.fit(m, m.detent);
      return Modal.animateIn(m).then(() => m);
    },
    refit() { modals.forEach(m => { if (m.kind === 'cover') return; m.box.style.height = (H - (m.kind === 'dark' ? 0 : SAFE_T + 10)) + 'px'; if (m.kind === 'sheet') { Modal.fit(m, m.detent); m.box.style.transform = `translateY(${Modal.detentY(m, m.detent)}px)`; } }); },
    fit(m, d) { if (m.kind !== 'sheet') return; const full = m.box.offsetHeight || (H - SAFE_T - 10), grab = 22; m.host.style.flex = 'none'; m.host.style.height = (full - grab - Modal.detentY(m, d)) + 'px'; },
    detentY(m, d) { if (m.kind !== 'sheet') return 0; const hh = m.box.offsetHeight || parseFloat(m.box.style.height) || (H - SAFE_T - 10); return d === 'medium' ? Math.round(hh - (H * (m.o.mediumFrac || 0.52))) : 0; },
    async animateIn(m) {
      Busy.on();
      const y = Modal.detentY(m, m.detent), dimTo = m.kind === 'cover' ? 0 : (m.detent === 'medium' ? 0.18 : 0.38);
      if (rm()) { m.box.style.transform = `translateY(${y}px)`; await Promise.all([fade(m.box, 0, 1, 260), anim(m.bd, [{ opacity: 0 }, { opacity: dimTo }], fadeSp(260))]); }
      else await Promise.all([
        anim(m.box, [{ transform: 'translateY(100%)' }, { transform: `translateY(${y}px)` }], m.kind === 'cover' ? S.cover : S.sheet),
        anim(m.bd, [{ opacity: 0 }, { opacity: dimTo }], fadeSp(300)),
        Modal.stackBehind(m, true)
      ]);
      Busy.off(); App.onPage(m.stack.top);
    },
    stackBehind(m, on) {
      // amb la fulla gran, la pantalla de sota es fa petita i s'arrodoneix (com a iOS)
      if (m.kind !== 'sheet' || rm()) return Promise.resolve();
      const big = on && m.detent === 'large', sc = App.activeScene();
      const tr = big ? 'translateY(10px) scale(0.92)' : 'none';
      if (!sc) return Promise.resolve();
      sc.style.borderRadius = big ? '12px' : ''; sc.style.overflow = 'hidden';
      setStatusTone(big ? 'light' : null);
      return anim(sc, [{ transform: getComputedStyle(sc).transform === 'none' ? 'none' : getComputedStyle(sc).transform }, { transform: tr }], S.sheet);
    },
    async dismiss(m) {
      m = m || modals[modals.length - 1]; if (!m) return;
      const i = modals.indexOf(m); if (i >= 0) modals.splice(i, 1);
      Busy.on();
      if (rm()) await Promise.all([fade(m.box, 1, 0, 220), fade(m.bd, parseFloat(getComputedStyle(m.bd).opacity) || 0, 0, 220)]);
      else await Promise.all([
        anim(m.box, [{ transform: getComputedStyle(m.box).transform }, { transform: 'translateY(105%)' }], m.kind === 'cover' ? S.cover : S.sheet),
        anim(m.bd, [{ opacity: parseFloat(getComputedStyle(m.bd).opacity) || 0 }, { opacity: 0 }], fadeSp(240)),
        Modal.stackBehind(m, false)
      ]);
      m.stack.clear(); m.wrap.remove(); Busy.off();
      setStatusTone(null);
      m.o.onDismiss && m.o.onDismiss();
      App.onPage(App.topPage());
    },
    async dismissAll() { while (modals.length) await Modal.dismiss(modals[modals.length - 1]); },
    drop(m) { const i = modals.indexOf(m); if (i < 0) return; modals.splice(i, 1); m.stack.clear(); m.wrap.remove(); },
    clearAll() { modals.splice(0).forEach(m => { m.stack.clear(); m.wrap.remove(); }); const sc = App.activeScene(); if (sc) { sc.style.transform = ''; sc.style.borderRadius = ''; } setStatusTone(null); },
    get top() { return modals[modals.length - 1]; },
    list: modals,
    setDetent(m, d) { const grow = Modal.detentY(m, d) < Modal.detentY(m, m.detent); m.detent = d; const y = Modal.detentY(m, d); if (grow) Modal.fit(m, d); else setTimeout(() => Modal.fit(m, d), 320); const cur = getComputedStyle(m.box).transform; anim(m.box, [{ transform: cur }, { transform: `translateY(${y}px)` }], rm() ? fadeSp(200) : S.sheet); anim(m.bd, [{ opacity: parseFloat(getComputedStyle(m.bd).opacity) || 0 }, { opacity: d === 'medium' ? 0.18 : 0.38 }], fadeSp(240)); Modal.stackBehind(m, true); }
  };
  /* arrossegar la fulla per canviar d'altura o tancar-la */
  const Detents = {
    bind(m) {
      const handles = [m.box.querySelector('.grab'), ...m.box.querySelectorAll('.shead')].filter(Boolean);
      m.bd.addEventListener('click', () => { if (m.o.dismissable !== false) Modal.dismiss(m); });
      handles.forEach(hd => {
        let st = null;
        hd.addEventListener('pointerdown', e => { st = { y0: e.clientY, base: Modal.detentY(m, m.detent), v: 0, ly: e.clientY, lt: performance.now(), id: e.pointerId }; hd.setPointerCapture(e.pointerId); });
        hd.addEventListener('pointermove', e => { if (!st) return; const s = scaleOf(), dy = (e.clientY - st.y0) / s, now = performance.now(); st.v = ((e.clientY - st.ly) / s) / Math.max(1, now - st.lt); st.ly = e.clientY; st.lt = now; let y = st.base + dy; if (y < 0) y = y / 3; m.box.style.transform = `translateY(${y}px)`; st.y = y; });
        const end = () => {
          if (!st) return; const y = st.y == null ? st.base : st.y, v = st.v; st = null;
          const dets = m.o.detents || ['large'], ys = dets.map(d => [d, Modal.detentY(m, d)]);
          const proj = y + v * 180;
          if (m.o.dismissable !== false && (proj > Modal.detentY(m, dets[0]) + 120 || v > 1.1)) { Modal.dismiss(m); return; }
          let best = ys[0]; ys.forEach(p => { if (Math.abs(p[1] - proj) < Math.abs(best[1] - proj)) best = p; });
          Modal.setDetent(m, best[0]);
        };
        hd.addEventListener('pointerup', end); hd.addEventListener('pointercancel', end);
        hd.addEventListener('dblclick', () => { const dets = m.o.detents || ['large']; if (dets.length > 1) Modal.setDetent(m, m.detent === 'large' ? 'medium' : 'large'); });
      });
    }
  };

  /* ---------- alertes i full d'accions ---------- */
  const Alert = {
    show(o) {
      return new Promise(res => {
        const wrap = h(`<div style="position:absolute;inset:0;pointer-events:auto;z-index:2"><div class="backdrop" style="opacity:0"></div>
          <div class="alert ${o.vertical ? 'v' : ''}" role="alertdialog" aria-modal="true" aria-labelledby="al-t" ${o.msg ? 'aria-describedby="al-m"' : ''} tabindex="-1"><div class="am"><b id="al-t">${o.title}</b>${o.msg ? `<p id="al-m">${o.msg}</p>` : ''}</div><div class="ab">${o.buttons.map((b, i) => `<button type="button" class="${b.style || ''}" data-i="${i}">${b.t}</button>`).join('')}</div></div></div>`);
        layers.alert.appendChild(wrap);
        const al = wrap.querySelector('.alert'), bd = wrap.firstElementChild;
        if (rm()) { fade(al, 0, 1, 200); fade(bd, 0, 0.3, 200); }
        else { anim(al, [{ opacity: 0, transform: 'translateY(-50%) scale(1.15)' }, { opacity: 1, transform: 'translateY(-50%) scale(1)' }], S.alert); anim(bd, [{ opacity: 0 }, { opacity: 0.3 }], fadeSp(200)); }
        setTimeout(() => al.focus({ preventScroll: true }), 50);   // VoiceOver llegeix el títol i el missatge de l'alerta
        al.addEventListener('click', async e => {
          const b = e.target.closest('button'); if (!b) return;
          const i = +b.dataset.i; await Promise.all([fade(al, 1, 0, 160), fade(bd, 0.3, 0, 160)]); wrap.remove();
          o.buttons[i].on && o.buttons[i].on(); res(i);
        });
        App.vo();
      });
    },
    actions(o) {
      return new Promise(res => {
        const wrap = h(`<div style="position:absolute;inset:0;pointer-events:auto;z-index:2"><div class="backdrop" style="opacity:0"></div>
          <div class="asheet" role="dialog" aria-modal="true"><div class="grp">${o.title || o.msg ? `<div class="amsg">${o.title ? `<b>${o.title}</b>` : ''}${o.msg || ''}</div>` : ''}${o.actions.map((a, i) => `<button type="button" data-i="${i}" style="${a.red ? 'color:var(--red)' : ''}">${a.t}</button>`).join('')}</div><button type="button" class="cancel" data-i="-1">${o.cancel || 'Cancel·la'}</button></div></div>`);
        layers.alert.appendChild(wrap);
        const sh = wrap.querySelector('.asheet'), bd = wrap.firstElementChild;
        if (rm()) { fade(sh, 0, 1, 200); fade(bd, 0, 0.3, 200); } else { anim(sh, [{ transform: 'translateY(110%)' }, { transform: 'none' }], S.sheet); anim(bd, [{ opacity: 0 }, { opacity: 0.3 }], fadeSp(220)); }
        const close = async i => { if (rm()) await Promise.all([fade(sh, 1, 0, 160), fade(bd, 0.3, 0, 160)]); else await Promise.all([anim(sh, [{ transform: 'none' }, { transform: 'translateY(110%)' }], S.soft), fade(bd, 0.3, 0, 200)]); wrap.remove(); if (i >= 0 && o.actions[i].on) o.actions[i].on(); res(i); };
        sh.addEventListener('click', e => { const b = e.target.closest('button'); if (b) close(+b.dataset.i); });
        bd.addEventListener('click', () => close(-1));
        App.vo();
      });
    }
  };
  Alert.clear = () => { if (layers.alert) layers.alert.innerHTML = ''; };
  const Toast = {
    show(text, icon) {
      const t = h(`<div class="toast" role="status">${icon ? ICN(icon, 18, 'var(--tint-tx)') : ''}<span>${text}</span></div>`);
      layers.alert.appendChild(t);
      if (rm()) fade(t, 0, 1, 200); else anim(t, [{ opacity: 0, transform: 'translate(-50%,-20px) scale(.9)' }, { opacity: 1, transform: 'translate(-50%,0) scale(1)' }], S.micro);
      setTimeout(() => { fade(t, 1, 0, 240).then(() => t.remove()); }, 2200);
    }
  };

  /* ---------- teclat ---------- */
  /* teclat: a l'app real s'usa el teclat natiu del mòbil o de l'ordinador */
  const Keyboard = {
    el: null, input: null, open: false,
    show(input, o) { this.input = input; this.o = o || {}; this.open = true; return Promise.resolve(); },
    height() { return 0; },
    hide() { if (!this.open) return Promise.resolve(); this.open = false; if (this.input) this.input.blur(); this.o && this.o.onHide && this.o.onHide(); return Promise.resolve(); }
  };

  /* ---------- microinteraccions ---------- */
  function bindPress(rootEl) {
    rootEl.addEventListener('pointerdown', e => { const b = e.target.closest('.press,.btn,.chip,.acard,.tile,.grow,.navbtn,.iconbtn,.sug'); if (!b || rm()) return; b.classList.add('down'); b.style.transition = 'transform .15s cubic-bezier(.2,.8,.2,1)'; b.style.transform = 'scale(.96)'; b._pressed = true; });
    const up = e => { $$('[style*="scale(0.96)"],[style*="scale(.96)"]', rootEl).forEach(b => { if (!b._pressed) return; b._pressed = false; b.style.transition = ''; anim(b, [{ transform: 'scale(.96)' }, { transform: 'scale(1)' }], S.micro).then(() => { b.style.transform = ''; }); }); };
    rootEl.addEventListener('pointerup', up); rootEl.addEventListener('pointercancel', up); rootEl.addEventListener('pointerleave', up);
  }
  function segmented(el, onChange) {
    const btns = $$('button', el), knob = h('<span class="knob" aria-hidden="true"></span>'); el.prepend(knob);
    const place = (i, animate) => { const b = btns[i], tx = `translateX(${b.offsetLeft + 2}px)`; knob.style.left = '0px'; knob.style.width = (b.offsetWidth - 4) + 'px'; if (animate && !rm()) { const from = knob.style.transform || tx; anim(knob, [{ transform: from }, { transform: tx }], S.micro); } knob.style.transform = tx; };
    const sel = Math.max(0, btns.findIndex(b => b.getAttribute('aria-selected') === 'true'));
    requestAnimationFrame(() => place(sel, false));
    btns.forEach((b, i) => b.addEventListener('click', () => { btns.forEach(x => x.setAttribute('aria-selected', x === b)); place(i, true); onChange && onChange(i, b); }));
    new ResizeObserver(() => { const i = btns.findIndex(b => b.getAttribute('aria-selected') === 'true'); place(Math.max(0, i), false); }).observe(el);
  }
  function switches(rootEl) {
    rootEl.addEventListener('click', e => { const row = e.target.closest('.swrow'); const s = e.target.closest('.sw') || (row && row.querySelector('.sw')); if (!s) return; const v = s.getAttribute('aria-checked') !== 'true'; s.setAttribute('aria-checked', v); s.dispatchEvent(new CustomEvent('toggle', { bubbles: true, detail: v })); });
  }

  /* ---------- barra d'estat ---------- */
  let toneOverride = null;
  function setStatusTone(t) { toneOverride = t; App.syncStatus(); }

  /* ---------- ajustos d'accessibilitat ---------- */
  function set(k, v) {
    settings[k] = v;
    if (k === 'rm') { app.classList.toggle('rm', !!v); Mascot.setReduced(!!v); }
    if (k === 'dt') { app.style.setProperty('--dt', v); app.classList.toggle('dt-ax', v >= 1.6); }
    if (k === 'vo') App.vo();
    listeners.forEach(f => f(k, v));
  }

  function init(el) {
    app = el;
    scenes = { main: $('#sc-main', el), onb: $('#sc-onb', el), load: $('#sc-load', el) };
    layers = { modal: $('#ly-modal', el), alert: $('#ly-alert', el), kbd: $('#ly-kbd', el), peek: $('#ly-peek', el), vo: $('#ly-vo', el) };
    statusEl = $('.statusbar', el); if (statusEl && !statusEl.firstChild && typeof SBAR !== 'undefined') statusEl.innerHTML = SBAR;
    bindPress(el); switches(el);
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) set('rm', true);
  }

  return { init, $, $$, h, anim, fade, fadeSp, stagger, rectIn, S, W, get H() { return H; }, setH(v) { H = v; }, get safeT() { return SAFE_T; }, setSafeT(v) { SAFE_T = v; }, SCREENS, Page, Stack, Modal, Alert, Toast, Keyboard, Hero, segmented, settings, set, onSettings: f => listeners.push(f), rm, get app() { return app; }, get scenes() { return scenes; }, get layers() { return layers; }, get statusEl() { return statusEl; }, get toneOverride() { return toneOverride; }, setStatusTone, Busy };
})();
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

/* ---- store.js ---- */
/* ===================== Valia · comptes i dades desades al dispositiu (localStorage) =====================
   Prototip sense servidor: els comptes només existeixen en aquest navegador. La contrasenya es desa
   resumida (SHA-256 amb sal), però això NO és seguretat real: és una demostració. */
const Store = (function () {
  const KEY = 'valia.v1';
  const DEMO = { email: 'jurat@greenvalles.cat', alias: ['jurat@valia.cat'], pass: 'TR2026', name: 'Jurat del TR' };
  const today = () => new Date().toLocaleDateString('ca-ES', { day: 'numeric', month: 'long' });
  let db = load(), guestData = null;
  function load() {
    try { const v = JSON.parse(localStorage.getItem(KEY)); if (v && v.users) return v; } catch (e) { /* sense emmagatzematge */ }
    return { users: {}, data: {}, session: null };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* mode privat: no es desa */ } }
  const norm = e => String(e || '').trim().toLowerCase();
  const isDemo = e => { e = norm(e); return e === DEMO.email || DEMO.alias.includes(e); };
  async function digest(pw, salt) {
    const txt = salt + ':' + pw;
    if (window.crypto && crypto.subtle) { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt)); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join(''); }
    let h = 5381; for (const c of txt) h = ((h << 5) + h + c.charCodeAt(0)) | 0; return 'd' + (h >>> 0).toString(16);
  }
  /* compte nou: comença de zero, amb 100 punts de benvinguda */
  function fresh(name) {
    return { name, since: Date.now(), points: 100, km: 0, min: 0, up: 0, co2: 0, checkins: 0, places: 0, routes: [], saved: {}, coupons: [], goal: 'bus',
      history: [{ i: 'gift', t: 'Benvinguda a Valia', d: today(), amt: 100, earn: 1 }], interests: null, consents: { stats: false, news: false, ai: false } };
  }
  /* compte del jurat i mode convidat: dades d'exemple per veure l'app plena */
  function sample(name) {
    const D = 864e5, now = Date.now();
    return { name, sample: true, since: now - 50 * D, points: 1240, km: 342, min: 5400, up: 9800, co2: 61, checkins: 46, places: 18, saved: { caldes: true }, coupons: [], goal: 'bus', interests: null, consents: { stats: false, news: false, ai: false },
      routes: [{ id: 'caldes', t: 'Itinerari termal de Caldes', d: new Date(now - D).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long' }), ts: now - D, km: 5.4, up: 82, pts: 120, min: 92 }, { id: 'gallecs', t: 'Gallecs en bicicleta', d: new Date(now - 3 * D).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long' }), ts: now - 3 * D, km: 12, up: 40, pts: 95, min: 70 }],
      history: [{ i: 'walk', t: 'Itinerari termal de Caldes', d: '20 de setembre', amt: 120, earn: 1 }, { i: 'bike', t: 'Gallecs en bicicleta', d: '19 de setembre', amt: 95, earn: 1 }, { i: 'bus', t: 'Recàrrega de transport públic', d: '18 de setembre', amt: -500, earn: 0 }, { i: 'walk', t: 'Fageda de Santa Fe del Montseny', d: '16 de setembre', amt: 140, earn: 1 }] };
  }
  const session = () => db.session;
  function cur() {
    const s = db.session; if (!s) return guestData || (guestData = sample('Convidat'));
    if (s.guest) return guestData || (guestData = sample('Convidat'));
    return db.data[s.email] || (db.data[s.email] = fresh('Usuari'));
  }
  async function register(o) {
    const email = norm(o.email);
    if (isDemo(email) || db.users[email]) return { ok: false, err: 'exists' };
    const salt = Math.random().toString(36).slice(2, 10);
    db.users[email] = { name: o.name.trim(), salt, hash: await digest(o.pass, salt), created: Date.now() };
    db.data[email] = fresh(o.name.trim()); db.session = { email }; save(); return { ok: true };
  }
  async function login(emailIn, pass) {
    const email = norm(emailIn);
    if (isDemo(email)) { if (pass !== DEMO.pass) return { ok: false, err: 'pass' }; if (!db.data[DEMO.email]) db.data[DEMO.email] = sample(DEMO.name); db.session = { email: DEMO.email }; save(); return { ok: true }; }
    const u = db.users[email]; if (!u) return { ok: false, err: 'nouser' };
    if (await digest(pass, u.salt) !== u.hash) return { ok: false, err: 'pass' };
    if (!db.data[email]) db.data[email] = fresh(u.name);
    db.session = { email }; save(); return { ok: true };
  }
  function guest() { guestData = sample('Convidat'); db.session = { guest: true }; save(); }
  function logout() { db.session = null; guestData = null; save(); }
  const isGuest = () => !!(db.session && db.session.guest);
  const email = () => (db.session && db.session.email) || null;
  /* moviments de punts */
  function add(amt, t, icon) { const d = cur(); d.points = Math.max(0, d.points + amt); d.history.unshift({ i: icon || (amt >= 0 ? 'bolt' : 'gift'), t, d: today(), amt, earn: amt >= 0 ? 1 : 0 }); save(); }
  function finishRoute(a, o) {
    const d = cur(); o = o || {}; const pts = o.pts != null ? o.pts : a.pts;
    d.km = Math.round((d.km + a.km) * 10) / 10; d.min = (d.min || 0) + Math.round(a.h * 60); d.up = (d.up || 0) + a.up; d.checkins += o.checkins || 0; d.places += 1;
    if (o.co2) d.co2 = Math.round((d.co2 + o.co2) * 10) / 10;
    d.routes.unshift({ id: a.id, t: a.t, d: today(), ts: Date.now(), km: a.km, up: a.up, pts, min: Math.round(a.h * 60) });
    add(pts, a.t, a.act === 'Bici' ? 'bike' : 'walk');
  }
  function redeem(r) {
    const d = cur(); if (d.points < r.p) return null;
    const code = 'VAL-' + Math.random().toString(36).slice(2, 6).toUpperCase() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
    d.coupons.unshift({ id: r.id, t: r.t, p: r.p, code, d: today() });
    add(-r.p, r.t, r.i); return code;
  }
  /* esborrar el compte i les dades d'aquest dispositiu */
  function deleteAccount() { const e = email(); if (!e) return; if (!isDemo(e)) delete db.users[e]; delete db.data[e]; db.session = null; save(); }
  function users() { return db.users; }
  return { deleteAccount, users, DEMO, session, cur, register, login, guest, logout, isGuest, email, isDemo, save, add, finishRoute, redeem, today };
})();

/* ---- ui.js ---- */
/* ===================== Valia · ajudes de dibuix, estat de l'app i mascota a la interfície ===================== */
(function () {
  const css = Object.keys(PH).map(k => `.ios .bg-${k},.bg-${k}{background-image:url("${PH[k]}")}`).join('');
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
})();
/* icones (Lucide, ISC): traç 2 fins a 20 px i 1,75 a partir de 22 px */
function ICN(n, s, c) { s = s || 22; if (!LUCIDE[n]) console.warn('Icona inexistent: ' + n); return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="${c || 'currentColor'}" stroke-width="${s <= 20 ? 2 : 1.75}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${LUCIDE[n] || ''}</svg>`; }
/* forats de foto: cada imatge porta el nom de fitxer i la proporció (es veuen amb ?fotos a l'adreça) */
const slotAt = k => (typeof SLOTS !== 'undefined' && SLOTS[k]) ? ` data-slot="${k}.jpg · ${SLOTS[k].r}"` : '';
const photo = (k, st, pos, extra) => `<div class="pimg cc bg-${k}"${slotAt(k)} style="${st || ''};background-position:${pos || '50% 50%'}" ${extra || 'aria-hidden="true"'}></div>`;
const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const SBAR = '<span class="sb-t">9:41</span><span class="sb-i"><svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor"/><rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="currentColor"/><rect x="10" y="3" width="3" height="9" rx="1" fill="currentColor"/><rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor"/></svg><svg width="17" height="12" viewBox="0 0 17 12" aria-hidden="true"><path d="M8.5 2.3c2.3 0 4.4.9 6 2.4l1-1.1A10.4 10.4 0 0 0 8.5.8 10.4 10.4 0 0 0 1.5 3.6l1 1.1a8.8 8.8 0 0 1 6-2.4zm0 3.6c1.3 0 2.5.5 3.4 1.3l1-1.1a7.2 7.2 0 0 0-8.8 0l1 1.1c.9-.8 2.1-1.3 3.4-1.3zm0 3.5c.6 0 1.1.2 1.5.6L8.5 11.5 7 10c.4-.4.9-.6 1.5-.6z" fill="currentColor"/></svg><svg width="27" height="13" viewBox="0 0 27 13" aria-hidden="true"><rect x=".5" y=".5" width="22" height="12" rx="3.5" fill="none" stroke="currentColor" opacity=".45"/><rect x="2" y="2" width="19" height="9" rx="2.2" fill="currentColor"/><path d="M24 4.5v4c.8-.3 1.5-1.1 1.5-2s-.7-1.7-1.5-2z" fill="currentColor" opacity=".5"/></svg></span>';

/* ---------- mapa estilitzat (il·lustratiu, el de la v4) ---------- */
const smp = pts => { let d = `M${pts[0][0]} ${pts[0][1]}`; for (let i = 1; i < pts.length - 1; i++) { const [x, y] = pts[i], [x2, y2] = pts[i + 1]; d += ` Q${x} ${y} ${(x + x2) / 2} ${(y + y2) / 2}`; } const l = pts[pts.length - 1]; return d + ` L${l[0]} ${l[1]}`; };
const ROUTES = { caldes: [[.14, .86], [.22, .72], [.17, .56], [.3, .47], [.42, .52], [.5, .38], [.62, .3], [.74, .36], [.82, .2]], vall: [[.2, .85], [.3, .7], [.25, .55], [.4, .45], [.55, .5], [.62, .35], [.78, .3]] };
function mapSVG(w, h, o) {
  o = o || {};
  const s = o.seed || 1, tx = -((s * 41) % 70), ty = -((s * 67) % 70), rt = o.route ? ROUTES[o.route] : null;
  const P = (rt || []).map(([x, y]) => [+(x * w).toFixed(1), +(y * h).toFixed(1)]);
  const pins = (o.pins || []).map(p => {
    const x = p[0] * w, y = p[1] * h, t = p[2], lab = p[3] ? ` data-pin="${p[3]}"` : '';
    if (t === 'poi') return `<g${lab}><circle cx="${x}" cy="${y}" r="13" fill="#0B0D0C" stroke="#fff" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="3.5" fill="#fff"/></g>`;
    if (t === 'nat') return `<g${lab}><circle cx="${x}" cy="${y}" r="13" fill="#00A86B" stroke="#fff" stroke-width="2.5"/><circle cx="${x}" cy="${y}" r="3.5" fill="#fff"/></g>`;
    if (t === 'start') return `<circle cx="${x}" cy="${y}" r="7" fill="#fff" stroke="#0B0D0C" stroke-width="3"/>`;
    if (t === 'end') return `<circle cx="${x}" cy="${y}" r="10" fill="#0B0D0C" stroke="#fff" stroke-width="3"/><circle cx="${x}" cy="${y}" r="3.5" fill="#fff"/>`;
    if (t === 'sel') return `<g${lab}><circle cx="${x}" cy="${y}" r="16" fill="#00A86B" stroke="#fff" stroke-width="3.5"/><circle cx="${x}" cy="${y}" r="4.5" fill="#fff"/></g>`;
    if (t === 'chk') return `<circle cx="${x}" cy="${y}" r="11" fill="#fff" stroke="#00A86B" stroke-width="3"/><path d="M${x - 4.5} ${y}l3 3 6-6" fill="none" stroke="#00754A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (t === 'off') return `<circle cx="${x}" cy="${y}" r="22" fill="rgba(215,0,21,.16)"/><circle cx="${x}" cy="${y}" r="8" fill="#0B0D0C" stroke="#fff" stroke-width="3.5"/>`;
    return `<circle cx="${x}" cy="${y}" r="20" fill="rgba(0,168,107,.25)"/><circle cx="${x}" cy="${y}" r="8" fill="#00A86B" stroke="#fff" stroke-width="3.5"/>`;
  }).join('');
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="${w}" height="${h}" fill="#EEF0F1"/>
  <g transform="translate(${tx} ${ty}) scale(1.3)"><g fill="#DDEBE2"><path d="M-20 ${h * .1}Q${w * .25} -10 ${w * .4} ${h * .14}T${w * .3} ${h * .4}Q${w * .1} ${h * .44} -20 ${h * .36}Z"/><path d="M${w * .6} ${h * .66}Q${w * .8} ${h * .5} ${w + 20} ${h * .6}V${h + 20}H${w * .5}Q${w * .5} ${h * .78} ${w * .6} ${h * .66}Z"/></g>
  <g fill="none" stroke="#D9DEDD" stroke-width="1.2"><ellipse cx="${w * .28}" cy="${h * .26}" rx="${w * .2}" ry="${h * .14}"/><ellipse cx="${w * .28}" cy="${h * .26}" rx="${w * .13}" ry="${h * .09}"/><ellipse cx="${w * .75}" cy="${h * .7}" rx="${w * .18}" ry="${h * .12}"/></g>
  <ellipse cx="${w * .74}" cy="${h * .24}" rx="${w * .12}" ry="${h * .06}" fill="#CFE3EC"/><path d="M${w * .9} -20C${w * .72} ${h * .3} ${w * .92} ${h * .5} ${w * .62} ${h + 20}" fill="none" stroke="#CFE3EC" stroke-width="6" stroke-linecap="round"/>
  <path d="M-20 ${h * .72}C${w * .3} ${h * .55} ${w * .5} ${h * .82} ${w + 20} ${h * .6}" fill="none" stroke="#E1E4E2" stroke-width="7.5"/><path d="M-20 ${h * .72}C${w * .3} ${h * .55} ${w * .5} ${h * .82} ${w + 20} ${h * .6}" fill="none" stroke="#fff" stroke-width="5"/>
  <path d="M${w * .2} -20C${w * .32} ${h * .3} ${w * .14} ${h * .6} ${w * .36} ${h + 20}" fill="none" stroke="#E1E4E2" stroke-width="6.5"/><path d="M${w * .2} -20C${w * .32} ${h * .3} ${w * .14} ${h * .6} ${w * .36} ${h + 20}" fill="none" stroke="#fff" stroke-width="4"/></g>
  ${o.label ? `<text x="${w * .08}" y="${h * .13}" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#5A615D">${o.label}</text>` : ''}
  ${P.length ? `<path d="${smp(P)}" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><path d="${smp(P)}" fill="none" stroke="#00A86B" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>` : ''}${o.extra || ''}${pins}</svg>`;
}
let _g = 0;
const elev = (hgt) => {
  hgt = hgt || 72; const y = [.72, .66, .5, .58, .38, .46, .26, .34, .24, .42, .36, .54, .6, .7], Wd = 360, Hh = hgt, g = 'eg' + (++_g);
  const pts = y.map((v, i) => [+(i * Wd / (y.length - 1)).toFixed(1), +(v * Hh).toFixed(1)]); const d = 'M' + pts.map(p => p.join(' ')).join(' L');
  return `<svg viewBox="0 0 ${Wd} ${Hh + 18}" width="100%" height="${Hh + 18}" role="img" aria-label="Perfil d'alçada: de 0 a 5,4 km, desnivell positiu de 82 m"><defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#00A86B" stop-opacity=".28"/><stop offset="1" stop-color="#00A86B" stop-opacity=".04"/></linearGradient></defs><path d="${d} L${Wd} ${Hh} L0 ${Hh}Z" fill="url(#${g})"/><path d="${d}" fill="none" stroke="#00A86B" stroke-width="2.4" stroke-linejoin="round"/><g font-family="Inter,system-ui,sans-serif" font-size="13" fill="#636366"><text x="0" y="${Hh + 15}">0 km</text><text x="${Wd}" y="${Hh + 15}" text-anchor="end">5,4 km</text></g></svg>`;
};
const qrSVG = seed => { let x = seed || 12345; const r = () => { x = (x * 1103515245 + 12345) & 0x7fffffff; return x / 0x7fffffff; }; let o = ''; const n = 21, c = 6;
  const fin = (a, b) => `<rect x="${a * c}" y="${b * c}" width="${7 * c}" height="${7 * c}" fill="#0B0D0C"/><rect x="${(a + 1) * c}" y="${(b + 1) * c}" width="${5 * c}" height="${5 * c}" fill="#fff"/><rect x="${(a + 2) * c}" y="${(b + 2) * c}" width="${3 * c}" height="${3 * c}" fill="#0B0D0C"/>`;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const inF = (i < 8 && j < 8) || (i > 12 && j < 8) || (i < 8 && j > 12); if (!inF && r() > .5) o += `<rect x="${i * c}" y="${j * c}" width="${c}" height="${c}" fill="#0B0D0C"/>`; }
  return `<svg viewBox="0 0 ${n * c} ${n * c}" width="132" height="132" role="img" aria-label="Codi QR del cupó (exemple)">${o}${fin(0, 0)}${fin(14, 0)}${fin(0, 14)}</svg>`; };

/* ---------- peces d'interfície ---------- */
const chip = (t, on, attrs) => `<button type="button" class="chip" aria-pressed="${on ? 'true' : 'false'}" data-t="${esc(t)}" ${attrs || ''}><span>${on ? ICN('check', 16) : ''}${t}</span></button>`;
const sw = (on, label) => `<button type="button" class="sw" role="switch" aria-checked="${on ? 'true' : 'false'}" aria-label="${esc(label)}"></button>`;
const seg = (items, sel, id) => `<div class="segc" role="tablist" ${id ? `data-seg="${id}"` : ''}>${items.map((t, i) => `<button type="button" role="tab" aria-selected="${i === sel ? 'true' : 'false'}">${t}</button>`).join('')}</div>`;
const navIcon = (n, label, act, o) => `<button type="button" class="navbtn press" ${act ? `data-act="${act}"` : ''} aria-label="${esc(label)}">${o && o.glass ? `<span class="gl">${ICN(n, 20)}</span>` : ICN(n, 24)}</button>`;
/* fila de llista agrupada: botó amb fletxa o, si porta interruptor, fila no interactiva (no es poden niar botons) */
const grow = (ic, cls, t, v, o) => { const isSw = !!(o && o.sw != null), tg = isSw ? 'div' : 'button'; return `<${tg} ${isSw ? '' : 'type="button"'} class="grow ic ${isSw ? 'swrow' : ''}" ${o && o.act ? `data-act="${o.act}"` : ''}><span class="gic ${cls || ''}">${ICN(ic, 18, '#fff')}</span><span class="f1 bd">${t}${o && o.nou ? ' <span class="tag eco" style="margin-left:4px">Nou</span>' : ''}</span>${v ? `<span class="gv">${v}</span>` : ''}${isSw ? sw(o.sw, t) : `<span class="chev">${ICN('chevR', 18)}</span>`}</${tg}>`; };
const metaLine = a => `<div class="meta">${a.join(' · ')}</div>`;

/* ---------- la mascota a la interfície: aparicions, regles i indicadors de càrrega ---------- */
const MascotUI = {
  seen: new Set(),            // pantalles on ja ha aparegut en aquesta sessió (fora del xat)
  log: [],
  canShow(key) { return !this.seen.has(key); },
  mark(key) { this.seen.add(key); this.log.push(key); },
  reset() { this.seen.clear(); this.log = []; },
  active: [],
  closeAll() { this.active.splice(0).forEach(a => a.close(true)); },
  announce(text) { const l = IOS.$('#ios-live', IOS.app); if (l) { l.textContent = ''; setTimeout(() => { l.textContent = text; }, 30); } },
  /* treu el cap per un lateral; només en una franja lliure (sense botons ni text) */
  peek(o) {
    if (!this.canShow(o.key)) return null;
    const lay = IOS.layers.peek, rm = IOS.rm();
    const wrap = IOS.h(`<div class="peek" style="right:0;top:${o.top}px;visibility:hidden" role="group" aria-label="Missatge de l'assistent">
      <button type="button" class="bubble cc pk-b ${o.dark ? 'dk' : ''}" style="margin-bottom:${o.bubbleLift || 38}px;text-align:left" aria-label="${esc('Assistent: ' + o.text + ' Tancar el missatge.')}"><span>${o.text}</span><i class="pk-xi" aria-hidden="true">${ICN('x', 12)}</i></button>
      <div class="pk-m" style="margin-right:-18px"></div></div>`);
    lay.appendChild(wrap);
    const m = Mascot.create(wrap.querySelector('.pk-m'), { size: o.size || 96, state: o.state || 'saludant', cls: o.white ? 'white' : '', label: 'Assistent' });
    if (o.white) m.el.style.color = '#fff';
    const mel = wrap.querySelector('.pk-m'), bub = wrap.querySelector('.pk-b');
    mel.style.transform = 'rotate(-8deg)';
    // ha de cabre sencera dins la franja lliure (o.fit); si no hi cap, no surt
    if (o.fit) {
      const f = o.fit; let r = IOS.rectIn(wrap), br = IOS.rectIn(bub);
      if (f.left != null && br.x < f.left) { bub.style.maxWidth = Math.max(150, br.w - (f.left - br.x)) + 'px'; r = IOS.rectIn(wrap); br = IOS.rectIn(bub); }
      const bandH = f.bottom - f.top;
      if (r.h > bandH || (f.left != null && br.x < f.left - 1)) { m.destroy(); wrap.remove(); return null; }
      wrap.style.top = Math.round(f.top + (bandH - r.h) / 2) + 'px';
    }
    wrap.style.visibility = '';
    this.mark(o.key); this.announce('Assistent: ' + o.text);
    if (rm) { IOS.fade(wrap, 0, 1, 260); }
    else {
      IOS.anim(mel, [{ transform: 'translateX(120%) rotate(-18deg)' }, { transform: 'translateX(0) rotate(-8deg)' }], Spring.spring(0.5, 0.62));
      IOS.anim(bub, [{ opacity: 0, transform: 'scale(.6)', transformOrigin: '100% 100%' }, { opacity: 1, transform: 'scale(1)', transformOrigin: '100% 100%' }], Spring.spring(0.42, 0.66), { delay: 220 });
    }
    let gone = false, timer = setTimeout(() => close(), o.duration || 6500);
    const close = (fast) => {
      if (gone) return; gone = true; clearTimeout(timer); const ix = MascotUI.active.indexOf(api); if (ix >= 0) MascotUI.active.splice(ix, 1);
      if (fast) { m.destroy(); wrap.remove(); return; }
      const p = IOS.rm() ? IOS.fade(wrap, 1, 0, 200) : Promise.all([IOS.anim(mel, [{ transform: 'translateX(0) rotate(-8deg)' }, { transform: 'translateX(130%) rotate(-18deg)' }], Spring.spring(0.36, 0.95)), IOS.fade(bub, 1, 0, 160)]);
      p.then(() => { m.destroy(); wrap.remove(); o.onClose && o.onClose(); });
    };
    wrap.addEventListener('click', e => { if (e.target.closest('.pk-b,.pk-m')) close(); });
    // lliscar cap a fora per tancar
    let sx = null;
    wrap.addEventListener('pointerdown', e => { sx = e.clientX; wrap.setPointerCapture(e.pointerId); });
    wrap.addEventListener('pointermove', e => { if (sx == null) return; const dx = Math.max(0, e.clientX - sx); wrap.style.transform = `translateX(${dx}px)`; });
    wrap.addEventListener('pointerup', e => { if (sx == null) return; const dx = e.clientX - sx; sx = null; if (dx > 40) close(); else wrap.style.transform = ''; });
    const api = { close, el: wrap, mascot: m }; MascotUI.active.push(api);
    return api;
  },
  /* aparicions dins del contingut (estat buit, celebració): també es poden tancar tocant o lliscant */
  dismissible(el, m, o) {
    o = o || {}; let sx = null, gone = false;
    el.setAttribute('role', 'button'); el.setAttribute('tabindex', '0'); el.setAttribute('aria-label', o.label || "Tancar el missatge de l'assistent");
    el.style.cursor = 'pointer'; el.style.touchAction = 'pan-y';
    const go = () => {
      if (gone) return; gone = true;
      const p = IOS.rm() ? IOS.fade(el, 1, 0, 200) : IOS.anim(el, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(36px) scale(.92)' }], Spring.spring(0.34, 1));
      p.then(() => { if (m) m.destroy(); if (o.onGone) o.onGone(); else el.remove(); });
    };
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    el.addEventListener('pointerdown', e => { sx = e.clientX; });
    el.addEventListener('pointerup', e => { if (sx != null && Math.abs(e.clientX - sx) > 40) go(); sx = null; });
    return { close: go };
  },
  /* indicador de càrrega: la mascota camina en lloc d'un spinner (sense límit: és un indicador, no un missatge) */
  loader(host, text, o) {
    o = o || {};
    const el = IOS.h(`<div class="loadrow" role="status" aria-live="polite"><span class="ml"></span><span>${text}</span></div>`);
    host.appendChild(el);
    const m = Mascot.create(el.querySelector('.ml'), { size: o.size || 56, state: 'buscant', label: 'Assistent' });
    return { el, done() { m.destroy(); el.remove(); } };
  }
};

/* ---------- l'app: escenes, pestanyes, estat i navegació directa ---------- */
const App = (function () {
  const st = { guest: false, offline: false, server: false, redeemed: 0, downloaded: false, filters: 0, chat: [], newUser: false };
  // punts i desats: es llegeixen i es desen al compte actiu (Store)
  Object.defineProperty(st, 'points', { get: () => Store.cur().points, set: v => { Store.cur().points = v; Store.save(); }, enumerable: true });
  Object.defineProperty(st, 'saved', { get: () => Store.cur().saved, set: v => { Store.cur().saved = v; Store.save(); }, enumerable: true });
  const TABS = [
    { k: 'xat', label: 'Xat', icon: 'sparkle', root: 'chat' },
    { k: 'explorar', label: 'Explorar', icon: 'compass', root: 14 },
    { k: 'recompenses', label: 'Recompenses', icon: 'gift', root: 31 },
    { k: 'perfil', label: 'Perfil', icon: 'user', root: 22 }
  ];
  const stacks = {}; let onb = null, cur = 'xat', scene = 'load', hooks = [];
  const $ = IOS.$;
  function buildMain(o) {
    o = o || {};
    const sc = IOS.scenes.main; sc.innerHTML = '';
    TABS.forEach(t => { const host = IOS.h(`<div class="stack" data-tab="${t.k}" ${t.k === cur ? '' : 'hidden'}></div>`); sc.appendChild(host); stacks[t.k] = new IOS.Stack(host, { tab: t.k }); });
    const tb = IOS.h(`<nav class="tabbar" role="tablist" aria-label="Navegació principal">${TABS.map(t => `<button type="button" role="tab" data-tab="${t.k}" aria-selected="${t.k === cur}" aria-label="${t.label}">${t.k === 'xat' ? `<span class="ti"><span class="tav" data-tabmasc></span></span>` : `<span class="ti">${ICN(t.icon, 26)}</span>`}<span>${t.label}</span></button>`).join('')}</nav>`);
    sc.appendChild(tb); tb._hidden = false;
    const tm = Mascot.create(tb.querySelector('[data-tabmasc]'), { size: 26, view: 'avatar', state: 'repos', still: true, label: 'Xat amb l\'assistent' });
    tm.el.style.color = '#fff'; tm.svg.setAttribute('aria-hidden', 'true');
    tb.addEventListener('click', e => { const b = e.target.closest('button[data-tab]'); if (b) switchTab(b.dataset.tab, { tap: true }); });
    TABS.forEach(t => stacks[t.k].push(t.root, Object.assign(t.k === 'xat' ? { noGreet: !!o.noGreet } : {}, (o.params && o.params[t.k]) || {}), { instant: true }));
  }
  function switchTab(k, o) {
    o = o || {};
    if (k === cur) { if (o.tap && stacks[k].pages.length > 1) stacks[k].popTo(1); else if (o.tap) { const sc = stacks[k].top.scroll; sc && sc.scrollTo({ top: 0, behavior: IOS.rm() ? 'auto' : 'smooth' }); } return; }
    const prev = cur; cur = k; MascotUI.closeAll();
    IOS.$$('.stack[data-tab]', IOS.scenes.main).forEach(s => { s.hidden = s.dataset.tab !== k; });
    IOS.$$('.tabbar button', IOS.scenes.main).forEach(b => b.setAttribute('aria-selected', b.dataset.tab === k));
    const b = IOS.$(`.tabbar button[data-tab="${k}"] .ti`, IOS.scenes.main);
    if (b && !IOS.rm()) IOS.anim(b, [{ transform: 'scale(.78)' }, { transform: 'scale(1)' }], IOS.S.micro);
    const top = stacks[k].top; if (top) { if (!IOS.rm()) IOS.anim(top.el, [{ opacity: 0.4, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], IOS.S.soft); top.d.reappear && top.d.reappear(top.el, top.params, top); onPage(top); }
  }
  function showScene(name) {
    scene = name;
    Object.entries(IOS.scenes).forEach(([k, el]) => { el.hidden = k !== name; });
    syncStatus();
  }
  function activeScene() { return IOS.scenes[scene]; }
  function topPage() { const m = IOS.Modal.top; if (m) return m.stack.top; if (scene === 'main') return stacks[cur] && stacks[cur].top; if (scene === 'onb') return onb && onb.top; return null; }
  function onPage(pg) { syncStatus(); syncTabbar(pg); syncOffline(); vo(); hooks.forEach(f => f(pg)); }
  function syncStatus() {
    const sb = IOS.statusEl; if (!sb) return;
    let tone = IOS.toneOverride;
    if (!tone) { const pg = topPage(); if (scene === 'load') tone = 'light'; else if (pg) { const scrolled = pg.nav && pg.nav.classList.contains('scrolled'); tone = pg.d.sb === 'light' && !scrolled ? 'light' : (pg.d.sb === 'light-always' ? 'light' : 'dark'); } else tone = 'dark'; }
    sb.style.color = tone === 'light' ? '#fff' : '#0B0D0C';
    const hi = IOS.app.querySelector('.homeind'); if (hi) hi.style.color = tone === 'light' ? '#fff' : '#0B0D0C';
  }
  function vo() { hooks.forEach(f => f(null, 'vo')); }
  /* arrencades */
  function startMain(o) {
    o = o || {}; IOS.Modal.clearAll(); IOS.Keyboard.hide(); MascotUI.closeAll();
    st.guest = !!o.guest; cur = o.tab || 'xat';
    buildMain(o); showScene('main'); syncOffline(); onPage(topPage());
  }
  function startOnboarding(first, params) {
    IOS.Modal.clearAll(); IOS.Keyboard.hide(); MascotUI.closeAll();
    const sc = IOS.scenes.onb; sc.innerHTML = '<div class="stack"></div>';
    onb = new IOS.Stack(sc.firstElementChild, { tab: 'onb' });
    onb.push(first || 2, params || {}, { instant: true }); showScene('onb'); syncOffline(); onPage(onb.top);
  }
  /* indicador «Sense connexió»: just a sota de la barra de navegació (al xat ja ho diu la capçalera) */
  function syncOffline() {
    let pill = IOS.app.querySelector('.offpill');
    const pg = topPage(), inChat = !!(pg && pg.chat && !IOS.Modal.top);
    if (st.offline && scene === 'main' && !inChat) {
      if (!pill) { pill = IOS.h(`<div class="offpill" role="status">${ICN('wifioff', 14, '#fff')} Sense connexió</div>`); IOS.app.appendChild(pill); }
      // a baix, per sobre de la barra de pestanyes o de la barra d'accions: no tapa títols ni botons
      const bb = pg && pg.el.querySelector(':scope > .bbar'), tb = IOS.app.querySelector('#sc-main > .tabbar');
      const above = bb ? IOS.H - IOS.rectIn(bb).y : (tb && !tb._hidden ? 83 : 34);
      pill.style.top = 'auto'; pill.style.bottom = (above + 10) + 'px';
    }
    else if (pill) pill.remove();
  }
  function setOffline(v) { st.offline = !!v; syncOffline(); const pg = stacks.xat && stacks.xat.top; if (pg && pg.chat) { ChatAPI.render(pg.chat, !st.chat.length); } }
  function syncTabbar(pg) {
    if (scene !== 'main') return; const tb = IOS.app.querySelector('#sc-main > .tabbar'); if (!tb) return;
    const top = stacks[cur] && stacks[cur].top, hide = !!(top && top.d.tabbar === false);
    if (tb._hidden === hide) return; tb._hidden = hide;
    if (IOS.rm()) { tb.style.transform = hide ? 'translateY(100%)' : ''; return; }
    IOS.anim(tb, [{ transform: hide ? 'translateY(0)' : 'translateY(100%)' }, { transform: hide ? 'translateY(100%)' : 'translateY(0)' }], IOS.S.push);
  }
  /* funcions que demanen compte: en mode convidat, avís amb «Crear compte» */
  function needAccount(what) {
    if (!Store.isGuest()) return false;
    IOS.Alert.show({ title: 'Cal un compte', msg: `Per ${what || 'fer-ho'} has de crear un compte. És gratuït i es desa en aquest dispositiu.`, buttons: [{ t: 'Ara no' }, { t: 'Crear compte', style: 'pref', on: () => Flow.toOnboarding() }] });
    return true;
  }
  function logout() {
    IOS.Alert.show({ title: 'Vols tancar la sessió?', msg: Store.isGuest() ? 'Sortiràs del mode convidat.' : 'Les teves dades es queden desades en aquest dispositiu.', buttons: [{ t: 'Cancel·la' }, { t: 'Tancar la sessió', style: 'red', on: () => { Store.logout(); MascotUI.reset(); st.chat = []; startOnboarding(2); } }] });
  }
  return {
    needAccount, logout,
    st, TABS, stacks, buildMain, switchTab, showScene, activeScene, topPage, onPage, syncStatus, vo, startMain, startOnboarding, setOffline, syncOffline,
    get onb() { return onb; }, get tab() { return cur; }, get scene() { return scene; }, hook: f => hooks.push(f),
    stack(k) { return stacks[k || cur]; }
  };
})();

/* ---- data.js ---- */
/* ===================== Valia · catàleg d'activitats (dades d'exemple) =====================
   Llocs reals del Vallès Oriental. Durades, distàncies i desnivells: orientatius (dades d'exemple).
   img: foto provisional del prototip (composició feta per programa) o null → miniatura de mapa. */
const ACTS = [
  { id: 'caldes', t: 'Itinerari termal de Caldes', mun: 'Caldes de Montbui', ty: ['Cultural', 'Història'], act: 'A peu', dif: 'Fàcil', h: 1.5, km: 5.4, up: 82, circ: true, fam: true, gos: true, tp: true, tpTx: 'Bus interurbà fins a Caldes de Montbui', img: 'termes', pos: '50% 60%', route: 'caldes', seed: 5, ll: [41.6326, 2.1668],
    desc: "Passeig pel nucli antic de la primera vila termal de Catalunya: les termes romanes, la Font del Lleó i els carrers on encara brolla l'aigua calenta.", poi: 'Termes romanes de Caldes de Montbui', kw: 'caldes montbui termal termes aigua font lleo' },
  { id: 'fai', t: 'Sant Miquel del Fai', mun: 'Bigues i Riells del Fai', ty: ['Natura', 'Història'], act: 'A peu', dif: 'Difícil', h: 2, km: 4.1, up: 190, circ: false, fam: false, gos: false, tp: false, img: 'smfai', pos: '50% 55%', route: 'vall', seed: 7, ll: [41.7166, 2.1925],
    desc: "El monestir penjat a la cinglera i els salts d'aigua del Tenes i del Rossinyol. Camí amb trams estrets i graons.", poi: 'Monestir de Sant Miquel del Fai', kw: 'sant miquel fai salt aigua cascada monestir cingles' },
  { id: 'gallecs', t: 'Gallecs en bicicleta', mun: 'Mollet del Vallès', ty: ['Natura'], act: 'Bici', dif: 'Fàcil', h: 1.2, km: 12, up: 40, circ: true, fam: true, gos: true, tp: true, tpTx: 'Tren de Rodalies fins a Mollet', img: 'gallecs', pos: '50% 40%', route: 'vall', seed: 3, ll: [41.5603, 2.1987],
    desc: "Camins planers entre camps de conreu ecològic a l'Espai Rural de Gallecs, un pulmó agrícola entre ciutats.", poi: 'Espai Rural de Gallecs', kw: 'gallecs bici bicicleta camps agricola mollet' },
  { id: 'fageda', t: 'Fageda de Santa Fe del Montseny', mun: 'Fogars de Montclús', ty: ['Natura'], act: 'A peu', dif: 'Fàcil', h: 1.5, km: 4.5, up: 120, circ: true, fam: true, gos: true, tp: false, img: 'fageda', pos: '50% 55%', route: 'caldes', seed: 9, ll: [41.7766, 2.4626],
    desc: "Volta suau pel faig del Montseny al voltant de l'embassament de Santa Fe. A la tardor, els colors són espectaculars.", poi: 'Pla de Santa Fe del Montseny', kw: 'fageda montseny santa fe faig tardor bosc' },
  { id: 'turo', t: "Turó de l'Home des de Santa Fe", mun: 'Fogars de Montclús', ty: ['Natura'], act: 'A peu', dif: 'Difícil', h: 4, km: 11, up: 620, circ: false, fam: false, gos: true, tp: false, img: 'fageda', pos: '30% 30%', route: 'vall', seed: 11, ll: [41.7769, 2.4359],
    desc: 'Pujada al cim més alt del Montseny (1.706 m) entre fagedes i avetoses, amb vistes a tot el Vallès.', poi: "Turó de l'Home", kw: 'turo home montseny cim muntanya pujada' },
  { id: 'calma', t: 'Pla de la Calma i Tagamanent', mun: 'Tagamanent', ty: ['Natura', 'Història'], act: 'A peu', dif: 'Moderada', h: 3, km: 9, up: 400, circ: true, fam: false, gos: true, tp: true, tpTx: 'Tren R3 fins a Figaró', img: null, route: 'vall', seed: 13, ll: [41.7476, 2.2903],
    desc: "Altiplà de pastures del Montseny i el turó de Tagamanent, amb l'església i les restes del castell al capdamunt.", poi: 'Església de Santa Maria de Tagamanent', kw: 'calma tagamanent montseny castell figaro' },
  { id: 'porxada', t: 'Granollers: la Porxada i el mercat', mun: 'Granollers', ty: ['Cultural', 'Història', 'Gastronomia'], act: 'A peu', dif: 'Fàcil', h: 1, km: 3.5, up: 20, circ: true, fam: true, gos: true, tp: true, tpTx: 'Tren R2 Nord i R3 fins a Granollers', img: null, route: 'caldes', seed: 15, ll: [41.6079, 2.2877],
    desc: 'La Porxada del segle XVI, el centre històric i el mercat setmanal, amb parades de productors de proximitat.', poi: 'La Porxada de Granollers', kw: 'granollers porxada mercat centre historic km0 productors gastronomia' },
  { id: 'congost', t: 'Riu Congost en bici', mun: 'Granollers', ty: ['Natura'], act: 'Bici', dif: 'Fàcil', h: 1, km: 14, up: 30, circ: false, fam: true, gos: false, tp: true, tpTx: 'Tornada amb tren des de Montmeló', img: null, route: 'vall', seed: 17, ll: [41.5885, 2.2705],
    desc: 'Camí de ribera al llarg del Congost, de Granollers fins a Montmeló, planer i sense trànsit.', poi: 'Riu Congost', kw: 'congost riu bici granollers montmelo ribera' },
  { id: 'cardedeu', t: 'Cardedeu i el Museu Tomàs Balvey', mun: 'Cardedeu', ty: ['Cultural', 'Història'], act: 'A peu', dif: 'Fàcil', h: 1, km: 3, up: 25, circ: true, fam: true, gos: true, tp: true, tpTx: 'Tren R2 Nord fins a Cardedeu', img: null, route: 'caldes', seed: 19, ll: [41.6393, 2.3577],
    desc: "Passeig pel centre de Cardedeu, les cases d'estiueig i el Museu-Arxiu Tomàs Balvey, amb una antiga farmàcia.", poi: 'Museu-Arxiu Tomàs Balvey', kw: 'cardedeu museu balvey modernisme farmacia' },
  { id: 'megalits', t: 'Ruta megalítica de la Roca', mun: 'La Roca del Vallès', ty: ['Història', 'Natura'], act: 'A peu', dif: 'Moderada', h: 2.5, km: 8, up: 280, circ: true, fam: true, gos: true, tp: false, img: null, route: 'vall', seed: 21, ll: [41.5859, 2.3433],
    desc: 'El dolmen de Céllecs i la Pedra de les Orenetes, amb gravats prehistòrics, per la serralada de Marina.', poi: 'Dolmen de Céllecs', kw: 'roca dolmen cellecs orenetes megalit prehistoria' },
  { id: 'llinars', t: 'Castell Vell de Llinars', mun: 'Llinars del Vallès', ty: ['Història', 'Natura'], act: 'A peu', dif: 'Moderada', h: 2, km: 6, up: 250, circ: true, fam: true, gos: true, tp: true, tpTx: 'Tren R2 Nord fins a Llinars del Vallès', img: null, route: 'caldes', seed: 23, ll: [41.6439, 2.4120],
    desc: 'Pujada a les restes del castell medieval, dins del parc del Montnegre i el Corredor, amb vistes al Montseny.', poi: 'Castell Vell de Llinars', kw: 'llinars castell montnegre corredor medieval' },
  { id: 'puig', t: 'Puiggraciós i els Cingles de Bertí', mun: 'Bigues i Riells del Fai', ty: ['Natura', 'Història'], act: 'Córrer', dif: 'Moderada', h: 1.5, km: 9, up: 350, circ: true, fam: false, gos: true, tp: false, img: null, route: 'vall', seed: 25, ll: [41.6797, 2.2297],
    desc: 'Ruta de córrer per pistes i corriols fins al santuari de Puiggraciós, al peu dels Cingles de Bertí.', poi: 'Santuari de Puiggraciós', kw: 'puiggracios cingles berti corre corredors trail santuari' }
];
const fmtH = h => { const hh = Math.floor(h), mm = Math.round((h - hh) * 60); return mm ? `${hh} h ${String(mm).padStart(2, '0')}` : `${hh} h`; };
const fmtKm = k => String(k).replace('.', ',') + ' km';
ACTS.forEach(a => { const sk = 'ruta-' + a.id; a.slot = sk; a.img = (typeof PH !== 'undefined' && PH[sk]) ? sk : null; a.m = [fmtH(a.h), fmtKm(a.km), '+' + a.up + ' m']; a.sub = `${a.mun} · ${a.ty.join(', ')}`; a.pts = Math.round(40 + a.km * 6 + a.up / 10); });
const actById = id => ACTS.find(a => a.id === id) || ACTS[0];
/* miniatura: foto provisional o, si no n'hi ha, mapa estilitzat amb el traçat */
const actImg = (a, style, extra) => a.img
  ? `<div class="pimg cc bg-${a.img}"${slotAt(a.slot)} ${extra || ''} style="${style};background-position:${a.pos}"></div>`
  : `<div class="pimg cc mapthumb"${slotAt(a.slot)} ${extra || ''} style="${style}">${mapSVG(393, 220, { route: a.route, seed: a.seed, pins: [[.14, .86, 'start'], [.82, .2, 'end']] })}</div>`;

/* ---- scr_onb.js ---- */
/* ===================== Pantalles · primera vegada (2–10 i 36) ===================== */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const SLIDES = [
    { img: 'acces-1', h: 'Descobreix el Vallès que tens a tocar.', p: "Natura, cultura i història d'un territori que potser encara no coneixes." },
    { img: 'acces-2', h: "Mou-te a l'aire lliure, amb seny.", p: "Activitat física i turisme sostenible per gaudir del territori sense malmetre'l." },
    { img: 'acces-3', h: 'Una IA pròpia que coneix el territori.', p: "T'ajuda a descobrir què fer a prop de casa, a la teva manera." }
  ];
  /* indicadors com a forats al panell (v4/v5) */
  function maskFor(idx, Hh) {
    const w = [0, 1, 2].map(i => (i === idx ? 22 : 8)), gap = 10; let x = 196.5 - (w.reduce((a, b) => a + b) + gap * 2) / 2, sh = '';
    w.forEach((wi, i) => { sh += `<rect x="${x}" y="22" width="${wi}" height="8" rx="4" fill="#000" fill-opacity="${i === idx ? 1 : 0.55}"/>`; x += wi + gap; });
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='393' height='${Hh}' viewBox='0 0 393 ${Hh}'><defs><mask id='m'><rect width='393' height='${Hh}' fill='#fff'/>${sh}</mask></defs><rect width='393' height='${Hh}' fill='#000' mask='url(#m)'/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }
  window.ACCESS_MASK = maskFor;

  /* 2 · Accés: fotos de l'equip al carrusel i les tres entrades */
  SC[2] = {
    title: 'Accés', nav: false, cls: 'dark acc', sb: 'light-always', tabbar: false,
    render: () => `<div class="acc-car" data-car role="region" aria-label="Presentació: 3 diapositives">${SLIDES.map((s, i) => `<section class="acc-sl" aria-label="Diapositiva ${i + 1} de 3"><div class="pimg bg-${s.img}"${slotAt(s.img)} style="position:absolute;left:0;right:0;top:0;height:620px"></div><div class="acc-scrim"></div><div class="acc-dot"></div><div class="acc-tx"><h2>${s.h}</h2><p>${s.p}</p></div></section>`).join('')}</div>
      <div class="acc-top"><span class="acc-logo">${ValiaAnim.logoSVG({ variant: 'mono', size: 32, label: 'Valia' })}</span><span class="acc-wm">Valia</span></div>
      <div class="acc-pan"><div class="acc-in"><button type="button" class="btn" data-go="reg">Registra't</button><button type="button" class="btn out acc-md" data-go="login">Inicia sessió</button><button type="button" class="tbtn mut" data-go="guest">Entra com a convidat</button></div></div>
      <div class="sr" aria-live="polite" data-pos>Diapositiva 1 de 3</div>`,
    mount(el, p, pg) {
      const car = el.querySelector('[data-car]'), pan = el.querySelector('.acc-pan'), pos = el.querySelector('[data-pos]'); let last = -1;
      let ph = 281;
      const paint = i => { const m = maskFor(i, ph); pan.style.webkitMaskImage = m; pan.style.maskImage = m; };
      const upd = () => { const i = Math.max(0, Math.min(2, Math.round(car.scrollLeft / 393))); if (i === last) return; last = i; paint(i); pos.textContent = 'Diapositiva ' + (i + 1) + ' de 3'; };
      car.addEventListener('scroll', upd, { passive: true }); upd();
      const fitPan = () => { ph = Math.max(281, Math.round(pan.offsetHeight)); el.style.setProperty('--panh', ph + 'px'); paint(Math.max(0, last)); };
      const ro = new ResizeObserver(fitPan); ro.observe(pan); fitPan(); pg.cleanups.push(() => ro.disconnect());
      // els punts de la diapositiva: tocar a la dreta o a l'esquerra del panell també canvia de foto
      let auto = setInterval(() => { if (!el.isConnected) return clearInterval(auto); const n = (Math.max(0, last) + 1) % 3; car.scrollTo({ left: n * 393, behavior: IOS.rm() ? 'auto' : 'smooth' }); }, 5000);
      car.addEventListener('pointerdown', () => clearInterval(auto)); pg.cleanups.push(() => clearInterval(auto));
      el.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (!b) return; const g = b.dataset.go;
        if (g === 'reg') IOS.Modal.present(3, {}, { kind: 'dark' });
        if (g === 'login') IOS.Modal.present(6, {}, { kind: 'dark' });
        if (g === 'guest') { Store.guest(); Flow.toMain({ guest: true }); } });
    }
  };

  const xBtn = (lbl, left) => `<button type="button" class="iconbtn dkx" data-x style="position:absolute;top:calc(var(--safe-t) + 4px);${left ? 'left:12px' : 'right:12px'};z-index:5" aria-label="${lbl}"><span class="gl" style="background:#2A2A2A;box-shadow:none;color:#fff">${ICN(left ? 'chevL' : 'x', 20, '#fff')}</span></button>`;
  const field = (id, label, type, ac, extra) => `<label class="dk-inp" for="f-${id}"><span class="sr">${label}</span><input id="f-${id}" type="${type}" placeholder="${label}" autocomplete="${ac}" data-f="${id}" aria-describedby="e-${id}" ${extra || ''}>${type === 'password' ? `<button type="button" class="iconbtn" data-eye="${id}" aria-label="Mostrar la contrasenya" style="color:#6C6C70">${ICN('eye', 22)}</button>` : ''}</label><p class="ferr" id="e-${id}" role="alert"></p>`;
  const eyes = el => el.querySelectorAll('[data-eye]').forEach(b => b.addEventListener('click', () => { const i = el.querySelector(`[data-f="${b.dataset.eye}"]`); i.type = i.type === 'password' ? 'text' : 'password'; b.setAttribute('aria-label', i.type === 'password' ? 'Mostrar la contrasenya' : 'Amagar la contrasenya'); b.innerHTML = ICN(i.type === 'password' ? 'eye' : 'eyeOff', 22); }));
  const setErr = (el, id, msg) => { const e = el.querySelector('#e-' + id), i = el.querySelector(`[data-f="${id}"]`); e.textContent = msg || ''; i.setAttribute('aria-invalid', msg ? 'true' : 'false'); i.closest('.dk-inp').classList.toggle('bad', !!msg); return !msg; };
  const MAILRE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  window.LEGAL = () => IOS.Alert.show({ title: "Condicions d'ús i privacitat", msg: "Valia és un prototip d'un Treball de Recerca. El compte només es desa en aquest dispositiu (localStorage): no s'envia enlloc i el pots esborrar tancant la sessió i netejant les dades del navegador. Textos legals definitius: pendents de revisió.", buttons: [{ t: "D'acord", style: 'pref' }] });

  /* 3 · Registre amb validació real */
  SC[3] = {
    title: "Crea el teu compte", nav: false, cls: 'dark', sb: 'light-always', tabbar: false,
    render: () => `${xBtn('Tancar')}<div class="dk-body dk-scroll"><h2 class="t1">Crea el teu compte</h2><p class="co dk-desc">És gratuït. El compte es desa en aquest dispositiu.</p>
      <form novalidate data-form>${field('name', 'Nom', 'text', 'name', 'autocapitalize="words"')}${field('mail', 'Correu electrònic', 'email', 'email', 'inputmode="email" autocapitalize="off"')}${field('pw', 'Contrasenya (mínim 8 caràcters)', 'password', 'new-password')}${field('pw2', 'Repeteix la contrasenya', 'password', 'new-password')}
      <div class="row dk-acc" style="align-items:flex-start"><button type="button" class="chk off" role="checkbox" aria-checked="false" aria-describedby="e-acc" aria-label="Accepto les condicions d'ús i la política de privacitat" data-chk>${ICN('check', 16)}</button><p class="fn" style="margin:12px 0 0;color:#D6DAD8">Accepto les <a href="#" role="button" class="lnk" data-legal>condicions d'ús i la política de privacitat</a>.</p></div><p class="ferr" id="e-acc" role="alert"></p>
      <button type="submit" class="btn" data-reg style="margin-top:10px">Crear el compte</button></form>
      <button type="button" class="tbtn" data-tologin style="color:#A3A8A5;width:100%;margin-top:8px">Ja tinc compte: inicia sessió</button></div>`,
    mount(el, p, pg) {
      el.querySelector('[data-x]').addEventListener('click', () => IOS.Modal.dismiss());
      eyes(el);
      const chk = el.querySelector('[data-chk]'), v = id => el.querySelector(`[data-f="${id}"]`).value;
      chk.addEventListener('click', () => { const on = chk.getAttribute('aria-checked') !== 'true'; chk.setAttribute('aria-checked', on); chk.classList.toggle('off', !on); if (on) el.querySelector('#e-acc').textContent = ''; });
      el.querySelector('[data-legal]').addEventListener('click', e => { e.preventDefault(); LEGAL(); });
      el.querySelector('[data-tologin]').addEventListener('click', async () => { await IOS.Modal.dismiss(); IOS.Modal.present(6, {}, { kind: 'dark' }); });
      const check = id => {
        if (id === 'name') return setErr(el, 'name', v('name').trim().length < 2 ? 'Escriu el teu nom (mínim 2 lletres).' : '');
        if (id === 'mail') return setErr(el, 'mail', !v('mail').trim() ? 'Escriu el correu electrònic.' : !MAILRE.test(v('mail').trim()) ? 'El correu no té un format vàlid (exemple: nom@domini.cat).' : '');
        if (id === 'pw') return setErr(el, 'pw', v('pw').length < 8 ? 'La contrasenya ha de tenir 8 caràcters com a mínim.' : '');
        if (id === 'pw2') return setErr(el, 'pw2', v('pw2') !== v('pw') || !v('pw2') ? 'Les contrasenyes no coincideixen.' : '');
      };
      el.querySelectorAll('[data-f]').forEach(i => { i.addEventListener('blur', () => { if (i.value) check(i.dataset.f); }); i.addEventListener('input', () => { if (i.getAttribute('aria-invalid') === 'true') check(i.dataset.f); }); });
      el.querySelector('[data-form]').addEventListener('submit', async e => {
        e.preventDefault();
        const ok = ['name', 'mail', 'pw', 'pw2'].map(check).every(Boolean);
        const acc = chk.getAttribute('aria-checked') === 'true'; el.querySelector('#e-acc').textContent = acc ? '' : "Has d'acceptar les condicions per crear el compte.";
        if (!ok || !acc) { const f = el.querySelector('[aria-invalid="true"]') || chk; f.focus(); return; }
        const btn = el.querySelector('[data-reg]'); btn.disabled = true;
        const r = await Store.register({ name: v('name'), email: v('mail'), pass: v('pw') }); btn.disabled = false;
        if (!r.ok) { setErr(el, 'mail', 'Ja hi ha un compte amb aquest correu en aquest dispositiu. Inicia sessió.'); el.querySelector('[data-f="mail"]').focus(); return; }
        IOS.Toast.show('Compte creat · +100 punts', 'checkC'); Flow.afterSignup();
      });
    }
  };
  /* 6 · Inici de sessió (comptes d'aquest dispositiu + compte de demostració del jurat) */
  SC[6] = {
    title: 'Inici de sessió', nav: false, cls: 'dark', sb: 'light-always', tabbar: false,
    render: () => `${xBtn('Tancar')}<div class="dk-body dk-scroll"><h2 class="t1">Et donem la benvinguda</h2><p class="co dk-desc">Inicia la sessió per continuar.</p>
      <form novalidate data-form>${field('mail', 'Correu electrònic', 'email', 'username', 'inputmode="email" autocapitalize="off"')}${field('pw', 'Contrasenya', 'password', 'current-password')}
      <button type="submit" class="btn" data-login style="margin-top:6px">Inicia sessió</button></form>
      <button type="button" class="tbtn" data-forgot style="color:#A3A8A5;width:100%;margin-top:4px">Has oblidat la contrasenya?</button>
      <div class="demo-box"><div class="fn" style="font-weight:600;color:#fff">Compte de demostració per al jurat</div><div class="fn" style="color:#D6DAD8;margin-top:2px">${Store.DEMO.email} · ${Store.DEMO.pass}</div><button type="button" class="btn out sm" data-demo style="margin-top:10px;width:auto;padding:0 16px">Omple-ho per mi</button></div>
      <button type="button" class="tbtn" data-toreg style="color:#A3A8A5;width:100%;margin-top:6px">No tens compte? Registra't</button></div>`,
    mount(el) {
      el.querySelector('[data-x]').addEventListener('click', () => IOS.Modal.dismiss());
      eyes(el);
      const mail = el.querySelector('[data-f="mail"]'), pw = el.querySelector('[data-f="pw"]');
      const fillDemo = () => { mail.value = Store.DEMO.email; pw.value = Store.DEMO.pass; setErr(el, 'mail', ''); setErr(el, 'pw', ''); };
      el.querySelector('[data-demo]').addEventListener('click', () => { fillDemo(); IOS.Toast.show('Dades del jurat omplertes', 'checkC'); });
      el.querySelector('[data-forgot]').addEventListener('click', () => IOS.Alert.show({ title: 'Recuperar la contrasenya', msg: "En aquest prototip els comptes només es desen en aquest dispositiu i no hi ha servidor de correu. Pots crear un compte nou o entrar amb el compte de demostració.", buttons: [{ t: 'Tancar' }, { t: 'Compte de demostració', style: 'pref', on: fillDemo }] }));
      el.querySelector('[data-toreg]').addEventListener('click', async () => { await IOS.Modal.dismiss(); IOS.Modal.present(3, {}, { kind: 'dark' }); });
      el.querySelector('[data-form]').addEventListener('submit', async e => {
        e.preventDefault();
        let ok = setErr(el, 'mail', !mail.value.trim() ? 'Escriu el correu electrònic.' : !MAILRE.test(mail.value.trim()) ? 'El correu no té un format vàlid.' : '');
        ok = setErr(el, 'pw', !pw.value ? 'Escriu la contrasenya.' : '') && ok;
        if (!ok) return;
        const r = await Store.login(mail.value, pw.value);
        if (!r.ok) { if (r.err === 'nouser') setErr(el, 'mail', "No hi ha cap compte amb aquest correu en aquest dispositiu. Registra't o fes servir el compte de demostració."); else setErr(el, 'pw', 'La contrasenya no és correcta.'); return; }
        IOS.Toast.show('Hola, ' + Store.cur().name.split(' ')[0] + '!', 'checkC'); Flow.toMain({});
      });
    }
  };

  /* 36 · Interessos (opcional) */
  SC[36] = {
    title: "Els teus interessos", short: 'Interessos', back: false, tabbar: false, cls: 'onbpg',
    navLeft: () => `<span class="fn mut" style="padding-left:12px;font-weight:600">Pas opcional</span>`,
    navRight: () => `<button type="button" class="tbtn" data-act="skip">Omet</button>`,
    render: () => `<div class="px" style="padding-top:8px"><h1 class="t1">Què t'agrada fer?</h1><p class="co mut" style="margin:8px 0 0">Tria-ho en 10 segons. Ho pots canviar quan vulguis a Ajustos.</p>
      <h2 class="hd" style="margin:28px 0 6px">Activitats</h2><div class="chips" data-cnt>${chip('Caminar', 1)}${chip('Bicicleta')}${chip('Córrer')}${chip('Patrimoni', 1)}${chip('Gastronomia Km0', 1)}${chip('Natura')}</div>
      <h2 class="hd" style="margin:24px 0 6px">Nivell</h2>${seg(['Tranquil', 'Mitjà', 'Exigent'], 1)}
      <h2 class="hd" style="margin:24px 0 6px">Amb qui vas?</h2><div class="chips" data-cnt>${chip('Sol')}${chip('En parella')}${chip('Amb amics')}${chip('En família', 1)}</div></div>`,
    overlay: () => `<div class="bbar"><p class="fn mut" style="text-align:center;margin:0 0 8px" data-n>4 seleccions · ho farem servir per triar rutes</p><button type="button" class="btn" data-next>Continuar</button></div>`,
    mount(el, p, pg) {
      IOS.segmented(el.querySelector('.segc'));
      const cnt = () => { const n = el.querySelectorAll('[data-cnt] .chip[aria-pressed="true"]').length; el.querySelector('[data-n]').textContent = `${n} ${n === 1 ? 'selecció' : 'seleccions'} · ho farem servir per triar rutes`; };
      el.addEventListener('click', e => { const c = e.target.closest('.chip'); if (c) { const on = c.getAttribute('aria-pressed') !== 'true'; c.setAttribute('aria-pressed', on); c.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + c.textContent; cnt(); }
        if (e.target.closest('[data-next]')) { Store.cur().interests = [...el.querySelectorAll('[data-cnt] .chip[aria-pressed="true"]')].map(c => c.dataset.t || c.textContent.trim()); Store.save(); pg.stack.push(8); } if (e.target.closest('[data-act="skip"]')) pg.stack.push(8); });
    }
  };
  /* 8 · Permís d'ubicació: demana el permís real del navegador */
  SC[8] = {
    title: "Permís d'ubicació", short: 'Ubicació', back: false, nav: false, tabbar: false,
    render: () => `<div class="perm-map cc">${mapSVG(393, 340, { route: 'caldes', pins: [[.5, .6, 'me'], [.3, .3, 'poi'], [.72, .34, 'nat']], seed: 2 })}</div>
      <div class="px" style="padding-top:22px"><span class="tag" style="margin-bottom:10px">Pas 1 de 2</span><h1 class="t1" style="margin-top:10px">Troba rutes a prop teu</h1><p class="co mut" style="margin:8px 0 0">Fem servir la teva ubicació per mostrar rutes a prop i fer els check-ins. No gravem el recorregut ni l'enviem enlloc.</p></div>`,
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-ok>Permetre ubicació</button><button type="button" class="tbtn" style="width:100%" data-no>Ara no</button></div>`,
    mount(el, p, pg) {
      const next = () => { if (el.isConnected) pg.stack.push(9); };
      el.querySelector('[data-ok]').addEventListener('click', e => {
        e.currentTarget.disabled = true;
        if (!navigator.geolocation) { IOS.Toast.show('Aquest navegador no té ubicació', 'info'); return next(); }
        navigator.geolocation.getCurrentPosition(pos => { Store.cur().loc = [+pos.coords.latitude.toFixed(3), +pos.coords.longitude.toFixed(3)]; Store.save(); IOS.Toast.show('Ubicació activada', 'pin'); next(); },
          () => { IOS.Toast.show('Sense ubicació: pots activar-la més tard', 'info'); next(); }, { timeout: 9000, maximumAge: 600000 });
      });
      el.querySelector('[data-no]').addEventListener('click', next);
    }
  };
  /* 9 · Avisos: permís real de notificacions si el navegador el té */
  SC[9] = {
    title: 'Permís de notificacions', short: 'Avisos', back: false, nav: false, tabbar: false,
    render: () => `<div class="px col" style="align-items:center;text-align:center;padding-top:calc(var(--safe-t) + 110px)"><div class="ring cc" style="width:120px;height:120px;border-radius:60px;background:var(--bg2);display:grid;place-items:center">${ICN('bell', 52, 'var(--tint-tx)')}</div><span class="tag" style="margin-top:22px">Pas 2 de 2</span><h1 class="t1" style="margin-top:10px">Vols rebre avisos?</h1><p class="co mut" style="margin:8px 0 0;max-width:30ch">Et podem avisar de reptes nous i de rutes que t'agradaran.</p></div>`,
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-ok>Activar notificacions</button><button type="button" class="tbtn" style="width:100%" data-no>Ara no</button></div>`,
    mount(el, p, pg) {
      const next = () => { if (el.isConnected) pg.stack.push(10); };
      el.querySelector('[data-ok]').addEventListener('click', async () => {
        if ('Notification' in window && Notification.requestPermission) { try { const r = await Notification.requestPermission(); IOS.Toast.show(r === 'granted' ? 'Avisos activats' : 'Avisos desactivats', r === 'granted' ? 'bell' : 'info'); } catch (e) { /* res */ } }
        else IOS.Toast.show("En aquest navegador els avisos funcionen amb l'app instal·lada", 'info');
        next();
      });
      el.querySelector('[data-no]').addEventListener('click', next);
    }
  };
  /* 10 · Privacitat: consentiments opcionals (desactivats per defecte) */
  SC[10] = {
    title: 'Privacitat', large: false, back: false, tabbar: false, cls: 'grouped',
    render: () => `<div class="px" style="padding-top:4px"><h1 class="t1">La teva privacitat</h1><p class="co mut" style="margin:8px 0 0">Tria què vols compartir. Ho pots canviar quan vulguis a Ajustos.</p></div>
      <div class="glist" style="margin-top:20px" data-cons>${grow('shield', 'g', "Estadístiques d'ús anònimes", '', { sw: false })}${grow('mail', 'b', 'Novetats per correu', '', { sw: false })}${grow('sparkle', '', 'Personalització amb IA', '', { sw: false })}</div>
      <p class="gfoot">Tot és opcional. En aquest prototip, res surt del teu dispositiu.</p>
      <div class="px"><button type="button" class="tbtn" data-legal style="padding-left:0">Llegir les condicions i la privacitat</button></div>`,
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-ok>Continuar</button></div>`,
    mount(el) {
      el.querySelector('[data-legal]').addEventListener('click', () => LEGAL());
      el.querySelector('[data-ok]').addEventListener('click', () => {
        const v = [...el.querySelectorAll('[data-cons] .sw')].map(s => s.getAttribute('aria-checked') === 'true');
        Store.cur().consents = { stats: v[0], news: v[1], ai: v[2] }; Store.save(); Flow.toMain({});
      });
    }
  };
})();

/* ---- scr_chat.js ---- */
/* ===================== Pantalles · xat amb l'assistent (11, 12, 13, 29 i estats de la mascota) ===================== */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const SUGG = ["Recomana'm una ruta per aquesta tarda", 'Pla de baix impacte ambiental', 'Què hi ha per fer avui?'];
  const STATUS = { repos: 'en línia', escoltant: "t'escolta…", pensant: 'pensant…', responent: 'escrivint…', error: 'sense connexió' };
  const actCard = id => { const a = actById(id); return `<button type="button" class="acard chatcard" data-open="${a.id}" aria-label="${esc(a.t)}: ${a.m.join(', ')}. Obrir el detall">
      ${actImg(a, 'height:120px;border-radius:12px;position:relative', a.img ? 'data-hsrc' : '')}
      <div style="padding:10px 2px 2px"><div class="row" style="gap:8px"><div class="f1"><div class="hd">${a.t}</div><div class="fn mut">${a.mun} · ${a.act} · ${a.dif}</div></div><span class="mav" style="background:var(--label)">${ICN('arrow', 16, '#fff')}</span></div>${metaLine(a.m)}</div></button>`; };
  /* respostes simulades per paraules clau (sense API): només recomanen activitats del catàleg */
  const norm = t => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const has = (t, ...w) => w.some(x => t.includes(x));
  function answer(raw) {
    const t = norm(raw), d = Store.cur();
    if (has(t, 'hola', 'bon dia', 'bona tarda', 'bones', 'hey', 'buenas', 'hello', 'bonjour', 'salut', 'buenos dias')) return { t: 'Hola! Puc recomanar-te rutes, explicar-te com arribar-hi en transport públic o com guanyar punts. Què et ve de gust?', chips: ['Una ruta fàcil', 'Amb nens', 'Com guanyo punts?'] };
    if (has(t, 'gracies', 'merci', 'gracias', 'thank')) return { t: 'De res! Quan vulguis, aquí em tens.', chips: ['Una altra ruta', 'El meu impacte'] };
    if (has(t, 'co2', 'co₂', 'impacte', 'impacto', 'impact', 'contamina', 'pollu', 'emissio', 'emision', 'sostenib', 'sustainab', 'durable', 'medi ambient', 'environ')) return { t: `Has estalviat ${String(d.co2).replace('.', ',')} kg de CO₂ (estimat) i has fet ${String(d.km).replace('.', ',')} km sense cotxe. Comptem el que estalvies quan vas a l'inici de la ruta a peu, en bici o en transport públic en lloc d'anar-hi en cotxe.`, t2: 'Vols una ruta que puguis començar sense cotxe?', chips: ['Rutes amb tren', 'Veure el meu impacte'], go: 'impacte' };
    if (has(t, 'punt', 'point', 'recompens', 'reward', 'bescanv', 'canviar', 'canjear', 'redeem', 'echanger', 'botiga', 'tienda', 'shop', 'boutique', 'moneda', 'premi', 'premio')) return { t: `Tens ${fmt(d.points)} punts d'energia. En guanyes amb cada check-in i quan acabes una ruta, i els pots bescanviar per transport públic, comerç local o targetes regal.`, chips: ['Obrir la botiga', 'Una ruta per guanyar punts'], go: 'botiga' };
    if (has(t, 'tren', 'train', 'bus', 'transport', 'sense cotxe', 'sin coche', 'without a car', 'no car', 'sans voiture', 'rodalies', 'autobus')) return { t: 'Aquestes rutes comencen a prop d\'una estació:', cards: ['porxada', 'llinars'], t2: 'També hi pots arribar en tren a Cardedeu, Mollet i Figaró.', chips: ['Més rutes amb tren', 'Amb nens'] };
    if (has(t, 'nen', 'nena', 'famil', 'fills', 'canalla', 'cotxet', 'ninos', 'hijos', 'kid', 'child', 'enfant')) return { t: 'Per anar amb nens et proposo camins planers i curts:', cards: ['fageda', 'caldes'], t2: 'Totes dues són circulars i tenen llocs per aturar-se.', chips: ['Amb bici', 'Amb gos'] };
    if (has(t, 'bici', 'bicicleta', 'btt', 'pedal', 'bike', 'cycl', 'velo')) return { t: 'En bici, el més agradable és pla i sense trànsit:', cards: ['gallecs', 'congost'], chips: ['Una ruta a peu', 'Rutes amb tren'] };
    if (has(t, 'corre', 'running', 'run ', 'trail', 'corriol', 'courir', 'course a pied')) return { t: 'Per córrer, aquesta té pistes i corriols amb un bon desnivell:', cards: ['puig'], chips: ['Una ruta fàcil', 'Muntanya'] };
    if (has(t, 'gos', 'perro', 'mascota', 'dog', 'chien')) return { t: 'Aquestes rutes permeten anar amb gos (sempre lligat a prop del bestiar):', cards: ['megalits', 'calma'], chips: ['Amb nens', 'Una ruta curta'] };
    if (has(t, 'patrimoni', 'heritage', 'histor', 'castell', 'castle', 'chateau', 'museu', 'museo', 'museum', 'musee', 'romà', 'roma', 'monestir', 'monaster', 'dolmen', 'cultur')) return { t: 'Si t\'agrada la història, mira aquestes:', cards: ['megalits', 'cardedeu'], t2: 'A la Roca hi ha un dolmen de fa uns 5.000 anys.', chips: ['Castells', 'Una ruta fàcil'] };
    if (has(t, 'menjar', 'comida', 'food', 'manger', 'gastronom', 'km0', 'mercat', 'mercado', 'market', 'marche', 'productor', 'producer', 'producteur', 'restaur', 'comer')) return { t: 'Per combinar ruta i producte de proximitat:', cards: ['porxada'], t2: 'Els comerços i les ofertes que surten a l\'app són d\'exemple: encara no hi ha acords signats.', chips: ['Rutes amb tren', 'Obrir la botiga'] };
    if (has(t, 'aigua', 'agua', 'water', "l'eau", 'cascada', 'waterfall', 'salt', 'riu', 'rio ', 'river', 'riviere')) return { t: 'Amb aigua a prop:', cards: ['fai', 'congost'], chips: ['Una ruta fàcil', 'Amb nens'] };
    if (has(t, 'muntanya', 'montana', 'mountain', 'montagne', 'cim', 'summit', 'sommet', 'montseny', 'pujar', 'dificil', 'difficult', 'hard', 'repte', 'reto', 'challenge', 'defi')) return { t: 'Si vols un repte, puja al sostre del Montseny:', cards: ['turo'], t2: 'Porta aigua i abric: a dalt fa més fred.', chips: ['Una ruta més suau', 'Castells'] };
    if (has(t, 'castell', 'castle', 'chateau')) return { t: 'Castells per descobrir:', cards: ['llinars', 'calma'], chips: ['Una ruta fàcil'] };
    if (has(t, 'facil', 'easy', 'curta', 'corta', 'short', 'courte', 'suau', 'tranquil', 'tarda', 'tarde', 'afternoon', 'apres-midi', 'avui', 'hoy', 'today', 'aujourd', 'ruta', 'route', 'itineraire', 'randonn', 'hike', 'walk', 'activitat', 'actividad', 'activit', 'proposa', 'propon', 'recomana', 'recomienda', 'recommend', 'fer', 'hacer', 'planta')) return { t: 'Et proposo una sortida suau i de poc impacte:', cards: ['caldes'], t2: 'Vols que et proposi alguna cosa amb gastronomia local?', chips: ['Sí, amb gastronomia', 'Més curta', 'Amb nens'] };
    if (has(t, 'ajuda', 'ayuda', 'help', 'aide', 'que pots', 'que puedes', 'what can you', 'com funciona', 'como funciona', 'how does')) return { t: "Sóc l'assistent de Valia. Et recomano activitats del Vallès Oriental, t'explico com arribar-hi i com guanyar i bescanviar punts.", chips: ['Una ruta fàcil', 'Com guanyo punts?', 'El meu impacte'] };
    return { t: "Encara no sé respondre això. Prova de preguntar-me per rutes, transport, nens, bici, patrimoni, punts o CO₂.", chips: ['Una ruta fàcil', 'Rutes amb tren', 'Com guanyo punts?'] };
  }

  SC.chat = {
    title: 'Assistent', cls: 'chat', tabbar: true, sb: 'dark', scrollThreshold: 2,
    navCenter: () => `<span class="row" style="gap:8px;justify-content:center"><span class="mav" data-hav style="width:30px;height:30px;opacity:0" aria-hidden="true"></span><span class="col" style="align-items:flex-start;line-height:1.1"><span class="hd" style="font-size:var(--t-hd)">Assistent</span><span class="c1 mut" data-status>en línia</span></span></span>`,
    navRight: () => `<button type="button" class="navbtn press" data-new aria-label="Conversa nova">${ICN('pencil', 22)}</button>`,
    render: () => `<div class="chatbox" data-box></div>`,
    overlay: () => `<div class="composer" data-comp><label class="field"><span class="sr">Missatge per a l'assistent</span><input type="text" placeholder="Escriu un missatge…" enterkeyhint="send" data-in autocomplete="off"><button type="button" class="iconbtn" aria-label="Dictar" data-mic style="color:var(--label2)">${ICN('mic', 22)}</button></label><button type="button" class="send press" data-send aria-label="Enviar" disabled>${ICN('send', 20)}</button></div>`,
    mount(el, p, pg) {
      const C = pg.chat = { el, pg, box: el.querySelector('[data-box]'), inp: el.querySelector('[data-in]'), send: el.querySelector('[data-send]'), comp: el.querySelector('[data-comp]'), status: el.querySelector('[data-status]'), hav: el.querySelector('[data-hav]'), busy: false };
      C.havM = Mascot.create(C.hav, { size: 30, view: 'avatar', state: 'repos', label: 'Assistent' }); C.havM.el.style.color = '#fff';
      C.setState = s => { C.status.textContent = STATUS[s] || STATUS.repos; C.havM.set(s === 'repos' ? 'repos' : s); C.active().set(s === 'repos' ? 'repos' : s); };
      C.active = () => (C.gm && C.gm.el.isConnected ? C.gm : C.havM);
      render(C, true);
      C.inp.addEventListener('focus', () => openKbd(C));
      el.querySelector('[data-mic]').addEventListener('click', e => { e.preventDefault(); dictate(C, e.currentTarget); });
      C.inp.addEventListener('input', () => { const v = C.inp.value.trim(); C.send.disabled = !v; if (C.busy) return; if (v) { if (C.active().state !== 'escoltant') C.setState('escoltant'); C.active().pulse(); } else C.setState('repos'); });
      C.inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); submit(C); } });
      C.send.addEventListener('click', () => submit(C));
      el.querySelector('[data-new]').addEventListener('click', () => { App.st.chat = []; IOS.Keyboard.hide(); C.inp.value = ''; C.send.disabled = true; render(C, true); greet(C); });
      el.addEventListener('click', e => {
        const s = e.target.closest('[data-say]'); if (s) { const k = s.dataset.say; if (k === 'Obrir la botiga') { App.switchTab('recompenses'); return; } if (k === 'Veure el meu impacte' || k === 'El meu impacte') { App.switchTab('perfil'); return; } C.inp.value = k; submit(C); return; }
        const o = e.target.closest('[data-open]'); if (o) { IOS.Keyboard.hide(); const hs = o.querySelector('[data-hsrc]'); pg.stack.push(17, { id: o.dataset.open }, hs ? { hero: { src: hs, target: '[data-hero]' } } : {}); return; }
        if (e.target.closest('[data-retry]')) { const last = [...App.st.chat].reverse().find(m => m.me); if (App.st.offline) { IOS.Toast.show('Encara no hi ha connexió', 'wifioff'); return; } App.st.chat = App.st.chat.filter(m => !m.err); render(C); reply(C, last ? last.t : SUGG[0]); }
        if (e.target.closest('[data-retry-off]')) { if (App.st.offline) IOS.Toast.show('Encara no hi ha connexió', 'wifioff'); else render(C, true); }
        if (e.target.closest('[data-signup]')) Flow.toOnboarding();
      });
    },
    appear(el, p, pg) { const C = pg.chat; if (!App.st.chat.length && !p.noGreet) greet(C); if (p.preset) preset(C, p.preset); },
    reappear(el, p, pg) { const C = pg.chat; render(C, !App.st.chat.length); if (!App.st.chat.length) greet(C); },
    unmount(el, p, pg) { IOS.Keyboard.hide(); }
  };

  function render(C, fresh) {
    const box = C.box, msgs = App.st.chat;
    C.gm = null;
    if (!msgs.length) {
      if (App.st.offline) {
        box.innerHTML = `<div class="greet px" style="text-align:center;align-items:center"><div data-gm style="margin-top:12px"></div><h2 class="t2" style="margin-top:8px">No tens connexió</h2><p class="co mut" style="margin:6px 0 0;max-width:30ch">Comprova la Wi-Fi o les dades mòbils i torna-ho a provar.</p><button type="button" class="btn auto" data-retry-off style="margin-top:16px;padding:12px 28px">Reintentar</button>
          <div class="info" style="margin-top:22px;text-align:left">${ICN('info', 20, 'var(--tint-tx)')}<span>Si fas una ruta descarregada, segueix funcionant. Els check-ins es desen al mòbil i s'envien quan tornis a tenir cobertura.</span></div></div>`;
        C.gm = Mascot.create(box.querySelector('[data-gm]'), { size: 132, state: 'error', label: 'Assistent' });
        C.status.textContent = STATUS.error; C.hav.style.opacity = 0; return;
      }
      box.innerHTML = `${App.st.guest ? `<div class="px" style="padding-top:4px"><div class="info" style="align-items:center;flex-wrap:wrap">${ICN('lock', 18)}<span style="flex:1 1 170px">Estàs navegant com a convidat. Algunes funcions no estan disponibles.</span><button type="button" class="btn sm" data-signup style="width:auto">Crear compte</button></div></div>` : ''}
        <div class="greet px"><span class="tag" style="align-self:center;margin-bottom:6px">${ICN('sparkle', 14)} Estàs parlant amb una IA</span>
          <div class="gm-row"><div class="gm" data-gm></div><div class="bubble gm-b cc" data-gb role="status">Què et ve de gust fer avui?</div></div>
          <p class="co mut" style="margin:10px 0 0">Pregunta'm per rutes, patrimoni i activitats. Et responc amb el que ofereix l'app.</p>
          <div class="col gap8" style="margin-top:16px">${SUGG.map(t => `<button type="button" class="sug press" data-say="${esc(t)}"><span class="f1">${t}</span><i>${ICN('arrow', 16)}</i></button>`).join('')}</div></div>`;
      C.gm = Mascot.create(box.querySelector('[data-gm]'), { size: 128, state: 'repos', label: 'Assistent' });
      C.hav.style.opacity = 0; C.status.textContent = STATUS.repos;
      return;
    }
    C.hav.style.opacity = 1;
    box.innerHTML = `<div class="msgs" data-msgs aria-live="polite"><span class="tag" style="align-self:center;margin:4px 0 6px">${ICN('sparkle', 14)} Estàs parlant amb una IA</span>${msgs.map(rowHTML).join('')}</div><p class="fn mut" style="text-align:center;padding:4px 24px 0" data-disc>L'assistent pot cometre errors. Comprova horaris i condicions abans de sortir.</p>`;
    C.box.querySelectorAll('[data-av]').forEach(a => { const m = Mascot.create(a, { size: 30, view: 'avatar', state: 'repos', label: 'Assistent', still: true }); m.el.style.color = '#fff'; });
    C.box.querySelectorAll('[data-errm]').forEach(a => Mascot.create(a, { size: 84, state: 'error', label: 'Assistent' }));
  }
  function rowHTML(m) {
    if (m.me) return `<div class="mrow me"><div class="mb">${esc(m.t)}</div></div>`;
    if (m.err) return `<div class="mrow ai err"><div data-errm style="margin:0 2px 0 -6px"></div><div class="col gap8" style="align-items:flex-start"><div class="mb">${m.t}</div><button type="button" class="btn sm" data-retry style="width:auto">${ICN('refresh', 18)} Tornar-ho a provar</button></div></div>`;
    return `<div class="mrow ai"><span class="mav" data-av aria-hidden="true"></span><div class="mb ${m.cards ? 'wide' : ''}">${m.t}${(m.cards || []).map(actCard).join('')}${m.t2 ? `<div style="margin-top:10px">${m.t2}</div>` : ''}</div></div>${m.chips ? `<div class="mrow ai"><span class="spacer"></span><div class="chips">${m.chips.map(c => chip(c, false, `data-say="${esc(c)}"`)).join('')}</div></div>` : ''}`;
  }
  function greet(C) {
    if (!C.gm || App.st.offline) return;
    const b = C.box.querySelector('[data-gb]');
    if (IOS.rm()) { C.gm.set('saludant'); return; }
    C.gm.set('saludant', { restart: true });
    if (b) IOS.anim(b, [{ opacity: 0, transform: 'scale(.6)', transformOrigin: '0% 100%' }, { opacity: 1, transform: 'scale(1)', transformOrigin: '0% 100%' }], Spring.spring(0.42, 0.68), { delay: 380 });
    IOS.stagger(C.box.querySelectorAll('.sug'), { delay: 520 });
  }
  /* dictat amb el reconeixement de veu del navegador (si n'hi ha); si no, el micròfon del teclat del sistema */
  let rec = null;
  function dictate(C, btn) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { IOS.Toast.show('Fes servir el micròfon del teclat per dictar', 'mic'); C.inp.focus(); return; }
    if (rec) { rec.stop(); return; }
    try { rec = new SR(); } catch (e) { IOS.Toast.show('El dictat no està disponible', 'mic'); return; }
    rec.lang = 'ca-ES'; rec.interimResults = true; rec.maxAlternatives = 1;
    btn.style.color = 'var(--red)'; btn.setAttribute('aria-label', 'Aturar el dictat'); IOS.Toast.show('Escoltant… parla ara', 'mic');
    rec.onresult = ev => { C.inp.value = [...ev.results].map(r => r[0].transcript).join(' '); C.inp.dispatchEvent(new Event('input')); };
    rec.onerror = ev => { IOS.Toast.show(ev.error === 'not-allowed' ? 'Cal permís per fer servir el micròfon' : 'No t\'he entès, torna-ho a provar', 'mic'); };
    rec.onend = () => { rec = null; btn.style.color = 'var(--label2)'; btn.setAttribute('aria-label', 'Dictar'); };
    try { rec.start(); } catch (e) { rec = null; }
  }
  function openKbd(C) {
    // teclat natiu: no cal moure res; només es mostra l'últim missatge
    IOS.Keyboard.show(C.inp, { onHide: () => {} });
    if (App.st.chat.length) setTimeout(() => toBottom(C), 300);
  }
  function toBottom(C) { const sc = C.pg.scroll; sc.scrollTo({ top: sc.scrollHeight, behavior: IOS.rm() ? 'auto' : 'smooth' }); }
  async function submit(C, o) {
    const t = C.inp.value.trim(); if (!t || C.busy) return;
    if (Store.isGuest() && App.st.chat.filter(m => m.me).length >= 3) { App.needAccount('continuar parlant amb l\'assistent (el mode convidat permet 3 missatges)'); return; }
    C.inp.value = ''; C.send.disabled = true; IOS.Keyboard.hide(); C.inp.blur();
    C.status.textContent = STATUS.pensant;
    const first = !App.st.chat.length;
    App.st.chat.push({ me: true, t });
    if (first && C.gm) await heroToHeader(C);
    render(C); toBottom(C);
    const rows = C.box.querySelectorAll('.mrow.me'); const last = rows[rows.length - 1];
    if (last && !IOS.rm()) IOS.anim(last, [{ opacity: 0, transform: 'translateY(30px) scale(.94)', transformOrigin: '100% 100%' }, { opacity: 1, transform: 'none', transformOrigin: '100% 100%' }], IOS.S.micro);
    reply(C, t, o);
  }
  /* la mascota gran passa a ser l'avatar de la capçalera (transició compartida) */
  async function heroToHeader(C) {
    const gm = C.gm; if (!gm) return;
    if (IOS.rm()) { C.hav.style.opacity = 1; return; }
    const a = IOS.rectIn(gm.svg), b = IOS.rectIn(C.hav);
    const ghost = h(`<div style="position:absolute;z-index:57;left:${a.x}px;top:${a.y}px;width:${a.w}px;height:${a.h}px;color:var(--mascot);pointer-events:none"></div>`);
    ghost.innerHTML = gm.svg.outerHTML; ghost.firstElementChild.style.height = '100%';
    IOS.app.appendChild(ghost); gm.el.style.visibility = 'hidden';
    const bub = C.box.querySelector('[data-gb]'); if (bub) IOS.fade(bub, 1, 0, 160);
    const s = b.h / a.h * 1.6, tx = b.x + b.w / 2 - (a.x + a.w / 2), ty = b.y + b.h / 2 - (a.y + a.h * 0.62);
    await IOS.anim(ghost, [{ transform: 'none', opacity: 1 }, { transform: `translate(${tx}px,${ty}px) scale(${s})`, opacity: 0.2 }], Spring.spring(0.46, 0.86));
    ghost.remove(); C.hav.style.opacity = 1;
    IOS.anim(C.hav, [{ transform: 'scale(.6)' }, { transform: 'scale(1)' }], IOS.S.micro);
  }
  async function reply(C, t, o) {
    o = o || {};
    C.busy = true; C.setState('pensant');
    const msgs = C.box.querySelector('[data-msgs]');
    const typ = h(`<div class="mrow ai" data-typing aria-label="L'assistent està pensant"><div data-tm style="margin-left:-8px"></div></div>`);
    msgs.appendChild(typ); const tm = Mascot.create(typ.querySelector('[data-tm]'), { size: 84, state: 'pensant', label: 'Assistent' });
    if (!IOS.rm()) IOS.anim(typ, [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], IOS.S.micro);
    toBottom(C);
    await wait(o.think || (App.st.offline ? 900 : 1300));
    tm.destroy(); typ.remove();
    if (App.st.offline) {
      App.st.chat.push({ err: true, t: 'Ara no tinc connexió: ho tornem a provar?' });
      render(C); C.setState('error'); C.busy = false; toBottom(C); MascotUI.announce('Assistent: Ara no tinc connexió: ho tornem a provar?'); return;
    }
    // «Ruta a mida» pot aportar la resposta dels missatges que genera ella mateixa; la resta, com sempre
    const msg = (window.ChatAnswerHook && window.ChatAnswerHook(t)) || answer(t);
    App.st.chat.push(Object.assign({}, msg, { t: '', _full: msg.t }));
    render(C); C.setState('responent');
    const rows = C.box.querySelectorAll('.mrow.ai:not(.err)'); const row = [...rows].filter(r => !r.querySelector('.chips')).pop();
    const av = row.querySelector('[data-av]'); av.innerHTML = ''; const am = Mascot.create(av, { size: 30, view: 'avatar', state: 'responent', label: 'Assistent' }); am.el.style.color = '#fff';
    const mb = row.querySelector('.mb'); const cardsEl = [...mb.querySelectorAll('.chatcard')]; const card = cardsEl.length ? cardsEl : null; const extra = mb.lastElementChild && msg.t2 ? mb.lastElementChild : null;
    if (card) card.forEach(c => { c.style.display = 'none'; }); if (extra) extra.style.display = 'none';
    const chipsRow = row.nextElementSibling && row.nextElementSibling.querySelector('.chips') ? row.nextElementSibling : null; if (chipsRow) chipsRow.style.display = 'none';
    const tnode = document.createTextNode(''); mb.prepend(tnode);
    const words = I18n.t(msg.t).split(' ');
    for (let i = 0; i < words.length; i++) { tnode.textContent = words.slice(0, i + 1).join(' '); await wait(IOS.rm() ? (o.wordMs ? 60 : 0) : (o.wordMs || 45)); }
    const last = App.st.chat[App.st.chat.length - 1]; last.t = msg.t; delete last._full;
    if (card) for (const c of card) { c.style.display = ''; if (!IOS.rm()) await IOS.anim(c, [{ opacity: 0, transform: 'translateY(10px) scale(.97)' }, { opacity: 1, transform: 'none' }], IOS.S.micro); }
    if (extra) { extra.style.display = ''; if (!IOS.rm()) IOS.fade(extra, 0, 1, 220); }
    if (chipsRow) { chipsRow.style.display = ''; IOS.stagger(chipsRow.querySelectorAll('.chip'), { dy: 8 }); }
    toBottom(C); await wait(300);
    am.set('repos'); C.setState('repos'); C.busy = false;
  }
  const wait = ms => new Promise(r => setTimeout(r, ms));
  /* estats predefinits per a l'índex (12, 13, escoltant, pensant, responent, error) */
  function preset(C, k) {
    if (k === 13) { App.st.chat = [{ me: true, t: "Recomana'm una ruta per aquesta tarda" }, { t: 'Per aquesta tarda et proposo una sortida suau i de poc impacte:', card: true, t2: 'Vols que et proposi alguna cosa amb gastronomia local?', chips: ['Sí, amb gastronomia', 'Més curta', 'Amb nens'] }]; render(C); C.setState('repos'); setTimeout(() => toBottom(C), 50); }
    if (k === 'escoltant') { App.st.chat = []; render(C); C.inp.focus(); setTimeout(() => { C.inp.value = 'Una ruta amb'; C.inp.dispatchEvent(new Event('input')); }, 400); }
    if (k === 'pensant') { App.st.chat = [{ me: true, t: "Recomana'm una ruta per aquesta tarda" }]; render(C); C.busy = true; C.setState('pensant'); const msgs = C.box.querySelector('[data-msgs]'); const typ = h(`<div class="mrow ai" data-typing><div data-tm style="margin-left:-8px"></div></div>`); msgs.appendChild(typ); Mascot.create(typ.querySelector('[data-tm]'), { size: 84, state: 'pensant', label: 'Assistent' }); }
    if (k === 'responent') { App.st.chat = []; render(C); C.inp.value = "Recomana'm una ruta per aquesta tarda"; submit(C, { think: 300, wordMs: 260 }); }
    if (k === 'error') { App.st.chat = [{ me: true, t: "Recomana'm una ruta per aquesta tarda" }, { err: true, t: 'Ara no tinc connexió: ho tornem a provar?' }]; render(C); C.setState('error'); }
  }
  window.ChatAPI = { render, greet, preset, submit };
})();

/* ---- scr_explore.js ---- */
/* ===================== Pantalles · explorar (14–18, 37, 38 i estats 27, 28 i «sense resultats») ===================== */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const eco = `<span class="tag eco">${ICN('leaf', 14)} Baix impacte</span>`;
  const tagD = a => `<span class="tag ${a.dif === 'Difícil' ? 'hard' : ''}">${a.dif}</span>`;
  const card = a => `<article class="acard" data-act-id="${a.id}"><div style="position:relative"><button type="button" class="acard-hit" data-open aria-label="${esc(a.t)}: ${a.m.join(', ')}. Obrir el detall">${actImg(a, 'height:200px;border-radius:12px', a.img ? 'data-hsrc' : '')}</button>
      <button type="button" class="iconbtn fav" data-fav="${a.id}" aria-label="Desar ${esc(a.t)}" aria-pressed="${App.st.saved[a.id] ? 'true' : 'false'}" style="position:absolute;top:6px;right:6px"><span class="gl">${ICN('heart', 20, App.st.saved[a.id] ? '#D70015' : 'currentColor')}</span></button>
      <span class="tag acttag">${ICN(a.act === 'Bici' ? 'bike' : a.act === 'Córrer' ? 'bolt' : 'walk', 14)} ${a.act}</span></div>
      <div style="padding:10px 2px 0"><h3 class="t3">${a.t}</h3><p class="fn mut" style="margin:2px 0 6px">${a.sub}</p><div class="row wrap" style="gap:6px 10px;justify-content:space-between">${metaLine(a.m)}<span class="row" style="gap:4px">${tagD(a)}${a.tp ? `<span class="tag eco">${ICN('train', 14)} Sense cotxe</span>` : ''}</span></div></div></article>`;
  /* filtres (fulla 15) i cerca: filtren de veritat el catàleg */
  const F = { quick: 'Tot', ty: [], act: [], dif: [], dur: '', opt: [] };
  const nrm = t => String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  function nActive(f) { f = f || F; return f.ty.length + f.act.length + f.dif.length + (f.dur ? 1 : 0) + f.opt.length; }
  function filterActs(f, q, quick) {
    f = f || F; const term = nrm(q || '').trim();
    return ACTS.filter(a => (!quick || quick === 'Tot' || a.ty.includes(quick))
      && (!f.ty.length || f.ty.some(x => a.ty.includes(x))) && (!f.act.length || f.act.includes(a.act)) && (!f.dif.length || f.dif.includes(a.dif))
      && (!f.dur || (f.dur === 'lt2' ? a.h < 2 : f.dur === '2a4' ? a.h >= 2 && a.h <= 4 : a.h > 4))
      && (!f.opt.includes('fam') || a.fam) && (!f.opt.includes('gos') || a.gos) && (!f.opt.includes('tp') || a.tp) && (!f.opt.includes('circ') || a.circ)
      && (!term || nrm(a.t + ' ' + a.mun + ' ' + a.kw + ' ' + a.ty.join(' ') + ' ' + a.act).includes(term)));
  }
  window.ExFilter = { F, filterActs, nActive };
  const skel = () => [0, 1].map(() => `<div aria-hidden="true"><div class="sk" style="height:210px;border-radius:12px"></div><div style="padding:12px 2px"><div class="sk" style="height:20px;width:70%"></div><div class="sk" style="height:13px;width:45%;margin:8px 0 10px"></div><div class="row gap8"><div class="sk" style="height:24px;width:70px;border-radius:12px"></div><div class="sk" style="height:24px;width:56px;border-radius:12px"></div></div></div></div>`).join('');

  /* 14 · Explorar */
  SC[14] = {
    title: 'Explorar', large: true, tabbar: true,
    navRight: () => `<button type="button" class="navbtn press" data-map aria-label="Veure al mapa">${ICN('map', 24)}</button>`,
    render: () => `<div class="px">
      <div class="row gap8"><label class="search f1">${ICN('search', 18)}<span class="sr">Cerca</span><input type="search" placeholder="Cerca activitats i llocs" data-q enterkeyhint="search" autocomplete="off"></label><button type="button" class="btn dark sm press" data-filt aria-label="Filtres">${ICN('sliders', 18, '#fff')}Filtres<span class="cnt" data-fc hidden>0</span></button></div>
      <div class="chips scrollx" style="margin-top:8px;margin-bottom:4px" data-qf>${['Tot', 'Natura', 'Cultural', 'Història', 'Gastronomia'].map((t, i) => chip(t, i === 0, `data-qf="${t}"`)).join('')}</div>
      <p class="fn mut" style="margin:4px 0 12px" data-n role="status"></p>
      <div class="col" style="gap:24px" data-res></div>
      <p class="fn mut" style="margin-top:18px">Llocs reals del Vallès Oriental. Durades, distàncies i desnivells: dades d'exemple. Fotos reals il·lustratives.</p></div>`,
    mount(el, p, pg) {
      const res = el.querySelector('[data-res]'), q = el.querySelector('[data-q]'), nEl = el.querySelector('[data-n]'); let typ = 0;
      pg.ex = { el, res, q };
      const show = (list, animate) => {
        nEl.textContent = list.length === 1 ? '1 activitat' : `${list.length} activitats`;
        if (App.st.server) return errorState(pg);
        if (!list.length) return noResults(pg, q.value.trim());
        res.innerHTML = list.map(card).join(''); if (animate) IOS.stagger(res.children);
      };
      pg.ex.badge = () => { const n = nActive(), fc = el.querySelector('[data-fc]'); fc.textContent = n; fc.hidden = !n; el.querySelector('[data-filt]').setAttribute('aria-label', n ? `Filtres: ${n} actius` : 'Filtres'); };
      pg.ex.run = (animate, o) => {
        o = o || {}; pg.ex.badge();
        const list = filterActs(F, q.value, F.quick);
        if (o.instant) return show(list, false);
        loading(pg, () => show(list, true), o.ms);
      };
      q.addEventListener('input', () => { clearTimeout(typ); typ = setTimeout(() => pg.ex.run(true, { ms: 450 }), 350); });
      q.addEventListener('keydown', e => { if (e.key === 'Enter') { clearTimeout(typ); q.blur(); pg.ex.run(true, { ms: 400 }); } });
      el.addEventListener('click', e => {
        const c = e.target.closest('[data-qf]'); if (c && c.classList.contains('chip')) { el.querySelectorAll('.chip[data-qf]').forEach(x => { const on = x === c; x.setAttribute('aria-pressed', on); x.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + x.dataset.qf; }); F.quick = c.dataset.qf; pg.ex.run(true, { ms: 500 }); return; }
        if (e.target.closest('[data-filt]')) { IOS.Modal.present(15, {}, { detents: ['medium', 'large'], detent: 'large' }); return; }
        if (e.target.closest('[data-map]')) { pg.stack.push(16); return; }
        const f = e.target.closest('[data-fav]'); if (f) { toggleFav(f); return; }
        const o = e.target.closest('[data-open]'); if (o) { const id = o.closest('[data-act-id]').dataset.actId, hs = o.querySelector('[data-hsrc]'); pg.stack.push(17, { id }, hs ? { hero: { src: hs, target: '[data-hero]' } } : {}); return; }
        const alt = e.target.closest('[data-alt]'); if (alt) { const k = alt.dataset.alt; if (k === 'clear' || k === 'near') { q.value = ''; F.ty = []; F.act = []; F.dif = []; F.dur = ''; F.opt = []; F.quick = 'Tot'; el.querySelectorAll('.chip[data-qf]').forEach(x => { const on = x.dataset.qf === 'Tot'; x.setAttribute('aria-pressed', on); x.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + x.dataset.qf; }); pg.ex.run(true); } if (k === 'ask') { App.switchTab('xat'); const cp = App.stack('xat').top; setTimeout(() => { cp.chat.inp.value = 'Què puc fer avui a prop de casa?'; cp.chat.inp.dispatchEvent(new Event('input')); cp.chat.inp.focus(); }, 250); } return; }
        if (e.target.closest('[data-retry]')) { App.st.server = false; pg.ex.run(true); }
      });
      pg.ex.run(false, { instant: true });
    },
    reappear(el, p, pg) { el.querySelectorAll('[data-fav]').forEach(f => { const on = !!App.st.saved[f.dataset.fav]; f.setAttribute('aria-pressed', on); f.querySelector('.gl').innerHTML = ICN('heart', 20, on ? '#D70015' : 'currentColor'); }); }
  };
  function toggleFav(f) {
    if (App.needAccount('desar activitats')) return;
    const id = f.dataset.fav, on = !App.st.saved[id]; App.st.saved[id] = on; Store.save();
    f.setAttribute('aria-pressed', on); f.querySelector('.gl').innerHTML = ICN('heart', 20, on ? '#D70015' : 'currentColor');
    if (!IOS.rm()) IOS.anim(f.querySelector('.gl'), [{ transform: 'scale(.7)' }, { transform: 'scale(1)' }], Spring.spring(0.34, 0.5));
    IOS.Toast.show(on ? 'Desada a Perfil' : 'Treta de Perfil', on ? 'heart' : 'x');
  }
  window.toggleFav = toggleFav;
  /* 27 · càrrega: estructura grisa i la mascota caminant en lloc d'un spinner */
  function loading(pg, done, ms) {
    const res = pg.ex.res; res.innerHTML = `<div data-lh></div>${skel()}`;
    const L = MascotUI.loader(res.querySelector('[data-lh]'), 'Buscant rutes…');
    clearTimeout(pg.ex.lt); pg.ex.lt = setTimeout(() => { L.done(); done(); }, ms || 900);
  }
  /* sense resultats: la mascota proposa alternatives (una vegada per sessió; després, sense mascota) */
  function noResults(pg, term) {
    const first = MascotUI.canShow('explorar-buit');
    pg.ex.res.innerHTML = `<div class="empty-x">${first ? '<div class="row" style="align-items:flex-end;gap:4px"><div data-em></div><div class="bubble cc" style="margin-bottom:58px" role="status">No he trobat res: prova alguna d\'aquestes opcions.</div></div>' : `<div class="ring-s">${ICN('search', 30, 'var(--tint-tx)')}</div><p class="hd" style="margin:4px 0 0">No hi ha resultats${term ? ` per a «${esc(term)}»` : ''}</p><p class="fn mut" style="margin:2px 0 0">Prova alguna d'aquestes opcions.</p>`}
      <div class="col gap8" style="width:100%;margin-top:6px">
        <button type="button" class="sug press" data-alt="clear"><span class="f1">Treure la cerca i els filtres</span><i>${ICN('x', 16)}</i></button>
        <button type="button" class="sug press" data-alt="near"><span class="f1">Rutes a prop teu</span><i>${ICN('pin', 16)}</i></button>
        <button type="button" class="sug press" data-alt="ask"><span class="f1">Pregunta-ho a l'assistent</span><i>${ICN('sparkle', 16)}</i></button></div></div>`;
    if (first) { MascotUI.mark('explorar-buit'); const m = Mascot.create(pg.ex.res.querySelector('[data-em]'), { size: 118, state: 'proposant', label: 'Assistent' }); MascotUI.announce('Assistent: No he trobat res: prova alguna d\'aquestes opcions.'); const b = pg.ex.res.querySelector('.bubble'); if (!IOS.rm()) IOS.anim(b, [{ opacity: 0, transform: 'scale(.6)', transformOrigin: '0% 100%' }, { opacity: 1, transform: 'none', transformOrigin: '0% 100%' }], Spring.spring(0.42, 0.68), { delay: 300 });
      const row = b.parentElement; MascotUI.dismissible(row, m, { label: "Assistent: No he trobat res: prova alguna d'aquestes opcions. Tancar el missatge.", onGone: () => { const r = h(`<div class="col" style="align-items:center"><div class="ring-s">${ICN('search', 30, 'var(--tint-tx)')}</div><p class="hd" style="margin:4px 0 0">No hi ha resultats${term ? ` per a «${esc(term)}»` : ''}</p><p class="fn mut" style="margin:2px 0 0">Prova alguna d'aquestes opcions.</p></div>`); row.replaceWith(r); if (!IOS.rm()) IOS.fade(r, 0, 1, 200); } }); }
    IOS.stagger(pg.ex.res.querySelectorAll('.sug'), { delay: first ? 420 : 0 });
  }
  /* 28 · error (proposta: mascota en estat d'error) */
  function errorState(pg) {
    pg.ex.res.innerHTML = `<div class="empty-x" style="padding-top:20px"><div data-erm></div><h2 class="t3" style="margin-top:6px">No hem pogut carregar les rutes</h2><p class="co mut" style="margin:4px 0 0;max-width:30ch">Hi ha hagut un problema amb el servidor. Torna-ho a provar d'aquí a uns instants.</p><button type="button" class="btn auto" data-retry style="margin-top:14px;padding:12px 28px">Tornar-ho a provar</button><button type="button" class="tbtn" data-alt="clear">Anar a l'inici</button></div>`;
    Mascot.create(pg.ex.res.querySelector('[data-erm]'), { size: 118, state: 'error', label: 'Assistent' });
  }

  /* 15 · Filtres (fulla amb dues altures): recompte en directe */
  const fchip = (g, v, t, f) => chip(t, g === 'dur' ? f.dur === v : f[g].includes(v), `data-g="${g}" data-v="${v}"`);
  SC[15] = {
    title: 'Filtres', nav: false, tabbar: false, cls: 'fsheet',
    render: () => { const f = JSON.parse(JSON.stringify(F)); return `<div class="shead fhead"><button type="button" class="tbtn" data-clear>Netejar</button><h2 class="hd">Filtres</h2><button type="button" class="tbtn" data-apply style="font-weight:600">Aplicar</button></div>
      <div class="px">
        <h3 class="hd fsec">Tipus</h3><div class="chips">${['Natura', 'Cultural', 'Història', 'Gastronomia'].map(t => fchip('ty', t, t, f)).join('')}</div>
        <h3 class="hd fsec">Activitat</h3><div class="chips">${['A peu', 'Bici', 'Córrer'].map(t => fchip('act', t, t, f)).join('')}</div>
        <h3 class="hd fsec">Dificultat</h3><div class="chips">${['Fàcil', 'Moderada', 'Difícil'].map(t => fchip('dif', t, t, f)).join('')}</div>
        <h3 class="hd fsec">Durada</h3><div class="chips">${fchip('dur', 'lt2', 'Menys de 2 h', f)}${fchip('dur', '2a4', 'De 2 a 4 h', f)}${fchip('dur', 'gt4', 'Més de 4 h', f)}</div>
        <h3 class="hd fsec">Opcions</h3><div class="chips">${fchip('opt', 'fam', 'Amb nens', f)}${fchip('opt', 'gos', 'Amb gos', f)}${fchip('opt', 'tp', 'Sense cotxe (tren o bus)', f)}${fchip('opt', 'circ', 'Circular', f)}</div>
        <p class="fn mut" style="margin-top:14px">Durades i dificultats orientatives (dades d'exemple).</p></div>`; },
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-apply><span data-al>Veure activitats</span></button></div>`,
    mount(el, p, pg) {
      const f = JSON.parse(JSON.stringify(F));
      const count = () => { const n = filterActs(f, '', F.quick).length; const lab = el.querySelector('[data-al]'); lab.textContent = n ? `Veure ${n} ${n === 1 ? 'activitat' : 'activitats'}` : 'Cap activitat amb aquests filtres'; el.querySelectorAll('.bbar [data-apply]').forEach(b => { b.disabled = !n; b.style.opacity = n ? 1 : 0.45; }); };
      const paint = c => { const on = c.getAttribute('aria-pressed') === 'true'; c.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + c.textContent; };
      el.addEventListener('click', e => {
        const c = e.target.closest('.chip[data-g]'); if (c) {
          const g = c.dataset.g, v = c.dataset.v;
          if (g === 'dur') { f.dur = f.dur === v ? '' : v; el.querySelectorAll('.chip[data-g="dur"]').forEach(x => { x.setAttribute('aria-pressed', x.dataset.v === f.dur); paint(x); }); }
          else { const i = f[g].indexOf(v); if (i >= 0) f[g].splice(i, 1); else f[g].push(v); c.setAttribute('aria-pressed', i < 0); paint(c); }
          count(); return; }
        if (e.target.closest('[data-clear]')) { f.ty = []; f.act = []; f.dif = []; f.dur = ''; f.opt = []; el.querySelectorAll('.chip[data-g]').forEach(x => { x.setAttribute('aria-pressed', 'false'); paint(x); }); count(); return; }
        const ap = e.target.closest('[data-apply]'); if (ap && !ap.disabled) { Object.assign(F, f); IOS.Modal.dismiss().then(() => { const ex = App.stack('explorar').top; if (ex.ex) ex.ex.run(true, { ms: 700 }); else if (ex.mapRefresh) ex.mapRefresh(); }); }
      });
      count();
    }
  };

  /* 16 · Mapa: una marca per activitat (posicions aproximades a escala) */
  const proj = (a, w, h) => [0.08 + (a.ll[1] - 2.14) / 0.36 * 0.84, 0.2 + (41.80 - a.ll[0]) / 0.26 * 0.5];
  SC[16] = {
    title: 'Mapa', tabbar: true, nav: true, navCls: 'floating', backGlass: true, cls: 'mappg nonav',
    navRight: () => `<button type="button" class="navbtn" data-filt aria-label="Filtres"><span class="gl">${ICN('sliders', 20)}</span></button>`,
    render: () => `<div class="map" data-mapbox role="img" aria-label="Mapa del Vallès Oriental amb les activitats"></div>`,
    overlay: () => `<label class="search map-search"><span>${ICN('search', 18)}</span><span class="sr">Cerca en aquest mapa</span><input type="search" placeholder="Cerca un lloc o una activitat" data-mq enterkeyhint="search"></label>
      <div class="col" style="position:absolute;right:8px;top:calc(var(--safe-t) + 104px);z-index:12"><button type="button" class="iconbtn" data-layers aria-label="Capes del mapa"><span class="gl">${ICN('layers', 20)}</span></button><button type="button" class="iconbtn" data-loc aria-label="La meva ubicació"><span class="gl">${ICN('locate', 20)}</span></button></div>
      <div data-mcard></div>`,
    mount(el, p, pg) {
      let sel = p.id || 'caldes', me = null;
      const draw = () => {
        const list = filterActs(F, '', F.quick); if (!list.find(a => a.id === sel) && list.length) sel = list[0].id;
        const pins = list.map(a => { const [x, y] = proj(a); return [x, y, a.id === sel ? 'sel' : (a.ty.includes('Natura') ? 'nat' : 'poi'), a.id]; });
        if (me) pins.push([me[0], me[1], 'me']);
        const hits = list.map(a => { const [x, y] = proj(a); return `<circle data-pin="${a.id}" cx="${x * 393}" cy="${y * 852}" r="24" fill="transparent" style="cursor:pointer"><title>${esc(a.t)}</title></circle>`; }).join('');
        el.querySelector('[data-mapbox]').innerHTML = mapSVG(393, 852, { pins, seed: 3, label: 'Vallès Oriental', extra: '' }).replace('</svg>', hits + '</svg>');
        const a = actById(sel), mc = el.querySelector('[data-mcard]');
        mc.innerHTML = list.length ? `<button type="button" class="mapcard card cc" data-open style="position:absolute;left:12px;right:12px;bottom:calc(var(--tab-h) + 12px);z-index:20;display:flex;gap:12px;padding:10px;align-items:center;box-shadow:0 6px 24px rgba(0,0,0,.18);text-align:left" aria-label="${esc(a.t)}. Obrir el detall">
          ${actImg(a, 'width:84px;height:84px;border-radius:10px;flex:none', a.img ? 'data-hsrc' : '')}<div class="f1"><div class="hd">${a.t}</div><div class="fn mut">${a.mun}</div><div class="row" style="gap:8px;margin-top:6px">${metaLine(a.m)}${tagD(a)}</div></div></button>`
          : `<div class="mapcard card" style="position:absolute;left:12px;right:12px;bottom:calc(var(--tab-h) + 12px);z-index:20;padding:16px" role="status">Cap activitat amb els filtres actuals.</div>`;
      };
      pg.mapRefresh = draw; draw();
      el.addEventListener('click', e => {
        const pin = e.target.closest('[data-pin]'); if (pin) { sel = pin.dataset.pin; draw(); return; }
        if (e.target.closest('[data-open]')) { const hs = el.querySelector('[data-mcard] [data-hsrc]'); pg.stack.push(17, { id: sel }, hs ? { hero: { src: hs, target: '[data-hero]' } } : {}); return; }
        if (e.target.closest('[data-filt]')) { IOS.Modal.present(15, {}, { detents: ['medium', 'large'], detent: 'large' }); return; }
        if (e.target.closest('[data-layers]')) { IOS.Toast.show('Mapa base il·lustratiu del prototip', 'layers'); return; }
        if (e.target.closest('[data-loc]')) {
          if (!navigator.geolocation) { IOS.Toast.show('Ubicació no disponible', 'info'); return; }
          navigator.geolocation.getCurrentPosition(pos => { const a = { ll: [pos.coords.latitude, pos.coords.longitude] }; const [x, y] = proj(a); if (x < 0 || x > 1 || y < 0 || y > 1) { IOS.Toast.show('Ara no ets al Vallès Oriental', 'pin'); return; } me = [x, y]; draw(); IOS.Toast.show('Aquí ets tu', 'pin'); }, () => IOS.Toast.show('No tenim permís per veure la teva ubicació', 'info'), { timeout: 8000 });
        }
      });
      el.querySelector('[data-mq]').addEventListener('keydown', e => { if (e.key !== 'Enter') return; const r = filterActs({ ty: [], act: [], dif: [], dur: '', opt: [] }, e.target.value, 'Tot'); e.target.blur(); if (!r.length) { IOS.Toast.show('No hem trobat aquest lloc', 'search'); return; } F.quick = 'Tot'; sel = r[0].id; draw(); });
    },
    reappear(el, p, pg) { if (pg.mapRefresh) pg.mapRefresh(); }
  };

  /* 17 · Detall d'activitat (destinació de la transició «heroi») */
  async function share(a) {
    const url = location.origin + location.pathname, text = `${a.t} (${a.mun}) · ${a.m.join(' · ')} — a Valia`;
    try { if (navigator.share) { await navigator.share({ title: a.t, text, url }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
    try { await navigator.clipboard.writeText(text + ' ' + url); IOS.Toast.show('Enllaç copiat', 'check'); } catch (e) { IOS.Toast.show('No s\'ha pogut compartir', 'info'); }
  }
  window.shareAct = share;
  const directions = a => window.open(`https://www.google.com/maps/dir/?api=1&destination=${a.ll[0]},${a.ll[1]}&travelmode=${a.tp ? 'transit' : 'driving'}`, '_blank', 'noopener');
  window.directionsAct = directions;
  SC[17] = {
    title: 'Detall', short: 'Detall', tabbar: false, navCls: 'on-photo', backGlass: true, sb: 'light', scrollThreshold: 230, cls: 'detail',
    navCenter: p => esc(actById(p.id).t),
    navRight: p => `<button type="button" class="navbtn" data-share aria-label="Compartir"><span class="gl">${ICN('share', 20)}</span></button><button type="button" class="navbtn" data-save aria-label="Desar" aria-pressed="${App.st.saved[actById(p.id).id] ? 'true' : 'false'}"><span class="gl">${ICN('bookmark', 20, App.st.saved[actById(p.id).id] ? '#00A86B' : 'currentColor')}</span></button>`,
    render: p => { const a = actById(p.id);
      return `${a.img ? `<div class="pimg dhero bg-${a.img}"${slotAt(a.slot)} data-hero style="height:320px;background-position:${a.pos}"></div>` : `<div class="pimg dhero mapthumb"${slotAt(a.slot)} data-hero style="height:320px">${mapSVG(393, 320, { route: a.route, seed: a.seed, pins: [[.14, .86, 'start'], [.82, .2, 'end']] })}</div>`}
      <div class="dbody">
        <h1 class="t1">${a.t}</h1>
        <p class="fn mut row" style="gap:4px;margin:6px 0 0">${ICN('pin', 16)} ${a.mun}</p>
        <div class="row wrap" style="gap:6px 10px;margin:8px 0 14px">${metaLine(a.m)}<span class="row" style="gap:4px">${a.ty.slice(0, 2).map(t => `<span class="tag">${t}</span>`).join('')}<span class="tag">${a.circ ? 'Circular' : 'Lineal'}</span></span></div>
        <div class="row stats3" style="gap:8px;align-items:stretch"><div class="stat"><b>${a.dif}</b><span>Dificultat</span></div><div class="stat"><b>+${a.pts}</b><span>Punts en acabar</span></div><div class="stat"><b>${a.fam ? 'Sí' : 'No'}</b><span>Amb nens</span></div></div>
        <p class="co" style="margin:14px 0 0">${a.desc}</p>
        <button type="button" class="btn gray dl press" data-dl style="margin-top:12px;justify-content:flex-start;text-align:left;gap:12px">${ICN('download', 22)}<span class="f1"><span style="display:block">Descarregar per fer-la sense cobertura</span><span class="fn mut" style="font-weight:500" data-dls>Mapa, check-ins i fitxes</span></span></button>
        <div class="glist" style="margin:12px 0 0">
          <button type="button" class="grow ic" data-dir><span class="gic b">${ICN(a.tp ? 'train' : 'nav', 18, '#fff')}</span><span class="f1"><span class="bd" style="display:block">Com arribar-hi</span><span class="fn mut">${a.tp ? a.tpTx : 'Sense transport públic directe'}</span></span><span class="chev">${ICN('chevR', 18)}</span></button>
          <button type="button" class="grow ic" data-go="37"><span class="gic">${ICN('cloudSun', 18, '#fff')}</span><span class="f1 bd">Condicions i afluència</span><span class="chev">${ICN('chevR', 18)}</span></button>
          ${a.id === 'caldes' ? `<button type="button" class="grow ic" data-go="38"><span class="gic o">${ICN('star', 18, '#fff')}</span><span class="f1 bd">Punts destacats de la comunitat</span><span class="gv">8</span><span class="chev">${ICN('chevR', 18)}</span></button>` : ''}
          <button type="button" class="grow ic" data-go="18"><span class="gic k">${ICN('landmark', 18, '#fff')}</span><span class="f1 bd">${a.poi}</span><span class="chev">${ICN('chevR', 18)}</span></button></div>
        <h2 class="t3" style="margin:22px 0 8px">Recorregut</h2>
        <div class="cc" style="height:190px;border-radius:12px;overflow:hidden">${mapSVG(393, 190, { route: a.route, pins: [[.14, .86, 'start'], [.82, .2, 'end'], [.3, .47, 'poi'], [.62, .3, 'poi']], seed: a.seed })}</div>
        <div style="margin-top:12px">${elev(64).replace(/aria-label="[^"]*"/, `aria-label="Perfil d'alçada: ${fmtKm(a.km)}, desnivell positiu de ${a.up} m"`)}</div>
        <p class="fn mut" style="margin-top:6px">Durada, distància, desnivell i traçat: dades d'exemple. Lloc real del Vallès Oriental.</p></div>`; },
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-start>${ICN('nav', 20)} Iniciar ruta</button></div>`,
    mount(el, p, pg) {
      const a = actById(p.id); pg.actId = a.id;
      el.addEventListener('click', e => {
        const g = e.target.closest('[data-go]'); if (g) { pg.stack.push(+g.dataset.go, { id: a.id }); return; }
        if (e.target.closest('[data-start]')) { Route.start({ id: a.id }); return; }
        if (e.target.closest('[data-dir]')) { directions(a); return; }
        if (e.target.closest('[data-share]')) { share(a); return; }
        const sv = e.target.closest('[data-save]'); if (sv) { if (App.needAccount('desar activitats')) return; const on = !App.st.saved[a.id]; App.st.saved[a.id] = on; Store.save(); sv.setAttribute('aria-pressed', on); sv.querySelector('.gl').innerHTML = ICN('bookmark', 20, on ? '#00A86B' : 'currentColor'); IOS.Toast.show(on ? 'Desada a Perfil' : 'Treta de Perfil', on ? 'bookmark' : 'x'); return; }
        const d = e.target.closest('[data-dl]'); if (d && !d._busy) download(d, a);
      });
    }
  };
  /* descàrrega: la mascota camina dins del botó mentre es descarrega (sense spinner) */
  const dlDone = {};
  function download(btn, a) {
    if (dlDone[a.id]) { IOS.Toast.show('Ja està descarregada', 'check'); return; }
    btn._busy = true; const ic = btn.firstElementChild, sub = btn.querySelector('[data-dls]');
    const holder = h('<span class="dlm" aria-hidden="true"></span>'); ic.replaceWith(holder);
    const m = Mascot.create(holder, { size: 34, state: 'buscant', label: 'Assistent' }); m.svg.setAttribute('aria-hidden', 'true');
    let pct = 0; const t = setInterval(() => { pct = Math.min(100, pct + 7 + Math.round(Math.random() * 6)); sub.textContent = `Descarregant… ${pct} %`; if (pct >= 100) { clearInterval(t); m.destroy(); holder.replaceWith(h(`<span style="display:grid;place-items:center;width:22px">${ICN('checkC', 22, 'var(--tint-tx)')}</span>`)); sub.textContent = 'Descarregada en aquest dispositiu'; dlDone[a.id] = true; btn._busy = false; MascotUI.announce('Ruta descarregada'); } }, 160);
  }

  /* 37 · Condicions, afluència i punts destacats */
  const hours = [2, 3, 4, 6, 9, 11, 10, 8, 7, 9, 12, 10, 6];
  SC[37] = {
    title: 'Condicions', short: 'Condicions', tabbar: false,
    navCenter: p => esc(actById(p.id).t),
    render: p => { const a = actById(p.id); return `<div class="px">
      <div class="row" style="justify-content:space-between"><h2 class="t3">Condicions d'avui</h2><span class="tag">Dades d'exemple</span></div>
      <div class="cond" style="margin-top:10px">${[['sun', 'Sol', 'Cel'], ['thermo', a.id === 'turo' ? '9°' : '18°', a.id === 'turo' ? 'Màx. 12°' : 'Màx. 22°'], ['rain', '10 %', 'Pluja'], ['wind', 'Bona', 'Aire']].map(c => `<div>${ICN(c[0], 22)}<b>${c[1]}</b><span>${c[2]}</span></div>`).join('')}</div>
      <p class="fn mut" style="margin-top:8px">A l'app real: temps del Meteocat i qualitat de l'aire de la XVPCA (Generalitat).</p>
      <div class="row" style="justify-content:space-between;margin-top:26px"><h2 class="t3">Afluència</h2><span class="tag">Ara: baixa</span></div>
      <div class="crowd" style="margin-top:10px" role="img" aria-label="Afluència baixa"><i class="on"></i><i></i><i></i></div><div class="row fn mut" style="justify-content:space-between;margin-top:4px"><span>Baixa</span><span>Normal</span><span>Alta</span></div>
      <div class="hours" style="margin-top:14px" role="img" aria-label="Afluència per hores: ara és baixa">${hours.map((v, i) => `<span class="${i === 2 ? 'now' : ''}" style="height:${v * 8}%"></span>`).join('')}</div><div class="row fn mut" style="justify-content:space-between;margin-top:4px"><span>8 h</span><span>14 h</span><span>20 h</span></div>
      <div class="info" style="margin-top:12px">${ICN('leaf', 20, 'var(--tint-tx)')}<span>Millor hora: abans de les 11 h. Anar-hi quan hi ha poca gent ajuda a no massificar l'entorn.</span></div>
      ${a.id === 'caldes' ? `<div class="row" style="justify-content:space-between;margin:28px 0 10px"><h2 class="t3">Punts destacats</h2><button type="button" class="tbtn" data-all>Veure'ls tots (8)</button></div>
      <div class="hlrow">${hl('punt-1', '30% 55%', 'Termes romanes', 'Laia · fa 3 dies', 'Al migdia hi ha menys gent i el vapor es veu millor.', 12)}${hl('punt-2', '92% 28%', 'Font del Lleó', 'Jordi · fa 1 setmana', "L'aigua surt molt calenta: vigila amb els nens.", 9)}</div>
      <p class="fn mut" style="margin-top:10px">Consells, autors i comptadors: d'exemple.</p>` : `<p class="fn mut" style="margin-top:22px">Encara no hi ha consells de la comunitat per a aquesta ruta.</p>`}</div>`; },
    mount(el, p, pg) { const b = el.querySelector('[data-all]'); if (b) b.addEventListener('click', () => pg.stack.push(38, { id: p.id })); }
  };
  function hl(img, pos, t, who, tip, n) { return `<div class="hl cc">${photo(img, 'height:116px', pos)}<div style="padding:10px 12px 12px"><div class="hd">${t}</div><p class="fn" style="margin:4px 0 8px">${tip}</p><div class="row fn mut" style="justify-content:space-between"><span>${who}</span><span class="row" style="gap:4px">${ICN('thumbs', 14)}${n}</span></div></div></div>`; }
  /* 38 · Punts destacats de la comunitat */
  SC[38] = {
    title: 'Punts destacats', tabbar: false,
    render: () => `<div class="px col gap16"><p class="fn mut" style="margin:0">Itinerari termal de Caldes · 8 punts, en ordre de la ruta</p>
      ${hlRow('punt-1', '50% 62%', '1 · Termes romanes', 'Laia · fa 3 dies', 'Al migdia hi ha menys gent i el vapor es veu millor des de la plaça.', 12, 4)}
      ${hlRow('punt-2', '92% 28%', '2 · Font del Lleó', 'Jordi · fa 1 setmana', "L'aigua surt molt calenta: vigila amb els nens.", 9, 2)}</div>`,
    overlay: () => `<div class="bbar"><button type="button" class="btn dark" data-add>${ICN('plus', 20, '#fff')} Afegeix un consell</button></div>`,
    mount(el) {
      el.querySelector('[data-add]').addEventListener('click', () => { if (App.needAccount('afegir consells')) return; IOS.Alert.show({ title: 'Afegeix un consell', msg: 'Els consells passen per moderació abans de publicar-se. En aquest prototip encara no es poden enviar.', buttons: [{ t: "D'acord", style: 'pref' }] }); });
      el.addEventListener('click', e => { const m = e.target.closest('[data-more]'); if (m) { const card = m.closest('article'); IOS.Alert.actions({ title: 'Punt destacat', actions: [{ t: 'Denunciar', red: true, on: () => IOS.Toast.show('Gràcies: ho revisarem', 'check') }, { t: 'Amagar', on: () => { card.remove(); IOS.Toast.show('Consell amagat', 'x'); } }] }); } });
    }
  };
  function hlRow(img, pos, t, who, tip, n, own) { return `<article class="surf cc" style="overflow:hidden">${photo(img, 'height:150px', pos)}<div style="padding:12px 14px 14px"><div class="row" style="justify-content:space-between"><h3 class="hd">${t}</h3><button type="button" class="iconbtn" data-more aria-label="Més opcions: denunciar o amagar">${ICN('dots', 20)}</button></div><p class="co" style="margin:2px 0 8px">${tip}</p><div class="row fn mut" style="justify-content:space-between"><span>${who}</span><span class="row" style="gap:10px"><span class="row" style="gap:4px">${ICN('thumbs', 14)}${n}</span><span class="row" style="gap:4px">${ICN('camera', 14)}${own}</span></span></div></div></article>`; }

  /* 18 · Punt d'interès (patrimoni) */
  SC[18] = {
    title: 'Patrimoni', short: 'Patrimoni', tabbar: false, navCls: 'on-photo', backGlass: true, sb: 'light', scrollThreshold: 230, cls: 'detail',
    navCenter: p => esc(actById(p.id).poi),
    navRight: () => `<button type="button" class="navbtn" data-share aria-label="Compartir"><span class="gl">${ICN('share', 20)}</span></button>`,
    render: p => { const a = actById(p.id), caldes = a.id === 'caldes';
      return `${a.img ? `<div class="pimg dhero bg-${a.img}"${slotAt(a.slot)} style="height:300px;background-position:50% 32%"></div>` : `<div class="pimg dhero mapthumb"${slotAt(a.slot)} style="height:300px">${mapSVG(393, 300, { seed: a.seed + 1, pins: [[.5, .55, 'sel']] })}</div>`}
      <div class="dbody"><div class="row" style="gap:6px"><span class="tag">${a.ty.includes('Història') ? 'Patrimoni' : 'Natura'}</span>${caldes ? '<span class="tag">BCIN</span>' : ''}</div>
        <h1 class="t1" style="margin-top:10px">${a.poi}</h1>
        <p class="fn mut row" style="gap:4px;margin:8px 0 14px">${ICN('pin', 16)} ${caldes ? 'Plaça de la Font del Lleó · ' : ''}${a.mun}</p>
        <p class="co" style="margin:0 0 12px">${caldes ? 'Restes termals romanes al nucli antic de Caldes de Montbui, considerada la primera vila termal de Catalunya.' : a.desc}</p>
        <h2 class="hd" style="margin-bottom:4px">Rutes que hi passen</h2>
        <button type="button" class="grow" data-route style="padding-left:0;padding-right:0"><span class="cc" style="width:52px;height:52px;border-radius:10px;overflow:hidden;flex:none">${mapSVG(120, 120, { route: a.route, seed: a.seed })}</span><span class="f1"><span class="hd" style="display:block">${a.t}</span>${metaLine(a.m)}</span><span class="chev">${ICN('chevR', 18)}</span></button>
        <p class="fn mut" style="margin-top:8px">Font prevista per a la fitxa: Inventari del Patrimoni Cultural de la Diputació de Barcelona. Text del prototip.</p></div>`; },
    overlay: () => `<div class="bbar row" style="gap:12px"><button type="button" class="btn f1" data-dir>Com arribar</button><button type="button" class="btn out" data-save style="width:64px;flex:none" aria-label="Desar la ruta">${ICN('bookmark', 22)}</button></div>`,
    mount(el, p, pg) {
      const a = actById(p.id);
      el.querySelector('[data-route]').addEventListener('click', () => { const s = pg.stack; if (s.pages.length > 1 && s.pages[s.pages.length - 2].id === 17) s.pop(); else s.push(17, { id: a.id }); });
      el.querySelector('[data-dir]').addEventListener('click', () => directions(a));
      el.querySelector('[data-share]').addEventListener('click', () => share(a));
      el.querySelector('[data-save]').addEventListener('click', () => { if (App.needAccount('desar activitats')) return; const on = !App.st.saved[a.id]; App.st.saved[a.id] = on; Store.save(); IOS.Toast.show(on ? 'Ruta desada a Perfil' : 'Treta de Perfil', on ? 'bookmark' : 'x'); });
    }
  };
})();

/* ---- scr_route.js ---- */
/* ===================== Pantalles · ruta guiada amb check-ins (19, 20, 40, 41 i 21) ===================== */
const Route = (function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const live = o => `<div class="map" role="img" aria-label="Mapa de la ruta amb la teva posició i 2 check-ins fets">${mapSVG(393, 852, Object.assign({ route: 'caldes', pins: [[.14, .86, 'start'], [.22, .72, 'chk'], [.3, .47, 'chk'], [.5, .38, 'me']], seed: 7 }, o || {}))}</div>`;
  let timer = 0, secs = 42 * 60 + 18;
  const fmtT = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  /* 19 · Ruta guiada (pantalla completa): check-ins que sumen punts */
  const N = 4;
  SC[19] = {
    title: 'Ruta en curs', nav: false, tabbar: false, cls: 'routepg',
    render: () => `<div data-map>${live()}</div>`,
    overlay: p => { const a = actById(p.id); return `<div class="pill cc" role="status" style="top:calc(var(--safe-t) + 8px)"><span class="dot" data-dot></span><span data-pill>Ruta en curs · ${a.act.toLowerCase()}</span></div>
      <div class="nextc card cc" data-next style="top:calc(var(--safe-t) + 52px)"><span class="gic k" style="width:36px;height:36px;border-radius:10px;display:grid;place-items:center;background:var(--bg2);color:var(--label)">${ICN('landmark', 18)}</span><div class="f1"><div class="fn mut" data-nd>Proper check-in · a 200 m</div><div class="hd" data-nn>Check-in 1 de ${N}</div></div><button type="button" class="btn sm" data-chk style="width:auto;padding:0 14px">Fer check-in</button></div>
      <div class="col" style="position:absolute;right:8px;top:calc(var(--safe-t) + 148px);z-index:12"><button type="button" class="iconbtn" data-layers aria-label="Capes del mapa"><span class="gl">${ICN('layers', 20)}</span></button><button type="button" class="iconbtn" data-center aria-label="Centrar en la meva ubicació"><span class="gl">${ICN('locate', 20)}</span></button></div>
      <div class="rpanel cc" data-panel><div class="grab" aria-hidden="true"></div>
        <div class="col" style="align-items:center"><div class="num" style="font-size:calc(40px*var(--dtL))" data-time role="timer" aria-label="Temps de la ruta">0:00</div><div class="fn mut">Temps</div></div>
        <div class="row stats3" style="margin-top:12px;text-align:center"><div class="f1"><b class="t3" data-left>${fmtKm(a.km)}</b><div class="fn mut">Falten</div></div><div class="f1"><b class="t3" data-cn>0 de ${N}</b><div class="fn mut">Check-ins</div></div><div class="f1"><b class="t3">+${a.up} m</b><div class="fn mut">Desnivell</div></div></div>
        <div class="row" style="justify-content:space-between;margin-top:12px;padding:0 26px"><button type="button" class="iconbtn fill" data-lock aria-label="Bloquejar la pantalla"><span class="gl" style="width:52px;height:52px;border-radius:26px">${ICN('lock', 22)}</span></button><button type="button" class="bigbtn press" data-pause aria-label="Posar en pausa o finalitzar">${ICN('pause', 32, '#0B0D0C')}</button><button type="button" class="iconbtn fill" data-shield aria-label="Seguretat: ubicació en directe i 112"><span class="gl" style="width:52px;height:52px;border-radius:26px">${ICN('shield', 22)}</span></button></div>
        <p class="fn mut row" style="justify-content:center;gap:4px;margin:10px 0 0">${ICN('eyeOff', 14)} No gravem el teu recorregut · demostració</p></div>
      <div data-alertk></div>`; },
    mount(el, p, pg) {
      const a = actById(p.id); Route.act = a; Route.done = 0; Route.earned = 0;
      clearInterval(timer); secs = 0;
      timer = setInterval(() => { if (pg.paused) return; secs++; const t = el.querySelector('[data-time]'); if (t) t.textContent = fmtT(secs); }, 1000);
      pg.cleanups.push(() => clearInterval(timer));
      const upd = () => {
        el.querySelector('[data-cn]').textContent = `${Route.done} de ${N}`;
        el.querySelector('[data-left]').textContent = fmtKm(Math.max(0, Math.round(a.km * (1 - Route.done / N) * 10) / 10));
        const nb = el.querySelector('[data-chk]');
        if (Route.done >= N) { el.querySelector('[data-nd]').textContent = 'Ruta completada'; el.querySelector('[data-nn]').textContent = 'Tots els check-ins fets'; nb.textContent = 'Finalitzar'; }
        else { el.querySelector('[data-nd]').textContent = 'Proper check-in · a 200 m'; el.querySelector('[data-nn]').textContent = `Check-in ${Route.done + 1} de ${N}`; }
      };
      el.addEventListener('click', e => {
        if (e.target.closest('[data-chk]')) {
          if (Route.done >= N) { el.querySelector('[data-pause]').click(); return; }
          Route.done++;
          if (Store.isGuest()) IOS.Toast.show(`Check-in ${Route.done} de ${N} · crea un compte per guanyar punts`, 'checkC');
          else { Store.add(20, `Check-in · ${a.t}`, 'checkC'); Route.earned += 20; IOS.Toast.show(`Check-in fet · +20 punts`, 'checkC'); }
          if (navigator.vibrate) navigator.vibrate(30);
          upd(); return;
        }
        if (e.target.closest('[data-layers]')) IOS.Toast.show('Mapa base il·lustratiu del prototip', 'layers');
        if (e.target.closest('[data-center]')) IOS.Toast.show('Centrat en la teva posició', 'locate');
        if (e.target.closest('[data-lock]')) IOS.Toast.show('Pantalla bloquejada', 'lock');
        if (e.target.closest('[data-pause]')) { pg.paused = true; el.querySelector('[data-pill]').textContent = 'En pausa'; el.querySelector('[data-dot]').style.background = '#636366'; IOS.Modal.present(20, {}, { detents: ['medium', 'large'], detent: IOS.settings.dt >= 1.3 ? 'large' : 'medium' }); }
        if (e.target.closest('[data-shield]')) IOS.Modal.present(41, {}, { detents: ['large'] });
        if (e.target.closest('[data-back]')) { Route.deviate(false); }
        if (e.target.closest('[data-ign]')) { Route.deviate(false); }
      });
      if (p.deviate) setTimeout(() => Route.deviate(true), 400);
      Route.page = pg; upd();
    }
  };
  /* 40 · Avís: t'has desviat del camí */
  function deviate(on) {
    const pg = Route.page; if (!pg) return; const el = pg.el, host = el.querySelector('[data-alertk]');
    el.querySelector('[data-map]').innerHTML = live(on ? { pins: [[.14, .86, 'start'], [.22, .72, 'chk'], [.3, .47, 'chk'], [.36, .62, 'off']], extra: '<path d="M141 528 L118 402" stroke="#0B0D0C" stroke-width="3" stroke-dasharray="2 7" stroke-linecap="round"/>' } : {});
    el.querySelector('[data-next]').style.visibility = on ? 'hidden' : '';
    if (!on) { const a = host.firstElementChild; if (a) IOS.fade(a, 1, 0, 180).then(() => { host.innerHTML = ''; }); el.querySelector('[data-nd]').textContent = 'Proper check-in · a 200 m'; return; }
    host.innerHTML = `<div class="alertk cc" role="alert"><div class="row" style="align-items:flex-start"><span style="width:40px;height:40px;border-radius:10px;background:#D70015;display:grid;place-items:center;flex:none">${ICN('alert', 22, '#fff')}</span><div class="f1"><div class="hd">T'has desviat del camí</div><p class="fn" style="margin:2px 0 0;color:rgba(255,255,255,.86)">Ets a 60 m de la ruta. Torna enrere uns 40 m i agafa el camí de la dreta.</p></div></div>
      <div class="row acts2" style="gap:8px;margin-top:12px"><button type="button" class="btn sm f1" data-back style="width:auto">${ICN('nav', 18)} Com hi torno</button><button type="button" class="btn sm f1" data-ign style="width:auto;background:rgba(255,255,255,.14);color:#fff">Ignora</button></div>
      <p class="c1 row" style="gap:4px;margin:10px 0 0;color:rgba(255,255,255,.8)">${ICN('vibrate', 14)} Vibració i so en sortir de la ruta · sense gravar</p></div>`;
    const a = host.firstElementChild;
    if (IOS.rm()) IOS.fade(a, 0, 1, 220); else IOS.anim(a, [{ transform: 'translateY(-130%)' }, { transform: 'none' }], Spring.spring(0.42, 0.78));
    el.querySelector('[data-nd]').textContent = 'Proper check-in · Pont romànic · 350 m';
  }

  /* 20 · Ruta en pausa (fulla mitjana) */
  SC[20] = {
    title: 'Ruta en pausa', nav: false, tabbar: false,
    render: () => `<div class="px" style="padding-top:4px"><h2 class="t2" style="text-align:center">Ruta en pausa</h2>
      <div class="row stats3" style="margin:14px 0 18px;text-align:center"><div class="f1"><b class="t3" data-pt>42:18</b><div class="fn mut">Temps</div></div><div class="f1"><b class="t3" data-pc>0 de 4</b><div class="fn mut">Check-ins</div></div><div class="f1"><b class="t3" data-pp>0</b><div class="fn mut">Punts</div></div></div>
      <div class="col gap8"><button type="button" class="btn" data-resume>Reprendre</button><button type="button" class="btn out" data-finish>Finalitzar</button><button type="button" class="tbtn red" data-quit style="width:100%">Abandonar la ruta</button></div></div>`,
    mount(el) {
      el.querySelector('[data-pt]').textContent = fmtT(secs); el.querySelector('[data-pc]').textContent = `${Route.done} de ${N}`; el.querySelector('[data-pp]').textContent = '+' + Route.earned;
      el.querySelector('[data-resume]').addEventListener('click', () => { IOS.Modal.dismiss().then(() => { const pg = Route.page; if (pg) { pg.paused = false; pg.el.querySelector('[data-pill]').textContent = 'Ruta en curs · ' + Route.act.act.toLowerCase(); pg.el.querySelector('[data-dot]').style.background = ''; } }); });
      // el resum puja per sobre de la ruta; quan ja és a dalt, la ruta es tanca per sota (sense passar pel detall)
      el.querySelector('[data-finish]').addEventListener('click', async () => { clearInterval(timer); await IOS.Modal.dismiss(); const under = IOS.Modal.list.slice(); await IOS.Modal.present(21, { id: Route.act.id }, { kind: 'cover' }); under.forEach(m => IOS.Modal.drop(m)); });
      el.querySelector('[data-quit]').addEventListener('click', () => IOS.Alert.show({ title: 'Vols abandonar la ruta?', msg: Route.earned ? `Conservaràs els ${Route.earned} punts dels check-ins que ja has fet.` : 'No guanyaràs els punts de la ruta.', buttons: [{ t: 'Cancel·la' }, { t: 'Abandonar', style: 'red pref', on: () => IOS.Modal.dismissAll() }] }));
    }
  };
  /* 41 · Seguretat: ubicació en directe i 112 */
  SC[41] = {
    title: 'Seguretat', nav: false, tabbar: false,
    render: () => `<div class="shead"><h2 class="t2">Seguretat</h2><button type="button" class="iconbtn fill" data-close aria-label="Tancar"><span class="gl">${ICN('x', 18)}</span></button></div>
      <div class="px"><div class="surf row" style="padding:14px 16px;align-items:flex-start"><div class="f1"><div class="hd">Comparteix la teva ubicació en directe</div><p class="fn mut" style="margin:2px 0 0">Fins a 3 contactes veuran on ets mentre dura la ruta. S'atura sola quan l'acabes.</p></div>${sw(true, 'Comparteix la teva ubicació en directe')}</div>
      <h3 class="gtitle" style="padding-left:4px">Contactes (2 de 3)</h3>
      <div class="col gap8">${[['A', 'Anna', 'Veu la teva ubicació'], ['P', 'Pau', 'Enllaç enviat']].map(c => `<div class="row"><span class="ctc">${c[0]}</span><div class="f1"><div class="hd">${c[1]}</div><div class="fn mut">${c[2]}</div></div>${ICN('checkC', 20, 'var(--tint-tx)')}</div>`).join('')}<button type="button" class="row grow" data-addc style="padding-left:0"><span class="ctc" style="background:var(--bg2)">${ICN('userPlus', 20)}</span><span class="f1 hd">Afegeix un contacte</span></button></div>
      <button type="button" class="btn gray sm" data-resend style="width:100%;margin-top:12px">${ICN('link', 18)} Enviar l'enllaç de nou</button>
      <button type="button" class="btn red" data-112 style="margin-top:26px">${ICN('phone', 20, '#fff')} Trucar al 112</button>
      <div class="row fn mut" style="justify-content:space-between;margin-top:10px"><span>Coordenades: <span data-coord>41,6326 N · 2,1668 E</span></span><button type="button" class="tbtn" data-copy>Copiar</button></div>
      <p class="fn mut" style="margin-top:8px">Contactes i coordenades: il·lustratius.</p></div>`,
    mount(el) {
      el.querySelector('[data-close]').addEventListener('click', () => IOS.Modal.dismiss());
      el.querySelector('[data-112]').addEventListener('click', () => IOS.Alert.show({ title: 'Trucar al 112?', msg: 'En el prototip no es fa cap trucada.', buttons: [{ t: 'Cancel·la' }, { t: 'Trucar', style: 'pref red' }] }));
      el.querySelector('[data-copy]').addEventListener('click', async () => { const tx = (el.querySelector('[data-coord]') || {}).textContent || ''; try { await navigator.clipboard.writeText(tx); } catch (e) { /* res */ } IOS.Toast.show('Coordenades copiades', 'copy'); });
      el.querySelector('[data-addc]').addEventListener('click', () => IOS.Toast.show('Contactes: funció de demostració', 'userPlus'));
      el.querySelector('[data-resend]').addEventListener('click', () => IOS.Toast.show("Enllaç tornat a enviar (demostració)", 'link'));
      const a = Route.act || actById('caldes'), c = el.querySelector('[data-coord]'); if (c) c.textContent = `${a.ll[0].toFixed(4).replace('.', ',')} N · ${a.ll[1].toFixed(4).replace('.', ',')} E`;
    }
  };
  /* 21 · Resum: com has arribat (per al CO₂ estimat) i desar */
  const FE = { 'A peu': 0, 'Bici': 0, 'Tren o bus': 0.04, 'Cotxe': 0.15 };   // kg CO₂e/km, valors indicatius (dades d'exemple)
  const hav = (p, q) => { const R = 6371, r = x => x * Math.PI / 180, dl = r(q[0] - p[0]), dn = r(q[1] - p[1]); const h2 = Math.sin(dl / 2) ** 2 + Math.cos(r(p[0])) * Math.cos(r(q[0])) * Math.sin(dn / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h2)); };
  SC[21] = {
    title: 'Resum', tabbar: false, back: false, cls: 'notab',
    navLeft: () => `<button type="button" class="navbtn press" data-close aria-label="Tancar sense desar">${ICN('x', 24)}</button>`,
    render: p => { const a = actById(p.id), d = Store.cur(); const acc = d.loc ? Math.min(60, Math.max(2, Math.round(hav(d.loc, a.ll) * 1.3))) : 10;
      return `<div style="height:200px" class="cc">${mapSVG(393, 200, { route: a.route, pins: [[.14, .86, 'start'], [.82, .2, 'end'], [.3, .47, 'chk'], [.62, .3, 'chk']], seed: a.seed })}</div>
      <div class="px" style="padding-top:14px"><h1 class="t2">${a.t}</h1><p class="fn mut" style="margin:2px 0 12px">${Store.today()} · ${a.mun}</p>
        <div class="row stats3" style="gap:8px;align-items:stretch"><div class="stat"><b>${fmtKm(a.km)}</b><span>Distància</span></div><div class="stat"><b>${fmtT(Math.max(secs, 1))}</b><span>Temps</span></div></div>
        <div class="row stats3" style="gap:8px;align-items:stretch;margin-top:8px"><div class="stat"><b>+${a.up} m</b><span>Desnivell</span></div><div class="stat"><b>${Route.done || 0} de ${N}</b><span>Check-ins</span></div></div>
        <h2 class="hd" style="margin:16px 0 8px">Com has arribat a l'inici?</h2>${seg(Object.keys(FE), 2, 'mode')}
        <div class="surf row" style="margin-top:10px;padding:14px 16px">${ICN('leaf', 24, 'var(--tint-tx)')}<div class="f1"><b class="hd" data-co2></b><div class="fn mut">Anada i tornada de ${acc} km fins a l'inici, comparat amb anar-hi en cotxe (estimat)</div></div></div>
        <div class="surf row" style="margin-top:8px;padding:14px 16px">${ICN('bolt', 24, 'var(--tint-tx)')}<div class="f1"><b class="hd">+${a.pts} punts d'energia</b><div class="fn mut">En desar la ruta${Route.earned ? ` · ja n'has sumat ${Route.earned} amb els check-ins` : ''}</div></div></div>
        <h2 class="hd" style="margin:16px 0 8px">Fotos de la sortida</h2><div class="row gap8" data-photos><label class="cc addph" aria-label="Afegir una foto">${ICN('camera', 24)}<input type="file" accept="image/*" data-file hidden></label></div>
        <div class="glist" style="margin:16px 0 0"><button type="button" class="grow ic" data-vis><span class="gic g">${ICN('eye', 18, '#fff')}</span><span class="f1 bd">Visible per a</span><span class="gv" data-visv>Només jo</span><span class="chev">${ICN('chevR', 18)}</span></button></div>
        <p class="fn mut" style="margin-top:10px">CO₂ calculat amb factors d'emissió indicatius (dades d'exemple). Les fotos no surten del teu mòbil.</p></div>`; },
    overlay: () => `<div class="bbar"><button type="button" class="btn" data-save>Desar la ruta</button></div>`,
    mount(el, p) {
      const a = actById(p.id), d = Store.cur(); const acc = d.loc ? Math.min(60, Math.max(2, Math.round(hav(d.loc, a.ll) * 1.3))) : 10;
      let mode = 'Tren o bus'; const co2 = () => Math.round(2 * acc * (FE.Cotxe - FE[mode]) * 10) / 10;
      const paint = () => { el.querySelector('[data-co2]').textContent = mode === 'Cotxe' ? 'Sense estalvi de CO₂ en el trajecte' : `${String(co2()).replace('.', ',')} kg de CO₂ estalviats (estimat)`; };
      IOS.segmented(el.querySelector('.segc'), i => { mode = Object.keys(FE)[i]; paint(); }); paint();
      el.querySelector('[data-file]').addEventListener('change', e => { const f = e.target.files && e.target.files[0]; if (!f) return; const url = URL.createObjectURL(f); el.querySelector('[data-photos]').insertAdjacentHTML('afterbegin', `<div class="cc" style="width:84px;height:84px;border-radius:12px;flex:none;background:url(${url}) center/cover"></div>`); IOS.Toast.show('Foto afegida', 'camera'); });
      const vis = ['Només jo', 'Amics', 'Tothom']; let vi = 0; el.querySelector('[data-vis]').addEventListener('click', () => { vi = (vi + 1) % 3; el.querySelector('[data-visv]').textContent = vis[vi]; });
      el.querySelector('[data-close]').addEventListener('click', () => IOS.Alert.show({ title: 'Sortir sense desar?', msg: `No sumaràs els ${a.pts} punts de la ruta.`, buttons: [{ t: 'Cancel·la' }, { t: 'Sortir', style: 'red', on: () => IOS.Modal.dismissAll() }] }));
      el.querySelector('[data-save]').addEventListener('click', async () => {
        if (App.needAccount('desar la ruta i sumar punts')) return;
        Store.finishRoute(a, { co2: mode === 'Cotxe' ? 0 : co2(), checkins: Route.done || 0 });
        await IOS.Modal.dismissAll(); IOS.Toast.show(`Ruta desada · +${a.pts} punts`, 'checkC');
        const pf = App.stack('perfil'); if (pf && pf.top && pf.top.d.reappear) pf.top.d.reappear(pf.top.el, pf.top.params, pf.top);
      });
    }
  };
  return { start(o) { return IOS.Modal.present(19, Object.assign({ id: 'caldes' }, o || {}), { kind: 'cover' }); }, deviate, page: null, act: null, done: 0, earned: 0 };
})();

/* ---- scr_profile.js ---- */
/* ===================== Pantalles · perfil, estadístiques, impacte i ajustos (22, 30, 35, 26, 42, 43, 23, 39, 24, 25) ===================== */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const ugc = (img, pos, t, d, m, pts) => `<article class="ugc cc">${photo(img, 'position:absolute;inset:0', pos)}<div class="ugc-sc"></div><span class="tag ugc-own">${ICN('camera', 14, '#fff')} Foto teva</span>
    <div class="glass ugc-g"><div class="hd">${t}</div><div class="fn mut">${d}</div><div class="row" style="justify-content:space-between;margin-top:6px"><span class="fn">${m.join(' · ')}</span><span class="fn" style="font-weight:600">${pts}</span></div></div></article>`;
  const days = ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'];
  let peekTurn = 0;
  const kmTx = v => String(Math.round(v * 10) / 10).replace('.', ',');
  const minTx = m => m >= 60 ? `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, '0')}` : `${m} min`;
  const goalR = () => { const d = Store.cur(); return (window.REWARDS || []).find(r => r.id === d.goal) || { t: 'Recàrrega de transport públic', p: 500 }; };
  const since = d => d.sample ? (Store.isGuest() ? "Mode convidat · dades d'exemple" : "Compte de demostració · dades d'exemple") : 'Membre des del ' + new Date(d.since || Date.now()).toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  /* estadístiques calculades a partir de les rutes desades */
  const METRIC = { 'Distància': r => r.km || 0, 'Temps': r => r.min || 0, 'Desnivell': r => r.up || 0 };
  function stats(el) {
    const d = Store.cur(), per = el._per == null ? 1 : el._per, met = el._met || 'Distància', f = METRIC[met], now = Date.now(), D = 864e5;
    const lim = [new Date().setHours(0, 0, 0, 0), now - 7 * D, now - 30 * D, 0][per];
    let tot = per === 3 ? (met === 'Distància' ? d.km : met === 'Temps' ? d.min || 0 : d.up || 0) : d.routes.filter(r => (r.ts || 0) >= lim).reduce((s, r) => s + f(r), 0);
    const lab = ['Avui', 'Últims 7 dies', 'Últims 30 dies', 'Total'][per];
    el.querySelector('[data-sv]').textContent = met === 'Distància' ? kmTx(tot) + ' km' : met === 'Temps' ? minTx(Math.round(tot)) : fmt(Math.round(tot)) + ' m';
    el.querySelector('[data-sl]').textContent = lab;
    const mon = new Date(); mon.setHours(0, 0, 0, 0); mon.setDate(mon.getDate() - ((mon.getDay() + 6) % 7));
    const vals = days.map((_, i) => d.routes.filter(r => r.ts >= +mon + i * D && r.ts < +mon + (i + 1) * D).reduce((s, r) => s + f(r), 0)), mx = Math.max(...vals, 1), td = (new Date().getDay() + 6) % 7;
    const ch = el.querySelector('[data-chart]');
    ch.innerHTML = days.map((dd, i) => `<div class="b ${i === td ? 'on' : ''}"><i style="height:${Math.max(3, Math.round(vals[i] / mx * 100))}%"></i><span>${dd}</span></div>`).join('');
    ch.setAttribute('aria-label', `${met} per dies d'aquesta setmana: ${days.map((dd, i) => `${dd} ${Math.round(vals[i] * 10) / 10}`).join(', ')}`);
  }
  function head(el) {
    const d = Store.cur(), g = goalR(), pct = Math.min(100, Math.round(d.points / g.p * 100)), left = Math.max(0, g.p - d.points);
    el.querySelector('[data-pav]').textContent = (d.name || 'U').trim().charAt(0).toUpperCase();
    el.querySelector('[data-pnm]').textContent = d.name; el.querySelector('[data-since]').textContent = since(d);
    el.querySelector('[data-pts]').textContent = fmt(d.points); el.querySelector('[data-ppct]').textContent = pct + ' %'; el.querySelector('[data-pbar]').style.width = pct + '%';
    el.querySelector('[data-goal]').textContent = 'Objectiu: ' + g.t.charAt(0).toLowerCase() + g.t.slice(1);
    el.querySelector('[data-pleft]').textContent = left ? `Et falten ${fmt(left)} punts, unes ${Math.max(1, Math.ceil(left / 120))} rutes.` : 'Ja la pots bescanviar a la botiga.';
    el.querySelector('[data-co2]').textContent = kmTx(d.co2) + ' kg'; el.querySelector('[data-kmc]').textContent = kmTx(d.km) + ' km';
    el.querySelector('[data-chk]').textContent = fmt(d.checkins); el.querySelector('[data-plc]').textContent = fmt(d.places);
    const tot = 12480 + (d.sample ? 0 : d.co2); el.querySelector('[data-comm]').textContent = fmt(Math.round(tot)) + ' kg';
    el.querySelector('[data-mine]').textContent = `Objectiu del mes: 15.000 kg. Tu hi has aportat ${kmTx(d.co2)} kg (${(d.co2 / tot * 100).toFixed(1).replace('.', ',')} %).`;
    el.querySelector('[data-yearsub]').textContent = `${kmTx(d.km)} km sense cotxe · comparteix-ho`;
    const gb = el.querySelector('[data-guest]'); gb.hidden = !Store.isGuest();
    stats(el);
  }
  window.CO2_INFO = () => IOS.Alert.show({ title: 'Com calculem el CO₂', msg: "Només comptem el trajecte fins a l'inici de la ruta: CO₂ estalviat = km d'anada i tornada × (factor del cotxe − factor del mitjà que has fet servir). Factors indicatius: cotxe 0,15 kg/km, tren o bus 0,04 kg/km, a peu o en bici 0. Són estimacions de demostració, pendents dels factors oficials (MITECO).", buttons: [{ t: "D'acord", style: 'pref' }] });

  /* 22 · Perfil (inclou estadístiques, impacte i rutes en el mateix desplaçament) */
  SC[22] = {
    title: 'Perfil', tabbar: true, navCls: 'on-photo', sb: 'light', scrollThreshold: 250, cls: 'profile',
    navRight: () => `<button type="button" class="navbtn" data-set aria-label="Ajustos"><span class="gl">${ICN('cog', 20)}</span></button>`,
    render: () => `<div class="phead"><div class="pimg bg-capcalera-perfil"${slotAt('capcalera-perfil')} style="position:absolute;inset:0;background-position:50% 55%"></div><div class="phead-sc"></div>
        <div class="phead-in"><h1 class="lt" data-ptitle style="color:#fff;align-self:flex-start">Perfil</h1>
        <div class="row" data-pname><span class="pav" data-pav>U</span><div class="f1"><div class="t3" style="color:#fff" data-pnm></div><div class="fn" style="color:rgba(255,255,255,.9)" data-since></div></div></div>
        <div class="glass pcard" data-pcard><div class="row" style="justify-content:space-between;gap:8px"><span class="row" style="gap:6px">${ICN('bolt', 20, '#1FD08A')}<b class="t3" data-pts></b><span class="fn mut">punts d'energia</span></span><button type="button" class="tbtn" data-shop style="color:#fff;min-height:44px;padding:0 4px">Botiga ›</button></div>
          <div class="row fn" style="justify-content:space-between;margin-top:6px"><span style="font-weight:600" data-goal></span><span class="mut" data-ppct></span></div><div class="bar" style="margin-top:8px"><i data-pbar></i></div><p class="fn mut" style="margin:8px 0 0" data-pleft></p></div></div></div>
      <div class="px" data-guest hidden><div class="info" style="margin-top:14px;align-items:center;flex-wrap:wrap">${ICN('lock', 18)}<span style="flex:1 1 170px">Estàs com a convidat: veus dades d'exemple i no es desa res.</span><button type="button" class="btn sm" data-signup style="width:auto">Crear compte</button></div></div>
      <section class="px" id="p-stats"><h2 class="t2" style="margin:20px 0 10px">Estadístiques</h2>${seg(['Dia', 'Setmana', 'Mes', 'Total'], 1)}
        <div class="chips" style="margin-top:6px">${chip('Distància', 1)}${chip('Temps')}${chip('Desnivell')}</div>
        <div style="margin-top:8px"><b class="num" style="font-size:var(--t-t1)" data-sv></b><div class="fn mut" data-sl></div></div>
        <div class="chart" role="img" data-chart></div></section>
      <section class="px" id="p-impact"><div class="row" style="justify-content:space-between;margin:30px 0 10px"><h2 class="t2">Impacte sostenible</h2><button type="button" class="tbtn" data-how>Com ho calculem</button></div>
        <div class="impact cc">${photo('impacte', 'position:absolute;inset:0', '50% 55%')}<div class="ugc-sc"></div><div class="glass" style="position:absolute;left:10px;right:10px;bottom:10px;padding:14px 16px"><div class="row fn" style="gap:6px;font-weight:600">${ICN('leaf', 16, '#1FD08A')} Total</div><div style="margin-top:6px"><b class="num" style="font-size:var(--t-t1)" data-co2></b> <span class="hd">de CO₂ estalviat (estimat)</span></div></div></div>
        <div class="row stats3" style="gap:8px;align-items:stretch;margin-top:10px"><div class="stat"><b data-kmc></b><span>Sense cotxe</span></div><div class="stat"><b data-chk></b><span>Check-ins</span></div><div class="stat"><b data-plc></b><span>Llocs visitats</span></div></div>
        <div class="row" style="justify-content:space-between;margin:28px 0 8px"><h2 class="t2">Comunitat</h2><button type="button" class="tbtn" data-chal>Reptes de grup ›</button></div>
        <div class="surf" style="padding:14px 16px"><div class="row" style="justify-content:space-between"><span class="row" style="gap:8px">${ICN('users', 22)}<b class="hd">Entre tots aquest mes</b></span><span class="tag eco" data-comm></span></div><p class="fn mut" style="margin:8px 0 10px" data-mine></p><div class="bar lt"><i style="width:83%"></i></div><p class="fn mut" style="margin:8px 0 0">Xifra comunitària: dada d'exemple.</p></div></section>
      <section class="px" id="p-routes"><button type="button" class="yearban cc press" data-year><span>${ICN('sparkle', 22, '#1FD08A')}</span><span class="f1" style="text-align:left"><span class="hd" style="display:block;color:#fff">El teu any amb Valia</span><span class="fn" style="color:rgba(255,255,255,.8)" data-yearsub></span></span>${ICN('chevR', 18, '#fff')}</button>
        <h2 class="t2" style="margin:26px 0 10px">Les teves rutes</h2>${seg(['Fetes', 'Desades'], 0, 'rt')}<div data-rlist style="margin-top:12px"></div>
        <button type="button" class="btn out" data-logout style="margin-top:28px">${ICN('out', 20)} Tancar la sessió</button>
        <p class="fn mut" style="margin-top:12px">Fotos reals de llocs del Vallès (il·lustratives, no sempre del punt exacte).</p></section>`,
    mount(el, p, pg) {
      const segs = el.querySelectorAll('.segc');
      IOS.segmented(segs[0], i => { el._per = i; stats(el); });
      IOS.segmented(segs[1], i => { el._rt = i; routes(el, i, true); });
      el.addEventListener('click', e => {
        if (e.target.closest('[data-set]')) pg.stack.push(23);
        if (e.target.closest('[data-shop]')) App.switchTab('recompenses');
        if (e.target.closest('[data-chal]')) pg.stack.push(42);
        if (e.target.closest('[data-year]')) IOS.Modal.present(43, {}, { kind: 'cover' });
        if (e.target.closest('[data-explore]')) App.switchTab('explorar');
        if (e.target.closest('[data-how]')) CO2_INFO();
        if (e.target.closest('[data-logout]')) App.logout();
        if (e.target.closest('[data-signup]')) Flow.toOnboarding();
        const o = e.target.closest('[data-openact]'); if (o) pg.stack.push(17, { id: o.dataset.openact });
        const c = e.target.closest('#p-stats .chip'); if (c) { el.querySelectorAll('#p-stats .chip').forEach(x => { const on = x === c; x.setAttribute('aria-pressed', on); x.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + x.textContent; }); el._met = c.dataset.t || c.textContent.trim(); stats(el); }
      });
      head(el); routes(el, 0, false);
    },
    appear(el, p, pg) { head(el); routes(el, el._rt || 0, false); peek(pg); },
    reappear(el, p, pg) { head(el); routes(el, el._rt || 0, false); peek(pg); }
  };
  function routes(el, i, animate) {
    const L = el.querySelector('[data-rlist]'), d = Store.cur();
    const saved = Object.keys(d.saved || {}).filter(k => d.saved[k]);
    const empty = (ic, t, tx) => `<div class="empty-x" style="padding:18px 0 6px"><div class="ring-s" style="width:96px;height:96px;border-radius:48px">${ICN(ic, 44, 'var(--tint-tx)')}</div><h3 class="t3" style="margin-top:8px">${t}</h3><p class="co mut" style="margin:2px 0 0;max-width:28ch">${tx}</p><button type="button" class="btn auto" data-explore style="margin-top:12px;padding:12px 28px">Explorar rutes</button></div>`;
    const row = (a, sub) => `<button type="button" class="surf row press" data-openact="${a.id}" style="padding:10px;width:100%;text-align:left">${actImg(a, 'width:64px;height:64px;border-radius:10px;flex:none;overflow:hidden')}<div class="f1"><div class="hd">${a.t}</div><div class="fn mut">${sub}</div></div><span class="chev">${ICN('chevR', 18)}</span></button>`;
    if (i === 0) L.innerHTML = d.routes.length ? `<div class="col gap12">${d.routes.slice(0, 8).map(r => row(actById(r.id), `${r.d} · ${kmTx(r.km)} km · +${r.pts} punts`)).join('')}</div>` : empty('route', 'Encara no has fet cap ruta', 'Tria una activitat a Explorar, fes els check-ins i desa-la per sumar punts.');
    else L.innerHTML = saved.length ? `<div class="col gap12">${saved.map(k => row(actById(k), actById(k).m.join(' · '))).join('')}</div>` : empty('bookmark', 'Encara no tens res desat', 'Desa rutes i llocs per trobar-los aquí quan els vulguis.');
    if (animate) IOS.stagger(L.querySelectorAll('.surf,.empty-x > *'));
  }
  /* la mascota treu el cap pel lateral dret, en la franja buida de la foto (si no hi cap, no surt) */
  function peek(pg) {
    if (App.tab !== 'perfil' || App.stack('perfil').top !== pg || IOS.Modal.top) return;
    if (!MascotUI.canShow('perfil')) return;
    if (pg.scroll.scrollTop > 40) return;
    setTimeout(() => {
      if (App.tab !== 'perfil' || App.stack('perfil').top !== pg || IOS.Modal.top || !MascotUI.canShow('perfil')) return;
      const el = pg.el, nav = IOS.rectIn(pg.nav), ti = IOS.rectIn(el.querySelector('[data-ptitle]')), nm = IOS.rectIn(el.querySelector('[data-pname]'));
      // franja lliure: entre la barra de navegació (botó d'ajustos) i el nom, a la dreta del títol
      const top = nav.y + nav.h + 4, bottom = nm.y - 6, size = Math.min(92, (bottom - top) / 1.14);
      if (size < 60) return;                    // amb text molt gran no hi ha lloc: no apareix
      const d = Store.cur(); if (!d.co2 && !d.routes.length) return;
      const text = peekTurn % 2 === 0 && d.co2 ? `Enhorabona! Has estalviat ${kmTx(d.co2)} kg de CO₂.` : 'Repetim la ruta de dissabte?';
      const pk = MascotUI.peek({ key: 'perfil', text, top, size, white: true, dark: true, state: 'saludant', bubbleLift: size * 0.22, fit: { top, bottom, left: ti.x + ti.w + 10 } });
      if (pk) peekTurn++;
    }, IOS.rm() ? 200 : 650);
  }
  window.ProfileAPI = { peek, routes };

  /* 42 · Reptes de grup */
  const chal = (img, pos, title, who, val, goal, pct, left, mem, me) => `<article class="chal cc">${photo(img, 'position:absolute;inset:0', pos)}<div class="ugc-sc"></div>
    <div class="glass" style="position:absolute;left:10px;right:10px;bottom:10px;padding:14px 16px"><div class="row" style="justify-content:space-between"><span class="fn" style="font-weight:600">${who}</span><span class="mem" aria-hidden="true">${mem.map(m => `<span>${m}</span>`).join('')}</span></div><div class="hd" style="margin-top:2px">${title}</div>
    <div class="row" style="justify-content:space-between;margin-top:6px"><span class="hd">${val} <span class="fn mut">de ${goal}</span></span><span class="fn mut">${pct} % · ${left}</span></div><div class="bar" style="margin-top:8px"><i style="width:${pct}%"></i></div><p class="fn mut" style="margin:8px 0 0">${me}</p></div></article>`;
  SC[42] = {
    title: 'Reptes de grup', short: 'Reptes', tabbar: true,
    render: () => `<div class="px col gap16">${seg(['Els meus reptes', 'Descobrir'], 0)}
      ${chal('repte-1', '50% 38%', '100 km a peu en família', 'Família Puig · 4 membres', '64 km', '100 km', 64, 'queden 12 dies', ['A', 'M', 'J', 'L'], 'La teva aportació: 18 km (28 %)')}
      ${chal('repte-2', '50% 42%', '500 check-ins al Vallès', 'Classe de 1r de Batxillerat · 26 membres', '312', '500', 62, 'queden 20 dies', ['N', 'E', 'O', '+'], 'La teva aportació: 14 check-ins')}
      <button type="button" class="btn" data-new>${ICN('plus', 20)} Crea un repte</button><p class="fn mut" style="margin:0">Grups, xifres i persones: il·lustratius.</p></div>`,
    mount(el) { IOS.segmented(el.querySelector('.segc'), i => { el.querySelectorAll('.chal').forEach(c => { c.hidden = i === 1; }); let dsc = el.querySelector('[data-disc]'); if (i === 1 && !dsc) { el.querySelector('.segc').insertAdjacentHTML('afterend', '<p class="co mut" data-disc style="margin:0">Aviat podràs unir-te a reptes oberts de la comarca. Funció de demostració.</p>'); } if (dsc) dsc.hidden = i === 0; }); el.querySelector('[data-new]').addEventListener('click', () => { if (App.needAccount('crear reptes')) return; IOS.Alert.show({ title: 'Crea un repte', msg: 'Tria un objectiu (km, check-ins o rutes) i convida la teva colla. En aquest prototip els reptes de grup són de demostració.', buttons: [{ t: "D'acord", style: 'pref' }] }); }); }
  };
  /* 43 · El teu any amb Valia (pantalla completa, format història) */
  SC[43] = {
    title: 'El teu any amb Valia', nav: false, tabbar: false, cls: 'dark story', sb: 'light-always',
    render: () => `<div class="pimg bg-any"${slotAt('any')} style="position:absolute;inset:0;background-position:50% 30%"></div><div class="story-sc"></div>
      <div class="row" style="position:absolute;left:12px;right:12px;top:58px;gap:4px" aria-hidden="true">${[1, 1, 0, 0, 0].map(v => `<i style="flex:1;height:3px;border-radius:2px;background:rgba(255,255,255,${v ? '.95' : '.35'})"></i>`).join('')}</div>
      <div class="row" style="position:absolute;left:12px;right:4px;top:66px;justify-content:space-between"><span class="row" style="gap:8px;color:#fff">${ValiaAnim.logoSVG({ variant: 'mono', size: 24, small: true })}<b class="hd">Valia</b></span><button type="button" class="iconbtn dk" data-close aria-label="Tancar"><span class="gl">${ICN('x', 20, '#fff')}</span></button></div>
      <div class="px" style="position:absolute;left:0;right:0;top:230px;color:#fff;text-shadow:0 1px 12px rgba(0,0,0,.45)"><p class="fn" style="font-weight:600;color:rgba(255,255,255,.9);margin:0">El teu any amb Valia · 2026</p><h1 class="t1" style="margin-top:8px" data-yk>342 km sense cotxe</h1><p class="co" style="margin:8px 0 0;color:rgba(255,255,255,.9)">Has descobert el Vallès a peu i en bici.</p></div>
      <div class="story-bot" style="position:absolute;left:16px;right:16px;bottom:calc(var(--safe-b) + 8px);display:flex;flex-direction:column;gap:16px"><div class="glass yr" style="padding:16px;display:grid;grid-template-columns:1fr 1fr;gap:14px"><div><b data-yc>61 kg</b><span>CO₂ estalviat (estimat)</span></div><div><b data-yp>18</b><span>llocs visitats</span></div><div><b data-ych>46</b><span>check-ins</span></div><div><b data-ypt>1.240</b><span>punts d'energia</span></div></div>
      <div class="row acts2" style="gap:8px"><button type="button" class="btn f1" data-ysh>${ICN('share2', 20)} Compartir</button><button type="button" class="btn f1" data-ysv style="background:rgba(255,255,255,.16);color:#fff">${ICN('download', 20, '#fff')} Desar</button></div></div>`,
    mount(el) {
      const d = Store.cur(), txt = `El meu any amb Valia: ${kmTx(d.km)} km sense cotxe i ${kmTx(d.co2)} kg de CO₂ estalviats (estimat).`;
      el.querySelector('[data-yk]').textContent = `${kmTx(d.km)} km sense cotxe`; el.querySelector('[data-yc]').textContent = kmTx(d.co2) + ' kg'; el.querySelector('[data-yp]').textContent = fmt(d.places); el.querySelector('[data-ych]').textContent = fmt(d.checkins); el.querySelector('[data-ypt]').textContent = fmt(d.points);
      el.querySelector('[data-close]').addEventListener('click', () => IOS.Modal.dismiss());
      el.querySelector('[data-ysh]').addEventListener('click', async () => { try { if (navigator.share) { await navigator.share({ title: 'El meu any amb Valia', text: txt }); return; } await navigator.clipboard.writeText(txt); IOS.Toast.show('Text copiat per compartir', 'check'); } catch (e) { /* cancel·lat */ } });
      el.querySelector('[data-ysv]').addEventListener('click', () => IOS.Toast.show('Fes una captura de pantalla per desar-la', 'download'));
    }
  };

  /* 23 · Ajustos */
  SC[23] = {
    title: 'Ajustos', large: true, tabbar: true, cls: 'grouped',
    render: () => `<h2 class="gtitle">Compte</h2><div class="glist">${grow('user', '', 'Dades del compte', '', { act: 'acc' })}${grow('lock', 'g', 'Privacitat i dades', '', { act: 'priv' })}</div>
      <h2 class="gtitle">Mapes i seguretat</h2><div class="glist">${grow('download', '', 'Mapes sense connexió', '', { act: 'go39' })}${grow('shield', 'r', 'Seguretat i contactes', '', { act: 'go41' })}</div>
      <h2 class="gtitle">Preferències</h2><div class="glist">${grow('globe', 'b', 'Idioma', 'Català', { act: 'lang' })}${grow('route', 'g', 'Unitats', 'Quilòmetres', { act: 'units' })}${grow('pin', 'b', 'Ubicació', '', { act: 'loc' })}${grow('bell', 'r', 'Notificacions', '', { act: 'notif' })}</div>
      <h2 class="gtitle">Suport</h2><div class="glist">${grow('text', 'b', 'Accessibilitat', '', { act: 'go24' })}${grow('help', 'o', 'Ajuda i suport', '', { act: 'go25' })}${grow('info', 'k', "Condicions d'ús i privacitat", '', { act: 'legal' })}${grow('share2', 'g', 'Compartir Valia', 'Codi QR', { act: 'share' })}</div>
      <div class="glist" style="margin-top:28px"><button type="button" class="grow" data-act="logout" style="justify-content:center"><span class="redx bd row" style="gap:8px">${ICN('out', 18)} Tancar la sessió</span></button></div><p class="gfoot" style="text-align:center">Valia 1.0 · prototip del Treball de Recerca</p>`,
    mount(el, p, pg) {
      el.addEventListener('click', e => {
        const a = e.target.closest('[data-act]'); if (!a) return; const k = a.dataset.act, d = Store.cur();
        if (k === 'go39') pg.stack.push(39); if (k === 'go24') pg.stack.push(24); if (k === 'go25') pg.stack.push(25);
        if (k === 'go41') IOS.Modal.present(41, {}, { detents: ['large'] });
        if (k === 'logout') App.logout();
        if (k === 'share') { const u = QR.appURL(), txt = 'Prova Valia, el prototip de turisme actiu del Vallès Oriental: ' + u;
          IOS.Alert.show({ title: 'Compartir Valia', msg: `<span style="display:block;width:180px;height:180px;margin:10px auto 8px" role="img" aria-label="Codi QR de l'adreça de Valia">${QR.svg(u, { size: 180, logo: ValiaAnim.logoSVG({ variant: 'color', size: 120 }) })}</span><span style="display:block;word-break:break-all">${esc(u)}</span>`,
            buttons: [{ t: 'Tancar' }, { t: 'Compartir', style: 'pref', on: async () => { try { if (navigator.share) { await navigator.share({ title: 'Valia', text: txt, url: u }); return; } await navigator.clipboard.writeText(u); IOS.Toast.show('Enllaç copiat', 'copy'); } catch (er) { /* cancel·lat */ } } }] }); }
        if (k === 'legal') LEGAL();
        if (k === 'lang') IOS.Toast.show("De moment, l'app només és en català", 'globe');
        if (k === 'units') IOS.Toast.show('Distàncies en quilòmetres i desnivells en metres', 'route');
        if (k === 'acc') IOS.Alert.show({ title: 'Dades del compte', msg: Store.isGuest() ? 'Ara entres com a convidat: no hi ha cap compte creat.' : `${d.name}\n${Store.email()}\nEl compte i les dades es desen només en aquest dispositiu.`, buttons: Store.isGuest() ? [{ t: 'Tancar' }, { t: 'Crear compte', style: 'pref', on: () => Flow.toOnboarding() }] : [{ t: "D'acord", style: 'pref' }] });
        if (k === 'priv') { if (Store.isGuest()) { IOS.Toast.show('En mode convidat no es desa res', 'lock'); return; } IOS.Alert.show({ title: 'Privacitat i dades', msg: `Estadístiques anònimes: ${d.consents && d.consents.stats ? 'sí' : 'no'} · Novetats per correu: ${d.consents && d.consents.news ? 'sí' : 'no'} · Personalització amb IA: ${d.consents && d.consents.ai ? 'sí' : 'no'}.\nPots esborrar el compte i totes les dades d'aquest dispositiu.`, buttons: [{ t: 'Tancar' }, { t: 'Esborrar el compte', style: 'red', on: () => IOS.Alert.show({ title: 'Esborrar el compte?', msg: "S'esborraran el compte, els punts i les rutes d'aquest dispositiu. No es pot desfer.", buttons: [{ t: 'Cancel·la' }, { t: 'Esborrar', style: 'red', on: () => { Store.deleteAccount(); MascotUI.reset(); App.st.chat = []; App.startOnboarding(2); IOS.Toast.show('Compte esborrat', 'trash'); } }] }) }] }); }
        if (k === 'loc') { if (!navigator.geolocation) { IOS.Toast.show('Ubicació no disponible', 'info'); return; } navigator.geolocation.getCurrentPosition(pos => { d.loc = [+pos.coords.latitude.toFixed(3), +pos.coords.longitude.toFixed(3)]; Store.save(); IOS.Toast.show('Ubicació activada', 'pin'); }, () => IOS.Toast.show('Permís denegat: activa-la a la configuració del navegador', 'info'), { timeout: 8000 }); }
        if (k === 'notif') { if ('Notification' in window && Notification.requestPermission) Notification.requestPermission().then(r => IOS.Toast.show(r === 'granted' ? 'Avisos activats' : 'Avisos desactivats', 'bell')); else IOS.Toast.show("Els avisos funcionen amb l'app instal·lada", 'bell'); }
      });
    }
  };
  /* 39 · Mapes sense connexió */
  const dl = (img, pos, t, mb, stt, ok) => `<div class="row" style="padding:8px 0">${photo(img, 'width:56px;height:56px;border-radius:10px;flex:none', pos)}<div class="f1"><div class="hd">${t}</div><div class="fn mut">${mb} · <span style="color:${ok ? 'var(--tint-tx)' : 'var(--label)'};font-weight:600">${stt}</span></div></div><button type="button" class="iconbtn fill" data-dlact="${ok ? 'del' : 'upd'}" aria-label="${ok ? 'Esborrar la descàrrega' : 'Actualitzar la descàrrega'}"><span class="gl">${ICN(ok ? 'trash' : 'refresh', 20)}</span></button></div>`;
  SC[39] = {
    title: 'Mapes sense connexió', short: 'Mapes', tabbar: true,
    render: () => `<div class="px"><div class="surf" style="padding:14px 16px"><div class="row" style="justify-content:space-between"><span class="hd">Espai al mòbil</span><span class="fn mut">24 MB de 2 GB</span></div><div class="bar lt" style="margin-top:10px"><i style="width:4%"></i></div><p class="fn mut" style="margin:8px 0 0">2 de 20 rutes descarregades (límit proposat).</p></div>
      <div class="glist" style="margin:14px 0 0"><div class="grow swrow"><span class="f1 bd">Descarregar només amb Wi-Fi</span>${sw(true, 'Descarregar només amb Wi-Fi')}</div><div class="grow swrow"><span class="f1 bd">Actualitzar automàticament</span>${sw(true, 'Actualitzar automàticament')}</div></div>
      <h2 class="t3" style="margin:24px 0 6px">Rutes descarregades</h2>${dl('ruta-caldes', '50% 60%', 'Itinerari termal de Caldes', '12 MB', 'Actualitzada', 1)}${dl('ruta-fai', '50% 50%', 'Sant Miquel del Fai', '12 MB', 'Hi ha canvis', 0)}
      <div class="info" style="margin-top:14px">${ICN('info', 20, 'var(--tint-tx)')}<span>Cada descàrrega inclou el mapa, el traçat, els check-ins i les fitxes de patrimoni. Els check-ins fets sense cobertura s'envien quan tornes a tenir connexió.</span></div><p class="fn mut" style="margin-top:10px">Pantalla de demostració.</p></div>`,
    mount(el) { el.addEventListener('click', e => { const b = e.target.closest('[data-dlact]'); if (!b) return; if (b.dataset.dlact === 'del') { b.closest('.row').remove(); IOS.Toast.show('Descàrrega esborrada', 'trash'); } else { b.dataset.dlact = 'del'; b.setAttribute('aria-label', 'Esborrar la descàrrega'); b.querySelector('.gl').innerHTML = ICN('trash', 20); const s2 = b.closest('.row').querySelector('span[style]'); if (s2) { s2.textContent = 'Actualitzada'; s2.style.color = 'var(--tint-tx)'; } IOS.Toast.show('Ruta actualitzada', 'refresh'); } }); }
  };
  /* 24 · Accessibilitat (connectada als ajustos reals del prototip) */
  const DT = [[1, 'Predeterminat'], [1.12, 'Gran'], [1.35, 'Molt gran'], [1.94, 'Accessibilitat (AX2)']];
  SC[24] = {
    title: 'Accessibilitat', tabbar: true, cls: 'grouped',
    render: () => `<h2 class="gtitle">Mida del text</h2><div class="glist" style="padding:14px 16px"><div class="row" style="justify-content:space-between"><span style="font-size:13px;font-weight:600">A</span><span class="fn mut" data-dtl>Predeterminat</span><span style="font-size:22px;font-weight:600">A</span></div>
        <div class="dtsteps" role="radiogroup" aria-label="Mida del text">${DT.map((d, i) => `<button type="button" role="radio" aria-checked="false" aria-label="${d[1]}" data-dt="${d[0]}"><i></i></button>`).join('')}</div>
        <p class="co" style="margin:12px 0 0">Descobreix el Vallès que tens a tocar.</p></div>
      <p class="gfoot">L'app segueix la mida de text del sistema (text dinàmic).</p>
      <h2 class="gtitle">Aparença</h2><div class="px">${seg(['Clar', 'Fosc', 'Automàtic'], 2)}</div><p class="gfoot">Automàtic segueix el mode del mòbil.</p>
      <h2 class="gtitle">Visualització</h2><div class="glist"><div class="grow swrow"><span class="f1"><span class="bd" style="display:block">Contrast alt</span><span class="fn mut">Reforça colors i vores</span></span>${sw(false, 'Contrast alt')}</div>
        <div class="grow swrow"><span class="f1"><span class="bd" style="display:block">Reduir moviment</span><span class="fn mut">Fosos suaus en lloc de moviments; la mascota queda quieta</span></span><button type="button" class="sw" role="switch" aria-checked="${IOS.settings.rm}" aria-label="Reduir moviment" data-rm></button></div></div>
      <p class="gfoot">Si «Reduir moviment» està activat al sistema, l'app el segueix automàticament.</p>`,
    mount(el) {
      IOS.segmented(el.querySelector('.segc'));
      const paint = () => { el.querySelectorAll('[data-dt]').forEach(b => b.setAttribute('aria-checked', +b.dataset.dt === IOS.settings.dt)); const d = DT.find(x => x[0] === IOS.settings.dt); el.querySelector('[data-dtl]').textContent = d ? d[1] : ''; };
      el.addEventListener('click', e => { const b = e.target.closest('[data-dt]'); if (b) { IOS.set('dt', +b.dataset.dt); paint(); } });
      el.querySelector('[data-rm]').addEventListener('toggle', e => IOS.set('rm', e.detail));
      paint();
    }
  };
  /* 25 · Ajuda i suport */
  const FAQ = [["Puc fer servir l'app sense compte?", 'Sí, però amb menys funcions disponibles. Pots crear un compte quan vulguis.'], ['Com funcionen els check-ins?', "Quan arribes a un punt de la ruta, l'app el marca com a fet. No es grava el recorregut."], ['Puc fer una ruta sense cobertura?', 'Sí, si l\'has descarregada abans des del detall de la ruta.'], ["Com informo d'un error en una ruta?", 'Des del botó «Informar d\'un problema en una ruta», més avall.']];
  SC[25] = {
    title: 'Ajuda i suport', short: 'Ajuda', tabbar: true,
    render: () => `<div class="px"><label class="search">${ICN('search', 18)}<span class="sr">Cerca a l'ajuda</span><input type="search" placeholder="Cerca a l'ajuda" data-fq></label>
      <p class="co mut" data-fnone hidden style="margin:14px 4px 0">Cap pregunta coincideix amb la cerca.</p><div class="glist" style="margin:14px 0 0">${FAQ.map((f, i) => `<div class="faq"><button type="button" class="grow" aria-expanded="${i === 0}" data-faq><span class="f1 hd">${f[0]}</span><span class="chev">${ICN(i === 0 ? 'chevU' : 'chevD', 20)}</span></button><div class="faq-a co mut" ${i === 0 ? '' : 'hidden'}>${f[1]}</div></div>`).join('')}</div>
      <div class="surf" style="margin-top:16px;padding:16px"><h3 class="hd">No trobes la resposta?</h3><p class="fn mut" style="margin:4px 0 12px">Escriu-nos i et respondrem.</p><div class="col gap8"><button type="button" class="btn sm" style="width:100%" data-sup>${ICN('msg', 18)} Escriure al suport</button><button type="button" class="btn out sm" style="width:100%" data-rep>Informar d'un problema en una ruta</button></div></div>
      <p class="fn mut" style="margin-top:10px">Respostes del prototip.</p></div>`,
    mount(el) {
      const q = el.querySelector('[data-fq]'), none = el.querySelector('[data-fnone]');
      const norm = t => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      q.addEventListener('input', () => { const v = norm(q.value.trim()); let n = 0;
        el.querySelectorAll('.faq').forEach(f => { const ok = !v || norm(f.textContent).includes(v); f.hidden = !ok; if (ok) n++; }); none.hidden = n > 0; });
      q.addEventListener('keydown', e => { if (e.key === 'Enter') q.blur(); });
      el.querySelector('[data-sup]').addEventListener('click', () => IOS.Alert.show({ title: 'Escriure al suport', msg: "En aquest prototip encara no hi ha un canal de suport real. Mentrestant, pots preguntar a l'assistent de Valia al xat.", buttons: [{ t: 'Tancar' }, { t: 'Obrir el xat', style: 'pref', on: () => App.switchTab('xat') }] }));
      el.querySelector('[data-rep]').addEventListener('click', () => IOS.Alert.actions({ title: 'Quin problema has trobat?', msg: "L'avís es desa en aquest dispositiu (demostració).", actions: ['Camí tallat o perillós', 'Senyalització incorrecta', 'Informació errònia de la ruta', 'Un altre problema'].map(t => ({ t, on: () => { const d = Store.cur(); (d.reports = d.reports || []).unshift({ t, d: Store.today() }); Store.save(); IOS.Toast.show('Gràcies! Avís registrat', 'check'); } })) }));
      el.addEventListener('click', e => { const b = e.target.closest('[data-faq]'); if (!b) return; const a = b.nextElementSibling, open = b.getAttribute('aria-expanded') !== 'true';
        b.setAttribute('aria-expanded', open); b.querySelector('.chev').innerHTML = ICN(open ? 'chevU' : 'chevD', 20); a.hidden = !open;
        if (open && !IOS.rm()) IOS.anim(a, [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'none' }], IOS.S.micro); });
    }
  };
})();

/* ---- scr_rewards.js ---- */
/* ===================== Pantalles · recompenses i punts (31, 32, 33, 34, 35) =====================
   Catàleg d'exemple: cap acord amb comerços, transport ni entitats està signat. Tot es marca com a exemple. */
(function () {
  const SC = IOS.SCREENS;
  const RW = [
    { id: 'bus', t: 'Recàrrega de transport públic', p: 500, i: 'bus', cat: 'Mobilitat', img: 'gallecs', pos: '50% 55%',
      desc: 'Saldo per a la teva targeta de transport públic, perquè la propera sortida també comenci sense cotxe.', cond: "Vàlid a les xarxes de transport que s'adhereixin al programa. Import i operadors: pendents d'acord." },
    { id: 'bici', t: '15 min de bicicleta compartida', p: 300, i: 'bike', cat: 'Mobilitat', img: 'gallecs', pos: '30% 45%',
      desc: 'Un quart d\'hora de bicicleta compartida per moure\'t entre pobles o fins a l\'inici d\'una ruta.', cond: "Servei i municipis participants: pendents d'acord." },
    { id: 'esmorzar', t: 'Esmorzar en un bar de poble', p: 400, i: 'shop', cat: 'Comerç local', img: 'termes', pos: '50% 50%',
      desc: 'Un esmorzar en un establiment de proximitat adherit, a prop de l\'inici o del final de la ruta.', cond: 'Establiments adherits: pendents dels convenis Km0.' },
    { id: 'mercat', t: 'Val de 5 € en productors Km0', p: 800, i: 'sprout', cat: 'Comerç local', img: 'gallecs', pos: '70% 50%',
      desc: 'Descompte per comprar directament a productors de la comarca en mercats i botigues adherides.', cond: 'Productors i mercats adherits: pendents dels convenis Km0.' },
    { id: 'museu', t: 'Entrada a un museu de la comarca', p: 600, i: 'landmark', cat: 'Cultura', img: 'termes', pos: '40% 60%',
      desc: 'Entrada a un museu o espai patrimonial del Vallès Oriental adherit al programa.', cond: "Equipaments participants: pendents d'acord amb ajuntaments." },
    { id: 'arbre', t: 'Plantar un arbre a la comarca', p: 1000, i: 'tree', cat: 'Impacte', img: 'fageda', pos: '50% 50%',
      desc: 'Els teus punts es converteixen en una plantada en una jornada de reforestació organitzada a la comarca.', cond: "Entitat organitzadora i calendari: pendents d'acord." }
  ];
  window.REWARDS = RW;
  const CATS = ['Tot', 'Mobilitat', 'Comerç local', 'Cultura', 'Impacte'];
  const byId = id => RW.find(x => x.id === id) || RW[0];
  const seedOf = code => [...code].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7) || 1;
  const tile = r => `<button type="button" class="tile cc" data-rw="${r.id}" data-cat="${r.cat}" aria-label="${esc(r.t)}: ${fmt(r.p)} punts"><span class="rwi">${ICN(r.i, 24)}</span><span class="hd" style="display:block;margin-top:12px;line-height:1.25">${r.t}</span><span class="row fn" style="gap:4px;margin-top:8px;font-weight:600">${ICN('bolt', 14, 'var(--tint-tx)')}${fmt(r.p)} punts</span></button>`;
  const goal = () => { const d = Store.cur(); return RW.find(r => r.id === d.goal) || null; };

  /* 31 · Botiga */
  SC[31] = {
    title: 'Recompenses', short: 'Botiga', tabbar: true, navCls: 'on-photo', sb: 'light', scrollThreshold: 200, cls: 'rewards',
    navRight: () => `<button type="button" class="navbtn" data-hist aria-label="Historial de punts"><span class="gl">${ICN('clock', 20)}</span></button>`,
    render: () => `<div class="phead"><div class="pimg bg-capcalera-botiga"${slotAt('capcalera-botiga')} style="position:absolute;inset:0;background-position:50% 40%"></div><div class="phead-sc"></div>
        <div class="phead-in"><h1 class="lt" style="color:#fff">Recompenses</h1>
        <div class="glass pcard" style="margin-top:18px"><p class="fn mut" style="margin:0">Els teus punts d'energia</p><div class="row" style="gap:8px;margin-top:2px">${ICN('bolt', 28, '#1FD08A')}<b class="num" style="font-size:var(--t-t1)" data-bal></b></div>
          <div data-goalbox></div></div></div></div>
      <div class="px"><button type="button" class="grow surf" data-mine style="margin-top:14px;border-radius:14px;padding:12px 14px;width:100%"><span class="ctc" style="background:var(--tint-bg,#E6F8F0)">${ICN('gift', 18, 'var(--tint-tx)')}</span><span class="f1" style="text-align:left"><span class="hd" style="display:block">Les meves recompenses</span><span class="fn mut" data-minec></span></span>${ICN('chevR', 18, 'var(--label3,#8E8E93)')}</button>
        <div class="chips scrollx" style="margin-top:14px">${CATS.map((t, i) => chip(t, i === 0, `data-fcat="${t}"`)).join('')}</div>
        <div class="tiles" style="margin-top:16px" data-grid>${RW.map(tile).join('')}</div>
        <p class="fn mut" style="margin-top:14px">Catàleg d'exemple per al prototip.</p></div>`,
    mount(el, p, pg) {
      sync(el);
      el.addEventListener('click', e => {
        if (e.target.closest('[data-hist]')) { pg.stack.push(34); return; }
        if (e.target.closest('[data-mine]')) { if (App.needAccount('desar recompenses')) return; pg.stack.push(35); return; }
        if (e.target.closest('[data-pickgoal]')) { IOS.Alert.actions({ title: 'Tria un objectiu', msg: 'Veuràs el progrés aquí i al teu perfil.', actions: RW.map(r => ({ t: `${r.t} · ${fmt(r.p)}`, on: () => { Store.cur().goal = r.id; Store.save(); sync(el); IOS.Toast.show('Objectiu actualitzat', 'target'); } })) }); return; }
        const t = e.target.closest('[data-rw]'); if (t) { pg.stack.push(32, { id: t.dataset.rw }); return; }
        const c = e.target.closest('[data-fcat]'); if (c) {
          el.querySelectorAll('.chip[data-fcat]').forEach(x => { const on = x === c; x.setAttribute('aria-pressed', on); x.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + x.dataset.fcat; });
          const k = c.dataset.fcat; el.querySelectorAll('[data-grid] .tile').forEach(s => { s.hidden = !(k === 'Tot' || s.dataset.cat === k); });
          IOS.stagger(el.querySelectorAll('[data-grid] .tile:not([hidden])'));
        }
      });
    },
    reappear(el) { sync(el); }
  };
  function sync(el) {
    const b = el.querySelector('[data-bal]'); if (!b) return; const d = Store.cur(); b.textContent = fmt(d.points);
    const g = goal(), box = el.querySelector('[data-goalbox]');
    if (!g) box.innerHTML = `<button type="button" class="tbtn" data-pickgoal style="padding:8px 0 0;color:#fff;font-weight:600">${ICN('target', 16, '#fff')} Tria un objectiu</button>`;
    else { const pct = Math.min(100, Math.round(d.points / g.p * 100)), left = Math.max(0, g.p - d.points);
      box.innerHTML = `<div class="row fn" style="justify-content:space-between;margin-top:8px"><span style="font-weight:600">Objectiu: ${g.t.charAt(0).toLowerCase() + g.t.slice(1)}</span><span class="mut">${pct} %</span></div><div class="bar" style="margin-top:8px"><i style="width:${pct}%"></i></div>
        <div class="row fn" style="justify-content:space-between;margin-top:8px"><span class="mut">${left ? `Et falten ${fmt(left)} punts, unes ${Math.max(1, Math.round(left / 120))} rutes.` : 'Ja el pots aconseguir!'}</span><button type="button" class="tbtn" data-pickgoal style="padding:0 4px;min-height:44px;margin:-8px -4px;font-weight:600">Canviar</button></div>`; }
    const mc = el.querySelector('[data-minec]'); if (mc) { const n = (d.coupons || []).length; mc.textContent = Store.isGuest() ? 'Crea un compte per desar-les' : n ? `${n} ${n === 1 ? 'codi actiu' : 'codis actius'}` : 'Encara no n\'has canviat cap'; }
  }
  /* 32 · Detall de recompensa */
  SC[32] = {
    title: 'Recompensa', tabbar: false, navCls: 'on-photo', backGlass: true, sb: 'light', scrollThreshold: 220, cls: 'detail',
    navRight: p => `<button type="button" class="navbtn" data-share aria-label="Compartir la recompensa"><span class="gl">${ICN('share', 20)}</span></button>`,
    render: p => { const r = byId(p.id), d = Store.cur(), isGoal = d.goal === r.id;
      return `<div class="pimg dhero bg-recompensa-${r.id}"${slotAt('recompensa-' + r.id)} style="height:290px;background-position:${r.pos}" role="img" aria-label="Imatge il·lustrativa: ${esc(r.cat)}"><span class="glass row" style="position:absolute;left:16px;bottom:30px;padding:8px 14px;border-radius:999px;gap:8px;font-size:var(--t-fn);font-weight:600">${ICN(r.i, 16, '#fff')} ${r.cat}</span></div>
      <div class="dbody"><h1 class="t1">${r.t}</h1>
        <div class="row" style="gap:8px;margin-top:10px">${ICN('bolt', 24, 'var(--tint)')}<b class="t2" style="margin:0">${fmt(r.p)}</b><span class="fn mut">punts d'energia</span></div>
        <p class="fn mut" style="margin:4px 0 0" data-after></p>
        <p class="co" style="margin:16px 0 0">${r.desc}</p>
        <div class="glist" style="margin:16px 0 0"><div class="grow swrow"><span class="f1"><span class="bd" style="display:block">Marcar com a objectiu</span><span class="fn mut">Veuràs el progrés a la botiga i al perfil</span></span>${sw(isGoal, 'Marcar com a objectiu')}</div></div>
        <h2 class="hd" style="margin:16px 0 4px">Condicions</h2><p class="fn mut" style="margin:0">${r.cond}</p>
        <p class="fn mut" style="margin:10px 0 0"><span class="pend">Recompensa d'exemple</span></p></div>`; },
    overlay: p => { const r = byId(p.id); return `<div class="bbar"><button type="button" class="btn" data-redeem>Canviar per ${fmt(r.p)} punts</button></div>`; },
    mount(el, p, pg) {
      const r = byId(p.id), root = pg.el || el;
      const upd = () => { const d = Store.cur(), a = el.querySelector('[data-after]'), btn = root.querySelector('[data-redeem]');
        a.textContent = d.points >= r.p ? `Tens ${fmt(d.points)} punts. Et quedaran ${fmt(d.points - r.p)}.` : `Tens ${fmt(d.points)} punts. Et falten ${fmt(r.p - d.points)}.`;
        if (btn) { const ok = d.points >= r.p; btn.setAttribute('aria-disabled', !ok); btn.style.opacity = ok ? '' : '.45'; btn.textContent = ok ? `Canviar per ${fmt(r.p)} punts` : `Et falten ${fmt(r.p - d.points)} punts`; } };
      pg.upd = upd; upd();
      el.addEventListener('toggle', e => { const d = Store.cur(); if (e.detail) d.goal = r.id; else if (d.goal === r.id) d.goal = null; Store.save(); IOS.Toast.show(e.detail ? 'Objectiu desat' : 'Objectiu tret', 'target'); });
      const sh = root.querySelector('[data-share]'); if (sh) sh.addEventListener('click', async () => { const txt = `A Valia es poden canviar punts d'energia per «${r.t}» (recompensa d'exemple del prototip).`; try { if (navigator.share) { await navigator.share({ title: 'Valia', text: txt }); return; } await navigator.clipboard.writeText(txt); IOS.Toast.show('Text copiat', 'copy'); } catch (er) { /* cancel·lat */ } });
      root.querySelector('[data-redeem]').addEventListener('click', () => {
        if (App.needAccount('canviar punts')) return;
        const d = Store.cur();
        if (d.points < r.p) { IOS.Alert.show({ title: 'Encara no tens prou punts', msg: `Et falten ${fmt(r.p - d.points)} punts. Fes check-ins i acaba rutes per sumar-ne.`, buttons: [{ t: 'Tancar' }, { t: 'Explorar rutes', style: 'pref', on: () => App.switchTab('explorar') }] }); return; }
        IOS.Alert.actions({ title: `Canviar ${fmt(r.p)} punts?`, msg: `Rebràs «${r.t}». Et quedaran ${fmt(d.points - r.p)} punts.`, actions: [{ t: `Canviar per ${fmt(r.p)} punts`, on: () => {
          const code = Store.redeem(r); if (!code) return; App.st.redeemed++; upd();
          IOS.Modal.present(33, { id: r.id, code }, { kind: 'cover' });
        } }] });
      });
    },
    reappear(el, p, pg) { pg && pg.upd && pg.upd(); }
  };
  /* 33 · Canvi completat */
  SC[33] = {
    title: 'Canvi fet', nav: false, tabbar: false,
    render: p => { const r = byId(p.id), code = p.code || 'VAL-0000-0000';
      return `<div class="px col" style="align-items:center;text-align:center;padding-top:70px">
        <div class="row" style="align-items:flex-end;justify-content:center;gap:2px;min-height:140px"><div class="okring" aria-hidden="true">${ICN('check', 44, '#0B0D0C')}</div><div data-cel></div></div>
        <h1 class="t1" style="margin-top:10px">Canvi fet!</h1><p class="co mut" style="margin:6px 0 0;max-width:30ch">Has canviat ${fmt(r.p)} punts. Ara en tens ${fmt(Store.cur().points)}.</p>
        <div class="coupon cc"><div class="hd">${r.t}</div><div role="img" aria-label="Codi QR d'exemple">${qrSVG(seedOf(code))}</div><button type="button" class="tbtn t3" data-copy style="letter-spacing:.06em;padding:0" aria-label="Copiar el codi ${code}">${code}</button><div class="fn mut">Codi d'exemple · no té valor real</div></div>
        <button type="button" class="btn" data-done style="margin-top:14px">Fet</button><button type="button" class="tbtn" data-mine style="width:100%">Veure les meves recompenses</button></div>`; },
    mount(el, p) {
      const first = MascotUI.canShow('botiga');
      if (first) {
        MascotUI.mark('botiga');
        const m = Mascot.create(el.querySelector('[data-cel]'), { size: 136, state: 'repos', label: 'Assistent' });
        setTimeout(() => m.set('celebrant', { restart: true }), IOS.rm() ? 0 : 380);
        MascotUI.announce('Canvi fet. Assistent: Fet! Ja tens la recompensa.');
        MascotUI.dismissible(el.querySelector('[data-cel]'), m, { label: "Assistent celebrant el canvi. Tancar l'animació." });
      } else el.querySelector('[data-cel]').remove();
      const okr = el.querySelector('.okring'); if (!IOS.rm()) IOS.anim(okr, [{ transform: 'scale(.4)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }], Spring.spring(0.42, 0.55), { delay: 120 });
      el.querySelector('[data-copy]').addEventListener('click', async () => { try { await navigator.clipboard.writeText(p.code); IOS.Toast.show('Codi copiat', 'copy'); } catch (e) { IOS.Toast.show(p.code, 'copy'); } });
      const back = async mine => { await IOS.Modal.dismiss(); const st = App.stack('recompenses'); await st.popTo(1); const top = st.top; if (top.d.reappear) top.d.reappear(top.el, top.params, top); if (mine) st.push(35); };
      el.querySelector('[data-done]').addEventListener('click', () => back(false));
      el.querySelector('[data-mine]').addEventListener('click', () => back(true));
    }
  };
  /* 34 · Historial de punts d'energia (dades reals del compte) */
  const histRow = r => `<div class="row" style="padding:10px 0" data-earn="${r.earn ? 1 : 0}"><span class="ctc" style="background:var(--bg2)">${ICN(r.i || 'bolt', 18)}</span><div class="f1"><div class="hd">${esc(r.t)}</div><div class="fn mut">${esc(r.d)}</div></div><b class="hd" style="color:${r.earn ? 'var(--tint-tx)' : 'var(--label)'}">${r.amt >= 0 ? '+' : '−'}${fmt(Math.abs(r.amt))}</b></div>`;
  SC[34] = {
    title: "Punts d'energia", short: 'Punts', tabbar: true,
    render: () => { const d = Store.cur();
      return `<div class="px"><div class="row" style="gap:8px">${ICN('bolt', 32, 'var(--tint)')}<b class="num" style="font-size:var(--t-t1)" data-hbal>${fmt(d.points)}</b></div><p class="fn mut" style="margin:2px 0 14px">Saldo actual</p>
      ${seg(['Tot', 'Guanyats', 'Canviats'], 0)}<h2 class="gtitle" style="padding-left:0">Moviments</h2>
      <div class="col" data-hl>${d.history.map(histRow).join('')}</div><p class="co mut" data-hnone hidden style="margin:8px 0">No hi ha moviments d'aquest tipus.</p>
      <div class="info" style="margin-top:14px">${ICN('info', 20, 'var(--tint-tx)')}<span>Guanyes punts amb cada check-in (+20) i quan acabes una ruta. Com més et mous de forma activa, més en sumes.</span></div>
      ${d.sample ? `<p class="fn mut" style="margin-top:10px">Compte de demostració amb moviments d'exemple.</p>` : ''}</div>`; },
    mount(el) { IOS.segmented(el.querySelector('.segc'), i => { let n = 0; el.querySelectorAll('[data-hl] > .row').forEach(r => { const pos = r.dataset.earn === '1'; r.hidden = i === 1 ? !pos : i === 2 ? pos : false; if (!r.hidden) n++; }); el.querySelector('[data-hnone]').hidden = n > 0; }); }
  };
  /* 35 · Les meves recompenses (codis canviats) */
  SC[35] = {
    title: 'Les meves recompenses', short: 'Recompenses', tabbar: true,
    render: () => { const c = Store.cur().coupons || [];
      return `<div class="px">${c.length ? `<div class="glist" style="margin:6px 0 0">${c.map((x, i) => `<button type="button" class="grow" data-cp="${i}"><span class="ctc" style="background:var(--bg2)">${ICN(byId(x.id).i, 18)}</span><span class="f1" style="text-align:left"><span class="hd" style="display:block">${esc(x.t)}</span><span class="fn mut">${esc(x.d)} · ${x.code}</span></span>${ICN('chevR', 18, '#8E8E93')}</button>`).join('')}</div>`
        : `<div class="col" style="align-items:center;text-align:center;padding:60px 10px 20px"><span class="rwi" style="background:var(--bg2)">${ICN('gift', 26)}</span><h2 class="t3" style="margin:14px 0 4px">Encara no tens cap recompensa</h2><p class="co mut" style="margin:0 0 16px">Canvia els teus punts a la botiga i els codis apareixeran aquí.</p><button type="button" class="btn sm" data-goshop>Anar a la botiga</button></div>`}
        <p class="fn mut" style="margin-top:14px">Codis d'exemple generats al dispositiu: no tenen valor real.</p></div>`; },
    mount(el, p, pg) {
      el.addEventListener('click', e => {
        if (e.target.closest('[data-goshop]')) { pg.stack.popTo(1); return; }
        const b = e.target.closest('[data-cp]'); if (!b) return; const x = Store.cur().coupons[+b.dataset.cp];
        IOS.Alert.show({ title: x.t, msg: `Codi: ${x.code}\nCanviat el ${x.d} per ${fmt(x.p)} punts.\nMostra'l a l'establiment adherit (exemple).`, buttons: [{ t: 'Tancar' }, { t: 'Copiar el codi', style: 'pref', on: async () => { try { await navigator.clipboard.writeText(x.code); IOS.Toast.show('Codi copiat', 'copy'); } catch (er) { IOS.Toast.show(x.code, 'copy'); } } }] });
      });
    }
  };
})();

/* ---- scr_ruta.js ---- */
/* ===================== Assistent · «Ruta a mida»: el missatge guiat =====================
   L'assistent passa a tenir dues pestanyes amb un selector segmentat: «Xat» (el xat de sempre, sense canvis)
   i «Ruta a mida». Aquí qui no sap escriure un missatge per a una IA tria opcions (les mateixes categories,
   opcions i xips que el full de filtres d'Explorar, més «A prop de») i l'app el redacta en català. La persona el
   pot editar. «Cerca la meva ruta» l'envia al xat: es veu el missatge enviat i la resposta amb rutes del catàleg
   que hi encaixen. La mascota acompanya el procés com al xat (saluda, escolta cada tria i ho celebra). */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const nrm = t => String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const join = (a, w) => a.length < 2 ? (a[0] || '') : a.slice(0, -1).join(', ') + ' ' + w + ' ' + a[a.length - 1];
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const clone = S => JSON.parse(JSON.stringify(S));
  const blank = () => ({ act: [], dur: '', dif: [], mun: '', ty: [], opt: [] });

  /* ---------- opcions: les mateixes del full de filtres d'Explorar ---------- */
  const ACT = ['A peu', 'Bici', 'Córrer'];
  const DUR = [['lt2', 'Menys de 2 h'], ['2a4', 'De 2 a 4 h'], ['gt4', 'Més de 4 h']];
  const DIF = ['Fàcil', 'Moderada', 'Difícil'];
  const TY = ['Natura', 'Cultural', 'Història', 'Gastronomia'];
  const OPT = [['fam', 'Amb nens'], ['gos', 'Amb gos'], ['tp', 'Sense cotxe (tren o bus)'], ['circ', 'Circular']];
  /* «A prop de»: els municipis del catàleg; el centre de cada un és la mitjana de les seves rutes */
  const MUNS = ['Granollers', 'Cardedeu', 'Llinars del Vallès', 'La Roca del Vallès', 'Mollet del Vallès', 'Caldes de Montbui', 'Bigues i Riells del Fai', 'Tagamanent', 'Fogars de Montclús'].filter(m => ACTS.some(a => a.mun === m));
  const CENTER = {};
  MUNS.forEach(m => { const L = ACTS.filter(a => a.mun === m); CENTER[m] = [L.reduce((s, a) => s + a.ll[0], 0) / L.length, L.reduce((s, a) => s + a.ll[1], 0) / L.length]; });
  const RADIUS = 12;   // km
  const km = (p, q) => { const d = Math.PI / 180, x = Math.sin((q[0] - p[0]) * d / 2) ** 2 + Math.cos(p[0] * d) * Math.cos(q[0] * d) * Math.sin((q[1] - p[1]) * d / 2) ** 2; return 12742 * Math.asin(Math.sqrt(x)); };
  const lowArt = m => m.replace(/^La /, 'la ').replace(/^El /, 'el ');   // «a prop de la Roca del Vallès»

  /* ---------- redacció del missatge (català natural) ---------- */
  const ACT_TX = { 'A peu': 'a peu', 'Bici': 'en bicicleta', 'Córrer': 'per córrer' };
  const DUR_TX = { lt2: 'de menys de 2 hores', '2a4': "d'entre 2 i 4 hores", gt4: 'de més de 4 hores' };
  const TY_TX = { 'Natura': 'la natura', 'Cultural': 'la cultura', 'Història': 'la història', 'Gastronomia': 'la gastronomia' };
  const OPT_TX = { fam: 'vaig amb nens', gos: 'porto el gos', tp: 'hi vull anar en tren o bus', circ: 'vull que sigui circular' };
  function tokens(S) {
    const T = [], add = (t, k) => T.push({ t, k });
    add('Busco una ruta');   // «Busco una ruta fàcil en bicicleta de menys de 2 hores a prop de Granollers.»
    const a = ACT.filter(x => S.act.includes(x)).map(x => ACT_TX[x]);
    if (S.dif.length) { add(' '); add(join(DIF.filter(x => S.dif.includes(x)).map(x => x.toLowerCase()), 'o'), 'dif'); }
    if (a.length) { add(' '); add(join(a, 'o'), 'act'); }
    if (S.dur) { add(' '); add(DUR_TX[S.dur], 'dur'); }
    if (S.mun) { add(' a prop de '); add(lowArt(S.mun), 'mun'); }
    else add(' pel Vallès Oriental');
    add('.');
    if (S.ty.length) { add(" M'interessa "); add(join(TY.filter(x => S.ty.includes(x)).map(x => TY_TX[x]), 'i'), 'ty'); add('.'); }
    const o = OPT.map(x => x[0]).filter(k => S.opt.includes(k)).map(k => OPT_TX[k]);
    if (o.length) { add(' '); add(cap(join(o, 'i')), 'opt'); add('.'); }
    return T;
  }
  const textOf = T => T.map(x => x.t).join('');
  /* el mateix missatge redactat en l'idioma de l'app (per a la vista prèvia i la bombolla enviada);
     internament el missatge es desa en català, que és el que llegeix l'assistent */
  const LT = {
    es: { start: () => 'Busco una ruta', dif: { 'Fàcil': 'fácil', 'Moderada': 'moderada', 'Difícil': 'difícil' }, or: 'o', and: 'y', act: { 'A peu': 'a pie', 'Bici': 'en bicicleta', 'Córrer': 'para correr' }, dur: { lt2: 'de menos de 2 horas', '2a4': 'de entre 2 y 4 horas', gt4: 'de más de 4 horas' }, near: ' cerca de ', mun: lowArt, all: ' por el Vallès Oriental', ty0: ' Me interesa ', ty: { 'Natura': 'la naturaleza', 'Cultural': 'la cultura', 'Història': 'la historia', 'Gastronomia': 'la gastronomía' }, opt: { fam: 'voy con niños', gos: 'llevo el perro', tp: 'quiero ir en tren o bus', circ: 'quiero que sea circular' } },
    en: { start: d => (d ? `I'm looking for ${/^easy/.test(d) ? 'an' : 'a'} ` : "I'm looking for a route"), route: ' route', dif: { 'Fàcil': 'easy', 'Moderada': 'moderate', 'Difícil': 'difficult' }, or: 'or', and: 'and', act: { 'A peu': 'on foot', 'Bici': 'by bike', 'Córrer': 'for running' }, dur: { lt2: 'under 2 hours', '2a4': 'lasting 2 to 4 hours', gt4: 'over 4 hours' }, near: ' near ', mun: m => m, all: ' in the Vallès Oriental', ty0: " I'm interested in ", ty: { 'Natura': 'nature', 'Cultural': 'culture', 'Història': 'history', 'Gastronomia': 'local food' }, opt: { fam: "I'm going with kids", gos: "I'm bringing my dog", tp: 'I want to get there by train or bus', circ: 'I want it to be a loop' } },
    fr: { start: () => 'Je cherche un itinéraire', dif: { 'Fàcil': 'facile', 'Moderada': 'modéré', 'Difícil': 'difficile' }, or: 'ou', and: 'et', act: { 'A peu': 'à pied', 'Bici': 'à vélo', 'Córrer': 'pour courir' }, dur: { lt2: 'de moins de 2 heures', '2a4': 'de 2 à 4 heures', gt4: 'de plus de 4 heures' }, near: ' près de ', mun: lowArt, all: ' dans le Vallès Oriental', ty0: " Je m'intéresse à ", ty: { 'Natura': 'la nature', 'Cultural': 'la culture', 'Història': "l'histoire", 'Gastronomia': 'la gastronomie' }, opt: { fam: "je viens avec des enfants", gos: "j'emmène mon chien", tp: 'je veux y aller en train ou en bus', circ: "je veux qu'il soit circulaire" } }
  };
  function tokensL(S, L) {
    const X = LT[L]; if (!X) return tokens(S);
    const T = [], add = (t, k) => T.push({ t, k });
    const d = DIF.filter(x => S.dif.includes(x)).map(x => X.dif[x]), dj = join(d, X.or);
    if (X.route) { add(X.start(dj)); if (d.length) { add(dj, 'dif'); add(X.route); } }
    else { add(X.start()); if (d.length) { add(' '); add(dj, 'dif'); } }
    const a = ACT.filter(x => S.act.includes(x)).map(x => X.act[x]);
    if (a.length) { add(' '); add(join(a, X.or), 'act'); }
    if (S.dur) { add(' '); add(X.dur[S.dur], 'dur'); }
    if (S.mun) { add(X.near); add(X.mun(S.mun), 'mun'); } else add(X.all);
    add('.');
    if (S.ty.length) { add(X.ty0); add(join(TY.filter(x => S.ty.includes(x)).map(x => X.ty[x]), X.and), 'ty'); add('.'); }
    const o = OPT.map(x => x[0]).filter(k => S.opt.includes(k)).map(k => X.opt[k]);
    if (o.length) { add(' '); add(cap(join(o, X.and)), 'opt'); add('.'); }
    return T;
  }
  const LG = () => (typeof I18n !== 'undefined' ? I18n.lang : 'ca');

  /* ---------- lectura del missatge (també si la persona l'ha editat) ---------- */
  const RX = {
    act: [['A peu', /\ba peu\b|camin|passeig|passej|excursi|senderis|a pie|on foot|a pied|\bwalk|\bhik|randonn|marche/], ['Bici', /bici|\bbtt\b|pedal|\bbike|cycl|\bvelo\b/], ['Córrer', /\bcorre(r|nt)?\b|running|\brun\b|\btrail\b|courir/]],
    dif: [['Fàcil', /facil|tranquil|suau|planer|\beasy\b/], ['Moderada', /moderad|mitjan|intermedi|moderate|modere/], ['Difícil', /dificil|difficult|exigent|\brepte\b|\bdur(a|es)?\b|\bhard\b/]],
    ty: [['Natura', /natura|nature|bosc|bosque|forest|foret|paisatg|paisaj|landscape|paysage|muntany|montan|mountain|montagne/], ['Cultural', /cultur|museu|museo|museum|musee/], ['Història', /histori|history|histoire|patrimoni|heritage|castell|castle|chateau|esglesi|iglesia|church|eglise|dolmen|megalit|roman/], ['Gastronomia', /gastronom|menjar|comida|\bfood\b|cuisine|\bkm ?0\b|mercat|mercado|market|marche|productor|producer|producteur|esmorz/]],
    opt: [['fam', /\bnen(a|s|es)?\b|criatur|famil|\bfills\b|canalla|ninos|\bkids?\b|child|enfant/], ['gos', /\bgos(sos|sa)?\b|\bperro\b|mascota|\bdog\b|chien/], ['tp', /\btren\b|\btrain\b|\bbus\b|autobus|sense cotxe|sin coche|transport public|rodalies/], ['circ', /circular|circulaire|\bloop\b/]]
  };
  const DURX = [['lt2', /menys de (2|dues) h|menos de (2|dos) h|under 2|less than 2|moins de 2|\b1 h|una hora|hora i mitja|\bcurta\b|poca estona/], ['gt4', /mes de (4|quatre) h|mas de (4|cuatro) h|over 4|more than 4|plus de 4|\b[5-9] hores|tot el dia|jornada|dia sencer/], ['2a4', /entre (2|dues) i (4|quatre)|entre (2|dos) y (4|cuatro)|2 to 4|2 a 4|2 à 4|de (2|dues) a (4|quatre)|\b[234] hores|dues hores|tres hores|mig dia/]];
  const MUNX = [['Granollers', /granollers/], ['Cardedeu', /cardedeu/], ['Llinars del Vallès', /llinars/], ['La Roca del Vallès', /\broca\b/], ['Mollet del Vallès', /mollet/], ['Caldes de Montbui', /caldes|montbui/], ['Bigues i Riells del Fai', /bigues|riells/], ['Tagamanent', /tagamanent/], ['Fogars de Montclús', /fogars|montclus/]];
  function parse(text) {
    const t = nrm(text), S = blank();
    Object.keys(RX).forEach(k => RX[k].forEach(([v, re]) => { if (re.test(t)) S[k].push(v); }));
    const d = DURX.find(([, re]) => re.test(t)); if (d) S.dur = d[0];
    const m = MUNX.find(([, re]) => re.test(t)); if (m && CENTER[m[0]]) S.mun = m[0];
    return S;
  }
  const isEmpty = S => !S.act.length && !S.dur && !S.dif.length && !S.ty.length && !S.mun && !S.opt.length;

  /* ---------- rutes que encaixen: el mateix filtre d'Explorar + distància al municipi ---------- */
  function match(S) {
    let L = window.ExFilter.filterActs({ ty: S.ty, act: S.act, dif: S.dif, dur: S.dur, opt: S.opt }, '', 'Tot');
    if (S.mun) { const c = CENTER[S.mun]; L = L.map(a => [a, km(c, a.ll)]).filter(x => x[1] <= RADIUS).sort((x, y) => x[1] - y[1]).map(x => x[0]); }
    return L;
  }

  /* ---------- resposta de l'assistent als missatges que surten d'aquí (la resta, el xat de sempre) ---------- */
  const SENT = new Set();
  const RELAX = [['opt'], ['dif'], ['dur'], ['ty'], ['mun'], ['act']];   // ordre en què es deixen de banda (primer les menys importants)
  const NUM = ['', 'una', 'dues', 'tres'];
  /* les tries que es deixen de banda, amb el mateix nom que el xip (i en l'ordre de la pantalla) */
  const q = s => `«${s}»`;
  const chosen = (S, k) => k === 'act' ? ACT.filter(x => S.act.includes(x)).map(q) : k === 'dur' ? [q(DUR.find(x => x[0] === S.dur)[1])]
    : k === 'dif' ? DIF.filter(x => S.dif.includes(x)).map(q) : k === 'mun' ? [q('A prop de ' + S.mun)]
    : k === 'ty' ? TY.filter(x => S.ty.includes(x)).map(q) : OPT.filter(x => S.opt.includes(x[0])).map(x => q(x[1]));
  function answerFor(text) {
    const S = parse(text);
    if (isEmpty(S)) {   // sense cap opció: si és el missatge per defecte, propostes variades; si l'han reescrit, respon el xat de sempre
      if (nrm(text).trim() !== nrm(textOf(tokens(blank())))) return null;
      return { t: 'Aquí tens tres propostes variades per començar:', cards: ['caldes', 'fai', 'gallecs'], t2: "Si em dius què t'agrada, t'ho afino més.", chips: ['Canvia les opcions'] };
    }
    /* si cap ruta ho compleix tot, es deixa de banda el mínim d'opcions possible (primer les menys importants) */
    let g = clone(S), L = match(g), dropped = [];
    const keys = RELAX.filter(([k]) => (Array.isArray(S[k]) ? S[k].length : !!S[k]));
    for (let size = 1; !L.length && size <= keys.length; size++) {
      const combos = []; const pick = (i, acc) => { if (acc.length === size) { combos.push(acc); return; } for (let j = i; j < keys.length; j++) pick(j + 1, acc.concat([keys[j]])); }; pick(0, []);
      for (const cb of combos) {
        const t = clone(S); cb.forEach(([k]) => { t[k] = Array.isArray(t[k]) ? [] : ''; });
        const r = match(t); if (r.length) { g = t; L = r; dropped = ['act', 'dur', 'dif', 'mun', 'ty', 'opt'].filter(k => cb.some(x => x[0] === k)).flatMap(k => chosen(S, k)); break; }
      }
    }
    const n = L.length, top = L.slice(0, 3).map(a => a.id), k = top.length;
    let t;
    if (!n) t = "No he trobat cap ruta amb aquestes opcions. Prova de canviar-ne alguna.";
    else if (dropped.length) t = `Cap ruta compleix totes les opcions. Si deixem de banda ${join(dropped, 'i')}, ${k === 1 ? "aquesta s'hi acosta" : "aquestes s'hi acosten"}:`;
    else t = n <= 3 ? `He trobat ${NUM[n]} ${n === 1 ? 'ruta que encaixa' : 'rutes que encaixen'} amb el que demanes:` : `He trobat ${n} rutes que encaixen amb el que demanes. Te'n proposo tres:`;
    const t2 = !n ? undefined : g.mun ? `${k === 1 ? 'És' : 'Totes són'} a menys de ${RADIUS} km de ${lowArt(g.mun)}.` : "Les durades i les dificultats són orientatives (dades d'exemple).";
    return { t, cards: k ? top : undefined, t2, chips: ['Canvia les opcions'] };
  }
  window.ChatAnswerHook = t => (SENT.has(t) ? answerFor(t) : null);

  /* ---------- què diu la mascota quan tries ---------- */
  const SAY = {
    act: { 'A peu': 'Caminant es descobreix tot millor.', 'Bici': 'En bici! Buscaré camins sense trànsit.', 'Córrer': 'A córrer! Pistes i corriols.' },
    dur: { lt2: 'Una sortida curta, perfecta per avui.', '2a4': "Mig dia d'aventura. M'agrada!", gt4: 'Una bona jornada: porta aigua!' },
    dif: { 'Fàcil': 'Res de patir: camins tranquils.', 'Moderada': 'Una mica de repte, ideal.', 'Difícil': 'Repte de debò! Prepara les cames.' },
    ty: { 'Natura': 'Natura: el Vallès en va ple.', 'Cultural': 'Pobles i cultura, apuntat.', 'Història': 'Castells, dòlmens i esglésies.', 'Gastronomia': 'I acabar amb producte Km0!' },
    opt: { fam: 'Camins segurs per als petits.', gos: 'Que el gos també en gaudeixi.', tp: 'Només rutes amb tren o bus a prop.', circ: 'Tornaràs al mateix punt.' }
  };
  const GREET = "Toca el que et vingui de gust i jo t'escric el missatge.";

  /* ---------- pantalla ---------- */
  const fchip = (g, v, t) => chip(t, false, `data-g="${g}" data-v="${esc(v)}"`);
  const paneHTML = id => `<div class="aipane" id="${id}-pr" role="tabpanel" aria-labelledby="${id}-tr" hidden>
    <div class="aiscroll" data-rsc><div class="px">
      <div class="gm-row aigm"><div class="gm" data-rgm></div><div class="bubble gm-b cc" data-rgb role="status">${GREET}</div></div>
      <p class="co mut aiintro">No cal escriure res: tria opcions i toca «Cerca la meva ruta».</p>
      <h3 class="hd fsec">Activitat</h3><div class="chips">${ACT.map(t => fchip('act', t, t)).join('')}</div>
      <h3 class="hd fsec">Durada</h3><div class="chips">${DUR.map(([v, t]) => fchip('dur', v, t)).join('')}</div>
      <h3 class="hd fsec">Dificultat</h3><div class="chips">${DIF.map(t => fchip('dif', t, t)).join('')}</div>
      <h3 class="hd fsec">A prop de</h3><div class="chips scrollx">${MUNS.map(t => fchip('mun', t, t)).join('')}</div>
      <h3 class="hd fsec">Tipus</h3><div class="chips">${TY.map(t => fchip('ty', t, t)).join('')}</div>
      <h3 class="hd fsec">Opcions</h3><div class="chips">${OPT.map(([v, t]) => fchip('opt', v, t)).join('')}</div>
      <p class="fn mut" style="margin-top:14px">Durades i dificultats orientatives (dades d'exemple).</p>
    </div></div>
    <div class="bbar aibar">
      <div class="aiprev cc">
        <div class="aiprev-h"><span class="mav aimav" data-rmav aria-hidden="true"></span><span class="fn aiprev-l">El teu missatge</span><span class="f1"></span><button type="button" class="tbtn aiedit" data-redit>${ICN('pencil', 16)} Edita</button></div>
        <div class="aiprev-t" data-rtext data-noi18n aria-live="polite"></div>
        <textarea class="aiprev-i" data-rinput rows="3" aria-label="Edita el missatge per a l'assistent" hidden></textarea>
        <p class="aiprev-c" data-rcount aria-live="polite"></p>
        <div class="aiprev-hint" data-rhint hidden><span class="fn mut">Has editat el missatge.</span><button type="button" class="tbtn" data-rrestore>${ICN('refresh', 16)} Refés-lo amb les opcions</button></div>
      </div>
      <button type="button" class="btn" data-rgo>${ICN('sparkle', 20)} Cerca la meva ruta</button>
    </div>
  </div>`;

  /* el xat de sempre + el selector i la segona pestanya (s'hi afegeixen en muntar la pantalla del xat) */
  const baseMount = SC.chat.mount, baseRight = SC.chat.navRight;
  SC.chat.navRight = (p, pg) => baseRight(p, pg) + `<button type="button" class="navbtn press" data-rreset aria-label="Esborrar les opcions">${ICN('refresh', 22)}</button>`;
  SC.chat.mount = function (el, p, pg) { baseMount.call(this, el, p, pg); attach(el, p, pg); };

  let uid = 0;
  function attach(el, p, pg) {
    const id = 'ai' + (++uid), nav = pg.nav, chatSc = pg.scroll, comp = el.querySelector(':scope > .composer');
    const R = { mode: 'xat', S: blank(), gen: '', text: '', edited: false, editing: false, greeted: false, busy: false, m: null, sw: Promise.resolve(), prevMarks: {} };
    el.dataset.ai = 'xat';
    /* selector segmentat dins la capçalera, sota el títol */
    const seg = h(`<div class="aiseg"><div class="segc" role="tablist" aria-label="Assistent"><button type="button" role="tab" id="${id}-tx" aria-selected="true" aria-controls="${id}-px">Xat</button><button type="button" role="tab" id="${id}-tr" aria-selected="false" aria-controls="${id}-pr">Ruta a mida</button></div></div>`);
    nav.appendChild(seg);
    chatSc.id = id + '-px'; chatSc.setAttribute('role', 'tabpanel'); chatSc.setAttribute('aria-labelledby', id + '-tx');
    const pane = h(paneHTML(id)); el.insertBefore(pane, nav);
    const $ = s => pane.querySelector(s), sc = $('[data-rsc]'), bar = $('.aibar'), card = $('.aiprev'), txt = $('[data-rtext]'), inp = $('[data-rinput]'),
      hint = $('[data-rhint]'), cnt = $('[data-rcount]'), editB = $('[data-redit]'), go = $('[data-rgo]'), bubble = $('[data-rgb]'), resetB = nav.querySelector('[data-rreset]');
    const tabs = [...seg.querySelectorAll('[role="tab"]')];
    /* la mascota petita de la targeta: sempre a la vista mentre tries (la gran queda a dalt) */
    R.mm = Mascot.create($('[data-rmav]'), { size: 26, view: 'avatar', state: 'repos', label: 'Assistent' }); R.mm.el.style.color = '#fff';

    /* la barra inferior (missatge + botó) creix amb el text: el contingut sempre queda per sobre */
    const fit = () => { sc.style.paddingBottom = (bar.offsetHeight + (parseFloat(getComputedStyle(bar).bottom) || 0) + 16) + 'px'; };
    const ro = new ResizeObserver(fit); ro.observe(bar); pg.cleanups.push(() => ro.disconnect());

    /* capçalera de vidre segons el desplaçament de la pestanya visible */
    const syncNav = () => nav.classList.toggle('scrolled', (R.mode === 'ruta' ? sc.scrollTop : chatSc.scrollTop) > 2);
    sc.addEventListener('scroll', () => { if (R.mode === 'ruta') syncNav(); }, { passive: true });
    chatSc.addEventListener('scroll', () => { if (R.mode === 'ruta') syncNav(); }, { passive: true });

    /* ---------- canvi de pestanya (selector segmentat d'iOS) ---------- */
    function setMode(m) {
      if (R.mode === m) return R.sw;
      R.mode = m; el.dataset.ai = m;
      const toR = m === 'ruta', chatEls = [chatSc, comp].filter(Boolean);
      IOS.Keyboard.hide(); if (document.activeElement && el.contains(document.activeElement)) document.activeElement.blur();
      if (toR) { pane.hidden = false; ensureMascot(); greetOnce(); } else chatEls.forEach(e => { e.style.visibility = ''; e.inert = false; });
      syncNav();
      const showB = toR ? resetB : nav.querySelector('[data-new]'); if (showB && !IOS.rm()) IOS.fade(showB, 0, 1, 200);
      const ins = toR ? [pane] : chatEls, outs = toR ? chatEls : [pane], d = toR ? 1 : -1;
      const run = IOS.rm()
        ? Promise.all([...outs.map(e => IOS.fade(e, 1, 0, 160)), ...ins.map(e => IOS.fade(e, 0, 1, 200))])
        : Promise.all([...outs.map(e => IOS.anim(e, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: `translateX(${-28 * d}px)` }], IOS.S.soft)),
          ...ins.map(e => IOS.anim(e, [{ opacity: 0, transform: `translateX(${28 * d}px)` }, { opacity: 1, transform: 'none' }], IOS.S.soft))]);
      R.sw = run.then(() => {
        if (R.mode !== m) return;
        outs.forEach(e => { if (e === pane) pane.hidden = true; else { e.style.visibility = 'hidden'; e.inert = true; } e.style.opacity = ''; e.style.transform = ''; });
        ins.forEach(e => { e.style.opacity = ''; e.style.transform = ''; });
      });
      return R.sw;
    }
    IOS.segmented(seg.querySelector('.segc'), i => setMode(i ? 'ruta' : 'xat'));
    const open = m => { const b = tabs[m === 'ruta' ? 1 : 0]; if (b.getAttribute('aria-selected') !== 'true') b.click(); return R.sw; };

    /* ---------- mascota ---------- */
    function ensureMascot() { if (!R.m) R.m = Mascot.create($('[data-rgm]'), { size: 104, state: 'repos', label: 'Assistent' }); }
    function greetOnce() {
      if (R.greeted) return; R.greeted = true;
      if (IOS.rm()) { R.m.set('saludant'); return; }
      R.m.set('saludant', { restart: true });
      IOS.anim(bubble, [{ opacity: 0, transform: 'scale(.6)', transformOrigin: '0% 100%' }, { opacity: 1, transform: 'scale(1)', transformOrigin: '0% 100%' }], Spring.spring(0.42, 0.68), { delay: 300 });
      IOS.stagger(pane.querySelectorAll('.aiintro, .fsec, .aiscroll .chips'), { delay: 160, max: 13, dy: 12 });
      IOS.anim(bar, [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], IOS.S.soft, { delay: 120 });
    }
    function say(line) {
      if (!R.m) return;
      [R.m, R.mm].forEach(m => { m.set('escoltant'); m.pulse(); });
      clearTimeout(R.mt); R.mt = setTimeout(() => { if (!R.busy) [R.m, R.mm].forEach(m => m && m.set('repos')); }, 1600);
      if (line && bubble.textContent !== line) {
        bubble.textContent = line;
        if (!IOS.rm()) IOS.anim(bubble, [{ opacity: 0.35, transform: 'scale(.94)', transformOrigin: '0% 100%' }, { opacity: 1, transform: 'none', transformOrigin: '0% 100%' }], IOS.S.micro);
      }
    }

    /* ---------- vista prèvia del missatge ---------- */
    function count(S) {
      const n = match(S).length;
      cnt.innerHTML = n ? `${ICN('checkC', 15)}<span>${n} ${n === 1 ? 'ruta hi encaixa' : 'rutes hi encaixen'}</span>` : `${ICN('info', 15)}<span>Cap ruta exacta: et proposaré les que s'hi acostin més</span>`;
      cnt.classList.toggle('warn', !n);
      return n;
    }
    function refresh() {
      const T = tokens(R.S); R.gen = textOf(T);
      if (!R.edited) {
        R.text = R.gen;
        const marks = {};
        const TL = tokensL(R.S, LG()); R.disp = textOf(TL);
        if (typeof I18n !== 'undefined' && I18n.dyn) I18n.dyn(R.gen, ['es', 'en', 'fr'].map(L => textOf(tokensL(R.S, L))));
        txt.innerHTML = TL.map(x => { if (!x.k) return esc(x.t); marks[x.k] = x.t; return `<mark data-k="${x.k}"${R.prevMarks[x.k] !== x.t ? ' class="new"' : ''}>${esc(x.t)}</mark>`; }).join('');
        R.prevMarks = marks;
      }
      hint.hidden = !R.edited;
      go.disabled = !R.text.trim();
      return count(R.edited ? parse(R.text) : R.S);
    }
    function paint(c) { const on = c.getAttribute('aria-pressed') === 'true'; c.querySelector('span').innerHTML = (on ? ICN('check', 16) : '') + esc(c.textContent); }
    function syncChips() {
      pane.querySelectorAll('.chip[data-g]').forEach(c => {
        const g = c.dataset.g, v = c.dataset.v, on = g === 'dur' || g === 'mun' ? R.S[g] === v : R.S[g].includes(v);
        if ((c.getAttribute('aria-pressed') === 'true') !== on) { c.setAttribute('aria-pressed', on); paint(c); }
      });
    }
    function toggle(c) {
      const g = c.dataset.g, v = c.dataset.v; let on;
      if (g === 'dur' || g === 'mun') { on = R.S[g] !== v; R.S[g] = on ? v : ''; }
      else { const i = R.S[g].indexOf(v); on = i < 0; if (on) R.S[g].push(v); else R.S[g].splice(i, 1); }
      syncChips();
      const n = refresh();
      say(R.edited ? 'Has editat el text: refés-lo per aplicar-hi les opcions.' : !on ? "D'acord, ho trec." : !n ? "Amb tot això no en trobo cap d'exacta; et proposaré les que s'hi acostin més." : g === 'mun' ? `${v}: conec bons racons per allà.` : SAY[g][v]);
    }
    function autosize() { inp.style.height = 'auto'; inp.style.height = Math.min(inp.scrollHeight + 2, 168) + 'px'; }
    function setEditing(on) {
      if (R.editing === on) return; R.editing = on;
      if (on) {
        inp.value = R.edited ? R.text : (R.disp || R.text); inp.hidden = false; txt.hidden = true; editB.innerHTML = `${ICN('check', 16)} Fet`; autosize(); inp.focus();
        try { inp.setSelectionRange(inp.value.length, inp.value.length); } catch (e) { /* res */ }
        say('Escriu-ho amb les teves paraules.');
      } else {
        const v = inp.value.replace(/\s+/g, ' ').trim();
        R.edited = !!v && v !== R.gen && v !== R.disp; R.text = R.edited ? v : R.gen;
        inp.hidden = true; txt.hidden = false; editB.innerHTML = `${ICN('pencil', 16)} Edita`;
        if (R.edited) txt.textContent = R.text; else { R.prevMarks = {}; }
        refresh(); inp.blur(); IOS.Keyboard.hide();
      }
    }
    inp.addEventListener('input', () => { autosize(); go.disabled = !inp.value.trim(); count(parse(inp.value)); [R.m, R.mm].forEach(m => m && m.pulse()); });
    function reset() {
      R.S = blank(); R.edited = false; if (R.editing) { R.editing = false; inp.hidden = true; txt.hidden = false; editB.innerHTML = `${ICN('pencil', 16)} Edita`; }
      R.prevMarks = {}; syncChips(); refresh(); sc.scrollTo({ top: 0, behavior: IOS.rm() ? 'auto' : 'smooth' });
      say('Comencem de nou. Què et ve de gust?');
    }

    /* ---------- enviar al xat: la targeta es converteix en el missatge enviat ---------- */
    async function send() {
      if (R.busy) return;
      if (R.editing) setEditing(false);
      const text = (R.text || '').trim(), C = pg.chat; if (!text || !C) return;
      if (Store.isGuest() && App.st.chat.filter(m => m.me).length >= 3) { App.needAccount("continuar parlant amb l'assistent (el mode convidat permet 3 missatges)"); return; }
      R.busy = true; SENT.add(text); clearTimeout(R.mt);
      if (R.m) R.m.set('celebrant', { restart: true });
      R.mm.set('celebrant', { restart: true });
      MascotUI.announce('Assistent: Perfecte! Ho cerco al xat.');
      const ghost = IOS.rm() ? null : makeGhost(text);
      const sw = open('xat');
      await Promise.all([sw, ghost && ghost.appear]);
      card.style.opacity = ''; card.style.transform = '';
      for (let i = 0; C.busy && i < 80; i++) await wait(100);   // si encara respon el missatge anterior
      C.inp.value = text; C.send.disabled = false;
      await ChatAPI.submit(C);
      if (ghost) await ghost.land(C, text);
      [R.m, R.mm].forEach(m => m && m.set('repos'));
      R.busy = false;
    }
    function makeGhost(text) {
      const r = IOS.rectIn(card), s = IOS.rectIn(chatSc), w = s.w - 24;
      const g = h(`<div class="chat aighost" aria-hidden="true" style="left:${s.x + 12}px;width:${w}px"><div class="mrow me"><div class="mb">${esc(text)}</div></div></div>`);
      IOS.app.appendChild(g);
      const gb = IOS.rectIn(g.querySelector('.mb'));
      g.style.top = Math.max(r.y, r.y + r.h / 2 - gb.h / 2) + 'px';
      const appear = Promise.all([
        IOS.anim(g, [{ opacity: 0, transform: 'scale(.9)' }, { opacity: 1, transform: 'none' }], IOS.S.micro),
        IOS.anim(card, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.97)' }], IOS.fadeSp(180))
      ]);
      return {
        appear,
        async land(C, t) {
          const rows = C.box.querySelectorAll('.mrow.me'), row = rows[rows.length - 1], mb = row && row.querySelector('.mb');
          if (!mb || (mb.textContent !== t && mb.textContent !== (typeof I18n !== 'undefined' ? I18n.t(t) : t))) { await IOS.fade(g, 1, 0, 160); g.remove(); return; }
          row.getAnimations().forEach(a => { try { a.finish(); } catch (e) { /* res */ } });
          mb.style.visibility = 'hidden';
          const gm = g.querySelector('.mb'), base = IOS.rectIn(gm), x = Spring.fn(0.32, 0.86, 0), D = 420, t0 = performance.now();
          await new Promise(res => {
            const step = now => {
              const e = Math.min(1, (now - t0) / D), p = e >= 1 ? 1 : 1 - x((now - t0) / 1000), tg = IOS.rectIn(mb);
              g.style.transform = `translate(${((tg.x - base.x) * p).toFixed(2)}px,${((tg.y - base.y) * p).toFixed(2)}px)`;
              if (e < 1) requestAnimationFrame(step); else res();
            };
            requestAnimationFrame(step);
          });
          mb.style.visibility = ''; g.remove();
        }
      };
    }

    /* ---------- esdeveniments ---------- */
    pane.addEventListener('click', e => {
      const c = e.target.closest('.chip[data-g]'); if (c) { toggle(c); return; }
      if (e.target.closest('[data-redit]')) { setEditing(!R.editing); return; }
      if (e.target.closest('[data-rrestore]')) { R.edited = false; R.prevMarks = {}; if (R.editing) { R.editing = false; inp.hidden = true; txt.hidden = false; editB.innerHTML = `${ICN('pencil', 16)} Edita`; } refresh(); say('Fet! Torno a fer servir les teves opcions.'); return; }
      if (e.target.closest('[data-rgo]')) send();
    });
    resetB.addEventListener('click', reset);
    /* «Canvia les opcions» (a la resposta del xat) torna a aquesta pestanya amb les opcions triades */
    el.addEventListener('click', e => { const s = e.target.closest('[data-say="Canvia les opcions"]'); if (s) { e.preventDefault(); e.stopImmediatePropagation(); open('ruta'); } }, true);

    refresh();
    pg.ai = { R, open, send, reset, edit: setEditing, pick(o) { R.S = Object.assign(blank(), clone(o)); syncChips(); return refresh(); } };
  }
})();

/* ---- v5.js ---- */
/* ===================== Valia v5 · «Bosc viu» =====================
   Redisseny profund sobre les mateixes funcions:
   - pestanya nova «Inici» (graella bento) i barra de pestanyes flotant amb indicador que llisca;
   - un color d'accent per secció (IA lila, Explorar blau riu, Recompenses groc sol, Perfil corall, Ajustos pissarra);
   - Perfil i Recompenses amb composició nova (anells de progrés, nivell, ratxa i insígnies);
   - mode fosc real (Accessibilitat → Aparença) i skeletons, confeti i reaccions de la mascota.
   La gamificació és només una capa visual calculada a partir de les dades que l'app ja desa. */
(function () {
  const SC = IOS.SCREENS, h = IOS.h;
  const D = () => Store.cur();
  const kmTx = v => String(Math.round((v || 0) * 10) / 10).replace('.', ',');
  const ACC = { inici: '#00A86B', xat: '#7C5CFF', explorar: '#2E9BF0', recompenses: '#FFB21A', perfil: '#FF7452' };

  /* ---------- gamificació visual ---------- */
  const LEVELS = [{ n: 'Llavor', p: 0 }, { n: 'Brot', p: 300 }, { n: 'Plançó', p: 900 }, { n: 'Arbust', p: 2000 }, { n: 'Arbre', p: 4000 }, { n: 'Bosc', p: 8000 }];
  function xpOf(d) { const earned = (d.routes || []).reduce((s, r) => s + (r.pts || 0), 0); return Math.max(earned, d.points || 0); }
  function level(d) {
    const x = xpOf(d); let i = 0; LEVELS.forEach((l, k) => { if (x >= l.p) i = k; });
    const cur = LEVELS[i], nx = LEVELS[i + 1];
    return { i: i + 1, n: cur.n, x, next: nx, pct: nx ? Math.round((x - cur.p) / (nx.p - cur.p) * 100) : 100, left: nx ? nx.p - x : 0 };
  }
  const W = 7 * 864e5;
  function weekStart(t) { const d = new Date(t); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return +d; }
  function streak(d) {
    const R = d.routes || [], mon = weekStart(Date.now()); let n = 0;
    for (let k = 0; k < 104; k++) { const a = mon - k * W, has = R.some(r => r.ts >= a && r.ts < a + W); if (has) n++; else if (k > 0) break; }
    return n;
  }
  function weekDots(d) { const mon = weekStart(Date.now()), R = d.routes || []; return [0, 1, 2, 3, 4, 5, 6].map(i => R.some(r => r.ts >= mon + i * 864e5 && r.ts < mon + (i + 1) * 864e5)); }
  function badges(d) {
    const s = streak(d), n = (d.routes || []).length;
    return [
      { ic: 'sprout', t: 'Primera ruta', ok: n >= 1 },
      { ic: 'train', t: '10 km sense cotxe', ok: (d.km || 0) >= 10 },
      { ic: 'leaf', t: '10 kg de CO₂', ok: (d.co2 || 0) >= 10 },
      { ic: 'landmark', t: '5 llocs de patrimoni', ok: (d.places || 0) >= 5 },
      { ic: 'pin', t: '10 check-ins', ok: (d.checkins || 0) >= 10 },
      { ic: 'bolt', t: 'Ratxa de 3 setmanes', ok: s >= 3 },
      { ic: 'shop', t: 'Primer canvi al comerç', ok: (d.coupons || []).length >= 1 },
      { ic: 'compass', t: '5 rutes fetes', ok: n >= 5 }
    ];
  }
  const goalR = () => { const d = D(); return (window.REWARDS || []).find(r => r.id === d.goal) || null; };
  /* anell de progrés (SVG petit) */
  function ring(pct, size, sw, col, track, extra) {
    const r = (size - sw) / 2, c = 2 * Math.PI * r, off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
    return `<svg class="ring5" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true" ${extra || ''}><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${track}" stroke-width="${sw}"/><circle class="ring5-v" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" data-c="${c.toFixed(1)}" data-off="${off.toFixed(1)}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg>`;
  }
  function playRings(root) {
    if (IOS.rm()) return;
    root.querySelectorAll('.ring5-v').forEach(c => { const C = +c.dataset.c, off = +c.dataset.off; c.animate([{ strokeDashoffset: C }, { strokeDashoffset: off }], { duration: 900, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards', delay: 120 }); });
  }
    window.V5 = { level, streak, badges, ring, playRings };

  /* ---------- pestanya nova: Inici ---------- */
  const hello = () => { const hh = new Date().getHours(); return hh < 6 ? 'Bona nit' : hh < 14 ? 'Bon dia' : hh < 20 ? 'Bona tarda' : 'Bona nit'; };
  const today = () => { const s = new Date().toLocaleDateString('ca-ES', { weekday: 'long', day: 'numeric', month: 'long' }); return s.charAt(0).toUpperCase() + s.slice(1); };
  const pick = () => { const L = ACTS.filter(a => a.img), doy = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 864e5); return L[doy % L.length]; };
  SC.home = {
    title: 'Inici', tabbar: true, cls: 'home5', navCls: 'h5nav', scrollThreshold: 70,
    navRight: () => `<button type="button" class="navbtn press" data-h5prof aria-label="El teu perfil">${ICN('user', 22)}</button>`,
    render: () => {
      const a = pick(), near = ACTS.filter(x => x.img && x.id !== a.id).slice(0, 6);
      return `<div class="h5">
      <header class="h5-top"><p class="h5-date" data-h5date>${today()}</p><h1 class="h5-hi"><span data-h5hello>${hello()}</span>,<br><span class="h5-name" data-h5name>Unai</span></h1></header>
      <section class="h5-hero cc" aria-label="Assistent">
        <div class="h5-mas" data-h5mas></div>
        <div class="h5-say"><p class="h5-bub" data-h5bub>Què explorem avui? T'ajudo a trobar una ruta a prop.</p>
          <div class="h5-acts"><button type="button" class="btn sm press" data-h5ia>${ICN('msg', 18)} Pregunta-m'ho</button><button type="button" class="btn sm ghost5 press" data-h5ruta>${ICN('sliders', 18)} Ruta a mida</button></div></div>
      </section>
      <div class="h5-sh"><h2 class="h5-sec">Proposta del dia</h2><button type="button" class="tbtn" data-h5all>Veure-les totes</button></div>
      <article class="h5-feat cc" data-act-id="${a.id}"><button type="button" class="h5-feat-hit" data-h5open aria-label="${esc(a.t)}: obrir el detall">${actImg(a, 'position:absolute;inset:-24px 0;height:auto', 'data-hsrc data-par')}</button>
        <div class="h5-feat-tx"><span class="tag5">${ICN(a.act === 'Bici' ? 'bike' : a.act === 'Córrer' ? 'bolt' : 'walk', 14)} ${a.act} · ${a.dif}</span><h3 class="h5-feat-t">${a.t}</h3><p class="h5-feat-s">${a.sub}</p><p class="h5-feat-m">${a.m.join(' · ')}</p></div></article>
      <div class="bento5">
        <button type="button" class="bt5 bt5-pts press" data-h5pts aria-label="Punts d'energia: obrir Recompenses"><span class="bt5-ring" data-h5ring></span><span class="bt5-k">Punts</span><b class="bt5-v" data-h5pts-v>0</b><span class="bt5-s" data-h5goal></span></button>
        <button type="button" class="bt5 bt5-streak press" data-h5streak aria-label="Ratxa setmanal: obrir el perfil"><span class="bt5-ic">${ICN('bolt', 22)}</span><span class="bt5-k">Ratxa</span><b class="bt5-v" data-h5st>0</b><span class="bt5-s" data-h5stl>setmanes</span><span class="dots5" data-h5dots></span></button>
        <button type="button" class="bt5 bt5-co2 press" data-h5co2 aria-label="Impacte: obrir el perfil"><span class="bt5-ic">${ICN('leaf', 22)}</span><span class="bt5-k">CO₂ estalviat</span><b class="bt5-v" data-h5co2v>0</b><span class="bt5-s">kg · estimació</span></button>
        <button type="button" class="bt5 bt5-lvl press" data-h5lvl aria-label="Nivell i insígnies: obrir el perfil"><span class="bt5-k">Nivell <b data-h5lvln>1</b></span><b class="bt5-v bt5-v2" data-h5lvl-n>Llavor</b><span class="bar5"><i data-h5lvlbar></i></span><span class="bt5-s" data-h5lvll></span><span class="bdg5" data-h5bdg></span></button>
        <button type="button" class="bt5 bt5-chal press" data-h5chal aria-label="Reptes de grup">${photo('repte-1', 'position:absolute;inset:0', '52% 58%')}<span class="bt5-sc"></span><span class="bt5-k">Reptes de grup</span><b class="bt5-v bt5-v2">Entre tots, 15.000 kg</b><span class="bar5 lt"><i style="width:83%"></i></span><span class="bt5-s">Xifra comunitària d'exemple</span></button>
      </div>
      <div class="h5-sh"><h2 class="h5-sec">A prop teu</h2><button type="button" class="tbtn" data-h5map>Mapa</button></div>
      <div class="h5-near scrollx" role="list">${near.map(n => `<article class="h5-nc" role="listitem" data-act-id="${n.id}"><button type="button" class="h5-nc-hit press" data-h5open aria-label="${esc(n.t)}: obrir el detall">${actImg(n, 'position:absolute;inset:0;height:auto', 'data-hsrc')}<span class="h5-nc-sc"></span><span class="h5-nc-t">${n.t}</span><span class="h5-nc-s"><span>${n.mun}</span> · <span class="nw51">${n.m[0]}</span></span></button></article>`).join('')}</div>
      <p class="fn mut h5-foot">Llocs reals del Vallès Oriental amb fotos reals. Xifres de punts, impacte i reptes: dades d'exemple.</p>
    </div>`; },
    mount(el, p, pg) {
      pg.h5m = Mascot.create(el.querySelector('[data-h5mas]'), { size: 112, state: 'saludant', label: 'Assistent de Valia' });
      pg.h5m.el.style.color = '#fff';
      el.addEventListener('click', e => {
        const o = e.target.closest('[data-h5open]'); if (o) { const id = o.closest('[data-act-id]').dataset.actId, hs = o.querySelector('[data-hsrc]'); pg.stack.push(17, { id }, hs ? { hero: { src: hs, target: '[data-hero]' } } : {}); return; }
        if (e.target.closest('[data-h5ia]')) { App.switchTab('xat'); const t = App.stack('xat').top; t && t.ai && t.ai.open('xat'); return; }
        if (e.target.closest('[data-h5ruta]')) { App.switchTab('xat'); setTimeout(() => { const t = App.stack('xat').top; t && t.ai && t.ai.open('ruta'); }, 60); return; }
        if (e.target.closest('[data-h5pts]')) { App.switchTab('recompenses'); return; }
        if (e.target.closest('[data-h5streak],[data-h5co2],[data-h5lvl],[data-h5prof]')) { App.switchTab('perfil'); return; }
        if (e.target.closest('[data-h5chal]')) { App.switchTab('perfil'); App.stack('perfil').push(42); return; }
        if (e.target.closest('[data-h5all]')) { App.switchTab('explorar'); return; }
        if (e.target.closest('[data-h5map]')) { App.switchTab('explorar'); App.stack('explorar').push(16); return; }
      });
      /* parallax de la foto destacada: només transform */
      const par = el.querySelector('[data-par]'), feat = el.querySelector('.h5-feat');
      pg.scroll.addEventListener('scroll', () => { if (IOS.rm() || !par || !feat) return; const r = IOS.rectIn(feat), y = Math.max(-24, Math.min(24, (r.y - 260) * -0.12)); par.style.transform = `translate3d(0,${y.toFixed(1)}px,0)`; }, { passive: true });
      fill(el, pg, true);
    },
    appear(el, p, pg) { fill(el, pg, false); },
    reappear(el, p, pg) { fill(el, pg, false); }
  };
  function fill(el, pg, first) {
    const d = D(), g = goalR(), lv = level(d), st = streak(d), name = (d.name || '').trim().split(/\s+/)[0] || 'explorador/a';
    el.querySelector('[data-h5name]').textContent = name;
    el.querySelector('[data-h5hello]').textContent = hello();
    el.querySelector('[data-h5pts-v]').textContent = fmt(d.points || 0);
    const pct = g ? Math.min(100, Math.round((d.points || 0) / g.p * 100)) : Math.min(100, lv.pct);
    el.querySelector('[data-h5ring]').innerHTML = ring(pct, 64, 7, '#0F1B15', 'rgba(15,27,21,.14)');
    el.querySelector('[data-h5goal]').textContent = g ? `${pct} % de l'objectiu` : 'Tria un objectiu';
    el.querySelector('[data-h5st]').textContent = st;
    el.querySelector('[data-h5stl]').textContent = st === 1 ? 'setmana seguida' : 'setmanes seguides';
    el.querySelector('[data-h5dots]').innerHTML = weekDots(d).map((on, i) => `<i class="${on ? 'on' : ''}" title="${['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg'][i]}"></i>`).join('');
    el.querySelector('[data-h5co2v]').textContent = kmTx(d.co2);
    el.querySelector('[data-h5lvln]').textContent = lv.i; el.querySelector('[data-h5lvl-n]').textContent = lv.n;
    el.querySelector('[data-h5lvlbar]').style.width = lv.pct + '%';
    el.querySelector('[data-h5lvll]').textContent = lv.next ? `${fmt(lv.left)} punts per a ${lv.next.n}` : 'Nivell màxim';
    const B = badges(d); el.querySelector('[data-h5bdg]').innerHTML = B.slice(0, 5).map(b => `<span class="${b.ok ? 'ok' : ''}" title="${b.t}">${ICN(b.ic, 14)}</span>`).join('');
    if (!IOS.rm()) { playRings(el); if (first) IOS.stagger(el.querySelectorAll('.h5-hero, .h5-feat, .bt5, .h5-nc'), { delay: 80, max: 12, dy: 18 }); }
    if (pg.h5m) pg.h5m.set('saludant', { restart: true });
  }

  /* pestanyes: «Inici» al davant i obertura per defecte */
  App.TABS.unshift({ k: 'inici', label: 'Inici', icon: 'home', root: 'home' });
  const sm = App.startMain; App.startMain = o => sm(Object.assign({}, o || {}, { tab: (o && o.tab) || 'inici' }));

  /* ---------- barra de pestanyes: indicador que llisca amb molla ---------- */
  let indX = null;
  function syncTab() {
    const tb = IOS.app.querySelector('#sc-main > .tabbar'); if (!tb) return;
    let ind = tb.querySelector('.tb5-ind'); if (!ind) { ind = h('<span class="tb5-ind" aria-hidden="true"></span>'); tb.prepend(ind); indX = null; }
    const b = tb.querySelector('button[aria-selected="true"]'); if (!b) return;
    tb.style.setProperty('--tacc', ACC[App.tab] || ACC.inici); tb.dataset.cur = App.tab;
    const w = Math.min(64, b.offsetWidth - 6), x = b.offsetLeft + (b.offsetWidth - w) / 2;
    ind.style.width = w + 'px';
    if (indX === null || IOS.rm()) ind.style.transform = `translateX(${x}px)`;
    else if (Math.abs(indX - x) > 1) IOS.anim(ind, [{ transform: `translateX(${indX}px) scaleX(1)` }, { transform: `translateX(${(indX + x) / 2}px) scaleX(1.35)`, offset: 0.45 }, { transform: `translateX(${x}px) scaleX(1)` }], IOS.S.soft);
    indX = x;
  }
  App.hook(() => requestAnimationFrame(syncTab));
  window.addEventListener('resize', () => { indX = null; syncTab(); });

  /* ---------- colors per secció i pàgines d'Ajustos ---------- */
  [23, 24, 25, 39].forEach(k => { if (SC[k]) SC[k].cls = ((SC[k].cls || '') + ' cfg5').trim(); });

  /* ---------- Perfil: composició nova ---------- */
  /* la mascota del perfil viu dins la targeta d'identitat: sense la bombolla flotant antiga */
  if (typeof MascotUI !== 'undefined' && MascotUI.canShow) { const cs = MascotUI.canShow; MascotUI.canShow = k => (k === 'perfil' ? false : cs.call(MascotUI, k)); }
  const P = SC[22];
  if (P) {
    const pr = P.render;
    P.scrollThreshold = 190;
    P.render = (p, pg) => {
      const base = pr(p, pg), tmp = document.createElement('div'); tmp.innerHTML = base;
      const take = s => { const e = tmp.querySelector(s); return e ? e.outerHTML : ''; };
      const stats = take('#p-stats'), impact = take('#p-impact'), routes = take('#p-routes'), guest = take('[data-guest]'), pcard = take('[data-pcard]');
      return `<div class="p5">
        <div class="p5-cover">${photo('capcalera-perfil', 'position:absolute;inset:-20px 0;', '50% 55%', 'aria-hidden="true" data-p5par')}<div class="p5-sc"></div><h1 class="lt p5-title" data-ptitle>Perfil</h1></div>
        <section class="p5-id cc">
          <div class="p5-av"><span class="p5-ring" data-p5ring></span><span class="pav" data-pav>U</span></div>
          <div class="p5-mas" data-p5mas></div>
          <div data-pname><h2 class="p5-nm" data-pnm></h2><p class="fn mut" data-since></p></div>
          <div class="p5-lvl"><span class="tag5 lv">${ICN('sprout', 14)} Nivell <b data-p5lvn>1</b> · <b data-p5lvt>Llavor</b></span><span class="tag5 st">${ICN('bolt', 14)} <b data-p5st>0</b>&nbsp;setm. de ratxa</span></div>
          <div class="bar5"><i data-p5lvbar></i></div><p class="fn mut" data-p5lvl style="margin:6px 0 0"></p>
        </section>
        ${guest}
        <section class="px p5-sec"><div class="p5-row">${pcard}</div></section>
        <section class="px p5-sec"><div class="p5-h"><h2 class="t2">Insígnies</h2><span class="fn mut" data-p5bn></span></div><div class="bdgs5" data-p5bdgs></div></section>
        ${stats}${impact}${routes}
      </div>`;
    };
    const pm = P.mount, pa = P.appear, pre = P.reappear;
    const p5 = (el, pg, first) => {
      const d = D(), lv = level(d), st = streak(d), B = badges(d);
      el.querySelector('[data-p5ring]').innerHTML = ring(lv.pct, 104, 6, 'var(--acc)', 'rgba(255,116,82,.18)');
      el.querySelector('[data-p5lvn]').textContent = lv.i; el.querySelector('[data-p5lvt]').textContent = lv.n;
      el.querySelector('[data-p5st]').textContent = st;
      el.querySelector('[data-p5lvbar]').style.width = lv.pct + '%';
      el.querySelector('[data-p5lvl]').textContent = lv.next ? `${fmt(lv.left)} punts per arribar a ${lv.next.n} (nivell ${lv.i + 1}).` : 'Has arribat al nivell més alt.';
      el.querySelector('[data-p5bn]').textContent = `${B.filter(b => b.ok).length} de ${B.length}`;
      el.querySelector('[data-p5bdgs]').innerHTML = B.map(b => `<div class="bdg5 ${b.ok ? 'ok' : ''}"><span class="bdg5-i">${ICN(b.ok ? b.ic : 'lock', 22)}</span><span class="bdg5-t">${b.t}</span><span class="sr">${b.ok ? 'Aconseguida' : 'Encara no'}</span></div>`).join('');
      if (!IOS.rm()) { playRings(el); if (first) IOS.stagger(el.querySelectorAll('.bdg5'), { delay: 160, max: 8, dy: 10 }); }
      if (pg.p5m) pg.p5m.set(B.some(b => b.ok) ? 'celebrant' : 'saludant', { restart: true });
    };
    P.mount = (el, p, pg) => {
      pm(el, p, pg);
      pg.p5m = Mascot.create(el.querySelector('[data-p5mas]'), { size: 72, state: 'saludant', label: 'Mascota de Valia' });
      const par = el.querySelector('[data-p5par]');
      pg.scroll.addEventListener('scroll', () => { if (IOS.rm() || !par) return; const y = Math.min(60, pg.scroll.scrollTop * 0.35); par.style.transform = `translate3d(0,${y.toFixed(1)}px,0) scale(${(1 + Math.max(0, -pg.scroll.scrollTop) / 400).toFixed(3)})`; }, { passive: true });
      p5(el, pg, true);
    };
    P.appear = (el, p, pg) => { pa && pa(el, p, pg); p5(el, pg, false); };
    P.reappear = (el, p, pg) => { pre && pre(el, p, pg); p5(el, pg, false); };
  }

  /* ---------- Recompenses: medalla de punts i mosaic ---------- */
  const R = SC[31];
  if (R) {
    const rr = R.render;
    R.navCls = 'r5nav'; R.sb = 'dark'; R.scrollThreshold = 120;
    R.render = (p, pg) => {
      const tmp = document.createElement('div'); tmp.innerHTML = rr(p, pg);
      const goalbox = tmp.querySelector('[data-goalbox]').outerHTML, px = tmp.querySelector('.px'); const pxHtml = px ? px.innerHTML : '';
      return `<div class="r5">
        <section class="r5-hero">
          <h1 class="lt r5-title">Recompenses</h1>
          <div class="r5-medal"><span class="r5-ring" data-r5ring></span><span class="r5-in">${ICN('bolt', 26)}<b class="num" data-bal></b><span>punts d'energia</span></span></div>
          <div class="r5-mas" data-r5mas></div>
          <div class="r5-chips"><span class="tag5">${ICN('sprout', 14)} Nivell <b data-r5lv>1</b> · <b data-r5lvt>Llavor</b></span><span class="tag5">${ICN('bolt', 14)} <b data-r5st>0</b>&nbsp;setm. de ratxa</span></div>
          <div class="r5-goal cc">${goalbox}</div>
        </section>
        <div class="px r5-body">${pxHtml}</div></div>`;
    };
    const rm0 = R.mount, rre = R.reappear;
    const r5 = (el, pg) => {
      const d = D(), g = goalR(), lv = level(d), pct = g ? Math.min(100, Math.round((d.points || 0) / g.p * 100)) : 0;
      el.querySelector('[data-r5ring]').innerHTML = ring(pct, 196, 12, '#00A86B', 'rgba(255,255,255,.55)');
      el.querySelector('[data-r5lv]').textContent = lv.i; el.querySelector('[data-r5lvt]').textContent = lv.n; el.querySelector('[data-r5st]').textContent = streak(d);
      playRings(el);
    };
    R.mount = (el, p, pg) => {
      rm0(el, p, pg);
      pg.r5m = Mascot.create(el.querySelector('[data-r5mas]'), { size: 84, state: 'saludant', label: 'Mascota de Valia' });
      r5(el, pg);
    };
    R.reappear = (el, p, pg) => { rre && rre(el, p, pg); r5(el, pg); if (pg.r5m) pg.r5m.set('saludant', { restart: true }); };
  }
  /* «Canvi fet!»: el confeti ja el llança la capa Polish quan apareix l'anell de confirmació */


  /* ---------- etiquetes de composició per a pantalles concretes ---------- */
  const tagCls = (k, c) => { if (SC[k]) SC[k].cls = ((SC[k].cls || '') + ' ' + c).trim(); };
  [8, 9, 10, 36].forEach(k => tagCls(k, 'onb5')); tagCls(33, 'ok5'); tagCls(38, 'com5'); tagCls(37, 'cond5'); tagCls(15, 'filt5'); tagCls(19, 'run5'); tagCls(21, 'sum5');
  /* la mascota acompanya els permisos */
  const withMascot = (k, sel, size, state) => { const d = SC[k]; if (!d) return; const m0 = d.mount; d.mount = (el, p, pg) => { m0 && m0(el, p, pg); const host = el.querySelector(sel); if (!host) return; const box = h(`<div class="m5host" aria-hidden="true"></div>`); host.appendChild(box); const m = Mascot.create(box, { size, state, label: 'Mascota de Valia' }); m.el.style.color = sel === '.ring' ? '#fff' : ''; }; };
  withMascot(9, '.ring', 118, 'saludant'); withMascot(8, '.perm-map', 86, 'buscant');


  /* registre i inici de sessió: la mascota dona la benvinguda */
  [3, 6].forEach(k => { const d = SC[k]; if (!d) return; const m0 = d.mount; d.mount = (el, p, pg) => { m0 && m0(el, p, pg); const body = el.querySelector('.dk-body'); if (!body || IOS.Keyboard && false) return; const box = h('<div class="m5dk" aria-hidden="true"></div>'); body.prepend(box); const m = Mascot.create(box, { size: 76, state: 'saludant', label: 'Mascota de Valia' }); m.el.style.color = '#3DDC97'; }; });
  /* privacitat: capçalera amb la mascota i l'escut */
  if (SC[10]) { const m0 = SC[10].mount; SC[10].mount = (el, p, pg) => { m0 && m0(el, p, pg); const sc = el.querySelector('.scroll'); if (!sc) return; const hero = h(`<div class="onb5-hero" aria-hidden="true"><div class="m5host"></div><span class="oh-ic">${ICN('shield', 34)}</span></div>`); sc.prepend(hero); const m = Mascot.create(hero.querySelector('.m5host'), { size: 104, state: 'escoltant', label: 'Mascota de Valia' }); m.el.style.color = '#fff'; }; }


  /* fitxes: el títol passa a sobre de la foto a sang */
  const heroTitle = k => { const d = SC[k]; if (!d) return; const m0 = d.mount; d.mount = (el, p, pg) => { m0 && m0(el, p, pg);
    const hero = el.querySelector('.dhero'), body = el.querySelector('.dbody'); if (!hero || !body) return; const t = body.querySelector('h1'); if (!t) return;
    const box = h('<div class="dh5"></div>'), nx = t.nextElementSibling; box.appendChild(t);
    if (nx && !nx.querySelector('button,input') && !nx.matches('.stats3,.surf,.grow,.btn')) box.appendChild(nx);
    hero.appendChild(box); hero.classList.add('dh5-on'); }; };
  [17, 18, 32].forEach(heroTitle);


  /* Explorar: botó flotant del mapa */
  if (SC[14]) { const m0 = SC[14].mount; SC[14].mount = (el, p, pg) => { m0 && m0(el, p, pg); const fab = h(`<button type="button" class="fab5 press" aria-label="Veure les rutes al mapa">${ICN('map', 24)}<span>Mapa</span></button>`); pg.el.appendChild(fab); fab.addEventListener('click', () => pg.stack.push(16)); }; }

  /* ---------- mode fosc (Accessibilitat → Aparença) ---------- */
  const TH = 'valia.theme';
  const getTh = () => { try { return localStorage.getItem(TH) || 'auto'; } catch (e) { return 'auto'; } };
  const mq = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  function applyTh() {
    const t = getTh(), dark = t === 'dark' || (t === 'auto' && mq && mq.matches), root = IOS.app || document.querySelector('.ios');
    if (!root) return;
    root.classList.toggle('th-dark', !!dark);
    const m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute('content', dark ? '#0D1210' : '#F4F3EC');
  }
  if (mq && mq.addEventListener) mq.addEventListener('change', applyTh);
  applyTh(); App.hook(() => { const r = IOS.app; if (r && !r._th5) { r._th5 = 1; applyTh(); } });
  document.addEventListener('DOMContentLoaded', applyTh);
  const A = SC[24];
  if (A) {
    const ar = A.render, am = A.mount;
    A.render = (p, pg) => {
      const idx = { light: 0, dark: 1, auto: 2 }[getTh()];
      let html = ar(p, pg);
      return html.replace(/(<div class="segc"[^>]*>)(<button[^>]*aria-selected="(?:true|false)">Clar<\/button><button[^>]*aria-selected="(?:true|false)">Fosc<\/button><button[^>]*aria-selected="(?:true|false)">Automàtic<\/button>)/, (m0, a, b) => a + b.replace(/aria-selected="(true|false)"/g, (() => { let k = -1; return () => { k++; return `aria-selected="${k === idx}"`; }; })()));
    };
    A.mount = (el, p, pg) => {
      am && am(el, p, pg);
      const sg = el.querySelector('.segc');
      if (sg) sg.querySelectorAll('button').forEach((b, i) => b.addEventListener('click', () => { try { localStorage.setItem(TH, ['light', 'dark', 'auto'][i]); } catch (e) { /* res */ } applyTh(); }));
    };
  }
})();

/* ---- v51.js ---- */
/* ===================== Valia v5.1 · Configuració ampliada, preferències que funcionen i retocs =====================
   - Preferències desades al dispositiu: idioma, unitats, mida del text, reduir animacions, contrast alt,
     vibració, estil del mapa i avisos (els avisos reals necessiten servidor: interfície preparada).
   - Compte: editar el perfil, canviar la contrasenya, tancar la sessió i esborrar el compte (locals).
   - Privacitat: permís d'ubicació, perfil visible a la Comunitat i descàrrega de les dades en JSON.
   - Ajuda: tutorial amb la mascota, preguntes freqüents i contacte. Sobre Valia: versió, condicions,
     privacitat i atribucions.
   - Títols principals en majúscules que sempre hi caben; foto difuminada al cercle de Recompenses. */
(function () {
  'use strict';
  const SC = IOS.SCREENS, h = IOS.h;
  const VERSION = '1.0 (v5.1)';
  const PK = 'valia.prefs';
  const prefs = (() => { try { return JSON.parse(localStorage.getItem(PK)) || {}; } catch (e) { return {}; } })();
  const savePrefs = () => { try { localStorage.setItem(PK, JSON.stringify(prefs)); } catch (e) { /* mode privat */ } };
  const T = s => I18n.t(s);
  const isOn = (v, d) => (v == null ? d : !!v);
  const TH = 'valia.theme';
  const getTh = () => { try { return localStorage.getItem(TH) || 'auto'; } catch (e) { return 'auto'; } };

  /* ---------- preferències aplicades en arrencar ---------- */
  let booting = false;
  function applyPrefs() {
    const app = IOS.app; if (!app) return;
    booting = true;
    if (prefs.dt) IOS.set('dt', prefs.dt);
    if (prefs.rm != null) IOS.set('rm', !!prefs.rm);
    booting = false;
    app.classList.toggle('hc51', !!prefs.hc);
    syncMap();
  }
  function syncMap() {
    const app = IOS.app; if (!app) return;
    const st = prefs.map || 'auto', dark = app.classList.contains('th-dark');
    app.classList.toggle('mapdk51', st === 'dark' || (st === 'auto' && dark));
  }
  const oi = IOS.init; IOS.init = el => { oi(el); applyPrefs(); new MutationObserver(() => { document.documentElement.classList.toggle('th-dark', el.classList.contains('th-dark')); syncMap(); }).observe(el, { attributes: true, attributeFilter: ['class'] }); document.documentElement.classList.toggle('th-dark', el.classList.contains('th-dark')); };
  IOS.onSettings((k, v) => { if (booting) return; if (k === 'dt' || k === 'rm') { prefs[k] = v; savePrefs(); } });
  /* vibració suau en tocar (només als mòbils que ho permeten) */
  document.addEventListener('click', e => { if (prefs.vib === false || !navigator.vibrate) return; if (e.target.closest && e.target.closest('#app button, #app [role=switch], #app [role=tab]')) { try { navigator.vibrate(8); } catch (er) { /* res */ } } }, true);

  /* ---------- 1 · títols en majúscules: si una paraula no hi cap, el text es redueix fins que hi cap ---------- */
  const TSEL = '.lt, .ltitle, .page.dark .t1, .page.onbpg h1.t1, .page.onb5 h1.t1, .page.ok5 h1, .acc .acc-tx h2, .h5-hi, .p5-cover h1, .dh5 h1, .page > .scroll > .px > h1.t1:first-child';
  function fitTitles(root) {
    (root || IOS.app).querySelectorAll(TSEL).forEach(el => {
      if (!el.offsetWidth) return;
      el.style.fontSize = '';
      let fs = parseFloat(getComputedStyle(el).fontSize), n = 0;
      while (el.scrollWidth > el.clientWidth + 1 && fs > 16 && n++ < 24) { fs -= 1; el.style.setProperty('font-size', fs + 'px', 'important'); }
    });
  }
  /* textes d'una sola línia que han de cabre sencers (títol de la barra, botó enrere, xifres de les fitxes) */
  const F1 = '.nav .nt, .navbtn.back span, .stat b, .stats3 b';
  function fitLines(root) {
    (root || IOS.app).querySelectorAll(F1).forEach(el => {
      if (!el.offsetWidth) return;
      el.style.removeProperty('font-size');
      let fs = parseFloat(getComputedStyle(el).fontSize), n = 0;
      while (el.scrollWidth > el.clientWidth && fs > 13 && n++ < 14) { fs -= 0.5; el.style.setProperty('font-size', fs + 'px', 'important'); }
    });
  }
  const fitSoon = () => requestAnimationFrame(() => requestAnimationFrame(() => { fitTitles(); fitLines(); }));
  App.hook(fitSoon);
  I18n.on(fitSoon);
  window.addEventListener('resize', fitSoon);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitSoon);

  /* ---------- 2 · Recompenses: foto real difuminada dins el cercle ---------- */
  const R = SC[31];
  if (R) {
    const rr = R.render;
    R.render = (p, pg) => rr(p, pg).replace('<span class="r5-in">', `<span class="r5-in">${photo('capcalera-botiga', '', '55% 50%').replace('class="pimg cc', 'class="pimg r5-ph')}`);
  }

  /* ---------- 3 · Configuració ---------- */
  const row = (ic, cls, label, o) => {
    o = o || {};
    const isSw = o.sw != null, tg = isSw ? 'div' : 'button';
    return `<${tg} ${isSw ? '' : 'type="button"'} class="grow ic ${isSw ? 'swrow' : ''} ${o.red ? 'red51' : ''}" ${o.act ? `data-act="${o.act}"` : ''}><span class="gic ${cls || ''}">${ICN(ic, 18, '#fff')}</span><span class="gl51"><span class="bd">${label}</span>${o.sub ? `<span class="fn">${o.sub}</span>` : ''}</span>${o.val != null ? `<span class="gv" ${o.vk ? `data-v="${o.vk}"` : ''}>${o.val}</span>` : ''}${isSw ? `<button type="button" class="sw" role="switch" aria-checked="${o.sw ? 'true' : 'false'}" aria-label="${esc(label)}" data-k="${o.k}"></button>` : (o.noChev ? '' : `<span class="chev">${ICN('chevR', 18)}</span>`)}</${tg}>`;
  };
  const LANGV = () => I18n.name();
  const THV = () => ({ light: 'Clar', dark: 'Fosc', auto: 'Automàtic' })[getTh()];
  const UNV = () => (I18n.units === 'mi' ? 'Milles' : 'Quilòmetres');
  const DTS = [[1, 'Predeterminat'], [1.12, 'Gran'], [1.35, 'Molt gran'], [1.94, 'Accessibilitat (AX2)']];
  const DTV = () => (DTS.find(x => x[0] === IOS.settings.dt) || DTS[0])[1];
  const MAPS = [['auto', 'Automàtic', 0, "Segons l'aparença"], ['light', 'Clar'], ['dark', 'Fosc']];
  const MAPV = () => (MAPS.find(x => x[0] === (prefs.map || 'auto')) || MAPS[0])[1];
  const NOTIF = [['n_routes', 'Rutes noves', 'Propostes a prop teu'], ['n_chal', 'Reptes de la comunitat', 'Quan comença o acaba un repte'], ['n_rew', 'Recompenses', 'Quan pots canviar els teus punts'], ['n_rem', 'Recordatoris', 'Una proposta el cap de setmana']];
  const permTx = s => ({ granted: 'Permès', denied: 'Denegat', prompt: 'Sense decidir', default: 'Sense decidir' })[s] || 'No disponible';
  const initial = n => (String(n || '?').trim()[0] || '?').toUpperCase();

  const S23 = SC[23];
  S23.render = () => {
    const d = Store.cur(), g = Store.isGuest();
    const acc = g
      ? `<div class="glist">${row('userPlus', '', 'Crear un compte', { act: 'create', sub: 'Desa els punts i les rutes' })}${row('out', 'r', 'Sortir del mode convidat', { act: 'logout', red: true, noChev: true })}</div>`
      : `<div class="glist"><button type="button" class="grow prof51" data-act="edit"><span class="av51" aria-hidden="true">${esc(initial(d.name))}</span><span class="f1"><span class="hd">${esc(d.name)}</span><span class="fn mut" data-noi18n>${esc(Store.email() || '')}</span></span><span class="chev">${ICN('chevR', 18)}</span></button></div>
        <div class="glist" style="margin-top:12px">${row('pencil', '', 'Editar el perfil', { act: 'edit' })}${row('lock', 'g', 'Canviar la contrasenya', { act: 'pass' })}${row('out', 'k', 'Tancar la sessió', { act: 'logout', noChev: true })}${row('trash', 'r', 'Esborrar el compte', { act: 'del', red: true, noChev: true })}</div>`;
    return `<div class="set51">
      <h2 class="gtitle">Compte</h2>${acc}
      <h2 class="gtitle">Preferències</h2><div class="glist">${row('globe', 'b', 'Idioma', { act: 'lang', val: esc(LANGV()), vk: 'lang' })}${row('sun', 'o', 'Aparença', { act: 'theme', val: THV(), vk: 'theme' })}${row('route', 'g', 'Unitats', { act: 'units', val: UNV(), vk: 'units' })}${row('text', 'b', 'Mida del text', { act: 'dt', val: DTV(), vk: 'dt' })}${row('wind', '', 'Reduir animacions', { sw: IOS.settings.rm, k: 'rm' })}${row('vibrate', 'g', 'Vibració', { sw: isOn(prefs.vib, true), k: 'vib', sub: 'Als mòbils que ho permeten' })}${row('eye', 'k', 'Accessibilitat', { act: 'go24' })}</div>
      <h2 class="gtitle">Notificacions</h2><div class="glist">${row('bell', 'r', 'Permís del sistema', { act: 'notif', val: '…', vk: 'notif' })}${NOTIF.map(n => row(n[0] === 'n_routes' ? 'route' : n[0] === 'n_chal' ? 'users' : n[0] === 'n_rew' ? 'gift' : 'calendar', n[0] === 'n_rew' ? 'o' : n[0] === 'n_chal' ? 'b' : '', n[1], { sw: isOn((d.notif || {})[n[0]], n[0] !== 'n_rem'), k: n[0], sub: n[2] })).join('')}</div>
      <p class="gfoot">Les preferències es desen en aquest dispositiu. L'enviament d'avisos necessita el servidor de Valia (en preparació).</p>
      <h2 class="gtitle">Privacitat</h2><div class="glist">${row('pin', 'b', "Permís d'ubicació", { act: 'loc', val: '…', vk: 'loc' })}${row('users', '', 'Perfil visible a la Comunitat', { sw: isOn(d.pubProfile, true), k: 'pub', sub: 'Nom i rutes a la Comunitat de cada ruta' })}${row('shield', 'g', 'Consentiments', { act: 'priv' })}${row('download', 'k', 'Descarregar les meves dades', { act: 'export', sub: 'Fitxer JSON amb el compte, les rutes i els punts' })}</div>
      <h2 class="gtitle">Mapes</h2><div class="glist">${row('map', 'b', 'Estil del mapa', { act: 'map', val: MAPV(), vk: 'map' })}${row('cloudDown', 'g', 'Mapes sense connexió', { act: 'go39' })}${row('shield', 'r', 'Seguretat i contactes', { act: 'go41' })}</div>
      <p class="gfoot">El mapa del prototip és il·lustratiu: encara no té capa topogràfica.</p>
      <h2 class="gtitle">Ajuda</h2><div class="glist">${row('sprout', '', 'Tornar a veure el tutorial', { act: 'tut' })}${row('help', 'o', 'Preguntes freqüents', { act: 'go25' })}${row('mail', 'b', 'Contacte', { act: 'contact' })}</div>
      <h2 class="gtitle">Sobre Valia</h2><div class="glist">${row('info', 'k', 'Versió', { val: VERSION, noChev: true })}${row('text', 'g', "Condicions d'ús", { act: 'terms' })}${row('lock', 'g', 'Política de privacitat', { act: 'privpol' })}${row('layers', 'b', 'Atribucions dels mapes', { act: 'attrib' })}${row('share2', '', 'Compartir Valia', { act: 'share', val: 'Codi QR' })}</div>
      <p class="gfoot" style="text-align:center">Valia 1.0 · prototip del Treball de Recerca</p></div>`;
  };
  const paintVals = el => {
    const set = (k, v) => { const s = el.querySelector(`[data-v="${k}"]`); if (s) s.textContent = v; };
    set('lang', LANGV()); set('theme', T(THV())); set('units', T(UNV())); set('dt', T(DTV())); set('map', T(MAPV()));
    set('notif', T('Notification' in window ? permTx(Notification.permission) : 'No disponible'));
    if (navigator.permissions && navigator.permissions.query) navigator.permissions.query({ name: 'geolocation' }).then(r => set('loc', T(permTx(r.state)))).catch(() => set('loc', T(navigator.geolocation ? 'Sense decidir' : 'No disponible')));
    else set('loc', T(navigator.geolocation ? 'Sense decidir' : 'No disponible'));
    const rm = el.querySelector('[data-k="rm"]'); if (rm) rm.setAttribute('aria-checked', IOS.settings.rm ? 'true' : 'false');
  };
  function relaunch(msg, icon) {
    const g = Store.isGuest();
    App.startMain({ tab: 'perfil', guest: g, noGreet: true, keep: true });
    App.stack('perfil').push(23, {}, { instant: true });
    if (msg) setTimeout(() => IOS.Toast.show(msg, icon || 'check'), 60);
  }
  S23.mount = (el, p, pg) => {
    paintVals(el);
    el.addEventListener('toggle', e => {
      const k = e.target.dataset && e.target.dataset.k; if (!k) return; const v = !!e.detail, d = Store.cur();
      if (k === 'rm') IOS.set('rm', v);
      else if (k === 'vib') { prefs.vib = v; savePrefs(); }
      else if (k === 'pub') { d.pubProfile = v; Store.save(); IOS.Toast.show(v ? 'Perfil visible a la Comunitat' : 'Perfil ocult a la Comunitat', 'users'); }
      else if (k.startsWith('n_')) { d.notif = d.notif || {}; d.notif[k] = v; Store.save(); }
    });
    el.addEventListener('click', e => {
      const a = e.target.closest('[data-act]'); if (!a) return; const k = a.dataset.act, d = Store.cur();
      if (k === 'go39') pg.stack.push(39); if (k === 'go24') pg.stack.push(24); if (k === 'go25') pg.stack.push(25);
      if (k === 'go41') IOS.Modal.present(41, {}, { detents: ['large'] });
      if (k === 'lang') pg.stack.push(51); if (k === 'theme') pg.stack.push(52); if (k === 'units') pg.stack.push(53); if (k === 'dt') pg.stack.push(54); if (k === 'map') pg.stack.push(55);
      if (k === 'edit') pg.stack.push(56); if (k === 'pass') pg.stack.push(57);
      if (k === 'terms') pg.stack.push(58); if (k === 'privpol') pg.stack.push(59); if (k === 'attrib') pg.stack.push(60);
      if (k === 'tut') IOS.Modal.present(61, {}, { kind: 'cover' });
      if (k === 'create') Flow.toOnboarding();
      if (k === 'logout') App.logout();
      if (k === 'del') IOS.Alert.show({ title: 'Esborrar el compte?', msg: "S'esborraran el compte, els punts i les rutes d'aquest dispositiu. No es pot desfer.", buttons: [{ t: 'Cancel·la' }, { t: 'Esborrar', style: 'red', on: () => { Store.deleteAccount(); MascotUI.reset(); App.st.chat = []; App.startOnboarding(2); IOS.Toast.show('Compte esborrat', 'trash'); } }] });
      if (k === 'priv') { if (Store.isGuest()) { IOS.Toast.show('En mode convidat no es desa res', 'lock'); return; } const c = d.consents || {}; IOS.Alert.show({ title: 'Consentiments', msg: `Estadístiques anònimes: ${c.stats ? 'sí' : 'no'} · Novetats per correu: ${c.news ? 'sí' : 'no'} · Personalització amb IA: ${c.ai ? 'sí' : 'no'}.`, buttons: [{ t: 'Tancar' }, { t: 'Canviar', style: 'pref', on: () => pg.stack.push(62) }] }); }
      if (k === 'export') exportData();
      if (k === 'contact') IOS.Alert.show({ title: 'Contacte', msg: "En aquest prototip encara no hi ha un canal de suport real. Mentrestant, pots preguntar a l'assistent de Valia al xat.", buttons: [{ t: 'Tancar' }, { t: 'Obrir el xat', style: 'pref', on: () => App.switchTab('xat') }] });
      if (k === 'loc') { if (!navigator.geolocation) { IOS.Toast.show('Ubicació no disponible', 'info'); return; } navigator.geolocation.getCurrentPosition(pos => { d.loc = [+pos.coords.latitude.toFixed(3), +pos.coords.longitude.toFixed(3)]; Store.save(); IOS.Toast.show('Ubicació activada', 'pin'); paintVals(el); }, () => { IOS.Toast.show('Permís denegat: activa-la a la configuració del navegador', 'info'); paintVals(el); }, { timeout: 8000 }); }
      if (k === 'notif') { if ('Notification' in window && Notification.requestPermission) Notification.requestPermission().then(r => { IOS.Toast.show(r === 'granted' ? 'Avisos activats' : 'Avisos desactivats', 'bell'); paintVals(el); }); else IOS.Toast.show("Els avisos funcionen amb l'app instal·lada", 'bell'); }
      if (k === 'share') { const u = QR.appURL(), txt = 'Prova Valia, el prototip de turisme actiu del Vallès Oriental: ' + u;
        IOS.Alert.show({ title: 'Compartir Valia', msg: `<span style="display:block;width:180px;height:180px;margin:10px auto 8px" role="img" aria-label="Codi QR de l'adreça de Valia">${QR.svg(u, { size: 180, logo: ValiaAnim.logoSVG({ variant: 'color', size: 120 }) })}</span><span style="display:block;word-break:break-all" data-noi18n>${esc(u)}</span>`,
          buttons: [{ t: 'Tancar' }, { t: 'Compartir', style: 'pref', on: async () => { try { if (navigator.share) { await navigator.share({ title: 'Valia', text: txt, url: u }); return; } await navigator.clipboard.writeText(u); IOS.Toast.show('Enllaç copiat', 'copy'); } catch (er) { /* cancel·lat */ } } }] }); }
    });
  };
  S23.reappear = el => paintVals(el);
  function exportData() {
    const d = Store.cur();
    const out = { app: 'Valia', versio: VERSION, exportat: new Date().toISOString(), compte: Store.isGuest() ? 'convidat' : Store.email(), idioma: I18n.lang, unitats: I18n.units, preferencies: prefs, dades: d };
    const blob = new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' });
    QR.download(blob, 'valia-les-meves-dades.json');
    IOS.Toast.show('Dades descarregades', 'download');
  }

  /* ---------- pantalles de tria (llista amb marca, com a iOS) ---------- */
  const choice = (id, title, opts, cur, apply, foot) => {
    SC[id] = {
      title, tabbar: true, cls: 'grouped cfg5',
      render: () => `<div class="glist opt51" role="radiogroup" aria-label="${esc(title)}" style="margin-top:12px">${opts().map(o => `<button type="button" role="radio" aria-checked="${o[0] === cur() ? 'true' : 'false'}" data-o="${o[0]}"><span class="f1"><span class="bd" style="display:block" ${o[2] ? 'data-noi18n' : ''}>${esc(o[1])}</span>${o[3] ? `<span class="fn mut">${o[3]}</span>` : ''}</span><span class="ck">${ICN('check', 20)}</span></button>`).join('')}</div>${foot ? `<p class="gfoot">${foot}</p>` : ''}`,
      mount(el, p, pg) {
        el.addEventListener('click', e => {
          const b = e.target.closest('[data-o]'); if (!b) return;
          el.querySelectorAll('[data-o]').forEach(x => x.setAttribute('aria-checked', x === b ? 'true' : 'false'));
          apply(b.dataset.o, pg);
        });
      }
    };
  };
  choice(51, 'Idioma', () => I18n.LANGS.map(l => [l[0], l[1], 1, l[0] === 'ca' ? 'Català' : l[0] === 'es' ? 'Castellà' : l[0] === 'en' ? 'Anglès' : 'Francès']), () => I18n.lang, v => {
    if (v === I18n.lang) return; setTimeout(() => { I18n.setLang(v); relaunch(T('Idioma canviat'), 'globe'); }, 180);
  }, "Català per defecte. Els noms de lloc es mantenen en català.");
  choice(52, 'Aparença', () => [['light', 'Clar'], ['dark', 'Fosc'], ['auto', 'Automàtic', 0, 'Segueix el mode del mòbil']], getTh, v => {
    try { localStorage.setItem(TH, v); } catch (e) { /* res */ }
    const mq = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null, dark = v === 'dark' || (v === 'auto' && mq && mq.matches);
    IOS.app.classList.toggle('th-dark', !!dark);
    const m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute('content', dark ? '#0D1210' : '#F4F3EC');
    syncMap(); App.syncStatus && App.syncStatus();
  });
  choice(53, 'Unitats', () => [['km', 'Quilòmetres', 0, 'km'], ['mi', 'Milles', 0, 'mi']], () => I18n.units, v => {
    if (v === I18n.units) return; setTimeout(() => { I18n.setUnits(v); relaunch(T('Unitats canviades'), 'route'); }, 180);
  }, 'Distàncies de les rutes, del perfil i del mapa.');
  choice(54, 'Mida del text', () => DTS.map(x => [String(x[0]), x[1]]), () => String(IOS.settings.dt), v => { IOS.set('dt', +v); fitSoon(); }, "També es pot canviar a Accessibilitat.");
  choice(55, 'Estil del mapa', () => MAPS, () => prefs.map || 'auto', v => { prefs.map = v; savePrefs(); syncMap(); }, 'El mapa del prototip és il·lustratiu: encara no té capa topogràfica.');

  /* ---------- editar el perfil i canviar la contrasenya (comptes locals) ---------- */
  async function digest(pw, salt) {
    const txt = salt + ':' + pw;
    if (window.crypto && crypto.subtle) { const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt)); return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join(''); }
    let hh = 5381; for (const c of txt) hh = ((hh << 5) + hh + c.charCodeAt(0)) | 0; return 'd' + (hh >>> 0).toString(16);
  }
  const err = (el, m) => { const p = el.querySelector('.err51'); p.textContent = m ? T(m) : ''; return !m; };
  SC[56] = {
    title: 'Editar el perfil', short: 'Perfil', tabbar: true, cls: 'grouped cfg5',
    render: () => { const d = Store.cur(); return `<div class="px"><form class="form51" novalidate data-f><label>${'Nom'}<input type="text" name="nm" autocomplete="name" maxlength="40" value="${esc(d.name)}" data-noi18n></label><label>${'Correu electrònic'}<input type="email" value="${esc(Store.email() || '')}" disabled data-noi18n></label><p class="err51" role="alert"></p><button type="submit" class="btn">Desar els canvis</button></form><p class="fn mut" style="margin-top:12px">El correu identifica el compte en aquest dispositiu i no es pot canviar.</p></div>`; },
    mount(el, p, pg) {
      el.querySelector('[data-f]').addEventListener('submit', e => {
        e.preventDefault(); const v = el.querySelector('[name=nm]').value.trim();
        if (!err(el, v.length < 2 ? 'Escriu un nom de 2 lletres o més.' : '')) return;
        const d = Store.cur(); d.name = v; const u = Store.users()[Store.email()]; if (u) u.name = v; Store.save();
        IOS.Toast.show('Perfil desat', 'checkC'); pg.stack.pop();
      });
    }
  };
  SC[57] = {
    title: 'Canviar la contrasenya', short: 'Contrasenya', tabbar: true, cls: 'grouped cfg5',
    render: () => `<div class="px"><form class="form51" novalidate data-f><label>Contrasenya actual<input type="password" name="o" autocomplete="current-password"></label><label>Contrasenya nova (mínim 8 caràcters)<input type="password" name="n" autocomplete="new-password"></label><label>Repeteix la contrasenya nova<input type="password" name="r" autocomplete="new-password"></label><p class="err51" role="alert"></p><button type="submit" class="btn">Canviar la contrasenya</button></form><p class="fn mut" style="margin-top:12px">La contrasenya es desa resumida en aquest dispositiu. Prototip sense servidor.</p></div>`,
    mount(el, p, pg) {
      el.querySelector('[data-f]').addEventListener('submit', async e => {
        e.preventDefault(); const f = n => el.querySelector(`[name=${n}]`).value, em = Store.email();
        if (Store.isDemo(em)) { err(el, 'El compte de demostració no permet canviar la contrasenya.'); return; }
        const u = Store.users()[em]; if (!u) { err(el, 'Cal un compte'); return; }
        if (!f('o')) { err(el, 'Escriu la contrasenya actual.'); return; }
        if (await digest(f('o'), u.salt) !== u.hash) { err(el, 'La contrasenya actual no és correcta.'); return; }
        if (f('n').length < 8) { err(el, 'La contrasenya nova ha de tenir 8 caràcters o més.'); return; }
        if (f('n') !== f('r')) { err(el, 'Les contrasenyes no coincideixen.'); return; }
        u.salt = Math.random().toString(36).slice(2, 10); u.hash = await digest(f('n'), u.salt); Store.save();
        IOS.Toast.show('Contrasenya canviada', 'lock'); pg.stack.pop();
      });
    }
  };
  /* consentiments editables */
  SC[62] = {
    title: 'Consentiments', tabbar: true, cls: 'grouped cfg5',
    render: () => { const c = Store.cur().consents || {}; return `<div class="glist" style="margin-top:12px">${row('shield', 'g', "Estadístiques d'ús anònimes", { sw: !!c.stats, k: 'stats' })}${row('mail', 'b', 'Novetats per correu', { sw: !!c.news, k: 'news' })}${row('sparkle', '', 'Personalització amb IA', { sw: !!c.ai, k: 'ai' })}</div><p class="gfoot">Tot és opcional. En aquest prototip, res surt del teu dispositiu.</p>`; },
    mount(el) { el.addEventListener('toggle', e => { const k = e.target.dataset.k; if (!k) return; const d = Store.cur(); d.consents = Object.assign({}, d.consents, { [k]: !!e.detail }); Store.save(); }); }
  };

  /* ---------- Sobre Valia: condicions, privacitat i atribucions ---------- */
  const doc = (id, title, body) => { SC[id] = { title, tabbar: true, cls: 'grouped cfg5', render: () => `<div class="px about51"><dl>${body.map(b => `<dt>${b[0]}</dt><dd>${b[1]}</dd>`).join('')}</dl><p class="fn mut" style="margin-top:18px">Prototip d'un Treball de Recerca de Batxillerat. Textos legals definitius pendents de revisió.</p></div>` }; };
  doc(58, "Condicions d'ús", [
    ['Què és Valia', "Un prototip d'app de turisme actiu i sostenible al Vallès Oriental, fet per a un Treball de Recerca. No és un servei comercial."],
    ['Rutes i seguretat', "Les rutes i els consells són orientatius. Abans de sortir, comprova el temps, l'estat dels camins i les restriccions d'accés. En cas d'emergència, truca al 112."],
    ['Punts i recompenses', "Els punts d'energia i els codis de recompensa són d'exemple i no tenen valor real."],
    ['Contingut de la comunitat', 'Els comentaris i consells de la comunitat del prototip són il·lustratius.']
  ]);
  doc(59, 'Política de privacitat', [
    ['Quines dades', "Nom, correu, contrasenya resumida, rutes fetes, punts i preferències. No es grava el recorregut: només els check-ins."],
    ['On es desen', "Només en aquest dispositiu (emmagatzematge del navegador). No s'envien a cap servidor."],
    ['Ubicació', "Només si hi dones permís, per centrar el mapa i validar check-ins. Pots retirar-lo a la configuració del mòbil."],
    ['Els teus drets', "Pots descarregar les teves dades en JSON i esborrar el compte des de Configuració."]
  ]);
  doc(60, 'Atribucions dels mapes', [
    ['Mapa del prototip', "Mapa il·lustratiu de creació pròpia. No reprodueix cap cartografia oficial."],
    ['Fotografies', "Fotos reals de llocs del Vallès fetes per l'equip del projecte."],
    ['Tipografies i icones', "Fraunces (SIL Open Font License 1.1) i icones Lucide (llicència ISC)."]
  ]);

  /* ---------- tutorial amb la mascota ---------- */
  const TUT = [
    ['home', 'Inici', "El teu resum del dia: punts, ratxa, CO₂ estalviat i una proposta per sortir."],
    ['msg', 'Xat i Ruta a mida', "Pregunta'm el que vulguis o tria opcions i et preparo una ruta a mida."],
    ['compass', 'Explorar', 'Rutes reals del Vallès Oriental amb filtres, mapa i la comunitat de cada ruta.'],
    ['gift', 'Recompenses', "Fes check-ins, suma punts d'energia i canvia'ls al comerç local i en patrimoni."],
    ['user', 'Perfil', "El teu impacte, les estadístiques, els reptes de grup i la configuració."]
  ];
  SC[61] = {
    title: 'Tutorial', nav: false, tabbar: false, cls: 'dark', sb: 'light-always',
    render: () => `<div class="tut51" role="group" aria-roledescription="tutorial"><div class="tut-top"><div class="tut-dots" aria-hidden="true">${TUT.map((x, i) => `<i class="${i ? '' : 'on'}"></i>`).join('')}</div><button type="button" class="tut-skip" data-skip>Saltar el tutorial</button></div>
      <div class="tut-body"><div class="tut-mas" data-mas></div><div class="tut-ic" data-ic>${ICN(TUT[0][0], 26, '#3DDC97')}</div><h2 data-t>${TUT[0][1]}</h2><p data-d>${TUT[0][2]}</p></div>
      <button type="button" class="btn" data-next>Següent</button></div>`,
    mount(el, p, pg) {
      let i = 0; const m = Mascot.create(el.querySelector('[data-mas]'), { size: 150, state: 'saludant', label: 'Mascota de Valia' }); pg.cleanups && pg.cleanups.push(() => m.destroy && m.destroy());
      const go = async n => {
        if (n >= TUT.length) { IOS.Modal.dismiss(); IOS.Toast.show("Som-hi! Bona ruta", 'sprout'); return; }
        i = n; const box = el.querySelector('.tut-body');
        if (!IOS.rm()) await IOS.anim(box, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-14px)' }], IOS.fadeSp(140));
        el.querySelector('[data-ic]').innerHTML = ICN(TUT[i][0], 26, '#3DDC97'); el.querySelector('[data-t]').textContent = TUT[i][1]; el.querySelector('[data-d]').textContent = TUT[i][2];
        el.querySelectorAll('.tut-dots i').forEach((d, k) => d.classList.toggle('on', k === i));
        el.querySelector('[data-next]').textContent = i === TUT.length - 1 ? 'Comencem' : 'Següent';
        m.set(i === TUT.length - 1 ? 'celebrant' : (i % 2 ? 'buscant' : 'saludant'), { restart: true });
        IOS.anim(box, [{ opacity: 0, transform: 'translateX(14px)' }, { opacity: 1, transform: 'none' }], IOS.rm() ? IOS.fadeSp(160) : IOS.S.soft);
        fitSoon();
      };
      el.querySelector('[data-next]').addEventListener('click', () => go(i + 1));
      el.querySelector('[data-skip]').addEventListener('click', () => IOS.Modal.dismiss());
    }
  };

  /* ---------- Accessibilitat: «Contrast alt» funciona i es desa ---------- */
  const A = SC[24];
  if (A) {
    const ar = A.render, am = A.mount;
    A.render = (p, pg) => ar(p, pg).replace(/<button type="button" class="sw" role="switch" aria-checked="false" aria-label="Contrast alt"><\/button>/, `<button type="button" class="sw" role="switch" aria-checked="${prefs.hc ? 'true' : 'false'}" aria-label="Contrast alt" data-hc></button>`);
    A.mount = (el, p, pg) => { am && am(el, p, pg); const s = el.querySelector('[data-hc]'); if (s) s.addEventListener('toggle', e => { prefs.hc = !!e.detail; savePrefs(); IOS.app.classList.toggle('hc51', prefs.hc); }); };
  }

  window.V51 = { prefs, fitTitles, fitLines, relaunch, VERSION };
})();

/* ---- loading.js ---- */
/* ===================== Pantalla de càrrega (1) i fluxos d'entrada =====================
   Mateixa animació que la versió corregida (v5): la fulla vola, la persona camina i neix el globus.
   En acabar, la figura vola fins al xat i esdevé la mascota que saluda (transició compartida). */
const Flow = (function () {
  const CFG = { rig: ValiaRig.make({ N_REV: 7 }), K: 1.25, OY: 314, OX: 196.5, name: 'Valia', font: "'GV Fraunces', Georgia, serif", size: 44, weight: 600, ls: -0.3, nameGap: 76, label: 'Valia s\'està carregant' };
  const LOAD_AT = 2.6, MAX_T = 3.8;
  let scene = null, raf = 0, t0 = 0, exitAt = 0, exiting = false, dest = 'main', seekT = null, gen = 0;
  const $ = IOS.$;

  function boot(o) {
    o = o || {}; dest = o.first ? 'onb' : 'main'; exiting = false; gen++; seekT = null;
    cancelAnimationFrame(raf); IOS.Modal.clearAll(); IOS.Keyboard.hide();
    const sc = IOS.scenes.load;
    sc.innerHTML = `<div class="ld-bg bg-carrega"></div><div class="ld-veil"></div><div class="ld-mist"></div><svg class="ld-svg" viewBox="0 0 393 852" width="393" height="852" role="img" aria-label="${CFG.label}"></svg><button type="button" class="ld-skip" aria-label="Ometre l'animació">Omet</button>`;
    scene = new ValiaAnim.Scene(sc.querySelector('svg'), CFG);
    sc.querySelector('.ld-skip').addEventListener('click', () => { if (!exiting) exit(); });
    // la destinació es prepara a sota
    if (dest === 'main') { App.st.chat = []; App.startMain({ noGreet: true, guest: !!o.guest }); }
    else App.startOnboarding(2);
    IOS.scenes.main.hidden = true; IOS.scenes.onb.hidden = true; sc.hidden = false; sc.style.opacity = 1; sc.style.background = '';
    App.syncStatus();
    exitAt = computeExit();
    t0 = performance.now(); raf = requestAnimationFrame(frame);
  }
  function computeExit() {
    if (IOS.rm()) return 1.4;
    const R = CFG.rig, p0 = Math.floor(R.state(LOAD_AT).ph); let t = LOAD_AT;
    while (Math.floor(R.state(t).ph) === p0 && t < MAX_T) t += 0.002;
    return Math.min(t, MAX_T - 0.3);
  }
  /* si es navega a una altra pantalla mentre carrega, l'animació s'atura del tot */
  function cancel() { gen++; cancelAnimationFrame(raf); exiting = true; }
  function frame(now) {
    const t = seekT != null ? seekT : (now - t0) / 1000;
    if (!exiting) scene.render(t, IOS.rm());
    if (!exiting && t >= exitAt) exit();
    if (!exiting) raf = requestAnimationFrame(frame);
  }
  /* sortida */
  async function exit() {
    exiting = true; cancelAnimationFrame(raf);
    const my = gen, sc = IOS.scenes.load, target = IOS.scenes[dest];
    target.hidden = false; target.style.opacity = 0;
    if (dest === 'onb' || IOS.rm()) {
      await Promise.all([IOS.fade(target, 0, 1, 300), IOS.fade(sc, 1, 0, 300)]);
      if (my !== gen) return;
      sc.hidden = true; target.style.opacity = ''; App.showScene(dest);
      if (dest === 'main') { const pg = App.stack('xat').top; ChatAPI.greet(pg.chat); }
      return;
    }
    // vol de la figura fins a la mascota del xat
    const pg = App.stack('xat').top, C = pg.chat, gm = C.gm;
    const svg = sc.querySelector('svg'), fl = svg.querySelector('#vFlight'), fig = svg.querySelector('#vFig');
    const g = scene.g, tExit = (performance.now() - t0) / 1000, p = scene.pose(tExit), Xh = p.st.X;
    const P = [g.X0 + Xh * g.K, g.GROUND];
    gm.el.style.visibility = 'hidden';
    // el xat apareix per sota mentre el fons del bosc s'esvaeix; la bombolla i els suggeriments esperen la salutació
    sc.style.background = 'transparent';
    const gb = C.box.querySelector('[data-gb]'), sugs = [...C.box.querySelectorAll('.sug')];
    [gb, ...sugs].forEach(e => { if (e) e.style.opacity = 0; });
    const r = IOS.rectIn(gm.svg), ppu = r.h / 110, T = [r.x + (34 / 96) * r.w, r.y + (104 / 110) * r.h];
    const s1 = ppu / g.K;
    fig.removeAttribute('filter'); fig.style.transition = 'color .45s ease'; fig.style.color = '#0E8257';
    ['.ld-bg', '.ld-veil', '.ld-mist'].forEach(s => IOS.fade(sc.querySelector(s), 1, 0, 380));
    ['#vGlobe', '#vHalo', '#vWord'].forEach(s => { const e = svg.querySelector(s); if (e) IOS.fade(e, parseFloat(e.getAttribute('opacity') || 1), 0, 300); });
    sc.querySelector('.ld-skip').style.display = 'none';
    IOS.fade(target, 0, 1, 380);
    const tStart = performance.now(), sp = Spring.fn(0.62, 0.82, 0), D = 0.45;
    let wt = 0, lt = 0;
    await new Promise(res => {
      const step = now => {
        const tt = (now - tStart) / 1000, u = tt >= D ? 1 : 1 - sp(tt);
        wt += (tt - lt) * 0.9 * Math.max(0, 1 - u * 1.15); lt = tt;   // continua caminant i s'atura en arribar
        scene.pose(tExit + wt);
        const s = 1 + (s1 - 1) * u, x = P[0] + (T[0] - P[0]) * u, y = P[1] + (T[1] - P[1]) * u;
        fl.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${s.toFixed(4)}) translate(${-P[0]} ${-P[1]})`);
        if (my !== gen) res(); else if (tt < D) requestAnimationFrame(step); else res();
      };
      requestAnimationFrame(step);
    });
    if (my !== gen) return;
    // la mascota del xat pren el relleu des de la mateixa postura
    const last = scene.pose(tExit + wt), fromPose = shiftPose(last, -last.st.X);
    sc.hidden = true; sc.style.opacity = 1; target.style.opacity = ''; gm.el.style.visibility = '';
    App.showScene('main');
    gm.set('repos', { instant: true }); gm.set('saludant', { restart: true, fromPose, blend: 0.3 });
    const b = gb;
    if (b) IOS.anim(b, [{ opacity: 0, transform: 'scale(.6)', transformOrigin: '0% 100%' }, { opacity: 1, transform: 'scale(1)', transformOrigin: '0% 100%' }], Spring.spring(0.42, 0.68), { delay: 300 });
    IOS.stagger(C.box.querySelectorAll('.sug'), { delay: 450 });
    MascotUI.announce('Assistent: Què et ve de gust fer avui?');
  }
  function shiftPose(p, dx) {
    const o = Mascot.mix(p, p, 0); const sx = a => { a[0] += dx; };
    [o.H, o.lF.K, o.lF.P, o.lN.K, o.lN.P, o.SN, o.SF, o.armN.E, o.armN.P, o.armF.E, o.armF.P, o.tip, o.top].forEach(sx); o.head = 0; o.fx = {}; return o;
  }
  /* altres transicions d'entrada */
  async function toMain(o) {
    o = o || {}; IOS.Keyboard.hide();
    const from = IOS.scenes[App.scene];
    await IOS.Modal.dismissAll();
    App.st.chat = [];
    App.startMain({ guest: !!o.guest, keep: true });
    const main = IOS.scenes.main; main.hidden = false;
    if (from && from !== main) { from.hidden = false; from.style.zIndex = 3; }
    if (IOS.rm()) await Promise.all([IOS.fade(main, 0, 1, 260), from ? IOS.fade(from, 1, 0, 260) : 0]);
    else await Promise.all([IOS.anim(main, [{ opacity: 0, transform: 'scale(.94)' }, { opacity: 1, transform: 'none' }], Spring.spring(0.5, 0.9)), from ? IOS.anim(from, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(1.04)' }], Spring.spring(0.4, 1)) : 0]);
    if (from && from !== main) { from.hidden = true; from.style.zIndex = ''; from.style.opacity = ''; from.style.transform = ''; }
    main.style.opacity = ''; main.style.transform = '';
    App.showScene('main');
  }
  async function afterSignup() { IOS.Keyboard.hide(); await IOS.Modal.dismissAll(); App.onb.push(36); }
  function toOnboarding() { App.startOnboarding(2); setTimeout(() => IOS.Modal.present(3, {}, { kind: 'dark' }), 120); }
  function seek(t) { seekT = t; if (scene) { if (!exiting) scene.render(t, IOS.rm()); } }
  return { boot, cancel, toMain, afterSignup, toOnboarding, exit, seek, get scene() { return scene; }, cfg: CFG };
})();

/* ---- polish.js ---- */
/* ===================== Valia · capa visual 2.0 (comportament només visual) =====================
   - Colors de categoria, dificultat i estat a les etiquetes (afegeix atributs, no canvia el text)
   - Entrada suau de les fotos quan acaben de carregar
   - Xifres que compten fins al valor final (el text final és idèntic)
   - Microinteraccions: xips, cors i desar
   - Celebracions amb confeti en fites (canvi de punts, ruta desada, compte creat, check-in)
   - Mode «?fotos»: mostra el nom de fitxer i la proporció de cada forat de foto
   Tot respecta «Reduir moviment» i només anima transform i opacity (150–450 ms). */
const Polish = (function () {
  let app = null;
  const rm = () => IOS.rm();
  const CAT = { 'Natura': 'nat', 'Cultural': 'cul', 'Cultura': 'cul', 'Història': 'his', 'Patrimoni': 'his', 'BCIN': 'his', 'Gastronomia': 'gas', 'Circular': 'act' };
  const DIF = { 'Fàcil': '1', 'Moderada': '2', 'Difícil': '3' };

  /* ---------- etiquetes ---------- */
  function decorate(root) {
    root.querySelectorAll('.tag:not([data-cat]):not([data-dif])').forEach(t => {
      const tx = t.textContent.trim();
      if (CAT[tx]) t.dataset.cat = CAT[tx]; else if (DIF[tx]) t.dataset.dif = DIF[tx];
    });
    root.querySelectorAll('.stat:not([data-dif])').forEach(s => { const b = s.querySelector('b'); if (b && DIF[b.textContent.trim()]) s.dataset.dif = DIF[b.textContent.trim()]; });
  }

  /* ---------- fotos: la lluentor es fon quan la imatge ja és a punt ---------- */
  function photos() {
    // CSS: la miniatura borrosa (::before) es fon quan la foto definitiva ja ha carregat
    const st = document.createElement('style'); document.head.appendChild(st);
    st.textContent = Object.keys(PH).map(k => `.ios.ld-${k} .bg-${k}::before`).join(',') + '{opacity:0}';
  }
  /* càrrega a demanda: només es baixa una foto quan apareix a la pantalla per primer cop */
  const asked = {}, byUrl = {};
  Object.entries(PH).forEach(([k, url]) => { (byUrl[url] = byUrl[url] || []).push(k); });
  function request(root) {
    const els = root.querySelectorAll ? [root, ...root.querySelectorAll('[class*=" bg-"],[class^="bg-"]')] : [];
    els.forEach(el => {
      if (!el.classList) return;
      el.classList.forEach(c => {
        if (!c.startsWith('bg-')) return; const k = c.slice(3), url = PH[k]; if (!url || asked[url]) return; asked[url] = 1;
        const im = new Image(); im.decoding = 'async';
        im.onload = im.onerror = () => app.classList.add(...byUrl[url].map(x => 'ld-' + x));
        im.src = url;
      });
    });
  }

  /* ---------- xifres que compten (només si el text és un nombre enter amb punts de milers) ---------- */
  const NUMRE = /^\d{1,3}(\.\d{3})*$/;
  function countUp(el) {
    if (!el || rm() || el._counting) return;
    const final = el.textContent.trim(); if (!NUMRE.test(final)) return;
    const to = +final.replace(/\./g, ''); if (to < 10) return;
    el._counting = true; const t0 = performance.now(), D = 450; let last = null;
    const f = n => n.toLocaleString('ca-ES').replace(/\s/g, '.');
    const fmtN = n => (typeof fmt === 'function' ? fmt(n) : f(n));
    const step = now => {
      if (last !== null && el.textContent !== last) { el._counting = false; return; }   // algú l'ha actualitzat: no el toquem
      const p = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - p, 3);
      last = p < 1 ? fmtN(Math.round(to * e)) : final; el.textContent = last;
      if (p < 1) requestAnimationFrame(step); else el._counting = false;
    };
    requestAnimationFrame(step);
  }
  /* portada de la fitxa: s'estira en tirar cap avall i es desplaça més lenta en pujar (paral·laxi) */
  function parallax(pg) {
    if (pg._plx) return; const sc = pg.el.querySelector(':scope > .scroll'), hero = pg.el.querySelector('.dhero'); if (!sc || !hero) return;
    pg._plx = true; let rq = 0;
    const upd = () => { rq = 0; if (rm()) { hero.style.transform = ''; return; } const y = sc.scrollTop, hh = hero.offsetHeight || 380;
      hero.style.transform = y < 0 ? `scale(${(1 + -y / hh).toFixed(4)})` : (y < hh ? `translateY(${(y * 0.35).toFixed(1)}px)` : ''); };
    sc.addEventListener('scroll', () => { if (!rq) rq = requestAnimationFrame(upd); }, { passive: true });
  }
  /* «Canvi fet»: fons ambiental amb la foto de la recompensa desenfocada */
  function ambient(pg) {
    if (pg.el.querySelector(':scope > .ambient')) return;
    let k = null;
    if (pg.id === 33) k = 'recompensa-' + (pg.params.id || 'bus');
    if (!k || !PH[k]) return;
    const d = document.createElement('div'); d.className = 'ambient bg-' + k; d.setAttribute('aria-hidden', 'true'); pg.el.prepend(d); request(d);
  }
  function onPage(pg) {
    if (!pg || !pg.el) return;
    if (pg.el.classList.contains('detail') && pg.el.querySelector('.dhero')) parallax(pg);
    if (pg.id === 33) ambient(pg);
    setTimeout(() => pg.el.querySelectorAll('[data-bal],[data-hbal],[data-pts]').forEach(countUp), 40);
  }

  /* ---------- microinteraccions ---------- */
  const pop = (el, from) => { if (!el || rm()) return; IOS.anim(el, [{ transform: `scale(${from || 0.9})` }, { transform: 'scale(1)' }], Spring.spring(0.3, 0.55)); };
  function burst(x, y, o) {   // petita explosió de punts (cors, desar, check-in)
    if (rm()) return; o = o || {};
    const fx = layer(), n = o.n || 8, cols = o.cols || ['#00A86B', '#16C083', '#5FD3A2'];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + Math.random() * 0.4, r = (o.r || 26) + Math.random() * 10, d = document.createElement('i');
      d.className = 'c'; d.style.background = cols[i % cols.length]; d.style.width = d.style.height = (o.s || 6) + 'px';
      fx.appendChild(d);
      d.animate([{ transform: `translate(${x}px,${y}px) scale(.4)`, opacity: 1 }, { transform: `translate(${x + Math.cos(a) * r}px,${y + Math.sin(a) * r}px) scale(1)`, opacity: 0 }], { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' }).finished.then(() => d.remove()).catch(() => d.remove());
    }
  }
  let fxEl = null;
  function layer() { if (!fxEl || !fxEl.isConnected) { fxEl = document.createElement('div'); fxEl.className = 'vfx'; fxEl.setAttribute('aria-hidden', 'true'); app.appendChild(fxEl); } return fxEl; }
  /* confeti: cada peça dura 300–450 ms, amb sortides esglaonades (fins a 250 ms) */
  function confetti(x, y, o) {
    if (rm()) return; o = o || {};
    const fx = layer(), n = o.n || 46, cols = ['#00A86B', '#16C083', '#5FD3A2', '#3BA0FF', '#0A63D6', '#FFC94D', '#FF8A4C', '#F4B400'];
    for (let i = 0; i < n; i++) {
      const d = document.createElement('i'); d.className = ['', 'c', 's'][i % 3]; d.style.background = cols[i % cols.length]; fx.appendChild(d);
      const a = -Math.PI / 2 + (Math.random() - 0.5) * (o.spread || 2.4), v = (o.power || 150) * (0.55 + Math.random() * 0.6);
      const dx = Math.cos(a) * v, dy = Math.sin(a) * v, rot = (Math.random() - 0.5) * 540, dur = 300 + Math.random() * 150;
      d.animate([
        { transform: `translate(${x}px,${y}px) rotate(0deg) scale(.6)`, opacity: 1 },
        { transform: `translate(${x + dx}px,${y + dy}px) rotate(${rot / 2}deg) scale(1)`, opacity: 1, offset: 0.7 },
        { transform: `translate(${x + dx * 1.15}px,${y + dy + 60}px) rotate(${rot}deg) scale(.9)`, opacity: 0 }
      ], { duration: dur, delay: Math.random() * 250, easing: 'cubic-bezier(.15,.7,.3,1)', fill: 'both' }).finished.then(() => d.remove()).catch(() => d.remove());
    }
  }
  const center = el => { const r = IOS.rectIn(el); return [r.x + r.w / 2, r.y + r.h / 2]; };

  /* ---------- observador: decora el que entra i dispara celebracions ---------- */
  const done = new WeakSet();
  function watch() {
    new MutationObserver(ms => {
      for (const m of ms) for (const n of m.addedNodes) {
        if (n.nodeType !== 1) continue;
        decorate(n.parentNode || n); request(n);
        const ok = n.matches && n.matches('.okring') ? n : n.querySelector && n.querySelector('.okring');
        if (ok && !done.has(ok) && (done.add(ok), true)) setTimeout(() => { if (ok.isConnected) { const [x, y] = center(ok); confetti(x, y, { n: 54, power: 170 }); } }, 260);
        if (n.classList && n.classList.contains('toast') && !done.has(n)) { done.add(n);
          const tx = n.textContent;
          if (/\+\d+ punts|Compte creat|Ruta desada|Canvi fet/.test(tx)) setTimeout(() => { if (n.isConnected) { const [x, y] = center(n); confetti(x, y + 12, { n: 28, power: 110, spread: 2.0 }); } }, 120);
        }
      }
    }).observe(app, { childList: true, subtree: true });
    // xips, cors i desar
    app.addEventListener('click', e => {
      const c = e.target.closest('.chip'); if (c) requestAnimationFrame(() => pop(c.firstElementChild, 0.9));
      const f = e.target.closest('[data-fav],[data-save]');
      if (f) requestAnimationFrame(() => requestAnimationFrame(() => { if (f.getAttribute('aria-pressed') === 'true') { const [x, y] = center(f); burst(x, y, { n: 8, cols: ['#FF5A6E', '#FF8A4C', '#00A86B'] }); } }));
      const sw = e.target.closest('.sw'); if (sw) requestAnimationFrame(() => { if (sw.getAttribute('aria-checked') === 'true') pop(sw, 0.94); });
    }, true);
  }

  function init(el) {
    app = el;
    if (/[?&]fotos\b/.test(location.search)) app.classList.add('slots');
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) IOS.set('rm', true);
    photos(); decorate(app); request(app); watch();
    App.hook(pg => onPage(pg));
  }
  return { init, confetti, burst, countUp };
})();

/* ---- main.js ---- */
/* ===================== Arrencada de la PWA =====================
   Mòbil (amplada < 700 px): l'app ocupa tota la pantalla. Es manté l'amplada lògica de 393 pt i s'escala
   a l'amplada real; l'altura lògica s'adapta a la pantalla i al teclat del sistema (visualViewport).
   Ordinador: marc d'iPhone 15 (393 × 852) escalat a l'altura de la finestra. */
(function () {
  const root = document.documentElement, phone = document.getElementById('phone'), app = document.getElementById('app');
  const device = Math.min(window.innerWidth, screen.width || 9999) < 700;
  root.classList.add(device ? 'device' : 'framed');
  IOS.init(app);
  Polish.init(app);   // capa visual 2.0
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) IOS.set('rm', true);

  /* zones segures reals (notch, illa dinàmica, indicador d'inici) mesurades en px CSS */
  const probe = document.createElement('div');
  probe.style.cssText = 'position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)';
  document.body.appendChild(probe);
  const insets = () => { const cs = getComputedStyle(probe); return { t: parseFloat(cs.paddingTop) || 0, b: parseFloat(cs.paddingBottom) || 0 }; };
  const isField = el => el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && !['checkbox', 'radio', 'button', 'file'].includes(el.type);

  let lastKey = '';
  function fit() {
    if (!device) {
      const fs = Math.min(1, (window.innerHeight - 32) / 872, (window.innerWidth - 32) / 413);
      root.style.setProperty('--fs', fs.toFixed(4));
      IOS.setH(852); IOS.setSafeT(59);
      return;
    }
    const vv = window.visualViewport, vw = document.documentElement.clientWidth || window.innerWidth;
    const fullH = window.innerHeight, visH = vv ? vv.height : fullH;
    const kbd = isField(document.activeElement) && visH < fullH - 120;   // teclat del sistema obert
    const s = vw / IOS.W, h = (kbd ? visH : fullH) / s, top = kbd && vv ? vv.offsetTop : 0;
    const key = [s.toFixed(4), h.toFixed(1), top, kbd].join('|'); if (key === lastKey) return; lastKey = key;
    const ins = insets(), st = Math.max(ins.t, 8) / s, sb = Math.max(ins.b, 6) / s;
    phone.style.width = IOS.W + 'px'; phone.style.height = h + 'px';
    phone.style.transform = `translateY(${top}px) scale(${s})`;
    app.style.setProperty('--safe-t', st.toFixed(1) + 'px');
    app.style.setProperty('--safe-b', sb.toFixed(1) + 'px');
    // --tab-h es calcula al CSS a partir de --safe-b (barra de pestanyes flotant)
    app.style.setProperty('--H', h.toFixed(1) + 'px'); app.style.setProperty('--s', s.toFixed(4));
    app.classList.toggle('kbd-on', kbd);
    IOS.setH(h); IOS.setSafeT(st);
    IOS.Modal.refit();
  }
  let rq = 0; const sched = () => { cancelAnimationFrame(rq); rq = requestAnimationFrame(fit); };
  fit();
  window.addEventListener('resize', sched);
  window.addEventListener('orientationchange', () => setTimeout(fit, 250));
  if (window.visualViewport) { visualViewport.addEventListener('resize', sched); visualViewport.addEventListener('scroll', sched); }
  document.addEventListener('focusin', () => setTimeout(fit, 60));
  document.addEventListener('focusout', () => setTimeout(fit, 120));
  // iOS: evita que la pàgina es desplaci darrere l'app quan s'obre el teclat
  window.addEventListener('scroll', () => { if (window.scrollY && !app.classList.contains('kbd-on')) window.scrollTo(0, 0); });

  /* ordinador: codi QR de l'adreça actual per obrir l'app al mòbil, amb descàrrega en PNG (1200 px) i SVG */
  if (!device) {
    const side = document.getElementById('dside'), u = QR.appURL(), logo = ValiaAnim.logoSVG({ variant: 'color', size: 120 });
    side.insertAdjacentHTML('beforeend', `<div class="dqr"><div class="dqr-c" role="img" aria-label="Codi QR per obrir Valia al mòbil">${QR.svg(u, { size: 168, logo })}</div><div><p class="dn" style="margin:0 0 8px"><b>Escaneja'l amb la càmera</b> per obrir Valia al mòbil.</p><p class="dn dqr-u">${esc(u)}</p><div class="dqr-b"><button type="button" data-dl="png">Descarregar PNG</button><button type="button" data-dl="svg">Descarregar SVG</button></div></div></div>`);
    side.addEventListener('click', async e => {
      const b = e.target.closest('[data-dl]'); if (!b) return;
      if (b.dataset.dl === 'svg') QR.download(new Blob([QR.svg(u, { size: 1200, logo })], { type: 'image/svg+xml' }), 'valia-qr.svg');
      else QR.download(await QR.png(u, { size: 1200, logo }), 'valia-qr.png');
    });
  }

  /* sessió desada → carrega i entra; primera vegada → carrega i pantalla d'accés */
  Flow.boot(Store.session() ? { guest: Store.isGuest() } : { first: true });

  /* funcionament sense connexió */
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { /* sense service worker */ }));
  }
  const net = () => { App.st.offline = !navigator.onLine; App.syncOffline && App.syncOffline(); };
  window.addEventListener('online', net); window.addEventListener('offline', net);
})();
