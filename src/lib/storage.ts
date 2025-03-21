export function getStorageValue<T>(storageKey: string, defaultValue: T): T {
	try {
		const value = localStorage.getItem(storageKey);
		if (value) {
			return value as T;
		}
	} catch (error) {
		return defaultValue;
	}
	return defaultValue;
}
