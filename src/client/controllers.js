var dominoes = [
  {id:1, leftVal:0, rightVal:0, img: 'public/css/tiles/00.png'},
  {id:2, leftVal:0, rightVal:1, img: 'public/css/tiles/01.png'},
  {id:3, leftVal:0, rightVal:2, img: 'public/css/tiles/02.png'},
  {id:4, leftVal:0, rightVal:3, img: 'public/css/tiles/03.png'},
  {id:5, leftVal:0, rightVal:4, img: 'public/css/tiles/04.png'},
  {id:6, leftVal:0, rightVal:5, img: 'public/css/tiles/05.png'},
  {id:7, leftVal:0, rightVal:6, img: 'public/css/tiles/06.png'},
  // {id:8, leftVal:0, rightVal:7, img: 'public/css/tiles/07.png'},
  // {id:9, leftVal:0, rightVal:8, img: 'public/css/tiles/08.png'},
  // {id:10, leftVal:0, rightVal:9, img: 'public/css/tiles/09.png'},
  // {id:11, leftVal:0, rightVal:10, img: 'public/css/tiles/010.png'},
  // {id:12, leftVal:0, rightVal:11, img: 'public/css/tiles/011.png'},
  // {id:13, leftVal:0, rightVal:12, img: 'public/css/tiles/012.png'},

  {id:14, leftVal:1, rightVal:1, img: 'public/css/tiles/11.png'},
  {id:15, leftVal:1, rightVal:2, img: 'public/css/tiles/12.png'},
  {id:16, leftVal:1, rightVal:3, img: 'public/css/tiles/13.png'},
  {id:17, leftVal:1, rightVal:4, img: 'public/css/tiles/14.png'},
  {id:18, leftVal:1, rightVal:5, img: 'public/css/tiles/15.png'},
  {id:19, leftVal:1, rightVal:6, img: 'public/css/tiles/16.png'},
  // {id:20, leftVal:1, rightVal:7, img: 'public/css/tiles/17.png'},
  // {id:21, leftVal:1, rightVal:8, img: 'public/css/tiles/18.png'},
  // {id:22, leftVal:1, rightVal:9, img: 'public/css/tiles/19.png'},
  // {id:23, leftVal:1, rightVal:11, img: 'public/css/tiles/110.png'},
  // {id:24, leftVal:1, rightVal:11, img: 'public/css/tiles/111.png'},
  // {id:25, leftVal:1, rightVal:12, img: 'public/css/tiles/012.png'},

  {id:14, leftVal:2, rightVal:2, img: 'public/css/tiles/22.png'},
  {id:26, leftVal:2, rightVal:3, img: 'public/css/tiles/23.png'},
  {id:27, leftVal:2, rightVal:4, img: 'public/css/tiles/24.png'},
  {id:28, leftVal:2, rightVal:5, img: 'public/css/tiles/25.png'},
  {id:29, leftVal:2, rightVal:6, img: 'public/css/tiles/26.png'},
  // {id:20, leftVal:2, rightVal:7, img: 'public/css/tiles/27.png'},
  // {id:22, leftVal:2, rightVal:8, img: 'public/css/tiles/28.png'},
  // {id:22, leftVal:2, rightVal:9, img: 'public/css/tiles/29.png'},
  // {id:23, leftVal:2, rightVal:10, img: 'public/css/tiles/210.png'},
  // {id:24, leftVal:2, rightVal:11, img: 'public/css/tiles/211.png'},
  // {id:25, leftVal:2, rightVal:12, img: 'public/css/tiles/212.png'},

  {id:26, leftVal:3, rightVal:3, img: 'public/css/tiles/33.png'},
  {id:27, leftVal:3, rightVal:4, img: 'public/css/tiles/34.png'},
  {id:28, leftVal:3, rightVal:5, img: 'public/css/tiles/35.png'},
  {id:29, leftVal:3, rightVal:6, img: 'public/css/tiles/36.png'},
  // {id:30, leftVal:3, rightVal:7, img: 'public/css/tiles/37.png'},
  // {id:31, leftVal:3, rightVal:8, img: 'public/css/tiles/38.png'},
  // {id:32, leftVal:3, rightVal:9, img: 'public/css/tiles/39.png'},
  // {id:33, leftVal:3, rightVal:10, img: 'public/css/tiles/310.png'},
  // {id:34, leftVal:3, rightVal:11, img: 'public/css/tiles/311.png'},
  // {id:35, leftVal:3, rightVal:12, img: 'public/css/tiles/212.png'},

  {id:36, leftVal:4, rightVal:4, img: 'public/css/tiles/44.png'},
  {id:37, leftVal:4, rightVal:5, img: 'public/css/tiles/45.png'},
  {id:38, leftVal:4, rightVal:6, img: 'public/css/tiles/46.png'},
  // {id:39, leftVal:4, rightVal:7, img: 'public/css/tiles/47.png'},
  // {id:40, leftVal:4, rightVal:8, img: 'public/css/tiles/48.png'},
  // {id:41, leftVal:4, rightVal:9, img: 'public/css/tiles/49.png'},
  // {id:42, leftVal:4, rightVal:10, img: 'public/css/tiles/410.png'},
  // {id:43, leftVal:4, rightVal:11, img: 'public/css/tiles/411.png'},
  // {id:44, leftVal:4, rightVal:12, img: 'public/css/tiles/412.png'},

  {id:45, leftVal:5, rightVal:5, img: 'public/css/tiles/55.png'},
  {id:46, leftVal:5, rightVal:6, img: 'public/css/tiles/56.png'},
  // {id:47, leftVal:5, rightVal:7, img: 'public/css/tiles/57.png'},
  // {id:48, leftVal:5, rightVal:8, img: 'public/css/tiles/58.png'},
  // {id:49, leftVal:5, rightVal:9, img: 'public/css/tiles/59.png'},
  // {id:50, leftVal:5, rightVal:10, img: 'public/css/tiles/510.png'},
  // {id:51, leftVal:5, rightVal:11, img: 'public/css/tiles/511.png'},
  // {id:52, leftVal:5, rightVal:12, img: 'public/css/tiles/512.png'},

  {id:53, leftVal:6, rightVal:6, img: 'public/css/tiles/66.png'},
  // {id:54, leftVal:6, rightVal:7, img: 'public/css/tiles/67.png'},
  // {id:55, leftVal:6, rightVal:8, img: 'public/css/tiles/68.png'},
  // {id:56, leftVal:6, rightVal:9, img: 'public/css/tiles/69.png'},
  // {id:57, leftVal:6, rightVal:10, img: 'public/css/tiles/610.png'},
  // {id:58, leftVal:6, rightVal:11, img: 'public/css/tiles/611.png'},
  // {id:59, leftVal:6, rightVal:12, img: 'public/css/tiles/612.png'},

  // {id:60, leftVal:7, rightVal:7, img: 'public/css/tiles/77.png'},
  // {id:61, leftVal:7, rightVal:8, img: 'public/css/tiles/78.png'},
  // {id:62, leftVal:7, rightVal:9, img: 'public/css/tiles/79.png'},
  // {id:63, leftVal:7, rightVal:10, img: 'public/css/tiles/710.png'},
  // {id:64, leftVal:7, rightVal:11, img: 'public/css/tiles/711.png'},
  // {id:65, leftVal:7, rightVal:12, img: 'public/css/tiles/712.png'},

  // {id:66, leftVal:8, rightVal:8, img: 'public/css/tiles/88.png'},
  // {id:67, leftVal:8, rightVal:9, img: 'public/css/tiles/89.png'},
  // {id:68, leftVal:8, rightVal:10, img: 'public/css/tiles/810.png'},
  // {id:69, leftVal:8, rightVal:11, img: 'public/css/tiles/811.png'},
  // {id:70, leftVal:8, rightVal:12, img: 'public/css/tiles/812.png'},

  // {id:71, leftVal:9, rightVal:9, img: 'public/css/tiles/99.png'},
  // {id:72, leftVal:9, rightVal:10, img: 'public/css/tiles/910.png'},
  // {id:73, leftVal:9, rightVal:11, img: 'public/css/tiles/911.png'},
  // {id:74, leftVal:9, rightVal:12, img: 'public/css/tiles/912.png'},

  // {id:75, leftVal:10, rightVal:10, img: 'public/css/tiles/1010.png'},
  // {id:76, leftVal:10, rightVal:11, img: 'public/css/tiles/1011.png'},
  // {id:77, leftVal:10, rightVal:12, img: 'public/css/tiles/1012.png'},

  // {id:78, leftVal:11, rightVal:11, img: 'public/css/tiles/1111.png'},
  // {id:79, leftVal:11, rightVal:12, img: 'public/css/tiles/1112.png'},

  // {id:80, leftVal:12, rightVal:12, img: 'public/css/tiles/1212.png'}
];

app.controller('MainController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope){

  var current;
  var turn;
  var playerHand = [];

  $scope.begin = function(){
    playerHand = [];
    for (var i = 0; i < 5; i++) {
      if (dominoes.length > 0){
      var index = Math.floor(Math.random()*dominoes.length);
      playerHand.push(dominoes[index]);
        dominoes = dominoes.filter(function(element, i){
          return dominoes.indexOf(element) !== index;
        });
        }
      }
      $scope.playerHand = playerHand;
      console.log(dominoes.sort(), playerHand.sort());
    };

    $scope.drawOne = function(){
      if (dominoes.length > 0){
      var index = Math.floor(Math.random()*dominoes.length);
      playerHand.push(dominoes[index]);
        dominoes = dominoes.filter(function(element, i){
          return dominoes.indexOf(element) !== index;
        });
        }
      $scope.playerHand = playerHand;
      console.log(dominoes.sort(), playerHand.sort());
    };

  $scope.test = dominoes[0].img;

  $scope.rotate = function(){
    console.log(this);
    // this.addClass("rotate100");
  };

  $scope.message ="Woooo";

}]);
