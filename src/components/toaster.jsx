import { Toaster, createToaster } from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "top",
});

export function AppToaster() {
  return <Toaster toaster={toaster} />;
}