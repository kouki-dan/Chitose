
var selects = document.getElementsByTagName("select");
for(var k = 0; k < selects.length; k++){
  var children = selects[k].childNodes
  for(var i = 0; i < children.length; i++){
    var child = children[i];
    var text = child.innerText;
    if(text != null){
      if(text.search("県") == -1){
        child.selected = true;
        break;
      }
    }
  }
}
