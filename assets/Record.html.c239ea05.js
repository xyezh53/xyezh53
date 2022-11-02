import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as a,a as e,b as o,d as r,e as n,r as i}from"./app.faa37f6e.js";const c={},f=e("p",null,"录屏主流应用：",-1),d=e("li",null,"相机：Windows 自带应用，录制方便，但不能调节输出选项。",-1),_={href:"https://www.flashbackrecorder.com/zh/express/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.bandicam.cn/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://mirillis.com/zh/products/action.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://ohsoft.net/eng/ocam/intro.php?cate=1002",target:"_blank",rel:"noopener noreferrer"},m={href:"https://getsharex.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/MathewSachin/Captura/releases/tag/v8.0.0",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/dglx_/article/details/122389601",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"FPS:10, Quality:30%",-1),k={href:"https://obsproject.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.videolan.org/vlc/",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"ffmpeg",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ffmpeg","aria-hidden":"true"},"#"),o(" FFmpeg")],-1),F=e("p",null,[o("很多录屏、视频处理软件都是基于 FFmpeg，手边没合适工具的话，则使用命令行来进行录制。按 "),e("code",null,"q"),o(" 停止录制。")],-1),y={href:"https://github.com/BtbN/FFmpeg-Builds/releases/tag/latest",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"ffmpeg-master-latest-win64-gpl.zip",-1),B=e("code",null,"D:\\Backup\\Libraries\\Documents\\ffmpeg",-1),V=e("li",null,[e("p",null,[o("查看可用的视频和音频设备："),e("code",null,"ffmpeg -list_devices true -f dshow -i dummy"),o("。"),e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})])])],-1),S=e("p",null,[e("code",null,"ffmpeg -f gdigrab -r 20/1001 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x640 output.mp4")],-1),z=e("code",null,"-f gdigrab",-1),D={href:"https://ffmpeg.org/ffmpeg-all.html#gdigrab",target:"_blank",rel:"noopener noreferrer"},q=n("<li><code>-r 20/1001</code> 帧率为 0.02，每 50 秒录制 1 帧</li><li><code>-draw_mouse 1</code> 录制时显示鼠标</li><li><code>-offset_x 0 -offset_y 0 -video_size 2560x1440</code> 为起始坐标和选定录制范围</li><li><code>-s 1280x720</code> 是用 scale 方法，让最终视频设为 720p。</li><li><code>-i desktop</code> 为输入设备，指代桌面。</li><li><code>out.mp4</code> 为输出视频的名字与格式</li>",6),W={href:"https://github.com/rdp/screen-capture-recorder-to-video-windows-free",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,'ffmpeg -f dshow -r 20/1001 -i video="SplitCam Video Driver" output.mp4',-1),H=n('<li><p>将摄像头画面录制到桌面画面的上方，则为 <code>ffmpeg -f gdigrab -r 1 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x720 -b:v 0 -crf 32 output.mp4 -f dshow -r 1 -i video=&quot;SplitCam Video Driver&quot; -filter_complex &quot;overlay=W-w-1:H-h-1&quot; -y</code>。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><ul><li><code>-c:v libx264</code> 是用于设置视频编解码器，一般可不填使用默认，<code>-c:a</code> 为音频编码。<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></li><li><code>-b:v 0 -crf 32</code> 是将视频比特率设置为最小，同时使用恒定质量，CRF 的范围可以从 0（最佳质量）到 63（最小文件大小）。</li><li><code>overlay=W-w-1:H-h-1</code> 指浮层放在右下角，距离边缘 1px。</li><li><code>-y</code> 遇到选项时，默认执行 yes 命令。</li></ul></li>',1),L=e("p",null,"如果画面偏移，尝试勾选 ffmpeg.exe 的高 DPI 缩放替代。",-1),N=e("p",null,"当前错误：",-1),E=e("ul",null,[e("li",null,"SplitCam Video Driver 场景尺寸有问题，导致摄像头被切割了。"),e("li",null,[o("V380 FHD Camera 无法识别，下次重启后试试。"),e("code",null,'ffmpeg -f gdigrab -r 1 -draw_mouse 1 -offset_x 0 -offset_y 0 -video_size 2560x1440 -i desktop -s 1280x720 -b:v 0 -crf 32 output.mp4 -f dshow -r 1 -i video="V380 FHD Camera" -filter_complex "overlay=W-w-1:H-h-1" -y'),o("。")])],-1),M=e("p",null,"FFmpeg 其他常用命令：",-1),T=n('<li>进行录屏设置，有多种选择，如 <code>-vcodec libx264 -crf 30 -pix_fmt yuv420p -preset ultrafast</code> 或 <code>-c:v libx265 -x265-params crf=10:psy-rd=1</code>。</li><li>PixelFormat 默认 yuv420p，Preset 设为 ultrafast，避免报错。<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></li><li><code>-filter:v &quot;setpts=0.1*PTS&quot;</code> 减少视频抽样，但不是视频加速，对于低帧率的视频影响很小。<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup></li>',3),I={href:"https://ffmpeg.guide/",target:"_blank",rel:"noopener noreferrer"},R=e("h2",{id:"capture",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#capture","aria-hidden":"true"},"#"),o(" Capture")],-1),j=e("p",null,"Windows 偶尔录屏推荐 Capture。其实 capture 就是 FFmpeg 录屏的 gui 版。虽然版本没更新，但功能不影响。使用前按上方步骤设置全局变量即可。",-1),A=e("p",null,"但每天录屏不适合用 Capture，经常莫名其妙的报错，重启大概率恢复正常。",-1),G=e("h2",{id:"bandicam",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bandicam","aria-hidden":"true"},"#"),o(" Bandicam")],-1),O=e("p",null,"Bandicam 支持定时录制计划，但录制的开始和结束都必须由该计划执行，否则录制计划将不会执行。",-1),Q={href:"https://www.bandicam.cn/support/tips/timer-recording/",target:"_blank",rel:"noopener noreferrer"},X=e("p",null,"Bandicam 录屏时，ManicTime 4 会一直记录为活跃状态，需要使用新版 ManicTime。",-1),J=e("hr",{class:"footnotes-sep"},null,-1),K={class:"footnotes"},U={class:"footnotes-list"},Y={id:"footnote1",class:"footnote-item"},Z={href:"https://blog.csdn.net/m0_60352504/article/details/126762161",target:"_blank",rel:"noopener noreferrer"},$=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),ee={id:"footnote2",class:"footnote-item"},oe={href:"https://www.cnblogs.com/leisure_chn/p/10434209.html",target:"_blank",rel:"noopener noreferrer"},te=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),re={id:"footnote3",class:"footnote-item"},ne={href:"https://blog.csdn.net/guanyijun123/article/details/121270650",target:"_blank",rel:"noopener noreferrer"},se=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),le={id:"footnote4",class:"footnote-item"},ae={href:"https://ffmpeg.org/ffmpeg-codecs.html#libx265",target:"_blank",rel:"noopener noreferrer"},ie=e("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1),ce={id:"footnote5",class:"footnote-item"},fe={href:"https://magiclen.org/x265-preset/",target:"_blank",rel:"noopener noreferrer"},de=e("a",{href:"#footnote-ref5",class:"footnote-backref"},"↩︎",-1),_e={id:"footnote6",class:"footnote-item"},he={href:"https://blog.csdn.net/zhying719/article/details/123059209",target:"_blank",rel:"noopener noreferrer"},pe=e("a",{href:"#footnote-ref6",class:"footnote-backref"},"↩︎",-1);function ue(me,ge){const t=i("ExternalLinkIcon");return l(),a("div",null,[f,e("ul",null,[d,e("li",null,[e("a",_,[o("FlashBack Express"),r(t)]),o("：能调节帧率，镜像，虚化背景，但免费版只支持 2 小时内的录制。")]),e("li",null,[e("a",h,[o("Bandicam"),r(t)]),o("：录制时能抑制噪音，同步录制扬声器音频，自由调节编码、帧率，但免费版只支持录制 10 分钟且有水印，输出文件名自定义规则极少。")]),e("li",null,[e("a",p,[o("Mirillis Action!"),r(t)]),o("：高帧率录制游戏，自动分割视频，自定义叠加元素，但输入帧率不能自由调整，最低只能 15 帧，试用期 30 天。")]),e("li",null,[e("a",u,[o("oCam"),r(t)]),o("：打着免费招牌但有弹窗广告，且录制视频偏大。")]),e("li",null,[e("a",m,[o("ShareX"),r(t)]),o("：免费开源强大的截图软件，也具备录屏功能，能调节编码和帧率，但只能单一录屏或录像。")]),e("li",null,[e("a",g,[o("Capture"),r(t)]),o("：免费开源，使用前需手动 "),e("a",b,[o("配置 FFmpeg"),r(t)]),o("，自定义叠加元素，但项目已停止更新。推荐录制配置为 "),x,o("。")]),e("li",null,[e("a",k,[o("OBS"),r(t)]),o("：免费开源直播软件，也可以录制视频，操作性极强，但我工作时同时在多路推流直播，无法同时录制摄像头。")]),e("li",null,[e("a",w,[o("VLC"),r(t)]),o("：免费开源视频软件，能调节输出视频的编码、帧率、格式，但操作麻烦，只能单一录屏或录像，暂停录制容易有 bug。")])]),v,F,e("ol",null,[e("li",null,[e("p",null,[o("下载最新版 "),e("a",y,[o("FFmpeg"),r(t)]),o("，Windows 环境选择 "),C,o("，GPL 版本包含所有依赖项，然后将其解压到任意文件夹，我这放在 "),B,o("，设定全局变量。")])]),V,e("li",null,[S,e("ul",null,[e("li",null,[z,o(" 使用 Fmpeg 内置屏幕录制命令 "),e("a",D,[o("gdigrab"),r(t)]),o(" 录制视频，录制对象可为全屏、指定范围和指定程序。")]),q])]),e("li",null,[e("p",null,[o("gdigrab 不支持音频录制，也不支持直接调用摄像头，此时可使用开源的 "),e("a",W,[o("screen-capture-recorder-to-video-windows-free"),r(t)]),o("。比如用其录制摄像头 "),P,o("，此处的 video 名称是在第二步中可用的视频和音频设备列表中找到的。")])]),H]),L,N,E,M,e("ul",null,[T,e("li",null,[o("命令行工具 "),e("a",I,[o("https://ffmpeg.guide/"),r(t)])])]),R,j,A,G,O,e("p",null,[o("我使用了 Bandicam 的开机录制功能，因此无法使用定时录制计划，需借助 Windows 的任务计划程序来定时录制停止，操作参考"),e("a",Q,[o("官方文档"),r(t)]),o("。")]),X,J,e("section",K,[e("ol",U,[e("li",Y,[e("p",null,[e("a",Z,[o("ffmpeg 录屏命令"),r(t)]),o(),$])]),e("li",ee,[e("p",null,[e("a",oe,[o("FFmpeg 中 overlay 滤镜用法 - 水印及画中画"),r(t)]),o(),te])]),e("li",re,[e("p",null,[e("a",ne,[o("ffmpeg 调整缩放裁剪视频的基础知识 (转)"),r(t)]),o(),se])]),e("li",le,[e("p",null,[e("a",ae,[o("libx265 编码说明"),r(t)]),o(),ie])]),e("li",ce,[e("p",null,[e("a",fe,[o("x265 的 preset 与编码速度、视频画质以及比特率的关联"),r(t)]),o(),de])]),e("li",_e,[e("p",null,[e("a",he,[o("FFmpeg 音视频倍速控制"),r(t)]),o(),pe])])])])])}const ke=s(c,[["render",ue],["__file","Record.html.vue"]]);export{ke as default};
