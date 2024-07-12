import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("dogs", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  raca: text("raca"),
  cor: text("cor"),
  genero: text("genero"),
  idade: integer("idade"),
  preco: integer("preco"),
  image: text("image"),
});
