function getCountries()

$.ajax({
    url: 'http://localhost:8000/countries',
    success: function(data, statuts, response) {
        console.log(data[0].name);
        console.log(data[0].capital);
    }
});