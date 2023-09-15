import { format as dateFnsFormat, isValid, parseISO } from "date-fns";

export const getFormattedDate = (date, format = "dd MMMM yyyy") => {
    if (!date && !isValid(date)) return null;
    return dateFnsFormat(parseISO(date), format);
};
