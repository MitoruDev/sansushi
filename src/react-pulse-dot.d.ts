declare module "react-pulse-dot" {
  import { ComponentType } from "react";
  interface PulseDotProps {
    color?: "success" | "warning" | "danger" | "info" | string;
  }
  const PulseDot: ComponentType<PulseDotProps>;
  export default PulseDot;
}
