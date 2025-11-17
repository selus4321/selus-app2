let currentSubject = '';
let currentYear = '';
let userAnswers = [];
let timerSeconds = 3600;
let timerInterval = null;
let startTime = null;

// Use the QUESTION_BANK from questionBank.js
const questionsData = window.QUESTION_BANK;

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const progressFill = document.getElementById('preloader-progress');
    const progressPercent = document.getElementById('preloader-percent');
    let progress = 0;
    
    const progressInterval = setInterval(() => {
        progress += 5;
        progressFill.style.width = progress + '%';
        progressPercent.textContent = progress + '%';
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                preloader.classList.add('fade-out');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 300);
        }
    }, 100);
    
    const userData = loadUserData();
    if (userData) {
        document.getElementById('firstName').value = userData.firstName;
        document.getElementById('phoneNumber').value = userData.phoneNumber;
        document.getElementById('schoolName').value = userData.schoolName;
        
        if (userData.profileImage) {
            updateProfileImage(userData.profileImage);
        } else {
            setDefaultProfileImage();
        }
    } else {
        setDefaultProfileImage();
    }
});

function setDefaultProfileImage() {
    const defaultImage = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150"><rect fill="%236366f1" width="150" height="150"/><text x="50%" y="50%" font-size="60" fill="white" text-anchor="middle" dy=".3em" font-family="Arial">👤</text></svg>';
    const profileImg = document.getElementById('profileImagePreview');
    const headerImg = document.getElementById('headerProfileImg');
    if (profileImg) profileImg.src = defaultImage;
    if (headerImg) headerImg.src = defaultImage;
}

function updateProfileImage(imageSrc) {
    const profileImg = document.getElementById('profileImagePreview');
    const headerImg = document.getElementById('headerProfileImg');
    if (profileImg) profileImg.src = imageSrc;
    if (headerImg) headerImg.src = imageSrc;
}

document.getElementById('profileImageInput')?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageSrc = event.target.result;
            updateProfileImage(imageSrc);
            
            const userData = loadUserData();
            if (userData) {
                userData.profileImage = imageSrc;
                localStorage.setItem('selusUserData', JSON.stringify(userData));
            }
        };
        reader.readAsDataURL(file);
    }
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    const header = document.getElementById('mainHeader');
    if (screenId === 'registrationScreen') {
        header.style.display = 'none';
        document.body.classList.remove('has-header');
    } else {
        header.style.display = 'block';
        document.body.classList.add('has-header');
    }
}

function showOverlay(overlayId) {
    document.getElementById(overlayId).classList.add('active');
}

function closeOverlay() {
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.classList.remove('active');
    });
}

function goBack(screenId) {
    showScreen(screenId);
}

function saveUserData(firstName, phoneNumber, schoolName, profileImage) {
    const existingData = loadUserData();
    const userData = {
        firstName: firstName,
        phoneNumber: phoneNumber,
        schoolName: schoolName,
        profileImage: profileImage || (existingData?.profileImage),
        registeredAt: existingData?.registeredAt || new Date().toISOString()
    };
    localStorage.setItem('selusUserData', JSON.stringify(userData));
}

function loadUserData() {
    const userData = localStorage.getItem('selusUserData');
    return userData ? JSON.parse(userData) : null;
}

function saveExamHistory(subject, year, score, totalTime, percentage) {
    const history = getExamHistory();
    history.push({
        subject: subject,
        year: year,
        score: score,
        total: 20,
        percentage: percentage,
        timeSpent: totalTime,
        date: new Date().toISOString()
    });
    localStorage.setItem('selusExamHistory', JSON.stringify(history));
}

function getExamHistory() {
    const history = localStorage.getItem('selusExamHistory');
    return history ? JSON.parse(history) : [];
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function formatTimeDetailed(seconds) {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
        return `${hours}h ${mins}m ${secs}s`;
    }
    return `${mins}m ${secs}s`;
}

function updateTimer() {
    document.getElementById('timerDisplay').textContent = formatTime(timerSeconds);
    
    if (timerSeconds <= 0) {
        autoSubmitExam();
    }
}

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    startTime = Date.now();
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function renderAllQuestions() {
    const questions = questionsData[currentSubject][currentYear];
    const container = document.getElementById('questionsScrollContainer');
    container.innerHTML = '';
    
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.id = `question-${index}`;
        
        const questionNumber = document.createElement('span');
        questionNumber.className = 'question-number';
        questionNumber.textContent = `Question ${index + 1}`;
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = question.question;
        
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';
        
        question.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.onclick = () => selectOption(index, optIndex);
            optionsContainer.appendChild(optionDiv);
        });
        
        questionDiv.appendChild(questionNumber);
        questionDiv.appendChild(questionText);
        questionDiv.appendChild(optionsContainer);
        container.appendChild(questionDiv);
    });
    
    userAnswers = new Array(20).fill(null);
    updateProgress();
}

