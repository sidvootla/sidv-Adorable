import { stackServerApp } from "@/auth/stack-auth";
import { StackHandler } from "@stackframe/stack";

export default function Handler(props: unknown) {
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
