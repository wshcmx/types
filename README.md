<h1 align="center">WT Types</h1>
<div align="center">
  Typescript типы для WebSoft HCM.

  [![main](https://github.com/wshcmx/types/actions/workflows/main.check.yml/badge.svg)](https://github.com/wshcmx/types/actions/workflows/main.check.yml)
  ![npm](https://img.shields.io/npm/dw/@wshcmx/types)
</div>

## Зачем?

У вас могут возникнуть вопросы:
- **_А для чего вообще создан этот репозиторий?_**
- **_Что это за типы такие?_**
- **_Зачем мне это все нужно?_**

Для того, чтобы писать чистый код с меньшим количеством ошибок был создан этот репозиторий с типами для объектов WebSoftHCM.

Этот **npm** пакет позволяет добавить проверку типов и **IntelliSense** подсказки в ваши проект (см. [пример](#%EF%B8%8F-Пример-использования)).

## 📦 Установка

> **_Важно:_** типы работают только с **typescript<=4.4.4** в связи с тем, что при конкатенации строк **+** теперь превращается в **.concat** https://github.com/microsoft/TypeScript/pull/45304

Установка типов сводится к установке самой зависимости в ваш проект и **typescript**:

### npm

```bash
npm i typescript@4.4.4 -D
npm i @wshcmx/types -D
```

### or yarn

```bash
yarn add typescript@4.4.4 -D
yarn add @wshcmx/types -D
```

## 🔨 Настройка

Типы можно использовать как в проектах, написанных с использованием **typescript**, так и в проектах, написанных на **javascript**.

Генерируем конфиг, либо просто создаем вручную файл **tsconfig.json**

```bash
npx tsc -init
```

Далее обновляем конфиг:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es6",
    "esModuleInterop": true,
    "strict": false,
    "noImplicitAny": true,
    "allowJs": true,
    "isolatedModules": true,
    "moduleResolution": "node",
    "baseUrl": "src",
    "noLib": true,
    "typeRoots": [
      "node_modules/@wshcmx/types/lib",
      "node_modules/@wshcmx/types/lib/xml"
    ]
  }
}
```

## ⌨️ Пример использования

Примеры использования можно найти в [examples](/examples/)

![image](https://github.com/HCM-guru/webtutor-types/assets/693254/aefa6c12-4479-4cab-a7e8-c29d880358b7)
