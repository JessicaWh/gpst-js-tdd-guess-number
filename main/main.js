// Write your cade below:
function main(sysNum , userNum) {

    var countA = 0;
    var countB = 0;
    for(var val of sysNum){
        if(userNum.indexOf(val) != -1 ){
            if(userNum.indexOf(val) == sysNum.indexOf(val)){
                countA++;
            }
            else {
                countB++;
            }
        }
    }

    console.log(sysNum+'~'+userNum+':'+countA+'A'+countB+'B');
};

module.exports = {
    main
}