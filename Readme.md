# [兒童健康增進互動網站](https://jeffery8910.github.io/childrenbrainhealthwebsite/)專案


## 專案主題與目標

本專案旨在建立一個**互動式資訊網站**，以促進兒童健康成長為核心主題。

專案目標：
1.  **傳遞知識：** 根據整理的神經科學研究與專家觀點，以清晰易懂的網頁格式呈現環境因素（特別是家庭溝通方式）對兒童大腦發育與心理健康的影響。
2.  **提升意識：** 提高訪客（家長、教育工作者等）對正向教養、健康溝通重要性的認識。
3.  **互動學習：** 提供簡單的互動遊戲（辨識分類、情境應對、知識問答），讓使用者在遊戲中加深理解並練習相關技巧。
4.  **資源整合：** 提供相關的延伸閱讀連結。

## 專案選擇說明

選擇建立靜態網站結合簡單 JavaScript 互動遊戲的形式，原因如下：
*   **內容呈現：** 適合展示 `plan.md` 中的資訊與知識點。
*   **互動性：** 透過小遊戲增加使用者參與度和學習效果。
*   **易於訪問與傳播：** 網頁易於分享，無需複雜設定即可運行。
*   **技術可行性：** 使用 HTML, CSS, JavaScript 即可實現核心功能。

## 專案架構

```
prevention/  (目錄名稱維持不變，或可考慮更改)
├── plan.md           # 核心資料來源 (已更新為兒童健康主題)
├── PROJECT_README.md # 本說明文件 (已更新)
├── index.html        # 網站主頁 (已更新連結與遊戲入口)
├── style.css         # 主要 CSS 樣式表
├── game-style.css    # 遊戲相關 CSS 樣式表
├── game-classification.html # 遊戲：辨識與分類
├── game-classification.js
├── game-scenario.html       # 遊戲：情境應對
├── game-scenario.js
├── game-quiz.html           # 遊戲：知識問答
└── game-quiz.js
```

## 如何運行

直接在網頁瀏覽器中開啟 `index.html` 文件即可瀏覽網站內容與進行遊戲，
或著，直接點擊[連結](https://jeffery8910.github.io/childrenbrainhealthwebsite/)預覽。
