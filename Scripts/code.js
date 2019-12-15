var word = ""
var words = ["" ,"CAT" , "DOG" , "APPLE"]
var wrongs = 0
var corrects = 0
function getTheword(){
    var a =  document.getElementById("input1") 
    word = words[parseInt(a.value)]
    a = document.getElementById("box1")
    a.style = "display:none;"
    a = document.getElementById("box2")
    a.style = "display: block;"
    a = document.getElementById("keyboard")
    a.style = "display: block;"
    set()
    
}
function set(){
    var newword = ""
    var wordlable = document.getElementById("word")
    for(var i = 0 ; i < word.length ; i++){
        newword +="*"
    }
    console.log(newword)
    wordlable.innerHTML = newword
}
function check(a){
    var guess = false
    // var input = document.getElementById("input2")
    var newword = document.getElementById("word").innerHTML
    var ch = a.innerHTML
    console.log(ch)
    for(var i = 0 ; i < word.length ; i++){
        if(word[i] == ch){
            newword = newword.substr(0, i) + ch + newword.substr(i + 1);
            guess = true
        }
    }
    if(guess == false){
        wrongs+=1
        var text = document.getElementById("wrong").innerHTML
        document.getElementById("wrong").innerHTML = text+ch

    }else{
        document.getElementById("word").innerHTML = newword
    }
    
    if(wrongs == word.length){
        document.getElementById("keyboard").style = "display : none;"
        document.getElementById("lose").style = "display : block;"
        document.getElementById("word").innerHTML = word
        document.getElementById("word").style = "color : red;"


    }
    else if(document.getElementById("word").innerHTML == word){
        document.getElementById("keyboard").style = "display : none;"
        document.getElementById("win").style = "display : block;"
    }
    document.getElementById("input2").value = ""

}