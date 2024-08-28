const formatCurrency = (currency) => {
  const formatted = currency.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return formatted;
};

const formatNotDisplayCurrency = (currency) => {
  const formatted = currency.toLocaleString("pt-br", {
    currency: "BRL",
  });
  return formatted;
};

export { formatCurrency, formatNotDisplayCurrency };
