import {
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from "./NewCycleForm.styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestion"
        placeholder="De um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      ></TaskInput>

      <datalist id="task-suggestion">
        <option value={"banana"} />
      </datalist>
      <label htmlFor="minutesAmount"></label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      ></MinutesAmountInput>

      <span>minutos.</span>
    </FormContainer>
  );
}
