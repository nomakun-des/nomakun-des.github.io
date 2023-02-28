function Click_head(name) {
    console.log("Click_head("+name+")");
    
    if (document.getElementById(name).style.display === "none") {
        document.getElementById(name).style.display = null;
    } else {
        document.getElementById(name).style.display = "none";
    }
}
