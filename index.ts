declare const global: any;
if (!global.__diMap){
    global.__diMap = new Map();
}
export function inject<T>(Class: new ()=>T): T {
    const diMap = global.__diMap as Map<{}, T>;
    let val = diMap.get(Class);
    if (val) {
        return val;
    }
    val = new Class();
    diMap.set(Class, val);
    return val;
}

export function bindInjection<T>(Class: new ()=>T, value: T) {
    const diMap = global.__diMap as Map<{}, T>;
    diMap.set(Class, value);
}