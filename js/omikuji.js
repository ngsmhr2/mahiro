
//functionは新しい関数をつくるやつ
function omikuji() {

    //りざると
    const results = ["大吉", "中吉", "小吉", "凶"];

    /*
    ますふろあhttps://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    Math.random()→→→0以上1未満のランダムな小数を作る
    「results.length」→→→”リザルト”の中の配列の数
    これらをやると0～3のどれかの数字がでる
    */
    const random = Math.floor(Math.random() * results.length);

    //ここで0～3に対応するリザルトをだす

    document.getElementById("result").textContent = results[random]

}