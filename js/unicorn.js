(function(){
    var key = 0;
    window.Unicorn = function(name,color,favoriteFood){
        this.id = ++key;
        this.name = name;
        this.color = color;
        this.favoriteFood = favoriteFood;
        
        this.setName = function(n){
            this.name = n;
        }
        
        this.setColor = function(c){
            this.color = c;
        }
        
        this.setFavoriteFood = function(f){
            this.favoriteFood = f;
        }
    }
})();