

function slideIn_GameplayFeature() {
    const gameplayFeature_titles_PARENT = document.getElementsByClassName("gameplayFeatures")
    console.log("helo");
    var animate1 = function () {
        gameplayFeature_titles_PARENT[0].setAttribute("class", "slidedown");
    };
    // var animate2 = function () {
    //     gameplayFeature_titles_PARENT[1].setAttribute("class", "slidedown");
    // };
    // var animate3 = function () {
    //     gameplayFeature_titles_PARENT[2].setAttribute("class", "slidedown");
    // };
    animate1();
    // animate2();
    // animate3();
}