'use strict';

module.exports = app => {
    const { router, controller } = app;

    //-------------------------------------------------------------------------
    // user
    //-------------------------------------------------------------------------
    // user fans
    router.get('/x/relation/stat', controller.api.user.relation_stat);

    // user info
    router.get('/x/space/acc/info', controller.api.user.space_acc_info);
};
