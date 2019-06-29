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
Shows DialogBox with default options.
```javascript
 var dialogBox = new DialogBox({});
```
Shows DialogBox with custom options.
```javascript
    var dialogBox = new DialogBox({
      title: { data: "Accept me!" }, // Title
      body: { data: "Accept me right now!" }, // Body text
      footer: {
        confirm: {
          data: "Accept :)", // Confirm button text
          onclick: function() {
          // Instantiate another DialogBox on accept
            var okBox = new DialogBox({
              title: { data: "YAY!" },
              body: { data: "YOU ACCEPTED!" },
              footer: {
                confirm: {
                  data: "OK"
                },
                cancel: {
                  enabled: "false" // Don't render cancel button
                }
              }
            });
          }
        },
        cancel: {
          data: "Decline!",
        }
      },
      container: {}
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
