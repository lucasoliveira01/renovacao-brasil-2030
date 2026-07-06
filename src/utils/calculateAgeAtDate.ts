/**
 * Calculates the age of a person at a given reference date.
 * Takes into account day, month and year correctly.
 *
 * @example
 * calculateAgeAtDate('2007-04-24', '2026-07-06') // 19
 * calculateAgeAtDate('2007-04-24', '2030-06-13') // 23
 */
export function calculateAgeAtDate(birthDate: string, referenceDate: string): number {
  const birth = new Date(birthDate);
  const ref = new Date(referenceDate);

  let age = ref.getFullYear() - birth.getFullYear();

  const hasHadBirthdayThisYear =
    ref.getMonth() > birth.getMonth() ||
    (ref.getMonth() === birth.getMonth() && ref.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
}
