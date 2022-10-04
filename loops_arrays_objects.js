var sports = ['football', 'tennis', 'rugby'];
console.log('number of elements', sports.length); 

var firstSport = sports[1]
console.log('first sport:', firstSport);

sports.push('curling');
sports.push('snooker');
sports.push('darts');
console.log('sports:', sports);

var removeSport = sports.shift();
console.log('sports:', sports);
console.log('Removed sport:', removedSport);

sports.unshift('basketball');
console.log('sports:', sports);

var removedSport = sports.shift();
console.log('Removed Sport:', removedSport);

console.log('sports:', sports);
var removedSport = sports.splice(3,2);
console.log('Removed Sport:', removedSport);
console.log('sports:', sports);

for(var currentSport of sports) {
    var uppercasedSport = currentSport.toUpperCase()
    console.log(uppercasedSport);
}

for (var i=1 ; i < sports.length; i++) {
    var current = sports[i];
    var uppercasedSport = currentSport.toUpperCase();
    console.log(uppercasedSport);
}

var movie = {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    language: 'Spanish'
};
console.log('movie', movie);

var title = movie.title 
console.log(title);
movie.cast = ['James Stewart', 'Donna Reed'];
console.log('movie:', movie);

movie.language = "English";
console.log('movie:', movie);
movie ['language'] = 'French';
console.log('movie:', movie);

movie['subtitle-language'] = 'man';
console.log('movie:', movie);

var propertyToAccess = 'subtitle-language';
movie[propertyToAccess] = 'German';
console.log('movie:', movie);

delete movie.year;
console.log('movie:', movie);

movie.ratings = {
    critic: 94,
    audience: 95
};
console.log('movie:', movie);

var audienceRating = movie.ratings.audience;
console.log(audienceRating);


for (var key in movie) {
    var value = movie[key];
    console.log(`The ${key} is ${value}`)
}

var keys = Object.keys(movie)
console.log('keys:', keys);



