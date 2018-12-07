// 责任链模式
export abstract class AbstractLogger {
  static INFO: number = 1;
  static DEBUG: number = 2;
  static ERROR: number = 3;

  protected abstract write(message: string): void;
  protected level: number = 0;
  // 责任链中的下一个元素
  protected nextLogger: AbstractLogger;
  setNextLogger(nextLogger: AbstractLogger) {
    this.nextLogger = nextLogger;
  }
  logMessage(level: number, message: string): boolean {
    if (this.level <= level) {
      this.write(message);
      return true;
    }
    if (this.nextLogger != null) {
      this.nextLogger.logMessage(level, message);
      return true;
    }
    return false;
  }
}

class ConsoleLogger extends AbstractLogger {
  /**
   *
   */
  constructor(level: number) {
    super();
    this.level = level;
  }

  write(message: string): void {
    console.log("standard console::Logger: " + message);
  }
}

class ErrorLogger extends AbstractLogger {
  constructor(level: number) {
    super();
    this.level = level;
  }

  write(message: string): void {
    console.log("Error console::Logger: " + message);
  }
}

class FileLogger extends AbstractLogger {
  /**
   *
   */
  constructor(level: number) {
    super();
    this.level = level;
  }
  write(message: string): void {
    console.log("File::Logger: " + message);
  }
}

export class ChainPattern {
  static getChainOfLoggers(): AbstractLogger {
    let errorLogger = new ErrorLogger(AbstractLogger.ERROR);
    let fileLogger = new FileLogger(AbstractLogger.DEBUG);
    let consoleLogger = new ConsoleLogger(AbstractLogger.INFO);

    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);

    return errorLogger;
  }
}
