/**
 * Example, accept/decline
 */
function AcceptDecline(){
    // Color to change
    var font_color = 'orange';
    // Body element
    var element_to_change = document.body;

    // Instantiate dialog box
    var dialogbox = new DialogBox({
        // Title of dialog box
        title: { data: "Change font color" },
        // Body
        body: { data: "Do you wish to change font color to " + font_color + " ?" },
        // Footer
        footer: {
          confirm: {
            data: "Yes",
            // Event on click
            onclick: function() {
                element_to_change.style.color = font_color;
            }
          },
          cancel: {
            data: "No",
          }
        },
    });
}


/**
 * Shows alert
 */
function ShowAlert(){
    var dialogbox = new DialogBox({
        // Title of dialog box
        title: { data: "Alert!" },
        // Body
        body: { data: "This is example alert box."},
        // Footer
        footer: {
          confirm: {
            data: "OK",
          },
          cancel: {
              enabled:false,
          }
        },
    });
}
/**
 * Shows dialog with form inside
 */
function ExampleFormDialog(){
    var form = document.createElement("form");
    form.setAttribute('method', 'get');
    form.setAttribute('action', "#");

    var inputText = document.createElement("input");
    inputText.setAttribute("type", 'text');
    inputText.setAttribute("name", "textInput");

    var submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit!");

    form.appendChild(inputText);
    form.appendChild(submitButton);
    var dialogbox = new DialogBox({
        // Title of dialog box
        title: { data: "Submitable form" },
        // Body
        body: { data: "Insert your text here:" + form.outerHTML},
        // Footer
        footer: {
          confirm: {
            data: "Close",
          },
          cancel: {
              enabled:false,
          }
        },
    });

}