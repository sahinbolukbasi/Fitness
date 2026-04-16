// ============================================
// FitTrack Pro - Main Application JavaScript
// GitHub Pages Compatible - No Backend Required
// ============================================

// Workout Templates (Esnek Şablonlar)
const defaultWorkoutTemplates = [
    {
        id: 'chest-shoulder-tri',
        name: 'Göğüs, Omuz & Triceps',
        muscles: ["Göğüs", "Omuz", "Triceps"],
        exercises: [
            { id: "e1", name: "Plate Loaded Chest Press", target: "Genel Göğüs", sets: 2, reps: "5-6", intensity: "RIR 1", image: "exercise_1.jpeg" },
            { id: "e2", name: "Smith Machine Low Incline Press", target: "Üst Göğüs", sets: 2, reps: "5-6", intensity: "RIR 1", image: "exercise_2.jpeg" },
            { id: "e3", name: "Chest Fly Machine", target: "İç Göğüs", sets: 1, reps: "6-8", intensity: "Failure", image: "exercise_3.jpeg" },
            { id: "e4", name: "Shoulder Press Machine", target: "Ön Omuz", sets: 2, reps: "5-6", intensity: "RIR 1", image: "exercise_4.jpeg" },
            { id: "e5", name: "Lateral Raise", target: "Yan Omuz", sets: 3, reps: "8-10", intensity: "Failure", image: "exercise_5.jpeg" },
            { id: "e6", name: "Triceps Pushdown", target: "Arka Kol (Dış)", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_6.png" },
            { id: "e7", name: "Overhead Rope Extension", target: "Arka Kol (Uzun)", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_7.jpeg" }
        ]
    },
    {
        id: 'back-biceps',
        name: 'Sırt & Biceps',
        muscles: ["Sırt", "Biceps", "Ön Kol"],
        exercises: [
            { id: "e8", name: "Lat Pulldown", target: "Sırt (Genişlik)", sets: 2, reps: "6-8", intensity: "RIR 1-Failure", image: "exercise_8.png" },
            { id: "e9", name: "Plate Loaded Wide Grip Row", target: "Sırt (Üst/Kalınlık)", sets: 3, reps: "6-8", intensity: "RIR 1-Failure", image: "exercise_9.jpeg" },
            { id: "e10", name: "Cable Row", target: "Sırt (Orta)", sets: 1, reps: "8-10", intensity: "Failure", image: "exercise_10.jpeg" },
            { id: "e11", name: "Dumbbell Curl", target: "Pazu (Biceps)", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_11.png" },
            { id: "e12", name: "Cable Curl", target: "Pazu (Biceps)", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_12.jpeg" },
            { id: "e13", name: "Hammer Curl + Reverse Barbell Curl (SS)", target: "Ön Kol / Brachialis", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_13.jpeg" }
        ]
    },
    {
        id: 'legs',
        name: 'Bacak',
        muscles: ["Quadriceps", "Hamstring", "Kalça"],
        exercises: [
            { id: "e14", name: "Leg Press", target: "Ön Bacak / Kalça", sets: 2, reps: "6-8", intensity: "RIR 1", image: "exercise_14.png" },
            { id: "e15", name: "Smith Machine Squat", target: "Tüm Bacak", sets: 2, reps: "6-8", intensity: "RIR 1", image: "exercise_15.png" },
            { id: "e16", name: "Leg Extension", target: "Ön Bacak (İzole)", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_16.png" },
            { id: "e17", name: "Seated Leg Curl", target: "Arka Bacak", sets: 3, reps: "8-10", intensity: "RIR 1", image: "exercise_17.png" }
        ]
    },
    {
        id: 'shoulder-chest-tri',
        name: 'Omuz, Göğüs & Triceps',
        muscles: ["Omuz", "Göğüs", "Triceps"],
        exercises: [
            { id: "e18", name: "Shoulder Press Machine", target: "Ön Omuz", sets: 2, reps: "5-6", intensity: "RIR 1", image: "exercise_18.jpeg" },
            { id: "e19", name: "Lateral Raise", target: "Yan Omuz", sets: 3, reps: "8-10", intensity: "Failure", image: "exercise_19.jpeg" },
            { id: "e20", name: "Smith Machine Low Incline Press", target: "Üst Göğüs", sets: 2, reps: "5-6", intensity: "RIR 1", image: "exercise_20.jpeg" },
            { id: "e21", name: "Chest Fly Machine", target: "İç Göğüs", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_21.jpeg" },
            { id: "e22", name: "Cable Rear Delt Fly", target: "Arka Omuz", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_22.png" },
            { id: "e23", name: "Triceps Pushdown", target: "Arka Kol", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_23.png" },
            { id: "e24", name: "Overhead Rope Extension", target: "Arka Kol", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_24.jpeg" }
        ]
    },
    {
        id: 'back-biceps-legs',
        name: 'Sırt, Biceps & Bacak',
        muscles: ["Sırt", "Biceps", "Bacak"],
        exercises: [
            { id: "e25", name: "Plate Loaded Wide Grip Row", target: "Sırt (Üst)", sets: 3, reps: "6-8", intensity: "RIR 1-Failure", image: "exercise_25.jpeg" },
            { id: "e26", name: "Close Grip Lat Pulldown", target: "Sırt (Alt Kanat)", sets: 3, reps: "6-8", intensity: "RIR 1-Failure", image: "exercise_26.png" },
            { id: "e27", name: "Cable Curl", target: "Pazu", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_27.jpeg" },
            { id: "e28", name: "Hammer Curl + Reverse Barbell Curl (SS)", target: "Ön Kol", sets: 2, reps: "8-10", intensity: "Failure", image: "exercise_28.jpeg" },
            { id: "e29", name: "Leg Press", target: "Ön Bacak", sets: 2, reps: "6-8", intensity: "RIR 1", image: "exercise_29.png" },
            { id: "e30", name: "Leg Extension", target: "Ön Bacak", sets: 2, reps: "6-8", intensity: "Failure", image: "exercise_30.png" },
            { id: "e31", name: "Seated Leg Curl", target: "Arka Bacak", sets: 1, reps: "8-10", intensity: "Failure", image: "exercise_31.png" }
        ]
    }
];

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
    workoutStartTime: null,
    workoutTimer: null,
    restTimer: null,
    restDuration: 60,
    isPaused: false,
    userData: {
        version: 2, // Yeni veri modeli versiyonu
        name: 'Sporcu',
        streak: 0,
        totalWorkouts: 0,
        totalTime: 0,
        workoutHistory: [],
        workoutTemplates: [...defaultWorkoutTemplates],
        weeklySchedule: {
            // Başlangıçta eski programa benzer bir atama yapıyoruz
            pazartesi: ['chest-shoulder-tri'],
            sali: ['back-biceps'],
            carsamba: ['legs'],
            persembe: [], // Dinlenme
            cuma: ['shoulder-chest-tri'],
            cumartesi: ['back-biceps-legs'],
            pazar: [] // Dinlenme
        },
        exerciseWeights: {}, // Kilo takibi
        personalRecords: {}, // PR takibi
        exerciseNotes: {}, // Egzersiz notları
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

// Helper for Templates
function getDayTemplates(dayKey) {
    const templateIds = appState.userData.weeklySchedule[dayKey] || [];
    return templateIds.map(id => appState.userData.workoutTemplates.find(t => t.id === id)).filter(Boolean);
}

function getDayExercises(dayKey) {
    const templates = getDayTemplates(dayKey);
    let allExercises = [];
    templates.forEach(t => {
        allExercises = allExercises.concat(t.exercises);
    });
    return allExercises;
}

function getDayMuscles(dayKey) {
    const templates = getDayTemplates(dayKey);
    const muscles = new Set();
    templates.forEach(t => t.muscles.forEach(m => muscles.add(m)));
    return Array.from(muscles);
}

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
    const templates = getDayTemplates(dayKey);
    const exercises = getDayExercises(dayKey);
    const muscles = getDayMuscles(dayKey);
    const isRestDay = templates.length === 0;

    const displayName = isRestDay ? "Dinlenme Günü" : templates.map(t => t.name).join(" + ");

    document.getElementById('today-workout-name').textContent = displayName;
    document.getElementById('exercise-count').textContent = exercises.length;

    const musclesContainer = document.getElementById('today-muscles');
    musclesContainer.innerHTML = '';

    if (isRestDay) {
        musclesContainer.innerHTML = '<span class="muscle-tag">🌟 Dinlenme Günü</span>';
        document.getElementById('start-today-workout').innerHTML = '<span>Dinlenme Günü</span>';
        document.getElementById('start-today-workout').disabled = true;
        document.getElementById('start-today-workout').style.opacity = '0.5';
    } else {
        muscles.forEach(muscle => {
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
    if (isRestDay) {
        todayBadge.innerHTML = '😴 Dinlen';
    } else {
        todayBadge.innerHTML = `<span id="exercise-count">${exercises.length}</span> Egzersiz`;
    }

    // Start workout button
    document.getElementById('start-today-workout').onclick = () => {
        if (!isRestDay) {
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
        
        const dayKey = dayKeys[i];
        const templates = getDayTemplates(dayKey);
        const isRestDay = templates.length === 0;

        const dateStr = date.toISOString().split('T')[0];
        const isCompleted = appState.userData.workoutHistory.some(h => h.date === dateStr);

        let classes = 'week-day';
        if (isToday) classes += ' today';
        if (isCompleted) classes += ' completed';
        if (isRestDay) classes += ' rest';

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
        const templates = getDayTemplates(dayKey);
        const exercises = getDayExercises(dayKey);
        const muscles = getDayMuscles(dayKey);

        if (templates.length > 0) {
            const displayName = templates.map(t => t.name).join(" + ");
            container.innerHTML += `
                <div class="upcoming-item" data-day="${dayKey}">
                    <div class="upcoming-day">
                        <span class="upcoming-day-name">${dayNames[date.getDay()].substring(0, 3)}</span>
                        <span class="upcoming-day-num">${date.getDate()}</span>
                    </div>
                    <div class="upcoming-info">
                        <div class="upcoming-title">${displayName}</div>
                        <div class="upcoming-meta">${exercises.length} egzersiz • ${muscles.join(', ')}</div>
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

    // Edit schedule button
    document.getElementById('edit-schedule-btn').addEventListener('click', () => {
        const activeTab = document.querySelector('.schedule-tab.active');
        const currentDay = activeTab ? activeTab.dataset.day : 'all';
        openAssignTemplateModal(currentDay === 'all' ? 'pazartesi' : currentDay);
    });

    renderSchedule('all');
}

function openAssignTemplateModal(defaultDay) {
    const days = [
        { key: 'pazartesi', name: 'Pazartesi' }, { key: 'sali', name: 'Salı' },
        { key: 'carsamba', name: 'Çarşamba' }, { key: 'persembe', name: 'Perşembe' },
        { key: 'cuma', name: 'Cuma' }, { key: 'cumartesi', name: 'Cumartesi' }, { key: 'pazar', name: 'Pazar' }
    ];
    
    const templates = appState.userData.workoutTemplates;

    let content = `
        <div class="edit-day-form">
            <div class="form-group">
                <label>Atanacak Gün</label>
                <select id="assign-day-select" class="setting-select" style="width: 100%; margin-bottom: 16px;">
                    ${days.map(d => `<option value="${d.key}" ${d.key === defaultDay ? 'selected' : ''}>${d.name}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Şablonlar (Birden fazla seçilebilir)</label>
                <div class="template-selection-list">
                    ${templates.map(t => `
                        <label class="template-checkbox-item">
                            <input type="checkbox" class="template-checkbox" value="${t.id}">
                            <div class="template-checkbox-content">
                                <strong>${t.name}</strong>
                                <span>${t.exercises.length} Egzersiz</span>
                            </div>
                        </label>
                    `).join('')}
                </div>
            </div>
            <div class="edit-actions">
                <button class="secondary-btn" id="cancel-assign-btn">İptal</button>
                <button class="primary-btn" id="save-assign-btn">Kaydet</button>
            </div>
        </div>
    `;

    openModal('Antrenman Ata', content);

    const daySelect = document.getElementById('assign-day-select');
    const updateCheckboxes = () => {
        const selectedDay = daySelect.value;
        const assignedIds = appState.userData.weeklySchedule[selectedDay] || [];
        document.querySelectorAll('.template-checkbox').forEach(cb => {
            cb.checked = assignedIds.includes(cb.value);
        });
    };
    
    // Initial update
    updateCheckboxes();
    daySelect.addEventListener('change', updateCheckboxes);

    document.getElementById('cancel-assign-btn').addEventListener('click', closeModal);
    document.getElementById('save-assign-btn').addEventListener('click', () => {
        const selectedDay = daySelect.value;
        const selectedIds = Array.from(document.querySelectorAll('.template-checkbox:checked')).map(cb => cb.value);
        appState.userData.weeklySchedule[selectedDay] = selectedIds;
        saveUserData();
        closeModal();
        renderSchedule(document.querySelector('.schedule-tab.active').dataset.day);
        updateHomePageIfNeeded();
    });
}

function updateHomePageIfNeeded() {
    if (appState.currentPage === 'home') initHomePage();
}



function renderSchedule(filter) {
    const container = document.getElementById('schedule-list');
    container.innerHTML = '';

    const days = filter === 'all'
        ? Object.keys(appState.userData.weeklySchedule)
        : [filter];

    days.forEach(dayKey => {
        const templates = getDayTemplates(dayKey);
        const isRestDay = templates.length === 0;
        const exercises = getDayExercises(dayKey);
        const dayName = dayNames[Object.keys(dayMapping).find(k => dayMapping[k] === dayKey)];

        let dayHtml = `
            <div class="schedule-day" data-day="${dayKey}">
                <div class="schedule-day-header">
                    <div class="schedule-day-title">
                        <span>${dayName}</span>
                        ${isRestDay ? '<span class="schedule-day-badge">Dinlenme</span>' : ''}
                    </div>
                    ${!isRestDay ? `<span class="schedule-day-badge">${exercises.length} Egzersiz</span>` : ''}
                </div>
        `;

        if (isRestDay) {
            dayHtml += `
                <div class="rest-day-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                    <p>Bu gün dinlenme günü. Kaslarının toparlanması için dinlen!</p>
                </div>
            `;
        } else {
            // Render assigned template chips
            dayHtml += `<div class="assigned-templates-list" style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">`;
            templates.forEach(t => {
                dayHtml += `<span class="template-chip" style="background:var(--accent-gradient);font-size:12px;padding:4px 8px;border-radius:12px;color:white;">${t.name}</span>`;
            });
            dayHtml += `</div>`;

            dayHtml += '<div class="schedule-exercises">';
            exercises.forEach((exercise, index) => {
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
        const isRestDay = getDayTemplates(dayKey).length === 0;
        if (!isRestDay) {
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
        if (getDayTemplates(dayKey).length > 0) {
            startWorkout(dayKey);
        } else {
            alert('Bugün dinlenme günü! Başka bir gün seçin.');
        }
    });

    document.getElementById('cancel-workout-btn').addEventListener('click', cancelWorkout);
    document.getElementById('pause-workout-btn').addEventListener('click', togglePause);
    document.getElementById('finish-workout-btn').addEventListener('click', finishWorkout);
    document.getElementById('skip-rest').addEventListener('click', skipRest);
    document.getElementById('add-time').addEventListener('click', addRestTime);
}

function startWorkout(dayKey) {
    const templates = getDayTemplates(dayKey);
    const exercises = getDayExercises(dayKey);
    if (templates.length === 0) return;

    appState.activeWorkout = {
        dayKey,
        templates,
        exercises,
        startTime: Date.now(),
        totalSets: exercises.reduce((sum, ex) => sum + ex.sets, 0)
    };
    appState.completedSets = exercises.map(ex => Array(ex.sets).fill(false));
    appState.exerciseWeights = exercises.map(ex => Array(ex.sets).fill(appState.userData.exerciseWeights[ex.id] || ""));
    appState.isPaused = false;

    navigateTo('workout');

    document.getElementById('no-workout').classList.add('hidden');
    document.getElementById('active-workout').classList.remove('hidden');
    document.getElementById('workout-complete').classList.add('hidden');

    const displayName = templates.map(t => t.name).join(" + ");
    document.getElementById('workout-day-title').textContent = displayName;
    document.getElementById('exercises-total').textContent = exercises.length;

    startWorkoutTimer();
    renderWorkoutList();
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

function renderWorkoutList() {
    const container = document.getElementById('workout-unified-list');
    container.innerHTML = '';

    appState.activeWorkout.exercises.forEach((exercise, exerciseIndex) => {
        // Check if all sets for this exercise are completed
        const isCompleted = appState.completedSets[exerciseIndex].every(s => s);
        
        let html = `
            <div class="exercise-list-item ${isCompleted ? 'completed' : ''}" data-index="${exerciseIndex}" style="background:var(--bg-glass);border:1px solid rgba(255,255,255,0.05);border-radius:var(--radius-md);margin-bottom:16px;padding:16px;transition:all 0.3s ease;${isCompleted ? 'opacity:0.5;' : ''}">
                <div class="exercise-header" style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                    <div class="exercise-number" style="width:28px;height:28px;border-radius:50%;background:var(--bg-tertiary);display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px;color:var(--text-secondary);">${exerciseIndex + 1}</div>
                    <div style="flex:1;">
                        <h4 style="margin:0;font-size:16px;${isCompleted ? 'text-decoration:line-through;' : ''}">${exercise.name}</h4>
                        <div style="font-size:12px;color:var(--text-muted);">${exercise.target} • ${exercise.sets} Set × ${exercise.reps} • ${exercise.intensity}</div>
                    </div>
                </div>
                
                <div class="exercise-sets-container">
        `;

        for (let setIndex = 0; setIndex < exercise.sets; setIndex++) {
            const setCompleted = appState.completedSets[exerciseIndex][setIndex];
            const weightVal = appState.exerciseWeights[exerciseIndex][setIndex] || "";
            const lastWeight = appState.userData.exerciseWeights[exercise.id] || "";
            
            html += `
                <div class="set-row" style="display:flex;align-items:center;gap:8px;margin-bottom:8px;padding:8px;background:var(--bg-tertiary);border-radius:var(--radius-sm);">
                    <div style="width:40px;font-size:12px;color:var(--text-secondary);">Set ${setIndex + 1}</div>
                    
                    <!-- Kilo Input -->
                    <div style="flex:1;display:flex;align-items:center;background:var(--bg-secondary);border-radius:var(--radius-sm);border:1px solid rgba(255,255,255,0.05);padding:4px 8px;">
                        <input type="number" 
                               class="weight-input" 
                               placeholder="${lastWeight ? 'Son: ' + lastWeight : 'Kilo'}" 
                               value="${weightVal}" 
                               data-ex-idx="${exerciseIndex}" 
                               data-set-idx="${setIndex}"
                               style="background:transparent;border:none;color:var(--text-primary);width:100%;outline:none;font-size:14px;text-align:right;">
                        <span style="font-size:12px;color:var(--text-muted);margin-left:4px;">kg</span>
                    </div>

                    <!-- Checkbox -->
                    <button class="set-check-btn ${setCompleted ? 'checked' : ''}" 
                            data-ex-idx="${exerciseIndex}" 
                            data-set-idx="${setIndex}"
                            style="width:32px;height:32px;border-radius:var(--radius-sm);border:2px solid ${setCompleted ? 'var(--accent-primary)' : 'rgba(255,255,255,0.2)'};background:${setCompleted ? 'var(--accent-primary)' : 'transparent'};color:${setCompleted ? 'white' : 'transparent'};display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s ease;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width:16px;height:16px;">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                    </button>
                </div>
            `;
        }

        html += `
                </div>
            </div>
        `;
        container.innerHTML += html;
    });

    // Event Listeners for Weights
    document.querySelectorAll('.weight-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const exIdx = parseInt(e.target.dataset.exIdx);
            const setIdx = parseInt(e.target.dataset.setIdx);
            const val = e.target.value;
            appState.exerciseWeights[exIdx][setIdx] = val;
            
            // update global exercise weight tracking
            const exerciseId = appState.activeWorkout.exercises[exIdx].id;
            if (val) {
                appState.userData.exerciseWeights[exerciseId] = val;
                saveUserData();
            }
        });
    });

    // Event Listeners for Checkboxes
    document.querySelectorAll('.set-check-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const exIdx = parseInt(e.currentTarget.dataset.exIdx);
            const setIdx = parseInt(e.currentTarget.dataset.setIdx);
            const currentState = appState.completedSets[exIdx][setIdx];
            
            appState.completedSets[exIdx][setIdx] = !currentState;
            
            if (!currentState) {
                // If checking, trigger rest timer
                startRestTimer();
            }
            
            // Re-render to show updated states and strikethroughs
            renderWorkoutList();
            updateWorkoutProgress();
        });
    });
}

function updateWorkoutProgress() {
    const totalSets = appState.activeWorkout.totalSets;
    const completedSets = appState.completedSets.flat().filter(s => s).length;
    const progress = totalSets === 0 ? 0 : (completedSets / totalSets) * 100;

    const progressFill = document.getElementById('workout-progress-fill');
    if(progressFill) progressFill.style.width = `${progress}%`;

    const exercisesDoneSpan = document.getElementById('exercises-done');
    if(exercisesDoneSpan) {
        const completedExercises = appState.completedSets.filter(sets => sets.every(s => s)).length;
    }
}

function startRestTimer() {
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

    if (appState.restTimer) clearInterval(appState.restTimer);

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
    document.getElementById('complete-exercises').textContent = appState.activeWorkout.exercises.length;
    document.getElementById('complete-sets').textContent = totalSets;

    document.getElementById('active-workout').classList.add('hidden');
    document.getElementById('workout-complete').classList.remove('hidden');

    // Save workout to history
    const workoutData = {
        date: new Date().toISOString().split('T')[0],
        day: dayNames[Object.keys(dayMapping).find(k => dayMapping[k] === appState.activeWorkout.dayKey)],
        displayName: appState.activeWorkout.templates.map(t => t.name).join(" + "),
        duration: Math.floor(elapsed / 60000), // minutes
        exercises: appState.activeWorkout.exercises.length,
        sets: totalSets,
        timestamp: Date.now()
    };

    appState.userData.workoutHistory.push(workoutData);
    appState.userData.totalWorkouts++;
    appState.userData.totalTime += workoutData.duration;

    // Calculate PRs (1RM using Brzycki formula)
    appState.activeWorkout.exercises.forEach((exercise, exerciseIndex) => {
        appState.completedSets[exerciseIndex].forEach((completed, setIndex) => {
            if (completed) {
                const weightStr = appState.exerciseWeights[exerciseIndex][setIndex];
                const weight = parseFloat(weightStr);
                
                if (!isNaN(weight) && weight > 0) {
                    const repsText = exercise.reps.toString();
                    // parse first number from reps, e.g. "8-12" -> 8
                    const reps = parseInt(repsText.match(/\\d+/)?.[0] || "10", 10);
                    
                    // Brzycki formula
                    const expected1RM = weight * (36 / (37 - reps));
                    const rounded1RM = Math.round(expected1RM);
                    
                    const currentPR = appState.userData.personalRecords[exercise.id] || 0;
                    if (rounded1RM > currentPR) {
                        appState.userData.personalRecords[exercise.id] = rounded1RM;
                    }
                }
            }
        });
    });

    updateStreak();
    saveUserData();

    if (appState.workoutTimer) {
        clearInterval(appState.workoutTimer);
        appState.workoutTimer = null;
    }
}

function finishWorkout() {
    // If not completed from a "Finish" button click from history view, complete it
    const active = document.getElementById('active-workout');
    if (!active.classList.contains('hidden')) {
        completeWorkout();
    } else {
        endWorkout(true);
        navigateTo('home');
    }
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
    appState.completedSets = [];
    appState.exerciseWeights = [];

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
            
            // Migration to v2
            if (!parsed.version || parsed.version < 2) {
                console.log("Migrating user data to v2...");
                appState.userData = {
                    ...appState.userData,
                    ...parsed,
                    version: 2,
                    weeklySchedule: appState.userData.weeklySchedule, // Keep default mapping
                    workoutTemplates: [...defaultWorkoutTemplates],
                    exerciseWeights: {},
                    personalRecords: {},
                    exerciseNotes: {}
                };
            } else {
                appState.userData = { ...appState.userData, ...parsed };
                // Ensure default templates if empty
                if (!appState.userData.workoutTemplates || appState.userData.workoutTemplates.length === 0) {
                    appState.userData.workoutTemplates = [...defaultWorkoutTemplates];
                }
            }
        } catch (e) {
            console.error('Error loading user data:', e);
        }
    }
}

// Service Worker Registration for PWA (optional for GitHub Pages)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}
