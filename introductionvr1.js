'usestrict'

const AnameId = document.getElementById('AnameArea');
const BnameId = document.getElementById('BnameArea');
const prefectureId = document.getElementById('prefectureArea');
const genderId = document.getElementById('genderArea');
const starId = document.getElementById('starArea');
const inoutId = document.getElementById('inoutArea');
const hobbyId = document.getElementById('hobbyArea');
const foodId = document.getElementById('foodArea');
const likeId = document.getElementById('likeArea');
const sayId = document.getElementById('sayArea');
const buttonON = document.getElementById('button');
const questions = document.getElementById('questionArea');
const onTweet = document.getElementById('tweetArea');
const image = document.getElementById('imageArea');

const Img = document.createElement('img');
Img.classList.add('img');
Img.src = "https://tatatatto.github.io/introduction/blob/master/mirror.png"
image.appendChild(Img);




buttonON.onclick = () => {

    var nameAA = AnameId.value;
    var nameAB = BnameId.value;
    var hobbyA = hobbyId.value;
    var foodA = foodId.value;
    var likeA = likeId.value;
    var sayA = sayId.value;

if(!nameAA||!nameAB||!hobbyA||!foodA||!likeA||!sayA){
    alert('全て入力してください');
}else{
removeAllChildren(questions);
removeAllChildren(onTweet);

    var x = 0;

    
    const gender = genderId.value;
    

switch(gender){

    case "男性":
        x = x + 1;
        break;

    case "その他":
        x = x + 100;
        break;}

var y = Math.floor(Math.random()*2) * 2;
console.log(x);
console.log(y);
var x = x + y;
console.log(x);

switch(x){

    case 0:
        resultArea.innerText = desuwa();
        break;
    case 1:
        resultArea.innerText = daze();
        break;
    case 2:
        resultArea.innerText = husigi();
        break;
    case 3:
        resultArea.innerText = gowasu();
        break;
    default:
        resultArea.innerText = desumasu();
        break;}
;

dotweet(resultArea.innerText,'自己紹介');



}}


function desuwa(){
    const name = AnameId.value + BnameId.value;
    const prefecture = prefectureId.value;
    const star = starId.value;
    const inout = inoutId.value;
    const hobby = hobbyId.value;
    const food = foodId.value;
    const like = likeId.value;
    const say = sayId.value;
    const result = "「わたくしは" + prefecture + "出身、" + star + "の" + name + "ですわ。" + inout  + "で趣味は" + hobby + "、好きな食べ物は" + food + "ですわ。最近は" + like + "を嗜んでおりますわ。" + say + "」";
    Img.src = "https://tatatatto.github.io/introduction/blob/master/hime_takabisya_laugh.png";
    return result;
}
function husigi(){
    const name = AnameId.value;
    const prefecture = prefectureId.value;
    const star = starId.value;
    const inout = inoutId.value;
    const hobby = hobbyId.value;
    const food = foodId.value;
    const like = likeId.value;
    const say = sayId.value;
    const result = "「" + name + "はねぇ〜、" + prefecture + "の妖精さんの友達の" + name + "なの〜。" + inout  + "で" + hobby + "と" + food + "ともくもくした雲みたいなわたあめが好きなの〜。最近は" + like + "も好きなの〜。確か" + star + "なの〜" + say + "」";
    Img.src = https://tatatatto.github.io/introduction/blob/master/yumekawa_girl.png"
    return result;
}
function gowasu(){
    const name = AnameId.value + BnameId.value;
    const prefecture = prefectureId.value;
    const star = starId.value;
    const inout = inoutId.value;
    const hobby = hobbyId.value;
    const food = foodId.value;
    const like = likeId.value;
    const say = sayId.value;
    const result = "「" + prefecture + "出身、" + star + "の" + name + "でごわす。" + inout  + "で趣味は" + hobby + "、好物はちゃんこ鍋と" + food + "でごわす。最近ハマっていることは" + like + "ごわす。" + say + "」";
    Img.src = "https://tatatatto.github.io/introduction/blob/master/sumo_rikishi_harite2.png";
    return result;
}
function daze(){
    const name = AnameId.value + BnameId.value;
    const prefecture = prefectureId.value;
    const star = starId.value;
    const inout = inoutId.value;
    const hobby = hobbyId.value;
    const food = foodId.value;
    const like = likeId.value;
    const say = sayId.value;
    const result = "俺様は" + prefecture + "出身、" + star + "の" + name + "だぜぇ。" + inout  + "で趣味は" + hobby + "、好きな食べ物は" + food + "だぜぇ。最近ハマっていることは" + like + "なんだぜぇ。" + say;
    Img.src = "https://tatatatto.github.io/introduction/blob/master/mild_yankee_dqn.png";
    return result;
}
function desumasu(){ 
    const name = AnameId.value + BnameId.value;
    const prefecture = prefectureId.value;
    const star = starId.value;
    const inout = inoutId.value;
    const hobby = hobbyId.value;
    const food = foodId.value;
    const like = likeId.value;
    const say = sayId.value;
    const result = "「" + prefecture + "出身、" + star + "の" + name + "です。" + inout  + "で趣味は" + hobby + "、好きな食べ物は" + food + "です。最近ハマっていることは" + like + "です。" + say + "」";
    let aaa = Math.floor(Math.random()*2);
    if(aaa){
    Img.src = "https://tatatatto.github.io/introduction/blob/master/seibetsu_woman_man.png";
    return result;}
    Img.src = "https://tatatatto.github.io/introduction/blob/master/seibetsu_woman_man_child.png";
    return result;
}

function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

function dotweet(result,hashtag){
    const tweetP = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
      + encodeURIComponent(hashtag)
      + '&ref_src=twsrc%5Etfw';
    tweetP.setAttribute('href', hrefValue);
    tweetP.className = 'twitter-hashtag-button';
    tweetP.setAttribute('data-text', result);
    tweetP.innerText = 'Tweet #自己紹介';
    onTweet.appendChild(tweetP);
    
    console.log(tweetP.getAttribute('data-text'));

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    onTweet.appendChild(script);

}
