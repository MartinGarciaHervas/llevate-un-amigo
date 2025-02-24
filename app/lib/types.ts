import { createEnum } from "./utils";

const VersionOptions = createEnum<'draft' | 'published'>('draft', 'published');

export const currentVersion =
  process.env.NEXT_PUBLIC_NODE_ENV !== 'production'
    ? VersionOptions.draft
    : VersionOptions.published;

export { VersionOptions };