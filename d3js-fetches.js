let urljson = 'https://dog.ceo/api/breeds/image/random';
let urlcsv = 'https://dog.ceo/api/breeds/image/random';

d3.json(urljson).then(function(data) {
  console.log( data )
  d3.select("body").append('img')
                  .attr('src', data.message)
});

d3.csv(urlcsv).then(function(data) {
  console.log( data )
  d3.select("body").append('img')
                   .attr('src', data.message)
});

