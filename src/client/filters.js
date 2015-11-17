app.filter('html',function($sce){
    return function(input){
        return $sce.trustAsHtml(input);
    };
});

app.filter('dominoes',function(){
    return function(input){
        return input;
    };
});
