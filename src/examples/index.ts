import * as autofocusModal from "./autofocus-modal";
import * as submitButtonLoading from "./submit-button-loading";
import * as verificationCodeInput from "./verification-code-input";
import * as copyFeedback from "./copy-feedback";
import * as skeletonLoading from "./skeleton-loading";
import * as autoSubmitCode from "./auto-submit-code";
import * as progressiveLoadingMessages from "./progressive-loading-messages";
import * as formValidationFeedback from "./form-validation-feedback";
import * as inputAutoFormat from "./input-auto-format";
import * as scrollToTop from "./scroll-to-top";
import * as pasteOtpCode from "./paste-otp-code";
import * as modalClosing from "./modal-closing";
import * as dropdownUsability from "./dropdown-usability";
import * as displayOptions from "./display-options";
import * as toastVsInlineFeedback from "./toast-vs-inline-feedback";
import * as floatingActionButton from "./floating-action-button";

export const examples = [
  autofocusModal,
  modalClosing,
  submitButtonLoading,
  verificationCodeInput,
  copyFeedback,
  skeletonLoading,
  autoSubmitCode,
  progressiveLoadingMessages,
  formValidationFeedback,
  inputAutoFormat,
  scrollToTop,
  floatingActionButton,
  pasteOtpCode,
  dropdownUsability,
  displayOptions,
  toastVsInlineFeedback,
];

export type ExampleMeta = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  createdAt: string; // ISO date format: YYYY-MM-DD
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

// Re-export translation helper
export { getExampleTranslation } from "@/i18n/examples";

import { getExampleTranslation } from "@/i18n/examples";
import type { Lang } from "@/i18n/ui";

/**
 * Get examples with translated metadata for a specific language
 */
export function getLocalizedExamples(lang: Lang): Example[] {
  return examples.map((example) => {
    const translation = getExampleTranslation(example.meta.id, lang);
    if (!translation) return example;

    return {
      ...example,
      meta: {
        ...example.meta,
        title: translation.title,
        description: translation.description,
        category: translation.category,
      },
    };
  });
}
