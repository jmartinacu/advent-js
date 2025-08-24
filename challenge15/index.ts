function drawTable(data: Array<Record<string, string | number>>): string {
  let result = "";
  const groupedData = data.reduce(
    (acc, obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
        if (!acc[formattedKey]) {
          acc[formattedKey] = [];
        }
        acc[formattedKey].push(value);
      });
      return acc;
    },
    {} as Record<string, Array<string | number>>,
  );
  const headers = Object.keys(groupedData);
  const rows = Object.values(groupedData);
  const columnWidths = headers.map((header, index) => {
    const maxDataWidth = Math.max(
      ...rows[index].map((item) => item.toString().length),
    );
    return Math.max(header.length, maxDataWidth);
  });
  const separatorRow = `+${
    columnWidths
      .map((width) => "-".repeat(width + 2))
      .join("+")
  }+\n`;
  const lastRow = `+${
    columnWidths
      .map((width) => "-".repeat(width + 2))
      .join("+")
  }+`;
  const headerRow = `|${
    headers
      .map((header, index) => ` ${header.padEnd(columnWidths[index])} `)
      .join("|")
  }|\n`;
  let dataRows = "";
  for (let i = 0; i < data.length; i++) {
    const row = `|${
      rows
        .map((col, index) =>
          ` ${col[i].toString().padEnd(columnWidths[index])} `
        )
        .join("|")
    }|\n`;
    dataRows += row;
  }
  result += separatorRow;
  result += headerRow;
  result += separatorRow;
  result += dataRows;
  result += lastRow;
  return result;
}

console.log(drawTable([
  { name: "Alice", city: "London" },
  { name: "Bob", city: "Paris" },
  { name: "Charlie", city: "New York" },
]));
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(drawTable([
  { gift: "Doll", quantity: 10 },
  { gift: "Book", quantity: 5 },
  { gift: "Music CD", quantity: 1 },
]));
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
