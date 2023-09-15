import { format as dateFnsFormat } from "date-fns";

export const getFormattedDate = (date, format = "dd MMMM yyyy") => {
    if (!date) return null;
    return dateFnsFormat(date, format);
};
