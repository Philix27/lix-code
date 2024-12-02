type IDateStyles = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: IDateStyles = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });

	return formatter.format(new Date(date));
}
