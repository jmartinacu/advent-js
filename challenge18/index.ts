function findInAgenda(
  agenda: string,
  phone: string,
): { name: string; address: string } | null {
  let result = null;
  const contacts = agenda.split("\n");
  for (const contact of contacts) {
    if (contact.includes(phone)) {
      if (result) return null;
      const nameMatch = contact.match(/<([^>]+)>/)!;
      const name = nameMatch[1];
      const address = contact.replace(nameMatch[0], "").split(" ").filter(
        (part) => !part.includes("+"),
      ).join(" ").trim();
      result = { name, address };
    }
  }
  return result;
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, "34-600-123-456"));
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, "600-987"));
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, "111"));
// null
// Explicación: No hay resultados

console.log(findInAgenda(agenda, "1"));
// null
// Explicación: Demasiados resultados
