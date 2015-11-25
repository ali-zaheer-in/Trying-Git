(function(){
angular.module('myapp',[])
    .controller('Main', function() {
    	var vm=this;
        vm.model="aa";
    	vm.get=get;
        vm.parentModel="parentModel";
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