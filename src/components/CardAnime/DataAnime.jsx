export function formatDataAnime(anime) {
    const formatDateString = (date) => {
      if (date && date.day && date.month && date.year) {
        return `${date.day}/${date.month}/${date.year}`;
      } else {
        return "--/--/----";
      }
    };
  
    const getFormattedStartDate = () => {
      return formatDateString(anime.aired.prop.from);
    };
  
    const getFormattedEndDate = () => {
      return formatDateString(anime.aired.prop.to);
    };
  
    return {
      getFormattedStartDate,
      getFormattedEndDate
    };
  }
  