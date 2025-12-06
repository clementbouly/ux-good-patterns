import * as autofocusModal from "./autofocus-modal";

export const examples = [autofocusModal];

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
