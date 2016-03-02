var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);
while(textNode=walk.nextNode()) {
    textNode.nodeValue = textNode.nodeValue.replace(/trump/g, 'drumpf').replace(/Trump/g, 'Drumpf');
}