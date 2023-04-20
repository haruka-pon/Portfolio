//マウスストーカー用のdivを取得
const stalker = document.getElementById('stalker');

const stalkerJust = document.getElementById('stalker_just_wrapp');

const stopBtn = document.getElementById('stop_btn');


stopBtn.addEventListener('click', function () {

    stalker.classList.toggle("cursor_move");



    //マウスに追従させる処理
    document.addEventListener('mousemove', function (e) {
        if (stalker.classList.contains("cursor_move")) {
            stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
        } else {
            stalker.style.transform = 'translate(0)';
        }
    });

    document.addEventListener('mousemove', function (f) {
        if (stalker.classList.contains("cursor_move")) {
            stalkerJust.style.transform = 'translate(' + f.clientX + 'px, ' + f.clientY + 'px)';
        } else {
            stalkerJust.style.transform = 'translate(0)';
        }

    });


    if (stopBtn.textContent === '散歩する') {
        stopBtn.textContent = 'まて';
    } else {
        stopBtn.textContent = '散歩する';
    }

});

