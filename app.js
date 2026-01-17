// ============================================
// FitTrack Pro - Main Application JavaScript
// GitHub Pages Compatible - No Backend Required
// ============================================

// Workout Data from PDF
const workoutProgram = {
    pazartesi: {
        name: "Pazartesi",
        displayName: "Göğüs, Omuz & Triceps",
        muscles: ["Göğüs", "Omuz", "Triceps"],
        exercises: [
            { name: "Plate Loaded Chest Press", target: "Genel Göğüs", sets: 2, reps: "5-6", intensity: "RIR 1", image: "exercise_1.jpeg" },
            { name: "Smith Machine Low Incline Press", target: "Üst Göğüs", sets: 2, reps: "5-6", intensity: "RIR 1", image: "exercise_2.jpeg" },
            { name: "Chest Fly Machine", target: "İç Göğüs", sets: 1, reps: "6-8", intensity: "Failure", image: "exercise_3.jpeg" },
            { name: "Shoulder Press Machine", target: "Ön Omuz", sets: 2, reps: "5-6", intensity: "RIR 1", image: "exercise_4.jpeg" },
            { name: "Lateral Raise", target: "Yan Omuz", sets: 3, reps: "8-10", intensity: "Failure", image: "exercise_5.jpeg" },
            { name: "Triceps Pushdown", target: "Arka Kol (Dış)", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_6.png" },
            { name: "Overhead Rope Extension", target: "Arka Kol (Uzun)", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_7.jpeg" }
        ]
    },
    sali: {
        name: "Salı",
        displayName: "Sırt & Biceps",
        muscles: ["Sırt", "Biceps", "Ön Kol"],
        exercises: [
            { name: "Lat Pulldown", target: "Sırt (Genişlik)", sets: 2, reps: "6-8", intensity: "RIR 1-Failure", image: "exercise_8.png" },
            { name: "Plate Loaded Wide Grip Row", target: "Sırt (Üst/Kalınlık)", sets: 3, reps: "6-8", intensity: "RIR 1-Failure", image: "exercise_9.jpeg" },
            { name: "Cable Row", target: "Sırt (Orta)", sets: 1, reps: "8-10", intensity: "Failure", image: "exercise_10.jpeg" },
            { name: "Dumbbell Curl", target: "Pazu (Biceps)", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_11.png" },
            { name: "Cable Curl", target: "Pazu (Biceps)", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_12.jpeg" },
            { name: "Hammer Curl + Reverse Barbell Curl (SS)", target: "Ön Kol / Brachialis", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_13.jpeg" }
        ]
    },
    carsamba: {
        name: "Çarşamba",
        displayName: "Bacak",
        muscles: ["Quadriceps", "Hamstring", "Kalça"],
        exercises: [
            { name: "Leg Press", target: "Ön Bacak / Kalça", sets: 2, reps: "6-8", intensity: "RIR 1", image: "exercise_14.png" },
            { name: "Smith Machine Squat", target: "Tüm Bacak", sets: 2, reps: "6-8", intensity: "RIR 1", image: "exercise_15.png" },
            { name: "Leg Extension", target: "Ön Bacak (İzole)", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_16.png" },
            { name: "Seated Leg Curl", target: "Arka Bacak", sets: 3, reps: "8-10", intensity: "RIR 1", image: "exercise_17.png" }
        ]
    },
    persembe: {
        name: "Perşembe",
        displayName: "Dinlenme Günü",
        muscles: [],
        exercises: [],
        isRestDay: true
    },
    cuma: {
        name: "Cuma",
        displayName: "Omuz, Göğüs & Triceps",
        muscles: ["Omuz", "Göğüs", "Triceps"],
        exercises: [
            { name: "Shoulder Press Machine", target: "Ön Omuz", sets: 2, reps: "5-6", intensity: "RIR 1", image: "exercise_18.jpeg" },
            { name: "Lateral Raise", target: "Yan Omuz", sets: 3, reps: "8-10", intensity: "Failure", image: "exercise_19.jpeg" },
            { name: "Smith Machine Low Incline Press", target: "Üst Göğüs", sets: 2, reps: "5-6", intensity: "RIR 1", image: "exercise_20.jpeg" },
            { name: "Chest Fly Machine", target: "İç Göğüs", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_21.jpeg" },
            { name: "Cable Rear Delt Fly", target: "Arka Omuz", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_22.png" },
            { name: "Triceps Pushdown", target: "Arka Kol", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_23.png" },
            { name: "Overhead Rope Extension", target: "Arka Kol", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_24.jpeg" }
        ]
    },
    cumartesi: {
        name: "Cumartesi",
        displayName: "Sırt, Biceps & Bacak",
        muscles: ["Sırt", "Biceps", "Bacak"],
        exercises: [
            { name: "Plate Loaded Wide Grip Row", target: "Sırt (Üst)", sets: 3, reps: "6-8", intensity: "RIR 1-Failure", image: "exercise_25.jpeg" },
            { name: "Close Grip Lat Pulldown", target: "Sırt (Alt Kanat)", sets: 3, reps: "6-8", intensity: "RIR 1-Failure", image: "exercise_26.png" },
            { name: "Cable Curl", target: "Pazu", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_27.jpeg" },
            { name: "Hammer Curl + Reverse Barbell Curl (SS)", target: "Ön Kol", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_28.jpeg" },
            { name: "Leg Press", target: "Ön Bacak", sets: 2, reps: "6-8", intensity: "RIR 1", image: "exercise_29.png" },
            { name: "Leg Extension", target: "Ön Bacak", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_30.png" },
            { name: "Seated Leg Curl", target: "Arka Bacak", sets: 1, reps: "8-10", intensity: "Failure", image: "exercise_31.png" }
        ]
    },
    pazar: {
        name: "Pazar",
        displayName: "Dinlenme Günü",
        muscles: [],
        exercises: [],
        isRestDay: true
    }
};

// Day mapping
const dayMapping = {
    0: 'pazar',
    1: 'pazartesi',
    2: 'sali',
    3: 'carsamba',
    4: 'persembe',
    5: 'cuma',
    6: 'cumartesi'
};

const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

// App State
let appState = {
    currentPage: 'home',
    activeWorkout: null,
    currentExerciseIndex: 0,
    currentSetIndex: 0,
    workoutStartTime: null,
    workoutTimer: null,
    restTimer: null,
    restDuration: 60,
    isPaused: false,
    completedSets: [],
    userData: {
        name: 'Sporcu',
        streak: 0,
        totalWorkouts: 0,
        totalTime: 0,
        workoutHistory: [],
        settings: {
            restDuration: 60,
            notifications: true,
            vibration: true,
            sound: true
        }
    },
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear()
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    initSplashScreen();
    initNavigation();
    initHomePage();
    initSchedulePage();
    initWorkoutPage();
    initStatsPage();
    initProfilePage();
    initModals();
});

// Splash Screen
function initSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const mainApp = document.getElementById('main-app');

    setTimeout(() => {
        splashScreen.classList.add('hidden');
        mainApp.classList.remove('hidden');
    }, 2500);
}

// Navigation
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const page = item.dataset.page;
            navigateTo(page);
        });
    });
}

function navigateTo(page) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.toggle('active', p.id === `page-${page}`);
    });

    appState.currentPage = page;

    // Refresh page content
    if (page === 'home') initHomePage();
    if (page === 'stats') updateStatsPage();
}

// Home Page
function initHomePage() {
    updateGreeting();
    updateTodayCard();
    updateWeekProgress();
    updateQuickStats();
    updateUpcomingWorkouts();
}

function updateGreeting() {
    const greetingTime = document.querySelector('.greeting-time');
    const userName = document.querySelector('.user-name');
    const hour = new Date().getHours();

    let greeting = 'Günaydın';
    if (hour >= 12 && hour < 18) greeting = 'İyi günler';
    else if (hour >= 18) greeting = 'İyi akşamlar';

    greetingTime.textContent = `${greeting},`;
    userName.textContent = appState.userData.name;
}

function updateTodayCard() {
    const today = new Date();
    const dayKey = dayMapping[today.getDay()];
    const todayWorkout = workoutProgram[dayKey];

    document.getElementById('today-workout-name').textContent = todayWorkout.displayName;
    document.getElementById('exercise-count').textContent = todayWorkout.exercises.length;

    const musclesContainer = document.getElementById('today-muscles');
    musclesContainer.innerHTML = '';

    if (todayWorkout.isRestDay) {
        musclesContainer.innerHTML = '<span class="muscle-tag">🌟 Dinlenme Günü</span>';
        document.getElementById('start-today-workout').textContent = 'Dinlenme Günü';
        document.getElementById('start-today-workout').disabled = true;
        document.getElementById('start-today-workout').style.opacity = '0.5';
    } else {
        todayWorkout.muscles.forEach(muscle => {
            musclesContainer.innerHTML += `<span class="muscle-tag">${muscle}</span>`;
        });
        document.getElementById('start-today-workout').innerHTML = `
            <span>Antrenmana Başla</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
            </svg>
        `;
        document.getElementById('start-today-workout').disabled = false;
        document.getElementById('start-today-workout').style.opacity = '1';
    }

    // Today badge
    const todayBadge = document.getElementById('today-badge');
    if (todayWorkout.isRestDay) {
        todayBadge.innerHTML = '😴 Dinlen';
    } else {
        todayBadge.innerHTML = `<span id="exercise-count">${todayWorkout.exercises.length}</span> Egzersiz`;
    }

    // Start workout button
    document.getElementById('start-today-workout').onclick = () => {
        if (!todayWorkout.isRestDay) {
            startWorkout(dayKey);
        }
    };
}

function updateWeekProgress() {
    const container = document.getElementById('week-progress');
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Monday

    container.innerHTML = '';

    const weekDays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    const dayKeys = ['pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'cumartesi', 'pazar'];

    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        const dayNum = date.getDate();
        const isToday = date.toDateString() === today.toDateString();
        const workout = workoutProgram[dayKeys[i]];
        const dateStr = date.toISOString().split('T')[0];
        const isCompleted = appState.userData.workoutHistory.some(h => h.date === dateStr);

        let classes = 'week-day';
        if (isToday) classes += ' today';
        if (isCompleted) classes += ' completed';
        if (workout.isRestDay) classes += ' rest';

        container.innerHTML += `
            <div class="${classes}">
                <span class="week-day-name">${weekDays[i]}</span>
                <div class="week-day-circle">${isCompleted ? '✓' : dayNum}</div>
            </div>
        `;
    }

    // Update week dates
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    document.getElementById('week-dates').textContent =
        `${startOfWeek.getDate()} - ${endOfWeek.getDate()} ${monthNames[endOfWeek.getMonth()]}`;
}

function updateQuickStats() {
    document.getElementById('streak-count').textContent = appState.userData.streak;
    document.getElementById('total-workouts').textContent = appState.userData.totalWorkouts;
    document.getElementById('total-time').textContent = appState.userData.totalTime;
}

function updateUpcomingWorkouts() {
    const container = document.getElementById('upcoming-workouts');
    const today = new Date();
    container.innerHTML = '';

    let count = 0;
    for (let i = 1; i <= 7 && count < 3; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dayKey = dayMapping[date.getDay()];
        const workout = workoutProgram[dayKey];

        if (!workout.isRestDay) {
            container.innerHTML += `
                <div class="upcoming-item" data-day="${dayKey}">
                    <div class="upcoming-day">
                        <span class="upcoming-day-name">${dayNames[date.getDay()].substring(0, 3)}</span>
                        <span class="upcoming-day-num">${date.getDate()}</span>
                    </div>
                    <div class="upcoming-info">
                        <div class="upcoming-title">${workout.displayName}</div>
                        <div class="upcoming-meta">${workout.exercises.length} egzersiz • ${workout.muscles.join(', ')}</div>
                    </div>
                    <div class="upcoming-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </div>
                </div>
            `;
            count++;
        }
    }

    // Add click handlers
    container.querySelectorAll('.upcoming-item').forEach(item => {
        item.addEventListener('click', () => {
            const dayKey = item.dataset.day;
            navigateTo('schedule');
            setTimeout(() => {
                const tab = document.querySelector(`.schedule-tab[data-day="${dayKey}"]`);
                if (tab) tab.click();
            }, 100);
        });
    });
}

// Schedule Page
function initSchedulePage() {
    const tabs = document.querySelectorAll('.schedule-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderSchedule(tab.dataset.day);
        });
    });

    renderSchedule('all');
}

