/*********************************************
**********************************************
**                 Copyright.               **
**  YUKI.N(Yuki Nagato) Typing Engine       **
**  Coded by "Nagisa."                      **
**  http://www008.upp.so-net.ne.jp/nagisa/  **
**  https://130cmwolf.github.io/            **
**                                          **
**  No reproduction or republication        **
**            without written permission.   **
**                                          **
**    You should be able to produce         **
**     Main Engine Cords of                 **
**        this level without a copy. ;P     **
**********************************************
**********************************************
 *
 *[引用条件 http://ja.wikipedia.org/wiki/%E5%BC%95%E7%94%A8#.E6.9D.A1.E4.BB.B6 ]
 *1.作品
 *  ScriptEngine及び制御コード
 *2.主従関係
 *  ScriptEngine及び制御コード(主)引用(徒)
 *3.引用明記
 *  文字列0番目制御コード + / - 使用部分(ただしコード+に関しては「YUKI.N>」を省略している)
 *4.引用元
 *  以下引用明記部
 *5.出所明記
 *  以下引用明記部
 *
 *涼宮ハルヒの憂鬱  アニメオフィシャル
 *  ©2006 谷川流・いとうのいぢ／SOS団
 *  http://www.haruhi.tv/
 *
 *※Script1 > https://130cmwolf.github.io/YUKI.N/YUKI.N_Script.js
 *涼宮ハルヒの憂鬱 アニメ引用
 *  第14話 「涼宮ハルヒの憂鬱Ⅵ」
 *涼宮ハルヒの憂鬱 アニメDVD引用
 *  Vol.3 第6話 「涼宮ハルヒの憂鬱Ⅵ」
 *
 *※Script2 > https://130cmwolf.github.io/YUKI.N/YUKI.N_Script2.js
 *涼宮ハルヒの憂鬱 単行本引用
 *  第7章
 *  ページ277～278
 *
 *※Script3 > https://130cmwolf.github.io/YUKI.N/YUKI.N_Script3.js
 *涼宮ハルヒの消失 単行本引用
 *  第3章
 *  ページ151～153
 *  第4章
 *  ページ189～191
 *
 *[商用目的・非商用目的]
 *Amazon等のアフィリエイトは使用していないので商用目的ではない
 *またスクリーンセーバー及び他のソフトウェアもフリーソフトなので
 *商用目的としての扱いではない
 *
 *以上
 *
 */

//Engine Version 2.5
/*
 * Script Reference
 *    ->ScriptReference.html
 */
/*          Not Change !         */
var mainobj   = null;
var curobj    = null;
var timerid   = null;
var retobj    = null;
var brflg2    = null;
var initflg   = true;
var clsflg    = true;
var blinkflg  = true;
var brflg     = true;
var waittime  = 100;
var tmpwait   = 100;
var typeno    = 0;
var fadecnt   = 0;
var count     = 0;
var sps       = 0;
var aftwait   = 0;
var aftcnt    = -1;
var Spacelng  = "";
var Spacelng2 = "";
var colorn    = new Array("#DDDDDD","#CCCCCC","#BBBBBB","#AAAAAA","#999999","#888888","#777777","#666666","#555555","#444444","#333333","#222222","#111111","#000000");
var mainURL   = "https://130cmwolf.github.io/";

