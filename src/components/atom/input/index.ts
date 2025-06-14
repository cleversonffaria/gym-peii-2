import { InputController } from "./input-atom.controller";
import { InputError } from "./input-atom.error";
import { InputField } from "./input-atom.field";
import { InputIcon } from "./input-atom.icon";
import { InputLabel } from "./input-atom.label";
import { InputPasswordController } from "./input-atom.password";
import { InputRoot } from "./input-atom.root";

export { useInputContext } from "./input-atom.context";
export type { NInputAtom } from "./input-atom.types";
export { inputVariants } from "./input-atom.variant";

export const InputAtom = {
  Root: InputRoot,
  Label: InputLabel,
  Field: InputField,
  PasswordController: InputPasswordController,
  Error: InputError,
  Controller: InputController,
  Icon: InputIcon,
};
