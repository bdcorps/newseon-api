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
            playlists: [{
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
                "id": "d2d122",
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
})

app.get('/v1/browse/playlists/:playlistid/tracks', function(request, response) {
    if (request.params.playlistid === "d2d123") {
        response.send(JSON.stringify({
            "title": "Elon Musk is trending",
            "media": "http://via.placeholder.com/350x350",
            "articles": [{
                "id": "article_0",
                "headline": "sukh",
                "abstract": "This is an abstract",
                "publisher": "NY Times",
                "media": "http://via.placeholder.com/100x100",
                "url": "http://www.google.com"
            }]
        }))
    } else if (request.params.playlistid === "d2d124") {
        response.send(JSON.stringify({
            "title": "Someone else is trending",
            "media": "http://via.placeholder.com/350x350",
            "articles": [
                {
                    "order": 0,
                    "id": "a5eb5246017772398285696db94cedb1",
                    "headline": "The Latest: Relatives paint inconsistent picture of gunman",
                    "abstract": "The Latest on the final report into the Oct. 1 mass shooting in Las Vegas that killed 58 people (all times local): 10:05 a.m.",
                    "publisher": "Fox News",
                    "media": "http://a57.foxnews.com/images.foxnews.com/content/fox-news/us/2018/08/03/latest-brother-vegas-shooter-says-was-delusional/_jcr_content/par/featured-media/media-0.img.png/0/0/1533319090154.png?ve=1",
                    "backend": "https://newseon-backend-api.herokuapp.com/tracks/5b69021044ea3b11a1e1d296"
                },
                {
                    "order": 1,
                    "id": "5fd26a045b1520432e447125feb14ef1",
                    "headline": "Northern California wildfire created destructive tornado",
                    "abstract": "Get breaking national and world news, broadcast video coverage, and exclusive interviews. Find the top news online at ABC news.",
                    "publisher": "ABC News",
                    "media": "https://s.abcnews.com/images/US/WireAP_76a73daf54124ac5b05307bbd15b404e_16x9_992.jpg",
                    "backend": "https://newseon-backend-api.herokuapp.com/tracks/5b69021044ea3b11a1e1d295"
                },
                {
                    "order": 2,
                    "id": "bb2e08eb19db97469ab593ce4b454755",
                    "headline": "Iraq War veteran's wife deported to Mexico after wanting Trump to intervene",
                    "abstract": "Alejandra Juarez, 39, who had been living in Davenport, Florida, had an emotional goodbye with her family Friday, her attorney said.",
                    "publisher": "NBC News",
                    "media": "https://media2.s-nbcnews.com/j/MSNBC/Components/Video/201808/f_tov_juarez_180801_wip.1200;630;7;70;5.jpg",
                    "backend": "https://newseon-backend-api.herokuapp.com/tracks/5b69021144ea3b11a1e1d29d"
                }
                
            ]
        }))
    } 
})

// {
//     "_id": {
//         "$oid": "5b69021144ea3b11a1e1d2b8"
//     },
//     "uid": "a5eb5246017772398285696db94cedb1",
//     "headline": "The Latest: Relatives paint inconsistent picture of gunman",
//     "abstract": "The Latest on the final report into the Oct. 1 mass shooting in Las Vegas that killed 58 people (all times local): 10:05 a.m.",
//     "author": "Fox News",
//     "media": "http://a57.foxnews.com/images.foxnews.com/content/fox-news/us/2018/08/03/latest-brother-vegas-shooter-says-was-delusional/_jcr_content/par/featured-media/media-0.img.png/0/0/1533319090154.png?ve=1",
//     "publishedOn": {
//         "$date": "2018-08-03T20:48:45.000Z"
//     },
//     "audioTrackID": "5b69021044ea3b11a1e1d296",
//     "__v": 0
// }

app.listen(app.get('port'), function() {
    console.log("Newseon API is running at localhost:" + app.get('port'))
})