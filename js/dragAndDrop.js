$(document).ready(function () {
    var listContainers = [document.getElementById("bed_1"), document.getElementById("bed_2"), document.getElementById("bed_3")];
    dragula(listContainers,
        {
            accepts: function (el, target, source, sibling) {
                var answer = target.children.length == 0;
                return answer; // elements can be dropped in any of the `containers` by default
            }
        });
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	