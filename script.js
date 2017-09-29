/**
 * Created by h106p2 on 9/25/17.
 */
//write first method
function sleep_in(x,y) {
    if(x == false && y == false){
        return true;
    }else if(x == true && y == false){
        return false;
    }else if(x == false && y == true){
        return true;
    }else if(x == true && y == true){
        return true;
    }
}

//write second method
function monkey_trouble(param1, param2) {
    if(param1 == true && param2 == true){
        return true;
    }else if(param1 == false && param2 == false){
        return true;
    }else {
        return false;
    }
}

function string_times(string,n){
    var sum = ""
    for(var x = 0; x < n; x++){
        sum += string ;
    }
    return sum;
}

function front_times(string, n){
    if(string.length < 3){
        var sum2 = "";
        for(var y = 0; y < n; y++){
            sum2 += string;
        }
        return sum2;
    }else{
        var first = string[0];
        var second = string[1];
        var third = string[2];
        var front = first + second + third;
        var sum = ""
        for(var x=0; x<n; x++){
            sum += front;
        }
        return sum;
    }

}

function string_bits(string,n){
    var x = 0
    var stg = ""
    while(string.length>x){
        stg += string[x];
        x+=2;
    }
    return stg;
}

function caughtSpeeding(speed,bday){
    if(bday == false){
        var limit1 = 60;
        var limit2 = 80;
    }else{
        var limit1 = 65;
        var limit2 = 85;
    }
    if(speed <= limit1){
        return 0;
    }else if(speed > limit1 && speed <= limit2){
        return 1;
    }else{
        return 2;
    }

}

function fizz_buzz(x){
    if(x % 5 == 0 && x % 3 == 0){
        return "FizzBuzz";
    }
    if(x % 5 == 0){
        return "Buzz";
    }
    if(x % 3 == 0){
        return "Fizz";
    }
    return x + "!";
}

function teaParty(t,c){
    if(t>=5 && c>=5){
        if(t>=c*2 || c>=t*2){
            return 2;
        }else{
            return 1;
        }
    }else{
        return 0;
    }
}

function blackjack(x,y){
    if(x>21 && y<=21){
        return y;
    }else if(y>21 && x<=21){
        return x;
    }else if(x>21 && y>21){
        return 0;
    }
    if(x<=21 && y<=21){
        if(x>y){
            return x;
        }else{
            return y;
        }
    }
}

function loneSum(x,y,z){
    if(x==y && y==z){
        return 0;
    }else if(x==y){
        return z;
    }else if(x==z){
        return y;
    }else if(y==z){
        return x;
    }else if(x!=y && y!=z){
        return x += y += z;
    }
}

function tester() {

    document.getElementById("output").innerHTML = sleepIn(true, false);
    //document.getElementById("output1").innerHTML = nextOne(true, false);
    //test third method, etc
}
