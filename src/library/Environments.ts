export default class Environments {
  public static getEnvVariable(name: string, defaultValue: string = ''): string {
    const value = process.env[name];
    if (value === undefined) {
      if (defaultValue === '') {
        console.error(`${name} is not defined.`);
      }
      return defaultValue;
    }
    return value;
  }

  public static getNASABaseUrl(): string {
    return this.getEnvVariable('NASA_BASE_URL');
  }

  public static getNASAAPIKey(): string {
    return this.getEnvVariable('NASA_API_KEY');
  }
}