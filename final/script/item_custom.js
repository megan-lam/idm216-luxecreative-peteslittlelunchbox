let hoagie = document.getElementById('hoagie');
let pita = document.getElementById('pita');
let wrap = document.getElementById('wrap');
let ketchup = document.getElementById('ketchup');
let salt = document.getElementById('salt');
let pepper = document.getElementById('pepper');
let onions = document.getElementById('onions');
let addtocart = document.getElementById('addtocart');

let options = [hoagie, pita, wrap, ketchup, salt, pepper, onions];

function checkAddress()
{
    checktopping = "";
    for (let i = 0; i < options.length; i++) {
        let thing = options[i];
        let thisthing = [...thing.attributes];
        const attrs = thisthing.reduce((attrs, attribute) => {
          attrs[attribute.name] = attribute.value;
          return attrs;
        }, {});
        let thename = attrs.value;

        if (thing.checked == true)
        {
            checktopping += thename + " | ";
        }
    }
    
    let additionalNotes = document.getElementById("additional-notes");
    let value = additionalNotes.value;
    checktopping += value; 
    let iteminfo = [textimg, textedit, updateimg, updateprice, updatetitle, updateedit]
    let iteminfostring = iteminfo.toString();
        // Check browser support
        if (typeof(Storage) !== "undefined") {
            // Store
            localStoragenum = localStorage.length;
            let allitem = [iteminfostring, checktopping];
            let allitemstring = allitem.toString();
            localStorage["chosenitem" + localStoragenum] = allitemstring;
            }
}



addtocart.addEventListener( "mousedown", function() {checkAddress();
}, false);



