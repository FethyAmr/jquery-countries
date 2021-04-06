
$(function(){

    $("button").click(function(){

        $.ajax({
            url: "http://localhost:8000/countries",
            success: function (data, status, response) {
                // return data
                $("#country-1").html(data[0])
                $("#country-2").html(data[1])
                $("#country-3").html(data[2])
                $("#country-4").html(data[3])
                $("#country-5").html(data[4])
                // $("#okkk").html(data)
            }
        })




    })
})