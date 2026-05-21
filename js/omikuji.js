
//functionは新しい関数をつくるやつ
function omikuji() {

    //りざると
    const results = ["大吉", "中吉", "小吉", "凶", "大凶", "死"];

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


//ひとことコメント
function todayComment() {


    const comment = ["空を見上げると緑色の空にクレヨンみたいに赤い太陽が浮かんでるかも！",
        "ソシャゲに課金しよう！", "いま殺してしまった虫には感情と思考能力があり、それを伝える手段がなかっただけかも！",
        "いま、あなたの背中にほくろがひとつ増えた！",
        "モバイルバッテリーの発火に気を付けよう！"];


    const hitokoto = Math.floor(Math.random() * comment.length);


    document.getElementById("hitokoto").textContent = comment[hitokoto]

}