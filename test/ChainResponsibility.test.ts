import { ChainPattern, AbstractLogger } from "../src/ChainResponsibility";

test("chain responsibility to log", () => {
  let loggerChain = ChainPattern.getChainOfLoggers();
  expect(loggerChain.logMessage(AbstractLogger.INFO, "hello info log.")).toBe(
    true
  );
  expect(loggerChain.logMessage(AbstractLogger.DEBUG, "hello debug log.")).toBe(true);
  expect(loggerChain.logMessage(AbstractLogger.ERROR, "hello error log.")).toBe(true);
});
