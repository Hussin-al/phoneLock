$(document).ready(function() {
  $('#lockButton').click(function() {
    const input = $('#lockTime').val();
    const parts = input.split(":");

    if(parts.length !== 2) {
      alert("Bitte HH:mm eingeben!");
      return;
    }

    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[1]);

    if(isNaN(hours) || isNaN(minutes)) {
      alert("Ungültige Zahl!");
      return;
    }

    const now = new Date();
    const unlockDate = new Date(now.getTime());
    unlockDate.setHours(now.getHours() + hours);
    unlockDate.setMinutes(now.getMinutes() + minutes);

    const formatTime = (date) => {
      return date.getHours().toString().padStart(2, '0') + ":" +
             date.getMinutes().toString().padStart(2, '0');
    };

    $('#currentTime').text("Aktuelle Uhrzeit: " + formatTime(now)).show();
    $('#unlockTime').text("Du kannst dein Handy wieder nutzen um: " + formatTime(unlockDate)).show();
  });
});
