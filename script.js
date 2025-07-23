//your JS code here. If required.
const elementParent=document.getEelmentById("level");
function getLevel(element){
	let level=0;
	while(element){
		element=element.parentElement();
		level++;
	}
	return level;
}
const result=getLevel(elementParent);
alert(`The level of the element is: $(result)`);
