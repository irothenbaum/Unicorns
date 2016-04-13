app = {
    locations : {}
    ,unicorns : {}
    ,unicornLocations : {}
    ,createLocation : function(name){
        var newLocation = new Location(name);
        app.locations[newLocation.id] = newLocation;
        
        var template = Handlebars.compile($('#location-template').html());
        var $location = $(template({
            name : newLocation.name
            ,id : newLocation.id
        }));
        
        $location.droppable({
            drop : function(event,ui){
                var $ui = ui.draggable;
                var unicornId = $ui.data('unicorn-id')
                app.moveUnicornToLocation(unicornId,newLocation.id);
                
                $ui.attr('style','');
                //TODO: STEP 1 remove duplicates
                $location.find('.unicorn-names').append($ui);
            }
        });
        
        $('#location-list').append($location);
    }
    ,createUnicorn : function(name,color,favoriteFood){
        var newUnicorn = new Unicorn(name,color,favoriteFood);
        app.unicorns[newUnicorn.id] = newUnicorn;
        
        var template = Handlebars.compile($('#unicorn-template').html());
        var $unicorn = $(template({
            name : newUnicorn.name
            ,id : newUnicorn.id
        }));
        
        $unicorn.draggable();
        
        $('#unicorn-list').append($unicorn);
    }
    ,moveUnicornToLocation : function(unicornId, locationId){
        app.unicornLocations[unicornId] = locationId;
    }
    ,getUnicornsAtALocation : function(locationId){
        //TODO:
    }
};
