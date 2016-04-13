(function(){
    var key = 0;
    window.Location = function(name){
        this.id = ++key;
        this.name = name;
        
        this.setName = function(n){
            this.name = n;
        }
    }
})();