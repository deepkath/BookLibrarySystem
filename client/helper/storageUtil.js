export function fetchFromStorage(key) {
    let storageVal = localStorage.getItem(key);
    try {
        storageVal = JSON.parse(storageVal);
    }catch(ex) {}
    return storageVal;
}

export function saveToStorage(key, value) {
    if(typeof value == "object" && value) {
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
}