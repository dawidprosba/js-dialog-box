# DialogBox

DialogBox is pure javascript plugin that adds Custom Dialog boxes (alerts) into your project.
  - Customisable container, title, body, footer, buttons.
  - Custom events on click on elements.
  - Easy to implement.
  - ##### no dependencies.
## Getting started
1. Usage
2. Options
3. Examples

### Usage:
```HTML
<!-- Script -->
<link rel="script" href="https://cdn.jsdelivr.net/gh/DcBD/js-dialog-box/dialogbox.js"/>
<!-- Styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DcBD/js-dialog-box/style.css"/>
```

### Examples:
Dialog: Yes, No:
```javascript
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
    
```
Dialog alert:
```javascript
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
```
Dialog submitable form:
```javascript
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
```

# Options:
| Key        | Type           | Description  |
| ------------- |:-------------:| -----|
| allowOnlyOneInstance     | boolean | If set to true only one instance can be instantiated ``` default:true ``` |
| container|object|Container options|
| title | object|DialogBox [Title options]|
|body | object | DialogBox [Body options]|
|footer|object|DialogBox [Footer options]|

##### ```container```:
---
| Key        | Type           | Description  |
| ------------- |:-------------:| -----|
|class|string|container ```class``` attribute|
|onclick|function|```function``` that fires on click on container ```default:function(){}```|

##### ```title```:
---
| key        | Type           | Description  |
| ------------- |:-------------:|:-----|
|data|```string```|title header text|
|class|```string```|title container ```class```|
|onclick|```function```|```function``` that fires on click on container ```default:function(){}```|
|closeButton|```object```|title close ```button``` properties|

###### ```closeButton```: parent: ```title```
---
| Key        | Type           | Description  |
| ------------- |:-------------:|:-----|
|enabled|```boolean ```| if enabled button will be rendered ```default:true```|
|data|```string```| text of button ```default: '×' ```|
|class|```string```|button ```class``` attribute ```default: 'dialog-box-close'```|
|onclick|```function```|```function``` that fires on click on container ``` defaukt:function(){}```|
##### ```body```:
---
| key        | Type           | Description  |
| ------------- |:-------------:|:-----|
|data|```string```|text of body container ```default: 'Confirm to proceed.'```|
|class|```string```|body container ```class``` attribute|
|onclick|```function```|```function``` that fires on click on body container ``` default:function(){}```|

##### ```footer```:
---
| key        | Type           | Description  |
| ------------- |:-------------:|:-----|
|class|```string```|dialog footer container ``` class``` attribute. ```default:dialog-footer```|
|onclick|```function```|```function``` that fires on click on body container ``` default:function(){}```|
|confirm|```object```|confirm ```button``` options|
|cancel|```object```|cancel ```button``` options|
###### ```confirm```: parent: ```footer```
---
| Key        | Type           | Description  |
| ------------- |:-------------:|:-----|
|enabled|```boolean```|if enabled, button will be rendered ```default:true```|
|data|```string```|button text ```default:'Confirm'```|
|class|```string```|button ```class``` attribute ``` default:'dialog-box-button dialog-btn-confirm'```|
|onclick|```function```|```function``` that fires on click on button ``` default:function(){}```|

###### ```cancel```: parent: ```footer```
---
| Key        | Type           | Description  |
| ------------- |:-------------:|:-----|
|enabled|```boolean```|if enabled, button will be rendered ```default:true```|
|data|```string```|button text ```default:'Cancel'```|
|class|```string```|button ```class``` attribute ```default:`dialog-box-button dialog-btn-cancel`|
|onclick|```function```|```function``` that fires on click on button ``` default:function(){}```|















    
    

# License:
This project is licensed under the MIT License - see the LICENSE.md file for details
© Dawid Prośba 2019
