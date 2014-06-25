var meldDBCallback = function(src_user_id, dst_user_id){
    // modify the dst_user object here (in place) if there is something inside src_user that
};

AccountsMeld.configure({
    askBeforeMeld: true,
    meldDBCallback: meldDBCallback
});