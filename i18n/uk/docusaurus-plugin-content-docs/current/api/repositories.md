---
sidebar_position: 8
title: Репозиторії
description: Довідка API для створення GitHub-репозиторіїв та завантаження файлів через інтеграцію з GitHub App.
---

# API репозиторіїв

Створюйте GitHub-репозиторії та завантажуйте код від імені вашого облікового запису через підключену інсталяцію GitHub App.

:::note Передумова
Всі ендпоінти вимагають встановлення GitHub App на вашому обліковому записі. Якщо додаток не встановлено, запити повертають помилку `422` з кодом `GITHUB_APP_REQUIRED`.
:::

## Ендпоінти

| Метод | Шлях | Область | Опис |
|-------|------|---------|------|
| `POST` | `/api/repos` | `repos:write` | Створити новий GitHub-репозиторій |
| `POST` | `/api/repos/push` | `repos:write` | Завантажити файли в існуючий репозиторій |
| `POST` | `/api/repos/create_and_push` | `repos:write` | Створити репозиторій та завантажити файли одним викликом |

---

### Створення репозиторію

```bash
POST /api/repos
```

**Параметри:**

| Назва | Тип | Обов'язковий | За замовчуванням | Опис |
|-------|-----|--------------|------------------|------|
| `name` | string | ✅ | — | Назва репозиторію |
| `description` | string | | — | Опис репозиторію |
| `private` | boolean | | `true` | Чи є репозиторій приватним |
| `auto_init` | boolean | | `false` | Ініціалізувати з README |

**Відповідь (201):**

```json
{
  "repo": {
    "full_name": "octocat/hello-world",
    "html_url": "https://github.com/octocat/hello-world",
    "clone_url": "https://github.com/octocat/hello-world.git",
    "ssh_url": "git@github.com:octocat/hello-world.git",
    "private": true,
    "default_branch": "main"
  }
}
```

**Приклад:**

```bash
curl -X POST https://fibe.gg/api/repos \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-rails-app", "description": "A new Rails app", "private": true}'
```

---

### Завантаження файлів

```bash
POST /api/repos/push
```

Завантажте один або кілька файлів в існуючий репозиторій одним атомарним комітом.

**Параметри:**

| Назва | Тип | Обов'язковий | За замовчуванням | Опис |
|-------|-----|--------------|------------------|------|
| `repo` | string | ✅ | — | Повна назва репозиторію (наприклад, `octocat/hello-world`) |
| `files` | array | ✅ | — | Масив об'єктів `{ path, content }` |
| `message` | string | ✅ | — | Повідомлення коміту |
| `branch` | string | | гілка за замовчуванням | Цільова гілка |

**Відповідь (200):**

```json
{
  "commit_sha": "abc123...",
  "tree_sha": "def456...",
  "files_pushed": 3
}
```

**Приклад:**

```bash
curl -X POST https://fibe.gg/api/repos/push \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "repo": "octocat/my-rails-app",
    "message": "Add initial structure",
    "files": [
      { "path": "Gemfile", "content": "source \"https://rubygems.org\"\ngem \"rails\"" },
      { "path": "README.md", "content": "# My Rails App" }
    ]
  }'
```

---

### Створення та завантаження

```bash
POST /api/repos/create_and_push
```

Створює репозиторій та завантажує файли одним API-викликом — зручно для початкового налаштування нових проєктів.

**Параметри:**

| Назва | Тип | Обов'язковий | За замовчуванням | Опис |
|-------|-----|--------------|------------------|------|
| `name` | string | ✅ | — | Назва репозиторію |
| `description` | string | | — | Опис репозиторію |
| `private` | boolean | | `true` | Чи є репозиторій приватним |
| `files` | array | ✅ | — | Масив об'єктів `{ path, content }` |
| `message` | string | | `"Initial commit"` | Повідомлення коміту |

**Відповідь (201):**

```json
{
  "repo": {
    "full_name": "octocat/my-rails-app",
    "html_url": "https://github.com/octocat/my-rails-app",
    "clone_url": "https://github.com/octocat/my-rails-app.git",
    "ssh_url": "git@github.com:octocat/my-rails-app.git",
    "private": true,
    "default_branch": "main"
  },
  "commit": {
    "commit_sha": "abc123...",
    "tree_sha": "def456...",
    "files_pushed": 3
  }
}
```

---

## Коди помилок

| Код | HTTP-статус | Опис |
|-----|-------------|------|
| `UNAUTHORIZED` | 401 | Відсутній або недійсний API-ключ |
| `FORBIDDEN` | 403 | API-ключ не має області `repos:write` |
| `GITHUB_APP_REQUIRED` | 422 | GitHub App не встановлено на вашому обліковому записі |
| `VALIDATION_FAILED` | 422 | Недійсні або відсутні параметри |
| `RESOURCE_NOT_FOUND` | 404 | Репозиторій не знайдено (завантаження) |
