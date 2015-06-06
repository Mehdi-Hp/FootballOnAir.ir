// Define global variables
var games = "",
    gamesParsed = {};

var gameManipulate = function() {
   // Remove junk
   $.each($(".data a"), function (key, value) {
      $(".data a:first").replaceWith(value.text);
   });
   $(".data hr, .data br, .widget-header, .data + p, .box-footer").remove();
   $(".data p").unwrap();
   $(".data").unwrap();
   $(".data").unwrap();

   // Get array of games string
   games = $(".data p");

   // Default values for gamesParsed Object
   gamesParsed = {
      days     : null,
      dates    : null,
      times    : null,
      series   : null,
      homes    : null,
      aways    : null,
      channels : null
   }

   if (games.length > 0) {
      var days       = [],
          dates      = [],
          times      = [],
          series     = [],
          homes      = [],
          aways      = [],
          channels   = [];

   // Remove unused games
      $.each(games, function (key, value) {
         var text = $(this).html();
         if (text.indexOf('هندبال') !== -1 || text.indexOf('بسکتبال') !== -1 || text.indexOf('والیبال') !== -1 || text.indexOf('واليبال ') !== -1 || text.indexOf('واترپولو ') !== -1 || text.indexOf('کشتی') !== -1) {
            $(this).remove();
         }
      });
      games = $(".data > p");


      // gameParsing Functions
      var text = "",
          word = "",
          restText = "";

      // var getWord = function(arrayToPush) {
      //    switch (arrayToPush) {
      //       case "times":
      //          text = $(this)[0].textContent;
      //          word = text.substr(0, text.indexOf(" "));
      //          word = word.substr(0, 5);
      //          times.push($.trim(word));
      //          $(this)[0].textContent = $(this)[0].textContent.slice(5);
      //          break;
      //       case "series":
      //          text = $(this).html();
      //          word = text.slice(0, text.indexOf(':'));
      //          series.push($.trim(word));
      //          $(this)[0].textContent = text.slice(text.indexOf(':'));
      //          break;
      //       case "homes":
      //          text = $(this).html();
      //          word = text.slice(0, text.indexOf("-"));
      //          homes.push($.trim(word));
      //          break;
      //       case "aways":
      //          text = $(this).html();
      //          word = text.slice(0, text.indexOf("زنده"));
      //          aways.push($.trim(word));
      //          $(this)[0].textContent = $(this)[0].textContent.slice($(this)[0].textContent.indexOf("زنده"));
      //          text = $(this).html();
      //          break;
      //       case "channels":
      //          text = $(this).html();
      //          word = text;
      //          channels.push($.trim(word));
      //          break;
      //       default:
      //          text = $(this).html();
      //          word = text.substr(0, text.indexOf(" "));
      //          arrayToPush.push($.trim(word));
      //          restText = text.substr(text.indexOf(" "));
      //          $(this)[0].textContent = $.trim(restText);
      //          break;
      //    }
      // }
      //
      // var removeWord = function() {
      //    text = $(this).html();
      //    restText = text.substr(text.indexOf(" "));
      //    $(this)[0].textContent = $.trim(restText);
      // }

      // Parse games information
      $.each(games, function (key, value) {
         text = $(this).html();
         word = text.substr(0, text.indexOf(" "));
         days.push($.trim(word));
         restText = text.substr(text.indexOf(" "));
         $(this)[0].textContent = $.trim(restText);

         text = $(this).html();
         word = text.substr(0, text.indexOf(" "));
         dates.push($.trim(word));
         restText = text.substr(text.indexOf(" "));
         $(this)[0].textContent = $.trim(restText);

         text = $(this).html();
         restText = text.substr(text.indexOf(" "));
         $(this)[0].textContent = $.trim(restText);
         text = $(this).html();
         restText = text.substr(text.indexOf(" "));
         $(this)[0].textContent = $.trim(restText);

         text = $(this)[0].textContent;
         word = text.substr(0, text.indexOf(" "));
         word = word.substr(0, 5);
         times.push($.trim(word));
         $(this)[0].textContent = $(this)[0].textContent.slice(5);

         text = $(this).html();
         word = text.slice(0, text.indexOf(':'));
         series.push($.trim(word));
         $(this)[0].textContent = text.slice(text.indexOf(':'));

         text = $(this).html();
         restText = text.substr(text.indexOf(" "));
         $(this)[0].textContent = $.trim(restText);

         text = $(this).html();
         word = text.slice(0, text.indexOf("-"));
         homes.push($.trim(word));

         text = $(this).html();
         restText = text.substr(text.indexOf(" "));
         $(this)[0].textContent = $.trim(restText);
         text = $(this).html();
         restText = text.substr(text.indexOf(" "));
         $(this)[0].textContent = $.trim(restText);

         text = $(this).html();
         word = text.slice(0, text.indexOf("زنده"));
         aways.push($.trim(word));
         $(this)[0].textContent = $(this)[0].textContent.slice($(this)[0].textContent.indexOf("زنده"));
         text = $(this).html();

         text = $(this).html();
         restText = text.substr(text.indexOf(" "));
         $(this)[0].textContent = $.trim(restText);
         text = $(this).html();
         restText = text.substr(text.indexOf(" "));
         $(this)[0].textContent = $.trim(restText);
         text = $(this).html();
         restText = text.substr(text.indexOf(" "));
         $(this)[0].textContent = $.trim(restText);

         text = $(this).html();
         word = text;
         channels.push($.trim(word));
      });

      // Save parsed data as object
      gamesParsed = {
         days: days,
         dates: dates,
         times: times,
         series: series,
         homes: homes,
         aways: aways,
         channels: channels
      }
   }

   $("#data-holder").remove();
}

