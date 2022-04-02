var parameters = {
    "exit": false
}
document.onkeydown = function (e) {
    let ky = e.which;
    let alt = e.altKey;
    let shft = e.shiftKey;
    let ctrl = e.ctrlKey;

    if (ctrl && ky == 78 || ctrl && ky == 84 || ctrl && ky == 85 || ctrl && ky == 68 || ctrl && ky == 72 || ctrl && ky == 74 || 
        ctrl && ky == 117 || ctrl && ky == 71 || ctrl && ky == 83 || ctrl && ky == 80 || ctrl && ky == 80 || ctrl && ky == 80
        || alt && ky == 80 || alt && ky == 69 || ky == 112 || ctrl && shft) {
            return false
    }
}
document.oncontextmenu = function (e) {e.preventDefault()}