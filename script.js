var Movie = React.createClass({
	propTypes: {
		film: React.PropTypes.object.isRequired
	},

	render: function() {
		return React.createElement('li', {key: this.props.film.id},
			React.createElement(MovieTitle, {tytul: this.props.film.title}),
			React.createElement('div', {className: 'movie-instance'},
				React.createElement(MovieDesc, {desc: this.props.film.desc}),
				React.createElement(MovieImg, {img: this.props.film.img})
			)
		); 
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		tytul: React.PropTypes.string.isRequired
	},

	render: function() {
		return React.createElement('h2', {}, this.props.tytul)
	}
});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired
	},

	render: function() {
		return React.createElement('p', {className: 'movie-desc'}, this.props.desc)
	}
});

var MovieImg = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired
	},

	render: function() {
		return React.createElement('img', {src: this.props.img, className: 'poster'})
	}
});

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: 'http://i66.tinypic.com/t6xc1w.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'http://i65.tinypic.com/6fw40l.jpg'
	},
	{
		id: 3,
		title: 'Władca pierścieni',
		desc: 'Melodramat o właścicielu zakładu jubilerskiego',
		img: 'http://i64.tinypic.com/2i7vas1.jpg'
	},
	{
		id: 4,
		title: 'Ja, robot',
		desc: 'Mockument o podróży blendera przez kolejne szuflady szafki kuchennej',
		img: 'http://i63.tinypic.com/drcaph.jpg'
	},
	{
		id: 5,
		title: 'Pierwsza krew',
		desc: 'Wybitny kardiochirurg John Rambo przechodzi szkolenie BHP z zasad udzielenia pierwszej pomocy',
		img: 'http://i68.tinypic.com/2eebo83.jpg'
	}
];

var moviesElements = movies.map(function(movie, index) {
	return React.createElement(Movie, {film: movie, key: index});
});

var movieTitles = movies.map(function(movie, index) {
	return React.createElement(MovieTitle, {tytul: movie.title, key: index});
});

var movieDesc = movies.map(function(movie, index) {
	return React.createElement(MovieDesc, {desc: movie.desc, key: index});
});

var movieImg = movies.map(function(movie, index) {
	return React.createElement(MovieImg, {img: movie.img, key: index});
});


var element = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {},
		moviesElements,
		React.createElement('li', {}, movieTitles),
		React.createElement('li', {}, movieDesc),
		React.createElement('li', {}, movieImg)
	)
);


ReactDOM.render(element, document.getElementById('app'));