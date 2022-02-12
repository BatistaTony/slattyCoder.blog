export const transformDateToCustomString = (date: Date | string) => {
	const myDate = new Date(date)
	return myDate.toDateString()
}
