export default function formatCurrency(value) {
  if (isNaN(value)) return 'R$ 0,00';

  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
}
