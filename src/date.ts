/**
 * Check if provided string is valid iso date
 *
 * @param {string} value The value to check.
 * @return {boolean} Returns `true` if `value` is a valid iso date, else `false`.
 * @example
 * ```ts
 * isIsoDate("2022-12-27T07:40:25.551Z");
 * // => true
 *
 * isIsoDate("25/12/2022");
 * // => false
 * ```
 */
export function isIsoDate(value: string): boolean {
	if (!value || !/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value))
		return false;
	const date = new Date(value);
	return date.toISOString() === value;
}
