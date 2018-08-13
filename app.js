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
            "articles": [
                {
                    "order": 0,
                    "id": "da3af41fcf929d452155a2ea7b6e6905",
                    "headline": "Cops: Man stabs, runs over estranged girlfriend, killing her",
                    "abstract": "A man stabbed and then repeatedly drove over his estranged girlfriend, crushing her in a fatal attack as her suburban Philadelphia co-workers tried to help her early Friday morning, authorities said.",
                    "publisher": "Fox News",
                    "media": "http://global.fncstatic.com/static/orion/styles/img/fox-news/og/og-fox-news.png",
                    "backend": "https://newseon-backend-api.herokuapp.com/tracks/5b708023fbb4f65330270ca0"
                },
                {
                    "order": 1,
                    "id": "44dc8f793c8314433ea03b1790012087",
                    "headline": "Urban Meyer says he didn't handle Zach Smith questions right",
                    "abstract": "Ohio State coach Urban Meyer has issued a statement saying that he \"failed\" when he said he didn't know about a series of domestic violence cases involving his ex-assistant coach Zach Smith.",
                    "publisher": "Espn.com",
                    "media": "http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0802%2Fr409314_1296x729_16%2D9.jpg",
                    "backend": "https://newseon-backend-api.herokuapp.com/tracks/5b708022fbb4f65330270c94"  
                }
            ]
        }))
    } else if (request.params.playlistid === "d2d124") {
        response.send(JSON.stringify({
            "title": "Someone else is trending",
            "media": "http://via.placeholder.com/350x350",
            "articles": [
                {
                    "order": 0,
                    "id": "cd641bde4a9bd06fe14b496d0d4959df",
                    "headline": "Portland's Patriot Prayer Rally Could Be Most Violent Since Charlottesville, Activists Say",
                    "abstract": "The last far-right rally by Proud Boys and Patriot Prayer was declared a riot. Experts think this weekend could be even worse than 2017's deadly \"Unite the Right\" event.",
                    "publisher": "The Huffington Post",
                    "media": "https://img.huffingtonpost.com/asset/5b64693d19000016035010ba.jpeg?ops=1200_630",
                    "backend": "https://newseon-backend-api.herokuapp.com/tracks/5b708022fbb4f65330270c9c"
                    // "backend": 'http://www.noiseaddicts.com/samples_1w72b820/291.mp3'
                },
                {
                    "order": 1,
                    "id": "77cbdc06dab399704dedb50b15343af8",
                    "headline": "12-year-old girl at center of Amber Alert found safe in New York City",
                    "abstract": "JinJing Ma was thought to be in danger after she was last seen Thursday leaving Reagan Washington National Airport. She was in the U.S. from China.",
                    "publisher": "USA Today",
                    "media": "https://www.gannett-cdn.com/-mm-/0fb854c5fc292bf8e9ea056c9dc3928ca198d7bf/c=0-62-2000-1192/local/-/media/2018/08/03/USATODAY/USATODAY/636688801695140638-airport-abduction-080318.JPG?width=3200&height=1680&fit=crop",
                    "backend": "https://newseon-backend-api.herokuapp.com/tracks/5b708022fbb4f65330270c9e"
                    
                    // "backend": 'http://www.noiseaddicts.com/samples_1w72b820/4940.mp3'
                },
                {
                    "order": 2,                
                    "id": "45dafebf553fc45bfa76d0c885263d43",
                    "headline": "Missing University of Iowa student's boyfriend speaks out: 'Just imagine if somebody had taken your Mollie'",
                    "abstract": "It's been more than two weeks since Dalton Jack last saw or heard from his girlfriend, 20-year-old Mollie Tibbetts, before she mysteriously vanished in a rural Iowa town.",
                    "publisher": "ABC News",
                    "media": "https://s.abcnews.com/images/US/missing-iowa-mollie-tibbetts-ht-mem-180723_hpMain_7_v2x1_16x9_992.jpg",
                    "backend": "https://newseon-backend-api.herokuapp.com/tracks/5b708023fbb4f65330270ca5"
                    // "backend": 'http://techslides.com/demos/samples/sample.mp3'
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