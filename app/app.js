 (function(){
angular.module('myapp',[])
    .controller('Main', function() {
    	var vm=this;
        vm.model="aa";//sdfsdfsdfdsfsd
    	vm.get=      get;
        vm.parentModel="parentModel";
        var x="added in 2nd commit by going back to second commit and new-branch";
    	function get(){
    		this.name="Ali Zaheer";
    		alert(vm.name);  
    	}
    })   
    .controller('Child',function(){
        var vm=this;
        vm.ChildModel="ChildModel";
        vm.model="Child!";
    });
})();