function fadeout(fadewait){
	if(fadecnt >= colorn.length){
		fadecnt = 0;
		return;
	}
	mainobj.style.color = colorn[fadecnt];
	fadecnt++;
	setTimeout("fadeout(" + fadewait + ")", fadewait);
}
function cls(){
	while(mainobj.firstChild != curobj){
		mainobj.removeChild(mainobj.firstChild);
	}
	mainobj.style.color = colorn[0];
	brflg = true;
	clsflg = false;
}
function Typing(){
	if(initflg) init();                  //init
	if(clsflg)  cls();                   //Screen Clear
	if(typeno >= TYPESTR.length){
		setTimeout("cpw()", 2000);
		return; //ALLEND
	}
	waittime = tmpwait;
	if      (TYPESTR[typeno].substr(0,1) == "+" || TYPESTR[typeno].substr(0,1) == "/" || TYPESTR[typeno].substr(0,1) == "&"){
		if(count == 0){
			if(brflg){
				retobj = mainobj.insertBefore(document.createTextNode(''),curobj);
				brflg=false;
			}else{
				mainobj.insertBefore(document.createElement('br'),curobj);
				retobj = mainobj.insertBefore(document.createTextNode(''),curobj);
			}
		}
		if (!(count > TYPESTR[typeno].length-1)){
			if(count == 0){
				if(TYPESTR[typeno].substr(0,1) == "/"){
					sp = document.createElement("span");
					sp.appendChild(document.createTextNode(Spacelng));
					retobj = mainobj.insertBefore(sp,curobj);
					retobj.className="wh";
					retobj = mainobj.insertBefore(document.createTextNode(''),curobj);
				}
				if(sps>0){
					for (Spacelng2="";sps >0;Spacelng2+="_",sps--);
					sps=0;
					sp = document.createElement("span");
					sp.appendChild(document.createTextNode(Spacelng2));
					retobj = mainobj.insertBefore(sp,curobj);
					retobj.className="wh";
					retobj = mainobj.insertBefore(document.createTextNode(''),curobj);
				}
			}
			count++;
			txt = TYPESTR[typeno].substr(1,count);
			retobj.nodeValue=txt;
			brflg2 = TYPESTR[typeno].substr(0,1);
		}else{
			count = 0;
			typeno++;
		}
		if (aftcnt == 0){
			tmpwait = aftwait;
			aftcnt--;
		}else if(aftcnt < 0){
			aftcnt = -1;
		}else{
			aftcnt--;
		}
	}else if(TYPESTR[typeno].substr(0,1) == "-"){
		if(brflg2 != "-"){
			if(brflg){
				retobj = mainobj.insertBefore(document.createTextNode(''),curobj);
				brflg=false;
			}else {
				mainobj.insertBefore(document.createElement('br'),curobj);
				retobj = mainobj.insertBefore(document.createTextNode(''),curobj);
			}
		}
		retobj.nodeValue=TYPESTR[typeno].substr(1);
		brflg2 = "-";
		typeno++;
	}else if(TYPESTR[typeno].substr(0,1) == "*"){
		waittime = TYPESTR[typeno].substr(1)-0;
		typeno++;
	}else if(TYPESTR[typeno].substr(0,1) == "%"){
		var x = TYPESTR[typeno].indexOf(",");
		fadecnt = 0;
		if(x<0){
			waittime = (TYPESTR[typeno].substring(1)-0) * colorn.length + 50;
			fadeout(TYPESTR[typeno].substring(1)-0);
		}else{
			waittime = (TYPESTR[typeno].substring(1,x)-0) * colorn.length + 50 + ((x<0)?0:(TYPESTR[typeno].substr(x+1)-0));
			fadeout(TYPESTR[typeno].substring(1,x)-0);
		}
		clsflg = true;
		typeno++;
	}else if(TYPESTR[typeno].substr(0,1) == "t"){
		tmpwait = TYPESTR[typeno].substr(1)-0;
		typeno++;
	}else if(TYPESTR[typeno].substr(0,1) == "s"){
		sps = TYPESTR[typeno].substr(1)-0;
		typeno++;
	}else if(TYPESTR[typeno].substr(0,1) == "a"){
		var x = TYPESTR[typeno].indexOf(",");
		if(x<0){
			alert("構文エラー「an,n」");
		}else{
			aftcnt = TYPESTR[typeno].substring(1,x)-0;
			aftwait = TYPESTR[typeno].substr(x+1)-0;
		}
		typeno++;
	}else{
		alert("構文エラー");
		typeno++;
	}
	
	setTimeout("Typing()", waittime);
}
function init(){
	mainobj = document.getElementById('Typingmain');
	mainobj.appendChild(document.createTextNode(''));
	curobj = mainobj.lastChild;
	for(var i=0;i<BASE.length;i++){
		if (BASE.substr(i,1).charCodeAt(0) >= 12353)	Spacelng += "_";
		Spacelng += '_';
	}
	for(var i=0; i<TYPESTR.length; i++){
		if(TYPESTR[i].substr(0,1) == "+"){
			TYPESTR[i] = TYPESTR[i].substr(0,1) + BASE + TYPESTR[i].substr(1);
		}
	}
	initflg=false;
	timerid = setInterval("curblink()",500);
}
function curblink(){
	if(blinkflg){
		curobj.nodeValue=" ";
		blinkflg = false;
	}else{
		curobj.nodeValue="_";
		blinkflg = true;
	}
}
function cpw(){
	mainobj.insertBefore(document.createElement('br'),curobj);
	var x = document.createElement('a');
	x.setAttribute('href', mainURL);
	x.appendChild(document.createTextNode('Home Page'));
	mainobj.insertBefore(x,curobj);

}

//If you are not Japanese go to Top page.
function JPOnly(){
	if(window.navigator.systemLanguage){  //IE
		if((window.navigator.systemLanguage).toUpperCase() != "JA"){
			JMPTOP();
		}
	}else if(window.navigator.language){  //MF
		if((window.navigator.language).toUpperCase() != "JA"){
			JMPTOP();
		}
	}
}
function JMPTOP(){
	if((document.referrer).indexOf(mainURL) == -1){
		location.replace(mainURL);
//		window.open(mainURL,"_top");
	}
}
//JPOnly();
Typing();
