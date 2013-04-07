
var children = document.getElementById("S_EKI_SEL");
if(children != null){
  children = children.childNodes;
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
