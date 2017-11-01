/**
 * 初始化测试详情对话框
 */
var WsstestInfoDlg = {
    wsstestInfoData : {}
};

/**
 * 清除数据
 */
WsstestInfoDlg.clearData = function() {
    this.wsstestInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
WsstestInfoDlg.set = function(key, val) {
    this.wsstestInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
WsstestInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
WsstestInfoDlg.close = function() {
    parent.layer.close(window.parent.Wsstest.layerIndex);
}

/**
 * 收集数据
 */
WsstestInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
WsstestInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/wsstest/add", function(data){
        Feng.success("添加成功!");
        window.parent.Wsstest.table.refresh();
        WsstestInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.wsstestInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
WsstestInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/wsstest/update", function(data){
        Feng.success("修改成功!");
        window.parent.Wsstest.table.refresh();
        WsstestInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.wsstestInfoData);
    ajax.start();
}

$(function() {

});
