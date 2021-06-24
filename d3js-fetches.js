let urljson = 'https://dog.ceo/api/breeds/image/random';
let urlcsv = 'https://raw.githubusercontent.com/ivan-abreu/evd-d3js-fetches/master/religionok.csv';

d3.json(urljson).then(function(data) {
  console.log( data )
  d3.select("body").append('img')
                  .attr('src', data.message)
});

d3.csv(urlcsv).then(function(data) {
  console.log( data )
  data.map( (ele) => {
    d3.select("body").append('div')
                    .text(ele.indicador)
  })
  
});

