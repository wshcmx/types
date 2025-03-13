<h1 align="center">WT Types</h1>
<div align="center">
  Typescript типы для WebSoft HCM.

  [![main](https://github.com/wshcmx/types/actions/workflows/check.yml/badge.svg)](https://github.com/wshcmx/types/actions/workflows/check.yml)
  ![npm](https://img.shields.io/npm/dw/@wshcmx/types)
</div>

## Назначение

Этот репозиторий создан для обеспечения чистого кода с меньшим количеством ошибок.

Он содержит типы для объектов WebSoftHCM, позволяя использовать проверку типов и IntelliSense-подсказки [в вашем проекте](#%EF%B8%8F-Пример-использования).

## 📦 Установка

> [!IMPORTANT]
> Для использования работы на проекте с typescript советуем использовать [cli](https://github.com/wshcmx/cli), который решает проблемы связанные с транспиляцией кода под платформу WebSoftHCM.

### npm

```bash
npm i @wshcmx/types -D
```

## 🔨 Настройка

Типы можно использовать как в проектах, написанных с использованием ts, так и в проектах, написанных на js.

Генерируем конфиг, либо просто создаем вручную файл **tsconfig.json**

```bash
npx tsc -init
```

Далее обновляем конфиг:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "Preserve",
    "esModuleInterop": true,
    "strict": true,
    "noImplicitAny": true,
    "allowJs": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noLib": true,
    "typeRoots": [
      "node_modules/@wshcmx/types/lib",
      "node_modules/@wshcmx/types/lib/xml"
    ]
  }
}
```

## ⌨️ Пример использования

Примеры использования для js и ts можно найти в [examples](/examples/)

![image](https://github.com/HCM-guru/webtutor-types/assets/693254/aefa6c12-4479-4cab-a7e8-c29d880358b7)
