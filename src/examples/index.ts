import * as autofocusModal from "./autofocus-modal";
import * as submitButtonLoading from "./submit-button-loading";
import * as verificationCodeInput from "./verification-code-input";
import * as copyFeedback from "./copy-feedback";
import * as skeletonLoading from "./skeleton-loading";
import * as autoSubmitCode from "./auto-submit-code";
import * as progressiveLoadingMessages from "./progressive-loading-messages";

export const examples = [
  autofocusModal,
  submitButtonLoading,
  verificationCodeInput,
  copyFeedback,
  skeletonLoading,
  autoSubmitCode,
  progressiveLoadingMessages,
];

export type ExampleMeta = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
};

export type ExampleVariant = {
  component: React.ComponentType;
  label: string;
};

export type Example = {
  meta: ExampleMeta;
  GoodExamples: ExampleVariant[];
  BadExamples: ExampleVariant[];
  content?: string;
};
