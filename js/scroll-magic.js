$(document).ready(function () {
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: '200%',
            triggerHook: 'onLeave'
        }
    });

    new ScrollMagic.Scene({triggerElement: "#header"})
        .setTween("#header > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#why"})
        .setTween("#why > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#what"})
        .setTween("#what > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#who"})
        .setTween("#who > div", {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller);
});
