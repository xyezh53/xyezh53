import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as a,e as t}from"./app.bfff3959.js";const J={},r=t('<h2 id="_1-无钥匙进入控制过程" tabindex="-1"><a class="header-anchor" href="#_1-无钥匙进入控制过程" aria-hidden="true">#</a> （1）无钥匙进入控制过程</h2><p>‍</p><p>车外门把手触摸传感器——J965 唤醒线 J519；J965——室外天线——钥匙（闪烁）——J519——</p><p>（1. 车门锁开启、后视镜警示灯闪烁；2.油箱盖、后备箱开锁、左右两侧信号灯闪烁；3.仪表上的转向信号灯闪烁）</p><p>‍</p><h2 id="_2-按遥控钥匙解锁控制过程" tabindex="-1"><a class="header-anchor" href="#_2-按遥控钥匙解锁控制过程" aria-hidden="true">#</a> （2）按遥控钥匙解锁控制过程</h2><p>钥匙（闪烁）—J519—(1. 车门锁开启/上锁、后视镜警示灯闪烁；2.油箱盖、后备箱开锁/上锁、左右两侧信号灯闪烁；3.仪表上的转向信号灯闪烁)</p><p>‍</p><p>（3）打开车门E378背景灯点亮</p><p>F2—J386 <u> CAN </u> J965 <u>供电线</u> E378背景灯—接地</p><p>（4）门边状态显示</p><p>F2—J386 CAN J519 CAN J285</p><p>（5）按E378打开点火开关控制</p><p>E378——J965 唤醒线 J519；J965 CAN J285 CAN J965——室内天线——钥匙（闪烁）——J519 CAN J285 CAN J764（方向盘解锁） CAN J965 15#1和15#​2和S#三条12V线 J519 CAN J285（点亮仪表）</p><p>（6）应急解锁</p><p>E378——J965 CAN J285；D2——J285 CAN J764.</p>',16),c=[r];function _(o,i){return p(),a("div",null,c)}const d=e(J,[["render",_],["__file","2022-10-07-B8i.html.vue"]]);export{d as default};