var showGames = function() {
   //Get week day
   var days = ['یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه'];
   var now = new Date();
   var dayOfWeek = days[now.getDay()];

   // Function for unavailable logos
   var defaultLogo = function () {
      this.src = "assets/images/default.png";
   }

   // Define values for showGames
   var homeLogos = [];
   var awayLogos = [];
   var gameDOM = '';

   if (games.length > 0) {
      //Loop through each game
      for (var i = 0; i <= games.length - 1; i++) {
         gameDOM = '\
            <section class="game" id="game">\
               <section class="game__details">\
                     <p class="game__day">' + gamesParsed.days[i] + '<br>' + gamesParsed.dates[i] + '</p>\
                     <p class="game__time">' + gamesParsed.times[i] + '</p>\
                     <p class="game__series">' + gamesParsed.series[i] + '</p>\
               </section>\
               <section class="game__info">\
                     <section class="team">\
                           <div class="team__logo">\
                                 <img class="team__img" src="assets/images/' + gamesParsed.homes[i] + '.png">\
                           </div>\
                           <span class="team__name">' + gamesParsed.homes[i] + '</span>\
                     </section>\
                     <section class="game__vs">\
                           <img class="game__vs-image" src="assets/images/vs.png"></img>\
                     </section>\
                     <section class="team">\
                           <div class="team__logo">\
                                 <img class="team__img" src="assets/images/' + gamesParsed.aways[i] + '.png" onError="defaultLogo()">\
                           </div>\
                           <span class="team__name">' + gamesParsed.aways[i] + '</span>\
                  </section>\
            </section>';

         // Check if the game's day is today
         if (gamesParsed.days[i] === dayOfWeek) {
            gameDOM += '<div class="game__today">امروز</div>'
         }

         // Append each game to its channel
         if (gamesParsed.channels[i] === 'سه') {
            $("#games--three").append(gameDOM);
         }
         else if (gamesParsed.channels[i] === 'ورزش') {
            $("#games--varzesh").append(gameDOM);
         }
      }
      //End for
   }

   //Check for not available any game
   if ($("#games--three").children().length === 0) {
      gameDOM = "<span class='games__no-game'>هیچ مسابقه‌ای در این شبکه وجود ندارد.</span>";
      $("#games--three").append(gameDOM);
   }
   if ($("#games--varzesh").children().length === 0) {
      gameDOM = "<span class='games__no-game'>هیچ مسابقه‌ای در این شبکه وجود ندارد.</span>";
      $("#games--varzesh").append(gameDOM);
   }

   //Fix default logos
   $(document).ready(function () {
      $("img").error(function () {
         $(this).attr('src', 'assets/images/default.png');
      });
   });
}
