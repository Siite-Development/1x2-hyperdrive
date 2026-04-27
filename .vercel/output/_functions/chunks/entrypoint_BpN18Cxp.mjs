import { c as createActionsProxy, p as pipelineSymbol, A as AstroError, a as ActionCalledFromServerError, d as defineAction } from './entrypoint_Pxk1SJiL.mjs';
import * as z from 'zod/v4';
import { g as getPrice, i as interestRate } from './helpers_C26V2XWr.mjs';

createActionsProxy({
  handleAction: async (param, path, context) => {
    const pipeline = context ? Reflect.get(context, pipelineSymbol) : void 0;
    if (!pipeline) {
      throw new AstroError(ActionCalledFromServerError);
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
});

const server = {
  getMonthlyInstallment: defineAction({
    accept: "form",
    input: z.object({
      amount: z.number(),
      duration: z.number(),
      finalinstallment: z.number().optional()
    }),
    handler: async ({ amount, duration, finalinstallment }) => {
      if (amount <= 0) {
        throw new Error("Loan amount must be greater than 0.");
      }
      if (duration <= 0) {
        throw new Error("Loan duration must be greater than 0.");
      }
      if (finalinstallment && finalinstallment >= amount) {
        throw new Error("Final installment must be lower than the loan amount.");
      }
      const monthlyInterestRate = interestRate / 100 / 12;
      const principal = amount - (finalinstallment || 0);
      const monthlyInstallment = principal * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -duration));
      const totalPayment = monthlyInstallment * duration + (finalinstallment || 0);
      const formattedMonthlyInstallment = getPrice(monthlyInstallment);
      const formattedTotalPayment = getPrice(totalPayment);
      return {
        monthlyInstallment: formattedMonthlyInstallment,
        totalPayment: formattedTotalPayment,
        interestRate
      };
    }
  })
};

export { server };
