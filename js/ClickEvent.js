
function clickBody (part) {
    toastr.options = {
        positionClass :"toast-top-center"
    }
    if(part === 1) {
        this.showBellyToast();
    }else if(part === 2){
        this.showleftHandsToast();
    }else if(part === 3){
        this.showrightHandsToast();
    }else{
        this.showShyToast();
    }
}
function showBellyToast () {
    toastr.error('该减肥了～');
}
function showleftHandsToast () {
    toastr.success('Hello World!');
}
function showrightHandsToast () {
    toastr.success('Wish, 执子之手，与子偕老');
}
function showShyToast () {
    $("#secret-block").animate({ opacity: 1 }, "slow", "swing");
    toastr.warning('羞羞的～');
    $("#secret-block").animate({ opacity: 0 }, "slow");
}
