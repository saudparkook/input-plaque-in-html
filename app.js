var ser_plaque=document.getElementById("ser_plaque");
var char_plaque=document.getElementById("char_plaque");
var num_plaque=document.getElementById("num_plaque");
var ir_plaque= document.getElementById("ir_plaque");

function checkOnKey(item,event,len){
    if((!isTextSelected(item)&&item.value.length==len)||isNumberKey(event)==false){
    return true;
    }
    return false;
}

function autoTab (event,id,len){
    
    let item=document.getElementById(id);
    let isselected=isTextSelected(item);
    var check=event.key!='Tab' && event.key!='Backspace' && !isselected;

    if(check){
        if(item.value.length>=len&&id=="ser_plaque"){
        if(char_plaque.disabled==false){
            char_plaque.focus();
            
        }else{
        num_plaque.focus();
        num_plaque.select();
        }
        
        }else if(item.value.length>=len&&id=="num_plaque"){
            ir_plaque.focus();
            ir_plaque.select();
        }
    }else if(event.key=='Backspace'){
        if(item.value.length==0&&id=="num_plaque"){
        if(char_plaque.disabled==false){
            char_plaque.focus();
        }else{
            ser_plaque.focus();
        }
        
        }else if(item.value.length==0&&id=="ir_plaque"){
            num_plaque.focus();
        }
    }
    
}

function isTextSelected(input) {
    if (typeof input.selectionStart == "number") {
        return input.selectionStart == 0 && input.selectionEnd == input.value.length;
    } else if (typeof document.selection != "undefined") {
        
        return document.selection.createRange().text == input.value;
    }
}



function isNumberKey(evt)
{
var charCode = (evt.which) ? evt.which : evt.keyCode;
if (charCode != 46 && charCode > 31
    && (charCode < 48 || charCode > 57))
    return false;

return true;
}



