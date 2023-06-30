export function formatDataManga(manga) {
    const formatDateString = (date) => {
      if (date && date.day && date.month && date.year) {
        return `${date.day}/${date.month}/${date.year}`;
      } else {
        return "--/--/----";
      }
    };
  
    const getFormattedStartDate = () => {
      return formatDateString(manga.published.prop.from);
    };
  
    const getFormattedEndDate = () => {
      return formatDateString(manga.published.prop.to);
    };
  
    return {
      getFormattedStartDate,
      getFormattedEndDate
    };
  }
  