function renderSchedule(filter) {
    const container = document.getElementById('schedule-list');
    container.innerHTML = '';

    const days = filter === 'all'
        ? Object.keys(workoutProgram)
        : [filter];

    days.forEach(dayKey => {
        const workout = workoutProgram[dayKey];

        let dayHtml = `
            <div class="schedule-day" data-day="${dayKey}">
                <div class="schedule-day-header">
                    <div class="schedule-day-title">
                        <span>${workout.name}</span>
                        ${workout.isRestDay ? '<span class="schedule-day-badge">Dinlenme</span>' : ''}
                    </div>
                    ${!workout.isRestDay ? `<span class="schedule-day-badge">${workout.exercises.length} Egzersiz</span>` : ''}
                </div>
        `;

        if (workout.isRestDay) {
            dayHtml += `
                <div class="rest-day-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                    <p>Bu gün dinlenme günü. Kaslarının toparlanması için dinlen!</p>
                </div>
            `;
        } else {
            dayHtml += '<div class="schedule-exercises">';
            workout.exercises.forEach((exercise, index) => {
                dayHtml += `
                    <div class="exercise-item" data-exercise="${index}">
                        <div class="exercise-image">
                            <img src="images/${exercise.image}" alt="${exercise.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'exercise-image-placeholder\\'><svg viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\'><path d=\\'M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14 4.14 5.57 2 7.71 3.43 9.14 2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22 14.86 20.57 16.29 22 18.43 19.86 19.86 21.29 21.29 19.86 19.86 18.43 22 16.29 20.57 14.86z\\'/></svg></div>'">
                        </div>
                        <div class="exercise-details">
                            <div class="exercise-name">${exercise.name}</div>
                            <div class="exercise-target">${exercise.target}</div>
                            <div class="exercise-sets-reps">
                                <span>${exercise.sets} set × ${exercise.reps} tekrar</span>
                                <span>${exercise.intensity}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
            dayHtml += '</div>';
        }

        dayHtml += '</div>';
        container.innerHTML += dayHtml;
    });

    // Add start workout button for each day
    days.forEach(dayKey => {
        const workout = workoutProgram[dayKey];
        if (!workout.isRestDay) {
            const dayElement = container.querySelector(`.schedule-day[data-day="${dayKey}"]`);
            if (dayElement) {
                const startBtn = document.createElement('button');
                startBtn.className = 'start-workout-btn';
                startBtn.style.marginTop = '16px';
                startBtn.innerHTML = `
                    <span>Bu Antrenmanı Başlat</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                `;
                startBtn.onclick = () => startWorkout(dayKey);
                dayElement.appendChild(startBtn);
            }
        }
    });
}

// Workout Page
function initWorkoutPage() {
    document.getElementById('start-workout-btn').addEventListener('click', () => {
        const today = new Date();
        const dayKey = dayMapping[today.getDay()];
        if (!workoutProgram[dayKey].isRestDay) {
            startWorkout(dayKey);
        } else {
            alert('Bugün dinlenme günü! Başka bir gün seçin.');
        }
    });

    document.getElementById('cancel-workout-btn').addEventListener('click', cancelWorkout);
    document.getElementById('pause-workout-btn').addEventListener('click', togglePause);
    document.getElementById('complete-set-btn').addEventListener('click', completeSet);
    document.getElementById('finish-workout-btn').addEventListener('click', finishWorkout);
    document.getElementById('skip-rest').addEventListener('click', skipRest);
    document.getElementById('add-time').addEventListener('click', addRestTime);
}

function startWorkout(dayKey) {
    const workout = workoutProgram[dayKey];
    if (!workout || workout.isRestDay) return;

    appState.activeWorkout = {
        dayKey,
        workout,
        startTime: Date.now(),
        completedExercises: 0,
        totalSets: workout.exercises.reduce((sum, ex) => sum + ex.sets, 0)
    };
    appState.currentExerciseIndex = 0;
    appState.currentSetIndex = 0;
    appState.completedSets = workout.exercises.map(ex => Array(ex.sets).fill(false));
    appState.isPaused = false;

    // Navigate to workout page
    navigateTo('workout');

    // Show active workout UI
    document.getElementById('no-workout').classList.add('hidden');
    document.getElementById('active-workout').classList.remove('hidden');
    document.getElementById('workout-complete').classList.add('hidden');

    // Update header
    document.getElementById('workout-day-title').textContent = workout.displayName;
    document.getElementById('exercises-total').textContent = workout.exercises.length;

    // Start timer
    startWorkoutTimer();

    // Render current exercise
    renderCurrentExercise();
    renderUpcomingExercises();
    updateWorkoutProgress();
}

function startWorkoutTimer() {
    appState.workoutStartTime = Date.now();

    if (appState.workoutTimer) clearInterval(appState.workoutTimer);

    appState.workoutTimer = setInterval(() => {
        if (!appState.isPaused) {
            const elapsed = Date.now() - appState.workoutStartTime;
            document.getElementById('workout-timer').textContent = formatTime(elapsed);
        }
    }, 1000);
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function renderCurrentExercise() {
    const exercise = appState.activeWorkout.workout.exercises[appState.currentExerciseIndex];

    // Update exercise image
    const exerciseImg = document.getElementById('current-exercise-img');
    exerciseImg.src = `images/${exercise.image}`;
    exerciseImg.alt = exercise.name;
    exerciseImg.onerror = function () {
        this.style.display = 'none';
    };

    document.getElementById('current-exercise-num').textContent = appState.currentExerciseIndex + 1;
    document.getElementById('exercise-name').textContent = exercise.name;
    document.getElementById('exercise-target').textContent = exercise.target;
    document.getElementById('exercise-sets').textContent = `${exercise.sets} Set`;
    document.getElementById('exercise-reps').textContent = `${exercise.reps} Tekrar`;
    document.getElementById('exercise-intensity').textContent = exercise.intensity;

    // Render sets
    const setsContainer = document.getElementById('sets-container');
    setsContainer.innerHTML = '';

    for (let i = 0; i < exercise.sets; i++) {
        const isCompleted = appState.completedSets[appState.currentExerciseIndex][i];
        const isActive = i === appState.currentSetIndex && !isCompleted;

        const setBtn = document.createElement('button');
        setBtn.className = 'set-btn';
        if (isActive) setBtn.classList.add('active');
        if (isCompleted) setBtn.classList.add('completed');

        setBtn.innerHTML = isCompleted
            ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
            : `<span>Set</span><span>${i + 1}</span>`;

        setBtn.onclick = () => {
            if (!isCompleted) {
                appState.currentSetIndex = i;
                renderCurrentExercise();
            }
        };

        setsContainer.appendChild(setBtn);
    }

    // Update complete button text
    const completeBtn = document.getElementById('complete-set-btn');
    const allSetsCompleted = appState.completedSets[appState.currentExerciseIndex].every(s => s);

    if (allSetsCompleted) {
        const isLastExercise = appState.currentExerciseIndex === appState.activeWorkout.workout.exercises.length - 1;
        completeBtn.innerHTML = isLastExercise
            ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg><span>Antrenmanı Bitir</span>`
            : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg><span>Sonraki Egzersiz</span>`;
    } else {
        completeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg><span>Seti Tamamla</span>`;
    }
}

function renderUpcomingExercises() {
    const container = document.getElementById('upcoming-exercises');
    container.innerHTML = '';

    const exercises = appState.activeWorkout.workout.exercises;
    const startIdx = appState.currentExerciseIndex + 1;

    for (let i = startIdx; i < Math.min(startIdx + 3, exercises.length); i++) {
        const exercise = exercises[i];
        container.innerHTML += `
            <div class="upcoming-exercise-item">
                <div class="upcoming-exercise-num">${i + 1}</div>
                <div class="upcoming-exercise-info">
                    <div class="upcoming-exercise-name">${exercise.name}</div>
                    <div class="upcoming-exercise-meta">${exercise.sets} set × ${exercise.reps} tekrar</div>
                </div>
            </div>
        `;
    }

    if (container.innerHTML === '') {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 16px;">Bu son egzersiz!</p>';
    }
}

function updateWorkoutProgress() {
    const totalSets = appState.completedSets.flat().length;
    const completedSets = appState.completedSets.flat().filter(s => s).length;
    const progress = (completedSets / totalSets) * 100;

    document.getElementById('workout-progress-fill').style.width = `${progress}%`;

    // Count completed exercises
    const completedExercises = appState.completedSets.filter(sets => sets.every(s => s)).length;
    document.getElementById('exercises-done').textContent = completedExercises;
}

function completeSet() {
    const currentExercise = appState.activeWorkout.workout.exercises[appState.currentExerciseIndex];
    const currentSets = appState.completedSets[appState.currentExerciseIndex];
    const allSetsCompleted = currentSets.every(s => s);

    if (allSetsCompleted) {
        // Move to next exercise or finish
        const isLastExercise = appState.currentExerciseIndex === appState.activeWorkout.workout.exercises.length - 1;

        if (isLastExercise) {
            completeWorkout();
        } else {
            appState.currentExerciseIndex++;
            appState.currentSetIndex = 0;
            renderCurrentExercise();
            renderUpcomingExercises();
            updateWorkoutProgress();
        }
    } else {
        // Complete current set
        appState.completedSets[appState.currentExerciseIndex][appState.currentSetIndex] = true;

        // Vibrate if enabled
        if (appState.userData.settings.vibration && navigator.vibrate) {
            navigator.vibrate(100);
        }

        // Check if more sets remain
        const nextSetIndex = currentSets.findIndex((s, i) => i > appState.currentSetIndex && !s);

        if (nextSetIndex !== -1) {
            // Show rest timer
            showRestTimer();
            appState.currentSetIndex = nextSetIndex;
        }

        renderCurrentExercise();
        updateWorkoutProgress();
    }
}

function showRestTimer() {
    const restTimer = document.getElementById('rest-timer');
    restTimer.classList.remove('hidden');

    let remaining = appState.userData.settings.restDuration;
    const total = remaining;

    document.getElementById('rest-time').textContent = remaining;

    // Add SVG gradient definition if not exists
    const restProgress = document.getElementById('rest-progress');
    if (!document.getElementById('restGradient')) {
        const svg = restProgress.closest('svg');
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        defs.innerHTML = `
            <linearGradient id="restGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#667eea"/>
                <stop offset="100%" stop-color="#764ba2"/>
            </linearGradient>
        `;
        svg.insertBefore(defs, svg.firstChild);
    }

    appState.restTimer = setInterval(() => {
        remaining--;
        document.getElementById('rest-time').textContent = remaining;

        // Update circle progress
        const circumference = 2 * Math.PI * 45;
        const offset = circumference * (1 - remaining / total);
        restProgress.style.strokeDashoffset = offset;

        if (remaining <= 0) {
            clearInterval(appState.restTimer);
            hideRestTimer();

            // Vibrate when rest is complete
            if (appState.userData.settings.vibration && navigator.vibrate) {
                navigator.vibrate([100, 50, 100]);
            }
        }
    }, 1000);
}

function hideRestTimer() {
    const restTimer = document.getElementById('rest-timer');
    restTimer.classList.add('hidden');
    if (appState.restTimer) {
        clearInterval(appState.restTimer);
        appState.restTimer = null;
    }
}

function skipRest() {
    hideRestTimer();
}

function addRestTime() {
    const restTime = document.getElementById('rest-time');
    const current = parseInt(restTime.textContent);
    restTime.textContent = current + 30;
}

function togglePause() {
    appState.isPaused = !appState.isPaused;
    const pauseBtn = document.getElementById('pause-workout-btn');

    if (appState.isPaused) {
        pauseBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
        `;
    } else {
        pauseBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
            </svg>
        `;
    }
}

function cancelWorkout() {
    if (confirm('Antrenmanı iptal etmek istediğinize emin misiniz?')) {
        endWorkout(false);
    }
}

function completeWorkout() {
    const elapsed = Date.now() - appState.workoutStartTime;
    const totalSets = appState.completedSets.flat().filter(s => s).length;

    document.getElementById('complete-time').textContent = formatTime(elapsed);
    document.getElementById('complete-exercises').textContent = appState.activeWorkout.workout.exercises.length;
    document.getElementById('complete-sets').textContent = totalSets;

    document.getElementById('active-workout').classList.add('hidden');
    document.getElementById('workout-complete').classList.remove('hidden');

    // Save workout to history
    const workoutData = {
        date: new Date().toISOString().split('T')[0],
        day: appState.activeWorkout.workout.name,
        displayName: appState.activeWorkout.workout.displayName,
        duration: Math.floor(elapsed / 60000), // minutes
        exercises: appState.activeWorkout.workout.exercises.length,
        sets: totalSets,
        timestamp: Date.now()
    };

    appState.userData.workoutHistory.push(workoutData);
    appState.userData.totalWorkouts++;
    appState.userData.totalTime += workoutData.duration;

    // Update streak
    updateStreak();

    saveUserData();

    // Stop timer
    if (appState.workoutTimer) {
        clearInterval(appState.workoutTimer);
        appState.workoutTimer = null;
    }
}

function finishWorkout() {
    endWorkout(true);
    navigateTo('home');
}

function endWorkout(completed) {
    if (appState.workoutTimer) {
        clearInterval(appState.workoutTimer);
        appState.workoutTimer = null;
    }

    if (appState.restTimer) {
        clearInterval(appState.restTimer);
        appState.restTimer = null;
    }

    appState.activeWorkout = null;
    appState.currentExerciseIndex = 0;
    appState.currentSetIndex = 0;
    appState.completedSets = [];

    document.getElementById('no-workout').classList.remove('hidden');
    document.getElementById('active-workout').classList.add('hidden');
    document.getElementById('workout-complete').classList.add('hidden');
    document.getElementById('rest-timer').classList.add('hidden');

    if (completed) {
        initHomePage();
    }
}

function updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const history = appState.userData.workoutHistory;

    if (history.length === 0) {
        appState.userData.streak = 1;
        return;
    }

    // Sort by date descending
    const sorted = [...history].sort((a, b) => new Date(b.date) - new Date(a.date));

    let streak = 0;
    let checkDate = new Date(today);

    for (const workout of sorted) {
        const workoutDate = new Date(workout.date);
        const diffDays = Math.floor((checkDate - workoutDate) / (1000 * 60 * 60 * 24));

        if (diffDays <= 1) {
            streak++;
            checkDate = workoutDate;
        } else {
            break;
        }
    }

    appState.userData.streak = Math.max(appState.userData.streak, streak);
}

// Stats Page
function initStatsPage() {
    document.getElementById('prev-month').addEventListener('click', () => {
        appState.currentMonth--;
        if (appState.currentMonth < 0) {
            appState.currentMonth = 11;
            appState.currentYear--;
        }
        updateStatsPage();
    });

    document.getElementById('next-month').addEventListener('click', () => {
        appState.currentMonth++;
        if (appState.currentMonth > 11) {
            appState.currentMonth = 0;
            appState.currentYear++;
        }
        updateStatsPage();
    });

    updateStatsPage();
}

function updateStatsPage() {
    // Overview stats
    document.getElementById('stats-total-workouts').textContent = appState.userData.totalWorkouts;
    document.getElementById('stats-total-time').textContent = appState.userData.totalTime;
    document.getElementById('stats-streak').textContent = appState.userData.streak;

    // Calendar
    renderCalendar();

    // Muscle stats
    renderMuscleStats();

    // Activity list
    renderActivityList();
}

function renderCalendar() {
    const container = document.getElementById('calendar-grid');
    container.innerHTML = '';

    // Update month display
    document.getElementById('current-month').textContent =
        `${monthNames[appState.currentMonth]} ${appState.currentYear}`;

    // Add day headers
    const dayHeaders = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
    dayHeaders.forEach(day => {
        container.innerHTML += `<div class="calendar-header">${day}</div>`;
    });

    // Get first day of month
    const firstDay = new Date(appState.currentYear, appState.currentMonth, 1);
    let startDay = firstDay.getDay() - 1; // Monday = 0
    if (startDay < 0) startDay = 6;

    // Get days in month
    const daysInMonth = new Date(appState.currentYear, appState.currentMonth + 1, 0).getDate();

    // Today
    const today = new Date();
    const isCurrentMonth = today.getMonth() === appState.currentMonth && today.getFullYear() === appState.currentYear;

    // Add empty cells for days before first day
    for (let i = 0; i < startDay; i++) {
        container.innerHTML += '<div class="calendar-day empty"></div>';
    }

    // Add days
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${appState.currentYear}-${String(appState.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const hasWorkout = appState.userData.workoutHistory.some(h => h.date === dateStr);
        const isToday = isCurrentMonth && today.getDate() === day;

        let classes = 'calendar-day';
        if (isToday) classes += ' today';
        if (hasWorkout) classes += ' workout-done';

        container.innerHTML += `<div class="${classes}">${day}</div>`;
    }
}

function renderMuscleStats() {
    const container = document.getElementById('muscle-stats');
    container.innerHTML = '';

    // Count muscle group workouts
    const muscleCount = {};

    appState.userData.workoutHistory.forEach(workout => {
        const dayKey = Object.keys(workoutProgram).find(k => workoutProgram[k].name === workout.day);
        if (dayKey && workoutProgram[dayKey].muscles) {
            workoutProgram[dayKey].muscles.forEach(muscle => {
                muscleCount[muscle] = (muscleCount[muscle] || 0) + 1;
            });
        }
    });

    // Default muscles if no history
    const defaultMuscles = ['Göğüs', 'Sırt', 'Omuz', 'Biceps', 'Triceps', 'Bacak'];
    defaultMuscles.forEach(muscle => {
        if (!muscleCount[muscle]) muscleCount[muscle] = 0;
    });

    const maxCount = Math.max(...Object.values(muscleCount), 1);

    Object.entries(muscleCount).forEach(([muscle, count]) => {
        const percentage = (count / maxCount) * 100;
        container.innerHTML += `
            <div class="muscle-stat-item">
                <span class="muscle-stat-name">${muscle}</span>
                <div class="muscle-stat-bar">
                    <div class="muscle-stat-fill" style="width: ${percentage}%"></div>
                </div>
                <span class="muscle-stat-value">${count}</span>
            </div>
        `;
    });
}

function renderActivityList() {
    const container = document.getElementById('activity-list');
    container.innerHTML = '';

    const recentWorkouts = [...appState.userData.workoutHistory]
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 5);

    if (recentWorkouts.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 24px;">Henüz antrenman geçmişi yok</p>';
        return;
    }

    recentWorkouts.forEach(workout => {
        const date = new Date(workout.date);
        const dateStr = `${date.getDate()} ${monthNames[date.getMonth()]}`;

        container.innerHTML += `
            <div class="activity-item">
                <div class="activity-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <div class="activity-info">
                    <div class="activity-title">${workout.displayName}</div>
                    <div class="activity-date">${dateStr}</div>
                </div>
                <div class="activity-duration">${workout.duration} dk</div>
            </div>
        `;
    });
}

// Profile Page
function initProfilePage() {
    const nameInput = document.getElementById('profile-name');
    nameInput.value = appState.userData.name;

    nameInput.addEventListener('change', () => {
        appState.userData.name = nameInput.value;
        saveUserData();
        updateGreeting();
    });

    // Rest duration
    const restSelect = document.getElementById('rest-duration');
    restSelect.value = appState.userData.settings.restDuration;
    restSelect.addEventListener('change', () => {
        appState.userData.settings.restDuration = parseInt(restSelect.value);
        saveUserData();
    });

    // Toggles
    document.getElementById('notifications-toggle').checked = appState.userData.settings.notifications;
    document.getElementById('vibration-toggle').checked = appState.userData.settings.vibration;
    document.getElementById('sound-toggle').checked = appState.userData.settings.sound;

    document.getElementById('notifications-toggle').addEventListener('change', (e) => {
        appState.userData.settings.notifications = e.target.checked;
        saveUserData();
    });

    document.getElementById('vibration-toggle').addEventListener('change', (e) => {
        appState.userData.settings.vibration = e.target.checked;
        saveUserData();
    });

    document.getElementById('sound-toggle').addEventListener('change', (e) => {
        appState.userData.settings.sound = e.target.checked;
        saveUserData();
    });

    // Export data
    document.getElementById('export-data-btn').addEventListener('click', exportData);

    // Reset data
    document.getElementById('reset-data-btn').addEventListener('click', resetData);
}

function exportData() {
    const data = JSON.stringify(appState.userData, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `fittrack-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function resetData() {
    if (confirm('Tüm verileriniz silinecek. Emin misiniz?')) {
        localStorage.removeItem('fittrack-data');
        location.reload();
    }
}

// Modals
function initModals() {
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
}

function openModal(title, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

// Local Storage
function saveUserData() {
    localStorage.setItem('fittrack-data', JSON.stringify(appState.userData));
}

function loadUserData() {
    const saved = localStorage.getItem('fittrack-data');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            appState.userData = { ...appState.userData, ...parsed };
        } catch (e) {
            console.error('Error loading user data:', e);
        }
    }
}

// Service Worker Registration for PWA (optional for GitHub Pages)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Service worker registration failed - not critical for GitHub Pages
        });
    });
}
