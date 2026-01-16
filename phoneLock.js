$(document).ready(function () {

    const showError = (msg) => {
        $('#errorMessage').text(msg).show();
    };

    const clearError = () => {
        $('#errorMessage').hide().text('');
    };

    $('#lockButton').click(function () {
        clearError();

        const input = $('#lockTime').val().trim();

        let hours = 0;
        let minutes = 0;

        // Fall 1: HH:mm
        if (input.includes(':')) {
            const parts = input.split(':');

            if (parts.length !== 2) {
                showError("Bitte HH:mm oder nur Stunden eingeben.");
                return;
            }

            hours = parseInt(parts[0]);
            minutes = parseInt(parts[1]);

            if (isNaN(hours) || isNaN(minutes)) {
                showError("Ungültiges Zeitformat.");
                return;
            }
        }
        // Fall 2: nur Stunden
        else {
            hours = parseInt(input);

            if (isNaN(hours)) {
                showError("Bitte eine Zahl oder HH:mm eingeben.");
                return;
            }
        }

        const now = new Date();
        const unlockDate = new Date(now.getTime());
        unlockDate.setHours(now.getHours() + hours);
        unlockDate.setMinutes(now.getMinutes() + minutes);

        const formatTime = (date) =>
            date.getHours().toString().padStart(2, '0') + ":" +
            date.getMinutes().toString().padStart(2, '0');

        $('#currentTime')
            .text("Aktuelle Uhrzeit: " + formatTime(now))
            .show();

        $('#unlockTime')
            .text("Du kannst dein Handy wieder nutzen um: " + formatTime(unlockDate))
            .show();
    });
});
