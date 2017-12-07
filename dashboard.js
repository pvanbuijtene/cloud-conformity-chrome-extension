(function() {
    'use strict';

    console.log("Setting up Cloud Conformity Dashboard...");

    var moduleIndex = 1; // Start with scrolling to second module.

    function showNextModule() {
        console.log("Show next module...");

        var navigationBarHeight = document.querySelector(".navigation-bar").clientHeight;
        var modules = document.querySelectorAll(".module");

        if (moduleIndex < modules.length) {
            window.scroll({ top: (modules[moduleIndex].offsetTop + navigationBarHeight), left: 0, behavior: 'smooth' });

            moduleIndex++;
            scheduleShowNextModule();
        } else {
            moduleIndex = 1;
            scheduleShowNextAccount();
        }
    }


    function selectNexAccount() {
        console.log("Switching to next account...");

        var accounts = document.querySelectorAll(".all, .account");
        for(var i=0; i < accounts.length; i++) {
            if (accounts[i].className.includes("is-selected")) {
                var next = accounts[0];
                if (i+1 < accounts.length) {
                    next = accounts[i+1];
                }
                
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                next.querySelector("a").click();
            }
        }

        scheduleShowNextModule();
    }

    function scheduleShowNextAccount() {
        setTimeout(selectNexAccount, 1000 * 30);
    }

    function scheduleShowNextModule() {
        setTimeout(showNextModule, 1000 * 30);
    }

    document.styleSheets[0].insertRule(".account-search, .add, #intercom-container { display: none!important; }", 0);

    scheduleShowNextModule();
})();