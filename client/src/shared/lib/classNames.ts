export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  const additionalProps = additional || [];
  const classMods = mods
    ? Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([cls]) => cls)
    : [];
  return [cls, ...additionalProps, ...classMods].join(' ');
}
