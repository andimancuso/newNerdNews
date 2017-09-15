// Page Elements

const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const bbcNews = document.getElementById('bbcNews');
const buzzfeed = document.getElementById('buzzfeed');
const hackerNews = document.getElementById('hackerNews');
const natGeo = document.getElementById('natGeo');
const associatedPress = document.getElementById('associatedPress');
const polygon = document.getElementById('polygon');
const techRadar = document.getElementById('techRadar');
const newYorkTimes = document.getElementById('newYorkTimes');
const main = document.getElementsByTagName('main')[0];

// News API Data

const apiKey = '9a4b5cece5da402da7ad4322781cb3c0';
const engadgetUrl = 'https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=9a4b5cece5da402da7ad4322781cb3c0';
const recodeUrl = 'https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=9a4b5cece5da402da7ad4322781cb3c0';
const nextWebUrl = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=9a4b5cece5da402da7ad4322781cb3c0';
const bbcNewsUrl = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9a4b5cece5da402da7ad4322781cb3c0';
const buzzfeedUrl = 'https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=9a4b5cece5da402da7ad4322781cb3c0';
const hackerNewsUrl = 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=9a4b5cece5da402da7ad4322781cb3c0';
const natGeoUrl = 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=9a4b5cece5da402da7ad4322781cb3c0';
const associatedPressUrl = 'https://newsapi.org/v1/articles?source=associated-press&sortBy=top&apiKey=9a4b5cece5da402da7ad4322781cb3c0';
const polygonUrl = 'https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=9a4b5cece5da402da7ad4322781cb3c0';
const techRadarUrl = 'https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=9a4b5cece5da402da7ad4322781cb3c0';
const newYorkTimesUrl = 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=9a4b5cece5da402da7ad4322781cb3c0';

// Request News Function

async function getNews(url) {
  let response = await fetch(url);
  let jsonResponse = await response.json();
  let articlesArray = jsonResponse.articles.slice(0, 5);
  return articlesArray;
}

// Render Function

function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + article.title + '</h2>' +
      '   <h3>By ' + article.author + '</h3>' +
      '   <p> ' + article.description + '</p>' +
      '   <a href="' + article.urlToImage + '" target="_blank" class="readmore"><p>Read More</p></a>' +
      ' </div>' +
      ' <div class="share">' +
      '   <img class="storyimage" src="' + article.url + '" />' +
      '   <button type="button" class="tweet" id="tweet ' + index + '">' +
      '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button>' +
      ' </div>' +
      '</div>';

    main.innerHTML += articleRow;
  });
  return articles;
}

// Post Tweet Function

function sendTweets(newsObjects) {
  let tweetButtons = document.getElementsByClassName('tweet');
  for (let i = 0; i < tweetButtons.length; i++) {
    tweetButtons[i].addEventListener('click', function() {
      Twitter.postStatus(newsObjects[i].url);
      tweetButtons[i].innerHTML = "Tweeted";
    }, false);
  }
}

// Button Event Listeners

/*
engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(engadgetUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

recode.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(recodeUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);
*/

nextWeb.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(nextWebUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

bbcNews.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(bbcNewsUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

buzzfeed.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(buzzfeedUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

/*
hackerNews.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(hackerNewsUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);
*/

natGeo.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(natGeoUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

associatedPress.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(associatedPressUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

polygon.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(polygonUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

techRadar.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(techRadarUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);

newYorkTimes.addEventListener('click', function() {
  main.innerHTML = ' ';
  	getNews(newYorkTimesUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
}, false);
