
window.onload = function () {
    Nav();
    now_put('now_comment');

    const loader = document.getElementById('loader');
    loader.classList.add('loaded');
    
    setInterval("now_put('now_comment')", 1000);
};

function Click_head(name) {
    if (document.getElementById(name).style.display === "none") {
        document.getElementById(name).style.display = null;
    } else {
        document.getElementById(name).style.display = "none";
    }
}

function now_put(name) {
    now = new Date();
    nowyear = now.getFullYear();
    nowmonth = now.getMonth() + 1;
    nowday = now.getDate();
    nowhour = now.getHours();
    nowminutes = now.getMinutes();
    nowseconds = now.getSeconds();

    document.getElementById(name).innerHTML = "なう(" + nowyear + "/" + nowmonth + "/" + nowday + " " + nowhour + "：" + nowminutes + "：" + nowseconds + ")";
}

function comment_display(){
    if (document.getElementById("comment").style.display === "none") {
        document.getElementById("comment").style.display = null;
        document.getElementById("com_button").src = "img/com_1.png";
    } else {
        document.getElementById("comment").style.display = "none";
        document.getElementById("com_button").src = "img/com_0.png";
    }
}
