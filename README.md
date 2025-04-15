<h1 align="center">Websoft Types</h1>
<div align="center">
  Typescript типы и трансформеры для WebSoft HCM.

![npm](https://img.shields.io/npm/dw/@globexit/websoft-types)
</div>

## Что это?

Этот пакет предоставляет TypeScript типы для SSJS платформы WebSoft (WebTutor), а также набор трансформеров для конфигурации транспилированного JavaScript.

## Установка

Чтобы установить пакет, выполните следующую команду:

```bash
npm i @globexit/websoft-types -D
```

## Подключение типов
Для добавления типов необходимо настроить typeRoots в вашем tsconfig.json:

```json
"typeRoots": [
    "../node_modules/@globexit/websoft-types/lib/web-soft/types",
    "../node_modules/@globexit/websoft-types/lib/web-soft/types/xml"
]
```

## Настройка Gulp

```js
const {transformerConfigurator, importManager} = new SsjsProjectBuilder()
    .setTsConfigPath(TS_CONFIG_PATH)
    .build();

const transformTS = (path: string) => {
  return baseSrc(path)
          .pipe(change(importManager.addFuncImports))
          .pipe(change(importManager.replaceImports))
          .pipe(include({
            extensions: 'ts',
            hardFail: true,
            separateInputs: true,
            includePaths: [
              __dirname + "/node_modules"
            ]
          }))
          .pipe(createProject(consts.TS_CONFIG_PATH, {
            typescript: transformerConfigurator.ts,
            getCustomTransformers: () => ({
              before: transformerConfigurator.getTransformers()
            })
          })());
};
```

## Описание трансформеров
Данный пакет предоставляет следующие трансформеры:

* ##### Преобразование for...of в for...in:

    ##### TypeScript:
    ```js
    for (const item of [1, 2, 3]) { }
    ```

    ##### SSJS:
    ```js
    for (item in [1, 2, 3]) { }
    ```

---

* ##### Удаление объявления переменных из циклов:

  ##### TypeScript:
    ```js
    let sum = 0;
    for (const item of [1, 2, 3]) {
        sum += item;
    
        const num = 1;
        sum += num;
    }
    ```

  ##### SSJS:
    ```js
    var sum = 0;
    for (item in [1, 2, 3]) {
        sum += item;
  
        num = 1;
        sum += num;
    }
    ```
  
---

* ##### Преобразование лямбд:

  ##### TypeScript:
    ```js
    let sum = (a: number, b: number) => a + b;
    ```

  ##### SSJS:
    ```js
    var sum = function _1(a, b) { return a + b; };
    ```
  
---

* ##### Рабочий импорт через комментарий:

  ##### TypeScript:
    ```js
    import { sum } from './sum'; //.

    let a = 2;
    let b = 3;
    
    let num = sum(a, b);
    ```

  ##### SSJS:
    ```js
    function sum(a, b) {
        return a + b;
    }
  
    var a = 2;
    var b = 3;
    var num = sum(a, b);
    ```
  
---

* ##### Поддержка методов JS для работы с массивами: В данный момент поддерживаются: map, filter, some, any, reduce, includes, find, pop:

  ##### TypeScript:
    ```js
    let array = [2, 4, 6, 3, 7, 4, 7];

    let res1 = array.map(i => i * 2);
    let res2 = array.filter(i => i > 3);
    let res3 = array.find(i => i === 4);
    ```

  ##### SSJS:
    ```js
    function find(array, predicate, thisArg) {
        if (array == null)
            throw new Error('"this" is null or undefined');
        var len = ArrayCount(array);
        for (k = 0; k < len; k++) {
            value = array[k];
            if (predicate(value, k, array, thisArg))
                return value;
        }
        return undefined;
    }
    
    function filter(array, predicate) {
        var result = [];
        for (i = 0; i < ArrayCount(array); i++) {
            if (predicate(array[i], i, array)) {
                result.push(array[i]);
            }
        }
        return result;
    }
    
    function map(array, callback) {
        var result = [];
        for (i = 0; i < ArrayCount(array); i++) {
            result.push(callback(array[i], i, array));
        }
        return result;
    }
    
    var array = [2, 4, 6, 3, 7, 4, 7];
    var res1 = map(array, function _1(i) { return i * 2; });
    var res2 = filter(array, function _2(i) { return i > 3; });
    var res3 = find(array, function _3(i) { return i === 4; });
    ```
  
---

## Заключение
Пакет @globexit/websoft-types предоставляет необходимые инструменты для работы с SSJS через TS, а также значительно упрощает процесс разработки с использованием трансформеров для обработки кода.
