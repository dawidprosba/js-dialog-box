/*
    DIALOG BOX JAVASCRIPT PLUGIN
    CREATED BY DAWID PROŚBA 2019
    LICENSE: MIT
    VERSION: 1.0

*/
var DialogBox = /** @class */ (function () {
    function DialogBox(options) {
        var plugin = this;
        /**
         * Object defaults
         *  - allowOnlyOneInstance : bool - if can be instantiated two dialogue box at the same time
         * 	- container - dialogue box container
         * 	- title - dialogue box title, header
         * 	- body - dialogue box body
         * 	- footer - dialogue box footer
         */
        this.defaults = {
            allowOnlyOneInstance: true,
            dialogBoxClass: "dialog-box",
            /**
             * CONTAINER PROPERTIES
             * 	- class : string - container class
             * 	- onclick : string/function - event that will be fired on mouse click on the container
             */
            container: {
                "class": "dialog-box-container",
                onclick: function () { }
            },
            /**
             * TITLE PROPERTIES
             *
             * 	- data : string - text,data to be shown in title
             * 	- class : string -  container class
             * 	- onclick : string/function -  event that will be fired on mouse click on the body
             * 	-closeButton: Dataobject
             * 			- enabled : bool - wheter to show or hide close button in title section
             * 			- data : string - button's text
             * 			- class : string - button's class
             * 			- id : string - button's id
             * 			- onclick : string/function - function to be triggered on click
             */
            title: {
                data: "Confirm",
                "class": "dialog-box-title",
                onclick: function () { },
                closeButton: {
                    enabled: true,
                    data: "×",
                    "class": "dialog-box-close",
                    onclick: function () { }
                }
            },
            /**
             * BODY PROPERTIES
             *
             * 	- data : string - text, data to be shown in body
             * 	- class : string - container class
             * 	- onclick : string/function - event that will be fired on mouse click on the body
             */
            body: {
                data: "Confirm to proceed.",
                "class": "dialog-box-body",
                onclick: function () { }
            },
            /**
             * FOOTER PROPERTIES
             *
             * 	- confirm : object - confirm button
             * 		- enabled : bool - wheter to show or hide button
             * 		- data : string - text of the button
             * 		- class : string - button's class
             * 		- id : string - button's id
             * 		- onclick : string/function - event that will be fired on mouse click
             *
             * 	- cancel : object - cancel button
             * 		- enabled : bool - wheter to show or hide button
             * 		- data : string - text of the button
             * 		- class : string - button's class
             * 		- id : string - button's id
             * 		- onclick : string/function - event that will be fired on mouse click
             */
            footer: {
                "class": "dialog-footer",
                onclick: function () { },
                confirm: {
                    enabled: true,
                    data: "Confirm",
                    "class": "dialog-box-button dialog-btn-confirm",
                    id: "",
                    onclick: function () { }
                },
                cancel: {
                    enabled: true,
                    data: "Cancel",
                    "class": "dialog-box-button dialog-btn-cancel",
                    id: "",
                    onclick: function () { }
                }
            }
        };
        // Initialise object
        this.init(options);
    }
    DialogBox.prototype.init = function (options) {
        this.dialogData = this.extendObject(options, this.defaults);
        console.log(this.dialogData);
        this.CreateDialog();
    };
    /**
     * Create dialog
     * Create DOM elemetns
     * APPEND THEM TO THERIS CONTAINERS
     * APPEND DIALOG TO BODY
     * ADD EVENT LISTERS
     */
    DialogBox.prototype.CreateDialog = function () {
        if (this.dialogData.allowOnlyOneInstance) {
            var exists = this.findDialogInstance();
            if (exists)
                return false;
        }
        var dialogBox;
        var container;
        var title;
        var title_text;
        var title_close_btn;
        var title_close_btn_text;
        var body;
        var body_text;
        var footer;
        var footer_confirm;
        var footer_confirm_text;
        var footer_cancel;
        var footer_cancel_text;
        // Container
        dialogBox = document.createElement("div");
        dialogBox.setAttribute("class", this.dialogData.dialogBoxClass);
        container = document.createElement("div");
        container.className = this.dialogData.container["class"] + " dialog-instance";
        // Title
        title = document.createElement("div"); //container
        title.className = this.dialogData.title["class"];
        title_text = document.createTextNode(this.dialogData.title.data); //title text
        title.appendChild(title_text);
        title_close_btn = document.createElement("button"); //title close btn
        title_close_btn.className = this.dialogData.title.closeButton["class"];
        title_close_btn_text = document.createTextNode(this.dialogData.title.closeButton.data); // Close button text
        title_close_btn.appendChild(title_close_btn_text);
        title.appendChild(title_close_btn);
        container.appendChild(title);
        // Body
        body = document.createElement("div"); // body container
        body.className = this.dialogData.body["class"];
        body_text = document.createTextNode(""); // body text
        body.appendChild(body_text);
        body.innerHTML = this.dialogData.body.data;
        container.appendChild(body);
        // Footer
        footer = document.createElement("div");
        footer.className = this.dialogData.footer["class"];
        if (this.dialogData.footer.confirm.enabled == true) {
            footer_confirm = document.createElement("button");
            footer_confirm.setAttribute('class', this.dialogData.footer.confirm["class"]);
            footer_confirm_text = document.createTextNode(this.dialogData.footer.confirm.data);
            footer_confirm.appendChild(footer_confirm_text);
            footer.appendChild(footer_confirm);
        }
        if (this.dialogData.footer.cancel.enabled == true) {
            footer_cancel = document.createElement("button");
            footer_cancel.className = this.dialogData.footer.cancel["class"];
            footer_cancel_text = document.createTextNode(this.dialogData.footer.cancel.data);
            footer_cancel.appendChild(footer_cancel_text);
            footer.appendChild(footer_cancel);
        }
        container.appendChild(footer);
        dialogBox.appendChild(container);
        document.body.appendChild(dialogBox);
        this.addEvents(dialogBox);
    };
    /**
     * Merge two objects
     * @param obj object to be merged in
     * @param src source object to be merged with
     */
    DialogBox.prototype.extendObject = function (userConfig, defaults) {
        for (var item in defaults) {
            if (defaults.hasOwnProperty(item)) {
                if (typeof defaults[item] == "object") {
                    userConfig[item] = this.extendObject(userConfig[item], defaults[item]);
                }
                else {
                    if (userConfig == null) {
                        userConfig = defaults;
                    }
                    else if (userConfig[item] == null) {
                        userConfig[item] = defaults[item];
                    }
                }
            }
        }
        return userConfig;
    };
    /**
     * Add event listeners on click to buttons
     * @param dialog Dialog Box element
     */
    DialogBox.prototype.addEvents = function (dialog) {
        var plugin = this;
        var confirmButton = dialog.getElementsByClassName(this.dialogData.footer.confirm["class"]);
        if (confirmButton[0] != null && confirmButton) {
            confirmButton[0].addEventListener("click", function () { plugin.removeDialog(dialog); });
            confirmButton[0].addEventListener("click", this.dialogData.footer.confirm.onclick);
        }
        var cancelButton = dialog.getElementsByClassName(this.dialogData.footer.cancel["class"]);
        if (cancelButton[0] != null && cancelButton) {
            cancelButton[0].addEventListener("click", function () { plugin.removeDialog(dialog); });
            cancelButton[0].addEventListener("click", this.dialogData.footer.cancel.onclick);
        }
        var closeButton = dialog.getElementsByClassName(this.dialogData.title.closeButton["class"]);
        closeButton[0].addEventListener("click", function () { plugin.removeDialog(dialog); });
        closeButton[0].addEventListener("click", this.dialogData.title.closeButton.onclick);
        dialog.addEventListener('click', this.dialogData.container.onclick);
        var body = dialog.getElementsByClassName(this.dialogData.body["class"]);
        body[0].addEventListener('click', this.dialogData.body.onclick);
        var footer = dialog.getElementsByClassName(this.dialogData.footer["class"]);
        footer[0].addEventListener('click', this.dialogData.footer.onclick);
        var title = dialog.getElementsByClassName(this.dialogData.title["class"]);
        title[0].addEventListener('click', this.dialogData.title.onclick);
    };
    /**
     * Remove dialog from document
     */
    DialogBox.prototype.removeDialog = function (dialog) {
        dialog.parentNode.removeChild(dialog);
    };
    /**
     * Check if instance of dialog box exists
     * @param {string} instanceClass
     * @return {bool} if exists
     */
    DialogBox.prototype.findDialogInstance = function (instanceClass) {
        if (instanceClass === void 0) { instanceClass = 'dialog-instance'; }
        // Find instances
        var instances = document.getElementsByClassName(instanceClass);
        if (instances.length)
            return true;
        return false;
    };
    return DialogBox;
}());
