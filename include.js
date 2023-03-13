var video_list = [//year,month,day,name,img_no
    ["23", "03", "12", "メロン色ヒメグマ", 117],
    ["23", "03", "08", "雨奇晴好ウネルミナモ", 622],
    ["23", "03", "05", "バレパンドクロッグ", 210]
];

function Nav() {
    video_all = "";
    recommend_url = "mthm8IwKrto";

    for (let i = 0; i < video_list.length; i++) {
        video_all +=
                "<li><a href='" + video_list[i][0] + "_" + video_list[i][1] + "-" + video_list[i][2] + ".html'>" +
                "    <img src='img/poke_" + video_list[i][4] + ".png'/>" +
                "    <span>" + video_list[i][3] + " <font size='-2'>(20" + video_list[i][0] + "-" + video_list[i][1] + "-" + video_list[i][2] + ")</font></span>" +
                "</a></li>";
    }

    nav_all = "<div class='menu_box'>" +
            "<h2 onclick='Click_head(&quot;link&quot;)'>リンク</h2>" +
            "<div id='link'>" +
            "    <ul>" +
            "        <li><a target='_blank' href='https://www.youtube.com/channel/UCvUSI-BrEgCY1nNOwosfifg'>" +
            "                <img src='https://www.youtube.com/s/desktop/451d4225/img/favicon_96x96.png'/>" +
            "                <span>YouTube(のーまです。【ゲーム実況】)</span>" +
            "            </a></li>" +
            "        <li><a target='_blank' href='https://twitter.com/nomakun_des'>" +
            "                <img src='https://abs.twimg.com/favicons/twitter.2.ico'/>" +
            "                <span>Twitter(@nomakun_des)</span>" +
            "            </a></li>" +
            "        <li><a target='_blank' href='https://www.instagram.com/nomakun_des/'>" +
            "                <img src='https://static.cdninstagram.com/rsrc.php/v3/yt/r/30PrGfR3xhB.png'/>" +
            "                <span>Instagram(nomakun_des)</span>" +
            "            </a></li>" +
            "        <li><a target='_blank' href='https://nomakun-des.fc2.net/'>" +
            "                <img src='http://static.fc2.com/share/image/favicon.ico'/>" +
            "                <span>FC2(のーまのぶろぐです。)</span>" +
            "            </a></li>" +
            "    </ul>" +
            "</div>" +
            "</div>" +
            "    <div class='menu_box'>" +
            "<h2 onclick='Click_head(&quot;tool&quot;)'>作成ツール</h2>" +
            "<div id='tool'>" +
            "    <ul>" +
            "        <li><a href='https://nomakun-des.github.io/pokes-calc/'>" +
            "                <img src='https://www.pokemon.co.jp/common/images/favi_official.ico'/>" +
            "                <span>ステータス計算</span>" +
            "            </a></li>" +
            "        <li><a href='https://nomakun-des.github.io/types-check/'>" +
            "                <img src='https://www.pokemon.co.jp/common/images/favi_official.ico'/>" +
            "                <span>技範囲チェッカー</span>" +
            "            </a></li>" +
            "    </ul>" +
            "</div>" +
            "</div>" +
            "    <div class='menu_box'>" +
            "<h2 onclick='Click_head(&quot;video&quot;)'><a class='no-deco' href='video.html'>動画用記事</a></h2>" +
            "<div id='video' style='display:none;'>" +
            "    <ul>" +
            video_all +
            "    </ul>" +
            "</div>" +
            "</div>" +
            "    <div class='menu_box'>" +
            "<h2 onclick='Click_head(&quot;game&quot;)'>ゲームタイトル</h2>" +
            "<div id='game' style='display:none;'>" +
            "    <ul>" +
            "        <li><a target='_blank' href='https://www.pokemon.co.jp/ex/sv/ja/'>" +
            "                <img src='https://www.pokemon.co.jp/common/images/favi_official.ico'/>" +
            "                <span>ポケットモンスターSV</span>" +
            "            </a></li>" +
            "        <li><a target='_blank' href='https://www.nintendo.co.jp/switch/av5ja/index.html'>" +
            "                <img src='https://pbs.twimg.com/profile_images/1362173855100334082/sg2p-G27_400x400.jpg'/>" +
            "                <span>スプラトゥーン3</span>" +
            "            </a></li>" +
            "    </ul>" +
            "</div>" +
            "</div>" +
            "    <div class='menu_box'>" +
            "<h2 onclick='Click_head(&quot;useful&quot;)'>よく使ってるサイト</h2>" +
            "<div id='useful' style='display:none;'>" +
            "    <ul>" +
            "        <li><a target='_blank' href='https://www.youtube.com/'>" +
            "                <img src='https://www.youtube.com/s/desktop/451d4225/img/favicon_96x96.png'/>" +
            "                <span>YouTube</span>" +
            "            </a></li>" +
            "        <li><a target='_blank' href='https://yakkun.com/'>" +
            "                <img src='https://img.yakkun.com/favicon-32x32.png'/>" +
            "                <span>ポケモン徹底攻略</span>" +
            "            </a></li>" +
            "        <li><a target='_blank' href='https://sv.pokesol.com/calc'>" +
            "                <img src='https://sv.pokesol.com/favicon-32x32.png'/>" +
            "                <span>ダメージ計算</span>" +
            "            </a></li>" +
            "    </ul>" +
            "</div>" +
            "</div>";
    recommend_all = "<br><br>" +
            "<h1>おすすめ動画</h1>" +
            "    <div id='cnt_inside'>" +
            "        <iframe width='500' height='280' src='https://www.youtube.com/embed/" + recommend_url + "'></iframe>" +
            "    </div>";
    comment_all = "<marquee scrollamount='5' style='--height:10px;'>こんにちは</marquee>" +
            "<marquee scrollamount='6' style='--height:100px;'>www</marquee>" +
            "<marquee scrollamount='8' style='--height:50px;'>初見です</marquee>" +
            "<marquee scrollamount='10' style='--height:30px;'>これが言ってたサイト？</marquee>" +
            "<marquee scrollamount='11' style='--height:260px;'>www</marquee>" +
            "<marquee scrollamount='12' style='--height:120px;'>こんにちは</marquee>" +
            "<marquee scrollamount='13' style='--height:10px;'>www</marquee>" +
            "<marquee scrollamount='15' style='--height:0px;'>www</marquee>" +
            "<marquee scrollamount='16' style='--height:150px;' id='now_comment'>なう(2003/2/23 20：15：43)</marquee>" +
            "<marquee scrollamount='18' style='--height:200px;'>こんにちは</marquee>" +
            "<marquee scrollamount='19' style='--height:180px;'>www</marquee>" +
            "<marquee scrollamount='20' style='--height:220px;'>わこつ</marquee>";

    document.getElementById("inc_nav").innerHTML = nav_all;
    document.getElementById("inc_recommend").innerHTML = recommend_all;
    document.getElementById("comment").innerHTML = comment_all;
}
