class StudentProperties {
  constructor(name, lastName, birthYear) {
    this.name = name;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25);
    this.attendanceIndex = 0;
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  pushGrade(grade) {
    this.grades.push(grade);
  }

  present() {
    if (this.attendanceIndex >= 25) return;
    this.attendance[this.attendanceIndex] = true;
    this.attendanceIndex++;
  }

  absent() {
    if (this.attendanceIndex >= 25) return;
    this.attendance[this.attendanceIndex] = false;
    this.attendanceIndex++;
  }

  avgGrades() {
    const sumGrades = this.grades.reduce((a, b) => a + b, 0);
    const avgGrades = sumGrades / this.grades.length;

    return avgGrades;
  }

  avgAttendance() {
    const presentCount = this.attendance.filter(Boolean);
    const avgAttendance = presentCount.length / this.attendanceIndex;

    return avgAttendance;
  }

  summary() {
    if (!this.attendanceIndex) return "Немає даних";

    const avgGrades = this.avgGrades();
    const avgAttendance = this.avgAttendance();

    if (avgGrades > 90 && avgAttendance > 0.9) {
      return "Молодець";
    }
    if (avgGrades > 90 || avgAttendance > 0.9) {
      return "Добре, але можна краще";
    }

    return "Редиска";
  }
}

const student1 = new StudentProperties("Anton", "Galchihin", 2000);
const student2 = new StudentProperties("Nastia", "Shportko", 2001);
const student3 = new StudentProperties("Andriy", "Arefev", 2003);

