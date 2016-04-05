var count = 100;
var noArr = [0, 2, 4, 6];
var awards = {
    'iPhone6': 1,
    'Mac Pro': 3,
    '小度wifi': 5,
    'iPad Air': 7
};
var R = require('common:po/game/roulette');
var r = new R(8, {
    onfinish: function(i) {
        //转盘跑完处理方法
        if (~noArr.indexOf(i)) {
            alert('再接再厉，还有' + count + '次抽奖机会');
        } else {
            alert('OMG，中了：' + document.getElementById('j-' + i).innerText);
        }
    }
});
var $ = require('common:po/base');
r.on(function(i) {
    // console.log('跑起来' + i);
    //每步跑动回调函数
    //用于转盘效果
    $.toArray(document.querySelectorAll('.bg')).forEach(function(dom) {
        dom.className = '';
    });
    document.getElementById('j-' + i).className = 'bg';
});


module.exports = function() {
    var i = Math.floor(Math.random() * 7);
    r.setGoal(i);
    r.start();
}
