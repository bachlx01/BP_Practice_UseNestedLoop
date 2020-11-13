let sout;
sout = "<table border='1px' cellspacing='0' cellpadding='10px'>";
for (i = 1; i < 11; i++) {
    sout = sout + '<tr>'
    for (j = 1; j < 11; j++) {
        sout = sout + '<td>' + i * j + '</td>';
    }
    sout = sout + '</tr>';
}
document.getElementById('forloop').innerHTML = sout;

let sout1;
sout1 = "<table border='1px' cellspacing='0' cellpadding='10px'>";
let x = 1;

while (x < 11) {
    let y = 1;
    sout1 = sout1 + '<tr>';
    while (y < 11) {
        sout1 = sout1 + '<td>' + x * y + '</td>';
        y++;
    }
    sout1 = sout1 + '</tr>';
    x++;
}
document.getElementById('whileloop').innerHTML = sout1;