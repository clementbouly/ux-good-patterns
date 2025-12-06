import * as autofocusModal from "./autofocus-modal";
import * as submitButtonLoading from "./submit-button-loading";
import * as verificationCodeInput from "./verification-code-input";
import * as copyFeedback from "./copy-feedback";

export const examples = [autofocusModal, submitButtonLoading, verificationCodeInput, copyFeedback];

export type ExampleMeta = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
};

export type Example = {
  meta: ExampleMeta;
  GoodExample: React.ComponentType;
  BadExample: React.ComponentType;
};
