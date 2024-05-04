export default class Env {
  static get<T>(key: string): T {
    const value = process.env[key];

    if (value === undefined) {
      throw new Error(`${key} environment does not exists`);
    }

    const parsedValue = this.parseValue<T>(value);

    if (parsedValue !== undefined) {
      return parsedValue;
    }

    return value as unknown as T;
  }

  static parseValue<T>(value: string): T | undefined {
    if (typeof value === "string") {
      const intValue = parseInt(value, 10);
      if (!isNaN(intValue)) {
        return intValue as unknown as T;
      }

      const floatValue = parseFloat(value);
      if (!isNaN(floatValue)) {
        return floatValue as unknown as T;
      }
    }

    return undefined;
  }
}
