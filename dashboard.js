(function() {
    'use strict';

    console.log("Setting up Cloud Conformity Dashboard...");

    function selectNexAccount() {
        console.log("Switching to next account...");

        var accounts = document.querySelectorAll(".all, .account");
        for(var i=0; i < accounts.length; i++) {
            if (accounts[i].className.includes("is-selected")) {
                var next = accounts[0];
                if (i+1 < accounts.length) {
                    next = accounts[i+1];
                }
                next.querySelector("a").click();
            }
        }
    }

    setInterval(selectNexAccount, 1000 * 30);

    document.styleSheets[0].insertRule(".account-search, .add, #intercom-container { display: none!important; }", 0);
})();