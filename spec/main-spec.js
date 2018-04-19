const main = require('../main/main');

describe('main()', () => {
    var sysNum = new Array;
    var userNum ;
    for (var i = 0; i < 9; i++) {
        sysNum[i] = i + 1;
    }
    //排序
    sysNum.sort(function() {
       return 0.5 - Math.random();
    });
    sysNum.length =4;
    var sysNumString = '';
    for(var i=0 ; i<sysNum.length ; i++){
        sysNumString += sysNum[i];
    }
    it('guess num',function () {
        userNum = '2451';
        main.main(sysNumString ,userNum);
     });
});