var word = '가나다라';
while(true){
new answer = prompt(word);
if(word[word.length-1] ===answer[0]){
    word = answer;
} else{
alert("올바르지않습니다.")
}
}