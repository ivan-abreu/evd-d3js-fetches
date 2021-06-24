let urljson = 'https://dog.ceo/api/breeds/image/random';
let urlcsv =
  'https://raw.githubusercontent.com/ivan-abreu/evd-d3js-fetches/master/religionok.csv';

let urltsv =
  'https://raw.githubusercontent.com/ivan-abreu/evd-d3js-fetches/master/religionok.tsv';

d3.json(urljson).then(function(data) {
  //console.log( data )
  d3.select('body')
    .append('img')
    .attr('src', data.message);
});

d3.csv(urlcsv).then(function(data) {
  //console.log( data )
  data.map((ele, i) => {
    //console.log( Object.keys(ele) )
    d3.select('body')
      .append('div')
      .text(`${Object.keys(ele)[i]} ${i + 1}- ${ele.indicador}`);
  });
});

d3.tsv(urltsv).then(function(data) {
  //console.log( data )
  data.map(ele => {
    d3.select('body')
      .append('div')
      .text(ele.indicador);
  });
});

d3.dsv(',', urlcsv).then(data => {
  console.log(data);
});

let urlhtml = 'https://ivanabreu.net/';

// let imagen = d3.image(urlimage, {crossOrigin: "anonymous"});
d3.text(urlhtml).then( data => {
  console.log(data.documentElement);
});
