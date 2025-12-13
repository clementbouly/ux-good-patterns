import { X, Check } from "lucide-react";

function BadEmailMockup() {
  return (
    <div className="h-full rounded-lg border bg-white p-4 text-sm text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="mb-3 flex items-center gap-2 border-b pb-2">
        <div className="h-8 w-8 shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
          A
        </div>
        <div>
          <p className="font-medium">Acme Inc</p>
          <p className="text-xs text-gray-500">noreply@acme.com</p>
        </div>
      </div>
      <div className="space-y-3 text-sm leading-relaxed">
        <p>Hello,</p>
        <p>
          You are receiving this unique code for authentication and additional
          security purposes for your account.
        </p>
        <p>
          Please enter the code: <span className="font-medium">318213</span>
        </p>
        <p className="text-xs text-gray-500">
          If you did not initiate this request, please disregard this email...
        </p>
      </div>
    </div>
  );
}

function GoodEmailMockup() {
  return (
    <div className="h-full rounded-lg border bg-white p-4 text-sm text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="mb-3 flex items-center gap-2 border-b pb-2">
        <div className="h-8 w-8 shrink-0 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">
          A
        </div>
        <div>
          <p className="font-medium">Acme Inc</p>
          <p className="text-xs text-gray-500">noreply@acme.com</p>
        </div>
      </div>
      <div className="space-y-4 text-center">
        <p className="text-lg font-medium">Your security code</p>
        <div className="mx-auto rounded-lg bg-gray-100 px-6 py-4 dark:bg-gray-800">
          <p className="font-mono text-2xl font-bold tracking-[0.3em]">482362</p>
        </div>
        <p className="text-xs text-gray-500">This code expires in 10 minutes.</p>
      </div>
    </div>
  );
}

export function EmailComparison() {
  return (
    <div className="not-prose grid gap-6 md:grid-cols-2">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
            <X className="h-3 w-3 text-red-600 dark:text-red-400" />
          </span>
          <h4 className="font-medium text-red-600 dark:text-red-400">Code buried in text</h4>
        </div>
        <div className="flex-1">
          <BadEmailMockup />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
            <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
          </span>
          <h4 className="font-medium text-green-600 dark:text-green-400">Code prominently displayed</h4>
        </div>
        <div className="flex-1">
          <GoodEmailMockup />
        </div>
      </div>
    </div>
  );
}
