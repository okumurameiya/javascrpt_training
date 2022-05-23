
// コンソールにHello worldを表示
console.log("Hello world");

// コンソールに変数内テキストを表示
let yourname = "お名前";
console.log("Hello %sさん", yourname);

// ボタンクリック時に呼び出される関数
function HelloWorld(){
    console.log("Hello world!");
}

// p要素を取得し値を変換
function HelloWorld2(){
    let elements = document.getElementsByTagName(`p`);
    let len = elements.length;
    for (let i = 0; i < len; i++){
        let value = elements.item(i).firstChild.nodeValue;
        elements.item(i).firstChild.nodeValue = 'Hello world!';
    }
}

// input要素を取得し値を変数に代入
function Hello2U(){
    let inputText = document.getElementsByTagName(`input`);

    let value = inputText.item(0).value;
    console.log("Hello %s さん",value);
    inputText.placeholder = (`Hello, ${value}さん`);
    inputText.item(0).value = null;
}
