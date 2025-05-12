document.addEventListener('DOMContentLoaded', () => {
    const statementElement = document.getElementById('statement');
    const harmfulButton = document.getElementById('btn-harmful');
    const supportiveButton = document.getElementById('btn-supportive');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('btn-next');
    const gameArea = document.getElementById('game-area');
    const scoreArea = document.getElementById('score-area');
    const finalScoreElement = document.getElementById('final-score');
    const totalQuestionsElement = document.getElementById('total-questions');

    // 遊戲數據：語句及其正確分類 ('harmful' 或 'supportive')
    const statements = [
        { text: "你怎麼連這點小事都做不好？真沒用！", type: 'harmful' },
        { text: "我知道這很難，但你已經很努力了，我看到你的進步。", type: 'supportive' },
        { text: "閉嘴！我不想聽你解釋。", type: 'harmful' },
        { text: "我明白你現在可能感到沮喪，我們可以一起想想辦法嗎？", type: 'supportive' },
        { text: "你看看別人家的孩子，比你強多了！", type: 'harmful' },
        { text: "你今天的想法很有創意，我很欣賞。", type: 'supportive' },
         { text: "哭什麼哭？不准哭！", type: 'harmful' },
         { text: "沒關係的，感到難過是很正常的，我在這裡陪你。", type: 'supportive' }
    ];

    let currentStatementIndex = 0;
    let score = 0;

    function loadStatement() {
        if (currentStatementIndex < statements.length) {
            statementElement.textContent = statements[currentStatementIndex].text;
            feedbackElement.textContent = '';
            feedbackElement.className = ''; // 清除樣式
            harmfulButton.disabled = false;
            supportiveButton.disabled = false;
            nextButton.style.display = 'none';
        } else {
            showFinalScore();
        }
    }

    function checkAnswer(selectedType) {
        harmfulButton.disabled = true;
        supportiveButton.disabled = true;
        const correctType = statements[currentStatementIndex].type;
        if (selectedType === correctType) {
            feedbackElement.textContent = '正確！做得好！';
            feedbackElement.className = 'correct';
            score++;
        } else {
            feedbackElement.textContent = `錯誤。這句話是 ${correctType === 'harmful' ? '傷害性' : '支持性'} 的。`;
            feedbackElement.className = 'incorrect';
        }
        nextButton.style.display = 'inline-block';
    }

    function showFinalScore() {
        gameArea.style.display = 'none';
        scoreArea.style.display = 'block';
        finalScoreElement.textContent = score;
        totalQuestionsElement.textContent = statements.length;
    }

    harmfulButton.addEventListener('click', () => checkAnswer('harmful'));
    supportiveButton.addEventListener('click', () => checkAnswer('supportive'));
    nextButton.addEventListener('click', () => {
        currentStatementIndex++;
        loadStatement();
    });

    // 初始化遊戲
    loadStatement();
}); 