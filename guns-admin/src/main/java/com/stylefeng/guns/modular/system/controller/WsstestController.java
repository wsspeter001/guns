package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 测试控制器
 *
 * @author fengshuonan
 * @Date 2017-10-24 15:29:36
 */
@Controller
@RequestMapping("/wsstest")
public class WsstestController extends BaseController {

    private String PREFIX = "/system/wsstest/";

    /**
     * 跳转到测试首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "wsstest.html";
    }

    /**
     * 跳转到添加测试
     */
    @RequestMapping("/wsstest_add")
    public String wsstestAdd() {
        return PREFIX + "wsstest_add.html";
    }

    /**
     * 跳转到修改测试
     */
    @RequestMapping("/wsstest_update/{wsstestId}")
    public String wsstestUpdate(@PathVariable Integer wsstestId, Model model) {
        return PREFIX + "wsstest_edit.html";
    }

    /**
     * 获取测试列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增测试
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除测试
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改测试
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 测试详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
