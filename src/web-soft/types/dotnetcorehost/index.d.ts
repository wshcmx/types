declare class DotNetCoreHost {
  Object: {
    GetAssembly(dllName: string): {
      CreateClassObject<T>(className: string): T;
      CallClassStaticMethod<T, A extends unknown[]= unknown[]>(namespaceOrClass: string, methodName: string, args: A): T;
    };
  };
}
