export function formatPhone(phone: string) {
  var formatNumber;
  if (phone.length === 13) {
    formatNumber = phone.match(/(\d{2})(\d{2})(\d{5})(\d{4})/);
    if (formatNumber)
      return (
        "+ " +
        formatNumber[1] +
        " (" +
        formatNumber[2] +
        ") " +
        formatNumber[3] +
        "-" +
        formatNumber[4]
      );
  } else if (phone.length === 11) {
    formatNumber = phone.match(/(\d{2})(\d{5})(\d{4})/);
  }

  formatNumber = phone.match(/(\d{2})(\d{4})(\d{4})/);

  if (formatNumber)
    return (
      "(" + formatNumber[1] + ") " + formatNumber[2] + "-" + formatNumber[3]
    );
  return "finalNumber";
}
