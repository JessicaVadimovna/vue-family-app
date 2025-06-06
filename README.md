# 👨‍👩‍👧‍👦 vue-family-app

## 📝 Описание проекта

**vue-family-app** — это веб-приложение на Vue.js для управления персональными данными пользователя и информацией о детях (до 5 человек). Приложение включает форму для ввода имени и возраста пользователя, позволяет добавлять и удалять детей, а также просматривать введенные данные на отдельной странице.

## ✅ Реализованные функции

- 🧑‍💼 Форма для ввода имени и возраста пользователя
- ✅ Небольшая валидация полей (пробелы, количество цифр в возрасте)
- 👶 Возможность добавления до **5 детей** с полями **"Имя"** и **"Возраст"**
- ❌ Удаление данных о детях
- 👀 Страница предпросмотра `/preview`
- 📱 Адаптивный дизайн с плавающими лейблами
- 💾 Сохранение данных через **Vuex**
- 🔁 Навигация между страницами с помощью **Vue Router**

## ⚙️ Используемые версии

| Технология | Версия    |
| ---------- | --------- |
| Node.js    | `v18.x`   |
| Vue.js     | `^3.2.13` |
| Vue Router | `^4.0.3`  |
| Vuex       | `^4.0.0`  |
| @vue/cli   | `~5.0.0`  |
| ESLint     | `^7.32.0` |
| core-js    | `^3.8.3`  |

## 🚀 Установка и запуск

### 1. Клонируйте репозиторий

```bash
git clone https://github.com/JessicaVadimovna/vue-family-app.git
```

### 2. Перейдите в директорию проекта

```bash
cd vue-family-app
```

### 3. Установите зависимости

```bash
npm install
```

### 4. Запустите проект в режиме разработки

```bash
npm run serve
```

### 🏗️ Сборка проекта

```bash
npm run build
```

### 🧹 Проверка кода с помощью ESLint

```bash
npm run lint
```

## 💡 Что можно улучшить

- 💾 Сохранение данных в `localStorage` или через API
- ✏️ Возможность редактирования данных о детях
- ♿ Улучшение доступности через ARIA-атрибуты
- 🧪 Unit- и e2e-тесты с использованием **Jest** и **Cypress**
- 🌙 Темная тема и переключатель тем
- ✨ Анимации при добавлении и удалении детей

## 🗂️ Структура проекта

```
src/
├── App.vue                      # Корневой компонент приложения
├── components/
│   └── FormComponent.vue        # Компонент формы
├── router/
│   └── index.js                 # Vue Router
└── store/
    └── index.js                 # Vuex хранилище
```

---

📌 Готово к использованию!
