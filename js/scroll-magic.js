$(document).ready(function () {
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: '200%',
            triggerHook: 'onLeave'
        }
    });

    new ScrollMagic.Scene({triggerElement: "#header"})
        .setTween("#header > div", {y: "80%", ease: Linear.easeNone})
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#why"})
        .setTween("#why > div", {y: "80%", ease: Linear.easeNone})
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#what"})
        .setTween("#what > div", {y: "80%", ease: Linear.easeNone})
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#who"})
        .setTween("#who > div", {y: "80%", ease: Linear.easeNone})
        //.addIndicators()
        .addTo(controller);
    /*function pathPrepare ($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    var $word = $("path#word");
    var $dot = $("path#dot");

    // prepare SVG
    pathPrepare($word);
    pathPrepare($dot);

    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tween = new TimelineMax()
        .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
        .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
        .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);*/
});
