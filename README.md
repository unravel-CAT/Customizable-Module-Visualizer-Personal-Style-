# Wallpaper Engine音频响应壁纸 Customizable Module Visualizer 预设样式（自用）  
    通过修改js文件实现预设壁纸样式统一（包括Bar Visualizer样式和扬声器低音bass效果等）。
### 壁纸样式： 
    settings.js文件。
### 低音（bass）效果：
    Source.js文件。  
## 为什么外放时几乎没有shake效果而耳机正常：
    扬声器外放产生的低音（bass）数据值受到外部噪音影响传入监听设备时远小于耳机且几乎无法区分，尽管可以通过修改wallpaper engine的录音音量设置稍微增强效果，但没有明显改善耳机也会受影响。
    由于扬声器低音值和耳机差别很大，达到几十倍，因而可以通过修改小于一定区间的值伪造低音数据达到扬声器也可以有一定的shake效果，如此一来扬声器可以实现明显的音频响应效果且耳机所受影响很小。
### 低音值（_bassValue）测试数据：
    取自《Nevada》的一万条低音数据（左：扬声器；右：耳机）
![5974a7f3b4745c22e638d2e0e1edd89d](https://github.com/user-attachments/assets/24d12e2e-da61-4684-a250-d570710213e3)
