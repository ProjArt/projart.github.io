load_search_index({"pages":[{"title":"ProjArt - TGV","text":"Table des mati\u00e8res Commencer #Commencer Voici la documentation pour communiquer avec le back-end de l\u2019application ProjArt - TGV Le back-end utilise le framework Laravel et respecte le mieux possible les conventions d\u2019une REST API L\u2019url de base est https:\/\/projart-tgv.pingouin.heig-vd.ch\/api Pour toutes les requ\u00eates, ajouter le header { &quot;Accept&quot; : &quot;application\/json&quot; }","tags":"","url":"index.html"},{"title":"Inscription","text":"Table des mati\u00e8res Requ\u00eate Corps R\u00e9ponse Erreurs #Requ\u00eate POST \/register #Corps { \"username\": \"XXXXX\", \"password\": \"XXXXX\" } #R\u00e9ponse { \"success\": true, \"message\": \"Register validated\", \"data\": { \"access_token\": \"XXXXXX\", \"token_type\": \"Bearer\" } } #Erreurs 422 : Unprocessable Entity { \"success\": false, \"message\": \"The XXXX field is required.\", \"data\" : [] }","tags":"","url":"Authentification\/Inscription.html"},{"title":"Connexion","text":"Table des mati\u00e8res Requ\u00eate Corps R\u00e9ponse Erreurs #Requ\u00eate POST \/login #Corps { \"username\": \"XXXXX\", \"password\": \"XXXXX\" } #R\u00e9ponse { \"success\": true, \"message\":\"Login validated\", \"data\": { \"access_token\": \"XXXXX\", \"token_type\": \"Bearer\" } } #Erreurs 401 : Pas autoris\u00e9 { \"success\": false, \"message\": \"Invalid login details\", \"data\" : [] }","tags":"","url":"Authentification\/Connexion.html"},{"title":"D\u00e9connexion","text":"Table des mati\u00e8res Requ\u00eate R\u00e9ponse Erreurs #Requ\u00eate GET \/logout #R\u00e9ponse { \"success\": true, \"message\":\"Logout succeed\", \"data\": { } } #Erreurs 401 : Pas autoris\u00e9 { \"success\": false, \"message\": \"Unauthorized\", \"data\" : [] }","tags":"","url":"Authentification\/Deconnexion.html"},{"title":"Obtenir Utilisateur","text":"Table des mati\u00e8res Requ\u00eate R\u00e9ponse Erreurs #Requ\u00eate GET \/me #R\u00e9ponse { \"success\":true, \"message\":\"User found\", \"data\":{ \"user\": { \"id\": 1 \"username\": \"XXXXX\", \"created_at\": \"2022-05-22T15:10:33.000000Z\", \"updated_at\": \"2022-05-22T15:10:33.000000Z\", } } } #Erreurs 401 : Pas authentifier { \"success\": false, \"message\": \"Unauthenticated\", \"data\" : [] }","tags":"","url":"Authentification\/Obtenir_Utilisateur.html"}]});