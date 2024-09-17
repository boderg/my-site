var time = document.querySelector('.time');
var dateTime = document.querySelector('.date-time');

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();

    // var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    date = date < 10 ? '0' + date : date;

    var period = now.getHours() < 12 ? 'AM' : 'PM';
    // time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
    time.innerHTML = hours + ':' + minutes + ' ' + period;
    dateTime.innerHTML = dayNames[day] + ' ' + date + ', ' + monthNames[month] + ' ' + year;
}

updateClock();
setInterval(updateClock, 1000);