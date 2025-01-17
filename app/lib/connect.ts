import { Users } from "@/database/models/user";
import { Dialect, Sequelize } from "sequelize";
import env from "@/env";
import mysql2 from "mysql2";
import { Categories } from "@/database/models/category";
import { Infos } from "@/database/models/info";
import { Courses } from "@/database/models/course";
import { Chapters } from "@/database/models/chapter";
import { Lessons } from "@/database/models/lesson";
import { TutorCourses } from "@/database/models/tutorcourse";
import { TutoringSessions } from "@/database/models/tutoringsession";
import { Combos } from "@/database/models/combo";
import { ComboCourses } from "@/database/models/combocourse";
import { CategoryCourses } from "@/database/models/categorycourse";
import { CategoryTutorCourses } from "@/database/models/categorytutorcourse";
import { Rates } from "@/database/models/rate";

const dbConfig = env.database;

const sequelize = new Sequelize(
  dbConfig.name,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect as Dialect,
    dialectModule: mysql2,
  }
);

Users.initClass(sequelize);
Infos.initClass(sequelize);
Categories.initClass(sequelize);
Courses.initClass(sequelize);
Chapters.initClass(sequelize);
Lessons.initClass(sequelize);
TutorCourses.initClass(sequelize);
TutoringSessions.initClass(sequelize);
Combos.initClass(sequelize);
ComboCourses.initClass(sequelize);
CategoryCourses.initClass(sequelize);
CategoryTutorCourses.initClass(sequelize);
Rates.initClass(sequelize);

Users.hasMany(Infos, { foreignKey: "userId" });
Infos.belongsTo(Users, { foreignKey: "userId" });

Categories.hasMany(CategoryCourses, { foreignKey: "categoryId" });
CategoryCourses.belongsTo(Categories, { foreignKey: "categoryId" });

Categories.hasMany(CategoryTutorCourses, { foreignKey: "categoryId" });
CategoryTutorCourses.belongsTo(Categories, { foreignKey: "categoryId" });

Courses.hasMany(Chapters, { foreignKey: "courseId" });
Chapters.belongsTo(Courses, { foreignKey: "courseId" });

Chapters.hasMany(Lessons, { foreignKey: "chapterId" });
Lessons.belongsTo(Chapters, { foreignKey: "chapterId" });

TutorCourses.hasMany(TutoringSessions, { foreignKey: "tutorCourseId" });
TutoringSessions.belongsTo(TutorCourses, { foreignKey: "tutorCourseId" });

Combos.hasMany(ComboCourses, { foreignKey: "comboId" });
ComboCourses.belongsTo(Combos, { foreignKey: "comboId" });

Courses.hasMany(ComboCourses, { foreignKey: "courseId" });
ComboCourses.belongsTo(Courses, { foreignKey: "courseId" });

TutorCourses.hasMany(Rates, { foreignKey: "tutorCourseId" });
Rates.belongsTo(TutorCourses, { foreignKey: "tutorCourseId" });

Courses.hasMany(Rates, { foreignKey: "courseId" });
Rates.belongsTo(Courses, { foreignKey: "courseId" });

Users.hasMany(Rates, { foreignKey: "userId" });
Rates.belongsTo(Users, { foreignKey: "userId" });

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const db = {
  sequelize,
  users: Users,
  infos: Infos,
  categories: Categories,
  courses: Courses,
  chapters: Chapters,
  lessons: Lessons,
  tutorCourses: TutorCourses,
  tutoringSessions: TutoringSessions,
  combos: Combos,
  comboCourses: ComboCourses,
  categoryCourses: CategoryCourses,
  categoryTutorCourses: CategoryTutorCourses,
  rates: Rates,
  connectToDatabase,
};

export default db;
