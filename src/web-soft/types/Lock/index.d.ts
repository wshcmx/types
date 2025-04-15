/**
 * Объект Lock предназначен для безопасного одновременного доступа к общим данным из нескольких потоков,
 * если общие данные не являются thread-safe.
 * Как правило, на каждую группу общих данных создается один объект Lock.
 * Создание объекта обычно происходи один раз на старте приложения или библиотеки и хранится в глобальной переменной.
 * Объект Lock используется в функциях:
 * * {@link GetObjectPropertyWithLock}(),
 * * {@link SetObjectPropertyWithLock}(),
 * * {@link CallObjectMethodWithLock}()
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Lock {

}

interface LockConstructor {
  new(): unknown;
  (): unknown;
}

 
declare const Lock: LockConstructor;
