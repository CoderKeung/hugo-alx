function smoothScrollTop(){
    var timer  = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 100;
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer);
        }
    });
}

let tabsNav = document.getElementById("tabsNav")

let recentArticleButton = document.getElementById("recentArticle-button")
let tagsButton = document.getElementById("tags-button")
let allArticleButton = document.getElementById("allArticle-button")

recentArticleButton.addEventListener("click",function (){
    if (this.className === "tab")
        this.className += " tabClick"
    clearTabClick(getClearClass(this.id))
    document.getElementById(getTabClick()).style.display = "block";
    hideClass(getHideClass(getTabClick()));
})

tagsButton.addEventListener("click",function (){
    if (this.className === "tab")
        this.className += " tabClick"
    clearTabClick(getClearClass(this.id))
    document.getElementById(getTabClick()).style.display = "block";
    hideClass(getHideClass(getTabClick()));
})

allArticleButton.addEventListener("click",function (){
    if (this.className === "tab")
        this.className += " tabClick"
    clearTabClick(getClearClass(this.id))
    document.getElementById(getTabClick()).style.display = "block";
    hideClass(getHideClass(getTabClick()));
})


function getClearClass(idName) {
    switch (idName) {
        case "recentArticle-button":
            return ["tags-button","allArticle-button"];
        case "tags-button":
            return ["recentArticle-button","allArticle-button"];
        case "allArticle-button":
            return ["recentArticle-button","tags-button"];
    }
}
function  clearTabClick(i) {
    for (const iKey in i) {
        document.getElementById(i[iKey]).className = "tab"
    }
}

function getTabClick(){
    let tabClick = document.getElementsByClassName("tabClick")
    switch (tabClick[0].id) {
        case "recentArticle-button":
            return "recentArticle";
        case "tags-button":
            return "tags";
        case "allArticle-button":
            return "allArticle";
    }
}
function getHideClass(idName) {
    switch (idName) {
        case "recentArticle":
            return ["tags","allArticle"];
        case "tags":
            return ["recentArticle","allArticle"];
        case "allArticle":
            return ["recentArticle","tags"];
    }
}

function hideClass(i) {
    for (const iKey in i) {
        document.getElementById(i[iKey]).style.display = "none"
    }
}