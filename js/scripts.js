


    let togg0 = document.getElementById("togg0");
    let togg1 = document.getElementById("togg1");
    let togg2 = document.getElementById("togg2");
    let togg3 = document.getElementById("togg3");
    let togg4 = document.getElementById("togg4");
    let d0 = document.getElementById("d0");
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    let d4 = document.getElementById("d4");
    $(document).ready(function(){
      $(togg0).click(function(){
        if(getComputedStyle(d0).display != "none"){
          $(d0).animate({
            height: 'toggle'
          });
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
        } else {
          $(d0).animate({
            height: 'toggle'
          });
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
        }
      });
    });
    $(document).ready(function(){
      $(togg1).click(function(){
        if(getComputedStyle(d1).display != "none"){
          d0.style.display = "none";
          $(d1).animate({
            height: 'toggle'
          });
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
        } else {
          d0.style.display = "none";
          $(d1).animate({
            height: 'toggle'
          });
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
        }
      });
    });
    $(document).ready(function(){
      $(togg2).click(function(){
        if(getComputedStyle(d2).display != "none"){
          d0.style.display = "none";
          d1.style.display = "none";
          $(d2).animate({
            height: 'toggle'
          });
          d3.style.display = "none";
          d4.style.display = "none";
        } else {
          d0.style.display = "none";
          d1.style.display = "none";
          $(d2).animate({
            height: 'toggle'
          });
          d3.style.display = "none";
          d4.style.display = "none";
        }
      });
    });
    $(document).ready(function(){
      $(togg3).click(function(){
        if(getComputedStyle(d3).display != "none"){
          d0.style.display = "none";
          d1.style.display = "none";
          d2.style.display = "none";
          $(d3).animate({
            height: 'toggle'
          });
          d4.style.display = "none";
        } else {
          d0.style.display = "none";
          d1.style.display = "none";
          d2.style.display = "none";
          //d3.style.display = "block";
          $(d3).animate({
            height: 'toggle'
          });
          d4.style.display = "none";
        }
      });
    });
    $(document).ready(function(){
      $(togg4).click(function(){
        if(getComputedStyle(d4).display != "none"){
          d0.style.display = "none";
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          $(d4).animate({
            height: 'toggle'
          });
        } else {
          d0.style.display = "none";
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          $(d4).animate({
            height: 'toggle'
          });
        }
      });
    });
   
    
    
    function loadmeteo(ville) {

      var url2 = "https://www.prevision-meteo.ch/services/json/"+ville;
    
      $.ajax( {
          url: url2,
    
          method: "GET",
          dataType : "json",
    
          success:function(monObjet2) {
    
              //console.log(monObjet2);
    
              $("h1").html("Météo de "+monObjet2.city_info.name+", "+monObjet2.city_info.country);
              $(".daycurrent .condition2").html(monObjet2.current_condition.condition);
              $(".daycurrent #img").attr("src", "img/condition.png");
              $(".daycurrent #img").attr("class", "condition condition-"+monObjet2.current_condition.condition_key+"-big-png");
              $(".daycurrent .date").html(monObjet2.current_condition.date);
              $(".daycurrent .temperature").html("<p>"+monObjet2.current_condition.tmp+" °C</p>");
    
              $(".day1 .condition2").html(monObjet2.fcst_day_1.condition);
              $(".day1 #img").attr("src", "img/condition.png");
              $(".day1 #img").attr("class", "condition condition-"+monObjet2.fcst_day_1.condition_key+"-big-png");
              $(".day1 .date").html(monObjet2.fcst_day_1.day_long+" "+monObjet2.fcst_day_1.date);
              $(".day1 .temperaturemaxmin").html("<p>Entre "+monObjet2.fcst_day_1.tmax+" et "+monObjet2.fcst_day_1.tmin+" °C</p>");
              $("#togg1").html(monObjet2.fcst_day_1.day_long);
    
              $(".day2 .condition2").html(monObjet2.fcst_day_2.condition);
              $(".day2 #img").attr("src", "img/condition.png");
              $(".day2 #img").attr("class", "condition condition-"+monObjet2.fcst_day_2.condition_key+"-big-png");
              $(".day2 .date").html(monObjet2.fcst_day_2.day_long+" "+monObjet2.fcst_day_2.date);
              $(".day2 .temperaturemaxmin").html("<p>Entre "+monObjet2.fcst_day_2.tmax+" et "+monObjet2.fcst_day_2.tmin+" °C</p>");
              $("#togg2").html(monObjet2.fcst_day_2.day_long);
    
              $(".day3 .condition2").html(monObjet2.fcst_day_3.condition);
              $(".day3 #img").attr("src", "img/condition.png");
              $(".day3 #img").attr("class", "condition condition-"+monObjet2.fcst_day_3.condition_key+"-big-png");
              $(".day3 .date").html(monObjet2.fcst_day_3.day_long+" "+monObjet2.fcst_day_3.date);
              $(".day3 .temperaturemaxmin").html("<p>Entre "+monObjet2.fcst_day_3.tmax+" et "+monObjet2.fcst_day_3.tmin+" °C</p>");
              $("#togg3").html(monObjet2.fcst_day_3.day_long);
    
              $(".day4 .condition2").html(monObjet2.fcst_day_4.condition);
              $(".day4 #img").attr("src", "img/condition.png");
              $(".day4 #img").attr("class", "condition condition-"+monObjet2.fcst_day_4.condition_key+"-big-png");
              $(".day4 .date").html(monObjet2.fcst_day_4.day_long+" "+monObjet2.fcst_day_4.date);
              $(".day4 .temperaturemaxmin").html("<p>Entre "+monObjet2.fcst_day_4.tmax+" et "+monObjet2.fcst_day_4.tmin+" °C</p>");
              $("#togg4").html(monObjet2.fcst_day_4.day_long);
    
              $("#villemenu").attr("placeholder",ville);
              
    
              
              
    
          }//fin success2
      }); //fin ajax2
    
    
    } // function loadmeteo




navigator.geolocation.getCurrentPosition(function(position){

    //console.log(position);

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

        //console.log("Lat: "+lat+" Lng: "+lng);


        var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.30406496b6f50b1928a35ec88c2d7371&format=json&lat="+lat+"&lon="+lng;

        $.ajax( {
            url: url,

        method: "GET",
        dataType : "json",

        success:function(monObjet) {
        

        //ville v1
        //console.log(monObjet.address.town);

        //ville v2
        
        var ville = monObjet.address.town;
       // console.log(ville);
        loadmeteo(ville);
        


        } //success
        }); //ajax

        
      
          
}); // geo loc





$("#villemenu").change(function() {
  var ville = $("#villemenu").val();
//  console.log(ville);
  loadmeteo(ville);
});




$(".reset").click(function() {
$("#villemenu").val("");

  navigator.geolocation.getCurrentPosition(function(position){

    //console.log(position);

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

        //console.log("Lat: "+lat+" Lng: "+lng);


        var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.30406496b6f50b1928a35ec88c2d7371&format=json&lat="+lat+"&lon="+lng;

        $.ajax( {
            url: url,

        method: "GET",
        dataType : "json",

        success:function(monObjet) {
        

        //ville v1
        //console.log(monObjet.address.town);

        //ville v2
        
        var ville = monObjet.address.town;
       // console.log(ville);
        loadmeteo(ville);
        
        


        } //success
        }); //ajax

        
      
          
}); // geo loc

});
