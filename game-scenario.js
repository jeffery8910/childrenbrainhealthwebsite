document.addEventListener('DOMContentLoaded', () => {
    const scenarioDescriptionElement = document.getElementById('scenario-description');
    const optionsArea = document.getElementById('options-area');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('btn-next');
    const gameArea = document.getElementById('game-area');
    const scoreArea = document.getElementById('score-area');

    // 遊戲數據：情境、選項及是否為建議的回應 (isBest)
    const scenarios = [
        {
            description: "孩子考試成績不理想，看起來很沮喪。",
            options: [
                { text: "你怎麼考這麼差？下次再這樣就別想玩了！", isBest: false, feedback: "這種指責性的語言會增加孩子的壓力和挫敗感。" },
                { text: "沒關係，一次失敗不代表什麼。我們來看看錯在哪裡，下次一起努力！", isBest: true, feedback: "這是支持性和建設性的回應，關注解決問題和未來。" },
                { text: "唉，我對你太失望了。", isBest: false, feedback: "表達失望可能會讓孩子感到內疚和無助。" }
            ]
        },
        {
            description: "孩子不小心打翻了牛奶。",
            options: [
                { text: "你怎麼這麼笨手笨腳的！", isBest: false, feedback: "直接的人身攻擊會傷害孩子的自尊心。" },
                { text: "你看你，又給我添麻煩！", isBest: false, feedback: "責備的語氣會讓孩子害怕犯錯。" },
                { text: "沒事，意外難免。我們先把這裡清理乾淨吧。", isBest: true, feedback: "冷靜處理，關注解決問題，避免責備。" }
            ]
        },
        {
            description: "孩子因為和朋友吵架而哭泣。",
            options: [
                 { text: "男子漢大丈夫，哭什麼哭！", isBest: false, feedback: "壓抑孩子的情緒表達是不健康的。" },
                 { text: "告訴我發生了什麼事，我聽你說。", isBest: true, feedback: "提供傾聽和情感支持，幫助孩子處理情緒。" },
                 { text: "肯定是你的錯，你就是愛惹麻煩。", isBest: false, feedback: "未經了解就下定論和指責是非常有害的。" }
            ]
        }
    ];

    let currentScenarioIndex = 0;

    function loadScenario() {
        if (currentScenarioIndex < scenarios.length) {
            const currentScenario = scenarios[currentScenarioIndex];
            scenarioDescriptionElement.textContent = currentScenario.description;
            optionsArea.innerHTML = ''; // 清空舊選項
            feedbackElement.textContent = '';
            feedbackElement.className = '';
            nextButton.style.display = 'none';

            // 隨機排列選項
            const shuffledOptions = [...currentScenario.options].sort(() => Math.random() - 0.5);

            shuffledOptions.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option.text;
                button.onclick = () => checkResponse(option);
                optionsArea.appendChild(button);
            });
        } else {
            showFinalScreen();
        }
    }

    function checkResponse(selectedOption) {
        // 禁用所有按鈕
        const buttons = optionsArea.getElementsByTagName('button');
        for (let btn of buttons) {
            btn.disabled = true;
        }

        feedbackElement.textContent = selectedOption.feedback;
        if (selectedOption.isBest) {
            feedbackElement.className = 'correct'; // 使用綠色顯示好的反饋
        } else {
            feedbackElement.className = 'incorrect'; // 使用紅色顯示需要改進的反饋
        }
        nextButton.style.display = 'inline-block';
    }

    function showFinalScreen() {
        gameArea.style.display = 'none';
        scoreArea.style.display = 'block';
    }

    nextButton.addEventListener('click', () => {
        currentScenarioIndex++;
        loadScenario();
    });

    // 初始化遊戲
    loadScenario();
}); 