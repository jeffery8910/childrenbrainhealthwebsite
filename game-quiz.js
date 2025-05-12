document.addEventListener('DOMContentLoaded', () => {
    const questionTextElement = document.getElementById('question-text');
    const optionsArea = document.getElementById('options-area');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('btn-next');
    const gameArea = document.getElementById('game-area');
    const scoreArea = document.getElementById('score-area');
    const finalScoreElement = document.getElementById('final-score');
    const totalQuestionsElement = document.getElementById('total-questions');

    // 遊戲數據：問題、選項及正確答案的索引
    const questions = [
        {
            question: "根據兒童健康增進網站提到，童年時期持續受到言語虐待，大腦的哪個系統會變得過度敏感？",
            options: ["獎勵系統", "威脅系統", "記憶系統", "語言系統"],
            answer: 1 // 威脅系統
        },
        {
            question: "根據兒童健康增進網站提到，言語虐待會使大腦的獎勵迴路發生什麼變化？",
            options: ["反應增強", "反應遲鈍", "不受影響", "產生混亂"],
            answer: 1 // 反應遲鈍
        },
        {
            question: "研究發現，情緒虐待可能導致大腦哪些區域的結構改變？",
            options: ["海馬體和下視丘", "小腦和腦幹", "前額葉皮質和杏仁核", "頂葉和枕葉"],
            answer: 2 // 前額葉皮質和杏仁核
        },
        {
            question: "英國研究顯示，約有多少比例的兒童曾遭受言語虐待？",
            options: ["約10%", "約25%", "約41%", "約60%"],
            answer: 2 // 約41%
        },
        {
            question: "專家強調，對兒童使用支持性和什麼樣的語言對健康大腦發育至關重要？",
            options: ["嚴厲的", "幽默的", "命令式的", "尊重的"],
            answer: 3 // 尊重的
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionTextElement.textContent = currentQuestion.question;
            optionsArea.innerHTML = '';
            feedbackElement.textContent = '';
            feedbackElement.className = '';
            nextButton.style.display = 'none';

            // 隨機排列選項
            const optionIndices = currentQuestion.options.map((_, index) => index);
            const shuffledIndices = optionIndices.sort(() => Math.random() - 0.5);


            shuffledIndices.forEach(index => {
                const option = currentQuestion.options[index];
                const button = document.createElement('button');
                button.textContent = option;
                button.onclick = () => checkAnswer(index, currentQuestion.answer);
                optionsArea.appendChild(button);
            });
        } else {
            showFinalScore();
        }
    }

    function checkAnswer(selectedIndex, correctIndex) {
        const buttons = optionsArea.getElementsByTagName('button');
        for (let btn of buttons) {
            btn.disabled = true;
        }

        if (selectedIndex === correctIndex) {
            feedbackElement.textContent = '正確！';
            feedbackElement.className = 'correct';
            score++;
        } else {
            feedbackElement.textContent = `錯誤。正確答案是：${questions[currentQuestionIndex].options[correctIndex]}`;
            feedbackElement.className = 'incorrect';
        }
        nextButton.style.display = 'inline-block';
    }

    function showFinalScore() {
        gameArea.style.display = 'none';
        scoreArea.style.display = 'block';
        finalScoreElement.textContent = score;
        totalQuestionsElement.textContent = questions.length;
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });

    // 初始化遊戲
    loadQuestion();
}); 