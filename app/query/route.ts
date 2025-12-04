import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// тестовый запрос
// Выполнение запросов
// чтобы убедиться, что всё работает как надо. Мы воспользуемся ещё одним обработчиком маршрутов — app/query/route.ts — чтобы обратиться к базе данных. Внутри этого файла ты найдёшь функцию listInvoices(), содержащую следующий SQL-запрос:
// Раскомментируй следующую функцию listInvoices

// async function listInvoices() {
//   const data = await sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;
//   return data;
// }

export async function GET() {
  //  закомментируй блок Response.json()
  return Response.json({
    message:
      "Uncomment this file and remove this line. You can delete this file when you are finished.",
  });

  // Раскомментируй блок ниже
  // try {
  //   return Response.json(await listInvoices());
  // } catch (error) {
  //   return Response.json({ error }, { status: 500 });
  // }
}

// и перейди в браузере на localhost:3000/query
