
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    console.log(arrowPress)
    console.log('Entering keypressHandler')
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

console.log('Client is running in the browser!');
