CREATE TABLE "public.Usuarios" (
	"idu" serial NOT NULL,
	"nombre" varchar(255) NOT NULL,
	"correo" varchar(255) NOT NULL UNIQUE,
	"contraseña" varchar(255) NOT NULL,
	"reputacion" integer NOT NULL,
	"grado" integer NOT NULL,
	CONSTRAINT "Usuarios_pk" PRIMARY KEY ("idu")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Preguntas" (
	"idp" serial NOT NULL,
	"fk_idu" integer NOT NULL,
	"titulo" varchar(255) NOT NULL,
	"fecha" DATE NOT NULL,
	"descripcion" TEXT NOT NULL,
	CONSTRAINT "Preguntas_pk" PRIMARY KEY ("idp")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Respuestas" (
	"idr" serial NOT NULL,
	"fk_idu" integer NOT NULL,
	"fk_idp" integer NOT NULL,
	"descripcion" TEXT NOT NULL,
	"calificacion" integer NOT NULL,
	"fecha" DATE NOT NULL,
	CONSTRAINT "Respuestas_pk" PRIMARY KEY ("idr")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Asignaturas" (
	"ida" serial NOT NULL,
	"fk_idp" integer NOT NULL,
	"descripcion" serial NOT NULL,
	CONSTRAINT "Asignaturas_pk" PRIMARY KEY ("ida")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Preguntas" ADD CONSTRAINT "Preguntas_fk0" FOREIGN KEY ("fk_idu") REFERENCES "Usuarios"("idu");

ALTER TABLE "Respuestas" ADD CONSTRAINT "Respuestas_fk0" FOREIGN KEY ("fk_idu") REFERENCES "Usuarios"("idu");
ALTER TABLE "Respuestas" ADD CONSTRAINT "Respuestas_fk1" FOREIGN KEY ("fk_idp") REFERENCES "Preguntas"("idp");

ALTER TABLE "Asignaturas" ADD CONSTRAINT "Asignaturas_fk0" FOREIGN KEY ("fk_idp") REFERENCES "Preguntas"("idp");





