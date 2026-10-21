🤝 Как сделать вклад?

1. Клонируй репозиторий
2. Установи зависимости и проверь проект:

   ```bash
   pnpm install --frozen-lockfile
   pnpm run check
   ```

3. Для генератора .NET установи зависимости отдельно:

   ```bash
   pnpm --dir dotnet/Wshcmx.Types/scripts install --frozen-lockfile
   pnpm run generate:dotnet
   ```

   Команды выполняются из корня репозитория. Оба проекта используют pnpm;
   изменения зависимостей нужно фиксировать вместе с соответствующим `pnpm-lock.yaml`.
   В CI зависимости устанавливаются с `--frozen-lockfile`.

4. Делай правку
5. Создавай PR