function selectOption(questionIndex, optionIndex) {
    userAnswers[questionIndex] = optionIndex;
    
    const questionDiv = document.getElementById(`question-${questionIndex}`);
    const options = questionDiv.querySelectorAll('.option');
    options.forEach((opt, i) => {
        if (i === optionIndex) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
    
    updateProgress();
}

function updateProgress() {
    const answeredCount = userAnswers.filter(ans => ans !== null).length;
    const progress = (answeredCount / 20) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${answeredCount} of 20 answered`;
}

function calculateScore() {
    const questions = questionsData[currentSubject][currentYear];
    let correct = 0;
    
    userAnswers.forEach((answer, index) => {
        if (answer !== null && answer === questions[index].correct) {
            correct++;
        }
    });
    
    return correct;
}

function getAppreciation(percentage) {
    if (percentage >= 90) return { text: 'Excellent!', class: 'excellent', icon: 'fa-trophy' };
    if (percentage >= 80) return { text: 'Very Good!', class: 'very-good', icon: 'fa-star' };
    if (percentage >= 70) return { text: 'Good Job!', class: 'good', icon: 'fa-thumbs-up' };
    if (percentage >= 60) return { text: 'Fair!', class: 'fair', icon: 'fa-check' };
    return { text: 'Keep Practicing!', class: 'poor', icon: 'fa-book' };
}

function finalizeExam() {
    stopTimer();
    
    const timeSpent = 3600 - timerSeconds;
    const correctAnswers = calculateScore();
    const wrongAnswers = 20 - correctAnswers;
    const percentage = (correctAnswers / 20) * 100;
    
    saveExamHistory(currentSubject, currentYear, correctAnswers, timeSpent, percentage);
    
    const appreciation = getAppreciation(percentage);
    const badge = document.getElementById('appreciationBadge');
    badge.className = `appreciation-badge ${appreciation.class}`;
    badge.querySelector('i').className = `fas ${appreciation.icon}`;
    document.getElementById('appreciationText').textContent = appreciation.text;
    
    document.getElementById('scoreDisplay').textContent = `Score: ${correctAnswers}/20`;
    document.getElementById('completeMessage').textContent = `You answered ${correctAnswers} out of 20 questions correctly!`;
    document.getElementById('percentageScore').textContent = `${percentage.toFixed(1)}%`;
    document.getElementById('totalTime').textContent = formatTimeDetailed(timeSpent);
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;
    
    showScreen('completeScreen');
}

function autoSubmitExam() {
    finalizeExam();
}

function submitExam() {
    if (confirm('Are you sure you want to submit your exam?')) {
        finalizeExam();
    }
}

function exitExam() {
    if (confirm('Are you sure you want to exit the exam? Your progress will be lost.')) {
        stopTimer();
        timerSeconds = 3600;
        userAnswers = [];
        showScreen('subjectScreen');
    }
}

function startExam(subject, year) {
    currentSubject = subject;
    currentYear = year;
    timerSeconds = 3600;
    
    document.getElementById('examSubject').textContent = subject;
    document.getElementById('examYear').textContent = `Year ${year}`;
    
    showScreen('examScreen');
    renderAllQuestions();
    startTimer();
}

function showSettings() {
    const userData = loadUserData();
    if (userData) {
        document.getElementById('settingsFirstName').value = userData.firstName;
        document.getElementById('settingsPhoneNumber').value = userData.phoneNumber;
        document.getElementById('settingsSchoolName').value = userData.schoolName;
        if (userData.profileImage) {
            document.getElementById('profileImagePreview').src = userData.profileImage;
        }
    }
    showScreen('settingsScreen');
}

function showHistory() {
    const history = getExamHistory();
    const historyList = document.getElementById('historyList');
    
    if (history.length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: var(--neutral-600); padding: 2rem;">No exam history yet. Start practicing to see your results here!</p>';
    } else {
        historyList.innerHTML = '';
        history.reverse().forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            const date = new Date(item.date);
            const dateStr = date.toLocaleDateString() + ' at ' + date.toLocaleTimeString();
            
            historyItem.innerHTML = `
                <div class="history-info">
                    <div class="history-subject">${item.subject} - Year ${item.year}</div>
                    <div class="history-details">${dateStr} • Time: ${formatTimeDetailed(item.timeSpent)}</div>
                </div>
                <div class="history-score">
                    <div class="history-score-value">${item.percentage.toFixed(1)}%</div>
                    <div class="history-score-label">${item.score}/${item.total}</div>
                </div>
            `;
            historyList.appendChild(historyItem);
        });
    }
    
    showScreen('historyScreen');
}

function showAnalytics() {
    const history = getExamHistory();
    
    if (history.length === 0) {
        document.getElementById('totalExams').textContent = '0';
        document.getElementById('averageScore').textContent = '0%';
        document.getElementById('bestScore').textContent = '0%';
        document.getElementById('currentStreak').textContent = '0 days';
        document.getElementById('subjectPerformanceList').innerHTML = '<p style="text-align: center; color: var(--neutral-600); padding: 2rem;">No data yet. Start taking exams to see your analytics!</p>';
    } else {
        document.getElementById('totalExams').textContent = history.length;
        
        const avgScore = history.reduce((sum, item) => sum + item.percentage, 0) / history.length;
        document.getElementById('averageScore').textContent = avgScore.toFixed(1) + '%';
        
        const bestScore = Math.max(...history.map(item => item.percentage));
        document.getElementById('bestScore').textContent = bestScore.toFixed(1) + '%';
        
        const dates = history.map(item => new Date(item.date).toDateString());
        const uniqueDates = [...new Set(dates)];
        document.getElementById('currentStreak').textContent = uniqueDates.length + ' days';
        
        const subjectScores = {};
        history.forEach(item => {
            if (!subjectScores[item.subject]) {
                subjectScores[item.subject] = [];
            }
            subjectScores[item.subject].push(item.percentage);
        });
        
        const subjectList = document.getElementById('subjectPerformanceList');
        subjectList.innerHTML = '';
        
        Object.keys(subjectScores).forEach(subject => {
            const scores = subjectScores[subject];
            const avgSubjectScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
            
            const item = document.createElement('div');
            item.className = 'subject-performance-item';
            item.innerHTML = `
                <span class="subject-name">${subject}</span>
                <span class="subject-score">${avgSubjectScore.toFixed(1)}%</span>
            `;
            subjectList.appendChild(item);
        });
    }
    
    showScreen('analyticsScreen');
}

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const schoolName = document.getElementById('schoolName').value.trim();
    
    if (firstName && phoneNumber && schoolName) {
        saveUserData(firstName, phoneNumber, schoolName);
        document.getElementById('welcome-name').textContent = firstName;
        document.getElementById('headerProfileName').textContent = firstName;
        showScreen('streamScreen');
    }
});

document.getElementById('settingsForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('settingsFirstName').value.trim();
    const phoneNumber = document.getElementById('settingsPhoneNumber').value.trim();
    const schoolName = document.getElementById('settingsSchoolName').value.trim();
    
    const userData = loadUserData();
    const profileImage = userData?.profileImage;
    
    if (firstName && phoneNumber && schoolName) {
        saveUserData(firstName, phoneNumber, schoolName, profileImage);
        document.getElementById('welcome-name').textContent = firstName;
        document.getElementById('headerProfileName').textContent = firstName;
        alert('Settings saved successfully!');
        showScreen('streamScreen');
    }
});

document.getElementById('socialStream')?.addEventListener('click', function() {
    showOverlay('comingSoonOverlay');
});

document.getElementById('naturalStream')?.addEventListener('click', function() {
    showScreen('subjectScreen');
});

document.querySelectorAll('.category-card[data-subject]').forEach(card => {
    card.addEventListener('click', function() {
        const subject = this.getAttribute('data-subject');
        
        if (subject === 'PRO') {
            showOverlay('proOverlay');
        } else {
            currentSubject = subject;
            document.getElementById('yearSubjectName').textContent = `Choose a year for ${subject}`;
            showScreen('yearScreen');
        }
    });
});

document.querySelectorAll('.year-card').forEach(card => {
    card.addEventListener('click', function() {
        const year = this.getAttribute('data-year');
        startExam(currentSubject, year);
    });
});
