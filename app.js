var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/v1/browse/categories', function(request, response) {
    response.send(JSON.stringify({ categories: { items: [{ id: "topstories", name: "Top Stories" }, { id: "dailyminutes", name: "Daily Minutes" }, { id: "trending", name: "Trending" }] } }))
})

app.get('/v1/browse/categories/:categoryid', function(request, response) {
    response.send(JSON.stringify({ categories: { items: ["sports", "business", "daily minutes"] } }))
})

app.get('/v1/browse/categories/:categoryid/playlists', function(request, response) {
    if (request.params.categoryid === "dailyminutes") {
        response.send(JSON.stringify({
            playlists:[{
                    "id": "dwd123",
                    "title": "Sports in 1 Minute",
                    "media": "http://via.placeholder.com/150x150",
                    "articles": [{
                        "headline": "This is a sample headline",
                        "abstract": "This is an abstract",
                        "publisher": "NY Times",
                        "media": "http://via.placeholder.com/150x150",
                        "url": "http://www.google.com"
                    }]
                },
                {
                    "id": "dwd120",
                    "title": "Daily stocks to buy",
                    "media": "http://via.placeholder.com/150x150",
                    "articles": [{
                        "headline": "This is a sample stock headline",
                        "abstract": "This is an stock headline",
                        "publisher": "NY Times",
                        "media": "http://via.placeholder.com/150x150",
                        "url": "http://www.google.com"
                    }]
                }
            ]

        }))
    } else if (request.params.categoryid === "topstories") {
        response.send(JSON.stringify({
            "playlists": [{
                "id": "d2d123",
                "title": "Adventures of Trump",
                "media": "http://via.placeholder.com/150x150",
                "articles": [{
                    "headline": "This is a trump headline",
                    "abstract": "This is an trumpabstract",
                    "publisher": "NY Times",
                    "media": "http://via.placeholder.com/150x150",
                    "url": "http://www.google.com"
                }]
            }]

        }))
    } else if (request.params.categoryid === "trending") {
        response.send(JSON.stringify({
            "playlists": [{
                "id": "d2d123",
                "title": "Elon Musk is trending",
                "media": "http://via.placeholder.com/150x150",
                "articles": [{
                    "headline": "This is a musk headline",
                    "abstract": "This is an musk abstract",
                    "publisher": "CNN",
                    "media": "http://via.placeholder.com/150x150",
                    "url": "http://www.google.com"
                }]
            }, {

                "id": "d2d124",
                "title": "Someone else is trending",
                "media": "http://via.placeholder.com/150x150",
                "articles": [{
                    "headline": "This is a musk headline",
                    "abstract": "This is an musk abstract",
                    "publisher": "NY Times",
                    "media": "http://via.placeholder.com/150x150",
                    "url": "http://www.google.com"
                }]
            
            }]

        }))
    }

    // response.send(JSON.stringify({categories:{items:["sports", "business", "daily minutes"]}}))
})




app.listen(app.get('port'), function() {
    console.log("Newseon API is running at localhost:" + app.get('port'))
})