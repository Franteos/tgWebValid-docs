---
title: Віджет входу
icon: right-to-bracket
order: 2
head:
  - - meta
    - name: description
      content: Надійно перевіряйте користувачів Telegram Login Widget у вашому PHP проекті за допомогою бібліотеки TgWebValid.
---

Ми перевіряємо автентифікацію та цілісність отриманих даних, порівнявши отриманий хеш-параметр із шістнадцятковим представленням підпису `HMAC-SHA-256` рядка перевірки даних із хешем `SHA256` маркера бота, який використовується як секретний ключ. Деталі [тут](https://core.telegram.org/widgets/login#checking-authorization)

## Приклад {#example}

```php
<?php

$user = $bot->validateLoginWidget(
  user: [
      'auth_date' => 1679130118,
      'first_name' => 'Сергій',
      // інші поля
  ],
  throw: true
);
```

:bulb: Після успішної перевірки, метод поверне сутність [LoginWidget](../entity/login-widget.md) яка містить усі наявні дані користуача, які можуть використовуватися на вашому сервері.

## Параметри {#parameters}

### `user`
- Тип: `array`
- Обов'язково: Так

Масив з необробленими даними користувача, які повертає віджет авторизації.

[Додаткова інформація](https://core.telegram.org/widgets/login#receiving-authorization-data)

### `throw`
- Тип: `bool`
- Обов'язково: Ні
- За замовчуванням: `null`. Застосовуються базові налаштування

Якщо встановлено `true`, бібліотека буде викидати виключення у разі провалу перевірки.

:::warning
Обов'язково використовуйте `try/catch`, якщо плануєте працювати з винятками :wink:

Якщо винятки увімкнено, то після провалу перевірки ви отримаєте виключення [ValidationException](../exception/validation.md). Інакше, буде повернуто `false`.
:::