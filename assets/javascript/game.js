

$(document).ready(function() { 
    var speed = 3000;
        var myVar;
        var setTimer = true;
        var timeOn = function() {
            
            if (setTimer) {
            $("#timer").animate({ height: "-=480px" }, speed);
            myVar = setTimeout(function () {
                alert("times up!");
                restart();                
                
            }, speed);
            }
        };
        var timeOff = function() {
            $("#timer").animate({ height: "480px" }, 1000);
            clearTimeout(timeOn);
        }
        //popup after 5mins of gameplay
        setTimeout(function () {
            alert("You like this game! Haha!");
        }, 300000);
        //good luck sign
        setTimeout(function () {
            $("#arrow").animate({ left: "+=200px" },2000);
            $("#arrow").animate({ left: "-=200px" }, "normal");
            
        }, 3000);
        //gems enter in
        $("#blue").animate({ right: "+=1500px" }, 2200);
        $("#dark").animate({ left: "+=500px" }, 1000);
        $("#multi").animate({ right: "+=500px" }, 1500);
        $("#neon").animate({ right: "+=1500px" }, 1500);

        //change letter color
        var colors = ["red", "yellow", "blue", "green", "pink", "aqua", "gold", "purple"], 
        idx;    
    $(function colorChange() {
        var div = $('#colorJem'); 
        var chars = div.text().split('');
        div.html('');     
        for(var i=0; i<chars.length; i++) {
            idx = Math.floor(Math.random() * colors.length);
            var span = $('<span>' + chars[i] + '</span>').css("color", colors[idx]);
            div.append(span);
        }
    });
    
    
    var crystals = {
        blue: {
            value: 0,
            },
        dark: {
            value: 0,
            },
        multi: {
            value: 0,
            },
        neon: {
            value: 0,
            },
    };
    
    //THE RANDOMIZER!!! muhahahaha
    function randomizer(min, max) {
      return Math.floor(Math.random() * max)+min;
    };
    
    // just to make things easier
    crystals.blue.value = blueVal;
    crystals.dark.value = darkVal;
    crystals.multi.value = multiVal;
    crystals.neon.value = neonVal;
    //randomizes gems
    var darkVal = randomizer(1,12);
    var blueVal = randomizer(1,12);
    var multiVal = randomizer(1,12);
    var neonVal = randomizer(1,12);
    //randomizes goal
    var bagLimit = randomizer(19,120);
    console.log("bag limit: "+bagLimit);
    
    //user Score
    var totalGems = 0;
    console.log("bv "+blueVal+" dv "+darkVal+" mv "+multiVal+" nv "+neonVal);
    //random bag limit
    $("#bagLimit").text(bagLimit);
    //losses and wins and bank
    var losses=0;
    var wins=0;
    var bank=0;
    $("#losses").text(losses);
    $("#wins").text(wins);
    $("#bank").text(bank);
    
    //buttons clicked
        $("#blue").on("click", function() {
        timeOn();
        setTimer=false;
        totalGems += blueVal;
        console.log("TG "+totalGems);
        //user total
        $("#totalGems").text(totalGems);
        clicked();
    });
    $("#dark").on("click", function() {
        timeOn();
        setTimer=false;
        totalGems += darkVal;
        console.log("TG "+totalGems);
        $("#totalGems").text(totalGems);
        clicked();
        
    });
    $("#multi").on("click", function() {
        timeOn();
        setTimer=false;
        totalGems += multiVal;
        console.log("TG "+totalGems);
        $("#totalGems").text(totalGems);
        clicked();
    });
    $("#neon").on("click", function() {
        timeOn();
        setTimer=false;
        totalGems += neonVal;
        console.log("TG "+totalGems);
        $("#totalGems").text(totalGems);
        clicked();
    });

    //restart
    function restart() {
        $("#timer").stop();
        timeOff();
        setTimer=true;
        clearTimeout();
        totalGems=0;
        $("#totalGems").text(0);
        //restarts gems
    darkVal = randomizer(1,12);
    blueVal = randomizer(1,12);
    multiVal = randomizer(1,12);
    neonVal = randomizer(1,12);
    console.log("bv "+blueVal+" dv "+darkVal+" mv "+multiVal+" nv "+neonVal);
    
    //restarts goal
    bagLimit = randomizer(19,120);
    $("#bagLimit").text(bagLimit);
    }; 
    
    //logic
    function clicked() {
        if (totalGems > bagLimit) {
        losses++;
        $("#losses").text(losses);
        clearTimeout(myVar);
        alert("Noooo...The bag broke!");
        restart();
    }
    if (totalGems === bagLimit) {
        wins++;
        bank += totalGems;
        $("#wins").text(wins);
        $("#bank").text(bank);
        clearTimeout(myVar);
        alert("You Win!! You added "+totalGems+" Jems to your BANK!");
        restart()
    }
    
    };
    });