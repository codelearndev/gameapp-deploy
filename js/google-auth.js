window.GoogleAuth = {

    component: null,

    Initialize: function (component) {

        this.component = component;

        google.accounts.id.initialize({
            client_id: "415980963502-qgkj58anpm2l2t1obvb522nit0ddo8i9.apps.googleusercontent.com",
            callback: function (response) {
                component.invokeMethodAsync('GoogleAuthAsync', response.credential);
            },
        });

        const createFakeGoogleWrapper = () => {
            const googleLoginWrapper = document.createElement("div");
            
            googleLoginWrapper.style.display = "none";
            googleLoginWrapper.classList.add("custom-google-button");
            document.body.appendChild(googleLoginWrapper);
            
            window.google.accounts.id.renderButton(googleLoginWrapper, {
                type: "icon",
                width: "200",
            });

            const googleLoginWrapperButton =
                googleLoginWrapper.querySelector("div[role=button]");

            return {
                click: () => {
                    googleLoginWrapperButton.click();
                },
            };
        };


        const googleButtonWrapper = createFakeGoogleWrapper();

        window.handleGoogleLogin = () => {
            googleButtonWrapper.click();
        };
        
    }

};

