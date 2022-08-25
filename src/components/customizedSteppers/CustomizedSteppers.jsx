import { useState } from "react";
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
  IconCircleCheck,
} from "@tabler/icons";
import { Stepper } from "@mantine/core";

const CustomizedSteppers = () => {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<IconUserCheck size={18} />} />
      <Stepper.Step icon={<IconMailOpened size={18} />} />
      <Stepper.Step icon={<IconShieldCheck size={18} />} />
    </Stepper>
  );
};

export default CustomizedSteppers;
