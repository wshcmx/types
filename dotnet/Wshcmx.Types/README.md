# Wshcmx.Types

Строго типизированные C# POCO-классы для XML-документов WebSoft HCM (WebTutor), сгенерированные из [@wshcmx/types](https://github.com/wshcmx/types).

[![NuGet](https://img.shields.io/nuget/v/Wshcmx.Types)](https://www.nuget.org/packages/Wshcmx.Types)
[![Лицензия: MIT](https://img.shields.io/badge/Лицензия-MIT-yellow.svg)](https://github.com/wshcmx/types/blob/main/LICENSE)

## Назначение

Пакет предоставляет готовые POCO-модели для всех стандартных документов WebTutor: сотрудники, должности, каталоги курсов, результаты тестирования и многое другое. Классы генерируются автоматически из TypeScript-деклараций `@wshcmx/types` и полностью соответствуют им по структуре.

Каждое свойство аннотировано атрибутом `[XmlElement]` или `[Column]`, что позволяет использовать классы совместно с `XmlSerializer` или ORM (например, Entity Framework Core).

## 📦 Установка

```bash
dotnet add package Wshcmx.Types
```

или через Package Manager:

```powershell
Install-Package Wshcmx.Types
```

## ⌨️ Пример использования

### Entity Framework Core (каталоговые документы)

Каталоговые типы (например, `Position`, `Subdivision`) помечены атрибутом `[Table]` и `[Column]` и готовы к использованию как EF-сущности:

```csharp
using Microsoft.EntityFrameworkCore;
using Wshcmx.Types;

public class WtContext : DbContext
{
    public DbSet<Position> Positions { get; set; }
    public DbSet<Subdivision> Subdivisions { get; set; }
}
```

## 🔄 Генерация типов

Классы генерируются автоматически из TypeScript-деклараций пакета `@wshcmx/types`. Чтобы пересобрать их локально:

```bash
npm run generate:dotnet
```

Генератор находится в `dotnet/Wshcmx.Types/scripts/index.ts`.

## 📄 Лицензия

[MIT](https://github.com/wshcmx/types/blob/main/LICENSE)
