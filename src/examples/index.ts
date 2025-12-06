import * as autofocusModal from "./autofocus-modal";
import * as submitButtonLoading from "./submit-button-loading";

export const examples = [autofocusModal, submitButtonLoading];

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
